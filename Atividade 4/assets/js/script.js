function Transição(url) {
    let ajax = new XMLHttpRequest()
    ajax.open('GET', url)
    // console.log(ajax.readyState)
    ajax.onreadystatechange = () => {
      if (ajax.readyState == 4 && ajax.status == 200) {
        try{
            window.location = url
        } catch (erro) {
            console.log('Erro ao acessar a página: ' + erro)
        }
      } 
      if (ajax.readyState == 4 && ajax.status == 404) {
        document.getElementById('content').innerHTML = 'Erro: 404'
      }
    }
    setTimeout(() => {
      ajax.send()
    }, 1000)
  }
  
  