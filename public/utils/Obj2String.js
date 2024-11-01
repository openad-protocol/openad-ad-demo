/**对象转string**/
const Obj2String = function(Obj){
  let string = '', t = 0, NewObj = JSON.parse(JSON.stringify(Obj));
  for(let p in NewObj){
    if(NewObj[p].toString() === '0' || NewObj[p].toString() === 'false' || !!NewObj[p]){
      t++;
      if(t===1){
        string += '?'
      }else{
        string += '&'
      }
      string += p + '='+ NewObj[p];
    }
  }
  return string;
};

export default Obj2String;
