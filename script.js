const errorNom = document.querySelector('#error-nom');
const errorPrenom = document.querySelector('#error-prenom');
const errorEmail = document.querySelector('#error-email');
const errorPassword = document.querySelector('#error-password');
const errorPassword2 = document.querySelector('#error-password2');

const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const btn = document.getElementById('btn');

// Afficher/masquer le mot de passe
const togglePasswordBtn = document.querySelectorAll('.toggle-password');
togglePasswordBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const passwordInput = btn.previousElementSibling;
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            btn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
        } else {
            passwordInput.type = 'password';
            btn.innerHTML = '<i class="fa-solid fa-eye"></i>';
        }
    });
});

// Vérifier la validité de l'email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Fonction pour afficher un message de succès
function showSuccessMessage() {
    const successMessage = document.createElement('div');
    successMessage.classList.add('success-message');
    successMessage.textContent = 'Votre inscription a été réussie !';

    const container = document.querySelector('.container');
    container.appendChild(successMessage);

    // Cacher le message après 3 secondes
    setTimeout(() => {
        successMessage.remove();
    }, 3000);
}

// Fonction de validation du formulaire
function validateForm() {
    let isValid = true;

    if (nom.value.trim() === '' || nom.value.trim().length < 5 || nom.value.trim().length > 30) {
        errorNom.style.display = 'block';
        isValid = false;
    } else {
        errorNom.style.display = 'none';
    }

    if (prenom.value.trim() === '' || prenom.value.trim().length < 5 || prenom.value.trim().length > 30) {
        errorPrenom.style.display = 'block';
        isValid = false;
    } else {
        errorPrenom.style.display = 'none';
    }

    if (email.value.trim() === '' || !isValidEmail(email.value)) {
        errorEmail.style.display = 'block';
        isValid = false;
    } else {
        errorEmail.style.display = 'none';
    }

    if (password.value.trim() === '' || password.value.trim().length < 8 || password.value.trim().length > 50) {
        errorPassword.style.display = 'block';
        isValid = false;
    } else {
        errorPassword.style.display = 'none';
    }

    if (password2.value.trim() === '' || password.value !== password2.value) {
        errorPassword2.style.display = 'block';
        isValid = false;
    } else {
        errorPassword2.style.display = 'none';
    }

    if (isValid) {
        // Traiter le formulaire si valide
        console.log(nom.value, prenom.value, email.value, password.value, password2.value);
        showSuccessMessage();
        
    }
}

// Écouter l'événement click du bouton d'envoi
btn.addEventListener('click', (e) => {
    e.preventDefault();
    validateForm();
});
