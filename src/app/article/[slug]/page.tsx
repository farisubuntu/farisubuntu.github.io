export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Article } = await import(`@/docs/${slug}/index.mdx`);

  return (
    <>
      <h1>{slug}</h1>

      <div>
        <Article />
      </div>
    </>
  );
}
