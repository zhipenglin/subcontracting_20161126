/**
 * Created by lzp on 2016/11/26.
 */
import './style/base.less'
import balloon from './components/balloon'
import setTitle from './util/setTitle'
import page_1 from './pages/page_1'
import page_2 from './pages/page_2'
import page_3 from './pages/page_3'
import page_4 from './pages/page_4'
import page_5 from './pages/page_5'
import page_6 from './pages/page_6'
import page_7 from './pages/page_7'
import page_8 from './pages/page_8'

window.lastDay=Math.floor((new Date('2017-01-01')-Date.now())/(24*3600*1000));
window.lastDayP=Math.round((1-window.lastDay/365)*100);
window.score=0;

$('.stage').height($(window).height());

function createBalloon(){
    var dataList=[{
        tags:['体重减\n掉10斤','登上一座6000米\n的高山','7:00起床',
            '戒酒','学做几道\n新菜品','一个人的\n旅行','跑一场马\n拉松','每周2次健身\n房锻炼','戒酒',
            '考到潜水证','每周跑步\n50公里','每天吃早餐','体检','读20本书','练出马甲线','24点前睡觉',
            '养一只宠物','每天8杯水'],
        colors:['#6dbdc4','#2a5f78','#20526d','#3d7a8e']
    },{
        tags:['回家\n陪父母吃饭','为宝宝\n读睡前故事','陪爸妈\n做体检',
            '回家过年','宝宝的\n生日Party','和Ta培养\n一个共同爱好','为Ta\n做早餐','结婚旅行','带父母\n去旅游',
            '参加宝宝\n的家长会','陪爸妈\n过生日','顺利脱单','为Ta准备\n生日惊喜','生小孩','结婚纪念日','步入婚礼\n殿堂'],
        colors:['#3d7a8d','#20526d','#5095a3']
    },{
        tags:['成为\n最佳团队','财富\n增长20%','创业',
        '跳槽成功','提升\n管理能力','成功转正','入职\n最想去的公司','和搭档配合\n越来越默契','独挡一面',
        '享受工作乐趣','提升\n外语水平','考试\n顺利通过','加薪','改掉\n一个坏习惯','得到\n客户认可','晋升'],
        colors:['#6dbdc4','#3d7a8e','#20526d']
    },{
        tags:['新结识\n兴趣相投的朋友','出国旅行一次','回母校\n参加同学聚会','参加\n社团活动','每月\n老友聚会',
            '看到10场经典的\n舞台剧/演出','一次秉烛夜谈','做Ta的\n伴郎/伴娘','到现场为自己的\n偶像助威','为朋友精心\n准备一份礼物',
            '做一次志愿者','和多年未见的\n老友留下一张合影','和朋友做一件\n疯狂的小事儿'],
        colors:['#264b68','#5095a3','#3d7a8d']
    }];
    for(var i=0;i<dataList.length;i++){
        var canvas=$(`.page:eq(${i+2}) .balloon`);
        canvas[0].width=canvas.width()*2;
        canvas[0].height=canvas.height()*2;
        balloon(canvas[0],dataList[i].tags,dataList[i].colors);
    }
}

async function start(){
    $('.stage').show();
    createBalloon();
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

setTitle(`2016还剩${window.lastDay}天，快来看看你年初的计划完成了多少？`);