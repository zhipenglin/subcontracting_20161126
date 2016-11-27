/**
 * Created by lzp on 2016/11/26.
 */
import loadPage from '../util/loadPage'
import '../style/pages/page_3.less'
import rangesliderJs from 'rangeslider-js'
import balloon from '../components/balloon'

export default function(){
    var page=loadPage(2);
    return new Promise((resolve)=>{
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