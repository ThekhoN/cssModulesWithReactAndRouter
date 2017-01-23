/*import greetings from './robots.js'
import styles from './app.css'
console.log('styles: ', styles);

console.log(greetings('Affirmative', 'Jim'));

let element = `<div class='${styles.element} ${styles.colorMeRed}'>
  <p>Hello my friend we meet again. . .</p>
</div>`

document.write(element)
*/

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Main from './templates/Main'

module.exports = function render(locals, callback) {
  var html = ReactDOMServer.renderToStaticMarkup(React.createElement(Main, locals))
  callback(null, '<!DOCTYPE html>' + html)
}
