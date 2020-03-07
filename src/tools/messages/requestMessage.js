import React from 'react';
import { getFixtures, getUser } from '../tests/Fixture';
import { createPortal } from 'react-dom';

import { Connexion } from '../config/Connexion';

/**
 * renvoie un jeu de données pour les tests
 */
export function sendMessage(data) {

    let listLength = getFixtures().length;
    let lastElement = getFixtures()[listLength - 1].id;
    let initialId = lastElement + 1;
    
    let message = {
        "id": initialId,
        "username": getUser().username,
        "content": data
    };

    let request = new Connexion();
    request.preparedRequest("message" , "create");
    request.sendRequest(message);


    getFixtures(message);
}

export function requestMessage() {

    let request = new Connexion();
    request.preparedRequest("message" , "read");
    // request.sendRequest(null);

    request.sendRequest(null).then(function (result) {

        console.log(result);
    });
}