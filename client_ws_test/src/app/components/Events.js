import React, { useEffect} from 'react';
import { Message } from './Message';

export function Events({ events, my_login }) {
    const element = document.getElementById("el")
    if(element){
      element.scrollIntoView({behavior: "instant"});
    }
  return (
    <div className={"msg-box"}>
    <ul>
    {
      events.map((event, index) =>
        <Message msg={event.msg} login={event.login} my_login={my_login == event.login} index={index} admin={event.admin}/>
      )
    }
    </ul>
    <br></br>
    <div id={"el"}/>
    </div>
  );
}