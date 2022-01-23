var cmt_list = document.querySelector("#box_outer_view").children

for (var i=0; i < cmt_list.length; i++) {
    try{
        var body = cmt_list[i].querySelector("h3.answer-play").innerText;
        var body_no_space = body.replaceAll(/\s/g, '') ;
        if (body_no_space.startsWith("Whatisitcalled") || body_no_space.startsWith("Correct")){
            cmt_list[i].style.display = "none";
        }
    } catch{}
}
