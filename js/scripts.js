function addBackgroundImage()
{
    document.body.style.backgroundImage = 'url("img/bg.jpg")';
}

function createTitleWrapper(){
    var div = document.createElement('div');
    div.setAttribute("id", "title-wrapper");
    document.body.appendChild(div)
    document.getElementById('title-wrapper').style.top = "50%";
    document.getElementById('title-wrapper').style.width = "100%";
    document.getElementById('title-wrapper').style.textAlign = "center";
    document.getElementById('title-wrapper').style.fontFamily = "impact";
    document.getElementById('title-wrapper').style.position = "absolute";
    document.getElementById('title-wrapper').style.textTransform = "uppercase";
}

function createTitle()
{
    var title = document.createElement('h1');
    title.setAttribute("id", "title")

    title.innerText = "Work under progress"
    
    document.getElementById('title-wrapper').style.width = "fit-content";
    document.getElementById('title-wrapper').style.margin = "auto"
    document.getElementById('title-wrapper').style.background = "black";
    document.getElementById('title-wrapper').style.color = "white";
    document.getElementById('title-wrapper').appendChild(title)

}

function startscript(){
    console.log ('Hello world')
    addBackgroundImage();
    createTitleWrapper();
    createTitle();
}

document.addEventListener('DOMContentLoaded', startscript)