const { Router } = require("express");
const { PythonShell } = require("python-shell");
const router = Router();

router.get("/gpsPosition", (req, res) => {
  // PythonShell.runString("x=1+1;print(x)", null, function(err, results) {
  //   if (err) throw err;
  //   res.send(results);
  // });

  PythonShell.run('./telemetry.py',null,function(err){
    if (err) throw err;
    console.log('finished');
  });



});

module.exports = router;