largo = Math.floor(Math.random() * 10)+1;
ancho = Math.floor(Math.random() * 10)+1;

console.log(largo);
console.log(ancho);

let array  = [];
let sucesion = [];

m = 0;
c = 1;
l = 1;

i = 0
while(i != ancho*largo)
{
    c = m + l;
    m = l;
    l = c;
    sucesion.push(m);
    i++;
}

for(let k=0; k<largo; k++)
{
    array.push([]);
}

contfila = 0;
contancho = 0;
for(let valor of sucesion)
{
    if(contfila%2 == 0)
    {
        array[contfila].push(valor)
    }
    else
    {
        array[contfila].unshift(valor);
    }
    contancho++;
    if(contancho == ancho)
    {
        if(contfila+1 != largo)
        {
            contfila++;
        }
        contancho = 0;
    }
}
console.log(array);