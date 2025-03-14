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


