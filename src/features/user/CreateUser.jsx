import { useState } from "react";
import Buttons from "../../ui/components/Buttons";
import Inputs from "../../ui/components/Inputs";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="m-2">👋 Welcome! Please start by telling us your name:</p>
      <Inputs
        type="text"
        placeholder="Your full name"
        value={username}
        customStyles="w-72 mb-8"
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div>
          <Buttons type="primary">Start ordering</Buttons>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
