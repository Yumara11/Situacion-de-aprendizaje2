function calcular() {
    let a = parseInt(prompt("Dime el primer número"),10);
    let b = parseInt(prompt("Dime el segundo número"),10);
    alert("El primer número es: " + a + "\n El segundo número es: " + b + "\n La suma es: " + (a+b) + 
    "\n La resta es: " + (a-b) + "\n El producto es: " + (a*b) + "\n La división es: " + (a/b) + 
    "\n El resto es: " + (a%b));
}