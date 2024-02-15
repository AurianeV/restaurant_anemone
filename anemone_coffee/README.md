Guide de Lecture - Installation du Projet
Ce guide vous aidera à installer et à exécuter le projet Anemone Coffee sur votre environnement local.
Prérequis
Avant de commencer, assurez-vous que votre système dispose des éléments suivants :
Node.js installé (version 14.x ou supérieure)
MongoDB installé et en cours d'exécution sur le port par défaut (27017)
Un éditeur de texte ou un environnement de développement intégré (IDE)

Étapes d'Installation
1. Clonage du Référentiel
Commencez par cloner le référentiel GitHub du projet sur votre machine locale à l'aide de la commande suivante :
git clone <URL_DU_RÉFÉRENTIEL>

2. Installation des Dépendances
Accédez au répertoire du projet nouvellement cloné et installez les dépendances à l'aide de la commande suivante :

"dependencies": {
    "@googlemaps/react-wrapper": "^1.1.35",
    "axios": "^1.6.5",
    "bcrypt": "^5.1.1",
    "bootstrap": "^5.3.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "i18next": "^23.6.0",
    "intersection-observer": "^0.12.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.1.0",
    "nodemailer": "^6.9.9",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-i18next": "^13.3.1",
    "react-modal": "^3.16.1",
    "react-router-dom": "^6.22.0"
  },

cd anemone_coffee

npm i 



3. Configuration de l'Environnement
Assurez-vous de configurer les variables d'environnement nécessaires. Vous pouvez trouver un exemple de fichier .env dans le projet. Copiez-le et renommez-le en .env en fournissant les valeurs appropriées.
4. Démarrage du Serveur
Une fois les dépendances installées et l'environnement configuré, démarrez le serveur avec la commande suivante :
bash

Copy code
npm start
5. Accès à l'Application
Après avoir démarré le serveur, l'application devrait être accessible à l'adresse http://localhost:PORT dans votre navigateur, où PORT est le port sur lequel le serveur est en cours d'exécution.
Conclusion
Félicitations ! Vous avez maintenant installé avec succès le projet Anemone Coffee sur votre machine locale. Vous pouvez maintenant explorer l'application et commencer à l'utiliser.
Si vous rencontrez des problèmes lors de l'installation ou si vous avez des questions, n'hésitez pas à contacter l'équipe de développement pour obtenir de l'aide supplémentaire.
