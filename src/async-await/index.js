const fnAsync = () =>{
    return new Promise((resolve, reject)=>{
        (true) ? setTimeout(() => resolve('Asyc!!'), 2000) 
            : reject(new Error('Erro!'));
    });
}

const anotherFunt = async () =>{
    const something = await fnAsync();
    console.log(something);
    console.log("Hello!");
}

console.log('Before!');
await anotherFunt();
console.log('After!');