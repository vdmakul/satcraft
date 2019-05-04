function loadTemplate(elementSelector, htmlFile) {
    $(elementSelector).load(htmlFile);
}

$(document).ready(function(){
    loadTemplate("#navbar", "html/navbar.html");
    loadTemplate("#footer", "html/footer.html");
    loadTemplate("#content", "html/landing/landing-content.html");
});
