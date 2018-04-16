const action = (actionText, actionLink) => `
  <a href=${actionLink}>
    <h4>#${actionText}</h4>
  </a>
`

const topBarLogo = () => `
  <div id="header-logo">
    <h5 class="itw">IT<span>W</span></h5>
  </div>
`

const profil = props => `
  <div id="profil">
    X
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

/* `
<nav>
<div class="row">
<!--<div class="column column-10">
<a href="#">
<img class="logo" src="https://image.noelshack.com/fichiers/2018/15/3/1523448413-clipboard-11-avril-2018-10-26.png">
</a>
</div> -->

<div class="column column-20 column-offset-10">
<a href="#">
<h4 class="particip">#JE PARTICIPE</h4>
</a>
</div>

<div class="column column-20">
<a href="#">
<h4 class="prop">#JE PROPOSE</h4>
</a>
</div>

<div class="column">
<h5 class="itw">IT<span>W</span></h5>
</div>
</div>
</nav>

<div class="sidebar">
<ul>
<li>
<a href="#" class="logo">
<img src="https://image.noelshack.com/fichiers/2018/15/3/1523448413-clipboard-11-avril-2018-10-26.png">
</a>
</li>
<li>
<a href="#">
<img src="https://image.noelshack.com/fichiers/2018/15/3/1523448238-sortie2.png">
</a>
</li>
<li>
<a href="#">
<img src="https://image.noelshack.com/fichiers/2018/15/3/1523447311-1523446648-screenshot-from-2018-04-11-13-29-27.png">
</a>
</li>
<li>
<a href="#">
<img src="https://image.noelshack.com/fichiers/2018/15/3/1523448238-sortie2.png">
</a>
</li>
<li>
<a href="#">
<img src="https://image.noelshack.com/fichiers/2018/15/3/1523447311-1523446648-screenshot-from-2018-04-11-13-29-27.png">
</a>
</li>
</ul>
</div>
`
*/
