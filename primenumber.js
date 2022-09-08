arr1=[1,2,3,7,11,13,10,12,50,20]
let sum=0
for(let i=0;i<arr1.length;i++){
    let num=arr1[i]
    let c=0
    for(let j =1;j<=num;j++){
      if(num%j==0){
         c++
      }
    }
    if(c==2){
        sum=sum+num
    }

}
console.log(sum)