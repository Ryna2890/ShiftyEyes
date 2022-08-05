const test = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve()
    }, 1000)
})
console.log(test)
setTimeout(()=>{console.log(test)},500)
setTimeout(()=>{console.log(test)},1500)

const a = Promise.reject('a') //

const b = a.catch((value)=> value + 'p')

const c = b.then((value)=> value + 'c')