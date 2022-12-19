let vardas = document.getElementById('fn');

vardas.addEventListener('input', manoveiksmai);

function manoveiksmai(e) {
    console.log(e.target.value);
}


let meniu = document.querySelector('header > nav > ul');
function generuotiMeniuElementa(elementoTekstas, url){
    let meniuItem = document.createElement('li');
    meniuItem.innerHTML = '<a href="'+url+'">'+elementoTekstas+'</a>'

    return meniuItem;
}

let meniuDuomenys = [
    {text:'Home', url:'index.html'},
    {text:'About', url:'about.html'},
    {text:'Blog', url:'blog.html'},
    {text:'Contact', url:'kontaktai.html'},
];

for (let i = 0; i < meniuDuomenys.length; i++) {
    let obj = meniuDuomenys[i];
    let node = generuotiMeniuElementa(obj.text, obj.url);
    meniu.appendChild(node);
}




