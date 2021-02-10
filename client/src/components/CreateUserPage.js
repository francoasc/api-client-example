import React, { useState } from "react";
import axios from "axios";

function CreateUserPage() {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const handleInputSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post("http://localhost:4001/api/users", { name: input });
      setLoading(false);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div>
          <form onSubmit={handleInputSubmit}>
            <input
              type="text"
              placeholder="Name..."
              onChange={handleInputChange}
            />
            <button type="submit">Create User!</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateUserPage;
