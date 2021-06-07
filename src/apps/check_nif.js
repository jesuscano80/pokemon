export const checkNif = (nif)=>{
    const arrayLetters= ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
    const nifRegex = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
    const hasValidFormat=nifRegex.test(nif);
    if(!hasValidFormat){ 
            return "el formato no es valido, deben ser 8 números y una letra";
        }
        else{
            const uppercaseNif= nif.toUpperCase();
            const letterNif=uppercaseNif[8];
            const numbersNif= +nif.substring(0,8);
            const letterPosition= numbersNif %23;
            return (arrayLetters[letterPosition]==letterNif)
                ?"DNI CORRECTO"
                :"La letra del DNI no es correcta";               
        }
}