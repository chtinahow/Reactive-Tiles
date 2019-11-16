import { registerHtml } from 'tram-one'
import './ReactiveLabel.scss'
import useColor from '../../hooks/useColor'



const html = registerHtml()

export default (props, children) => {

  const [color] = useColor()
  
  console.log(props.index)

  return html`
    <div
      style="background-color:${color}" 
      class="ReactiveLabel"
    >
    </div>
  `
}
