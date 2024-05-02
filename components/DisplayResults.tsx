type DisplayResultProps = {
  age: number | null;
  gender: string | null;
  country: string | null;
};

const DisplayResult: React.FC<DisplayResultProps> = ({
  age,
  gender,
  country,
}) => {
  return (
    <div>
      <h2 style={{ color: "purple" }}>Guessed Information For a Given Name</h2>
      <p>
        Guessed Age: <span style={{ color: "green" }}>{age}</span>
      </p>
      <p>
        Guessed Gender: <span style={{ color: "green" }}>{gender}</span>
      </p>
      <p>
        Guessed Country: <span style={{ color: "green" }}>{country}</span>
      </p>
    </div>
  );
};

export default DisplayResult;
