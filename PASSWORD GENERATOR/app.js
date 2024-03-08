const generatEl = document.getElementById('generate-el')
let displayEl = document.getElementById('display-el')
const lowerCaseLetters = ['a','b','c','d','e','f','g','h','i',
'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const upperCaseLetters =['A','B','C','D','E','F','G','H','I',
'J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const numbers = [1,2,3,4,5,6,7,8,9,0]
const special =['!','@','#','$','%','^','?','*','<','>','_','-']





generatEl.addEventListener("click",function(){
    let rU1 = Math.floor(Math.random()*upperCaseLetters.length)
    let rU2 = Math.floor(Math.random()*upperCaseLetters.length)
    let rL1 = Math.floor(Math.random()*lowerCaseLetters.length)
    let rN1 = Math.floor(Math.random()*numbers.length)
    let rN2 = Math.floor(Math.random()*numbers.length)
    let rN3 = Math.floor(Math.random()*numbers.length)
    let rS = Math.floor(Math.random()*special.length)
    let rL2 = Math.floor(Math.random()*lowerCaseLetters.length)

        let position =[upperCaseLetters[rU1],upperCaseLetters[rU2], lowerCaseLetters[rL1],lowerCaseLetters[rL2],numbers[rN1],special[rS],numbers[rN2],numbers[rN3]]

    
    displayEl.textContent =""


    let rP = Math.floor(Math.random()*position.length)
  
    for(let i = 0 ; i < position.length ; i++){
       

        displayEl.textContent += `${position[randomNumber()]}`
        //console.log(position[i])
        
    }
   // displayEl.textContent = position[0]+position[1]+position[2]+position[3]+position[4]+position[5]+position[6]+position[7]
    function randomNumber(){
    return Math.floor(Math.random()*position.length)
}
console.log(position[randomNumber()])
})



