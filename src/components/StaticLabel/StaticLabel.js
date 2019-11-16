import { registerHtml } from 'tram-one'
import './StaticLabel.scss'

const html = registerHtml()

export default (props, children) => {
  console.log(props.index)

  return html`
    <div class="StaticLabel">
    </div>
  `
}
