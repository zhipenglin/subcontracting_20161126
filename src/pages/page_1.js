/**
 * Created by lzp on 2016/11/26.
 */
import loadPage from '../util/loadPage'
import '../style/pages/page_1.less'

export default function(){
    loadPage(0);
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },3000);
    });
}