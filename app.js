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
  
  gameFruits=fruitsArray.filter(e=>e)
  console.log(typeof(gameFruits))
  console.log(gameFruits)
  // var springFruits=fruitsArray.filter(e=>e.seasonId==1)
  // var summerFruits=fruitsArray.filter(e=>e.seasonId==2)
  // var fallFruits=fruitsArray.filter(e=>e.seasonId==3)


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
  if(seasonQuestion.includes(input.value)&&question.seasonId.length==1){
    console.log(`Vous avez raison ${question.name} sont récolté en ${textResult}`)
    console.log(fruits)
    finalResut.push(2)
  }else if(seasonQuestion.includes(input.value)&& seasonQuestion.length>1){
    console.log(`vous avez raison mais ${question.name} sont récoltés en ${textResult}`)
    finalResut.push(1)
  }else{
    console.log(`Raté le ${question.name} sont récoltés en ${textResult}`)
    finalResut.push(0)
  }

}
)
function resultCalc(){
  let score =finalResut.reduce((sum,e)=>sum+e);
  console.log(`${score}/${finalResut.length*2}`)
}
result.addEventListener('click',resultCalc)
