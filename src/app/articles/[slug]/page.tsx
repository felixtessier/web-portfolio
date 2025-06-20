export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/${slug}.mdx`);

  return <Post />;
}

export function generateStaticParams() {
  return [
    { slug: 'why-i-became-a-software-developer' },
    { slug: 'understanding-react-hooks' },
  ];
}

export const dynamicParams = false;
