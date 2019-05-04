$(function(){
    loadTemplate("#step1", "html/wizard/steps/1-intention.html");
    loadTemplate("#step2", "html/wizard/steps/2-payload.html");
    loadTemplate("#step3", "html/wizard/steps/3-com.html");
    loadTemplate("#step4", "html/wizard/steps/4-adcs.html");
    loadTemplate("#step5", "html/wizard/steps/5-cdhs.html");
    loadTemplate("#step6", "html/wizard/steps/6-eps.html");
    loadTemplate("#step7", "html/wizard/steps/7-str.html");
    loadTemplate("#step8", "html/wizard/steps/8-pl.html");

    $('.collapse').collapse();
});


function goToStep(stepNo) {
    $('#heading' + stepNo).find('button').click();
    // $('.collapse').removeClass('active');

}
