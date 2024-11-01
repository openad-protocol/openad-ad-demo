const PromiseLoadScript = (obj) => {
  return new Promise((resolve, reject) => {
    if(window.J$){
      resolve(true);
    }else{
      if(obj.noCache){
        obj.url = obj.url + '?t=' + new Date().valueOf();
      }
      let body = document.querySelector('body');
      let script = document.createElement('script');
      script.setAttribute('type', 'text/javascript');
      script.setAttribute('src', obj.url);
      script.setAttribute('name', obj.name);
      script.setAttribute('version', obj.version);
      script.onerror = () => reject(false);
      body.appendChild(script);
      if (document.all) {
        script.onreadystatechange = function () {
          let state = this.readyState;
          if ((state === 'loaded' || state === 'complete')) {
            resolve(true);
          }else{
            reject(false);
          }
        }
      } else { //firefox, chrome
        script.onload = function () {
          resolve(true);
        }
      }
    }
  });
};

export default PromiseLoadScript;