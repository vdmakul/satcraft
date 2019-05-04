$(document).ready(function(){
    loadAll('body');
});

function loadAll(root) {
    $(root).find('.manually-loadable').each(function() {
        var htmlFile = $(this).data('html');
        console.log('asdsad '+htmlFile );
        if (htmlFile) {
            $(this).load(htmlFile);
        }
    })
}
