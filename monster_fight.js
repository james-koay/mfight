const ind1 = require('./monster_create')
const ind2 = require('./monster_class')
const ind3 = require('./monster_skills')
const ind4 = require('./monster_party')


let f1 = Object.assign({}, ind4.pm1);
let f2 = Object.assign({}, ind4.pm2);
let f3 = Object.assign({}, ind4.pm3);
let f4 = Object.assign({}, ind4.pm4);

//console.log(f1.m_VIT)
//console.log(ind4.pm1.m_VIT)

fight = function(a,b){

    console.log(a.m_name + ' and ' + b.m_name + ' have decided to fight!')
    var turn = 0
    while(a.m_VIT > 0  && b.m_VIT > 0 && turn < 10){
        console.log(a.m_name + "'s HP: " + a.m_VIT +"         " + b.m_name + "'s HP: " + b.m_VIT)
        
        turn = turn + 1
        console.log("Turn " + turn)


        //a.m_VIT = a.m_VIT - b.m_ATK
        //console.log(b.m_name + " attacks and deals " + b.m_ATK + " damage!")
        console.log(b.m_name + " uses " + b.m_s1.s_name + "!")
        if(b.m_s1.s_damage > 0){
            console.log("It deals " + b.m_s1.s_damage + " damage.")
            a.m_VIT = a.m_VIT - b.m_s1.s_damage
        }

        if(b.m_s1.s_heal > 0){
            console.log("It heals " + b.m_s1.s_heal + " HP.")
            b.m_VIT = b.m_VIT + b.m_s1.s_heal
        }

        //b.m_VIT = b.m_VIT - a.m_ATK
        //console.log(a.m_name + " attacks and deals " + a.m_ATK + " damage!")

        console.log(a.m_name + " uses " + a.m_s1.s_name + "!")
        if(a.m_s1.s_damage > 0){
            console.log("It deals " + a.m_s1.s_damage + " damage.")
            b.m_VIT = b.m_VIT - a.m_s1.s_damage
            }

        if(a.m_s1.s_heal > 0){
            console.log("It heals " + a.m_s1.s_heal + " HP.")
            a.m_VIT = a.m_VIT + a.m_s1.s_heal
            }
    }
    console.log(a.m_name + "'s HP: " + a.m_VIT +"         " + b.m_name + "'s HP: " + b.m_VIT)

    if(a.m_VIT <= 0 && b.m_VIT <=0){
        console.log("It's a draw!")
    }
    else if (a.m_VIT === b.m_VIT){
        console.log("It's a draw!")
    }
    else if (a.m_VIT > b.m_VIT){
        console.log(a.m_name + " is victorious!")
    } 
    else {
         console.log(b.m_name + " is victorious!")
    }

}   


fight(f2,f3)
