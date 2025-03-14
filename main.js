
function fact(n) {
 
    if (n == 1) {
        return 1 ; 
    }else if (n <=0){
        return 0 ; 
    }
    return n * fact(n-1);
  
}

function applique(f, args) {
    var result = [];
    for (var i = 0; i < args.length; i++) {
        result.push(f(args[i]));
    }
    return result;

    // COmpletement equivalent a 
    // return args.map(f)
    
}

