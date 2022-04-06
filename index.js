// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

    //    Array functions : destructivelyAppendCat(name)
    //        appends a cat to the end of the cats array:
function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
    }

  //      Array functions: destructivelyPrependCat(name)
  //          prepends a cat to the beginning of the cats array:
function destructivelyPrependCat(name) {
   cats.unshift(name);
   return cats;
 }
  //      Array functions: destructivelyRemoveLastCat()
  //          removes the last cat from the cats array:
function destructivelyRemoveLastCat(name) {
     cats.pop(name);
     return cats;
   }
  //      Array functions: destructivelyRemoveFirstCat()
  //          removes the first cat from the cats array:
function destructivelyRemoveFirstCat(name) {
  cats.shift(name);
  return cats;
}
  //      Array functions: appendCat(name)
  //          appends a cat to the cats array and returns a new array, leaving the cats array unchanged:
  function appendCat(name) {
    const newCats=[...cats, name];
    return newCats;
  }

  //      Array functions: prependCat(name)
  //          prepends a cat to the cats array and returns a new array, leaving the cats array unchanged:
   function prependCat(name) {
     const newCats = [name,...cats];
     return newCats;
   }
  //      Array functions: removeLastCat()
  //          removes the last cat in the cats array and returns a new array, leaving the cats array unchanged:
function removeLastCat() {
  const papCats = cats.slice(0,cats.length-1);
  return papCats;
}
  //      Array functions: removeFirstCat()
  //          removes the first cat from the cats array and returns a new array, leaving the cats array unchanged:
function removeFirstCat() {
  const pepCats = cats.slice(1);
  return pepCats;
}

