export const paridad = (number)=>{
   if (typeof number!="number"){
       return "debes introducir numeros"
   }
   else{
     return (number % 2 == 0)
        ? "es par"
        : "es impar"
    }
}