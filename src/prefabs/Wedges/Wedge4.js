class Wedge4 extends Wedge {
    create() {

        this.add(new Lava(this.scene, -27, 61, -6));
        this.add(new Lava(this.scene, -36, 62, -6));

        this.add(new Lava(this.scene, 23, 105, 10));
        this.add(new Lava(this.scene, 32, 107, 15));

        this.add(new Platform(this.scene, -10, 100, -5));
        this.add(new Platform(this.scene, 10, 100, 5));
        this.add(new Platform(this.scene, 28, 103, 15));

        this.list.forEach(element => {
            this.addToUpdateList(element);
        });
    }

}