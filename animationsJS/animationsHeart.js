const $heartText = document.getElementById('heartText');
const  classHEart = document.getElementsByClassName('textContainer')
console.log($heartText, classHEart)
function startText() {
   let  $h1 = document.createElement('h1')
    let data = document.createTextNode('Disculpa el detalle no fue el mejor');
    $h1.innerHTML = 'Disculpa el detalle no fue el mejor';
    console.log($h1, $heartText)
    classHEart[0].append($h1)
    setTimeout(()=>{
        $h1.style.color ='rgba(0,0,0,1)';
    }, 40)
    setTimeout(()=>{
        $h1.style.color ='rgba(0,0,0,0)';
    }, 2000)

    setTimeout(()=>{
        $h1.remove()
    }, 4000)
}


function starttwo (){
    let  $h1 = document.createElement('h1')
    let data = document.createTextNode('Disculpa el detalle no fue el mejor');
    $h1.innerHTML = 'Solo espero que t guste un poco';
    console.log($h1, $heartText)
    classHEart[0].append($h1)
    setTimeout(()=>{
        $h1.style.color ='rgba(0,0,0,1)';
    }, 50)
    setTimeout(()=>{
        $h1.style.color ='rgba(0,0,0,0)';
    }, 3000)

    setTimeout(()=>{
        $h1.remove()
    }, 5000)
}


function startThree (){
    let  $h1 = document.createElement('h1')
    let data = document.createTextNode('Disculpa el detalle no fue el mejor');
    $h1.innerHTML = 'Espero que te vaya de lo mejor en la vida';
    console.log($h1, $heartText)
    classHEart[0].append($h1)
    setTimeout(()=>{
        $h1.style.color ='rgba(0,0,0,1)';
    }, 50)
    setTimeout(()=>{
        $h1.style.color ='rgba(0,0,0,0)';
    }, 3000)

    setTimeout(()=>{
        $h1.remove()
    }, 5000)
}

function start4 (){
    let  $h1 = document.createElement('h1')
    let data = document.createTextNode('Disculpa el detalle no fue el mejor');
    $h1.innerHTML = 'Se que no soy el mejor para decirte esto';
    console.log($h1, $heartText)
    classHEart[0].append($h1)
    setTimeout(()=>{
        $h1.style.color ='rgba(0,0,0,1)';
    }, 50)
    setTimeout(()=>{
        $h1.style.color ='rgba(0,0,0,0)';
    }, 3000)

    setTimeout(()=>{
        $h1.remove()
    }, 5000)
}

function start5 (){
    let  $h1 = document.createElement('h1')
    let data = document.createTextNode('Disculpa el detalle no fue el mejor');
    $h1.innerHTML = 'Pero eres alguien muy especial en mi vida';
    console.log($h1, $heartText)
    classHEart[0].append($h1)
    setTimeout(()=>{
        $h1.style.color ='rgba(0,0,0,1)';
    }, 50)
    setTimeout(()=>{
        $h1.style.color ='rgba(0,0,0,0)';
    }, 3000)

    setTimeout(()=>{
        $h1.remove()
    }, 5000)
}

function start6 (){
    let  $h1 = document.createElement('h1')
    let data = document.createTextNode('Disculpa el detalle no fue el mejor');
    $h1.innerHTML = 'Y por siempre estare ayudandote';
    console.log($h1, $heartText)
    classHEart[0].append($h1)
    setTimeout(()=>{
        $h1.style.color ='rgba(0,0,0,1)';
    }, 50)
    setTimeout(()=>{
        $h1.style.color ='rgba(0,0,0,0)';
    }, 3000)

    setTimeout(()=>{
        $h1.remove()
    }, 5000)
}

function start7 (){
    let  $h1 = document.createElement('h1')
    let data = document.createTextNode('Disculpa el detalle no fue el mejor');
    $h1.innerHTML = 'Eres unica no dejes que nadie te diga lo contrario';
    console.log($h1, $heartText)
    classHEart[0].append($h1)
    setTimeout(()=>{
        $h1.style.color ='rgba(0,0,0,1)';
    }, 50)
    setTimeout(()=>{
        $h1.style.color ='rgba(0,0,0,0)';
    }, 3000)

    setTimeout(()=>{
        $h1.remove()
    }, 5000)
}
function start8 (){
    let  $h1 = document.createElement('h1')
    let data = document.createTextNode('Disculpa el detalle no fue el mejor');
    $h1.innerHTML = '!!!!Te amo!!!!';
    console.log($h1, $heartText)
    classHEart[0].append($h1)
    setTimeout(()=>{
        $h1.style.color ='rgba(0,0,0,1)';
    }, 50)
    setTimeout(()=>{
        $h1.style.color ='rgba(0,0,0,0)';
    }, 3000)

    setTimeout(()=>{
        $h1.remove()
    }, 5000)
}
setTimeout(startText, 10)
setTimeout(starttwo, 5000)
setTimeout(startThree, 10000)
setTimeout(start4, 15000)
setTimeout(start5, 20000)
setTimeout(start6, 25000)
setTimeout(start7, 30000)
setTimeout(start8, 35000)

