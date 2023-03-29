let div1 = document.querySelector('.div1');
let div2 = document.querySelector('.div2');

const ocultar = () =>{

    if(div1.classList.contains('none')){
        div1.classList.remove('none');
        div2.classList.add('none');
    }   
    else {
        div2.classList.remove('none');
        div1.classList.add('none')

    }

}

