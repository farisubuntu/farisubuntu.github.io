export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Article } = await import(`@/docs/${slug}/index.md`);

  return (
    <div>
      <Article />
    </div>
  );
}
