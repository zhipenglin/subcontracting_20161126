/**
 * Created by lzp on 2016/11/26.
 */
import loadPage from '../util/loadPage'
import '../style/pages/page_6.less'
import balloon from '../components/balloon'
import rangesliderJs from 'rangeslider-js'

export default function(){
    var page=loadPage(5);
    var tags=['新结识\n兴趣相投的朋友','财富\n增长20%','创业',
        '跳槽成功','提升\n管理能力','成功转正','入职\n最想去的公司','和搭档配合\n越来越默契','独挡一面',
        '享受工作乐趣','提升\n外语水平','考试\n顺利通过','加薪','改掉\n一个坏习惯','得到\n客户认可','晋升'];
    var colors=['#264b68','#5095a3','#3d7a8d'];
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