$(function(){
    loadAll('.container.wizard');
    $('.collapse').collapse();
    window.setTimeout(function() {
        $('#first-step').click();
    }, 1000);

});


function goToStep(stepNo) {
    $('#heading' + stepNo).click();
    $("html, body").animate({ scrollTop: 0 });
    // $('.collapse').removeClass('active');
    updateProgresses(stepNo);
}


var PROGRESSES = [[], [], [], [5, 5, 3], [9, 22, 11], [18, 30, 34], [25, 44, 56], [33, 58, 71], [49, 74, 93]];

function updateProgresses(stepNo) {

    var progress = PROGRESSES[stepNo];
    $('.progress-bar').removeClass('bg-success', 'bg-warning', 'bg-info', 'bg-danger');

    updateProgress($('.progress-bar.progress1'), progress[0]);
    updateProgress($('.progress-bar.progress2'), progress[1]);
    updateProgress($('.progress-bar.progress3'), progress[2]);
}

function updateProgress($progress, progress) {
    $progress.css('width', progress + '%');
    if (progress > 100) {
        $progress.addClass('bg-danger')
    } else if (progress > 75) {
        $progress.addClass('bg-warning')
    } else if (progress > 50) {
        $progress.addClass('bg-info')
    } else {
        $progress.addClass('bg-success');

    }
}
