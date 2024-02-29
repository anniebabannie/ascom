interface Preview {
  title: string;
  date: string;
  slug: string;
  url: string;
  excerpt: string;
}
export default function PostPreview({ post }: { post: Preview }) {
  return (
    <a href={post.url} className="py-8 px-10 block">
      <h2>{post.title}</h2>
      <time dateTime={post.date}>{post.date}</time>
      <small>{post.excerpt}</small>
    </a>
  );

}