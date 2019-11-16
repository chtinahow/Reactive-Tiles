import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { registerHtml, start } from 'tram-one'
import ColorHeader from './components/ColorHeader'
import ReactiveLabel from './components/ReactiveLabel'
import StaticLabel from './components/StaticLabel'
import './styles.css'
import useColor from './hooks/useColor'

const html = registerHtml({
  ColorHeader,
  ReactiveLabel,
  StaticLabel
})

const home = () => {
  const [color] = useColor()
  const labels = [...Array(1000)].map((label, index) => 
	index % 3 ? html`<StaticLabel index=${index} />` 
	: html`<ReactiveLabel index=${index} />`
  )
  
	return html`
    <div>
      <ColorHeader />
      <div style="color:${color}"> Thank you for using Tram-One! </div>
      ${labels}
    </div>
  `
}

start('#app', home)
