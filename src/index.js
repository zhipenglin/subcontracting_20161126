/**
 * Created by lzp on 2016/11/26.
 */
import './style/base.less'
import page_1 from './pages/page_1'
import page_2 from './pages/page_2'
import page_3 from './pages/page_3'
import page_4 from './pages/page_4'
import page_5 from './pages/page_5'
import page_6 from './pages/page_6'
import page_7 from './pages/page_7'
import page_8 from './pages/page_8'

window.lastDay=Math.floor((new Date('2017-01-01')-Date.now())/(24*3600*1000));
window.lastDayP=1-window.lastDay/365;
window.score=0;

$('.stage').height($(window).height());

async function start(){
    $('.stage').show();
    await page_1();
    await page_2();
    await page_3();
    await page_4();
    await page_5();
    await page_6();
    await page_7();
    await page_8();
}

start();

$('.bgm').click(function(){
    if($(this).is('.disable')){
        $(this).removeClass('disable');
        document.getElementById('weixinsound').play();
    }else{
        $(this).addClass('disable');
        document.getElementById('weixinsound').pause();
    }
});