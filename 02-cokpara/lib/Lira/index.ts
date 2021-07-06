/*
  Lira.js
  
  Converts text/int value to Turkish Lira;
  
  parseLira(1238,0) => 1.238 TL
  
  Github: github.com/movwf
 */
 
const parseLira = (val: string | number) => {
    let result = "";
    let valString = val.toString();

    if(val < 1000){ 
        result = val; 
    }
    else if(val < 0){ 
        result = "NaN"; 
    }
    else{
        for(let i = valString.length; i > 0; i--){
            // Add number to top
            result = valString[i-1] + result;
            // Every 3 number add point to top.
            if(i % 3 == 0 & i != valString.length){ 
                result = "." + result;
            }
        }
    }
    
    return result + "TL";
 }
 
 export default parseLira;
