type Post = {
  id: number;
  title: string;
};

type Props = {
  posts: Post[];
};

function PostList({ posts }: Props) {
  if (posts.length === 0) {
    return <p>No posts yet</p>;
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default PostList;
