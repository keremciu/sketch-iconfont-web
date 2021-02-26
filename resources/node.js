fs = require('fs')
fs.readFile('./icons.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  const keys = Object.keys(JSON.parse(data))
  const list = keys.map(key => key.split('::')[1])

  fs.writeFile('newicons.json', JSON.stringify(list), function (err) {
    if (err) return console.log(err);
    console.log('Hello World > helloworld.txt');
  });
});