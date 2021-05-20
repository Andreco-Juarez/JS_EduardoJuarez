function obtenerCookie(nombreCookie)
{
    let cookies = document.cookie;
    let arregloCookies = cookies.split("; ");
    for(const valor of arregloCookies)
    {
        const cookie = valor.split("=");
        if(cookie[0] === nombreCookie)
        {
            return cookie[1];
        }
    }
    return null;
}

function respuesta()
{
    do
    {
        res = prompt("¿Que camino deseas tomar? (izquierda o derecha)");
    }
    while(res !== "derecha" && res !== "izquierda")

    return res;
}

cookie1 = obtenerCookie("cookie1");
cookie2 = obtenerCookie("cookie2");
console.log(cookie1);
console.log(cookie2);
if(cookie1 === null)
{
    setTimeout(function(){
        do
        {
            res = prompt("¿Que camino deseas tomar? (izquierda o derecha)");
        }
        while(res !== "derecha" && res !== "izquierda")
        if(res === "izquierda")
        {
            document.cookie = "cookie1=izquierda";
        }
        else if(res === "derecha" )
        {
            document.cookie = "cookie1=derecha";
        }
        window.location.reload();
    }, 1000);
}
else if(cookie2 === null)
{
    setTimeout(function(){
        do
        {
            res = prompt("¿Que camino deseas tomar? (izquierda o derecha)");
        }
        while(res !== "derecha" && res !== "izquierda")
        if(res === "izquierda")
        {
            document.cookie = "cookie2=izquierda";
        }
        else if(res === "derecha" )
        {
            document.cookie = "cookie2=derecha";
        }
        window.location.reload();
    }, 1000);
}
else
{
    if(cookie1 === "derecha" && cookie2 == "derecha")
    {
        window.location = "./casa_bruja.html";
    }
    else if(cookie1 === "derecha" && cookie2 === "izquierda")
    {
        window.location = "./hongo.html";
    }
    else if(cookie1 === "izquierda" && cookie2 == "derecha")
    {
        window.location = "./tronco.html";
    }
    else if(cookie1 === "izquierda" && cookie2 === "izquierda")
    {
        window.location = "./casa.html";
    }
}
