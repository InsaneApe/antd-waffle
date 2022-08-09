import { isNumber, isString } from "lodash";

export const FileType = {
  XLSX: 'xlsx',
  CSV: 'csv',
};

export const second = (value) => {
  if(isNumber(value) || isString(value)) {
    let theTime:any = parseInt(value as string); // 秒
    let middle:any = 0; // 分
    let hour:any = 0; // 小时
  
    if (theTime >= 60) {
      middle = parseInt(theTime / 60 as any) ;
      theTime = parseInt(theTime % 60 as any) ;
      if (middle >= 60) {
        hour = parseInt(middle / 60 as any) ;
        middle = parseInt(middle % 60 as any) ;
      }
    }
    // let result = '' + parseInt(theTime);
    // if (middle > 0) {
    //   result = '' + parseInt(middle) + ':' + result;
    // }
    // if (hour > 0) {
    //   result = '' + parseInt(hour) + ':' + result;
    // }
    let result = "";
    // result = '' + parseInt(theTime) +'' + result + '' +  + result;
    result = (parseInt(hour)<9?`0${parseInt(hour)}`:parseInt(hour)) + ':' + (parseInt(middle)<9?`0${parseInt(middle)}`:parseInt(middle))  + ':' + (parseInt(theTime)<9?`0${parseInt(theTime)}`:parseInt(theTime))
    return result;
  }; 
  return "00:00:00";
};

export const childrenKey = () => {
  return new Date().getTime() + Math.random();
}