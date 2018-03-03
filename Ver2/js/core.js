


var app = angular.module("myApp", ["ngMaterial"]);

app.controller("myCtrl", function($scope) {


    // fake datas
    // $scope.sanphams = [1,2,3,4,7,8];
    // $scope.tensanpham = [
    //     ["Sessa C32, 2014, Croatia",183015],
    //     ["Magellano 43,2013, Montenegro",475840],
    //     ["Azimut 47, 2008, Montenegro", 396533],
    //     ["Azimut 48, 2013",603950],
    //     ["Azimut 50 cũ, 2017",1000483],
    //     ["Magellano 53, 2016 Malta",1207900],
    //     ["Sessa C68, 2011, Montenegro",1451921],
    //     ["Azimut 68 Evolution, 2009, Asia",950000]
    //
    //
    // ];
    $scope.lengthvalues = {
        min: 5,
        max: 50
    };

    $scope.pricevalues = {
        min: 30000,
        max: 20000000
    };

    $scope.sanphams = [
        {name:"Sessa C32, 2014, Croatia",price:183015,img:"img/Sanpham/Number_1.jpg"},
        {name:"Magellano 43,2013, Montenegro",price:475840,img:"img/Sanpham/Number_2.jpg"},
        {name:"Azimut 47, 2008, Montenegro",price:396533,img:"img/Sanpham/Number_3.jpg"},
        {name:"Azimut 48, 2013",price:603950,img:"img/Sanpham/Number_4.jpg"},
        {name:"Azimut 50 cũ, 2017",price:1000483,img:"img/Sanpham/Number_5.jpg"},
        {name:"Magellano 53, 2016 Malta",price:1207900,img:"img/Sanpham/Number_6.jpg"},
        {name:"Sessa C68, 2011, Montenegro",price:1451921,img:"img/Sanpham/Number_7.jpg"},
        {name:"Azimut 68 Evolution, 2009, Asia",price:950000,img:"img/Sanpham/Number_8.jpg"}
    ];
    
    // $scope.changeupper = function () {
    //     pricevalues.max = $scope.priceupper;
    // };
    // $scope.changelower = function () {
    //     pricevalues.min = $scope.pricelower;
    // };

    // console.log("price values.min = %d | price values.max = %d",pricevalues.min, pricevalues.max);



});

app.filter('priceRange',function(){

    return function(arrayItems,rangeInfo){

        return arrayItems.filter(function(item){

            return (item.price > rangeInfo.min && item.price < rangeInfo.max);
        });

    }
});
app.filter('lengthRange',function(){

    return function(arrayItems,rangeInfo){

        return arrayItems.filter(function(item){

            return (item.length > rangeInfo.min && item.length < rangeInfo.max);
        });

    }
});
//
//
// // noUI slider
// var priceslid = document.getElementById("price-filter");
// var priceupper = 20000000;
// var pricelower = 30000;
//
// noUiSlider.create(priceslid, {
//     start: [0, 20000000],
//     connect: [false, true, false],
//     format: wNumb({
//         decimals: 0
//         // thousand: ' ',
//     }),
//     range: {
//         'min': [     30000,10000 ],
//         '50%': [  1000000,100000 ],
//         'max': [ 20000000 ]
//     },
//     pips: {
//         mode: 'range',
//         density: 3,
//         format: wNumb({
//             decimals: 0
//             // thousand: ' ',
//         })
//     }
// });
//
// var snappriceValues = [
//     document.getElementById("price-lower"),
//     document.getElementById("price-upper")
// ];
//
// priceslid.noUiSlider.on('update', function (values, handle) {
//     snappriceValues[handle].value = values[handle];
//     if(handle === 1) pricevalues.max = values[handle];
//     else if(handle === 0) pricevalues.min = values[handle];
// });
//
// function setPriceHandle(i, value) {
//     var  r = [null, null];
//     r[i] = value;
//     if(i === 1) pricevalues.max = value;
//     else if(i === 0) pricevalues.min = value;
//     priceslid.noUiSlider.set(r);
// }
//
// snappriceValues.forEach(function (input, handle) {
//     input.addEventListener('change', function () {
//         setPriceHandle(handle, this.value);
//
//     });
// });
//
// var lengthslid = document.getElementById("length-filter");
//
// noUiSlider.create(lengthslid, {
//     start: [0, 50],
//     connect: [false, true, false],
//     format: wNumb({
//         decimals: 0,
//         thousand: ' ',
//     }),
//     range: {
//         'min': [5],
//         '25%': [12],
//         'max': [50]
//     },
//     pips: {
//         mode: 'range',
//         density: 3,
//         format: wNumb({
//             decimals: 0,
//             thousand: ' ',
//         })
//     }
// });
//
// var snaplengthValues = [
//     document.getElementById("length-lower"),
//     document.getElementById("length-upper")
// ];
//
// lengthslid.noUiSlider.on('update', function (values, handle) {
//     snaplengthValues[handle].value = values[handle];
//     // if(handle === 1) priceupper = values[handle];
//     // else if(handle === 0) pricelower = values[handle];
//
// });
//
// function setLengthHandle(i, value) {
//     var  r = [null, null];
//     r[i] = value;
//     // if(i === 1) priceupper = value;
//     // else if(i === 0) pricelower = value;
//     lengthslid.noUiSlider.set(r);
// }
//
// snaplengthValues.forEach(function (input, handle) {
//     input.addEventListener('change', function () {
//         setLengthHandle(handle, this.value);
//     });
//
//
// });
//
