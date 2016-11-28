/**
 * Created by lzp on 2016/11/26.
 */
import loadPage from '../util/loadPage'
import '../style/pages/page_8.less'

export default function(){
    var page=loadPage(7);
    return new Promise(()=>{
        console.log(window.score);
        page.find('.red .slider .slider-inner').css('width',`${window.score/4}%`);
        page.find('.red .slider .num').text(`${Math.round(window.score/4)}%`);

        page.find('.blue .slider .slider-inner').css('width',`${window.lastDayP}%`);
        page.find('.blue .slider .num').text(`${window.lastDayP}%`);

        page.find('.result .time').text(window.lastDay);
        if(window.score/4<25){
            page.find('.result .des').html('<p>你最大的问题是想得太多，</p><p>做的有点少！</p><p>赶快行动起来，成就就会更多！</p>');
        }else if(window.score/4<50){
            page.find('.result .des').html('<p>奔跑吧~骚年！</p><p>你可以让自己更非凡</p>');
        }else if(window.score/4<75){
            page.find('.result .des').html('<p>敢行动，成就更生动！</p><p>不过革命尚未成功，</p><p>同志还需努力哦！</p>');
        }else{
            page.find('.result .des').html('<p>说到做到，</p><p>实现自己的承诺！</p><p>坚持下去，</p><p>你可以改变世界</p>');
        }
        page.find('.clicker').click(()=>{
            $('.share').show();
        });
        $('.share').click(()=>{
            $('.share').hide();
        });
    });
}