$(document).ready(function () {

 

$("#home").click(function(){
//                 $("#homepage").animate({width: 'toggle'});
                    $("#homepage").toggle( "slide", {direction: "left"}, 600 );
    
                    $("#foodcreator").toggle("slide", {direction: "right"}, 600);
                 });
    
//function show(elementID) {
//    var ele = document.getElementById(elementID);
//    if (!ele) {
//        alert("no such element");
//        return;
//    }
//    var pages = document.getElementsByClassName('page');
//    for(var i = 0; i < pages.length; i++) {
//        pages[i].style.display = 'none';
//    }
//    
//    ele.style.display = 'block';
//}
});