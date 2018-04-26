export const showCategory = (category) =>
`
  <div>
  <p class="section-name"><span>${category.description[0]}</span> <br>${category.description[1]}</p>
  <img class="gif" src="${category.categoryPicture}" alt="gif category">
  </div>
`
