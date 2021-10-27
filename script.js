$(".back").hide();

$(".submit").click(function() {
    let hours = Number($(".hours").val());
    let days = Number($(".days").val());
    let hobby = $(".hobby").val();
    let name = $(".name").val();
    let totalHours = hours * days * 1484;
    if (!hours || !name || !days || !hobby) {
        $(".alerts").show();
    } else {
        $(".questions").hide();
        $(".heading").text("By 2050, " + name + " would've spent " + totalHours + " hours of their life " + hobby + ".");
        $(".heading").css("font-family", "'Nanum Gothic', sans-serif");
        $(".submit").hide();
    }
    $(".submit").hide();
    $(".back").show();

});

$(".back").click(function() {
    location.reload();
});