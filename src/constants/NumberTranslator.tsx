import React from "react";
const mmNum = ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"];

type propsType = {
  number : number
}
export function convertEngtoMynamarDigit (number : propsType)  {
  let strNum = String(number);
  console.log('stnum', strNum)
  let split = strNum.split('');
  let myan = '';
  for (let i = 0; i < split.length; i++) {
    const element = split[i];
    const realNum = +element;
     myan += mmNum[realNum]
  }
  console.log('MMNum', myan);
  return myan;
};
// convertEngtoMynamarDigit(200000)
