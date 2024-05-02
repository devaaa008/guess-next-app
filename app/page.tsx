"use client";
import { useState } from "react";
import NameForm from "../components/NameForm";
import DisplayResult from "../components/DisplayResults";

export default function Home() {
  const [age, setAge] = useState<number | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [country, setCountry] = useState<string | null>(null);

  const handleSubmit = async (name: string) => {
    try {
      const ageResponse = await fetch(`https://api.agify.io?name=${name}`);
      const { age } = await ageResponse.json();
      setAge(age);

      const genderResponse = await fetch(
        `https://api.genderize.io?name=${name}`
      );
      const { gender } = await genderResponse.json();
      setGender(gender);

      const countryResponse = await fetch(
        `https://api.nationalize.io?name=${name}`
      );
      const { country } = await countryResponse.json();
      const topCountry = country[0]?.country_id; // Get the country with the highest probability
      setCountry(topCountry);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="mainContainer">
      <h1 className="heading">Guess Age, Gender, and Country</h1>
      <NameForm onSubmit={handleSubmit} />
      {age !== null && gender !== null && country !== null && (
        <DisplayResult age={age} gender={gender} country={country} />
      )}
    </div>
  );
}

// export default HomePage;
