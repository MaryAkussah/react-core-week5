import { useState } from "react";

type Props = {
  onAddPost: (title: string) => void;
};

function PostForm({ onAddPost }: Props) {
  const [title, setTitle] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title) return;

    onAddPost(title);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default PostForm;
