const casas = require('./imobiliaria')
​
function vendaDeMoradia(casas){
  const data = new Date ()
  const hora = data.getHours()
  const minutos = data.getMinutes()
  const dia = data.getDate()
  const mes = data.getMonth()+1
  const ano = data.getFullYear()
  for (let i = 0; i<casas.casas.length; i++){
    if (casas.casas [i].vendida === true)
    casas.casas[i].data= `Vendida ás ${hora}:${minutos}, no dia ${dia}/${mes}/${ano}`
  }
  return casas
}
console.log(vendaDeMoradia(casas))