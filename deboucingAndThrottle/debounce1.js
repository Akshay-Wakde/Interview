
function debounce(fn ,delay){

    let timerId;
    return function(...args){
      clearTimeout(timerId);
     timerId = setTimeout(() => {
         fn(...args);
       },delay);
    }
}



const search = (query) => {
    console.log(`Searching for :${query}`);
}



const searchWithDebounce = debounce(search , 700);

searchWithDebounce("H");
searchWithDebounce("Hi");
























