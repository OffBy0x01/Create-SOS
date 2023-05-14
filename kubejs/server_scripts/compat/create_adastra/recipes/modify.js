ServerEvents.recipes(event => {
    // modify recipes here
    // modifyAdAstraRecipes(event)  
})

const modifyAdAstraRecipes = (event) => {
  // this'll be fun...
  event.replaceInput({output: /(adastra:space_helmet)|(adastra:space_suit)|(adastra:space_pants)|(adastra:space_boots)/}, 'adastra:steel_ingot', 'create:sturdy_sheet');
}