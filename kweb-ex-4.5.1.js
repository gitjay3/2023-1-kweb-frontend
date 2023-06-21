/*Step 1: .item 요소들은 그 물품의 이름을 id 값으로 가지고 있다. 각 id가 key, 해당 물품의 단가를 value로
하는 객체를 만든다. 그리고, 필요한 변수/상수들을 선언하고 할당한다.*/
const itemPrice = {
    apple: 700,
    orange: 800,
    lemon: 900,
};
let totalPrice = 0;

/*Step 2: 이 문제에서는 여러 요소에 이벤트 리스너를 등록해야 하므로 등록할 요소들을 선택하고, for-of문을
사용하여 각 요소에 이벤트 리스너를 등록한다.*/

/*Step 3: 이벤트가 발생한 요소가 속한 .item 요소의 id 값을 가져와 총 금액을 갱신하는 이벤트 리스너를
구현한다.*/
for (const buttonEl of document.getElementsByClassName('add-to-cart')) {
    buttonEl.addEventListener('click', event => {
        const itemName = event.target.parentNode.parentNode.getAttribute('id');
        totalPrice += itemPrice[itemName];
        document.getElementById('cost').innerText = totalPrice;
    });
}