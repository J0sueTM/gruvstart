/*
 * file: src/js/index.js
 * author: Spencer Linkous
 * modifier: Josue Teodoro Moreira <teodoro.josue@protonmail.ch>
 * date: 01 February, 2021
 */

const ENTER_KEY = 13;

const duckduckgoQuery = "https://duckduckgo.com/?q=";

const urlPattern = new RegExp(
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'                      + // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'                  + // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'                         + // query string
  '(\\#[-a-z\\d_]*)?$', 'i'                            // fragment locator
);

function isURL(url) {
  return !!urlPattern.test(url);
}

const search = document.getElementById('search');
document.addEventListener('keyup', (event) => {
  if (event.keyCode !== ENTER_KEY && document.activeElement.tagName !== 'input')
    return;

  if (isURL(search.value))
    window.location.replace('https://' + search.value);
  else
    window.location.replace(duckduckgoQuery + search.value);
});
