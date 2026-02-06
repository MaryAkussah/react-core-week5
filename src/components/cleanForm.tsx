import useInput from "../hooks/useInput";

function CleanForm() {
  const name = useInput("");
  const email = useInput("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(name.value, email.value);

    name.reset();
    email.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" {...name} />
      <input placeholder="Email" {...email} />
      <button>Submit</button>
    </form>
  );
}

export default CleanForm;
