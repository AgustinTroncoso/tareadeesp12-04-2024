//Ejercicio de practica Javascript
//Objeto base para los personajes
class Character {
    constructor(name, health, damage) {
      //Atributos
      this.name = name;
      this.health = health;
      this.maxhealth = health;
      this.damage = damage;
    }
    //Verifica si el personaje esta vivo
    isAlive() {
      return this.health > 0;
    }
  
    //Ataca a otro personaje seleccionado
    attack(target) {
      var attack;
      var numeroAleatorio = Math.floor(Math.random() * 100);
      if (90>numeroAleatorio)
      {
        attack=this.damage*2;
      }else{
        attack=this.damage;
      }
      

      console.log(`${this.name} deals ${attack} DMG to ${target.name}`);
      target.health -= attack;
    }
  
    //Retorna la información actual del personaje
    status() {
      return `${this.name} - HP ${this.health}/${this.maxhealth}`;
    }
}


   //Creación de personajes
   const hero = new Character("Heroe", Math.floor(Math.random() * 100)+1,  Math.floor(Math.random() * 10)+5);
   const enemy = new Character("enemy", Math.floor(Math.random() * 100)+1,  Math.floor(Math.random() * 10)+5);
   
   
alert( "Pelea a muerte con cuchillos "+"\n Hp del heroe: " + hero.health +
" \nHp del enemigo: " + enemy.health);
   fight(hero, enemy);
 //Función para combatir
async function fight(firstCharacter, secondCharacter) {
    console.log("Empieza el combate!");
    updateHealthBars();
    while (true) {
      
      if (firstCharacter.isAlive()) {
        
        await delay(1000); // Delay for 1 second
        updateHealthBars();
      } else {
        console.log(`${firstCharacter.name} died!`);
        displayWinner(secondCharacter);
        break;
      }
  
      // Segundo personaje ataca si está vivo
      if (secondCharacter.isAlive()) {
        
        await delay(1000); // Delay for 1 second
        updateHealthBars();
      } else {
        console.log(`${secondCharacter.name} died!`);
        displayWinner(firstCharacter);
        break;
      }
    }
  }
   //Comenzar combate
 
  fight(hero, enemy);

  document.addEventListener("keydown", function(event) {
    // Verificar si la tecla presionada es "x"
    if (event.key === "x") {
        // Ataque del primer personaje
        hero.attack(enemy);
    } else if (event.key === "n") {
        // Ataque del segundo personaje
        enemy.attack(hero);
    }
});


  //Función para actualizar las barras de salud en la interfaz
  function updateHealthBars() {
    // Update hero's health bar
    const heroHealthBar = document.getElementById('hero-health-bar').querySelector('.health');
    const heroHealthPercent = (hero.health / hero.maxhealth) * 100;
    heroHealthBar.style.width = `${heroHealthPercent < 0 ? 0 : heroHealthPercent}%`;
  
    // Update enemy's health bar
    const enemyHealthBar = document.getElementById('enemy-health-bar').querySelector('.health');
    const enemyHealthPercent = (enemy.health / enemy.maxhealth) * 100;
    enemyHealthBar.style.width = `${enemyHealthPercent < 0 ? 0 : enemyHealthPercent}%`;
  
    // Update hero's health text
    document.getElementById('hero-health').innerText = `${hero.name} - HP ${hero.health < 0 ? 0 : hero.health}/${hero.maxhealth}`;
  
    // Update enemy's health text
    document.getElementById('enemy-health').innerText = `${enemy.name} - HP ${enemy.health < 0 ? 0 : enemy.health}/${enemy.maxhealth}`;
  }
  
  //Función para mostrar al ganador
  function displayWinner(winner) {
    const winnerText = document.createElement('p');
    winnerText.textContent = `${winner.name} won the fight!`;
    document.body.appendChild(winnerText);
  }
  
  //Función para introducir un retraso
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
