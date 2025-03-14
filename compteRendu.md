    Écrivez une fonction qui calcule la factorielle d'un entier positif n: 

	
function fact(n) {
 
   // code de la fonction
 
}

Ma focntion 


function fact(n) {
 
    if (n == 1) {
        return 1 ; 
    }else if (n <=0){
        return 0 ; 
    }
    return n * fact(n-1);
  
 }
![alt text](<Screenshot from 2025-03-07 15-22-02.png>)





    Écrire une fonction applique qui prend en argument un tableau tab et une fonction f, et qui a le comportement suivant: 

?
1
2
	
applique(f,[1,2,3]);
// retourne le tableau [f(1),f(2),f(3)]
function applique(f, args) {
    var result = [];
    for (var i = 0; i < args.length; i++) {
        result.push(f(args[i]));
    }
    return result;

    // COmpletement equivalent a 
    return args.map(f)
    
}



    Utilisez les fonctions fact et applique pour faire la factorielle de tous les éléments d'un tableau: 

?
1
	
applique(fact,[1,2,3,4,5,6]);

    Utilisez applique à une fonction non-nommée: 

?
1
	
applique(function(n) { return (n+1); } , [1,2,3,4,5,6]);

![alt text](<Screenshot from 2025-03-07 15-27-02.png>)
