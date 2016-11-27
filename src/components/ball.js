import utils from './utils'
function Ball (radius, color) {
    if (radius === undefined) { radius = 40; }
    if (color === undefined) { color = "#ff0000"; }
    this.x = 0;
    this.y = 0;
    this.radius = radius;
    this.vx = 0;
    this.vy = 0;
    this.mass = 1;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.color = utils.parseColor(color);
    this.lineWidth = 1;
}

Ball.prototype.draw = function (context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX, this.scaleY);

    context.lineWidth = this.lineWidth;
    context.fillStyle = utils.colorToRGB(this.color,0.7);
    context.opacity=0.8;
    context.beginPath();
    //x, y, radius, start_angle, end_angle, anti-clockwise
    context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);
    context.closePath();
    context.fill();
    if (this.lineWidth > 0) {
        context.stroke();
    }
    context.restore();
    if(this.text){
        context.fillStyle='rgba(255,255,255,0.8)';
        context.textAlign="center";
        context.font="20px Arial";
        var textList=this.text.split('\n');
        textList.forEach((n,i)=>{
            context.fillText(n,this.x, this.y+20*(i-textList.length/2)+20);
        });
    }
};

Ball.prototype.getBounds = function () {
    return {
        x: this.x - this.radius,
        y: this.y - this.radius,
        width: this.radius * 2,
        height: this.radius * 2
    };
};

export default Ball;