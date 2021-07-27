const styles = document.getElementById('styles')
const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')
const img3 = document.getElementById('img3')
const img4 = document.getElementById('img4')
const icon1 = document.getElementById('icon1')
const icon2 = document.getElementById('icon2')
const icon3 = document.getElementById('icon3')

document.getElementById("btn-a").addEventListener("click", displayDateA);
document.getElementById("btn-b").addEventListener("click", displayDateB);
document.getElementById("btn-c").addEventListener("click", displayDateC);
document.getElementById("btn-d").addEventListener("click", displayDateD);
document.getElementById("btn-e").addEventListener("click", displayDateE);

function displayDateA() {
    styles.setAttribute("href", "./css/styles-physical.css")
    imagestoDark()
    iconsToLight()
}

function displayDateB() {
    styles.setAttribute("href", "./css/styles-logical.css")
    imagesToLight()
    iconsToDark()
}

function displayDateC() {
    styles.setAttribute("href", "./css/styles-nemium-c.css")
    imagestoDark()
    iconsToLight()
}

function displayDateD() {
    styles.setAttribute("href", "./css/styles-nemium-d.css")
    imagestoDark()
    iconsToLight()
}

function displayDateE() {
    styles.setAttribute("href", "./css/styles-nemium-e.css")
    imagesToLight()
    iconsToDark()
}


function imagesToLight() {
    img1.setAttribute("src","./images/google-chrome-light.png")
    img2.setAttribute("src","./images/visual-studio-code-light.png")
    img3.setAttribute("src","./images/figma-light.png")
    img4.setAttribute("src","./images/github-light.png")
}

function imagestoDark() {
    img1.setAttribute("src","./images/google-chrome.png")
    img2.setAttribute("src","./images/visual-studio-code.png")
    img3.setAttribute("src","./images/figma.png")
    img4.setAttribute("src","./images/github.png")
}

function iconsToLight() {
    icon1.setAttribute("src","./images/instagram-light.png")
    icon2.setAttribute("src","./images/facebook-light.png")
    icon3.setAttribute("src","./images/twitter-light.png")
}

function iconsToDark() {
    icon1.setAttribute("src","./images/instagram.png")
    icon2.setAttribute("src","./images/facebook.png")
    icon3.setAttribute("src","./images/twitter.png")
}