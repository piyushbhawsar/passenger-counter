// document.getElementById("countElement").innerText = 5 

// let bonus = 50 
// bonus += 50 , console.log(bonus)
// bonus -= 75 , console.log(bonus)
// bonus += 45 , console.log(bonus)

// listen for clicks on the increment button -> onclick attribute to invoke our func()  
let count = 0 
function increment() {
    count++ ;
    document.getElementById("count-ele").innerText = count 
}
/*2nd*/ function save() {
    let countSave = count+"-"
    document.getElementById("save-ele").innerText += countSave
    count = 0
    document.getElementById("count-ele").innerText = count
}