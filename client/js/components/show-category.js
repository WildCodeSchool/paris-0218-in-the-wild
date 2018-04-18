export const showCategory = (category) =>
  `
  <div class="row bloc">
  <div class="column image-bloc">
  <p class="section-name"><span>${category.description[0]}</span> <br>${category.description[1]}</p>
  <img src="${category.categoryPicture}" alt="gif category">

</div>
</div>
`
