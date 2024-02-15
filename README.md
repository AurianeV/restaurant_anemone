# restaurant_anemone

Anemone Coffee

Anemone Coffee est une application web conernant l'ouverture d'un café, développée en utilisant React.js pour le frontend et Node.js pour le backend.

Installation

Prérequis
Assurez-vous d'avoir Node.js et npm installés sur votre machine. Vous pouvez les télécharger et les installer depuis le site officiel de Node.js.

Étapes d'installation

- Clonez ce dépôt sur votre machine en utilisant la commande suivante :
git clone https://github.com/votre-utilisateur/anemone_coffee.git

- Accédez au répertoire du projet :
cd anemone_coffee

- Installez les dépendances pour le frontend et le backend en exécutant les commandes suivantes :
Pour le frontend :
npm install

Pour le backend :
cd server
npm install

Créez un fichier .env à la racine du répertoire server et configurez les variables d'environnement selon vos besoins.

Lancez le serveur de développement pour le frontend :
npm run dev

Lancez le serveur de développement pour le backend :
npm nodemon index.js

L'application devrait maintenant être accessible à l'adresse http://localhost:3000 dans votre navigateur.

- Dépendances à installer :

Pour le Frontend

- axios - Client HTTP pour effectuer des requêtes AJAX : npm install axios
- bcrypt - Cryptage des mots de passe : npm install bcrypt
- dotenv - Chargement des variables d'environnement à partir d'un fichier .env : npm install dotenv --save
- npm install i18next react-i18next
- npm install intersection-observer
- npm install react-router-dom@latest
- npm install react-modal  

Pour le Backend
  
- cors - Middleware permettant les requêtes HTTP entre différents domaines : npm install cors
- express - Framework pour les applications web Node.js : npm install express
- jsonwebtoken - Génération de JWT pour l'authentification : npm install jsonwebtoken
- mongoose - ODM pour MongoDB : npm install mongoose


