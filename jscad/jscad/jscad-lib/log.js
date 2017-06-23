//Logging Function for debugging
//
module.exports = function log(txt)
{
  var timeInMs = Date.now();
  var prevtime = undefined;//OpenJsCad.log.prevLogTime;
  if(!prevtime) prevtime = timeInMs;
  var deltatime = timeInMs - prevtime;
  log.prevLogTime = timeInMs;
  var timefmt = (deltatime*0.001).toFixed(3);
  txt = "["+timefmt+"] "+txt;

  if( (typeof(console) == "object") && (typeof(console.log) == "function") )
  {
    console.log("[JsCad]: " + txt);
  }
  else if( (typeof(self) == "object") && (typeof(self.postMessage) == "function") )
  {
    self.postMessage({cmd: 'log', txt: txt});
  }
  else throw new Error("Cannot log");
};
