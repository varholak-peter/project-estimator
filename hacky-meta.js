var fs = require("fs");

fs.readFile("./build/index.html", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  data = data.replace(
    'content="Web site created using create-react-app"',
    'content="Just a simple Project Estimator"'
  );
  data = data.replace(
    "<title>React App</title>",
    "<title>Estimate-inator Automator</title>"
  );

  fs.writeFile("./build/index.html", data, "utf8", function (err) {
    if (err) return console.log(err);
  });
});
