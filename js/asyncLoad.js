// Asynchrounously load files using this function
asyncLoad = function(script){
  if (!script) {return false;}
  var scr = document.createElement('script');
  scr.type = 'text/javascript';
  scr.async = true;
  scr.defer = false;
  scr.src = script;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(scr, s);  
}