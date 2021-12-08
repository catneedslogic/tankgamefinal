class Scene4 extends Phaser.Scene {
    //Remember to change the orange ("") to whatever the scene is for
    constructor() {
        super("Map3");
    } 

    init() {
        let blue_score = localStorage.getItem("blue_score")
        let red_score = localStorage.getItem("red_score")
    }

    create(){
      
      resetround()
      
      this.background = this.add.image(500, 370, "background3");
        // this.background.setScale(2)
    
        this.p1 = this.physics.add.sprite(950, 600, "bluetank");
        mktank(this.p1)
        this.p2 = this.physics.add.sprite(50, 100, "redtank");
        mktank(this.p2)

        let balb = randint(3)

        sleep(5000).then(() => {
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

        this.plats = this.physics.add.staticGroup()
        // red bottom lip
        this.plats.create(497, 754, 'p2').setCircle(5).setVisible()
        this.plats.create(492, 755, 'p2').setCircle(5).setVisible()
        this.plats.create(487, 755, 'p2').setCircle(5).setVisible()
        this.plats.create(482, 755, 'p2').setCircle(5).setVisible()
        this.plats.create(477, 755, 'p2').setCircle(5).setVisible()
        this.plats.create(472, 754, 'p2').setCircle(5).setVisible()
        this.plats.create(467, 753, 'p2').setCircle(5).setVisible()
        this.plats.create(462, 752, 'p2').setCircle(5).setVisible()
        this.plats.create(457, 751, 'p2').setCircle(5).setVisible()
        this.plats.create(452, 749, 'p2').setCircle(5).setVisible()
        this.plats.create(447, 747, 'p2').setCircle(5).setVisible()
        
        // blue bottom lip
        this.plats.create(518, 754, 'p2').setCircle(5).setVisible()
        this.plats.create(523, 755, 'p2').setCircle(5).setVisible()
        this.plats.create(528, 755, 'p2').setCircle(5).setVisible()
        this.plats.create(533, 755, 'p2').setCircle(5).setVisible()
        this.plats.create(538, 755, 'p2').setCircle(5).setVisible()
        this.plats.create(543, 754, 'p2').setCircle(5).setVisible()
        this.plats.create(548, 753, 'p2').setCircle(5).setVisible()
        this.plats.create(553, 752, 'p2').setCircle(5).setVisible()
        this.plats.create(558, 751, 'p2').setCircle(5).setVisible()
        this.plats.create(563, 749, 'p2').setCircle(5).setVisible()
        this.plats.create(568, 747, 'p2').setCircle(5).setVisible()
        this.plats.create(571, 747, 'p2').setCircle(5).setVisible()
        
        // red top lip
        this.plats.create(497, 716, 'p2').setCircle(5).setVisible()
        this.plats.create(492, 716, 'p2').setCircle(5).setVisible()
        this.plats.create(487, 716, 'p2').setCircle(5).setVisible()
        this.plats.create(482, 716, 'p2').setCircle(5).setVisible()
        this.plats.create(477, 716, 'p2').setCircle(5).setVisible()
        this.plats.create(472, 716, 'p2').setCircle(5).setVisible()
        this.plats.create(467, 716, 'p2').setCircle(5).setVisible()
        this.plats.create(467, 719, 'p2').setCircle(5).setVisible()
        this.plats.create(462, 723, 'p2').setCircle(5).setVisible()
        this.plats.create(457, 726, 'p2').setCircle(5).setVisible()
        this.plats.create(454, 730, 'p2').setCircle(5).setVisible()
        
        // blue top lip
        this.plats.create(518, 716, 'p2').setCircle(5).setVisible()
        this.plats.create(523, 716, 'p2').setCircle(5).setVisible()
        this.plats.create(528, 716, 'p2').setCircle(5).setVisible()
        this.plats.create(533, 716, 'p2').setCircle(5).setVisible()
        this.plats.create(538, 716, 'p2').setCircle(5).setVisible()
        this.plats.create(543, 716, 'p2').setCircle(5).setVisible()
        this.plats.create(548, 716, 'p2').setCircle(5).setVisible()
        this.plats.create(553, 719, 'p2').setCircle(5).setVisible()
        this.plats.create(558, 723, 'p2').setCircle(5).setVisible()
        this.plats.create(563, 726, 'p2').setCircle(5).setVisible()
        this.plats.create(565, 730, 'p2').setCircle(5).setVisible()
        
        // red cheek
        this.plats.create(398, 739, 'p2').setCircle(5).setVisible()
        this.plats.create(398, 734, 'p2').setCircle(5).setVisible()
        this.plats.create(398, 729, 'p2').setCircle(5).setVisible()
        this.plats.create(396, 724, 'p2').setCircle(5).setVisible()
        this.plats.create(394, 719, 'p2').setCircle(5).setVisible()
        this.plats.create(392, 714, 'p2').setCircle(5).setVisible()
        this.plats.create(392, 709, 'p2').setCircle(5).setVisible()
        this.plats.create(391, 704, 'p2').setCircle(5).setVisible()
        this.plats.create(390, 699, 'p2').setCircle(5).setVisible()
        this.plats.create(387, 694, 'p2').setCircle(5).setVisible()
        this.plats.create(383, 689, 'p2').setCircle(5).setVisible()
        this.plats.create(378, 684, 'p2').setCircle(5).setVisible()
        this.plats.create(376, 679, 'p2').setCircle(5).setVisible()
        this.plats.create(374, 674, 'p2').setCircle(5).setVisible()
        this.plats.create(371, 669, 'p2').setCircle(5).setVisible()
        this.plats.create(366, 664, 'p2').setCircle(5).setVisible()
        this.plats.create(360, 659, 'p2').setCircle(5).setVisible()
        this.plats.create(352, 654, 'p2').setCircle(5).setVisible()
        this.plats.create(344, 649, 'p2').setCircle(5).setVisible()
        this.plats.create(339, 649, 'p2').setCircle(5).setVisible()
        this.plats.create(334, 649, 'p2').setCircle(5).setVisible()
        this.plats.create(329, 649, 'p2').setCircle(5).setVisible()
        this.plats.create(324, 649, 'p2').setCircle(5).setVisible()
        this.plats.create(319, 651, 'p2').setCircle(5).setVisible()
        this.plats.create(314, 653, 'p2').setCircle(5).setVisible()
        this.plats.create(309, 654, 'p2').setCircle(5).setVisible()
        this.plats.create(304, 655, 'p2').setCircle(5).setVisible()
        this.plats.create(299, 657, 'p2').setCircle(5).setVisible()
        this.plats.create(294, 658, 'p2').setCircle(5).setVisible()
        this.plats.create(289, 659, 'p2').setCircle(5).setVisible()
        this.plats.create(284, 660, 'p2').setCircle(5).setVisible()
        this.plats.create(279, 661, 'p2').setCircle(5).setVisible()
        this.plats.create(274, 663, 'p2').setCircle(5).setVisible()
        this.plats.create(269, 666, 'p2').setCircle(5).setVisible()
        this.plats.create(264, 668, 'p2').setCircle(5).setVisible()
        this.plats.create(259, 671, 'p2').setCircle(5).setVisible()
        this.plats.create(254, 675, 'p2').setCircle(5).setVisible()
        this.plats.create(249, 681, 'p2').setCircle(5).setVisible()
        this.plats.create(244, 686, 'p2').setCircle(5).setVisible()
        
        // blue cheek
        this.plats.create(622, 739, 'p2').setCircle(5).setVisible()
        this.plats.create(622, 734, 'p2').setCircle(5).setVisible()
        this.plats.create(622, 729, 'p2').setCircle(5).setVisible()
        this.plats.create(624, 724, 'p2').setCircle(5).setVisible()
        this.plats.create(626, 719, 'p2').setCircle(5).setVisible()
        this.plats.create(628, 714, 'p2').setCircle(5).setVisible()
        this.plats.create(628, 709, 'p2').setCircle(5).setVisible()
        this.plats.create(629, 704, 'p2').setCircle(5).setVisible()
        this.plats.create(630, 699, 'p2').setCircle(5).setVisible()
        this.plats.create(633, 694, 'p2').setCircle(5).setVisible()
        this.plats.create(637, 689, 'p2').setCircle(5).setVisible()
        this.plats.create(642, 684, 'p2').setCircle(5).setVisible()
        this.plats.create(644, 679, 'p2').setCircle(5).setVisible()
        this.plats.create(646, 674, 'p2').setCircle(5).setVisible()
        this.plats.create(649, 669, 'p2').setCircle(5).setVisible()
        this.plats.create(654, 664, 'p2').setCircle(5).setVisible()
        this.plats.create(660, 659, 'p2').setCircle(5).setVisible()
        this.plats.create(668, 654, 'p2').setCircle(5).setVisible()
        this.plats.create(676, 649, 'p2').setCircle(5).setVisible()
        this.plats.create(681, 649, 'p2').setCircle(5).setVisible()
        this.plats.create(686, 649, 'p2').setCircle(5).setVisible()
        this.plats.create(691, 649, 'p2').setCircle(5).setVisible()
        this.plats.create(696, 649, 'p2').setCircle(5).setVisible()
        this.plats.create(701, 651, 'p2').setCircle(5).setVisible()
        this.plats.create(706, 653, 'p2').setCircle(5).setVisible()
        this.plats.create(711, 654, 'p2').setCircle(5).setVisible()
        this.plats.create(716, 655, 'p2').setCircle(5).setVisible()
        this.plats.create(721, 657, 'p2').setCircle(5).setVisible()
        this.plats.create(726, 658, 'p2').setCircle(5).setVisible()
        this.plats.create(731, 659, 'p2').setCircle(5).setVisible()
        this.plats.create(736, 660, 'p2').setCircle(5).setVisible()
        this.plats.create(741, 661, 'p2').setCircle(5).setVisible()
        this.plats.create(746, 663, 'p2').setCircle(5).setVisible()
        this.plats.create(751, 666, 'p2').setCircle(5).setVisible()
        this.plats.create(756, 668, 'p2').setCircle(5).setVisible()
        this.plats.create(761, 671, 'p2').setCircle(5).setVisible()
        this.plats.create(766, 675, 'p2').setCircle(5).setVisible()
        this.plats.create(771, 681, 'p2').setCircle(5).setVisible()
        this.plats.create(776, 686, 'p2').setCircle(5).setVisible()
        
        // red bottom whisker
        this.plats.create(201, 530, 'p2').setCircle(5).setVisible()
        this.plats.create(196, 531, 'p2').setCircle(5).setVisible()
        this.plats.create(191, 532, 'p2').setCircle(5).setVisible()
        this.plats.create(186, 533, 'p2').setCircle(5).setVisible()
        this.plats.create(181, 535, 'p2').setCircle(5).setVisible()
        this.plats.create(176, 537, 'p2').setCircle(5).setVisible()
        this.plats.create(171, 541, 'p2').setCircle(5).setVisible()
        this.plats.create(166, 544, 'p2').setCircle(5).setVisible()
        this.plats.create(161, 546, 'p2').setCircle(5).setVisible()
        this.plats.create(156, 548, 'p2').setCircle(5).setVisible()
        this.plats.create(151, 550, 'p2').setCircle(5).setVisible()
        this.plats.create(146, 554, 'p2').setCircle(5).setVisible()
        this.plats.create(141, 557, 'p2').setCircle(5).setVisible()
        this.plats.create(136, 560, 'p2').setCircle(5).setVisible()
        this.plats.create(131, 562, 'p2').setCircle(5).setVisible()
        this.plats.create(126, 564, 'p2').setCircle(5).setVisible()
        this.plats.create(123, 565, 'p2').setCircle(5).setVisible()
        
        // blue bottom whisker
        this.plats.create(819, 530, 'p2').setCircle(5).setVisible()
        this.plats.create(824, 531, 'p2').setCircle(5).setVisible()
        this.plats.create(829, 532, 'p2').setCircle(5).setVisible()
        this.plats.create(834, 533, 'p2').setCircle(5).setVisible()
        this.plats.create(839, 535, 'p2').setCircle(5).setVisible()
        this.plats.create(844, 537, 'p2').setCircle(5).setVisible()
        this.plats.create(849, 541, 'p2').setCircle(5).setVisible()
        this.plats.create(854, 544, 'p2').setCircle(5).setVisible()
        this.plats.create(859, 546, 'p2').setCircle(5).setVisible()
        this.plats.create(864, 548, 'p2').setCircle(5).setVisible()
        this.plats.create(869, 550, 'p2').setCircle(5).setVisible()
        this.plats.create(874, 554, 'p2').setCircle(5).setVisible()
        this.plats.create(879, 557, 'p2').setCircle(5).setVisible()
        this.plats.create(884, 560, 'p2').setCircle(5).setVisible()
        this.plats.create(889, 562, 'p2').setCircle(5).setVisible()
        this.plats.create(894, 564, 'p2').setCircle(5).setVisible()
        this.plats.create(897, 565, 'p2').setCircle(5).setVisible()
        
        // red top whisker
        this.plats.create(240, 460, 'p2').setCircle(5).setVisible()
        this.plats.create(235, 458, 'p2').setCircle(5).setVisible()
        this.plats.create(230, 456, 'p2').setCircle(5).setVisible()
        this.plats.create(225, 454, 'p2').setCircle(5).setVisible()
        this.plats.create(220, 452, 'p2').setCircle(5).setVisible()
        this.plats.create(215, 449, 'p2').setCircle(5).setVisible()
        this.plats.create(210, 446, 'p2').setCircle(5).setVisible()
        this.plats.create(205, 443, 'p2').setCircle(5).setVisible()
        this.plats.create(200, 442, 'p2').setCircle(5).setVisible()
        this.plats.create(195, 441, 'p2').setCircle(5).setVisible()
        this.plats.create(190, 439, 'p2').setCircle(5).setVisible()
        this.plats.create(185, 437, 'p2').setCircle(5).setVisible()
        this.plats.create(155, 315, 'p2').setBodySize(40, 5).setVisible() 
        
        // blue top whisker
        this.plats.create(780, 460, 'p2').setCircle(5).setVisible()
        this.plats.create(785, 458, 'p2').setCircle(5).setVisible()
        this.plats.create(790, 456, 'p2').setCircle(5).setVisible()
        this.plats.create(795, 454, 'p2').setCircle(5).setVisible()
        this.plats.create(800, 452, 'p2').setCircle(5).setVisible()
        this.plats.create(805, 449, 'p2').setCircle(5).setVisible()
        this.plats.create(810, 446, 'p2').setCircle(5).setVisible()
        this.plats.create(815, 443, 'p2').setCircle(5).setVisible()
        this.plats.create(820, 442, 'p2').setCircle(5).setVisible()
        this.plats.create(825, 441, 'p2').setCircle(5).setVisible()
        this.plats.create(830, 439, 'p2').setCircle(5).setVisible()
        this.plats.create(835, 437, 'p2').setCircle(5).setVisible()
        this.plats.create(845, 315, 'p2').setBodySize(40, 5).setVisible()
        
        // red ear
        this.plats.create(363, 253, 'p2').setCircle(5).setVisible()
        this.plats.create(363, 250, 'p2').setCircle(5).setVisible()
        this.plats.create(363, 248, 'p2').setCircle(5).setVisible()
        this.plats.create(362, 244, 'p2').setCircle(5).setVisible()
        this.plats.create(360, 240, 'p2').setCircle(5).setVisible()
        this.plats.create(357, 238, 'p2').setCircle(5).setVisible()
        this.plats.create(353, 236, 'p2').setCircle(5).setVisible()
        this.plats.create(348, 234, 'p2').setCircle(5).setVisible()
        this.plats.create(343, 232, 'p2').setCircle(5).setVisible()
        this.plats.create(338, 230, 'p2').setCircle(5).setVisible()
        this.plats.create(333, 228, 'p2').setCircle(5).setVisible()
        this.plats.create(313, 106, 'p2').setBodySize(50, 5).setVisible()
        this.plats.create(296, 230, 'p2').setCircle(5).setVisible()
        this.plats.create(291, 232, 'p2').setCircle(5).setVisible()
        this.plats.create(286, 233, 'p2').setCircle(5).setVisible()
        this.plats.create(281, 234, 'p2').setCircle(5).setVisible()
        this.plats.create(276, 235, 'p2').setCircle(5).setVisible()
        this.plats.create(271, 236, 'p2').setCircle(5).setVisible()
        this.plats.create(266, 237, 'p2').setCircle(5).setVisible()
        this.plats.create(261, 238, 'p2').setCircle(5).setVisible()
        this.plats.create(256, 239, 'p2').setCircle(5).setVisible()
        this.plats.create(251, 240, 'p2').setCircle(5).setVisible()
        this.plats.create(248, 242, 'p2').setCircle(5).setVisible()
        this.plats.create(248, 247, 'p2').setCircle(5).setVisible()
        this.plats.create(247, 252, 'p2').setCircle(5).setVisible()
        this.plats.create(247, 257, 'p2').setCircle(5).setVisible()
        this.plats.create(247, 262, 'p2').setCircle(5).setVisible()
        this.plats.create(247, 267, 'p2').setCircle(5).setVisible()
        this.plats.create(247, 272, 'p2').setCircle(5).setVisible()
        this.plats.create(247, 277, 'p2').setCircle(5).setVisible()
        this.plats.create(247, 282, 'p2').setCircle(5).setVisible()
        this.plats.create(247, 287, 'p2').setCircle(5).setVisible()
        this.plats.create(249, 292, 'p2').setCircle(5).setVisible()
        this.plats.create(247, 297, 'p2').setCircle(5).setVisible()
        this.plats.create(247, 302, 'p2').setCircle(5).setVisible()
        this.plats.create(249, 309, 'p2').setCircle(5).setVisible()
        this.plats.create(250, 314, 'p2').setCircle(5).setVisible()
        this.plats.create(251, 319, 'p2').setCircle(5).setVisible()
        
        // blue ear
        this.plats.create(657, 253, 'p2').setCircle(5).setVisible()
        this.plats.create(657, 250, 'p2').setCircle(5).setVisible()
        this.plats.create(657, 248, 'p2').setCircle(5).setVisible()
        this.plats.create(658, 244, 'p2').setCircle(5).setVisible()
        this.plats.create(660, 240, 'p2').setCircle(5).setVisible()
        this.plats.create(663, 238, 'p2').setCircle(5).setVisible()
        this.plats.create(667, 236, 'p2').setCircle(5).setVisible()
        this.plats.create(672, 234, 'p2').setCircle(5).setVisible()
        this.plats.create(677, 232, 'p2').setCircle(5).setVisible()
        this.plats.create(682, 230, 'p2').setCircle(5).setVisible()
        this.plats.create(687, 228, 'p2').setCircle(5).setVisible()
        this.plats.create(687, 106, 'p2').setBodySize(50, 5).setVisible()
        this.plats.create(724, 230, 'p2').setCircle(5).setVisible()
        this.plats.create(729, 232, 'p2').setCircle(5).setVisible()
        this.plats.create(734, 233, 'p2').setCircle(5).setVisible()
        this.plats.create(739, 234, 'p2').setCircle(5).setVisible()
        this.plats.create(744, 235, 'p2').setCircle(5).setVisible()
        this.plats.create(749, 236, 'p2').setCircle(5).setVisible()
        this.plats.create(754, 237, 'p2').setCircle(5).setVisible()
        this.plats.create(759, 238, 'p2').setCircle(5).setVisible()
        this.plats.create(764, 239, 'p2').setCircle(5).setVisible()
        this.plats.create(769, 240, 'p2').setCircle(5).setVisible()
        this.plats.create(772, 242, 'p2').setCircle(5).setVisible()
        this.plats.create(772, 247, 'p2').setCircle(5).setVisible()
        this.plats.create(773, 252, 'p2').setCircle(5).setVisible()
        this.plats.create(773, 257, 'p2').setCircle(5).setVisible()
        this.plats.create(773, 262, 'p2').setCircle(5).setVisible()
        this.plats.create(773, 267, 'p2').setCircle(5).setVisible()
        this.plats.create(773, 272, 'p2').setCircle(5).setVisible()
        this.plats.create(773, 277, 'p2').setCircle(5).setVisible()
        this.plats.create(773, 282, 'p2').setCircle(5).setVisible()
        this.plats.create(773, 287, 'p2').setCircle(5).setVisible()
        this.plats.create(771, 292, 'p2').setCircle(5).setVisible()
        this.plats.create(770, 297, 'p2').setCircle(5).setVisible()
        this.plats.create(770, 302, 'p2').setCircle(5).setVisible()
        this.plats.create(768, 309, 'p2').setCircle(5).setVisible()
        this.plats.create(767, 314, 'p2').setCircle(5).setVisible()
        this.plats.create(766, 319, 'p2').setCircle(5).setVisible()
        
        // red eyebrow
        this.plats.create(508, 250, 'p2').setCircle(5).setVisible()
        this.plats.create(506, 250, 'p2').setCircle(5).setVisible()
        this.plats.create(501, 245, 'p2').setCircle(5).setVisible()
        this.plats.create(496, 240, 'p2').setCircle(5).setVisible()
        this.plats.create(491, 238, 'p2').setCircle(5).setVisible()
        this.plats.create(486, 235, 'p2').setCircle(5).setVisible()
        this.plats.create(481, 233, 'p2').setCircle(5).setVisible()
        this.plats.create(476, 230, 'p2').setCircle(5).setVisible()
        this.plats.create(471, 227, 'p2').setCircle(5).setVisible()
        this.plats.create(466, 223, 'p2').setCircle(5).setVisible()
        this.plats.create(461, 219, 'p2').setCircle(5).setVisible()
        this.plats.create(456, 216, 'p2').setCircle(5).setVisible()
        this.plats.create(451, 213, 'p2').setCircle(5).setVisible()
        this.plats.create(446, 209, 'p2').setCircle(5).setVisible()
        this.plats.create(441, 206, 'p2').setCircle(5).setVisible()
        this.plats.create(436, 204, 'p2').setCircle(5).setVisible()
        this.plats.create(431, 202, 'p2').setCircle(5).setVisible()
        this.plats.create(426, 201, 'p2').setCircle(5).setVisible()
        
        // blue eyebrow
        this.plats.create(510, 250, 'p2').setCircle(5).setVisible()
        this.plats.create(515, 250, 'p2').setCircle(5).setVisible()
        this.plats.create(520, 245, 'p2').setCircle(5).setVisible()
        this.plats.create(525, 240, 'p2').setCircle(5).setVisible()
        this.plats.create(530, 238, 'p2').setCircle(5).setVisible()
        this.plats.create(535, 235, 'p2').setCircle(5).setVisible()
        this.plats.create(540, 233, 'p2').setCircle(5).setVisible()
        this.plats.create(545, 230, 'p2').setCircle(5).setVisible()
        this.plats.create(550, 227, 'p2').setCircle(5).setVisible()
        this.plats.create(555, 223, 'p2').setCircle(5).setVisible()
        this.plats.create(560, 219, 'p2').setCircle(5).setVisible()
        this.plats.create(565, 216, 'p2').setCircle(5).setVisible()
        this.plats.create(570, 213, 'p2').setCircle(5).setVisible()
        this.plats.create(575, 209, 'p2').setCircle(5).setVisible()
        this.plats.create(580, 206, 'p2').setCircle(5).setVisible()
        this.plats.create(585, 204, 'p2').setCircle(5).setVisible()
        this.plats.create(590, 202, 'p2').setCircle(5).setVisible()
        this.plats.create(595, 201, 'p2').setCircle(5).setVisible()
        
        // red eye
        this.plats.create(470, 362, 'p2').setCircle(6).setVisible()
        this.plats.create(468, 360, 'p2').setCircle(6).setVisible()
        this.plats.create(444, 350, 'p2').setCircle(13).setVisible()
        this.plats.create(390, 348, 'p2').setCircle(7).setVisible()
        this.plats.create(385, 353, 'p2').setCircle(7).setVisible()
        this.plats.create(436, 344, 'p2').setCircle(17).setVisible()
        this.plats.create(416, 340, 'p2').setCircle(19).setVisible()
        this.plats.create(396, 343, 'p2').setCircle(18).setVisible()

        // blue eye
        this.plats.create(552, 362, 'p2').setCircle(6).setVisible()
        this.plats.create(550, 360, 'p2').setCircle(6).setVisible()
        this.plats.create(560, 350, 'p2').setCircle(13).setVisible()
        this.plats.create(625, 348, 'p2').setCircle(7).setVisible()
        this.plats.create(630, 353, 'p2').setCircle(7).setVisible()
        this.plats.create(568, 344, 'p2').setCircle(17).setVisible()
        this.plats.create(578, 340, 'p2').setCircle(19).setVisible()
        this.plats.create(600, 343, 'p2').setCircle(18).setVisible()

        // red nose
        this.plats.create(457, 537, 'p2').setCircle(5).setVisible()
        this.plats.create(460, 540, 'p2').setCircle(5).setVisible()
        this.plats.create(465, 545, 'p2').setCircle(5).setVisible()
        this.plats.create(469, 550, 'p2').setCircle(5).setVisible()
        this.plats.create(473, 555, 'p2').setCircle(5).setVisible()
        this.plats.create(476, 560, 'p2').setCircle(5).setVisible()
        this.plats.create(479, 565, 'p2').setCircle(5).setVisible()
        this.plats.create(483, 570, 'p2').setCircle(5).setVisible()
        this.plats.create(485, 575, 'p2').setCircle(5).setVisible()
        this.plats.create(490, 580, 'p2').setCircle(5).setVisible()
        
        // blue nose
        this.plats.create(565, 537, 'p2').setCircle(5).setVisible()
        this.plats.create(562, 540, 'p2').setCircle(5).setVisible()
        this.plats.create(557, 545, 'p2').setCircle(5).setVisible()
        this.plats.create(553, 550, 'p2').setCircle(5).setVisible()
        this.plats.create(549, 555, 'p2').setCircle(5).setVisible()
        this.plats.create(546, 560, 'p2').setCircle(5).setVisible()
        this.plats.create(543, 565, 'p2').setCircle(5).setVisible()
        this.plats.create(539, 570, 'p2').setCircle(5).setVisible()
        this.plats.create(537, 575, 'p2').setCircle(5).setVisible()
        this.plats.create(532, 580, 'p2').setCircle(5).setVisible()

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

        this.physics.add.collider(this.p1, this.plats)
        this.physics.add.collider(this.p2, this.plats)

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
    this.bullet.setBounce(1)}
    // function for p1 fire right
    let p1fireright = (bulletn, speed) => {
      this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, bulletn)
      this.bullet.setTint(0x0000FF)
      this.bullet.setVelocityX(speed);
      this.physics.add.collider(this.p2, this.bullet, bulletHit1)
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
    // function for p1 fire up
    let p1fireup = (bulletn, speed) => {
      this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, bulletn)
          this.bullet.setTint(0x0000FF)
          this.bullet.setVelocityY(-speed);
          this.physics.add.collider(this.p2, this.bullet, bulletHit1)
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
    // function for p1 fire down
    let p1firedown = (bulletn, speed) => {
      this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, bulletn)
          this.bullet.setTint(0x0000FF)
          this.bullet.setVelocityY(speed);
          this.physics.add.collider(this.p2, this.bullet, bulletHit1)
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
    // function for p1 fire down left
    let p1firedownleft = (bulletn, speed) => {
      this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, bulletn)
          this.bullet.setTint(0x0000FF)
          this.bullet.setVelocityX(-speed);
          this.bullet.setVelocityY(speed);
          this.physics.add.collider(this.p2, this.bullet, bulletHit1)
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
    // function for p1 fire down right
    let p1firedownright = (bulletn, speed) => {
      this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, bulletn)
          this.bullet.setTint(0x0000FF)
          this.bullet.setVelocityX(speed);
          this.bullet.setVelocityY(speed);
          this.physics.add.collider(this.p2, this.bullet, bulletHit1)
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
    // function for p1 fire up left
    let p1fireupleft = (bulletn, speed) => {
      this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, bulletn)
          this.bullet.setTint(0x0000FF)
          this.bullet.setVelocityX(-speed);
          this.bullet.setVelocityY(-speed);
          this.physics.add.collider(this.p2, this.bullet, bulletHit1)
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
    // function for p1 fire up right
    let p1fireupright = (bulletn, speed) => {
      this.bullet = this.physics.add.sprite(this.p1.x, this.p1.y, bulletn)
          this.bullet.setTint(0x0000FF)
          this.bullet.setVelocityX(speed);
          this.bullet.setVelocityY(-speed);
          this.physics.add.collider(this.p2, this.bullet, bulletHit1)
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
    this.bullet.setBounce(1)}
    // function for p1 fire right
    let p1fireright = (bulletn, speed) => {
      this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, bulletn)
      this.bullet.setTint(0xFF0000)
      this.bullet.setVelocityX(speed);
      this.physics.add.collider(this.p1, this.bullet, bulletHit1)
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
    // function for p1 fire up
    let p1fireup = (bulletn, speed) => {
      this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, bulletn)
          this.bullet.setTint(0xFF0000)
          this.bullet.setVelocityY(-speed);
          this.physics.add.collider(this.p1, this.bullet, bulletHit1)
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
    // function for p1 fire down
    let p1firedown = (bulletn, speed) => {
      this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, bulletn)
          this.bullet.setTint(0xFF0000)
          this.bullet.setVelocityY(speed);
          this.physics.add.collider(this.p1, this.bullet, bulletHit1)
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
    // function for p1 fire down left
    let p1firedownleft = (bulletn, speed) => {
      this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, bulletn)
          this.bullet.setTint(0xFF0000)
          this.bullet.setVelocityX(-speed);
          this.bullet.setVelocityY(speed);
          this.physics.add.collider(this.p1, this.bullet, bulletHit1)
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
    // function for p1 fire down right
    let p1firedownright = (bulletn, speed) => {
      this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, bulletn)
          this.bullet.setTint(0xFF0000)
          this.bullet.setVelocityX(speed);
          this.bullet.setVelocityY(speed);
          this.physics.add.collider(this.p1, this.bullet, bulletHit1)
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
    // function for p1 fire up left
    let p1fireupleft = (bulletn, speed) => {
      this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, bulletn)
          this.bullet.setTint(0xFF0000)
          this.bullet.setVelocityX(-speed);
          this.bullet.setVelocityY(-speed);
          this.physics.add.collider(this.p1, this.bullet, bulletHit1)
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
    // function for p1 fire up right
    let p1fireupright = (bulletn, speed) => {
      this.bullet = this.physics.add.sprite(this.p2.x, this.p2.y, bulletn)
          this.bullet.setTint(0xFF0000)
          this.bullet.setVelocityX(speed);
          this.bullet.setVelocityY(-speed);
          this.physics.add.collider(this.p1, this.bullet, bulletHit1)
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
    // p1 bullet hit fuction
      let bulletHit1 = (p, b) => {
          scoreText1.setText(`Red score: ${red_score += 1}`)
          if (red_score == 5) {
              restartsetstart()
              this.add.text(325, 250, 'Red WINS', {
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
