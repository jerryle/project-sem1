
// noUI slider
var priceslid = document.getElementById("price-filter");
var priceupper = 20000000;
var pricelower = 30000;

noUiSlider.create(priceslid, {
    start: [0, 20000000],
    connect: [false, true, false],
    format: wNumb({
        decimals: 0,
        thousand: ' ',
    }),
    range: {
        'min': [     30000,10000 ],
        '50%': [  1000000,100000 ],
        'max': [ 20000000 ]
    },
    pips: {
        mode: 'range',
        density: 3,
        format: wNumb({
            decimals: 0,
            thousand: ' ',
        })
    }
});

var snappriceValues = [
    document.getElementById("price-lower"),
    document.getElementById("price-upper")
];

priceslid.noUiSlider.on('update', function (values, handle) {
    snappriceValues[handle].value = values[handle];
});

function setPriceHandle(i, value) {
    var  r = [null, null];
    r[i] = value;
    priceslid.noUiSlider.set(r);
}

snappriceValues.forEach(function (input, handle) {
    input.addEventListener('change', function () {
        setPriceHandle(handle, this.value);
    });
});

var lengthslid = document.getElementById("length-filter");

noUiSlider.create(lengthslid, {
    start: [0, 50],
    connect: [false, true, false],
    format: wNumb({
        decimals: 0,
        thousand: ' ',
    }),
    range: {
        'min': [5],
        '25%': [12],
        'max': [50]
    },
    pips: {
        mode: 'range',
        density: 3,
        format: wNumb({
            decimals: 0,
            thousand: ' ',
        })
    }
});

var snaplengthValues = [
    document.getElementById("length-lower"),
    document.getElementById("length-upper")
];

lengthslid.noUiSlider.on('update', function (values, handle) {
    snaplengthValues[handle].value = values[handle];
    if(handle === 1) priceupper = values[handle];
    else if(handle === 0) pricelower = values[handle];

});

function setLengthHandle(i, value) {
    var  r = [null, null];
    r[i] = value;
    if(i === 1) priceupper = value;
    else if(i === 0) pricelower = value;
    lengthslid.noUiSlider.set(r);
}

snaplengthValues.forEach(function (input, handle) {
    input.addEventListener('change', function () {
        setLengthHandle(handle, this.value);
    });


});

