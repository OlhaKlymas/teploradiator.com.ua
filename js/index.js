let myFullpage = new fullpage('#fullpage', {
      anchors: ['section0', 'section1', 'section2', 'section3', 'section4', 'section5', 'section6'],
      navigation: true
    });

$(document).ready(function(){
    PopUpHide();
});
function PopUpShow(){
    $("#popup1").show(500);
}
function PopUpHide(){
    $("#popup1").hide(500);
}