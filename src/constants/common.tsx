import { toChartsProps } from "@components/video/type";
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

export const toCharts = (imageContext: toChartsProps) => {
  const { context, width, height, rowChars } = imageContext

  let newRowChars = width < rowChars ? width : rowChars;
  let output = "";

    const  imageData = context.getImageData(0, 0, width, height)
    const  char_h = width / newRowChars,
    char_w = char_h,
    rows = height / char_h,
    cols = newRowChars

    const getBlockGray = (x: number, y: number, w: number, h: number) => {
      let sumGray = 0, pixels;
      for (let row = 0; row < w; row++) {
        for (let col = 0; col < h; col++) {
          let cx = x + col, 
            cy = y + row, 
            index = (cy * imageData.width + cx) * 4, 
            data = imageData.data,
            R = data[index],
            G = data[index + 1],
            B = data[index + 2],
            gray = ~~(R * 0.3 + G * 0.59 + B * 0.11);

          sumGray += gray;
        }
      }
      pixels = w * h;
      return ~~(sumGray / pixels);
    }   
    for (let r = 0; r < rows; r++) {  
        for (let c = 0; c < cols; c++) {  
            let pos_x = ~~(c * char_h),  
                pos_y = ~~(r * char_h),  
                
                avg = getBlockGray(pos_x, pos_y, ~~char_w, ~~char_h),  
                ch = getCharsMap()[avg];  
                
            output += ch;  
        }  
        output += '\r\n';  
    }  
    return output; 
}

export const getCharsMap = ()=>{
  const chars = ['@', 'w', '#', '$', 'k', 'd', 't', 'j', 'i', '.', ' '];  
  const  map:any = {};  
  for (let i = 0; i < 256; i++) {  
      const index = ~~(i / 25)  
      map[i] = chars[index];  
  };  
  return map; 
}

export const childrenKey = () => {
  return new Date().getTime() + Math.random();
}