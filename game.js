// game.js

const spider = document.getElementById('spider');
const obstacle = document.getElementById('obstacle');
let isJumping = false;
let gravity = 0.9;

function jump() {
    if (isJumping) return;
    isJumping = true;
    let position = 0;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                }
                position -= 5;
                spider.style.bottom = position + 'px';
            }, 20);
        }
        position += 5;
        spider.style.bottom = position + 'px';
    }, 20);
}

function moveObstacle() {
    let obstaclePosition = 1000;

    let timerId = setInterval(() => {
        if (obstaclePosition < 0) {
            clearInterval(timerId);
            obstacle.style.display = 'none';
        } else {
            obstaclePosition -= 10;
            obstacle.style.left = obstaclePosition + 'px';
        }
    }, 20);
}

document.addEventListener('keydown', (event) => {
    if (event.key === ' ') {
        jump();
    }
});

moveObstacle();
