let keyA;
let keyS;
let keyD;
let keyW;
let keyUp;
let keyRight;
let keyLeft;
let keyDown;
let keyCNTR;
let keyShift;
let keyESC;
let key7;
let DD = 2;
let stupid = 1;
let werido = 1;
let dumb = 0;
let bouncing = 0;
let red_score = 0;
let blue_score = 0;
let scoreText1;
let scoreText2;
let minye1 = 1000;
let minye2 = 1000;
let powersg1 = false;
let powerup1 = false;
let powerup2 = false;
let powersg2 = false;
let powercat1 = false;
let powercat2 = false;
let setrando = false;
// let bgmusic;
// let shotsnd;
// let redsnd;
// let bluesnd;
// let consnd;
// let hitsnd;
const randint = limit => Math.floor(Math.random() * limit)
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
const mktank = (tank) => {
    tank.setScale(2);
    tank.setCollideWorldBounds(true);
    tank.setBodySize(25, 30, true);
}

const restartsetstart = () => {
    red_score = 0
    blue_score = 0
    powerup1 = false;
    powersg1 = false;
    powersg2 = false;
    powerup2 = false;
    powercat1 = false;
    powercat2 = false;
    minye2 = 1000;
    minye1 = 1000;
}

const resetround = () => {
    powerup1 = false;
    powersg1 = false;
    powersg2 = false;
    powerup2 = false;
    powercat1 = false;
    powercat2 = false;
    minye2 = 1000;
    minye1 = 1000;
}

let p1shotgunpowerup = (p1, pu) => {
    pu.destroy()
    powerup1 = true;
    powersg1 = true;
    sleep(5000).then(() => {
        powerup1 = false;
        powersg1 = false;
      })
}
  let p2shotgunpowerup = (p2, pu) => {
      pu.destroy()
      powerup2 = true;
      powersg2 = true;
      sleep(5000).then(() => {
          powerup2 = false;
          powersg2 = false;
        })
  }

  let p1catpowerup = (p1, pu) => {
    pu.destroy()
    powerup1 = true;
    powercat1 = true;
    sleep(5000).then(() => {
        powerup1 = false;
        powercat1 = false;
      })
}

  let p2catpowerup = (p2, pu) => {
    pu.destroy()
    powerup2 = true;
    powercat2 = true;
    sleep(5000).then(() => {
        powerup2 = false;
        powercat2 = false;
      })
}

let p1speedpu = (p2, pu) => {
  pu.destroy()
  minye1 = 250
  sleep(5000).then(() => {
      minye1 = 1000
    })
}

let p2speedpu = (p2, pu) => {
  pu.destroy()
  minye2 = 250
  sleep(5000).then(() => {
      minye2 = 1000
    })
}

let maps = [
    'Map1',
    'Map2',
    'Map3',
    'Map4',
    'Map5',
    'Map6',
    'Map7',
    'Map8',
]

// let music = [
//     'bgs1',
//     'bgs2',
//     'bgs3',
//     'bgs4',
//     'bgs5',
//     'bgs6',
//     'bgs7',
//     'bgs8',
//     'bgs9',
//     'bgs10',
//     'bgs11',
//     'bgs12',
//     'bgs13',
//     'bgs14',
//     'bgs15',
//     'bgs16',
//     'bgs17',
//     'bgs18',
//     'bgs19',
//     'bgs20',
//     'bgs21',
//     'bgs22',
//     'bgs23',
//     'bgs24',
//     'bgs25',
//     'bgs26',
//     'bgs27',
//     'bgs28',
//     'bgs29',
//     'bgs30',
// ]
// let bluetanks = [
//     'bluetank',
//     'tankblue1',
//     'tankblue2',
//     'tankblue3',
//     'tankblue4',
//     'tankblue5',
//     'tankblue6',
//     'tankblue7',
//     'tankblue8',
//     'tankblue9',
//     'tankblue10',
//     'tankblue11',
//     'tankblue12',
//     'tankblue13',
//     'tankblue14',
//     'tankblue15',
// ]
// let redtanks = [
//     'redtank',
//     'tankred1',
//     'tankred2',
//     'tankred3',
//     'tankred4',
//     'tankred5',
//     'tankred6',
//     'tankred7',
//     'tankred8',
//     'tankred9',
//     'tankred10',
//     'tankred11',
//     'tankred12',
//     'tankred13',
//     'tankred14',
//     'tankred15',
// ]

const config = {
    width: 1000, //This is to change the background of phaser width
    hight: 700, //This is to change the background of phaser hight
    backgroundColor: 0x777777, // obvious
    scene: [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8, Scene9], //Make sure all scenes are added here!
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
            pixelArt: true,
        }
    }
}

let game = new Phaser.Game(config);