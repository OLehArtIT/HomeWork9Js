let animal = ['cat', 'dog', 'snake', 'jaguar', 'monkey'];
function removeElement(animal, element) {
  let index = animal.indexOf(element);
  if (index !== -1) {
    animal.splice(index, 1);
  }
  return animal;
}
console.log(removeElement(animal, 'monkey'));