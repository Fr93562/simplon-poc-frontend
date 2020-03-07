import React from 'react';

/**
 * Objet qui gère la connexion à l'Api
 * @author: François Macko
 */
export class Connexion {

    type = 'json';
    dataType = null;

    url = 'http://localhost:8080/';
    urlPrepared = null;

    method = { "create": 'POST', "read": 'GET', "update": 'PUT', "delete": 'DELETE' };
    methodPrepared = null;

    constructor() {

    }


    /**
     * Prépare la requête qui sera envoyé en Json
     * @param {*} urlRequest : indique l'adresse de la requête 
     * @param {*} urlMethod : indique le type de requête
     */
    preparedRequest(urlRequest, urlMethod) {

        this.urlPrepared = this.url + urlRequest;
        this.methodPrepared = this.method[urlMethod];
    }

    /**
     * Envoie la requête avec les paramètres chargés
     * Renvoie une réponse au format Json
     */
    sendRequest(data) {

        var request = new XMLHttpRequest()

        request.open(this.methodPrepared, this.urlPrepared);
        request.responseType = this.type;
        request.setRequestHeader("Content-Type", "application/json");
        request.send(data);

        request.onload = function () {

            return request.response;
        }
    }
}

export default Connexion