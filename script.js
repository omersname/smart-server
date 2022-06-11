const fs = require('fs');
const data = require('./server/services/data.json');

const randomDate = () => {
  const start = new Date(2022, 0);
  const end = new Date();
  const startHour = 0;
  const endHour = 23;
  const date = new Date(+start + Math.random() * (end - start));
  const hour = startHour + Math.random() * (endHour - startHour) | 0;
  date.setHours(hour);
  return date;
};

const generate = (item) => {
  const {text} = item;
  const date = randomDate();
  return {text, date};
};

const iphoneData = data.iphone.map(generate);

const galaxyData = data.galaxy.map(generate);

const json = JSON.stringify({
  iphone: iphoneData,
  galaxy: galaxyData,
}, null, 2);

fs.writeFile('./server/services/data.json', json, 'utf8', () => {
});

