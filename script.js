let offsetX, offsetY, isDragging = false;
let currentWindowId;

function startDragging(e, windowId) {
    const windowElement = document.getElementById(windowId);
    offsetX = e.clientX - windowElement.getBoundingClientRect().left;
    offsetY = e.clientY - windowElement.getBoundingClientRect().top;
    isDragging = true;
    currentWindowId = windowId

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
}

function minimizeWindow(windowId) {
    const windowElement = document.getElementById(windowId);
    windowElement.style.height = '30px';
    windowElement.style.width = '100px';
    const windowElementResize = document.querySelectorAll("#resize")
    
}

function maximizeWindow(windowId) {
    const windowElement = document.getElementById(windowId);
    windowElement.style.width = '100%';
    windowElement.style.height = '100%';
    windowElement.style.left = '0';
    windowElement.style.top = '0';
}
