const inputImg = document.getElementById('files')
const btn = document.getElementById('btn')
const arr = document.getElementsByClassName('form-control');

inputImg.addEventListener('change', function() {
    const file = this.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = e.target.result;
        localStorage.setItem('img', img);
    };
    reader.readAsDataURL(file);
})

btn.addEventListener('click', () => {
    let object = {
        url: '',
        name: `${arr[1].value}`,
        surname: `${arr[2].value}`,
        activity: `${arr[3].value}`,
        "birth-year": `${arr[4].value}`,
    }
    const string = JSON.stringify(object)
    localStorage.setItem('object', string);
    window.location.href = '../index.html'
})









