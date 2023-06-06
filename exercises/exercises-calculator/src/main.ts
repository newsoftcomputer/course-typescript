
// Styles
import './assets/css/global-styles.css'
import './assets/css/calculator.css'

import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class='cal'>
    <div class='cal__header'>
      <h4>CALCULATOR</h4>
    </div>

    <div class='cal__body'>
      <div class='cal__body-screen01'></div>
      <div class='cal__body-screen02'></div>
      <div class='cal__body-nums'>
        <div class='cal__body-nums-numxx'></div>
        <div class='cal__body-nums-numxx'></div>
        <div class='cal__body-nums-numxx'></div>
        <div class='cal__body-nums-numxx'></div>
        
        <div class='cal__body-nums-numxx'></div>
        <div class='cal__body-nums-numxx'></div>
        <div class='cal__body-nums-numxx'></div>
        <div class='cal__body-nums-numxx'></div>

        <div class='cal__body-nums-numxx'></div>
        <div class='cal__body-nums-numxx'></div>
        <div class='cal__body-nums-numxx'></div>
        <div class='cal__body-nums-numxx'></div>
      </div>
    </div>
    
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
