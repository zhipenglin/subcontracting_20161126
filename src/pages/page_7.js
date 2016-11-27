/**
 * Created by lzp on 2016/11/26.
 */
import loadPage from '../util/loadPage'
import '../style/pages/page_7.less'

export default function(){
    var page=loadPage(6);
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },3000);
    });
}