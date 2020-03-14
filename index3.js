//Numbre 3 binaire

function binair(decimale)
{
    if(decimale>=1)
    {
        return binair(Math.floor(decimale/2))+(decimale%2);
    }
    return('');
}
console.log(binair(120));