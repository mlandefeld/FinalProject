
function initLinks(tag){ //menu animation for slowly scrolling to specific section/page
    $("a[href='#" + tag + "']").on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: $("#" + tag).position().top }, "slow");
    });
}

initLinks("skills");
initLinks("projects");
initLinks("contact");
initLinks("about");