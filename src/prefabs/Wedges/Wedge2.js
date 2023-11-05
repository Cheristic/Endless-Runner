class Wedge2 extends Wedge {
    create() {

        this.add(new Lava(this.scene, 0, 103, 0))
        this.add(new Lava(this.scene, 9, 103, 0));
        this.add(new Lava(this.scene, -9, 103, 0));
        this.add(new Lava(this.scene, 18, 103, 0));
        this.add(new Lava(this.scene, -18, 103, 0));

        this.add(new Platform(this.scene, 10, 100, 0));
        this.add(new Platform(this.scene, -10, 100, 0));
        this.list.forEach(element => {
            this.addToUpdateList(element);
        });
    }

}