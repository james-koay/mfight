const ind1 = require('./monster_skills')

Skill = function(name){
    this.name = name
    this.s_name = String(name)
    this.s_damage = 0
    this.s_speed = 0
    this.exe = function(){
                console.log(this.s_name)
            }
         
    }

Slash = new Skill('Slash')
    Slash.s_damage = 2 //5xLevel?
    Slash.s_speed = 2

Fireball = new Skill('Fireball')
    Fireball.s_damage = 5
    Fireball.s_speed = 4

Guard = new Skill('Guard')
    Guard.s_defense = 2
    Guard.s_duration = 2
    Guard.s_speed = 4

Heal = new Skill('Heal')
    Heal.s_heal = 3
    Heal.s_speed = 5

//Slash.exe()
//Fireball.exe()
//Guard.exe()

module.exports = {Slash, Fireball, Guard, Heal}

