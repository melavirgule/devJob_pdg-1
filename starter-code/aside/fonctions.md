# Définition des fonctions

## Desktop / Accueil

### => Dark mode
    Toggle qui passe une variable de false à true

    Si darkMode est true alors applique la classe "dark"
    Sinon rien

### => Search form
    3 champs + 1 bouton qui submit

    Un champ de recherche type text qui permet de rechercher par mot-clé dans la clé "position" du fichier Json
        - Pour chaque objet de data.json
            Si la clé Position contient la value du champ texte
                Alors affiche l'objet concerné

    Un champ localisation sous form de dropdown qui permet de cliquer sur la/les villes qu'on souhaite
        - Pour chaque objet de data.json
            Si la clé Location contient la value du dropdown
                Alors affiche l'objet concerné

    Un champ remote sous form de checkbox qui passe de false à true et qui permet de n'afficher que les stage en distanciel
        - Pour chaque objet de data.json
            Si la clé Remote est True
                Alors affiche l'objet concerné

### => Affichage dynamique des annonces
    - Pour chaque objet de data.json
        Affiche : 
          - logo de l'entreprise
          - date d'ajout
          - remote ou non
          - nom de l'offre
          - non de l'entreprise
          - localisation

    Chaque annonce est cliquable et renvoie sur une page détails de cette annonce

### => Load more
    - Au clic du bouton Load More
        Affiche X nombre supplémentaires d'annonces
------------ 
## Desktop / Details 

### => Dark mode
    Toggle qui passe une variable de false à true

    Si darkMode est true alors applique la classe "dark"
    Sinon rien

### => Apply / postuler
    Renvoi vers un formulaire pour postuler à l'annonce

-----------------

## Mobile / Accueil

### => Search form
    1 champ + 1 bouton pour afficher plus d'options + 1 bouton qui submit

    Un champ de recherche type text qui permet de rechercher par mot-clé dans la clé "position" du fichier Json
        - Pour chaque objet de data.json
            Si la clé Position contient la value du champ texte
                Alors affiche l'objet concerné

    Un bouton + qui ouvre une modale de type form avec
        Un champ localisation sous form de dropdown qui permet de cliquer sur la/les villes qu'on souhaite
          - Pour chaque objet de data.json
              Si la clé Location contient la value du dropdown
                  Alors affiche l'objet concerné
        Un champ remote sous form de checkbox qui passe de false à true et qui permet de n'afficher que les stage en distanciel
            - Pour chaque objet de data.json
                Si la clé Remote est True
                    Alors affiche l'objet concerné
    
    Un bouton submit