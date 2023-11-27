
let offsetX, offsetY, isDragging = false;
let currentWindowId, zIndexCounter = 1;
let ecranConnexion

document.getElementById("popUp").style.display = "none"
document.getElementById("profil").style.display = "none"
document.getElementById("experience").style.display = "none"
document.getElementById("contact").style.display = "none"
document.getElementById("loader").style.display = "none"


function startDragging(e, windowId) {
    const windowElement = document.getElementById(windowId);
    offsetX = e.clientX - windowElement.getBoundingClientRect().left;
    offsetY = e.clientY - windowElement.getBoundingClientRect().top;
    isDragging = true;
    currentWindowId = windowId

    zIndexCounter += 1; 
    windowElement.style.zIndex = zIndexCounter;

    window.addEventListener('mousemove', dragWindow);
    window.addEventListener('mouseup', stopDragging);
}

function dragWindow(e) {
    if (!isDragging) return;

    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;

    const windowElement = document.getElementById(currentWindowId);

    windowElement.style.left = `${x}px`;
    windowElement.style.top = `${y}px`;
}

function stopDragging() {
    isDragging = false;
    window.removeEventListener('mousemove', dragWindow);
    window.removeEventListener('mouseup', stopDragging);
}

function closeWindow(windowId) {
    const windowElement = document.getElementById(windowId);
    windowElement.style.display = 'none';
}


function openWindow(windowId) {
    const windowElement = document.getElementById(windowId);
    windowElement.style.display = 'block'
    zIndexCounter += 1;
    windowElement.style.zIndex = zIndexCounter;

}

function minimizeWindow(windowId) {
    const windowElement = document.getElementById(windowId);
    windowElement.style.height = '30px';
    windowElement.style.width = '100px';
    const windowElementResize = document.querySelectorAll("#resize")
    windowElement.style.zIndex = '0';
    
}

function maximizeWindow(windowId) {
    const windowElement = document.getElementById(windowId);
    windowElement.style.width = '100%';
    windowElement.style.height = '100%';
    windowElement.style.left = '0';
    windowElement.style.top = '0';

    zIndexCounter += 1;
    windowElement.style.zIndex = zIndexCounter;
}


function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleBtn = document.getElementById('toggleBtn');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleBtn.textContent = 'Hide';
    } else {
      passwordInput.type = 'password';
      toggleBtn.textContent = 'Show';
    }
}




// document.addEventListener('mousedown', function() {
//     zIndexCounter += 1;
//     const windows = document.querySelectorAll('.window');
//     windows.forEach(windowElement => {
//         windowElement.style.zIndex = zIndexCounter;
//     });
// });



const monInput = document.getElementById('password');
function delaiAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let delai = delaiAleatoire(1000, 4000);



document.addEventListener('keydown', function(event) {

    if (event.keyCode === 13) {
        const password = document.getElementById('password');
        let inputPass = password.value;
        
        if (inputPass === "jesuisunpoisson") {
            document.getElementById("pageConnexion").style.display = "none"
        }
    }
});
monInput.addEventListener('input', function() {
    const valeurInput = monInput.value;

    if (valeurInput === "motdepasse") {
        document.getElementById("loader").style.display = "block"
        document.getElementById("password").style.display = "none"

        setTimeout(function() {
            document.getElementById("loader").style.display = "none"
            document.getElementById("pageConnexion").style.display = "none"
        }, delai);


        
    }
});



