const Promise = require('./promise.js');
// 将要执行的耗时任务封装在executor里面，实例化时就开始执行。
// resolve ?
// reject ?
// 形参 类型是函数
const p = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('hello');
    },2000);
   
});
p.then((data) => {
    console.log(data);
},(err) => {
    console.log(err)
});