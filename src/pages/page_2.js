/**
 * Created by lzp on 2016/11/26.
 */
import loadPage from '../util/loadPage'
import '../style/pages/page_2.less'

export default function(){
    var page=loadPage(1);
    return new Promise((resolve)=>{
        var current=99,currentP=0;
        var timer=setInterval(()=>{
            if(current>window.lastDay){
                page.find('.title span').text(current);
                current--;
            }else{
                clearInterval(timer);
            }
        },20);
        var timer2=setInterval(()=>{
            if(currentP<=window.lastDayP){
                page.find('.clock-inner').text(`${Math.floor(currentP*100)}%`);
                currentP+=0.01;
            }else{
                clearInterval(timer2);
            }
        },20);
        page.find('.clicker').click(()=>{
            resolve();
        });
    });
}