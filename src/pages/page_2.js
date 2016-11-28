/**
 * Created by lzp on 2016/11/26.
 */
import loadPage from '../util/loadPage'
import '../style/pages/page_2.less'

export default function(){
    var page=loadPage(1);
    return new Promise((resolve)=>{
        var current=60,currentP=60;
        setTimeout(()=>{
            var timer=setInterval(()=>{
                if(current>=window.lastDay){
                    page.find('.title span').text(current);
                    current--;
                }else{
                    clearInterval(timer);
                }
            },20);
        },2000);
        setTimeout(()=>{
            var timer2=setInterval(()=>{
                if(currentP<=window.lastDayP){
                    page.find('.clock-inner').text(`${currentP}%`);
                    currentP+=1;
                    page.find('.clock-du').addClass('active');
                }else{
                    clearInterval(timer2);
                }
            },20);
        },2000);
        page.find('.clicker').click(()=>{
            resolve();
        });
    });
}