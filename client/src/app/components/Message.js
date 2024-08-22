import React from "react"

export function Message({msg, login, my_login, index, admin}){

    function GetClass(){
        if(admin){
            return "msg-admin"
        }else if(my_login){
            return "msg-my"
        }else{
            return "msg-other"
        }
    }

    function GetMsg(){
        if(admin){
            return "Server: " + msg
        }else if(my_login){
            return msg
        }else{
            return login + ": " + msg
        }
    }

    return (
        <li key={ index } className={GetClass()}>{ GetMsg() }</li>
    )
}