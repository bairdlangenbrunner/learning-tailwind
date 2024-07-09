const myObject = {
  prop1: 'vaulue',
  prop2: 2,
  prop3: function() {
    return null
  }
}

// object constructor is a function that looks like this
function Player(name, marker) {
  this.name = name,
  this.marker = marker,
}

// and you call the function with the keyword "new"
const player = new Player('steve', 'X')

