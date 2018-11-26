new Vue({
  el: "#app",
  data: {
    health: 100,
    monsterHealth: 100,
    activityList: ["the", "quick", "brown"],
    inGame: false
  },
  methods: {
    startGame: function() {
      this.health = 100;
      this.monsterHealth = 100;
      this.activityList = [];
      this.inGame = true;
    },

    attack: function() {
      let damage = this.getHP(false);
      this.monsterHealth -= damage;
    },

    monsterAttack: function() {
      let randomize = Math.random() >= 0.5;

      let damage = this.getHP(randomize);
      this.health -= damage;
    },

    specialAttack: function() {
      let damage = this.getHP(true);
      this.monsterHealth -= damage;
    },

    heal: function() {
      let heal = this.getHP(false);
      this.health += heal;
    },

    giveUp: function() {
      this.inGame = false;
    },

    getHP: function(special) {
      let base = special ? 15 : 5;

      return Math.floor(Math.random() * 10) + base;
    }
  },

  watch: {
    health: function() {
      if (this.health <= 0) {
        this.health = 0;
        this.inGame = false;
        console.log("game is finished, you lost!");
      }
    },

    monsterHealth: function() {
      if (this.monsterHealth <= 0) {
        this.monsterHealth = 0;
        this.inGame = false;
        console.log("game is finished, you won!");
      }

      setTimeout(function() {
        this.monsterAttack();
      }, 1000);
    }
  }
});
