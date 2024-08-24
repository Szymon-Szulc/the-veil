"use client";
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { LoginForm } from "./components/LoginForm";
import React, { useState } from "react";

export default function Home() {
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const router = useRouter()
  function LoginSubmit(event) {
    event.preventDefault();
    fetch(`http://test.the-veil.pl:6001/login?email=${Email}&password=${Password}`, {
      method: "GET",
      mode: "cors",
      headers: { "Content-type": "application/json" },
    }).then((res) => {
      console.log(res.ok)
      if (res.ok){
        router.push('/dashboard', { scroll: false })
      }
      
    }).then(res => {
      console.log(res)
    })
    console.log("zalogowano jako " + Email);
  }

  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <Link href="/test">test</Link>
      <LoginForm
        OnChangeEmail={(e) => SetEmail(e.target.value)}
        OnChangePassword={(e) => SetPassword(e.target.value)}
        OnSubmit={LoginSubmit}
      />
    </main>
  );
}
