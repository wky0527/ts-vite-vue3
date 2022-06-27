/*rem等比适配文件*/
//基准大小
const baseSize = 75
//设置rem函数
function setRem() {
    //当前页面宽度
    const scale = document.documentElement.clientWidth / 375
    //页面根结点字体大小
    document.documentElement.style.fontSize = baseSize * Math.min(scale ,2) + 'px'
}
setRem()
window.onresize =  function (){
    console.log('改变页面大小，我执行了')
    setRem()
}