function initViz() {
    var containerDiv = document.getElementById("viz1"),
    url = "https://public.tableau.com/views/CatsDogs_16160903457520/Sheet4?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";

    var viz = new tableau.Viz(containerDiv, url);
}
function initViz2() {
    var containerDiv2 = document.getElementById("viz2"),
    url = "https://public.tableau.com/views/CatsDogs_16160903457520/Sheet2?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";

    var viz = new tableau.Viz(containerDiv2, url);
}
function initViz3() {
    var containerDiv3 = document.getElementById("viz3"),
    url = "https://public.tableau.com/views/CatsDogs_16160903457520/Sheet3?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";

    var viz = new tableau.Viz(containerDiv3, url);
}

window.onload = function(){
    initViz();
    initViz2();
    initViz3();
    for(var i=0; i<4; i++){
        document.getElementById('I' + String(i)).innerHTML = TileP[i];
    }
}

const TileP = [15, 20, 25, 30];
let TotalP = [0, 0, 0, 0];
function KClick(val,ind){
    TotalP[ind] = val*TileP[ind];
    idd = "price"+String(ind);
    document.getElementById(idd).innerHTML=(TotalP[ind]);
}
function KFinal(){
    var sum1 = TotalP.reduce(function(a,b){return a+b;},0);
    document.getElementById("FinalP").innerHTML=(sum1);
}

