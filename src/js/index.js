/*
 * file: src/js/index.js
 * author: Spencer Linkous
 * modifier: Josue Teodoro Moreira <teodoro.josue@protonmail.ch>
 * date: 01 February, 2021
 */

const ENTER_KEY = 13;

const search = document.getElementById('search');
search.on('keyup', (event) => {
  if (event.keyCode !== ENTER_KEY)
    return;

  var duckduckgoSecrh = "https://duckduckgo.com/?q=";
  window.location.replace(newLink + search.value);
});
