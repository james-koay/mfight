const ind3 = require('./monster_skills')

const monster_template = {
    m_name:null,
    m_class:null,
    m_race:null,
}

const m_race_list = ['Rabbit', 'Toad', 'Lizard', 'Fox'] 

const m_class_list = ['Guardian', 'Knight', 'Cleric', 'Archer','Wizard']

const m_skill_list = [Slash, Fireball, Guard, Heal]


function MonsterCreate(name) {
    Monster = Object.create(monster_template);
    Monster.m_name = name
    Monster.m_class = m_class_list[Math.floor(Math.random()*(m_class_list.length))]
    Monster.m_race = m_race_list[Math.floor(Math.random()*(m_race_list.length))]
    console.log('You have summoned ' + name + ' the ' + Monster.m_race + ' ' + Monster.m_class +'!' )

    Monster.m_VIT = 20
    Monster.m_ATK = 1 + Math.floor(Math.random()*(3))
    Monster.m_DEF = 1
    Monster.m_AGI = 1

    Monster.m_s1 = m_skill_list[Math.floor(Math.random()*(m_skill_list.length))]
    Monster.m_s2 = m_skill_list[Math.floor(Math.random()*(m_skill_list.length))]

};

//MonsterCreate ('Unnamed')

module.exports = {MonsterCreate,}
