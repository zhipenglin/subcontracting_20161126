export default function(index){
    $('.stage .page.active').addClass('dis-active');
    return $(`.stage .page:eq(${index})`).addClass('active');
}