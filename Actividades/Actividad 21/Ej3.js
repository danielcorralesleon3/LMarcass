let a=[1,2,3,4,5];
let ac=0;
let media;
let minimo=Math.min(...a);
let maximo=Math.max(...a);

for (let index = 0; index < a.length; index++)
{
    ac=a[index]+ac;
}
media=ac/a.length;
console.log(`La media es: ${media}`);
console.log(`La suma es: ${ac}`);
console.log(`El minimo es: ${minimo}`);
console.log(`El maximo es: ${maximo}`);