/**
 * renvoie un jeu de données pour les tests
 */
export function getFixtures(data) {

    let fixtures = [
        {
            "id": 1,
            "username": "Mickael",
            "content": "Bonjour tout le monde!"
        },
        {
            "id": 2,
            "username": "Sarah",
            "content": "La forme?"
        },
        {
            "id": 3,
            "username": "Mickael",
            "content": "Super et toi??"
        },
        {
            "id": 5,
            "username": "Sarah",
            "content": "Bien!"
        },
        {
            "id": 6,
            "username": "Mickael",
            "content": "Je te propose de sortir au restaurant ce soir."
        }
    ];

    if(data != null) {

        fixtures.push(data);
    } 

    console.log(fixtures.length);

    return fixtures;
}

export function getUser() {

    let fixtures = {
        "id": 1,
        "username": "Mickael",
        "password0": "je sais plus",
        "email": "test@test.fr"
    }
    return fixtures;
}