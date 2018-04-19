export const showCategory = (category) =>
  `
  <div class="row bloc">
  <div class="column image_bloc">
  <p class="section_name">${category.description[0]} <br> <span>${category.description[1]}</span></p>
  <img src="${category.categoryPicture}" alt="gif category">

</div>
</div>
`
