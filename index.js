let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push("Ralph");
}

function destructivelyPrependCat(name){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.splice(2,1)
}

function destructivelyRemoveFirstCat(){
    cats.splice(0,1) 
}


function appendCat(cats, cat) {
  return [...cats, cat]; 
}

function appendCat(cats, name) {
    return [...cats, name];
  }
  
 
  function appendCat (name) {
    return [...cats, name];
  }
  
  function prependCat (name) {
    return [name, ...cats];
  }
  
  function removeFirstCat () {
    return cats.slice(1);
  }
  
  function removeLastCat () {
    return cats.slice(0, cats.length - 1);
  }






  
  
