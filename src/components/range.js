export default class Range{
    constructor($el,options){
        this.$el=$($el);
        this.options=Object.assign({
            start:0,
            end:100
        },options);
    }
}