'use client'

import { useState } from "react";
import { CustomClient } from "./components/CustomClient"

let identifier: number;
const generateId = () => {
  let time = new Date().getMilliseconds();
  identifier = time;
}
generateId()

const Home = () => {
  const [avatar, setAvatar] = useState("https://staticg.sportskeeda.com/editor/2022/08/53e15-16596004347246.png?w=840");
  const [name, setName] = useState("Naruto Uzumaki");
  const [description, setDescription] = useState("Naruto Uzumaki is the titular protagonist of the manga Naruto, created by Masashi Kishimoto. As the series progresses, he is a young ninja from the fictional village of Konohagakure");

  const updateUserData = () => {
    let newAvatar: any = prompt();
    let newName: any = prompt();
    let newDescription: any = prompt();

    setAvatar(newAvatar);
    setName(newName);
    setDescription(newDescription);
  }

  return <>
    <h1 className="text-3xl font-bold text-center mb-3">
      Custom User
    </h1>
    <div className="max-w-2xl m-auto">
      <CustomClient
        avatar={avatar}
        name={name}
        description={description}
        onClick={updateUserData}
        key={identifier}
      />
    </div>
  </>
}

export default Home;