const ind3 = require("./monster_skills");

const monster_template = {
  name: null,
  class: null,
  race: null,
};

const race_list = ["Rabbit", "Toad", "Lizard", "Fox"];

const class_list = ["Guardian", "Knight", "Cleric", "Archer", "Wizard"];

const skill_list = [Slash, Fireball, Guard, Heal];

// createMonster instead of MonsterCreate so it follows the style doSomething
function createMonster(name) {
  const monster = {};
  monster.name = name;
  monster.class = class_list[Math.floor(Math.random() * class_list.length)];
  monster.race = race_list[Math.floor(Math.random() * race_list.length)];
  console.log(
    "You have summoned " +
      name +
      " the " +
      monster.race +
      " " +
      monster.class +
      "!"
  );

  monster.VIT = 20;
  monster.ATK = 1 + Math.floor(Math.random() * 3);
  monster.DEF = 1;
  monster.AGI = 1;

  monster.s1 = skill_list[Math.floor(Math.random() * skill_list.length)];
  monster.s2 = skill_list[Math.floor(Math.random() * skill_list.length)];
  return monster;
}

//createMonster ('Unnamed')

module.exports = { createMonster };
