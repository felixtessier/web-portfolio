import { NextRequest, NextResponse } from 'next/server';
import MailerLite from '@mailerlite/mailerlite-nodejs';

// Add type for the expected request body
type SubscribeRequest = {
  email: string;
};

const mailerlite = new MailerLite({
  api_key: process.env.MAILERLITE_API_TOKEN || '',
});

export async function POST(request: NextRequest) {
  try {
    const { email } = (await request.json()) as SubscribeRequest;

    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    const groupId = process.env.MAILERLITE_GROUP_ID;
    if (!groupId) {
      throw new Error('MAILERLITE_GROUP_ID is not configured');
    }

    const params = {
      email: email.trim().toLowerCase(),
      groups: [groupId],
    };

    const response = await mailerlite.subscribers
      .createOrUpdate(params)
      .then((response) => {
        console.log(response.data);
        return response;
      })
      .catch((error) => {
        if (error.response) console.log(error.response.data);
        throw error;
      });

    return NextResponse.json(
      { success: true, id: response.data.data.id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    );
  }
}
