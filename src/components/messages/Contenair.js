import React from 'react';

import { Message } from './Message';

/**
 * composant qui va contenir les différents messages des users
 * 
 * @param {*} props : propriétés reçues par le parent
 */
export function Contenair(props) {

  console.log(props.messageData.length);

  const messageList = props.messageData;
  const listItems = messageList.map((messageAlone) =>
    
    <Message key={messageAlone.id} messageData={messageAlone} userData={props.userData}/>
  );

  return <div className="mesageContenair">

    {listItems}
  </div>;
}