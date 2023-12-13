window.addEventListener('DOMContentLoaded', function () {

    let newDiv = document.createElement('header-container')

    let h1 = document.createElement('h1')
    let h1Text = document.createTextNode("This is an h1")

    h1.appendChild(h1Text)

    newDiv.appendChild(h1)

    document.body.appendChild(newDiv)

    let h2 = document.createElement('h2')
    let h2Text = document.createTextNode("This is an h2")

    h2.appendChild(h2Text)

    newDiv.appendChild(h2)

    let h3 = document.createElement('h3')
    let h3Text = document.createTextNode("This is an h3")

    h3.appendChild(h3Text)

    newDiv.appendChild(h3)

    let h4 = document.createElement('h4')
    let h4Text = document.createTextNode("This is an h4")

    h4.appendChild(h4Text)

    newDiv.appendChild(h4)

    let h5 = document.createElement('h5')
    let h5Text = document.createTextNode("This is an h5")

    h5.appendChild(h5Text)

    newDiv.appendChild(h5)

    let h6 = document.createElement('h6')
    let h6Text = document.createTextNode("This is an h6")

    h6.appendChild(h6Text)

    newDiv.appendChild(h6)


    h1.className = h1
    h2.className = h2
    h3.className = h3
    h4.className = h4
    h5.className = h5
    h6.className = h6

    let colors = ['light blue', 'violet','black','pink','gold','silver', 'bronze', 'brown']

    h1.addEventListener('dblclick', function () {

        h1.style.color = colors[Math.floor(Math.random() * colors.length)];
        
    })

    h2.addEventListener('dblclick', function () {

        h2.style.color = colors[Math.floor(Math.random() * colors.length)];
        
    })

    h3.addEventListener('dblclick', function () {

        h3.style.color = colors[Math.floor(Math.random() * colors.length)];
        
    })

    h4.addEventListener('dblclick', function () {

        h4.style.color = colors[Math.floor(Math.random() * colors.length)];
        
    })

    h5.addEventListener('dblclick', function () {

        h5.style.color = colors[Math.floor(Math.random() * colors.length)];
        
    })

    h6.addEventListener('dblclick', function () {

        h6.style.color = colors[Math.floor(Math.random() * colors.length)];
        
    })


});






