# **📌 Messagerie Simple - Frontend**  

🔗 **Application en ligne** : [https://archiappfrontend.onrender.com/](https://archiappfrontend.onrender.com/)  

---

## **📝 Description**  
Ce projet est le **frontend** d’une application de messagerie simple permettant d’envoyer et de lire des messages. Il interagit avec un **backend Express.js** pour récupérer et publier des messages.  

L’interface est en **HTML, CSS et JavaScript**, avec une prise en charge du **mode sombre** et une mise à jour dynamique des messages.  

---

## **🚀 Fonctionnalités**
✅ **Afficher la liste des messages** récupérée depuis l’API.  
✅ **Envoyer un message avec un pseudo** via un formulaire.  
✅ **Mettre à jour les messages dynamiquement** avec un bouton.  
✅ **Basculer en mode sombre** pour améliorer l’expérience utilisateur.  

---

## **📂 Structure des fichiers**
- **index.html** → Structure de la page (formulaire, liste des messages).  
- **style.css** → Apparence de l’application (mode clair/sombre, mise en page).  
- **script.js** → Gestion des interactions avec l’API et l’interface utilisateur.  
- **main.js** → Fonction annexes. 

---

## **🛠 Explication des Fonctions Clés**
### **📩 `update()` - Mise à jour des messages**
```javascript
function update() {
    fetch('https://archiappbackend.onrender.com/msg/getAll')
        .then(response => response.json())
        .then(data => {
            const messageList = document.getElementById('message-list');
            messageList.innerHTML = '';

            data.forEach(item => {
                const message = new Message(item.msg, item.pseudo, item.date);
                const li = document.createElement('li');
                li.innerHTML = message.getFullMessage();
                messageList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des messages:', error);
        });
}
```
✅ **Récupère** les messages du backend et les affiche dans la page.  
✅ **Vide la liste** avant d’ajouter les nouveaux messages pour éviter les doublons.  

---

### **📝 `document.getElementById('message-form').addEventListener('submit', …)` - Envoi d’un message**
```javascript
document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const messageText = document.getElementById('message').value;
    const pseudo = document.getElementById('pseudo').value;

    if (!messageText.trim() || !pseudo.trim()) {
        alert("Veuillez entrer un message et un pseudo !");
        return;
    }

    fetch('https://archiappbackend.onrender.com/msg/post', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ msg: messageText, pseudo: pseudo })
    })
    .then(response => response.json())
    .then(() => {
        update();
        document.getElementById('message').value = '';
        document.getElementById('pseudo').value = '';
    })
    .catch(error => {
        console.error('Erreur lors de l\'envoi du message:', error);
    });
});
```
✅ **Empêche l’envoi du formulaire standard** pour gérer l’envoi via Fetch API.  
✅ **Vérifie que le pseudo et le message ne sont pas vides**.  
✅ **Envoie une requête POST** au backend avec le message et le pseudo.  
✅ **Met à jour automatiquement la liste** des messages après l’envoi.  

---

### **🔄 `document.getElementById('update-button').addEventListener('click', …)` - Rafraîchir les messages**
```javascript
document.getElementById('update-button').addEventListener('click', function() {
    update();
});
```
✅ **Recharge les messages** lorsque l’utilisateur clique sur "Mettre à jour les messages".  

---

### **🌙 `document.getElementById('style-button').addEventListener('click', …)` - Mode Sombre**
```javascript
const styleButton = document.getElementById('style-button');
let isDarkMode = false;

styleButton.addEventListener('click', function() {
    isDarkMode = !isDarkMode;

    if (isDarkMode) {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = '#f0f0f0';
        document.body.style.color = '#333';
    }
});
```
✅ **Basculer entre mode clair et sombre** en modifiant les couleurs du `body`.  

---

## **📌 Comment Tester ?**
1️⃣ **Visitez l’application** : [https://archiappfrontend.onrender.com/](https://archiappfrontend.onrender.com/)  
2️⃣ **Envoyez un message** en remplissant le formulaire.  
3️⃣ **Cliquez sur "Mettre à jour"** pour voir les derniers messages.  
4️⃣ **Activez le mode sombre** avec le bouton dédié.  

---
