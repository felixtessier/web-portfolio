import { NextRequest, NextResponse } from 'next/server';
import MailerLiteClient from '@mailerlite/mailerlite-nodejs';

const mailerlite = new MailerLiteClient({
  api_key: process.env.MAILERLITE_API_TOKEN!,
});

export async function POST(request: NextRequest) {
  const { email } = await request.json();
  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  try {
    const response = await mailerlite.subscribers.createOrUpdate({ email });
    const subscriberId = response.data.data.id;

    const groupId = process.env.MAILERLITE_GROUP_ID!;
    await mailerlite.groups.assignSubscriber(groupId, subscriberId);

    return NextResponse.json(
      { success: true, id: response.data.data.id },
      { status: 201 }
    );
  } catch (e: any) {
    return NextResponse.json(
      { error: e.response?.data?.message || e.message },
      { status: 400 }
    );
  }
}
