const scriptURL =
    'https://script.google.com/macros/s/AKfycbzCWh9YCoJLH7NIRvJW0H9JhRlCQmxSZMF5cWANq9ypekZPWMyN_uacSkfZaGnUjQ-Q/exec';
const form = document.forms['ongky rinaldo - contact form'];
const btnSend = document.querySelector('.btn-send');
const btnLoading = document.querySelector('.btn-loading');
const formAlert = document.querySelector('.form-alert');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    btnLoading.classList.toggle('d-none');
    btnSend.classList.toggle('d-none');
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then((response) => {
            btnLoading.classList.toggle('d-none');
            btnSend.classList.toggle('d-none');
            formAlert.classList.toggle('d-none');
            form.reset();
            console.log('Success!', response);
        })
        .catch((error) => console.error('Error!', error.message));
});
