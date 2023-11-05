class Wedge3 extends Wedge {
    create() {
        this.add(new Lava(this.scene, 0, 60, 0))
        this.add(new Lava(this.scene, 9, 60, 2));
        this.add(new Lava(this.scene, -9, 60, -2));
        this.add(new Lava(this.scene, 18, 60, 4));
        this.add(new Lava(this.scene, -18, 60, -4));
        this.add(new Lava(this.scene, 27, 60, 6));
        this.add(new Lava(this.scene, -27, 60, -6));

        this.add(new Lava(this.scene, 0, 153, 0));
        this.add(new Lava(this.scene, 9, 153, 0));
        this.add(new Lava(this.scene, -9, 153, 0));

        this.add(new Platform(this.scene, 5, 150, 0));
        this.add(new Platform(this.scene, -5, 150, 0));

        this.add(new Platform(this.scene, -10, 100, -5));
        this.add(new Platform(this.scene, 10, 100, 5));

        this.list.forEach(element => {
            this.addToUpdateList(element);
        });
    }

}