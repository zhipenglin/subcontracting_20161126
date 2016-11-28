/**
 * Created by lzp on 2016/11/26.
 */
import utils from './utils'
import Ball from './Ball'
export default function(canvas,tags,colors){
    var context = canvas.getContext('2d'),
        balls = [],
        numBalls = tags.length,
        bounce = -0.8;
    var size=$('html').css('fontSize').match(/\d{1,}/)[0]*2-20;
    for (var radius, ball, i = 0; i < numBalls; i++) {
        var text=tags[i];
        radius = Math.random() * text.length*2 + text.length*3+size;
        ball = new Ball(radius, colors[Math.floor(Math.random()*(colors.length-1))]);
        ball.lineWidth=0;
        ball.mass = radius;
        ball.x = Math.random() * canvas.width;
        ball.y = Math.random() * canvas.height;
        ball.text=text;
        ball.vx = Math.random() * 8 - 4;
        ball.vy = Math.random() * 8 - 4;
        balls.push(ball);
    }
    function rotate (x, y, sin, cos, reverse) {
        return {
            x: (reverse) ? (x * cos + y * sin) : (x * cos - y * sin),
            y: (reverse) ? (y * cos - x * sin) : (y * cos + x * sin)
        };
    }
    function checkCollision (ball0, ball1) {
        var dx = ball1.x - ball0.x,
            dy = ball1.y - ball0.y,
            dist = Math.sqrt(dx * dx + dy * dy);
        //collision handling code here
        if (dist < ball0.radius + ball1.radius) {
            //calculate angle, sine, and cosine
            var angle = Math.atan2(dy, dx),
                sin = Math.sin(angle),
                cos = Math.cos(angle),
            //rotate ball0's position
                pos0 = {x: 0, y: 0}, //point
            //rotate ball1's position
                pos1 = rotate(dx, dy, sin, cos, true),
            //rotate ball0's velocity
                vel0 = rotate(ball0.vx, ball0.vy, sin, cos, true),
            //rotate ball1's velocity
                vel1 = rotate(ball1.vx, ball1.vy, sin, cos, true),
            //collision reaction
                vxTotal = vel0.x - vel1.x;
            vel0.x = ((ball0.mass - ball1.mass) * vel0.x + 2 * ball1.mass * vel1.x) /
                (ball0.mass + ball1.mass);
            vel1.x = vxTotal + vel0.x;
            //update position - to avoid objects becoming stuck together
            var absV = Math.abs(vel0.x) + Math.abs(vel1.x),
                overlap = (ball0.radius + ball1.radius) - Math.abs(pos0.x - pos1.x);
            pos0.x += vel0.x / absV * overlap;
            pos1.x += vel1.x / absV * overlap;
            //rotate positions back
            var pos0F = rotate(pos0.x, pos0.y, sin, cos, false),
                pos1F = rotate(pos1.x, pos1.y, sin, cos, false);
            //adjust positions to actual screen positions
            ball1.x = ball0.x + pos1F.x;
            ball1.y = ball0.y + pos1F.y;
            ball0.x = ball0.x + pos0F.x;
            ball0.y = ball0.y + pos0F.y;
            //rotate velocities back
            var vel0F = rotate(vel0.x, vel0.y, sin, cos, false),
                vel1F = rotate(vel1.x, vel1.y, sin, cos, false);
            ball0.vx = vel0F.x;
            ball0.vy = vel0F.y;
            ball1.vx = vel1F.x;
            ball1.vy = vel1F.y;
        }
    }
    function checkWalls (ball) {
        if (ball.x + ball.radius > canvas.width) {
            ball.x = canvas.width - ball.radius;
            ball.vx *= bounce;
        } else if (ball.x - ball.radius < 0) {
            ball.x = ball.radius;
            ball.vx *= bounce;
        }
        if (ball.y + ball.radius > canvas.height) {
            ball.y = canvas.height - ball.radius;
            ball.vy *= bounce;
        } else if (ball.y - ball.radius < 0) {
            ball.y = ball.radius;
            ball.vy *= bounce;
        }
    }
    function move (ball) {
        ball.x += ball.vx;
        ball.y += ball.vy;
        checkWalls(ball);
    }
    function draw (ball) {
        ball.draw(context);
    }
    (function drawFrame () {
        window.requestAnimationFrame(drawFrame, canvas);
        context.clearRect(0, 0, canvas.width, canvas.height);
        balls.forEach(move);
        for (var ballA, i = 0, len = numBalls - 1; i < len; i++) {
            ballA = balls[i];
            for (var ballB, j = i + 1; j < numBalls; j++) {
                ballB = balls[j];
                checkCollision(ballA, ballB);
            }
        }
        balls.forEach(draw);
    }());
}