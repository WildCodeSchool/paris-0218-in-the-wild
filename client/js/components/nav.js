const action = (actionText, actionLink) => `
  <a href=${actionLink}>
    <h4 class="title1">#${actionText}</h4>
  </a>
`

const topBarLogo = () => `
  <div id="header-logo">
    <h5 class="itw">IT<span class="big-w">W</span></h5>
  </div>
`

const profil = props => `
  <div id="profil">
    <img src="https://image.noelshack.com/fichiers/2018/16/4/1524092886-clip2.png">
  </div>
`

export const createHeader = props => `
  <nav>
    ${profil(props)}
    ${action('JE PARTICIPE', '#')}
    ${action('JE PROPOSE', '#')}
    ${topBarLogo()}
  </nav>
`
/* Deuxième module : la sidebar */

const visuals = (pic, link) => `
  <li>
    <a class=${pic} href= ${link}>
    </a>
  </li>
`
export const createSidebar = param => `
  <ul>
    ${visuals('visual-one', '?category=get-together')}
    ${visuals('visual-two', '?category=boire-un-coup')}
    ${visuals('visual-three', '?category=cours-de-soutien')}
    ${visuals('visual-four', '?category=live-coding')}
  </ul>
`
