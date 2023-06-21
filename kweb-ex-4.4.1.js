// Step 1 : 레벨업 성공 확률을 % 단위, number 형의 배열로 저장한다.
const levelps = [ 100, 60, 36, 22, 13, 8, 5, 3, 2, 1 ];

// Step 2 : 레벨, 시도 횟수 등 필요한 값을 변수와 상수로 선언한다.
let level = 0;
let attempt = 0;

// Step 3 : % 단위의 확률값을 인자로 받아 해당 확률에 따라 무작위로 성공 여부를 판별하여 반환하는 함수를 구현한다.
const getRandomBinaryResult = ratio => {
const randomNumber = Math.floor(Math.random() * 100);
return (randomNumber < ratio);
};

// Step 4 : 버튼을 눌렀을 때 작동하는 기능은 tryLevelUp 함수 내부에 작성한다.
const tryLevelUp = () => {
    const loopId = setInterval(() => {
        attempt++;
        const successed = getRandomBinaryResult(probs[level]);
        if (successed) {
            level++;
            document.getElementById('gauge-bar').style.width = level * 10 + '%';
            document.getElementById('current-level').innerText = level;
        }
        document.getElementById('attempts').innerText = attempt;
        if (level >= 10) clearInterval(loopId);
    }, 50);
};