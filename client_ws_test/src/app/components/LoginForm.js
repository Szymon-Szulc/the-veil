import React, { useState } from 'react';
import { socket } from '../socket';

export function LoginForm() {
  const [room, setRoom] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    socket.timeout(5000).emit('join', {"user":login, "room":room}, () => {
      setIsLoading(false);
    });
  }

  return (
    <form onSubmit={ onSubmit }>
    login:
      <input onChange={ e => setLogin(e.target.value) } />
      pokoj:
      <input onChange={ e => setRoom(e.target.value) } />

      <button type="submit" disabled={ isLoading }>Submit</button>
    </form>
  );
}