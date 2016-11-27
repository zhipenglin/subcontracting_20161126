/**
 * Created by lzp on 2016/11/26.
 */
import loadPage from '../util/loadPage'
import '../style/pages/page_4.less'
import rangesliderJs from 'rangeslider-js'
import balloon from '../components/balloon'

export default function(){
    var page=loadPage(3);
    var tags=['回家\n陪父母吃饭','为宝宝\n读睡前故事','陪爸妈\n做体检',
        '回家过年','宝宝的\n生日Party','和Ta培养\n一个共同爱好','为Ta\n做早餐','结婚旅行','带父母\n去旅游',
        '参加宝宝\n的家长会','陪爸妈\n过生日','顺利脱单','为Ta准备\n生日惊喜','生小孩','结婚纪念日','步入婚礼\n殿堂'];
    var colors=['#3d7a8d','#20526d','#5095a3'];
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