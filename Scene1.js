class Scene1 extends Phaser.Scene {
    //Remember to change the orange ("") to whatever the scene is for
    constructor() {
        super("bootGame");
    }

    preload(){
        //this.load.image("background", "assets/images/background") make sure background is background.png or whatever
        
        this.load.image("bluetank", "assets/tankimg/blue_tank.png");
        this.load.image("redtank", "assets/tankimg/red_tank.png");
        // this.load.image("tankblue1", "assets/tankimg/Aspectblue.png");
        // this.load.image("tankred1", "assets/tankimg/Aspectred.png");
        // this.load.image("tankblue2", "assets/tankimg/balloonblue.png");
        // this.load.image("tankred2", "assets/tankimg/balloonred.png");
        // this.load.image("tankblue3", "assets/tankimg/Boxzorblue.png");
        // this.load.image("tankred3", "assets/tankimg/Boxzorred.png");
        // this.load.image("tankblue4", "assets/tankimg/breakorblue.png");
        // this.load.image("tankred4", "assets/tankimg/breakorred.png");
        // this.load.image("tankblue5", "assets/tankimg/Checkersblue.png");
        // this.load.image("tankred5", "assets/tankimg/Checkersred.png");
        // this.load.image("tankblue6", "assets/tankimg/Crownblue.png");
        // this.load.image("tankred6", "assets/tankimg/Crownred.png");
        // this.load.image("tankblue7", "assets/tankimg/Deathscannonblue.png");
        // this.load.image("tankred7", "assets/tankimg/Deathscannonred.png");
        // this.load.image("tankblue8", "assets/tankimg/invertedblue.png");
        // this.load.image("tankred8", "assets/tankimg/invertedred.png");
        // this.load.image("tankblue9", "assets/tankimg/osirisblue.png");
        // this.load.image("tankred9", "assets/tankimg/osirisred.png");
        // this.load.image("tankblue10", "assets/tankimg/outlineblue.png");
        // this.load.image("tankred10", "assets/tankimg/outlinered.png");
        // this.load.image("tankblue11", "assets/tankimg/Outlinebreakblue.png");
        // this.load.image("tankred11", "assets/tankimg/Outlinebreakred.png");
        // this.load.image("tankblue12", "assets/tankimg/Smileblue.png");
        // this.load.image("tankred12", "assets/tankimg/Smilered.png");
        // this.load.image("tankblue13", "assets/tankimg/Spidyblue.png");
        // this.load.image("tankred13", "assets/tankimg/Spidyred.png");
        // this.load.image("tankblue14", "assets/tankimg/Stripedblue.png");
        // this.load.image("tankred14", "assets/tankimg/Stripedred.png");
        // this.load.image("tankblue15", "assets/tankimg/White_bluetank.png");
        // this.load.image("tankred15", "assets/tankimg/White_redtank.png");

        this.load.image("bullet", "assets/gmeimg/bullet.png")
        this.load.image("catbullet", "assets/gmeimg/catbullet.png")
        this.load.image("p1", "assets/gmeimg/platform1.png")
        this.load.image("p2", "assets/gmeimg/platform2.png")
        this.load.image("p3", "assets/gmeimg/platform3.png")
        this.load.image("p4", "assets/gmeimg/platform4.png")
        this.load.image("p5", "assets/gmeimg/platform5.png")
        this.load.image("p6", "assets/gmeimg/platform6.png")
        this.load.image("tankbg", "assets/gmeimg/tankbackgroundpic.webp")
        this.load.image("background", "assets/gmeimg/background.png")
        this.load.image("background2", "assets/gmeimg/background2.png")
        this.load.image("background3", "assets/gmeimg/background3.png")
        this.load.image("background4", "assets/gmeimg/background4.png")
        this.load.image("background5", "assets/gmeimg/background5.png")
        this.load.image("background6", "assets/gmeimg/background6.png")
        this.load.image("background7", "assets/gmeimg/background7.png")
        this.load.image("background8", "assets/gmeimg/background8.png")
        this.load.image("map1", "assets/gmeimg/map1.png")
        this.load.image("map2", "assets/gmeimg/map2.png")
        this.load.image("map3", "assets/gmeimg/map3.png")
        this.load.image("map4", "assets/gmeimg/map4.png")
        this.load.image("map5", "assets/gmeimg/map5.png")
        this.load.image("map6", "assets/gmeimg/map6.png")
        this.load.image("map7", "assets/gmeimg/map7.png")
        this.load.image("map8", "assets/gmeimg/map8.png")
        this.load.image("socball", "assets/gmeimg/soccerball.png")
        this.load.image("balleye", "assets/gmeimg/ballpt2.png")
        this.load.image("puck", "assets/gmeimg/puck.png")
        this.load.image("sgpu", "assets/gmeimg/shotgun.png")
        this.load.image("catpu", "assets/gmeimg/caticon.png")
        this.load.image("speed", "assets/gmeimg/speedpu.png")
        this.load.image("ss", "assets/gmeimg/safe.png")
        this.load.image("qm", "assets/gmeimg/question.png")


        // this.load.audio("bgs1", "assets/audio/background.wav")
        // this.load.audio("bgs2", "assets/audio/background2.wav")
        // this.load.audio("bgs3", "assets/audio/background3.wav")
        // this.load.audio("bgs4", "assets/audio/background4.wav")
        // this.load.audio("bgs5", "assets/audio/background5.wav")
        // this.load.audio("bgs6", "assets/audio/background6.wav")
        // this.load.audio("bgs7", "assets/audio/background7.wav")
        // this.load.audio("bgs8", "assets/audio/background8.wav")
        // this.load.audio("bgs9", "assets/audio/background9.wav")
        // this.load.audio("bgs10", "assets/audio/background10.wav")
        // this.load.audio("bgs11", "assets/audio/background11.wav")
        // this.load.audio("bgs12", "assets/audio/background12.wav")
        // this.load.audio("bgs13", "assets/audio/background13.wav")
        // this.load.audio("bgs14", "assets/audio/background14.wav")
        // this.load.audio("bgs15", "assets/audio/background15.wav")
        // this.load.audio("bgs16", "assets/audio/background16.wav")
        // this.load.audio("bgs17", "assets/audio/background17.wav")
        // this.load.audio("bgs18", "assets/audio/background18.wav")
        // this.load.audio("bgs19", "assets/audio/background19.wav")
        // this.load.audio("bgs20", "assets/audio/background20.wav")
        // this.load.audio("bgs21", "assets/audio/background21.wav")
        // this.load.audio("bgs22", "assets/audio/background22.wav")
        // this.load.audio("bgs23", "assets/audio/background23.wav")
        // this.load.audio("bgs24", "assets/audio/background24.wav")
        // this.load.audio("bgs25", "assets/audio/background25.wav")
        // this.load.audio("bgs26", "assets/audio/background26.wav")
        // this.load.audio("bgs27", "assets/audio/background27.wav")
        // this.load.audio("bgs28", "assets/audio/background28.wav")
        // this.load.audio("bgs29", "assets/audio/background29.wav")
        // this.load.audio("bgs30", "assets/audio/background30.wav")

        // this.load.audio("fire", "assets/audio/shoot.wav")
        // this.load.audio("bluewin", "assets/audio/bluewin.wav")
        // this.load.audio("redwin", "assets/audio/redwin.wav")
        // this.load.audio("confetti", "assets/audio/confetti.wav")
        // this.load.audio("hit", "assets/audio/hit.wav")
    }

    create() {

        let blob = this.add.image(500, 355, "tankbg")
        blob.setScale(.35)

        const map = (maplist, mappic, mapscene) => {
            maplist.setScale(.09)
            maplist.setInteractive();
            let ex
            maplist.on('pointerover', () => {
                ex = this.add.image(600, 125, mappic)
                ex.setScale(.15)
            });
            maplist.on('pointerout', () => {
                ex.destroy()
            }); 
            maplist.on('pointerdown', () => {
                restartsetstart()
                this.scene.start(mapscene)
            }); 
        }

        const maper1 = this.add.image(150, 310, "map1")
        map(maper1, "map1", "Map1")

        const maper2 = this.add.image(375, 310, "map2")
        map(maper2, "map2", "Map2")

        const maper3 = this.add.image(600, 310, "map3")
        map(maper3, "map3", "Map3")

        const maper4 = this.add.image(825, 310, "map4")
        map(maper4, "map4", "Map4")

        const maper5 = this.add.image(150, 485, "map5")
        map(maper5, "map5", "Map5")

        const maper6 = this.add.image(375, 485, "map6")
        map(maper6, "map6", "Map6")

        const maper7 = this.add.image(600, 485, "map7")
        map(maper7, "map7", "Map7")

        const maper8 = this.add.image(825, 485, "map8")
        map(maper8, "map8", "Map8")

        const question = this.add.image(500, 650, "qm")
        question.setScale(.8)
        question.setInteractive();
        let ex
        question.on('pointerover', () => {
            ex = this.add.image(600, 125, "qm")
            ex.setScale(1.1)
        });
        question.on('pointerout', () => {
            ex.destroy()
        }); 
        question.on('pointerdown', () => {
            setrando = true;
            restartsetstart()
            this.scene.start(maps[randint(8)])
        }); 

        let choosemap = this.add.text(50, 125, "Choose your map", {
            fontFamily: "Luminari",
            fontSize: "35px",
            color: "black",
        })
    }
    

}