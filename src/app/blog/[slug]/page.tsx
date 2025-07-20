export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/${slug}.mdx`);

  return (
    <div
      className="opacity-0 animate-[fade-in-up_0.7s_ease_forwards]"
      style={{
        animationName: 'fade-in-up',
        animationDuration: '0.7s',
        animationTimingFunction: 'ease',
        animationFillMode: 'forwards',
      }}
    >
      <style>
        {`
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
      <Post />
    </div>
  );
}

export function generateStaticParams() {
  return [
    { slug: 'from-highschool-to-software-developer' },
    { slug: 'understanding-react-hooks' },
  ];
}

export const dynamicParams = false;
