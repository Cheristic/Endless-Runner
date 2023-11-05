class Wedge7 extends Wedge {
    create() {
        this.add(new Lava(this.scene, -35, 65, 90));
        this.add(new Lava(this.scene, -35, 74, 90));
        this.add(new Lava(this.scene, -35, 83, 90));
        this.add(new Lava(this.scene, -35, 92, 90));
        this.add(new Lava(this.scene, -35, 101, 90));
        this.add(new Lava(this.scene, -35, 110, 90));
        this.add(new Lava(this.scene, -35, 119, 90));
        this.add(new Lava(this.scene, -35, 128, 90));
        

        this.add(new Platform(this.scene, -10, 100, -5));
        this.add(new Platform(this.scene, 10, 100, 5));
        this.add(new Platform(this.scene, -29, 104, -15));
        this.add(new Platform(this.scene, 29, 104, 15));

        this.list.forEach(element => {
            this.addToUpdateList(element);
        });
    }

}