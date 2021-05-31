import  { removeInput , showInput } from '../Scenes/helper'


test('Show input will show the div which contains the input field ', () => {
    document.body.innerHTML = `<div></div>`;
  const user = document.querySelector('div')
    showInput()
    expect(user.classList.contains('hide')).toBeFalsy();
    expect(user.classList.contains('show')).toBeTruthy();
  });

  test('Remove input will hide the div which contains the input field and delete any text in the input ', () => {
    document.body.innerHTML = `<div>
    <input type="text" />
    </div>`;
    const input = document.querySelector('input');
    const user = document.querySelector('div');
    removeInput()
    expect(user.classList.contains('show')).toBeFalsy();
    expect(user.classList.contains('hide')).toBeTruthy();
    expect(input.value).toEqual('');
  });

