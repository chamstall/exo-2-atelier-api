const URL = "http://localhost:3000/utilisateurs";

// fonction pour recuperer tous les utilisateurs (READ)
function getUsers() {
    fetch(URL).then(response => response.json())
        .then(users => {
            console.log("utilisateurs recuperés avec succes", users);
        }) //le users represente ici les donés renvoyés par le serveur cad les data
        .catch(error => {
            console.log("erreur lors de la recuperation des users", error);
        });
}

// fonction pour recuperer un utilisateur par son ID (READ)
function getUserById(userId) {
    fetch(`${URL}/${userId}`)
        .then(response => response.json())
        .then(user1 => {
            console.log("utilisateur avec id 1 recuperé avec succes", user1);
        })
        .catch(error => {
            console.error("Erreur lors de la récupération de l\'utilisateur:", error);
        });
};

// fonction pour creer un nouvel utilisateur
function createUser(newUser) {
    fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    })
        .then(response => response.json())
        .then(users => console.log("nouvel user créé avec succes", users))
        .catch(error => console.error("Erreur lors de la creation du nouvel utilisateur", error));
};

// fonction pour mettre à jour un utilisateur existant (UPDATE)

function updateUser(userId, updatedUser) {
    fetch(`${URL}/${userId}`, {
        // je specifie la requete
        method: "PUT", //la methode de la requete
        headers: {   //l'entete de la requete
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedUser) //le corps de la requete
        // updateduser est un objet qui va contenir les informations du nouvel user
    })
        .then(response => response.json())
        .then(userUpdated => console.log("utilisateur avec l'id 2 mis à jour avec succes", userUpdated))
        .catch(error => console.log("erreur lors de la mise à jour de l'utilisateur avec l'id 2", error));
};

// fonction pour supprimer un utilisateur existant (DELETE)

function deleteUser(userId) {
    fetch(`${URL}/${userId}`, {
        // je specifie la requete
        method: "DELETE"
    })
    .then(response => response.json())
    .then(userDeleted =>console.log("l'utilisateur avec l'id 1 a été supprimé avec success", userDeleted))
    .catch(error =>console.log("erreur lors de la suppression de l'utilisateur avec l'id 3", error));
};

// ************************APPEL DES FONCTIONS*******************************

// appel de la fonction getUsers() pour recuperer tous les utilisateurs.
getUsers()

// Exemple d'appel pour récupérer un utilisateur par son ID (par exemple, utilisateur avec l'ID 1)

let bouton2 = document.querySelector("#button2");
bouton2.addEventListener("click", function () {
    getUserById(1)
})


// appel de la fonction createUser() pour creer un nouvel utilisateur
let bouton1 = document.querySelector("#button1");
const newUser = {
    nom: "Abou",
    age: 33
}
bouton1.addEventListener("click", function () {
    createUser(newUser);
})


// Exemple d'appel pour mettre à jour un utilisateur existant
//  (par exemple, l'utilisateur avec l'ID 2)

let bouton3 = document.querySelector("#button3");
const updatedUser = {
    "nom": "Utilisateur mis à jour",
    "age": 35
}
bouton3.addEventListener("click", function () {
    updateUser(2, updatedUser);
})

// Exemple d'appel pour supprimer un utilisateur existant
//  (par exemple, l'utilisateur avec l'ID 3)

let bouton4 = document.querySelector("#button4");
bouton4.addEventListener("click", function () {
    deleteUser(1);
})



