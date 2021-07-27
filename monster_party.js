const { createMonster } = require("./monster_create");
const ind2 = require("./monster_class");
const ind3 = require("./monster_skills");

// ind1.createMonster("Foofy");

//console.log(Monster.m_name)

const names = ["Foofy", "Popo", "Jafa", "Kiki"];

const party = names.map((name) => {
  return createMonster(name);
}); //party members

//console.log(pm1.m_s1)

//pm1.m_s1.exe()

module.exports = { party };
