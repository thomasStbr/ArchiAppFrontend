class Message {
  constructor(msg, pseudo, date) {
      this.msg = msg;
      this.pseudo = pseudo;
      this.date = new Date(date);
  }

  getFormattedDate() {
      return this.date.toLocaleString();
  }

  getFullMessage() {
      return `<strong>${this.pseudo}</strong> (${this.getFormattedDate()}): ${this.msg}`;
  }
}

// Met à jour la liste des messages depuis le backend
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

// Gestion de l'envoi d'un nouveau message
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

// Gestion du bouton de mise à jour des messages
document.getElementById('update-button').addEventListener('click', function() {
  update();
});

// Gestion du mode sombre
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

// Charger les messages au démarrage
update();
