const removeInput = ()=> {
    const input = document.querySelector('input');
    const user = document.querySelector('div');
    user.classList.remove('show');
    user.classList.add('hide');
    input.value = '';
}

const showInput = ()=> {
    const user = document.querySelector('div');
    user.classList.remove('hide');
    user.classList.add('show');
}


export { removeInput , showInput }