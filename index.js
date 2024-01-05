let name;
let xp;
let lvl;

while(name == undefined){
    name = prompt('Enter your name of hero!');
    while(xp == undefined){
        xp = parseInt(prompt('Enter the XP of hero!'));
    }
}

if(xp <= 1000 ){
    lvl = 'iron';
};

if(xp >= 1001 && xp <= 2000 ){
    lvl = 'bronze';
};

if(xp >= 2001 && xp <= 5000 ){
    lvl = 'silver';
};

if(xp >= 5001 && xp <= 7000 ){
    lvl = 'gold';
};

if(xp >= 7001 && xp <= 8000 ){
    lvl = 'platinum';
};

if(xp >= 8001 && xp <= 9000 ){
    lvl = 'ascending';
};

if(xp >= 9001 && xp <= 10000){
    lvl = 'immortal';
};

if(xp >= 10001){
 lvl = 'radiant';
};


alert(`The hero of name **${name}** it ath the level of **${lvl}**`);