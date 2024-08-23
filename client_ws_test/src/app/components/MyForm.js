import React, { useState } from 'react';
import { socket } from '../socket';

export function MyForm({login, onChangeLogin, inRoom, room, onChangeRoom}) {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
//   const [login, setLogin] = useState('');
//   const [room, setRoom] = useState('');

  function onLogin(event) {
    event.preventDefault();
    setIsLoading(true);

    socket.timeout(5000).emit('join', {"user":login, "room":room}, () => {
      setIsLoading(false);
    });
  }

  function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    socket.timeout(5000).emit('create-something', {"login":login, "message": value, "room": room, "from": login}, () => {
      setIsLoading(false);
        setValue("")
        
    });
  }
if (inRoom == true){
    return (
        <div className={"msg-foot"}>
        <form onSubmit={ onSubmit }>
          <div><input claclassNamess={"msg-field"} onChange={ e => setValue(e.target.value) } value={value} /></div>
    
          <div className={"msg-nav"}><button className={"msg-send"} type="submit" disabled={ isLoading }>Wyślij</button></div>
        </form>
        </div>
      );
}else{
    return (
        <form onSubmit={ onLogin }>
        login:
          <input onChange={onChangeLogin } />
          pokoj:
          <input onChange={ onChangeRoom} />
    
          <button type="submit" disabled={ isLoading }>Submit</button>
        </form>
      );
}
 
}