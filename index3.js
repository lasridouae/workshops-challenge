//Numbre 3 binaire

function binaire(decimale)
{
    if(decimale>=1)
    {
        return binaire(Math.floor(decimale/2))+(decimale%2);
    }
    return('');
}
console.log(binaire(120));