export default function inputs () {
  let obj
  let element
  let elementsLit = document.querySelectorAll('input:not([type=submit])')

  for (element of elementsLit) {
    obj = {
      ...obj,
      [element.name]: (element.type !== 'checkbox' ? element.value : element.checked)
    }
  }

  return obj
}
