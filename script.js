function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let valor = document.getElementById ('ano')
    let resp = document.getElementById ('resp')
    if( valor.value.length == 0 || valor.value> ano) {
      alert('verifique os dados novamente')
    } else { 
        let sexo = document.getElementsByName ('sexo') 
        let idade = ano - Number(valor.value) 
        let genero = ''
        let img = document.getElementById ('imagem')
        if(sexo[0].checked){
        genero = 'homem'
        if (idade >= 12 && idade < 25) {
            resp.innerHTML =` voce e um jovem de ${idade} anos `
            img.src = 'fotos/jovem.jpg'
            resp.appendChild(img)
         } else  if ( idade >= 25 && idade < 60) {
            resp.innerHTML = `voce e um <strong>adulto </strong> com ${idade} anos`
            img.src = './fotos/homem de 40 anos.jpg'
            resp.appendChild(img)
         } else {
          resp.innerHTML = `voce e um idoso de ${idade} anos`
           img.src = 'fotos/idoso.jpg'
           resp.appendChild (img)
         }
                   

        } else if ( sexo[1].checked) {
            genero = 'mulher'
        
          if (idade >= 12 && idade < 25) {
            resp.innerHTML = `voce e uma <strong>jovem </strong> de ${idade} anos`
            img.src = 'fotos/moça jovem.jpg'
            resp.appendChild (img) 
          } else if (idade >= 25 && idade < 60) {
            resp.innerHTML = `voce e uma adulta ${idade} anos`
            img.src = 'fotos/adulta.jpg'
            resp.appendChild(img)

          } else {
            resp.innerHTML =`voce e uma idosa ${idade} anos`
            img.src ='fotos/idosa.jpg'
            resp.appendChild (img)
          }
          
         }
        }
      
      
         


    }






 

