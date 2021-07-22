const styles = document.getElementById('styles')

document.getElementById("btn-a").addEventListener("click", displayDateA);
document.getElementById("btn-b").addEventListener("click", displayDateB);
document.getElementById("btn-c").addEventListener("click", displayDateC);
document.getElementById("btn-d").addEventListener("click", displayDateD);
document.getElementById("btn-e").addEventListener("click", displayDateE);

function displayDateA() {
    styles.setAttribute("href", "./css/styles-physical.css")
}

function displayDateB() {
    styles.setAttribute("href", "./css/styles-logical.css")
}

function displayDateC() {
    styles.setAttribute("href", "./css/styles-nemium-c.css")
}

function displayDateD() {
    styles.setAttribute("href", "./css/styles-nemium-d.css")
}

function displayDateE() {
    styles.setAttribute("href", "./css/styles-nemium-e.css")
}
