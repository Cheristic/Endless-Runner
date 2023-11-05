class Wedge8 extends Wedge {
    create() {
        this.add(new Lava(this.scene, 0, 60, 0))
        this.add(new Lava(this.scene, 9, 60, 2));
        this.add(new Lava(this.scene, -9, 60, -2));
        this.add(new Lava(this.scene, 18, 60, 4));
        this.add(new Lava(this.scene, -18, 60, -4));
        this.add(new Lava(this.scene, 27, 60, 6));
        this.add(new Lava(this.scene, -27, 60, -6));



        this.add(new Platform(this.scene, -10, 140, -5));
        this.add(new Platform(this.scene, -29, 144, -15));

        this.add(new Platform(this.scene, 58, 103, 15));
        this.add(new Platform(this.scene, 40, 100, 0));

        this.list.forEach(element => {
            this.addToUpdateList(element);
        });
    }

}