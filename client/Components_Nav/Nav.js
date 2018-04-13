export const createNavbar = nav => {
  return `
<head>
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.min.css">
<link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Sumana" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Jua" rel="stylesheet">


<style>
body {
margin: 0;
color: #151515;
}

.row {
border-bottom: 4px solid #22B573;
height: 10rem;
}

.column.column-10 {
border-right: 4px solid #22B573;
}

/*** La police ***/

@font-face {
font-family: 'Freight_Big_Book_Italic';
src: url('Freight_Big_Book_Italic.otf') format('truetype');
font-weight: normal;
font-style: normal;
}

/*Freight Text alternative Sumana or Jua*/
/*Futura alternative Muli*/

h4 {
font-weight: 600;
font-family: 'Muli', sans-serif;
font-style: italic;
font-size: 2.2rem;/
text-align: center;

position: relative;
top: 5rem;
margin: 0;
}

/*JE PROPOSE*/

.prop {
position: relative;
padding-left: 0;
text-align: left;
}

/*ITW*/

.itw {
font-size: 5rem;
font-weight: 800;
}

/*Le W de ITW*/

span {
font-family: 'Jua', sans-serif;
font-style: italic;
color: #151515;
font-size: 7rem;/*font-size: 4vw;*/
}

/*Les liens JE PARTICIPE JE PROPOSE*/

a:link {
color: black;
}

a:visited {
color: black;
}

h4:hover, a:hover:not(.logo) {
border-bottom: 10px solid #22B573;
}

/*Sidebar*/

.sidebar {
border-right: 4px solid #22B573;
width: 174px;
height: 100%;
display: block;
position: absolute;
left: 0px;
top: 10px;
}

li {
list-style: none;
position: relative;
left: 1.5rem;
}

.logo {
position: relative;
left: 30px;
top: 2px;
}

/**Media Queries**/

@media (min-width: 40rem){
.row {
flex-direction: row;
margin-left: -1.0rem;
width: 100%;
}
}
</style>
</head>
<body>
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
}
