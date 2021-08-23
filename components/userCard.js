const template = document.createElement('template');

template.innerHTML = `
<style>

</style>
`

export class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}
