let b = document.querySelector('button');
b.addEventListener('click', tashizan);

function tashizan() {
    let i1 = document.querySelector('input#left');
    let i2 = document.querySelector('input#right');
    let n = Number(i1.value); 
    let m = Number(i2.value);
    let p = document.querySelector('span#answer');
    p.textContent = (n+m);

}