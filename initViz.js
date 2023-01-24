function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
    url = "https://public.tableau.com/views/JusttheData-WorldHappiness_16526926875300/Family?:language=en-GB&:display_count=n&:origin=viz_share_link";

    viz = new tableau.Viz(containerDiv, url);
}
initViz();