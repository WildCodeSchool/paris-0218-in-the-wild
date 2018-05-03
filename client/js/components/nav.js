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
    <a href="index.html"><img class="logo" src="https://image.noelshack.com/fichiers/2018/16/4/1524092886-clip2.png"></a>
  </div>
`

export const createHeader = props => `
  <nav>
    ${profil(props)}
    ${action('JE PARTICIPE', '#')}
    ${action('JE PROPOSE', 'eventProposition.html')}
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
    ${visuals('visual-one', 'event-list-page.html?category=get-together')}
    ${visuals('visual-two', 'event-list-page.html?category=boire-un-coup')}
    ${visuals('visual-three', 'event-list-page.html?category=cours-de-soutien')}
    ${visuals('visual-four', 'event-list-page.html?category=live-coding')}
  </ul>
`
