
export const FileType = {
  XLSX: 'xlsx',
  CSV: 'csv',
};

export const second = (value) => {
  let theTime:any = parseInt(value); // 秒
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
  let result = '' + parseInt(theTime);
  if (middle > 0) {
    result = '' + parseInt(middle) + ':' + result;
  }
  if (hour > 0) {
    result = '' + parseInt(hour) + ':' + result;
  }
  return result;
};
