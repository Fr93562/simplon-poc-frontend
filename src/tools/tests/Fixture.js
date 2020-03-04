/**
 * renvoie un jeu de données pour les tests
 */
export function getFixtures() {

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
            "id": 6,
            "username": "Sarah",
            "content": "Bien!"
        },
        {
            "id": 5,
            "username": "Mickael",
            "content": "Je te propose de sortir au restaurant ce soir."
        }
    ];

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