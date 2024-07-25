
const AsyncScript = {
  load: function(obj, callback){
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
        return callback && callback();
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
      //script.setAttribute("async", true);
      //script.setAttribute("defer", true);
      script.setAttribute('name', obj.name);
      script.setAttribute('version', obj.version);
      if(obj.id){
        script.setAttribute('id', obj.id);
      }
      body.appendChild(script);
      if(document.all){
        script.onreadystatechange = function() {
          let state = this.readyState;
          if((state === 'loaded' || state === 'complete') && callback) {
            return callback && callback();
          }
        }
      }else {//firefox, chrome
        script.onload = function(){
          if(callback){
            return callback && callback();
          }
        }
      }
    }
  },
  remove: function (obj) {
    const script = document.getElementById(obj.id);
    if (script) {
      script.parentNode.removeChild(script);
      window[obj.script] = null;
    }
  },
}


export default AsyncScript;
