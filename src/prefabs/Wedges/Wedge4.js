class Wedge4 extends Wedge {
    create() {

        this.add(new Lava(this.scene, -18, 60, -4));
        this.add(new Lava(this.scene, -27, 60, -6));

        this.add(new Lava(this.scene, 21, 105, 10));
        this.add(new Lava(this.scene, 30, 107, 15));

        this.add(new Platform(this.scene, -10, 100, -5));
        this.add(new Platform(this.scene, 10, 100, 5));
        this.add(new Platform(this.scene, 28, 103, 15));

        this.list.forEach(element => {
            this.addToUpdateList(element);
        });
    }

}