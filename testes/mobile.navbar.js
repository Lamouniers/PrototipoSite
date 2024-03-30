const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('aparecer') 
        }else{
            entrada.target.classList.remove('aparecer')
        }
    })
})


const elementos = document.querySelectorAll('.esconder')

elementos.forEach( (Element) => observador.observe(Element) )

const observador1 = new IntersectionObserver((entradas1) => {
    entradas1.forEach((entrada1) => {
        if (entrada1.isIntersecting) {
            entrada1.target.classList.add('aparecer') 
        }else{
            entrada1.target.classList.remove('aparecer')
        }
    })
})


const elementos1 = document.querySelectorAll('.esconderD')

elementos1.forEach( (Element) => observador1.observe(Element) )