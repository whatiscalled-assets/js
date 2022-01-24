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

window.location.replace("https://www.amazon.in/gp/product/B089FFMMMZ/ref=as_li_tl?ie=UTF8&tag=amazon0287d-21&camp=3638&creative=24630&linkCode=as2&creativeASIN=B089FFMMMZ&linkId=709043c71e3f205c273bab3da134012e");
