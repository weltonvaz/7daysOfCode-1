function comecar(){
    alert('Responda com os valores EXATAMENTE como eles aparecem dentro das aspas.')
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
     var tecno = []
  var r4=prompt('Se existe mais alguma tecnologia que você gostaria de se especializar ou de conhecer,digite ?')
      while (r4 != null){
             tecno.push(r4)
        alert(`Muito bem, ${r4} também é muito interessante!`)
        r4=prompt('Se existe mais alguma tecnologia que você gostaria de se especializar ou de conhecer,digite ou Cancelar para finalizar ?')
             }
      alert(`Muito bem, então você deseja seguir a carreira de ${r1} , aprendendo ${r2} e se desenvolver para se tornar Full-Stack e ainda deseja aprender mais sobre ${tecno}. Obrigado pelas respostas!`) 
    }
  }