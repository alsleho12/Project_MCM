/* javaScript Document */
$(".nav>a").click(function(){
    var poi = $("#gnb").css("display");
    if(poi == "none"){
        $("#gnb").show(300).animate({left:"0"});
        $("#blackbg").fadeIn();
        $("#loginPageIn").fadeOut(400);
    }else if(poi == "block"){
        $("#gnb").animate({left:"-100%"});
        $("#gnb").fadeOut(200);
        $(".depth2").slideUp();
        $("#blackbg").fadeOut();
    }
    return false;
});
