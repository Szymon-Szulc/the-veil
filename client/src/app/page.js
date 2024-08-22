'use client'

import React, { useState, useEffect } from 'react';
import { socket } from './socket';
import { ConnectionState } from './components/ConnectionState';
import { ConnectionManager } from './components/ConnectionManager';
import { Events } from "./components/Events";
import { LoginForm } from './components/LoginForm';
import { MyForm } from './components/MyForm';
export default function Home() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);
  const [inRoom, setInRoom] = useState(false)
  const [login, setLogin] = useState('');
  const [room, setRoom] = useState('')

  function onChangeLogin(e){
    setLogin(e.target.value)
  }
  function onChangeRoom(e){
    setRoom(e.target.value)
    
  }

  function emitLeave(){
    console.log(room, login)
    socket.emit("leave", {"room": room, "user": login})
  }

  useEffect(() => {
    const onBeforeUnload = (ev) => {
      emitLeave()
      ev.returnValue = "test"
    }

    window.addEventListener("beforeunload", onBeforeUnload);

    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFooEvent(value) {
      setFooEvents(previous => [...previous, value]);
      
    }

    function onSuccess(value){
        setInRoom(true)
      }

    
    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('foo', onFooEvent);
    socket.on("success", onSuccess)

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onFooEvent);
      socket.off("success", onSuccess)
      window.removeEventListener('beforeunload', onBeforeUnload);
    };
  }, []);

  return (
    <div className="App">
      <div className="InfoBox">
      <div className={isConnected ? "online" : "offline"}></div>
      <center className={inRoom == false ? "hide" : "show"}>Logged as: {login}. In room: {room}</center>
      </div>
      <div className={inRoom == false ? "hide" : "show"}><Events  events={ fooEvents } my_login={login} /></div>
      <MyForm inRoom={inRoom} login={login} onChangeLogin={onChangeLogin} room={room} onChangeRoom={onChangeRoom}/>
      
      
    </div>
  );
}
