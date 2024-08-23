"use client";

import Image from "next/image";
import { LoginForm } from "./components/LoginForm";
import React, { useState } from "react";

export default function Home() {
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");

  function LoginSubmit(event) {
    event.preventDefault();
    fetch("http://test.the-veil.pl:6001/login", {
      method: "POST",
      mode: "cors",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ 'email': Email, 'password': Password }),
    }).then((res) => {
      return res.json();
    }).then(res => {
      console.log(res)
    })
    console.log("zalogowano jako " + Email);
  }

  return (
    <main className="bg-dark-forrest w-screen h-screen bg-cover bg-center flex items-center justify-center">
      <LoginForm
        OnChangeEmail={(e) => SetEmail(e.target.value)}
        OnChangePassword={(e) => SetPassword(e.target.value)}
        OnSubmit={LoginSubmit}
      />
    </main>
  );
}
