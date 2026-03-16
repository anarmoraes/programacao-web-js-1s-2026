function verificarNumeroPrimo(n){
    let eh_primo = true;
    
    if ((n != 2) && (n % 2 == 0)){
        eh_primo = false;
    }

    for(let i = 3; i<n ; i += 2){
        if (n % 1 == 0){
            eh_primo = false;
        }
    }

    return eh_primo;
}

console.log(`primo(2)=${verificarNumeroPrimo(2)}`);
console.log(`primo(4)=${verificarNumeroPrimo(4)}`);
console.log(`primo(5)=${verificarNumeroPrimo(5)}`);
console.log(`primo(7)=${verificarNumeroPrimo(7)}`);
console.log(`primo(9)=${verificarNumeroPrimo(9)}`);
console.log(`primo(83)=${verificarNumeroPrimo(83)}`);
console.log(`primo(14348907)=${verificarNumeroPrimo(14348907)}`);