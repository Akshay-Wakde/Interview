// function debounce(fn, delay) {
//   let timeout;

//   return function (...args) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//   };
// }


// const log = debounce(() => {
//   console.log("Executed!");
// }, 500);

// log();
// log();
// log();
// "Executed!" prints only once, after 500 ms of no new calls


function debouncing(func,timer){
  let time;

  return function(...param){
    clearTimeout(time);
    time =  setTimeout(() => {
      func.apply(this,param)
    },timer);
  }
}

const log2 = debouncing((param) => {
  console.log(param)
},1000)
log2("H");
log2("Hi");
log2("Hig");
log2("High Beam");






























function deboucing(fn,delay){
  let timer;
  return function(...args){
    clearTimeout(timer);
    timer = setTimeout(() =>{
      fn.apply(this,args);
    },delay);
  }
}









function deboucing(fn,delay){
  let timer;
    return function(...param){
      clearTimeout(timer);
      timer = setTimeout(()=>{
       fn.apply(param);
      },delay);
  }

}



const search = deboucing((input)=>{

},500);




