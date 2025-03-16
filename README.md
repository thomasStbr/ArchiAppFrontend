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


# **Compte Rendu - Factorielle et Fonction Applique**

## **1. Fonction Factorielle**
La fonction `fact(n)` calcule la factorielle d'un entier positif `n` en utilisant une approche récursive.

### **Implémentation :**
```javascript
function fact(n) {
    if (n == 1) {
        return 1;
    } else if (n <= 0) {
        return 0;
    }
    return n * fact(n - 1);
}
```

### **Explication :**
- Si `n == 1`, on retourne `1` car `1! = 1`.
- Si `n <= 0`, on retourne `0` (hypothèse pour gérer les valeurs non valides).
- Sinon, on applique la définition récursive de la factorielle :  
  \( n! = n \times (n-1)! \)

![alt text](<Screenshot from 2025-03-07 15-22-02.png>)

---

## **2. Fonction Applique**
La fonction `applique(f, tab)` applique une fonction `f` à chaque élément du tableau `tab` et retourne un nouveau tableau contenant les résultats.

### **Implémentation :**
```javascript
function applique(f, args) {
    var result = [];
    for (var i = 0; i < args.length; i++) {
        result.push(f(args[i]));
    }
    return result;

    // Alternative plus concise avec map()
    return args.map(f);
}
```

### **Explication :**
- La fonction parcourt le tableau `args` et applique `f` à chaque élément.
- Les résultats sont stockés dans un nouveau tableau `result`.
- Une alternative équivalente est d'utiliser `map(f)`, qui simplifie l'écriture.

---

## **3. Application de `fact` à un Tableau**
On utilise `applique` avec la fonction `fact` pour calculer la factorielle de chaque élément d’un tableau.

### **Exécution :**
```javascript
applique(fact, [1,2,3,4,5,6]);  
// Résultat : [1, 2, 6, 24, 120, 720]
```

---

## **4. Utilisation de `applique` avec une Fonction Anonyme**
On peut également appliquer `applique` avec une fonction anonyme.

### **Exécution :**
```javascript
applique(function(n) { return (n + 1); }, [1,2,3,4,5,6]);  
// Résultat : [2, 3, 4, 5, 6, 7]
```

### **Explication :**
- Cette fonction anonyme ajoute `1` à chaque élément du tableau.
- L’utilisation de `applique` permet d’appliquer cette transformation de manière générique et concise.

![alt text](<Screenshot from 2025-03-07 15-27-02.png>)

---


