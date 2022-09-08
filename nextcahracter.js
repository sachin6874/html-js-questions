let string="z9Z"

let len=string.length
let string2=""

for(let i =0;i<len;i++){
    let code=0;
    code=string.charCodeAt(i)
    if(code==57){
        code=48
    }   
    else if(code==90){
        code=65
    }
    else if(code==122){
        code=97
    }
    else{

        code+=1
    }
    let word=String.fromCharCode(code)
     string2=string2+word
}
console.log(string2)
