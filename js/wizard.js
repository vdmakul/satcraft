$(function(){
    loadAll('.container.wizard');
    $('.collapse').collapse();
});


function goToStep(stepNo) {
    $('#heading' + stepNo).find('button').click();
    // $('.collapse').removeClass('active');
    updateProgresses(stepNo);
}


var PROGRESSES = [[], [], [], [10, 10, 10], [10, 30, 10], [20, 30, 60], [50, 40, 110], [60, 60, 115], [70, 80, 120]];

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
