function hide(itemId) {
    document.getElementById(itemId).style.display = 'none';
}

function show(itemId) {
    document.getElementById(itemId).style.display = 'block';
}

function mask(itemId) {
    document.getElementById(itemId).style.visibility = 'hidden';
}

function demask(itemId) {
    document.getElementById(itemId).style.visibility = 'visible';
}

function isShown(itemId) {
    return document.getElementById(itemId).style.display !== 'none';
}

function blockForms() {
    const forms = document.querySelectorAll('form');
    for (const form of forms) {
        form.addEventListener('submit', (evt) => evt.preventDefault());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    //setUtilisateurLocal('9d7f9df1-deec-4ba5-8bab-316a0d24ef31');
    autoId();
    blockForms();
})