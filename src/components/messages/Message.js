import React from 'react';

/**
 * représente les différents messages des users
 * 
 * @param {*} props : propriétés reçues par le parent
 */
export function Message(props) {

    let typeMessage = {
        "otherDiv": "otherDiv",
        "other": "otherMessage",
        "selfDiv": "selfDiv",
        "self": "selfMessage",
    };
    let creatorMessage = function(){

        let output = false;

        if (props.userData.username === props.messageData.username) {

            output = true;
        }
        return output;
    };

    return <div className={(props.userData.username == props.messageData.username ? typeMessage['selfDiv'] : typeMessage['otherDiv'])}>

        <p className={(props.userData.username == props.messageData.username ? typeMessage['self'] : typeMessage['other'])}>{props.messageData.username}: {props.messageData.content}</p>
    </div>;
}