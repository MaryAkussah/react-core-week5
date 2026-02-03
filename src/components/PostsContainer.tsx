import { useState } from "react";
import PostForm from "./PostForm";
import PostList from "./PostList";

type Post = {
  id: number;
  title: string;
};

function PostsContainer() {
  const [posts, setPosts] = useState<Post[]>([]);

  function addPost(title: string) {
    setPosts((prev) => [
      { id: Date.now(), title },
      ...prev,
    ]);
  }

  return (
    <div>
      <PostForm onAddPost={addPost} />
      <PostList posts={posts} />
    </div>
  );
}

export default PostsContainer;
