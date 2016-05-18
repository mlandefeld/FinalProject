function scrollDown()
{
    $("a[href='#about']").onclick(function() {
        $("html, body").animate({ scrollDown: 0 }, "slow");
        return true;
    });
}