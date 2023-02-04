const containerDiv = document.getElementById("vizContainer");
const URL = "https://public.tableau.com/views/JusttheData-WorldHappiness_16526926875300/Family?:language=en-GB&:display_count=n&:origin=viz_share_link";
let viz;

const options = {
    height: 1400,
    width: 1100,
    hideToolbar: false,
    onFirstInteractive: () => {
        console.log('Viz is loaded');
    },
};


function initViz() {
    viz = new tableau.Viz(containerDiv,URL);
}
initViz();