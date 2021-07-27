
const ind1 = require('./monster_create')
const ind2 = require('./monster_class')
const ind3 = require('./monster_skills')

ind1.MonsterCreate('Foofy')

//console.log(Monster.m_name)

let pm1 = Monster

ind1.MonsterCreate('PoPo')

let pm2 = Monster

ind1.MonsterCreate('Jafa')

let pm3 = Monster

ind1.MonsterCreate('Kiki')

let pm4 = Monster

let party = [pm1,pm2,pm3,pm4] //party members

//console.log(pm1.m_s1)

//pm1.m_s1.exe()

module.exports = {party,pm1,pm2,pm3,pm4}