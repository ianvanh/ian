const story = [
{
"id": 1,
"text": ["Te encuentras caminando por un oscuro bosque en la noche. De repente, escuchas un ruido detrás de ti.", "1: Miras atrás para ver qué es.", "2: Sigues caminando, ignorando el ruido."],
"path": [2, 3]
},
{
"id": 2,
"text": ["Cuando te volteas, no hay nada ahí. Pero ahora escuchas un ruido adelante de ti.", "1: Vas hacia adelante para investigar.", "2: Te quedas donde estás, demasiado asustado para seguir."],
"path": [4, 5]
},
{
"id": 3,
"text": ["Sigues caminando, pero el ruido detrás de ti se hace más fuerte. De repente, sientes que algo te agarra el hombro.", "1: Te das la vuelta para enfrentar lo que sea que te está atacando.", "2: Intentas correr lo más rápido posible."],
"path": [6, 7]
},
{
"id": 4,
"text": ["Te encuentras con una cabaña abandonada. La puerta está abierta y escuchas un sonido extraño desde adentro.", "1: Entrar a la cabaña.", "2: Seguir caminando."],
"path": [8, 9]
},
{
"id": 5,
"text": ["El ruido se detiene, pero comienzas a sentir que algo te sigue. De repente, sientes una respiración fría en tu cuello.", "1: Te das la vuelta para enfrentar lo que sea que te está atacando.", "2: Intentas correr lo más rápido posible."],
"path": [6, 7]
},
{
"id": 6,
"text": ["Cuando te das la vuelta, ves a un espíritu oscuro flotando frente a ti. Te mira fijamente y desaparece en la oscuridad.", "1: Continúas caminando.", "2: Regresas al punto de partida."],
"path": [10, 1]
},
{
"id": 7,
"text": ["Corres lo más rápido que puedes, pero sientes que algo te persigue. De repente, tropiezas y caes al suelo. Cuando te das vuelta, ves una figura oscura acercándose a ti.", "1: Te das la vuelta para enfrentar lo que sea que te está atacando.", "2: Cierras los ojos y esperas lo peor."],
"path": [6, 11]
},
{
"id": 8,
"text": ["Dentro de la cabaña, encuentras una nota que dice: 'Abandoné todo y me fui a vivir al bosque. Pero descubrí que no estoy solo aquí...'", "1: Continúas explorando la cabaña.", "2: Sales corriendo de la cabaña lo más rápido posible."],
"path": [12, 13]
},
{
"id": 9,
"text": ["Mientras caminas, te das cuenta de que te has perdido en el bosque. No tienes idea de cómo volver.", "1: Tratas de encontrar algún camino conocido.", "2: Sigues caminando en una dirección al azar."],
"path": [14, 15]
},
{
"id": 10,
"text": ["Continúas caminando y te topas con una extraña criatura. Parece ser una mezcla de hombre y animal.", "1: Tratas de comunicarte con la criatura.", "2: Huyes lo más rápido posible."],
"path": [16, 17]
},
{
"id": 11,
"text": ["Cuando abres los ojos, te das cuenta de que estás en una habitación oscura y húmeda. No puedes moverte y escuchas una risa macabra.", "1: Tratas de gritar para pedir ayuda.", "2: Tratas de liberarte de tus ataduras."],
"path": [18, 19]
},
{
"id": 12,
"text": ["Encuentras un diario en la cabaña. La última entrada dice: 'La criatura me sigue a todas partes. No puedo escapar de ella...'", "1: Continúas explorando la cabaña.", "2: Sales corriendo de la cabaña lo más rápido posible."],
"path": [12, 13]
},
{
"id": 13,
"text": ["Sales corriendo de la cabaña lo más rápido que puedes. A medida que avanzas, escuchas la risa macabra de alguien detrás de ti.", "1: Sigues corriendo.", "2: Te detienes para enfrentar lo que sea que te está persiguiendo."],
"path": [20, 6]
},
{
"id": 14,
"text": ["Después de caminar un rato, encuentras un camino conocido. Pero a medida que avanzas, te das cuenta de que hay algo extraño en el aire...", "1: Continúas caminando por el camino conocido.", "2: Te desvías del camino para explorar."],
"path": [21, 22]
},
{
"id": 15,
"text": ["Sigues caminando, pero no parece haber un final en el bosque. De repente, te encuentras con una criatura extraña que parece estar observándote.", "1: Tratas de comunicarte con la criatura.", "2: Huyes lo más rápido posible."],
"path": [16, 17]
},
{
"id": 16,
"text": ["Cuando te acercas a la criatura, comienzas a sentir que algo está mal. De repente, la criatura te ataca.", "1: Tratas de defenderte.", "2: Te quedas quieto, esperando que pase."],
"path": [23, 24]
},
{
"id": 17,
"text": ["Comienzas a correr lo más rápido que puedes, pero la criatura te persigue. De repente, llegas a un precipicio.", "1: Saltas del precipicio.", "2: Te das vuelta y enfrentas a la criatura."],
"path": [25, 26]
},
{
"id": 18,
"text": ["Al gritar, escuchas pasos acercándose. La puerta se abre y una luz brillante te ciega.", "1: Preguntas quién es.", "2: Tratas de escapar."],
"path": [27, 28]
},
{
"id": 19,
"text": ["Logras liberarte de tus ataduras, pero no puedes ver nada. La risa macabra continúa y sientes que alguien o algo está observándote.", "1: Tratas de encontrar una salida.", "2: Gritas para pedir ayuda."],
"path": [29, 30]
},
{
"id": 20,
"text": ["Sigues corriendo sin mirar atrás, pero te tropiezas y caes al suelo. Cuando te das vuelta, la criatura está justo encima de ti.", "1: Tratas de defenderte.", "2: Te quedas quieto, esperando lo peor."],
"path": [23, 31]
},
{
"id": 21,
"text": ["Sigues caminando por el camino conocido y encuentras una cabaña abandonada. La puerta está abierta y parece haber algo adentro.", "1: Entras a explorar la cabaña.", "2: Sigues caminando por el camino conocido."],
"path": [12, 32]
},
{
"id": 22,
"text": ["Te desvías del camino y encuentras una cueva. A medida que avanzas, escuchas algo moviéndose en la oscuridad.", "1: Tratas de encontrar una fuente de luz.", "2: Sigues caminando en la oscuridad."],
"path": [33, 34]
},
{
"id": 23,
"text": ["Logras defenderte de la criatura, pero no puedes escapar. Te encuentras atrapado en una cueva.", "1: Tratas de encontrar una salida.", "2: Te quedas quieto, esperando a que alguien te rescate."],
"path": [29, 35]
},
{
"id": 24,
"text": ["La criatura te deja solo. Pero cuando te das vuelta, encuentras una habitación oscura y húmeda. No puedes moverte y escuchas una risa macabra.", "1: Tratas de gritar para pedir ayuda.", "2: Tratas de liberarte de tus ataduras."],
"path": [18, 19]
},
{
"id": 25,
"text": ["Saltas del precipicio y caes en un río debajo. Logras nadar hacia la orilla y escapas de la criatura.", "1: Continúas caminando por el bosque.", "2: Buscas ayuda en una ciudad cercana."],
"path": [36, 37]
},
{
"id": 26,
"text": ["Te das vuelta y enfrentas a la criatura. Logras herirla, pero te das cuenta de que no es una criatura común. Huye antes de que sea demasiado tarde.", "1: Continúas corriendo por el bosque.", "2: Buscas ayuda en una ciudad cercana."],
"path": [23, 37]
},
{
"id": 27,
"text": ["La persona detrás de la puerta no responde. En cambio, escuchas un susurro que te dice que corras antes de que sea demasiado tarde.", "1: Sigues el consejo del susurro.", "2: Tratas de abrir la puerta."],
"path": [38, 39]
},
{
"id": 28,
"text": ["Tratas de escapar, pero la puerta está cerrada con llave. Escuchas la risa macabra acercándose cada vez más.", "1: Tratas de encontrar una herramienta para abrir la puerta.", "2: Te preparas para enfrentarte a lo que sea que esté afuera."],
"path": [40, 41]
},
{
"id": 29,
"text": ["Encuentras una salida y logras escapar de la pesadilla. Finalmente, llegas a un lugar seguro.", "1: Descansas y te recuperas.", "2: Tratas de averiguar qué fue lo que te persiguió."],
"path": [42, 43]
},
{
"id": 30,
"text": ["Nadie responde a tu llamado de ayuda. La risa macabra se hace más fuerte y sientes que algo se acerca.", "1: Tratas de encontrar una salida.", "2: Te preparas para enfrentarte a lo que sea que esté afuera."],
"path": [29, 41]
},
{
"id": 31,
"text": ["La criatura se acerca y te devora. Tu aventura ha llegado a un final trágico.", "1: Jugar de nuevo.", "2: Salir del juego."],
"path": [1, 0]
},
{
"id": 32,
"text": ["Sigues caminando por el bosque y encuentras un río. Logras cruzarlo y llegas a una ciudad cercana.", "1: Descansas y te recuperas.", "2: Tratas de averiguar qué fue lo que te persiguió."],
"path": [42, 43]
},
{
"id": 33,
"text": ["Encuentras una fuente de luz y descubres que estás en una cueva. A medida que avanzas, encuentras un camino hacia la libertad.", "1: Sigues el camino hacia la libertad.", "2: Regresas por donde viniste."],
"path": [44, 32]
},
{
"id": 34,
"text": ["Sigues caminando en la oscuridad y finalmente encuentras una salida. Logras escapar de la cueva y llegar a un lugar seguro.", "1: Descansas y te recuperas.", "2: Tratas de averiguar qué fue lo que te persiguió."],
"path": [42, 30]
},
{
"id": 35,
"text": ["Esperas y esperas, pero nadie viene a rescatarte. Tu aventura ha llegado a un final trágico.", "1: Jugar de nuevo.", "2: Salir del juego."],
"path": [1, 0]
},
{
"id": 36,
"text": ["Abres la puerta y te encuentras con una persona que te dice que estás a salvo. Finalmente, logras escapar de la pesadilla.", "1: Descansas y te recuperas.", "2: Tratas de averiguar qué fue lo que te persiguió."],
"path": [42, 43]
},
{
"id": 37,
"text": ["Llegas a la ciudad y buscas ayuda. La gente te dice que hay una criatura que habita en el bosque, pero nadie ha podido capturarla.", "1: Te preparas para enfrentar a la criatura.", "2: Huyes de la ciudad y tratas de encontrar un lugar seguro."],
"path": [0, 4]
},
{
"id": 38,
"text": ["Sigues el consejo del susurro y corres por el pasillo. Logras escapar de la pesadilla y finalmente llegas a un lugar seguro.", "1: Descansas y te recuperas.", "2: Tratas de averiguar qué fue lo que te persiguió."],
"path": [42, 43]
},
{
"id": 39,
"text": ["Tratas de abrir la puerta, pero está cerrada con llave. La risa macabra se hace más fuerte y sientes que algo se acerca.", "1: Tratas de encontrar una herramienta para abrir la puerta.", "2: Te preparas para enfrentarte a lo que sea que esté afuera."],
"path": [40, 41]
},
{
"id": 40,
"text": ["Logras encontrar una herramienta y abres la puerta. Escapas de la habitación y llegas a un lugar seguro.", "1: Descansas y te recuperas.", "2: Tratas de averiguar qué fue lo que te persiguió."],
"path": [42, 43]
},
{
"id": 41,
"text": ["Te preparas para enfrentarte a lo que sea que esté afuera. La puerta se abre de golpe y te encuentras cara a cara con la criatura.", "1: Tratas de luchar contra la criatura.", "2: Intentas huir."],
"path": [16, 0]
},
{
"id": 42,
"text": ["Descansas y te recuperas. Has logrado sobrevivir a la pesadilla.", "1: Jugar de nuevo.", "2: Salir del juego."],
"path": [1, 0]
},
{
"id": 43,
"text": ["Tratas de averiguar qué fue lo que te persiguió. Después de investigar un poco, descubres que hay una criatura que habita en el bosque. Pero nunca sabrás con certeza lo que realmente te persiguió.", "1: Jugar de nuevo.", "2: Salir del juego."],
"path": [1, 0]
},
{
"id": 44,
"text": ["Sigues el camino hacia la libertad y logras salir de la cueva. Finalmente llegas a la superficie y respiras aire fresco. Sabes que has sobrevivido a una terrible pesadilla y que debes seguir adelante con tu vida.", "Fin de la historia. ¿Deseas jugar de nuevo?", "1: Sí.", "2: No."],
"path": [1, 0]
}
],
    $textSection = document.querySelector('.text')


let prevId = [0, 0],//store the 2 previous answers
    newId = 1,
    textId = 0, // add a specific id for each paragraph
    currentParagraph,
    formerTextLength = 0,//for the typewritter effect, store the qty of characters
    answerInput

const findText = id => {

    const $section = document.createElement('div')
    $section.id = 'text' + textId // the id of the div for the labelledby id ARIA (will read the whole div)

    if (prevId[1] === id && prevId[1] !== 190) { writeText('Juego Terminado'.split(''), exitGame(), false) }

    // store the two last id
    prevId[0] = prevId[1]
    prevId[1] = id

    currentParagraph = story.find(storyPart => {
        return storyPart['id'] === id
    })

    // get each sentences of the paragraph
    const paragraphText = [...currentParagraph.text]

    paragraphText.forEach((text, idx) => {
        //get each letter of the sentence
        const textArray = text.split('')
        
        const textLength = textArray.length

        setTimeout(() => {
            writeText(textArray, $section, idx === paragraphText.length - 1 ? true : false)
        }, (formerTextLength + 1) * 10)

        formerTextLength += textLength
    })
}

//add the text in the paragraph, if answerInput === true trigger the appendInput function
const writeText = (text, $section, answerInput) => {
    const $container = document.createElement('p')
    $container.classList.add('paragraph')

    //typewritter effect
    text.forEach((char, idx) => {
        setTimeout(() => {
            $container.innerHTML += char
            if (answerInput && prevId[1] !== 18 && idx === text.length - 1) {
                appendInput($container)
                formerTextLength = 0
            }
        }, idx * 10)
    })

    $section.appendChild($container)

    $textSection.appendChild($section)
}

// add the input at the end of the paragraph
const appendInput = container => {

    container.innerHTML += `
        <div class="answer-container active">
            <input type="text" class="answer" aria-labelledby="text${textId}"/>
        </div>`

    const answer = document.querySelectorAll('.answer')
    answerInput = answer[answer.length - 1]
    answerInput.focus()

    // Move the paragraph up if it is too low on the page.
    if (window.innerHeight - answerInput.getBoundingClientRect().bottom < (window.innerHeight * .4)) {
        document.querySelector('body').style.height = document.querySelector('body').getBoundingClientRect().height + (window.innerHeight * .3) + 'px'
        window.scrollTo({
            top: document.querySelector('body').getBoundingClientRect().height,
            behavior: 'smooth'
        });
    }

   answerInput.addEventListener('input', checkAnswer)

    textId++
}

const checkAnswer = e => {
    const formerInput = document.querySelector('.active')
    formerInput.classList.remove('active')
    switch (e.target.value) {

        case '0':
            prevId[1] === 20 && exitGame()
            newId = 20
            break

        case '1':
            newId = currentParagraph.path[0]
            break

        case '2':
            newId = currentParagraph.path[1]
            break

        default: console.log('error')
            break
    }1
    answerInput.removeEventListener('input', checkAnswer)
    answerInput.disabled = true

    // trying to escape but still stay
    newId === 22 && (newId = prevId[0])

    // end and escape the game
    newId === 0 && exitGame()

    newId === 0 ? exitGame() : findText(newId)
}

const exitGame = () => {
  setTimeout(() => {
    window.location = ('https://ian.onrender.com')
  }, 2000)
}

findText(newId)

//Exit the game with the escape key
window.addEventListener("keydown", e => e.key==="Escape" && exitGame())

//Refocus when the user is back on the page
document.addEventListener('visibilitychange', () => {
const state = document.visibilityState
state && answerInput.focus()
})