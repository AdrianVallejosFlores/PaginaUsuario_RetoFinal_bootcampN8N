let cartItems = 0;

function addToCart(name) {
    cartItems++;
    document.getElementById('cartCount').textContent = cartItems;
    showToast(`"${name}" agregado al carrito`);
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMsg').textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2800);
}

function subscribeNewsletter() {
    const email = document.getElementById('emailInput').value.trim();
    if (!email || !email.includes('@')) {
        document.getElementById('emailInput').style.borderColor = 'var(--red)';
        return;
    }
    document.getElementById('emailInput').style.borderColor = '';
    document.getElementById('emailInput').value = '';
    showToast('¡Suscrito! Bienvenido a la comunidad maker.');
}

function startCountdown() {
    let h = 3, m = 47, s = 0;
    setInterval(() => {
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 0; m = 0; s = 0; }
        document.getElementById('cdH').textContent = String(h).padStart(2,'0');
        document.getElementById('cdM').textContent = String(m).padStart(2,'0');
        document.getElementById('cdS').textContent = String(s).padStart(2,'0');
    }, 1000);
}

startCountdown();