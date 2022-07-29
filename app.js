let s=''
var seasonsArray =''
var fruitsArray=[]
var vegetablesArray=[]
var gameFruits=''
var fruits=[]
var selectFruits=[]
let question=''
var seasonQuestion=''
var seasonResponse=''
let finalResut=[]
let textResult=''
var winterButton=document.querySelector('#hiver')
var fallButton=document.querySelector('#automne')
var springButton=document.querySelector('#printemp')
var summerButton=document.querySelector('#été')
var responseArray=[]
var trashArray=''
let winterId=0
let springId=1
let fallId=3
let summerId=2



winterButton.addEventListener('click',testWinter)

fallButton.addEventListener('click',testFall)

summerButton.addEventListener("click",testSummer)

springButton.addEventListener("click",testSpring)

function testWinter(){

if(responseArray.includes(winterId)){
    responseArray=[]
}else{
    responseArray.push(winterId)}
    console.log(responseArray)
}

function testFall(){
console.log(responseArray)
if(responseArray.includes(fallId)){
    responseArray=[]
}else{
    responseArray.push(fallId)}
    console.log(responseArray)
}

function testSummer(){
    console.log(responseArray)
    if(responseArray.includes(summerId)){
        responseArray=[]
    }else{
        responseArray.push(summerId)}
        console.log(responseArray)
}

function testSpring(){
    console.log(responseArray)
    if(responseArray.includes(springId)){
        responseArray=[]
    }else{
        responseArray.push(springId)}
        console.log(responseArray)
}

fetch('/source.json')

  .then((res) => res.json() )
  .then(function(myJson) {
    var jsonSeasonsArray= myJson.seasons;
    var jsonFruitsArray=myJson.fruits;
    var jsonVegetablesArray=myJson.vegetables
    console.log(jsonSeasonsArray)
    localStorage.setItem("seasonsArray", JSON.stringify(jsonSeasonsArray))
    localStorage.setItem("fruitsArray", JSON.stringify(jsonFruitsArray))
    localStorage.setItem("vegetablesArray", JSON.stringify(jsonVegetablesArray))
  }
  )
  seasonsArray=JSON.parse(localStorage.getItem("seasonsArray"))
  console.log(seasonsArray)
  fruitsArray=JSON.parse(localStorage.getItem("fruitsArray"))
  console.log(fruitsArray)
  vegetablesArray=JSON.parse(localStorage.getItem("vegetablesArray"))
  console.log(vegetablesArray)

function fruitsSelect(){
  textResult=''
  let m=0;

  m=(Math.floor(Math.random() * fruitsArray.length))

question=fruitsArray[m]
restFruits =fruitsArray.splice(m,1)
seasonQuestion=question.seasonId.map(e=>e)
  console.log(question.name)
  console.log(seasonsArray)
  seasonResponse=seasonQuestion.map(season=>seasonsArray[season])
  console.log(finalResut)
  console.log(seasonResponse)
  console.log(seasonQuestion)
  for (i=0;i<=(seasonResponse.length-1);i++){
    if(i ==(seasonResponse.length-3)){
      textResult+=`${seasonResponse[i]}, `
    }else if(i==(seasonResponse.length-2)){
      textResult+=`${seasonResponse[i]} et `
    }else{
      textResult+=`${seasonResponse[i]}. `
    }
  }
  

}
var input=document.querySelector('input')
var body =document.querySelector('div')
var button=document.querySelector('button')
var result=document.querySelector('#result')


body.addEventListener('click',fruitsSelect)
button.addEventListener('click',function(){
  console.log(responseArray[0])
  responseArray=responseArray.sort()
  seasonQuestion=seasonQuestion.sort()
  let totalQuestionArray=null
  let lenQuestion=seasonQuestion.length
  let totalResponseArray=null
  let lenResponse=responseArray.length
  let intQuestionArray=seasonQuestion.map((e)=>parseInt(e))
  totalResponseArray = responseArray.reduce((a,b)=>parseInt(a)+parseInt(b))
  totalQuestionArray=seasonQuestion.reduce((a,b)=>parseInt(a)+parseInt(b))
console.log(intQuestionArray)
  console.log(totalResponseArray)
  console.log(totalQuestionArray)
  console.log(seasonQuestion)
  if(totalResponseArray==totalQuestionArray&&lenQuestion==lenResponse){
    console.log(`Vous avez raison ${question.name} sont récolté  ${textResult}`)
    console.log(fruits)
    finalResut.push(2)

  }else if(responseArray.length==0&&seasonQuestion.length>1){
    console.log(`Vous devez séléctionner au moins une réponse (mais plusieurs réponse pour cette question... C'est plutot conseillé <<wink--wink>> )`)
  }else if(responseArray.length==0&&seasonQuestion.length==1){
    console.log(`Vous devez séléctionner une réponse.`)
  }else if(lenQuestion<lenResponse){
    console.log(`Raté  ${question.name}ne sont récoltés qu' ${textResult}`)
    finalResut.push(0)
  }else if((lenQuestion==2&&lenResponse==1)&&(intQuestionArray.includes(responseArray[0]))){
    console.log(`C'est pas tout à fait ça ${question.name} sont récoltés  ${textResult}`)
    finalResut.push(1)
  }else if((lenQuestion==3&&lenResponse==2)){
    if(((intQuestionArray[0]==responseArray[0])&&(intQuestionArray[1]==responseArray[1]))||((intQuestionArray[1]==responseArray[1])&&(intQuestionArray[2]==responseArray[2]))){
    console.log(`C'est pas tout à fait ça ${question.name} sont récoltés  ${textResult}`)
    finalResut.push(1)
  }else if(((intQuestionArray[1]==responseArray[0])&&(intQuestionArray[2]==responseArray[1]))||((intQuestionArray[0]==responseArray[0])&&(intQuestionArray[2]==responseArray[1]))){
      console.log(`C'est pas tout à fait ça ${question.name} sont récoltés  ${textResult}`)
      finalResut.push(1)
    }else{
      console.log(`Raté ${question.name} sont récoltés  ${textResult}`)
      finalResut.push(0)
    }
  }
  else{
    console.log(`Raté ${question.name} sont récoltés  ${textResult}`)
    finalResut.push(0)
  }
  responseArray=[]

}
)
function resultCalc(){
  let score =finalResut.reduce((sum,e)=>sum+e);
  console.log(`${score}/${finalResut.length*2}`)
}
result.addEventListener('click',resultCalc)
function test(){
  if(responseArray.includes(3))
  {responseArray.slice(0,1)}else{
    responseArray.push(3);


}}
