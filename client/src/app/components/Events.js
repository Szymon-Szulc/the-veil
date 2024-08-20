import React, { useEffect} from 'react';

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
        <li key={ index } className={event.login == my_login ? "msg-my": "msg-other"}>{ event.msg }</li>
      )
    }
    </ul>
    <br></br>
    <div id={"el"}/>
    </div>
  );
}