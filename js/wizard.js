$(function(){
    loadAll('.container.wizard');
    $('.collapse').collapse();
});


function goToStep(stepNo) {
    $('#heading' + stepNo).find('button').click();
    // $('.collapse').removeClass('active');
}
