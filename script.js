function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

newsShuffle = shuffle(news);

newsShuffle.forEach(element => {
    var fonte = $("<img>");
    fonte.addClass("icon");
    fonte.attr("src","imgs/"+element.source+".png");
    

    var link =  $("<a>");
    link.attr("href",element.link);
    link.text(element.title);
    link.attr("target","_blank");
    link.attr("rel","noreferrer noopener");

    var agrupa = $("<div>");
    agrupa.addClass("groupedRow");
    agrupa.append(fonte);
    agrupa.append(link);

    $("#groupedNews").append(agrupa);
    $("#groupedNews").append("<hr class='w-100'/>");
});