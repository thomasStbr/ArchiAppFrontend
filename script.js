
class Message {
    constructor(msg, pseudo, date) {
      this.msg = msg;
      this.pseudo = pseudo;
      this.date = date;
    }
  
    // Une méthode pour formater la date (optionnel)
    getFormattedDate() {
      return this.date.toLocaleString();
    }
  
    // Une méthode pour obtenir le message complet formaté
    getFullMessage() {
      return `<strong>${this.pseudo}</strong> (${this.getFormattedDate()}): ${this.msg}`;
    }
  }
  
  // Maintenant, créons nos messages en utilisant la classe
  let msgs = [
    new Message("Hello World", "Alice", new Date()),
    new Message("Blah Blah", "Bob", new Date()),
    new Message("I love cats", "Charlie", new Date())
  ];
  
  function update(messages) {
    const messageList = document.getElementById('message-list');
    messageList.innerHTML = '';

    messages.forEach(message => {
        const li = document.createElement('li');
        // Utilisation de la méthode getFullMessage() de la classe Message
        li.innerHTML = message.getFullMessage();
        messageList.appendChild(li);
    });
}

document.getElementById('update-button').addEventListener('click', function() {
    update(msgs);
});

update(msgs);

document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const messageText = document.getElementById('message').value;
    const pseudo = document.getElementById('pseudo').value;
    const date = new Date();

    const nouveauMessage = new Message(messageText, pseudo, date);

    msgs.push(nouveauMessage);

    update(msgs);

    document.getElementById('message').value = '';
    document.getElementById('pseudo').value = '';

    alert('Message envoyé !');
});
// Gestion du bouton de mise à jour
document.getElementById('update-button').addEventListener('click', function() {
    update(msgs);
});

const styleButton = document.getElementById('style-button');
let isDarkMode = false; 

styleButton.addEventListener('click', function() {
    isDarkMode = !isDarkMode; 

    if (isDarkMode) {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = 'dark';
    } else {
        document.body.style.backgroundColor = '#f0f0f0';
        document.body.style.color = '#333';
    }
});