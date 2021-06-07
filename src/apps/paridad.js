export const paridad = (numero)=>{
   if (typeof numero!="number"){
       return "debes introducir numeros"
   }
   else{
     return (numero % 2 == 0)
        ? "es par"
        : "es impar"
    }
}