class Wedge6 extends Wedge {
    create() {
        this.add(new Lava(this.scene, 0, 60, 0))
        this.add(new Lava(this.scene, 9, 60, 2));
        this.add(new Lava(this.scene, -9, 60, -2));
        this.add(new Lava(this.scene, 18, 61, 4));
        this.add(new Lava(this.scene, -18, 61, -4));
        this.add(new Lava(this.scene, 27, 62, 6));
        this.add(new Lava(this.scene, -27, 62, -6));
        this.add(new Lava(this.scene, 36, 63, 6));
        this.add(new Lava(this.scene, -36, 63, -6));
        this.add(new Lava(this.scene, 45, 64, 7));
        this.add(new Lava(this.scene, -45, 64, -7));
        this.add(new Lava(this.scene, 54, 65, 10));
        this.add(new Lava(this.scene, -54, 65, -10));



        this.add(new Platform(this.scene, 58, 103, 15));
        this.add(new Platform(this.scene, 40, 100, 0));
        this.add(new Platform(this.scene, -58, 103, -15));
        this.add(new Platform(this.scene, -40, 100, 0));

        this.list.forEach(element => {
            this.addToUpdateList(element);
        });
    }

}