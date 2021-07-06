/*
  Lira.js
  
  Converts text/int value to Turkish Lira;
  
  parseLira(1238,0) => 1.238 TL
  
  Github: github.com/movwf
 */

const parseLira = (val: string | number) => {
  let result = "";
  let valString = val.toString();

  if (val < 1000) {
    result = valString;
  } else if (val < 0) {
    result = "NaN";
  } else {
    let pointCount = 1;
    for (let i = valString.length; i > 0; i--) {
      // Every 3 number add point to top.
      if (i == valString.length - 3 * pointCount) {
        result = "." + result;
        pointCount++;
      }
      // Add number to top
      result = valString[i - 1] + result;
    }
  }

  return result + "TL";
};

export const parseFromLira = (liraString: string) => {
  return parseInt(
    liraString
      .substr(0, liraString.length - 2)
      .split(".")
      .join("")
  );
};

export default parseLira;
