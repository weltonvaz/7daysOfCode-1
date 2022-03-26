var r1



function seleciona(containerON,containerOFF,elementoON,elementoOFF){
  document.getElementById(containerON).style.display='block'
  document.getElementById(containerOFF).style.display='none'
  document.getElementById(elementoON).style='transform: scale(1.2);filter: grayscale(0%) brightness(100%);'
  document.getElementById(elementoOFF).style='transform: scale(1);filter: grayscale(100%) brightness(50%);'
  if (elementoON == 'front') {
    r1 = 'front-end'
    document.getElementById('container2').style.display='none'
    document.getElementById('container3Front').style.display='block'
  }
  if (elementoON == 'back'){
    r1 = 'back-end'
    document.getElementById('container2').style.display='none'
    document.getElementById('container3Back').style.display='block'
  }
  if (elementoON == 'react'){
    r2 = 'React'
   
    document.getElementById('container3Back').style.display='none'
  }
  if (elementoON == 'vue'){
    r2 = 'Vue'

    document.getElementById('container3Back').style.display='none'
  }
  if (elementoON == 'c'){
    r2 = 'C#'

    document.getElementById('container3Back').style.display='none'
  }
  if (elementoON == 'java'){
    r2 = 'Java'
  
    document.getElementById('container3Back').style.display='none'
  }
  if (elementoON == 'con'){
    r3 = 'continuar estudando sua area'
    finalizar()
  }
  if (elementoON == 'full'){
    r3 = 'se tornar Full-Stack'
    finalizar()
  }

}


function finalizar(){
  var tecno = []
    var r4=prompt('Se existe mais alguma tecnologia que você gostaria de se especializar ou de conhecer,digite abaixo e depois OK para confirmar, ou Cancelar para finalizar')
    
    while (r4 != null){
             tecno.push(r4)
        alert(`Muito bem, ${r4} também é muito interessante!`)
        r4=prompt('Se existe mais alguma tecnologia que você gostaria de se especializar ou de conhecer,digite abaixo e depois OK para confirmar, ou Cancelar para finalizar')
             }
      
    if (tecno.length == []) {
      document.getElementById('container4').innerHTML=(`Muito bem, então você deseja seguir a carreira de <strong>${r1}</strong> , aprendendo <strong>${r2}</strong> e se desenvolver para se tornar <strong>Full-Stack</strong>. <br>Obrigado pelas respostas!`) 
    }else{
    document.getElementById('container4').innerHTML=(`Muito bem, então você deseja seguir a carreira de <strong>${r1} , aprendendo <strong>${r2}</strong> e se desenvolver para se tornar Full-Stack e ainda deseja aprender mais sobre: <strong>${tecno}</strong>. <br>Obrigado pelas respostas!`) 
  }
  } 



 /*   alert('Responda com os valores EXATAMENTE como eles aparecem dentro das aspas.')
    var r1 = prompt('Quer seguir para área de "front-end" ou seguir para a área de "back-end"?' )
    r1 = r1.toLowerCase()
    if(r1 == 'front-end'){
      var r2 = prompt('Quer aprender "react ou "vue"?' )
      r2 = r2.toLowerCase()
    }
    if(r1 == 'back-end'){
      var r2 = prompt('Quer aprender "c#"  ou "java"?' )
      r2 = r2.toLowerCase()
    }
    var r3 = prompt('Continuar se especializando na area escolhida "c" ou se desenvolver para se tornar Full-Stack "f"?' )
    r3 = r3.toLowerCase()
    if(r3 == 'c'){
      alert(`Muito bem, então você deseja seguir a carreira de ${r1} , aprendendo ${r2} e continuar se especializando na area escolhida`)  
    }
    if(r3 == 'f'){
      alert(`Muito bem, então você deseja seguir a carreira de ${r1} , aprendendo ${r2} e se desenvolver para se tornar Full-Stack`) 
     
    }
    var tecno = []
    var r4=prompt('Se existe mais alguma tecnologia que você gostaria de se especializar ou de conhecer,digite ou Cancelar para finalizar')
      while (r4 != null){
             tecno.push(r4)
        alert(`Muito bem, ${r4} também é muito interessante!`)
        r4=prompt('Se existe mais alguma tecnologia que você gostaria de se especializar ou de conhecer,digite ou Cancelar para finalizar')
             }
      alert(`Muito bem, então você deseja seguir a carreira de ${r1} , aprendendo ${r2} e se desenvolver para se tornar Full-Stack e ainda deseja aprender mais sobre ${tecno}. Obrigado pelas respostas!`) 
  }
  */