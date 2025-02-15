/**异步加载JS**/
const AsyncLoadScript = function(obj, callback){
  let isSameName = false, isSameVersion = false, script = document.querySelectorAll('script');
  for(let i=0;i<script.length;i++){
    if(script[i].getAttribute('name') === obj.name){
      isSameName = true;
      if(script[i].getAttribute('version') === obj.version) {
        isSameVersion = true;
      }
      break;
    }
  }
  if(isSameName && isSameVersion){
    if(callback){
      return callback && callback(window[obj.name]);
    }else{
      return false;
    }
  }else{
    if(obj.noCache){
      obj.url = obj.url + '?t=' + new Date().valueOf();
    }
    let body = document.querySelector('body');
    script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', obj.url);
    script.setAttribute('name', obj.name);
    script.setAttribute('version', obj.version);
    script.async = true;
    body.appendChild(script);
    if(document.all){
      script.onreadystatechange = function() {
        let state = this.readyState;
        if((state === 'loaded' || state === 'complete') && callback) {
          return callback && callback(window[obj.name]);
        }
      }
    }else {//firefox, chrome
      script.onload = function(){
        if(callback){
          return callback && callback(window[obj.name]);
        }
      }
    }
  }
};

export default AsyncLoadScript;
