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
    ${action('JE PARTICIPE', 'homepage.html')}
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
    <li><a href="event-list-page.html?category=get-together"><img src="https://image.noelshack.com/fichiers/2018/16/4/1524094859-to.png" alt=""></a></li>
    <li><a href="event-list-page.html?category=boire-un-coup"><img src="https://image.noelshack.com/fichiers/2018/16/4/1524093506-sortie.gif" alt=""></a></li>
    <li><a href="event-list-page.html?category=cours-de-soutien"><img src="https://image.noelshack.com/fichiers/2018/16/4/1524094338-nope.png" alt=""></a></li>
    <li><a href="event-list-page.html?category=live-coding"><img src="https://image.noelshack.com/fichiers/2018/16/4/1524094882-mat.png" alt=""></a></li>
  </ul>
`
