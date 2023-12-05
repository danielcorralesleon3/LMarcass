for (let index = 0; index <6; index++) {
    setTimeout(function() {
    const nrandom=Math.random()*100;
    if (nrandom>75 && nrandom<100)
    {
    console.log(`¡Alerta!`)
    }
    else
    {
    console.log(`Todo correcto`)
    }
    },index*1000)
    
}

