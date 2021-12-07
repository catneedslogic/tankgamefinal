class Scene8 extends Phaser.Scene {
    //Remember to change the orange ("") to whatever the scene is for
    constructor() {
        super("Map7");
    } 

    init() {
        let blue_score = localStorage.getItem("blue_score")
        let red_score = localStorage.getItem("red_score")
    }

    create(){

        this.background = this.add.image(500, 370, "background7");

        // this.p1 = this.physics.add.sprite(900, 600, bluetanks[randint(16)]);
        this.p1 = this.physics.add.sprite(900, 600, "bluetank");
        this.p1.setScale(2);
        this.p1.setCollideWorldBounds(true);
        this.p1.setBodySize(25, 30, true);
        this.p2 = this.physics.add.sprite(100, 100, "redtank");
        this.p2.setScale(2);
        this.p2.setCollideWorldBounds(true);
        this.p2.setBodySize(25, 30, true);

        let balb = randint(3)

        sleep(10000000).then(() => {
        if (balb == 0) {
          this.sgpu = this.physics.add.sprite(500,350, "sgpu")
          this.physics.add.collider(this.p1, this.sgpu, p1shotgunpowerup)
        this.physics.add.collider(this.p2, this.sgpu, p2shotgunpowerup)
        }
        else if (balb == 1) {
          this.catpu = this.physics.add.sprite(500,350, "catpu")
          this.physics.add.collider(this.p1, this.catpu, p1catpowerup)
        this.physics.add.collider(this.p2, this.catpu, p2catpowerup)
        }
        else if (balb == 2) {
          this.speedpu = this.physics.add.sprite(500, 350, "speed")
          this.physics.add.collider(this.p1, this.speedpu, p1speedpu)
        this.physics.add.collider(this.p2, this.speedpu, p2speedpu)
        }})
        
        let randonumber = randint(4)

        if (randonumber == 0) {
            this.plats = this.physics.add.image(100, 330, "balleye")
        this.plats.setScale(2).setCircle(22.5)
        this.plats.setBounce(1.01)
        }
        else if (randonumber == 1) {
            this.plats = this.physics.add.image(900, 330, "balleye")
        this.plats.setScale(2).setCircle(22.5)
        this.plats.setBounce(1.01)
        }
        else if (randonumber == 2) {
            this.plats = this.physics.add.image(500, 85, "balleye")
        this.plats.setScale(2).setCircle(22.5)
        this.plats.setBounce(1.01)
        }
        else if (randonumber == 3) {
            this.plats = this.physics.add.image(500, 650, "balleye")
        this.plats.setScale(2).setCircle(22.5)
        this.plats.setBounce(1.01)
        }
        
        this.plat = this.physics.add.staticGroup()
        this.plat.create(500, -50, 'p3').setVisible().setBodySize(1000, 95, true)
        this.plat.create(-50, 400, 'p3').setVisible().setBodySize(100, 1000, true)
        this.plat.create(500, 850, 'p3').setVisible().setBodySize(1000, 95, true)
        this.plat.create(1050, 400, 'p3').setVisible().setBodySize(100, 1000, true)

        this.plat.create(100, 330, 'ss')
        this.plat.create(900, 330, 'ss')
        this.plat.create(500, 85, 'ss')
        this.plat.create(500, 650, 'ss')

        this.plat.create(100, 330, 'ss')
        this.plat.create(900, 330, 'ss')
        this.plat.create(500, 85, 'ss')
        this.plat.create(500, 650, 'ss')
        this.plat.create(100, 330, 'ss')
        this.plat.create(900, 330, 'ss')
        this.plat.create(500, 85, 'ss')
        this.plat.create(500, 650, 'ss')
        this.plat.create(100, 330, 'ss')
        this.plat.create(900, 330, 'ss')
        this.plat.create(500, 85, 'ss')
        this.plat.create(500, 650, 'ss')
        this.plat.create(100, 330, 'ss')
        this.plat.create(900, 330, 'ss')
        this.plat.create(500, 85, 'ss')
        this.plat.create(500, 650, 'ss')
        this.plat.create(100, 330, 'ss')
        this.plat.create(900, 330, 'ss')
        this.plat.create(500, 85, 'ss')
        this.plat.create(500, 650, 'ss')
        

        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')

        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')

        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')

        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')

        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')

        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')

        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')

        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')

        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')

        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')

        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')

        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')

        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')

        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')

        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')

        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')

        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')

        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')

        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')
        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')
        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')
        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')
        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')
        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')
        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')
        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')
        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')
        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')
        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')
        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')
        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')
        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')
        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')
        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')
        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')
        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')
        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')
        this.plat.create(500, 380, 'p2')
        this.plat.create(50, 600, 'p2')
        this.plat.create(100, 710, 'p1')
        this.plat.create(950, 600, 'p2')
        this.plat.create(900, 710, 'p1')
        this.plat.create(50, 100, 'p2')
        this.plat.create(100, 15, 'p1')
        this.plat.create(950, 100, 'p2')
        this.plat.create(900, 15, 'p1')

        keyShift = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT)
        keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyCNTR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FIVE);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
        key7 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SEVEN);

        // this.add.text(20, 20, "Playing Game", {
        //     font: "25px Arial", fill: "yellow"
        // });

        let deathlyhollow = (p2, pu) => {
            scoreText1.setText(`Blue score: ${red_score += 1}`)
            if (red_score == 5) {
                red_score = 0
                blue_score = 0
                powersg1 = 0;
            powerup1 = 0;
            powerup2 = 0;
            powersg2 = 0;
                this.add.text(325, 250, 'RED WINS', {
                    fontSize: "70px",
                    color: "red"
                })
                // bgmusic.stop()
                // hitsnd.play({volume: .5})
                // redsnd.play()
                this.scene.pause()
                // sleep(3000).then(() => {
                //     consnd.play({volume: .8})
                // })
                sleep(5000).then(() => {
                  if (setrando == true) {
                    this.scene.start(maps[randint(8)])
                }  
                  else if (setrando == false) {
                  this.scene.restart()
                }                  })
            }
            else if (red_score != 5) {
            // hitsnd.play({volume: .5})
            // bgmusic.stop()
            powersg1 = 0;
            powerup1 = 0;
            powerup2 = 0;
            powersg2 = 0;
            this.scene.restart()
            }
        }

        let deathlyhollowthesenutzlmao = (p2, pu) => {
            scoreText1.setText(`Blue score: ${blue_score += 1}`)
            if (blue_score == 5) {
                red_score = 0
                blue_score = 0
                this.add.text(325, 250, 'BLUE WINS', {
                    fontSize: "70px",
                    color: "cyan",
                })
                // bgmusic.stop()
                // hitsnd.play({volume: .5})
                // bluesnd.play()
                this.scene.pause()
                // sleep(3500).then(() => {
                //     consnd.play({colume: .5})
                // })
                sleep(5500).then(() => {
                  if (setrando == true) {
                    this.scene.start(maps[randint(8)])
                }  
                  else if (setrando == false) {
                  this.scene.restart()
                }                  })
            }
            else if (blue_score != 5) {
            // hitsnd.play({volume: .5})
            // bgmusic.stop()
            this.scene.restart()
        }
        }

        this.physics.add.collider(this.p2, this.plats, deathlyhollowthesenutzlmao)
        this.physics.add.collider(this.p1, this.plats, deathlyhollow)
        this.physics.add.collider(this.plat, this.plats)

        let colliedcunts = (p, b) => {
            let cunt = this.add.text(325, 250, "Trash lmao", {
                fontSize: "70px",
                color: "purple",
            })
            sleep(500).then(() => {
                cunt.destroy()
              })
        
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
  
            powerup1 = false;
            powersg1 = false;
            powersg2 = false;
            powerup2 = false;
            powercat1 = false;
            powercat2 = false;
            minye2 = 1000;
            minye1 = 1000;

        this.physics.add.collider(this.p1, this.p2, colliedcunts)

        scoreText1 = this.add.text(800, 16, `Blue score: ${blue_score}`, {
            fontFamily: "roboto",
            color: "cyan",
            fontSize: "20px",
          })
          localStorage.setItem('blue_score', blue_score)

        scoreText2 = this.add.text(16, 16, `Red score: ${red_score}`, {
            fontFamily: "roboto",
            color: "red",
            fontSize: "20px",
          })
          localStorage.setItem('red_score', red_score)

        // bgmusic = this.sound.add(music[randint(30)])
        // bgmusic.play({
        //     volume: .1,
        //     loop: true,
        //     // seek: 4 this is for how far into the song
        //     // rate this is to slow it down.Goes 1-.5 - 0
        // })
        // shotsnd = this.sound.add('fire')
        // hitsnd = this.sound.add('hit')
        // consnd = this.sound.add('confetti')
        // redsnd = this.sound.add('redwin')
        // bluesnd = this.sound.add('bluewin')
    }

    update (){
    this.moveManager()
    }

    firep1(){
        let bulletHit1 = (p, b) => {
            scoreText1.setText(`Blue score: ${blue_score += 1}`)
            if (blue_score == 5) {
                red_score = 0
                blue_score = 0
                this.add.text(325, 250, 'BLUE WINS', {
                    fontSize: "70px",
                    color: "cyan",
                })
                // bgmusic.stop()
                // hitsnd.play({volume: .5})
                // bluesnd.play()
                this.scene.pause()
                // sleep(3500).then(() => {
                //     consnd.play({colume: .5})
                // })
                sleep(5500).then(() => {
                  if (setrando == true) {
                    this.scene.start(maps[randint(8)])
                }  
                  else if (setrando == false) {
                  this.scene.restart()
                }                  })
            }
            else if (blue_score != 5) {
            // hitsnd.play({volume: .5})
            // bgmusic.stop()
            this.scene.restart()
        }
            }
            let bulletWall1 = (p, b) => {
            
                    b.destroy()
                
            }
        // left
        if(this.p1.angle == -90) {
            this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, "bullet")
            this.bullet.setTint(0x0000FF)
            this.bullet.angle = -180
            this.bullet.setVelocityX(-460);
            this.physics.add.collider(this.p2, this.bullet, bulletHit1)
            this.physics.add.collider(this.plat, this.bullet, bulletWall1)
            this.physics.add.collider(this.plats, this.bullet, bulletWall1)
            this.bullet.setCollideWorldBounds(true)
            this.bullet.body.onWorldBounds = true;
            this.bullet.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet);
            this.bullet.setBounce(1)
        }
        // right
        else if(this.p1.angle == 90) {
            this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, "bullet")
            this.bullet.setTint(0x0000FF)
            this.bullet.angle = 0
            this.bullet.setVelocityX(460);
            this.physics.add.collider(this.p2, this.bullet, bulletHit1)
            this.physics.add.collider(this.plat, this.bullet, bulletWall1)
            this.physics.add.collider(this.plats, this.bullet, bulletWall1)
            this.bullet.setCollideWorldBounds(true)
            this.bullet.body.onWorldBounds = true;
            this.bullet.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet);
            this.bullet.setBounce(1)
        }
        // up
        else if(this.p1.angle == 0) {
            this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, "bullet")
            this.bullet.setTint(0x0000FF)
            this.bullet.angle = -90
            this.bullet.setVelocityY(-460);
            this.physics.add.collider(this.p2, this.bullet, bulletHit1)
            this.physics.add.collider(this.plat, this.bullet, bulletWall1)
            this.physics.add.collider(this.plats, this.bullet, bulletWall1)
            this.bullet.setCollideWorldBounds(true)
            this.bullet.body.onWorldBounds = true;
            this.bullet.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet);
            this.bullet.setBounce(1)
        }
        // down
        else if(this.p1.angle == -180) {
            this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, "bullet")
            this.bullet.setTint(0x0000FF)
            this.bullet.angle = -90
            this.bullet.setVelocityY(460);
            this.physics.add.collider(this.p2, this.bullet, bulletHit1)
            this.physics.add.collider(this.plat, this.bullet, bulletWall1)
            this.physics.add.collider(this.plats, this.bullet, bulletWall1)
            this.bullet.setCollideWorldBounds(true)
            this.bullet.body.onWorldBounds = true;
            this.bullet.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet);
            this.bullet.setBounce(1)
        }
        // down left
        else if(this.p1.angle == -135) {
            this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, "bullet")
            this.bullet.setTint(0x0000FF)
            this.bullet.angle = -225
            this.bullet.setVelocityX(-460);
            this.bullet.setVelocityY(460);
            this.physics.add.collider(this.p2, this.bullet, bulletHit1)
            this.physics.add.collider(this.plat, this.bullet, bulletWall1)
            this.physics.add.collider(this.plats, this.bullet, bulletWall1)
            this.bullet.setCollideWorldBounds(true)
            this.bullet.body.onWorldBounds = true;
            this.bullet.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet);
            this.bullet.setBounce(1)
        }
        // down right
        else if(this.p1.angle == 135) {
            this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, "bullet")
            this.bullet.setTint(0x0000FF)
            this.bullet.angle = 45
            this.bullet.setVelocityX(460);
            this.bullet.setVelocityY(460);
            this.physics.add.collider(this.p2, this.bullet, bulletHit1)
            this.physics.add.collider(this.plat, this.bullet, bulletWall1)
            this.physics.add.collider(this.plats, this.bullet, bulletWall1)
            this.bullet.setCollideWorldBounds(true)
            this.bullet.body.onWorldBounds = true;
            this.bullet.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet);
            this.bullet.setBounce(1)
        }
        // up left
        else if(this.p1.angle == -45.00000000000006) {
            this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, "bullet")
            this.bullet.setTint(0x0000FF)
            this.bullet.angle = -135.00000000000006
            this.bullet.setVelocityX(-460);
            this.bullet.setVelocityY(-460);
            this.physics.add.collider(this.p2, this.bullet, bulletHit1)
            this.physics.add.collider(this.plat, this.bullet, bulletWall1)
            this.physics.add.collider(this.plats, this.bullet, bulletWall1)
            this.bullet.setCollideWorldBounds(true)
            this.bullet.body.onWorldBounds = true;
            this.bullet.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet);
            this.bullet.setBounce(1)
        }
        // up right
        else if(this.p1.angle == 45) {
            this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, "bullet")
            this.bullet.setTint(0x0000FF)
            this.bullet.angle = -45
            this.bullet.setVelocityX(460);
            this.bullet.setVelocityY(-460);
            this.physics.add.collider(this.p2, this.bullet, bulletHit1)
            this.physics.add.collider(this.plat, this.bullet, bulletWall1)
            this.physics.add.collider(this.plats, this.bullet, bulletWall1)
            this.bullet.setCollideWorldBounds(true)
            this.bullet.body.onWorldBounds = true;
            this.bullet.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet);
            this.bullet.setBounce(1)
        }
    }

    sgp1() {
        let bulletHit1 = (p, b) => {
          scoreText1.setText(`Blue score: ${blue_score += 1}`)
          if (blue_score == 5) {
              red_score = 0
              blue_score = 0
              powersg1 = false;
              powerup1 = false;
              powerup2 = false;
              powersg2 = false;
              this.add.text(325, 250, 'BLUE WINS', {
                  fontSize: "70px",
                  color: "cyan",
              })
              // bgmusic.stop()
              // hitsnd.play({volume: .5})
              // bluesnd.play()
              this.scene.pause()
              // sleep(3500).then(() => {
              //     consnd.play({colume: .5})
              // })
              sleep(5500).then(() => {
                if (setrando == true) {
                  this.scene.start(maps[randint(8)])
              }  
                else if (setrando == false) {
                this.scene.restart()
              }                })
          }
          else if (blue_score != 5) {
          // hitsnd.play({volume: .5})
          // bgmusic.stop()
          powersg1 = false;
              powerup1 = false;
              powerup2 = false;
              powersg2 = false;
          this.scene.restart()
      }
          }
          let bulletWall1 = (p, b) => {
                  b.destroy()
                
          }
          let bulletWalllil1 = (p, b) => {
                  p.destroy()
                
          } 
        // left
        if(this.p1.angle == -90) {
            this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, "bullet")
            this.bullet.setTint(0x0000FF)
            this.bullet.angle = -180
            this.bullet.setVelocityX(-460);
            this.physics.add.collider(this.p2, this.bullet, bulletHit1)
            this.physics.add.collider(this.plat, this.bullet, bulletWall1)
            this.physics.add.collider(this.plats, this.bullet, bulletWalllil1)
            this.bullet.setCollideWorldBounds(true)
            this.bullet.body.onWorldBounds = true;
            this.bullet.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet);
            this.bullet.setBounce(1)
            this.bullet1 = this.physics.add.sprite(this.p1.x, this.p1.y, "bullet")
            this.bullet1.setTint(0x0000FF)
            this.bullet1.angle = -225
            this.bullet1.setVelocityX(-460);
            this.bullet1.setVelocityY(460);
            this.physics.add.collider(this.p2, this.bullet1, bulletHit1)
            this.physics.add.collider(this.plat, this.bullet1, bulletWall1)
            this.physics.add.collider(this.plats, this.bullet1, bulletWalllil1)
            this.bullet1.setCollideWorldBounds(true)
            this.bullet1.body.onWorldBounds = true;
            this.bullet1.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet1);
            this.bullet1.setBounce(1)
            this.bullet2 = this.physics.add.sprite(this.p1.x, this.p1.y, "bullet")
            this.bullet2.setTint(0x0000FF)
            this.bullet2.angle = -135.00000000000006
            this.bullet2.setVelocityX(-460);
            this.bullet2.setVelocityY(-460);
            this.physics.add.collider(this.p2, this.bullet2, bulletHit1)
            this.physics.add.collider(this.plat, this.bullet2, bulletWall1)
            this.physics.add.collider(this.plats, this.bullet2, bulletWalllil1)
            this.bullet2.setCollideWorldBounds(true)
            this.bullet2.body.onWorldBounds = true;
            this.bullet2.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet2);
            this.bullet2.setBounce(1)
        }
        // right
        else if(this.p1.angle == 90) {
            this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, "bullet")
            this.bullet.setTint(0x0000FF)
            this.bullet.angle = 0
            this.bullet.setVelocityX(460);
            this.physics.add.collider(this.p2, this.bullet, bulletHit1)
            this.physics.add.collider(this.plat, this.bullet, bulletWall1)
            this.physics.add.collider(this.plats, this.bullet, bulletWalllil1)
            this.bullet.setCollideWorldBounds(true)
            this.bullet.body.onWorldBounds = true;
            this.bullet.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet);
            this.bullet.setBounce(1)
            this.bullet1 = this.physics.add.sprite(this.p1.x, this.p1.y, "bullet")
            this.bullet1.setTint(0x0000FF)
            this.bullet1.angle = 45
            this.bullet1.setVelocityX(460);
            this.bullet1.setVelocityY(460);
            this.physics.add.collider(this.p2, this.bullet1, bulletHit1)
            this.physics.add.collider(this.plat, this.bullet1, bulletWall1)
            this.physics.add.collider(this.plats, this.bullet1, bulletWalllil1)
            this.bullet1.setCollideWorldBounds(true)
            this.bullet1.body.onWorldBounds = true;
            this.bullet1.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet1);
            this.bullet1.setBounce(1)
            this.bullet2 = this.physics.add.sprite(this.p1.x, this.p1.y, "bullet")
            this.bullet2.setTint(0x0000FF)
            this.bullet2.angle = -45
            this.bullet2.setVelocityX(460);
            this.bullet2.setVelocityY(-460);
            this.physics.add.collider(this.p2, this.bullet2, bulletHit1)
            this.physics.add.collider(this.plat, this.bullet2, bulletWall1)
            this.physics.add.collider(this.plats, this.bullet2, bulletWalllil1)
            this.bullet2.setCollideWorldBounds(true)
            this.bullet2.body.onWorldBounds = true;
            this.bullet2.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet2);
            this.bullet2.setBounce(1)
        }
        // up
        else if(this.p1.angle == 0) {
            this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, "bullet")
            this.bullet.setTint(0x0000FF)
            this.bullet.angle = -90
            this.bullet.setVelocityY(-460);
            this.physics.add.collider(this.p2, this.bullet, bulletHit1)
            this.physics.add.collider(this.plat, this.bullet, bulletWall1)
            this.physics.add.collider(this.plats, this.bullet, bulletWalllil1)
            this.bullet.setCollideWorldBounds(true)
            this.bullet.body.onWorldBounds = true;
            this.bullet.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet);
            this.bullet.setBounce(1)
            this.bullet1 = this.physics.add.sprite(this.p1.x, this.p1.y, "bullet")
            this.bullet1.setTint(0x0000FF)
            this.bullet1.angle = -135.00000000000006
            this.bullet1.setVelocityX(-460);
            this.bullet1.setVelocityY(-460);
            this.physics.add.collider(this.p2, this.bullet1, bulletHit1)
            this.physics.add.collider(this.plat, this.bullet1, bulletWall1)
            this.physics.add.collider(this.plats, this.bullet1, bulletWalllil1)
            this.bullet1.setCollideWorldBounds(true)
            this.bullet1.body.onWorldBounds = true;
            this.bullet1.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet1);
            this.bullet1.setBounce(1)
            this.bullet2 = this.physics.add.sprite(this.p1.x, this.p1.y, "bullet")
            this.bullet2.setTint(0x0000FF)
            this.bullet2.angle = -45
            this.bullet2.setVelocityX(460);
            this.bullet2.setVelocityY(-460);
            this.physics.add.collider(this.p2, this.bullet2, bulletHit1)
            this.physics.add.collider(this.plat, this.bullet2, bulletWall1)
            this.physics.add.collider(this.plats, this.bullet2, bulletWalllil1)
            this.bullet2.setCollideWorldBounds(true)
            this.bullet2.body.onWorldBounds = true;
            this.bullet2.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet2);
            this.bullet2.setBounce(1)
        }
        // down
        else if(this.p1.angle == -180) {
            this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, "bullet")
            this.bullet.setTint(0x0000FF)
            this.bullet.angle = -90
            this.bullet.setVelocityY(460);
            this.physics.add.collider(this.p2, this.bullet, bulletHit1)
            this.physics.add.collider(this.plat, this.bullet, bulletWall1)
            this.physics.add.collider(this.plats, this.bullet, bulletWalllil1)
            this.bullet.setCollideWorldBounds(true)
            this.bullet.body.onWorldBounds = true;
            this.bullet.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet);
            this.bullet.setBounce(1)
            this.bullet1 = this.physics.add.sprite(this.p1.x, this.p1.y, "bullet")
            this.bullet1.setTint(0x0000FF)
            this.bullet1.angle = -225
            this.bullet1.setVelocityX(-460);
            this.bullet1.setVelocityY(460);
            this.physics.add.collider(this.p2, this.bullet1, bulletHit1)
            this.physics.add.collider(this.plat, this.bullet1, bulletWall1)
            this.physics.add.collider(this.plats, this.bullet1, bulletWalllil1)
            this.bullet1.setCollideWorldBounds(true)
            this.bullet1.body.onWorldBounds = true;
            this.bullet1.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet1);
            this.bullet1.setBounce(1)
            this.bullet2 = this.physics.add.sprite(this.p1.x, this.p1.y, "bullet")
            this.bullet2.setTint(0x0000FF)
            this.bullet2.angle = 45
            this.bullet2.setVelocityX(460);
            this.bullet2.setVelocityY(460);
            this.physics.add.collider(this.p2, this.bullet2, bulletHit1)
            this.physics.add.collider(this.plat, this.bullet2, bulletWall1)
            this.physics.add.collider(this.plats, this.bullet2, bulletWalllil1)
            this.bullet2.setCollideWorldBounds(true)
            this.bullet2.body.onWorldBounds = true;
            this.bullet2.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet2);
            this.bullet2.setBounce(1)
        }
        // down left
        else if(this.p1.angle == -135) {
            this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, "bullet")
            this.bullet.setTint(0x0000FF)
            this.bullet.angle = -90
            this.bullet.setVelocityY(460);
            this.physics.add.collider(this.p2, this.bullet, bulletHit1)
            this.physics.add.collider(this.plat, this.bullet, bulletWall1)
            this.physics.add.collider(this.plats, this.bullet, bulletWalllil1)
            this.bullet.setCollideWorldBounds(true)
            this.bullet.body.onWorldBounds = true;
            this.bullet.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet);
            this.bullet.setBounce(1)
            this.bullet1 = this.physics.add.sprite(this.p1.x, this.p1.y, "bullet")
            this.bullet1.setTint(0x0000FF)
            this.bullet1.angle = -225
            this.bullet1.setVelocityX(-460);
            this.bullet1.setVelocityY(460);
            this.physics.add.collider(this.p2, this.bullet1, bulletHit1)
            this.physics.add.collider(this.plat, this.bullet1, bulletWall1)
            this.physics.add.collider(this.plats, this.bullet1, bulletWalllil1)
            this.bullet1.setCollideWorldBounds(true)
            this.bullet1.body.onWorldBounds = true;
            this.bullet1.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet1);
            this.bullet1.setBounce(1)
            this.bullet2 = this.physics.add.sprite(this.p1.x, this.p1.y, "bullet")
            this.bullet2.setTint(0x0000FF)
            this.bullet2.angle = -180
            this.bullet2.setVelocityX(-460);
            this.physics.add.collider(this.p2, this.bullet2, bulletHit1)
            this.physics.add.collider(this.plat, this.bullet2, bulletWall1)
            this.physics.add.collider(this.plats, this.bullet2, bulletWalllil1)
            this.bullet2.setCollideWorldBounds(true)
            this.bullet2.body.onWorldBounds = true;
            this.bullet2.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet2);
            this.bullet2.setBounce(1)
        }
        // down right
        else if(this.p1.angle == 135) {
            this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, "bullet")
            this.bullet.setTint(0x0000FF)
            this.bullet.angle = 45
            this.bullet.setVelocityX(460);
            this.bullet.setVelocityY(460);
            this.physics.add.collider(this.p2, this.bullet, bulletHit1)
            this.physics.add.collider(this.plat, this.bullet, bulletWall1)
            this.physics.add.collider(this.plats, this.bullet, bulletWalllil1)
            this.bullet.setCollideWorldBounds(true)
            this.bullet.body.onWorldBounds = true;
            this.bullet.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet);
            this.bullet.setBounce(1)
            this.bullet1 = this.physics.add.sprite(this.p1.x, this.p1.y, "bullet")
            this.bullet1.setTint(0x0000FF)
            this.bullet1.angle = -90
            this.bullet1.setVelocityY(460);
            this.physics.add.collider(this.p2, this.bullet1, bulletHit1)
            this.physics.add.collider(this.plat, this.bullet1, bulletWall1)
            this.physics.add.collider(this.plats, this.bullet1, bulletWalllil1)
            this.bullet1.setCollideWorldBounds(true)
            this.bullet1.body.onWorldBounds = true;
            this.bullet1.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet1);
            this.bullet1.setBounce(1)
            this.bullet2 = this.physics.add.sprite(this.p1.x, this.p1.y, "bullet")
            this.bullet2.setTint(0x0000FF)
            this.bullet2.angle = 0
            this.bullet2.setVelocityX(460);
            this.physics.add.collider(this.p2, this.bullet2, bulletHit1)
            this.physics.add.collider(this.plat, this.bullet2, bulletWall1)
            this.physics.add.collider(this.plats, this.bullet2, bulletWalllil1)
            this.bullet2.setCollideWorldBounds(true)
            this.bullet2.body.onWorldBounds = true;
            this.bullet2.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet2);
            this.bullet2.setBounce(1)
        }
        // up left
        else if(this.p1.angle == -45.00000000000006) {
            this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, "bullet")
            this.bullet.setTint(0x0000FF)
            this.bullet.angle = -135.00000000000006
            this.bullet.setVelocityX(-460);
            this.bullet.setVelocityY(-460);
            this.physics.add.collider(this.p2, this.bullet, bulletHit1)
            this.physics.add.collider(this.plat, this.bullet, bulletWall1)
            this.physics.add.collider(this.plats, this.bullet, bulletWalllil1)
            this.bullet.setCollideWorldBounds(true)
            this.bullet.body.onWorldBounds = true;
            this.bullet.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet);
            this.bullet.setBounce(1)
            this.bullet1 = this.physics.add.sprite(this.p1.x, this.p1.y, "bullet")
            this.bullet1.setTint(0x0000FF)
            this.bullet1.angle = -90
            this.bullet1.setVelocityY(-460);
            this.physics.add.collider(this.p2, this.bullet1, bulletHit1)
            this.physics.add.collider(this.plat, this.bullet1, bulletWall1)
            this.physics.add.collider(this.plats, this.bullet1, bulletWalllil1)
            this.bullet1.setCollideWorldBounds(true)
            this.bullet1.body.onWorldBounds = true;
            this.bullet1.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet1);
            this.bullet1.setBounce(1)
            this.bullet2 = this.physics.add.sprite(this.p1.x, this.p1.y, "bullet")
            this.bullet2.setTint(0x0000FF)
            this.bullet2.angle = -180
            this.bullet2.setVelocityX(-460);
            this.physics.add.collider(this.p2, this.bullet2, bulletHit1)
            this.physics.add.collider(this.plat, this.bullet2, bulletWall1)
            this.physics.add.collider(this.plats, this.bullet2, bulletWalllil1)
            this.bullet2.setCollideWorldBounds(true)
            this.bullet2.body.onWorldBounds = true;
            this.bullet2.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet2);
            this.bullet2.setBounce(1)
        }
        // up right
        else if(this.p1.angle == 45) {
            this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, "bullet")
            this.bullet.setTint(0x0000FF)
            this.bullet.angle = -45
            this.bullet.setVelocityX(460);
            this.bullet.setVelocityY(-460);
            this.physics.add.collider(this.p2, this.bullet, bulletHit1)
            this.physics.add.collider(this.plat, this.bullet, bulletWall1)
            this.physics.add.collider(this.plats, this.bullet, bulletWalllil1)
            this.bullet.setCollideWorldBounds(true)
            this.bullet.body.onWorldBounds = true;
            this.bullet.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet);
            this.bullet.setBounce(1)
            this.bullet1 = this.physics.add.sprite(this.p1.x, this.p1.y, "bullet")
            this.bullet1.setTint(0x0000FF)
            this.bullet1.angle = -90
            this.bullet1.setVelocityY(-460);
            this.physics.add.collider(this.p2, this.bullet1, bulletHit1)
            this.physics.add.collider(this.plat, this.bullet1, bulletWall1)
            this.physics.add.collider(this.plats, this.bullet1, bulletWalllil1)
            this.bullet1.setCollideWorldBounds(true)
            this.bullet1.body.onWorldBounds = true;
            this.bullet1.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet1);
            this.bullet1.setBounce(1)
            this.bullet2 = this.physics.add.sprite(this.p1.x, this.p1.y, "bullet")
            this.bullet2.setTint(0x0000FF)
            this.bullet2.angle = 0
            this.bullet2.setVelocityX(460);
            this.physics.add.collider(this.p2, this.bullet2, bulletHit1)
            this.physics.add.collider(this.plat, this.bullet2, bulletWall1)
            this.physics.add.collider(this.plats, this.bullet2, bulletWalllil1)
            this.bullet2.setCollideWorldBounds(true)
            this.bullet2.body.onWorldBounds = true;
            this.bullet2.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet2);
            this.bullet2.setBounce(1)
        }
    
    }
    catp1(){
      let bulletHit1 = (p, b) => {
          scoreText1.setText(`Blue score: ${blue_score += 1}`)
          if (blue_score == 5) {
              red_score = 0
              blue_score = 0
              this.add.text(325, 250, 'BLUE WINS', {
                  fontSize: "70px",
                  color: "cyan",
              })
              // bgmusic.stop()
              // hitsnd.play({volume: .5})
              // bluesnd.play()
              this.scene.pause()
              // sleep(3500).then(() => {
              //     consnd.play({colume: .5})
              // })
              sleep(5500).then(() => {
                if (setrando == true) {
                  this.scene.start(maps[randint(8)])
              }  
                else if (setrando == false) {
                this.scene.restart()
              }                })
          }
          else if (blue_score != 5) {
          // hitsnd.play({volume: .5})
          // bgmusic.stop()
          this.scene.restart()
      }
          }
      // left
      if(this.p1.angle == -90) {
          this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, "catbullet")
          this.bullet.setTint(0x0000FF)
          this.bullet.setVelocityX(-1260);
          this.physics.add.collider(this.p2, this.bullet, bulletHit1)
          this.bullet.setCollideWorldBounds(true)
          this.bullet.body.onWorldBounds = true;
          this.bullet.body.world.on('worldbounds', function(body) {
              if (body.gameObject === this) {
                  sleep(2000).then(() => {
                      this.destroy()
                    })
              }
            }, this.bullet);
          this.bullet.setBounce(1)
      }
      // right
      else if(this.p1.angle == 90) {
          this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, "catbullet")
          this.bullet.setTint(0x0000FF)
          this.bullet.setVelocityX(1260);
          this.physics.add.collider(this.p2, this.bullet, bulletHit1)
          this.bullet.setCollideWorldBounds(true)
          this.bullet.body.onWorldBounds = true;
          this.bullet.body.world.on('worldbounds', function(body) {
              if (body.gameObject === this) {
                  sleep(2000).then(() => {
                      this.destroy()
                    })
              }
            }, this.bullet);
          this.bullet.setBounce(1)
      }
      // up
      else if(this.p1.angle == 0) {
          this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, "catbullet")
          this.bullet.setTint(0x0000FF)
          this.bullet.setVelocityY(-1260);
          this.physics.add.collider(this.p2, this.bullet, bulletHit1)
          this.bullet.setCollideWorldBounds(true)
          this.bullet.body.onWorldBounds = true;
          this.bullet.body.world.on('worldbounds', function(body) {
              if (body.gameObject === this) {
                  sleep(2000).then(() => {
                      this.destroy()
                    })
              }
            }, this.bullet);
          this.bullet.setBounce(1)
      }
      // down
      else if(this.p1.angle == -180) {
          this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, "catbullet")
          this.bullet.setTint(0x0000FF)
          this.bullet.setVelocityY(1260);
          this.physics.add.collider(this.p2, this.bullet, bulletHit1)
          this.bullet.setCollideWorldBounds(true)
          this.bullet.body.onWorldBounds = true;
          this.bullet.body.world.on('worldbounds', function(body) {
              if (body.gameObject === this) {
                  sleep(2000).then(() => {
                      this.destroy()
                    })
              }
            }, this.bullet);
          this.bullet.setBounce(1)
      }
      // down left
      else if(this.p1.angle == -135) {
          this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, "catbullet")
          this.bullet.setTint(0x0000FF)
          this.bullet.setVelocityX(-1260);
          this.bullet.setVelocityY(1260);
          this.physics.add.collider(this.p2, this.bullet, bulletHit1)
          this.bullet.setCollideWorldBounds(true)
          this.bullet.body.onWorldBounds = true;
          this.bullet.body.world.on('worldbounds', function(body) {
              if (body.gameObject === this) {
                  sleep(2000).then(() => {
                      this.destroy()
                    })
              }
            }, this.bullet);
          this.bullet.setBounce(1)
      }
      // down right
      else if(this.p1.angle == 135) {
          this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, "catbullet")
          this.bullet.setTint(0x0000FF)
          this.bullet.setVelocityX(1260);
          this.bullet.setVelocityY(1260);
          this.physics.add.collider(this.p2, this.bullet, bulletHit1)
          this.bullet.setCollideWorldBounds(true)
          this.bullet.body.onWorldBounds = true;
          this.bullet.body.world.on('worldbounds', function(body) {
              if (body.gameObject === this) {
                  sleep(2000).then(() => {
                      this.destroy()
                    })
              }
            }, this.bullet);
          this.bullet.setBounce(1)
      }
      // up left
      else if(this.p1.angle == -45.00000000000006) {
          this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, "catbullet")
          this.bullet.setTint(0x0000FF)
          this.bullet.setVelocityX(-1260);
          this.bullet.setVelocityY(-1260);
          this.physics.add.collider(this.p2, this.bullet, bulletHit1)
          this.bullet.setCollideWorldBounds(true)
          this.bullet.body.onWorldBounds = true;
          this.bullet.body.world.on('worldbounds', function(body) {
              if (body.gameObject === this) {
                  sleep(2000).then(() => {
                      this.destroy()
                    })
              }
            }, this.bullet);
          this.bullet.setBounce(1)
      }
      // up right
      else if(this.p1.angle == 45) {
          this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, "catbullet")
          this.bullet.setTint(0x0000FF)
          this.bullet.setVelocityX(1260);
          this.bullet.setVelocityY(-1260);
          this.physics.add.collider(this.p2, this.bullet, bulletHit1)
          this.bullet.setCollideWorldBounds(true)
          this.bullet.body.onWorldBounds = true;
          this.bullet.body.world.on('worldbounds', function(body) {
              if (body.gameObject === this) {
                  sleep(2000).then(() => {
                      this.destroy()
                    })
              }
            }, this.bullet);
          this.bullet.setBounce(1)
      }}
  

    firep2(){
        let bulletHit2 = (p, b) => {
            scoreText1.setText(`Blue score: ${red_score += 1}`)
            if (red_score == 5) {
                red_score = 0
                blue_score = 0
                this.add.text(325, 250, 'RED WINS', {
                    fontSize: "70px",
                    color: "red"
                })
                // bgmusic.stop()
                // hitsnd.play({volume: .5})
                // redsnd.play()
                this.scene.pause()
                // sleep(3000).then(() => {
                //     consnd.play({volume: .8})
                // })
                sleep(5000).then(() => {
                  if (setrando == true) {
                    this.scene.start(maps[randint(8)])
                }  
                  else if (setrando == false) {
                  this.scene.restart()
                }                  })
            }
            else if (red_score != 5) {
            // hitsnd.play({volume: .5})
            // bgmusic.stop()
            this.scene.restart()
        }
            }
    let bulletWall2 = (p, b) => {
            b.destroy()
    }
        // left
        if(this.p2.angle == -90) {
            this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, "bullet")
            this.bullet.setTint(0xFF0000)
            this.bullet.angle = -180
            this.bullet.setVelocityX(-460);
            this.physics.add.collider(this.p1, this.bullet, bulletHit2)
            this.physics.add.collider(this.plat, this.bullet, bulletWall2)
            this.physics.add.collider(this.plats, this.bullet, bulletWall2)
            this.bullet.setCollideWorldBounds(true)
            this.bullet.body.onWorldBounds = true;
            this.bullet.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet);
            this.bullet.setBounce(1)
        }
        // right
        else if(this.p2.angle == 90) {
            this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, "bullet")
            this.bullet.setTint(0xFF0000)
            this.bullet.angle = 0
            this.bullet.setVelocityX(460);
            this.physics.add.collider(this.p1, this.bullet, bulletHit2)
            this.physics.add.collider(this.plat, this.bullet, bulletWall2)
            this.physics.add.collider(this.plats, this.bullet, bulletWall2)
            this.bullet.setCollideWorldBounds(true)
            this.bullet.body.onWorldBounds = true;
            this.bullet.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet);
            this.bullet.setBounce(1)
        }
        // up
        else if(this.p2.angle == 0) {
            this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, "bullet")
            this.bullet.setTint(0xFF0000)
            this.bullet.angle = -90
            this.bullet.setVelocityY(-460);
            this.physics.add.collider(this.p1, this.bullet, bulletHit2)
            this.physics.add.collider(this.plat, this.bullet, bulletWall2)
            this.physics.add.collider(this.plats, this.bullet, bulletWall2)
            this.bullet.setCollideWorldBounds(true)
            this.bullet.body.onWorldBounds = true;
            this.bullet.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet);
            this.bullet.setBounce(1)
        }
        // down
        else if(this.p2.angle == -180) {
            this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, "bullet")
            this.bullet.setTint(0xFF0000)
            this.bullet.angle = -90
            this.bullet.setVelocityY(460);
            this.physics.add.collider(this.p1, this.bullet, bulletHit2)
            this.physics.add.collider(this.plat, this.bullet, bulletWall2)
            this.physics.add.collider(this.plats, this.bullet, bulletWall2)
            this.bullet.setCollideWorldBounds(true)
            this.bullet.body.onWorldBounds = true;
            this.bullet.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet);
            this.bullet.setBounce(1)
        }
        // down left
        else if(this.p2.angle == -135) {
            this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, "bullet")
            this.bullet.setTint(0xFF0000)
            this.bullet.angle = -225
            this.bullet.setVelocityX(-460);
            this.bullet.setVelocityY(460);
            this.physics.add.collider(this.p1, this.bullet, bulletHit2)
            this.physics.add.collider(this.plat, this.bullet, bulletWall2)
            this.physics.add.collider(this.plats, this.bullet, bulletWall2)
            this.bullet.setCollideWorldBounds(true)
            this.bullet.body.onWorldBounds = true;
            this.bullet.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet);
            this.bullet.setBounce(1)
        }
        // down right
        else if(this.p2.angle == 135) {
            this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, "bullet")
            this.bullet.setTint(0xFF0000)
            this.bullet.angle = 45
            this.bullet.setVelocityX(460);
            this.bullet.setVelocityY(460);
            this.physics.add.collider(this.p1, this.bullet, bulletHit2)
            this.physics.add.collider(this.plat, this.bullet, bulletWall2)
            this.physics.add.collider(this.plats, this.bullet, bulletWall2)
            this.bullet.setCollideWorldBounds(true)
            this.bullet.body.onWorldBounds = true;
            this.bullet.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet);
            this.bullet.setBounce(1)
        }
        // up left
        else if(this.p2.angle == -45.00000000000006) {
            this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, "bullet")
            this.bullet.setTint(0xFF0000)
            this.bullet.angle = -135.00000000000006
            this.bullet.setVelocityX(-460);
            this.bullet.setVelocityY(-460);
            this.physics.add.collider(this.p1, this.bullet, bulletHit2)
            this.physics.add.collider(this.plat, this.bullet, bulletWall2)
            this.physics.add.collider(this.plats, this.bullet, bulletWall2)
            this.bullet.setCollideWorldBounds(true)
            this.bullet.body.onWorldBounds = true;
            this.bullet.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet);
            this.bullet.setBounce(1)
        }
        // up right
        else if(this.p2.angle == 45) {
            this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, "bullet")
            this.bullet.setTint(0xFF0000)
            this.bullet.angle = -45
            this.bullet.setVelocityX(460);
            this.bullet.setVelocityY(-460);
            this.physics.add.collider(this.p1, this.bullet, bulletHit2)
            this.physics.add.collider(this.plat, this.bullet, bulletWall2)
            this.physics.add.collider(this.plats, this.bullet, bulletWall2)
            this.bullet.setCollideWorldBounds(true)
            this.bullet.body.onWorldBounds = true;
            this.bullet.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet);
            this.bullet.setBounce(1)
        }
    }

    sgp2() {
        let bulletHit2 = (p, b) => {
            scoreText1.setText(`Blue score: ${red_score += 1}`)
            if (red_score == 5) {
                red_score = 0
                blue_score = 0
                powersg1 = 0;
            powerup1 = 0;
            powerup2 = 0;
            powersg2 = 0;
                this.add.text(325, 250, 'RED WINS', {
                    fontSize: "70px",
                    color: "red"
                })
                // bgmusic.stop()
                // hitsnd.play({volume: .5})
                // redsnd.play()
                this.scene.pause()
                // sleep(3000).then(() => {
                //     consnd.play({volume: .8})
                // })
                sleep(5000).then(() => {
                  if (setrando == true) {
                    this.scene.start(maps[randint(8)])
                }  
                  else if (setrando == false) {
                  this.scene.restart()
                }                  })
            }
            else if (red_score != 5) {
            // hitsnd.play({volume: .5})
            // bgmusic.stop()
            powersg1 = 0;
            powerup1 = 0;
            powerup2 = 0;
            powersg2 = 0;
            this.scene.restart()
        }
            }
    let bulletWall2 = (p, b) => {
            b.destroy()
        
    }
    let bulletWalllil2 = (p, b) => {
            p.destroy()
          
    }
        // left
        if(this.p2.angle == -90) {
            this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, "bullet")
            this.bullet.setTint(0xFF0000)
            this.bullet.angle = -180
            this.bullet.setVelocityX(-460);
            this.physics.add.collider(this.p1, this.bullet, bulletHit2)
            this.physics.add.collider(this.plat, this.bullet, bulletWall2)
            this.physics.add.collider(this.plats, this.bullet, bulletWalllil2)
            this.bullet.setCollideWorldBounds(true)
            this.bullet.body.onWorldBounds = true;
            this.bullet.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet);
            this.bullet.setBounce(1)
            this.bullet1 = this.physics.add.sprite(this.p2.x, this.p2.y, "bullet")
            this.bullet1.setTint(0xFF0000)
            this.bullet1.angle = -225
            this.bullet1.setVelocityX(-460);
            this.bullet1.setVelocityY(460);
            this.physics.add.collider(this.p1, this.bullet1, bulletHit2)
            this.physics.add.collider(this.plat, this.bullet1, bulletWall2)
            this.physics.add.collider(this.plats, this.bullet1, bulletWalllil2)
            this.bullet1.setCollideWorldBounds(true)
            this.bullet1.body.onWorldBounds = true;
            this.bullet1.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet1);
            this.bullet1.setBounce(1)
            this.bullet2 = this.physics.add.sprite(this.p2.x, this.p2.y, "bullet")
            this.bullet2.setTint(0xFF0000)
            this.bullet2.angle = -135.00000000000006
            this.bullet2.setVelocityX(-460);
            this.bullet2.setVelocityY(-460);
            this.physics.add.collider(this.p1, this.bullet2, bulletHit2)
            this.physics.add.collider(this.plat, this.bullet2, bulletWall2)
            this.physics.add.collider(this.plats, this.bullet2, bulletWalllil2)
            this.bullet2.setCollideWorldBounds(true)
            this.bullet2.body.onWorldBounds = true;
            this.bullet2.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet2);
            this.bullet2.setBounce(1)
        }
        // right
        else if(this.p2.angle == 90) {
            this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, "bullet")
            this.bullet.setTint(0xFF0000)
            this.bullet.angle = 0
            this.bullet.setVelocityX(460);
            this.physics.add.collider(this.p1, this.bullet, bulletHit2)
            this.physics.add.collider(this.plat, this.bullet, bulletWall2)
            this.physics.add.collider(this.plats, this.bullet, bulletWalllil2)
            this.bullet.setCollideWorldBounds(true)
            this.bullet.body.onWorldBounds = true;
            this.bullet.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet);
            this.bullet.setBounce(1)
            this.bullet1 = this.physics.add.sprite(this.p2.x, this.p2.y, "bullet")
            this.bullet1.setTint(0xFF0000)
            this.bullet1.angle = 45
            this.bullet1.setVelocityX(460);
            this.bullet1.setVelocityY(460);
            this.physics.add.collider(this.p1, this.bullet1, bulletHit2)
            this.physics.add.collider(this.plat, this.bullet1, bulletWall2)
            this.physics.add.collider(this.plats, this.bullet1, bulletWalllil2)
            this.bullet1.setCollideWorldBounds(true)
            this.bullet1.body.onWorldBounds = true;
            this.bullet1.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet1);
            this.bullet1.setBounce(1)
            this.bullet2 = this.physics.add.sprite(this.p2.x, this.p2.y, "bullet")
            this.bullet2.setTint(0xFF0000)
            this.bullet2.angle = -45
            this.bullet2.setVelocityX(460);
            this.bullet2.setVelocityY(-460);
            this.physics.add.collider(this.p1, this.bullet2, bulletHit2)
            this.physics.add.collider(this.plat, this.bullet2, bulletWall2)
            this.physics.add.collider(this.plats, this.bullet2, bulletWalllil2)
            this.bullet2.setCollideWorldBounds(true)
            this.bullet2.body.onWorldBounds = true;
            this.bullet2.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet2);
            this.bullet2.setBounce(1)
        }
        // up
        else if(this.p2.angle == 0) {
            this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, "bullet")
            this.bullet.setTint(0xFF0000)
            this.bullet.angle = -90
            this.bullet.setVelocityY(-460);
            this.physics.add.collider(this.p1, this.bullet, bulletHit2)
            this.physics.add.collider(this.plat, this.bullet, bulletWall2)
            this.physics.add.collider(this.plats, this.bullet, bulletWalllil2)
            this.bullet.setCollideWorldBounds(true)
            this.bullet.body.onWorldBounds = true;
            this.bullet.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet);
            this.bullet.setBounce(1)
            this.bullet1 = this.physics.add.sprite(this.p2.x, this.p2.y, "bullet")
            this.bullet1.setTint(0xFF0000)
            this.bullet1.angle = -135.00000000000006
            this.bullet1.setVelocityX(-460);
            this.bullet1.setVelocityY(-460);
            this.physics.add.collider(this.p1, this.bullet1, bulletHit2)
            this.physics.add.collider(this.plat, this.bullet1, bulletWall2)
            this.physics.add.collider(this.plats, this.bullet1, bulletWalllil2)
            this.bullet1.setCollideWorldBounds(true)
            this.bullet1.body.onWorldBounds = true;
            this.bullet1.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet1);
            this.bullet1.setBounce(1)
            this.bullet2 = this.physics.add.sprite(this.p2.x, this.p2.y, "bullet")
            this.bullet2.setTint(0xFF0000)
            this.bullet2.angle = -45
            this.bullet2.setVelocityX(460);
            this.bullet2.setVelocityY(-460);
            this.physics.add.collider(this.p1, this.bullet2, bulletHit2)
            this.physics.add.collider(this.plat, this.bullet2, bulletWall2)
            this.physics.add.collider(this.plats, this.bullet2, bulletWalllil2)
            this.bullet2.setCollideWorldBounds(true)
            this.bullet2.body.onWorldBounds = true;
            this.bullet2.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet2);
            this.bullet2.setBounce(1)
        }
        // down
        else if(this.p2.angle == -180) {
            this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, "bullet")
            this.bullet.setTint(0xFF0000)
            this.bullet.angle = -90
            this.bullet.setVelocityY(460);
            this.physics.add.collider(this.p1, this.bullet, bulletHit2)
            this.physics.add.collider(this.plat, this.bullet, bulletWall2)
            this.physics.add.collider(this.plats, this.bullet, bulletWalllil2)
            this.bullet.setCollideWorldBounds(true)
            this.bullet.body.onWorldBounds = true;
            this.bullet.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet);
            this.bullet.setBounce(1)
            this.bullet1 = this.physics.add.sprite(this.p2.x, this.p2.y, "bullet")
            this.bullet1.setTint(0xFF0000)
            this.bullet1.angle = -225
            this.bullet1.setVelocityX(-460);
            this.bullet1.setVelocityY(460);
            this.physics.add.collider(this.p1, this.bullet1, bulletHit2)
            this.physics.add.collider(this.plat, this.bullet1, bulletWall2)
            this.physics.add.collider(this.plats, this.bullet1, bulletWalllil2)
            this.bullet1.setCollideWorldBounds(true)
            this.bullet1.body.onWorldBounds = true;
            this.bullet1.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet1);
            this.bullet1.setBounce(1)
            this.bullet2 = this.physics.add.sprite(this.p2.x, this.p2.y, "bullet")
            this.bullet2.setTint(0xFF0000)
            this.bullet2.angle = 45
            this.bullet2.setVelocityX(460);
            this.bullet2.setVelocityY(460);
            this.physics.add.collider(this.p1, this.bullet2, bulletHit2)
            this.physics.add.collider(this.plat, this.bullet2, bulletWall2)
            this.physics.add.collider(this.plats, this.bullet2, bulletWalllil2)
            this.bullet2.setCollideWorldBounds(true)
            this.bullet2.body.onWorldBounds = true;
            this.bullet2.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet2);
            this.bullet2.setBounce(1)
        }
        // down left
        else if(this.p2.angle == -135) {
            this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, "bullet")
            this.bullet.setTint(0xFF0000)
            this.bullet.angle = -90
            this.bullet.setVelocityY(460);
            this.physics.add.collider(this.p1, this.bullet, bulletHit2)
            this.physics.add.collider(this.plat, this.bullet, bulletWall2)
            this.physics.add.collider(this.plats, this.bullet, bulletWalllil2)
            this.bullet.setCollideWorldBounds(true)
            this.bullet.body.onWorldBounds = true;
            this.bullet.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet);
            this.bullet.setBounce(1)
            this.bullet1 = this.physics.add.sprite(this.p2.x, this.p2.y, "bullet")
            this.bullet1.setTint(0xFF0000)
            this.bullet1.angle = -225
            this.bullet1.setVelocityX(-460);
            this.bullet1.setVelocityY(460);
            this.physics.add.collider(this.p1, this.bullet1, bulletHit2)
            this.physics.add.collider(this.plat, this.bullet1, bulletWall2)
            this.physics.add.collider(this.plats, this.bullet1, bulletWalllil2)
            this.bullet1.setCollideWorldBounds(true)
            this.bullet1.body.onWorldBounds = true;
            this.bullet1.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet1);
            this.bullet1.setBounce(1)
            this.bullet2 = this.physics.add.sprite(this.p2.x, this.p2.y, "bullet")
            this.bullet2.setTint(0xFF0000)
            this.bullet2.angle = -180
            this.bullet2.setVelocityX(-460);
            this.physics.add.collider(this.p1, this.bullet2, bulletHit2)
            this.physics.add.collider(this.plat, this.bullet2, bulletWall2)
            this.physics.add.collider(this.plats, this.bullet2, bulletWalllil2)
            this.bullet2.setCollideWorldBounds(true)
            this.bullet2.body.onWorldBounds = true;
            this.bullet2.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet2);
            this.bullet2.setBounce(1)
        }
        // down right
        else if(this.p2.angle == 135) {
            this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, "bullet")
            this.bullet.setTint(0xFF0000)
            this.bullet.angle = 45
            this.bullet.setVelocityX(460);
            this.bullet.setVelocityY(460);
            this.physics.add.collider(this.p1, this.bullet, bulletHit2)
            this.physics.add.collider(this.plat, this.bullet, bulletWall2)
            this.physics.add.collider(this.plats, this.bullet, bulletWalllil2)
            this.bullet.setCollideWorldBounds(true)
            this.bullet.body.onWorldBounds = true;
            this.bullet.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet);
            this.bullet.setBounce(1)
            this.bullet1 = this.physics.add.sprite(this.p2.x, this.p2.y, "bullet")
            this.bullet1.setTint(0xFF0000)
            this.bullet1.angle = -90
            this.bullet1.setVelocityY(460);
            this.physics.add.collider(this.p1, this.bullet1, bulletHit2)
            this.physics.add.collider(this.plat, this.bullet1, bulletWall2)
            this.physics.add.collider(this.plats, this.bullet1, bulletWalllil2)
            this.bullet1.setCollideWorldBounds(true)
            this.bullet1.body.onWorldBounds = true;
            this.bullet1.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet1);
            this.bullet1.setBounce(1)
            this.bullet2 = this.physics.add.sprite(this.p2.x, this.p2.y, "bullet")
            this.bullet2.setTint(0xFF0000)
            this.bullet2.angle = 0
            this.bullet2.setVelocityX(460);
            this.physics.add.collider(this.p1, this.bullet2, bulletHit2)
            this.physics.add.collider(this.plat, this.bullet2, bulletWall2)
            this.physics.add.collider(this.plats, this.bullet2, bulletWalllil2)
            this.bullet2.setCollideWorldBounds(true)
            this.bullet2.body.onWorldBounds = true;
            this.bullet2.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet2);
            this.bullet2.setBounce(1)
        }
        // up left
        else if(this.p2.angle == -45.00000000000006) {
            this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, "bullet")
            this.bullet.setTint(0xFF0000)
            this.bullet.angle = -135.00000000000006
            this.bullet.setVelocityX(-460);
            this.bullet.setVelocityY(-460);
            this.physics.add.collider(this.p1, this.bullet, bulletHit2)
            this.physics.add.collider(this.plat, this.bullet, bulletWall2)
            this.physics.add.collider(this.plats, this.bullet, bulletWalllil2)
            this.bullet.setCollideWorldBounds(true)
            this.bullet.body.onWorldBounds = true;
            this.bullet.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet);
            this.bullet.setBounce(1)
            this.bullet1 = this.physics.add.sprite(this.p2.x, this.p2.y, "bullet")
            this.bullet1.setTint(0xFF0000)
            this.bullet1.angle = -90
            this.bullet1.setVelocityY(-460);
            this.physics.add.collider(this.p1, this.bullet1, bulletHit2)
            this.physics.add.collider(this.plat, this.bullet1, bulletWall2)
            this.physics.add.collider(this.plats, this.bullet1, bulletWalllil2)
            this.bullet1.setCollideWorldBounds(true)
            this.bullet1.body.onWorldBounds = true;
            this.bullet1.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet1);
            this.bullet1.setBounce(1)
            this.bullet2 = this.physics.add.sprite(this.p2.x, this.p2.y, "bullet")
            this.bullet2.setTint(0xFF0000)
            this.bullet2.angle = -180
            this.bullet2.setVelocityX(-460);
            this.physics.add.collider(this.p1, this.bullet2, bulletHit2)
            this.physics.add.collider(this.plat, this.bullet2, bulletWall2)
            this.physics.add.collider(this.plats, this.bullet2, bulletWalllil2)
            this.bullet2.setCollideWorldBounds(true)
            this.bullet2.body.onWorldBounds = true;
            this.bullet2.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet2);
            this.bullet2.setBounce(1)
        }
        // up right
        else if(this.p2.angle == 45) {
            this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, "bullet")
            this.bullet.setTint(0xFF0000)
            this.bullet.angle = -45
            this.bullet.setVelocityX(460);
            this.bullet.setVelocityY(-460);
            this.physics.add.collider(this.p1, this.bullet, bulletHit2)
            this.physics.add.collider(this.plat, this.bullet, bulletWall2)
            this.physics.add.collider(this.plats, this.bullet, bulletWalllil2)
            this.bullet.setCollideWorldBounds(true)
            this.bullet.body.onWorldBounds = true;
            this.bullet.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet);
            this.bullet.setBounce(1)
            this.bullet1 = this.physics.add.sprite(this.p2.x, this.p2.y, "bullet")
            this.bullet1.setTint(0xFF0000)
            this.bullet1.angle = -90
            this.bullet1.setVelocityY(-460);
            this.physics.add.collider(this.p1, this.bullet1, bulletHit2)
            this.physics.add.collider(this.plat, this.bullet1, bulletWall2)
            this.physics.add.collider(this.plats, this.bullet1, bulletWalllil2)
            this.bullet1.setCollideWorldBounds(true)
            this.bullet1.body.onWorldBounds = true;
            this.bullet1.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet1);
            this.bullet1.setBounce(1)
            this.bullet2 = this.physics.add.sprite(this.p2.x, this.p2.y, "bullet")
            this.bullet2.setTint(0xFF0000)
            this.bullet2.angle = 0
            this.bullet2.setVelocityX(460);
            this.physics.add.collider(this.p1, this.bullet2, bulletHit2)
            this.physics.add.collider(this.plat, this.bullet2, bulletWall2)
            this.physics.add.collider(this.plats, this.bullet2, bulletWalllil2)
            this.bullet2.setCollideWorldBounds(true)
            this.bullet2.body.onWorldBounds = true;
            this.bullet2.body.world.on('worldbounds', function(body) {
                if (body.gameObject === this) {
                    sleep(2000).then(() => {
                        this.destroy()
                      })
                }
              }, this.bullet2);
            this.bullet2.setBounce(1)
        }
    
    }
    
catp2() {
  let bulletHit2 = (p, b) => {
    scoreText1.setText(`Blue score: ${red_score += 1}`)
    if (red_score == 5) {
        red_score = 0
        blue_score = 0
        this.add.text(325, 250, 'RED WINS', {
            fontSize: "70px",
            color: "red"
        })
        // bgmusic.stop()
        // hitsnd.play({volume: .5})
        // redsnd.play()
        this.scene.pause()
        // sleep(3000).then(() => {
        //     consnd.play({volume: .8})
        // })
        sleep(5000).then(() => {
          if (setrando == true) {
            this.scene.start(maps[randint(8)])
        }  
          else if (setrando == false) {
          this.scene.restart()
        }          })
    }
    else if (red_score != 5) {
    // hitsnd.play({volume: .5})
    // bgmusic.stop()
    this.scene.restart()
}
    }
// left
if(this.p2.angle == -90) {
    this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, "catbullet")
    this.bullet.setTint(0xFF0000)
    this.bullet.setVelocityX(-1260);
    this.physics.add.collider(this.p1, this.bullet, bulletHit2)
    this.bullet.setCollideWorldBounds(true)
    this.bullet.body.onWorldBounds = true;
    this.bullet.body.world.on('worldbounds', function(body) {
        if (body.gameObject === this) {
            sleep(2000).then(() => {
                this.destroy()
              })
        }
      }, this.bullet);
    this.bullet.setBounce(1)
}
// right
else if(this.p2.angle == 90) {
    this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, "catbullet")
    this.bullet.setTint(0xFF0000)
    this.bullet.setVelocityX(1260);
    this.physics.add.collider(this.p1, this.bullet, bulletHit2)
    this.bullet.setCollideWorldBounds(true)
    this.bullet.body.onWorldBounds = true;
    this.bullet.body.world.on('worldbounds', function(body) {
        if (body.gameObject === this) {
            sleep(2000).then(() => {
                this.destroy()
              })
        }
      }, this.bullet);
    this.bullet.setBounce(1)
}
// up
else if(this.p2.angle == 0) {
    this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, "catbullet")
    this.bullet.setTint(0xFF0000)
    this.bullet.setVelocityY(-1260);
    this.physics.add.collider(this.p1, this.bullet, bulletHit2)
    this.bullet.setCollideWorldBounds(true)
    this.bullet.body.onWorldBounds = true;
    this.bullet.body.world.on('worldbounds', function(body) {
        if (body.gameObject === this) {
            sleep(2000).then(() => {
                this.destroy()
              })
        }
      }, this.bullet);
    this.bullet.setBounce(1)
}
// down
else if(this.p2.angle == -180) {
    this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, "catbullet")
    this.bullet.setTint(0xFF0000)
    this.bullet.setVelocityY(1260);
    this.physics.add.collider(this.p1, this.bullet, bulletHit2)
    this.bullet.setCollideWorldBounds(true)
    this.bullet.body.onWorldBounds = true;
    this.bullet.body.world.on('worldbounds', function(body) {
        if (body.gameObject === this) {
            sleep(2000).then(() => {
                this.destroy()
              })
        }
      }, this.bullet);
    this.bullet.setBounce(1)
}
// down left
else if(this.p2.angle == -135) {
    this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, "catbullet")
    this.bullet.setTint(0xFF0000)
    this.bullet.setVelocityX(-1260);
    this.bullet.setVelocityY(1260);
    this.physics.add.collider(this.p1, this.bullet, bulletHit2)
    this.bullet.setCollideWorldBounds(true)
    this.bullet.body.onWorldBounds = true;
    this.bullet.body.world.on('worldbounds', function(body) {
        if (body.gameObject === this) {
            sleep(2000).then(() => {
                this.destroy()
              })
        }
      }, this.bullet);
    this.bullet.setBounce(1)
}
// down right
else if(this.p2.angle == 135) {
    this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, "catbullet")
    this.bullet.setTint(0xFF0000)
    this.bullet.setVelocityX(1260);
    this.bullet.setVelocityY(1260);
    this.physics.add.collider(this.p1, this.bullet, bulletHit2)
    this.bullet.setCollideWorldBounds(true)
    this.bullet.body.onWorldBounds = true;
    this.bullet.body.world.on('worldbounds', function(body) {
        if (body.gameObject === this) {
            sleep(2000).then(() => {
                this.destroy()
              })
        }
      }, this.bullet);
    this.bullet.setBounce(1)
}
// up left
else if(this.p2.angle == -45.00000000000006) {
    this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, "catbullet")
    this.bullet.setTint(0xFF0000)
    this.bullet.setVelocityX(-1260);
    this.bullet.setVelocityY(-1260);
    this.physics.add.collider(this.p1, this.bullet, bulletHit2)
    this.bullet.setCollideWorldBounds(true)
    this.bullet.body.onWorldBounds = true;
    this.bullet.body.world.on('worldbounds', function(body) {
        if (body.gameObject === this) {
            sleep(2000).then(() => {
                this.destroy()
              })
        }
      }, this.bullet);
    this.bullet.setBounce(1)
}
// up right
else if(this.p2.angle == 45) {
    this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, "catbullet")
    this.bullet.setTint(0xFF0000)
    this.bullet.setVelocityX(1260);
    this.bullet.setVelocityY(-1260);
    this.physics.add.collider(this.p1, this.bullet, bulletHit2)
    this.bullet.setCollideWorldBounds(true)
    this.bullet.body.onWorldBounds = true;
    this.bullet.body.world.on('worldbounds', function(body) {
        if (body.gameObject === this) {
            sleep(2000).then(() => {
                this.destroy()
              })
        }
      }, this.bullet);
    this.bullet.setBounce(1)
}}
    
    moveManager(){
        
        this.p1.setVelocityX(0);
        this.p1.setVelocityY(0);
       
        if(keyLeft.isDown) {
            this.p1.setVelocityX(-80);
            this.p1.angle = (270);
        }
        else if(keyRight.isDown) {
            this.p1.setVelocityX(80);
            this.p1.angle = (90);
        }
        else if(keyUp.isDown) {
            this.p1.setVelocityY(-80);
            this.p1.angle = (0);
        }
        else if(keyDown.isDown) {
            this.p1.setVelocityY(80);
            this.p1.angle = (180);
        }
        if ((keyDown.isDown) && (keyLeft.isDown)) {
            this.p1.setVelocityX(-80);
            this.p1.setVelocityY(80);
            this.p1.angle = (225);
         }
         if ((keyDown.isDown) && (keyRight.isDown)) {
            this.p1.setVelocityX(80);
            this.p1.setVelocityY(80);
            this.p1.angle = (135);
         }
         if ((keyUp.isDown) && (keyLeft.isDown)) {
            this.p1.setVelocityX(-80);
            this.p1.setVelocityY(-80);
            this.p1.angle = (315);
         }
         if ((keyUp.isDown) && (keyRight.isDown)) {
            this.p1.setVelocityX(80);
            this.p1.setVelocityY(-80);
            this.p1.angle = (45);
         }

         if (keyShift.isDown) {
            if (stupid == 1) {
              stupid -= 1
              sleep(minye1).then(() => {
                  stupid += 1
                })
          if (powerup1 == true) {
              if (powersg1 == true) {
                  this.sgp1()
              }
              if (powercat1 == true) {
                this.catp1()
              }
          }
          if (powerup1 == false) {
          this.firep1()
          }
      }
              // else if (stupid != 1) {
                  // dumb += 1
              // }
              // This is for if I want someone to stop holding down shoot.
              // if (dumb == 50) {
          
              // }
          }

        this.p2.setVelocityX(0);
        this.p2.setVelocityY(0);

        if (keyCNTR.isDown) {
            if (werido == 1) {
                werido -= 1
                sleep(minye2).then(() => {
                    werido += 1
                  })
            if (powerup2 == true) {  
              if (powersg2 == true) {
                  this.sgp2()
                }
                if (powercat2 == true) {
                  this.catp2()
                }
            }
            if (powerup2 == false) {
            this.firep2()
            }
        }
        }

        if(keyA.isDown) {
            this.p2.setVelocityX(-80);
            this.p2.angle = (270);
        }
        else if(keyD.isDown) {
            this.p2.setVelocityX(80);
            this.p2.angle = (90);
        }
        else if(keyW.isDown) {
            this.p2.setVelocityY(-80);
            this.p2.angle = (0);
        }
        else if(keyS.isDown) {
            this.p2.setVelocityY(80);
            this.p2.angle = (180);
        }
        if ((keyS.isDown) && (keyA.isDown)) {
            this.p2.setVelocityX(-80);
            this.p2.setVelocityY(80);
            this.p2.angle = (225);
         }
         if ((keyS.isDown) && (keyD.isDown)) {
            this.p2.setVelocityX(80);
            this.p2.setVelocityY(80);
            this.p2.angle = (135);
         }
         if ((keyW.isDown) && (keyA.isDown)) {
            this.p2.setVelocityX(-80);
            this.p2.setVelocityY(-80);
            this.p2.angle = (315);
         }
         if ((keyW.isDown) && (keyD.isDown)) {
            this.p2.setVelocityX(80);
            this.p2.setVelocityY(-80);
            this.p2.angle = (45);
         }
       if (keyESC.isDown) {
        red_score = 0
        blue_score = 0
        setrando = false;
        this.scene.start('bootGame')
       }
       if (key7.isDown) {
        red_score = 0
        blue_score = 0
        this.scene.restart()
       }
    }

}