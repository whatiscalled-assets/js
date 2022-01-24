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

window.location.replace("https://www.amazon.in/gp/bestsellers/?ref_=nav_cs_bestsellers&_encoding=UTF8&tag=amazon0287d-21&linkCode=ur2&linkId=5ef51645fcf1e71837fc5271bea3a6bc&camp=3638&creative=24630");
