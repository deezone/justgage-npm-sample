// require('justgage');
var JustGage = require('justgage');

var gauge = new JustGage({
    id: "gauge", // the id of the html element
    value: 50,
    min: 0,
    max: 100,
    decimals: 2,
    gaugeWidthScale: 0.6
});

// update the value randomly
setInterval(() => {
    gauge.refresh(Math.random() * 100);
}, 5000)
