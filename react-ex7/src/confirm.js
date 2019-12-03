
function confirm(text){
  return new Promise((resolve, reject) => {
    let confirmBool = window.confirm(text);
    confirmBool ? resolve('data') : reject();
  }).then((res)=>{
    console.log("确定删除")
    console.log(res);
    return !!res ? res : !res;
  }).catch((e)=>{
    console.log("取消删除")
  })
}

export default confirm;
