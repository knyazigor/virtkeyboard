const body = document.querySelector('body')
const main = document.createElement('main')
main.innerHTML = `
    <div class="container">
        <h1 class="h1">Virtual Keyboard</h1>
        <textarea name="textarea" class="textarea" id="textarea" cols="30" rows="10"></textarea>
        <div class="keyboard"></div>
    </div>
`
body.appendChild(main)
