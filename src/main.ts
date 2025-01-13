// import './codewars/deadFish.ts'
// import './codewars/romanNumeralsDecoder.ts'
// import './codewars/validBraces.ts'
// import './codewars/digPow.ts'
import './codewars/greetIsGood.ts'
//
// import './youTube/aliasInterface.ts'
//
import { setupCounter } from './counter.ts'
import './style.css'
import './tutorial.ts'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
