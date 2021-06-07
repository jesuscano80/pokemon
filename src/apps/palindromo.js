export const palindromo = (frase)=>{

    if (typeof frase!="string"){
        return "No es palíndromo"
    }

    const rightSide =   frase
    .trim()
    .toLowerCase()
    .replace(/[ó]/gi, "o")
    .replace(/[í]/gi, "i")
    .replace(/[é]/gi, "e")
    .replace(/[á]/gi, "a")
    .replace(/[ú]/gi, "u")
    .replace(/[ü]/gi, "u")
    .replace(/\s/gi, "")
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    .split("")
    .reverse()
    .join("");

    let leftSide= rightSide
    .split("") 
    .reverse()
    .join("");

    return (leftSide==rightSide)
    ? "Es palíndromo"
    : "No es palíndromo"
}

