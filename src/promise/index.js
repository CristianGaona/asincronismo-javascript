const promise = new Promise((resolve, reject)=>{
    resolve()
});


const cows = 20;

const countCows = new Promise((resolve, reject)=>{
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm` );
    }else{
        reject(`There are no cows on the farms`)
    }
});


countCows.then((result)=>{
    console.log(result);
}).catch((error) =>{
    console.log(error);
}).finally(()=>{
    console.log("Finally!");
})