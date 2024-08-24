"use client";
import { useRouter } from 'next/navigation'
import React, { useState } from "react";

export default function Home() {
  const router = useRouter()
  return (
    <main className=" w-screen h-screen  flex items-center justify-center">
      {router.push('/login', { scroll: false })}
    </main>
  );
}
