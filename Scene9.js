class Scene9 extends Phaser.Scene {
    //Remember to change the orange ("") to whatever the scene is for
    constructor() {
        super("Map8");
    } 

    init() {
        let blue_score = localStorage.getItem("blue_score")
        let red_score = localStorage.getItem("red_score")
    }

    create(){

      resetround()

      let balb = randint(3)

        this.background = this.add.image(500, 370, "background8");

        // this.p1 = this.physics.add.sprite(900, 600, bluetanks[randint(16)]);
        this.p1 = this.physics.add.sprite(900, 600, "bluetank");
        mktank(this.p1)
        this.p2 = this.physics.add.sprite(100, 100, "redtank");
        mktank(this.p2)

        this.score1 = this.physics.add.staticGroup()
        this.score1.create(0, 365, 'p3').setVisible().setBodySize(10, 210, true)
        this.score2 = this.physics.add.staticGroup()
        this.score2.create(1000, 365, 'p3').setVisible().setBodySize(10, 210, true)
        
        this.plat = this.physics.add.staticGroup()
        this.plat.create(500, -50, 'p3').setVisible().setBodySize(1000, 95, true)
        this.plat.create(-50, 400, 'p3').setVisible().setBodySize(100, 1000, true)
        this.plat.create(500, 850, 'p3').setVisible().setBodySize(1000, 95, true)
        this.plat.create(1050, 400, 'p3').setVisible().setBodySize(100, 1000, true)
        
        this.plat.create(1175, 490, 'p1')
        this.plat.create(-175, 490, 'p1')
        this.plat.create(1175, 245, 'p1')
        this.plat.create(-175, 245, 'p1')

        this.plat.create(500, 120, 'p2')
        this.plat.create(500, 610, 'p2')

        this.plats = this.physics.add.image(500, 370, "puck")
        this.plats.setScale(2).setCircle(22.5)
        this.plats.setBounce(1.01)

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
                restartsetstart()
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
            resetround()
            this.scene.restart()
            }
        }

        let deathlyhollowthesenutzlmao = (p2, pu) => {
            scoreText1.setText(`Blue score: ${blue_score += 1}`)
            if (blue_score == 5) {
                restartsetstart()
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


        let goal1 = (ball, gol) => {
            ball.destroy()
            if (balb == 0) {
            powerup1 = true;
            powersg1 = true;
            sleep(25000).then(() => {
                powerup1 = false;
                powersg1 = false;
              })
              }
              else if (balb == 1) {
                powerup1 = true;
            powercat1 = true;
            sleep(25000).then(() => {
                powerup1 = false;
                powercat1 = false;
              })
              }
              else if (balb == 2) {
                minye1 = 250
          sleep(25000).then(() => {
              minye1 = 1000
            })
              }
        }
        let goal2 = (ball, gol) => {
            ball.destroy()
            if (balb == 0) {
              powerup2 = true;
              powersg2 = true;
              sleep(25000).then(() => {
                  powerup2 = false;
                  powersg2 = false;
                })
              }
              else if (balb == 1) {
                powerup2 = true;
            powercat2 = true;
            sleep(25000).then(() => {
                powerup2 = false;
                powercat2 = false;
              })
              }
              else if (balb == 2) {
                minye2 = 250
          sleep(25000).then(() => {
              minye2 = 1000
            })
              }
        }

        this.physics.add.collider(this.p1, this.plat)
        this.physics.add.collider(this.p2, this.plats, deathlyhollowthesenutzlmao)
        this.physics.add.collider(this.p2, this.plat)
        this.physics.add.collider(this.p1, this.plats, deathlyhollow)
        this.physics.add.collider(this.plat, this.plats)
        this.physics.add.collider(this.plats, this.score1, goal1)
        this.physics.add.collider(this.plats, this.score2, goal2)

        let colliedcunts = (p, b) => {
            let cunt = this.add.text(325, 250, "Trash lmao", {
                fontSize: "70px",
                color: "purple",
            })
            sleep(500).then(() => {
                cunt.destroy()
              })
        
        }

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
    }

    update (){
    this.moveManager()
    }

    // p1 fire function
    firep1(){
      // function for p1 fire left
  let p1fireleft = (bulletn, speed) => {
    this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, bulletn)
    this.bullet.setTint(0x0000FF)
    this.bullet.setVelocityX(-speed);
    this.physics.add.collider(this.p2, this.bullet, bulletHit1)
    this.physics.add.collider(this.plat, this.bullet, bulletWall1)
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
    this.bullet.setBounce(1)}
    // function for p1 fire right
    let p1fireright = (bulletn, speed) => {
      this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, bulletn)
      this.bullet.setTint(0x0000FF)
      this.bullet.setVelocityX(speed);
      this.physics.add.collider(this.p2, this.bullet, bulletHit1)
      this.physics.add.collider(this.plat, this.bullet, bulletWall1)
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
    // function for p1 fire up
    let p1fireup = (bulletn, speed) => {
      this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, bulletn)
          this.bullet.setTint(0x0000FF)
          this.bullet.setVelocityY(-speed);
          this.physics.add.collider(this.p2, this.bullet, bulletHit1)
          this.physics.add.collider(this.plat, this.bullet, bulletWall1)
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
    // function for p1 fire down
    let p1firedown = (bulletn, speed) => {
      this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, bulletn)
          this.bullet.setTint(0x0000FF)
          this.bullet.setVelocityY(speed);
          this.physics.add.collider(this.p2, this.bullet, bulletHit1)
          this.physics.add.collider(this.plat, this.bullet, bulletWall1)
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
    // function for p1 fire down left
    let p1firedownleft = (bulletn, speed) => {
      this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, bulletn)
          this.bullet.setTint(0x0000FF)
          this.bullet.setVelocityX(-speed);
          this.bullet.setVelocityY(speed);
          this.physics.add.collider(this.p2, this.bullet, bulletHit1)
          this.physics.add.collider(this.plat, this.bullet, bulletWall1)
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
    // function for p1 fire down right
    let p1firedownright = (bulletn, speed) => {
      this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, bulletn)
          this.bullet.setTint(0x0000FF)
          this.bullet.setVelocityX(speed);
          this.bullet.setVelocityY(speed);
          this.physics.add.collider(this.p2, this.bullet, bulletHit1)
          this.physics.add.collider(this.plat, this.bullet, bulletWall1)
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
    // function for p1 fire up left
    let p1fireupleft = (bulletn, speed) => {
      this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, bulletn)
          this.bullet.setTint(0x0000FF)
          this.bullet.setVelocityX(-speed);
          this.bullet.setVelocityY(-speed);
          this.physics.add.collider(this.p2, this.bullet, bulletHit1)
          this.physics.add.collider(this.plat, this.bullet, bulletWall1)
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
    // function for p1 fire up right
    let p1fireupright = (bulletn, speed) => {
      this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, bulletn)
          this.bullet.setTint(0x0000FF)
          this.bullet.setVelocityX(speed);
          this.bullet.setVelocityY(-speed);
          this.physics.add.collider(this.p2, this.bullet, bulletHit1)
          this.physics.add.collider(this.plat, this.bullet, bulletWall1)
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
    // p1 bullet hit fuction
      let bulletHit1 = (p, b) => {
          scoreText1.setText(`Blue score: ${blue_score += 1}`)
          if (blue_score == 5) {
              restartsetstart()
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
              }
                })
          }
          else if (blue_score != 5) {
          // hitsnd.play({volume: .5})
          // bgmusic.stop()
          resetround()
          this.scene.restart()
      }}
      // p1 bullet hits wall function    
      let bulletWall1 = (p, b) => {
              sleep(2000).then(() => {
                  p.destroy()
                })
          }
          let bulletWall2 = (p, b) => {
            b.destroy()
        }
        // left
        if(this.p1.angle == -90) {
          if (powerup1 == true) {
            if (powersg1 == true) {
                p1fireleft("bullet", 460)
                p1firedownleft("bullet", 460)
                p1fireupleft("bullet", 460)
            }
            if (powercat1 == true) {
              p1fireleft("catbullet", 1260)
            }
        }
        if (powerup1 == false) {
        p1fireleft("bullet", 460)
        }}
        // right
        else if(this.p1.angle == 90) {
          if (powerup1 == true) {
            if (powersg1 == true) {
                p1fireright("bullet", 460)
                p1fireupright("bullet", 460)
                p1firedownright("bullet", 460)
            }
            if (powercat1 == true) {
              p1fireright("catbullet", 1260)
            }
        }
        if (powerup1 == false) {
        p1fireright("bullet", 460)
        }}
        // up
        else if(this.p1.angle == 0) {
          if (powerup1 == true) {
            if (powersg1 == true) {
                p1fireup("bullet", 460)
                p1fireupleft("bullet", 460)
                p1fireupright("bullet", 460)
            }
            if (powercat1 == true) {
              p1fireup("catbullet", 1260)
            }
        }
        if (powerup1 == false) {
        p1fireup("bullet", 460)
        }}
        // down
        else if(this.p1.angle == -180) {
          if (powerup1 == true) {
            if (powersg1 == true) {
                p1firedown("bullet", 460)
                p1firedownleft("bullet", 460)
                p1firedownright("bullet", 460)
            }
            if (powercat1 == true) {
              p1firedown("catbullet", 1260)
            }
        }
        if (powerup1 == false) {
        p1firedown("bullet", 460)
        }}
        // down left
        else if(this.p1.angle == -135) {
          if (powerup1 == true) {
            if (powersg1 == true) {
                p1firedownleft("bullet", 460)
                p1firedown("bullet", 460)
                p1fireleft("bullet", 460)
            }
            if (powercat1 == true) {
              p1firedownleft("catbullet", 1260)
            }
        }
        if (powerup1 == false) {
        p1firedownleft("bullet", 460)
        }}
        // down right
        else if(this.p1.angle == 135) {
          if (powerup1 == true) {
            if (powersg1 == true) {
                p1firedownright("bullet", 460)
                p1firedown("bullet", 460)
                p1fireright("bullet", 460)
            }
            if (powercat1 == true) {
              p1firedownright("catbullet", 1260)
            }
        }
        if (powerup1 == false) {
        p1firedownright("bullet", 460)
        }}
        // up left
        else if(this.p1.angle == -45.00000000000006) {
          if (powerup1 == true) {
            if (powersg1 == true) {
                p1fireupleft("bullet", 460)
                p1fireup("bullet", 460)
                p1fireleft("bullet", 460)
            }
            if (powercat1 == true) {
              p1fireupleft("catbullet", 1260)
            }
        }
        if (powerup1 == false) {
        p1fireupleft("bullet", 460)
        }}
        // up right
        else if(this.p1.angle == 45) {
          if (powerup1 == true) {
            if (powersg1 == true) {
                p1fireupright("bullet", 460)
                p1fireup("bullet", 460)
                p1fireright("bullet", 460)
            }
            if (powercat1 == true) {
              p1fireupright("catbullet", 1260)
            }
        }
        if (powerup1 == false) {
        p1fireupright("bullet", 460)
        }}
    }
  
// fire p2 fuction
    firep2(){
      // function for p2 fire left
  let p1fireleft = (bulletn, speed) => {
    this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, bulletn)
    this.bullet.setTint(0xFF0000)
    this.bullet.setVelocityX(-speed);
    this.physics.add.collider(this.p1, this.bullet, bulletHit1)
    this.physics.add.collider(this.plat, this.bullet, bulletWall1)
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
    this.bullet.setBounce(1)}
    // function for p1 fire right
    let p1fireright = (bulletn, speed) => {
      this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, bulletn)
      this.bullet.setTint(0xFF0000)
      this.bullet.setVelocityX(speed);
      this.physics.add.collider(this.p1, this.bullet, bulletHit1)
      this.physics.add.collider(this.plat, this.bullet, bulletWall1)
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
    // function for p1 fire up
    let p1fireup = (bulletn, speed) => {
      this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, bulletn)
          this.bullet.setTint(0xFF0000)
          this.bullet.setVelocityY(-speed);
          this.physics.add.collider(this.p1, this.bullet, bulletHit1)
          this.physics.add.collider(this.plat, this.bullet, bulletWall1)
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
    // function for p1 fire down
    let p1firedown = (bulletn, speed) => {
      this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, bulletn)
          this.bullet.setTint(0xFF0000)
          this.bullet.setVelocityY(speed);
          this.physics.add.collider(this.p1, this.bullet, bulletHit1)
          this.physics.add.collider(this.plat, this.bullet, bulletWall1)
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
    // function for p1 fire down left
    let p1firedownleft = (bulletn, speed) => {
      this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, bulletn)
          this.bullet.setTint(0xFF0000)
          this.bullet.setVelocityX(-speed);
          this.bullet.setVelocityY(speed);
          this.physics.add.collider(this.p1, this.bullet, bulletHit1)
          this.physics.add.collider(this.plat, this.bullet, bulletWall1)
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
    // function for p1 fire down right
    let p1firedownright = (bulletn, speed) => {
      this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, bulletn)
          this.bullet.setTint(0xFF0000)
          this.bullet.setVelocityX(speed);
          this.bullet.setVelocityY(speed);
          this.physics.add.collider(this.p1, this.bullet, bulletHit1)
          this.physics.add.collider(this.plat, this.bullet, bulletWall1)
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
    // function for p1 fire up left
    let p1fireupleft = (bulletn, speed) => {
      this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, bulletn)
          this.bullet.setTint(0xFF0000)
          this.bullet.setVelocityX(-speed);
          this.bullet.setVelocityY(-speed);
          this.physics.add.collider(this.p1, this.bullet, bulletHit1)
          this.physics.add.collider(this.plat, this.bullet, bulletWall1)
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
    // function for p1 fire up right
    let p1fireupright = (bulletn, speed) => {
      this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, bulletn)
          this.bullet.setTint(0xFF0000)
          this.bullet.setVelocityX(speed);
          this.bullet.setVelocityY(-speed);
          this.physics.add.collider(this.p1, this.bullet, bulletHit1)
          this.physics.add.collider(this.plat, this.bullet, bulletWall1)
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
    // p1 bullet hit fuction
      let bulletHit1 = (p, b) => {
          scoreText1.setText(`Red score: ${red_score += 1}`)
          if (red_score == 5) {
              restartsetstart()
              this.add.text(325, 250, 'RED WINS', {
                  fontSize: "70px",
                  color: "red",
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
              }
                })
          }
          else if (red_score != 5) {
          // hitsnd.play({volume: .5})
          // bgmusic.stop()
          resetround()
          this.scene.restart()
      }}
      // p1 bullet hits wall function    
      let bulletWall1 = (p, b) => {
              sleep(2000).then(() => {
                  p.destroy()
                })
          }
          let bulletWall2 = (p, b) => {
            b.destroy()
        }
        // left
        if(this.p2.angle == -90) {
          if (powerup2 == true) {
            if (powersg2 == true) {
                p1fireleft("bullet", 460)
                p1firedownleft("bullet", 460)
                p1fireupleft("bullet", 460)
            }
            if (powercat2 == true) {
              p1fireleft("catbullet", 1260)
            }
        }
        if (powerup2 == false) {
        p1fireleft("bullet", 460)
        }}
        // right
        else if(this.p2.angle == 90) {
          if (powerup2 == true) {
            if (powersg2 == true) {
                p1fireright("bullet", 460)
                p1fireupright("bullet", 460)
                p1firedownright("bullet", 460)
            }
            if (powercat2 == true) {
              p1fireright("catbullet", 1260)
            }
        }
        if (powerup2 == false) {
        p1fireright("bullet", 460)
        }}
        // up
        else if(this.p2.angle == 0) {
          if (powerup2 == true) {
            if (powersg2 == true) {
                p1fireup("bullet", 460)
                p1fireupleft("bullet", 460)
                p1fireupright("bullet", 460)
            }
            if (powercat2 == true) {
              p1fireup("catbullet", 1260)
            }
        }
        if (powerup2 == false) {
        p1fireup("bullet", 460)
        }}
        // down
        else if(this.p2.angle == -180) {
          if (powerup2 == true) {
            if (powersg2 == true) {
                p1firedown("bullet", 460)
                p1firedownleft("bullet", 460)
                p1firedownright("bullet", 460)
            }
            if (powercat2 == true) {
              p1firedown("catbullet", 1260)
            }
        }
        if (powerup2 == false) {
        p1firedown("bullet", 460)
        }}
        // down left
        else if(this.p2.angle == -135) {
          if (powerup2 == true) {
            if (powersg2 == true) {
                p1firedownleft("bullet", 460)
                p1firedown("bullet", 460)
                p1fireleft("bullet", 460)
            }
            if (powercat2 == true) {
              p1firedownleft("catbullet", 1260)
            }
        }
        if (powerup2 == false) {
        p1firedownleft("bullet", 460)
        }}
        // down right
        else if(this.p2.angle == 135) {
          if (powerup2 == true) {
            if (powersg2 == true) {
                p1firedownright("bullet", 460)
                p1firedown("bullet", 460)
                p1fireright("bullet", 460)
            }
            if (powercat2 == true) {
              p1firedownright("catbullet", 1260)
            }
        }
        if (powerup2 == false) {
        p1firedownright("bullet", 460)
        }}
        // up left
        else if(this.p2.angle == -45.00000000000006) {
          if (powerup2 == true) {
            if (powersg2 == true) {
                p1fireupleft("bullet", 460)
                p1fireup("bullet", 460)
                p1fireleft("bullet", 460)
            }
            if (powercat2 == true) {
              p1fireupleft("catbullet", 1260)
            }
        }
        if (powerup2 == false) {
        p1fireupleft("bullet", 460)
        }}
        // up right
        else if(this.p2.angle == 45) {
          if (powerup2 == true) {
            if (powersg2 == true) {
                p1fireupright("bullet", 460)
                p1fireup("bullet", 460)
                p1fireright("bullet", 460)
            }
            if (powercat2 == true) {
              p1fireupright("catbullet", 1260)
            }
        }
        if (powerup2 == false) {
        p1fireupright("bullet", 460)
        }}
    }

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
          this.firep1()
      }}

        this.p2.setVelocityX(0);
        this.p2.setVelocityY(0);

        if (keyCNTR.isDown) {
            if (werido == 1) {
                werido -= 1
                sleep(minye2).then(() => {
                    werido += 1
                  })
            this.firep2()
        }}

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
          restartsetstart()
          this.scene.restart()
         }
        
    }

}
