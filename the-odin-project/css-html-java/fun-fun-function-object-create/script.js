const cat = {
  name: name,
  this.color: color,
  makeSound: function() {
    alert(this.sound)
  }
}

const cat = {
  name: name,
  this.color: color,
  makeSound: function() {
    alert(this.sound)
  }
}

// cat.makeSound()

const mark = Object.create(cat)
mark.sound = 'meuf'
mark.makeSound()

const waffles = Object.create(cat)