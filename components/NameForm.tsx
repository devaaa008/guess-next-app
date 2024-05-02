import { useState } from "react";

type NameFormProps = {
  onSubmit: (name: string) => void;
};

const NameForm: React.FC<NameFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(name);
  };

  return (
    <form onSubmit={handleSubmit} className="formContainer">
      <div className="inputContainer">
        <label>
          Enter name:
          <input
            type="text"
            style={{
              color: "black",
              border: "1px solid #ccc",
              padding: "10px",
            }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div className="buttonContainer">
        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default NameForm;
