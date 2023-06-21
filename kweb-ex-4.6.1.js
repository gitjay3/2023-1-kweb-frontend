/* Step 0: 이 문제의 미로는 #maze 요소 내부에 정사각형 요소가 7행 8열로 배치되어 있다. 사각형의 위치는
행과 열을 이용하여 나타내고, row와 col을 속성으로 갖는 위치 객체를 이용한다. 예를 들어 탈출 지점은 1
행 7열에 위치하며, 탈출 지점의 위치 객체는 { row: 1, col: 7 }이다.*/

// Step 1: 행과 열의 최솟값과 최댓값을 나타내는 상수를 선언하고, 붉은 사각형의 위치 객체를 선언한다.
const ROW_MIN = 0;
const ROW_MAX = 6;
const COL_MIN = 0;
const COL_MAX = 7;
const currentPos = { row: 5, col: 0 };

// Step 2: 위치 객체를 인자로 받아 해당 위치에 있는 요소를 반환하는 함수 getElementByPosition을 구현한다.
const getElementByPosition = pos => {
    const cellsEl = document.getElementsByClassName('cells')[pos.row];
    return cellsEl.getElementsByClassName('cell')[pos.col];
};

/* Step 3: 이벤트 객체의 키 입력값을 인자로 받아 붉은 사각형의 위치에서 키 입력에 따라 이동한 새로운 위치
객체를 반환하는 함수 getNewPositionByKey를 구현한다.*/
const getNewPositionByKey = key => {
    const pos = {
        row: currentPos.row,
        col: currentPos.col,
    }
    switch (key) {
        case 'ArrowUp': pos.row--; break;
        case 'ArrowDown': pos.row++; break;
        case 'ArrowLeft': pos.col--; break;
        case 'ArrowRight': pos.col++; break;
    }
    return pos;
};

/*Step 4: 인자로 받은 위치 객체가 미로 내에 존재하는지 판별하여 반환하는 함수 isPositionInRange를 구현
한다.*/
const isPositionInRange = pos => (pos.row >= ROW_MIN)
    && (pos.row <= ROW_MAX) && (pos.col >= COL_MIN) && (pos.col <= COL_MAX);

    // Step 5: 인자로 받은 위치 객체가 미로의 벽인지 판별하여 반환하는 함수 isPositionWall을 구현한다.
const isPositionWall = pos => getElementByPosition(pos).classList.contains('wall');

/*Step 6: 방향키를 떼었을 때의 이벤트 리스너를 구현한다. 먼저 현재 위치의 사각형을 붉은 사각형에서 해제하
고, 키 입력값을 이용하여 새로운 위치를 구한다. 새로운 위치가 적절한 위치이면 현재 위치를 새로운 위치로
바꾸고, 새로운 위치의 사각형을 붉은 사각형으로 지정한다. 마지막으로 새로운 위치가 탈출 지점이면 You
Escaped! 문구를 경고창으로 띄운다.*/
document.addEventListener('keyup', event => {
    getElementByPosition(currentPos).classList.remove('current');
    const newPos = getNewPositionByKey(event.code);
    if (isPositionInRange(newPos) && !isPositionWall(newPos)) {
        currentPos.row = newPos.row;
        currentPos.col = newPos.col;
    }
    const newElmt = getElementByPosition(currentPos);
    newElmt.classList.add('current');
    if (newElmt.classList.contains('target')) alert('You escaped!');
});