const ind1 = require("./monster_create");
const ind2 = require("./monster_class");
const ind3 = require("./monster_skills");
const { party } = require("./monster_party");

let f1 = party[0];
let f2 = party[1];
let f3 = party[2];
let f4 = party[3];

//console.log(f1.VIT)
//console.log(ind4.pm1.VIT)

fight = function (a, b) {
  //template litearl
  console.log(`${a.name} and ${b.name} have decided to fight!"`);
  var turn = 0;
  while (a.VIT > 0 && b.VIT > 0 && turn < 10) {
    console.log(
      a.name + "'s HP: " + a.VIT + "         " + b.name + "'s HP: " + b.VIT
    );

    turn = turn + 1;
    console.log("Turn " + turn);

    //a.VIT = a.VIT - b.ATK
    //console.log(b.name + " attacks and deals " + b.ATK + " damage!")
    console.log(b.name + " uses " + b.s1.s_name + "!");
    if (b.s1.s_damage > 0) {
      console.log("It deals " + b.s1.s_damage + " damage.");
      a.VIT = a.VIT - b.s1.s_damage;
    }

    if (b.s1.s_heal > 0) {
      console.log("It heals " + b.s1.s_heal + " HP.");
      b.VIT = b.VIT + b.s1.s_heal;
    }

    //b.VIT = b.VIT - a.ATK
    //console.log(a.name + " attacks and deals " + a.ATK + " damage!")

    console.log(a.name + " uses " + a.s1.s_name + "!");
    if (a.s1.s_damage > 0) {
      console.log("It deals " + a.s1.s_damage + " damage.");
      b.VIT = b.VIT - a.s1.s_damage;
    }

    if (a.s1.s_heal > 0) {
      console.log("It heals " + a.s1.s_heal + " HP.");
      a.VIT = a.VIT + a.s1.s_heal;
    }
  }
  console.log(
    a.name + "'s HP: " + a.VIT + "         " + b.name + "'s HP: " + b.VIT
  );

  if (a.VIT <= 0 && b.VIT <= 0) {
    console.log("It's a draw!");
  } else if (a.VIT === b.VIT) {
    console.log("It's a draw!");
  } else if (a.VIT > b.VIT) {
    console.log(a.name + " is victorious!");
  } else {
    console.log(b.name + " is victorious!");
  }
};

fight(f2, f3);
