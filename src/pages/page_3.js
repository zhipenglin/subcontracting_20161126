/**
 * Created by lzp on 2016/11/26.
 */
import loadPage from '../util/loadPage'
import '../style/pages/page_3.less'
import rangesliderJs from 'rangeslider-js'
import balloon from '../components/balloon'

export default function(){
    var page=loadPage(2);
    var tags=['体重减\n掉10斤','登上一座6000米\n的高山','7:00起床',
        '戒酒','学做几道\n新菜品','一个人的\n旅行','跑一场马\n拉松','每周2次健身\n房锻炼','戒酒',
        '考到潜水证','每周跑步\n50公里','每天吃早餐','体检','读20本书','练出马甲线','24点前睡觉',
        '养一只宠物','每天8杯水'];
    var colors=['#6dbdc4','#2a5f78','#20526d','#3d7a8e'];
    return new Promise((resolve)=>{
        var canvas=page.find('.balloon');
        canvas[0].width=canvas.width()*2;
        canvas[0].height=canvas.height()*2;
        balloon(canvas[0],tags,colors);
        var score=0;
        rangesliderJs.create(page.find('.bottom-slider input')[0],{
            onSlide(value){
                page.find('.bottom-slider .num').text(value);
                score=value;
            }
        });
        page.find('.next-btn').click(()=>{
            window.score+=score;
            resolve();
        });
    });
}