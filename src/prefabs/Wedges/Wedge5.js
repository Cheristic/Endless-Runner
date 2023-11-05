class Wedge5 extends Wedge {
    create() {
        this.add(new Lava(this.scene, 45, 64, 7));
        this.add(new Lava(this.scene, -45, 64, -7));
        this.add(new Lava(this.scene, 54, 65, 10));
        this.add(new Lava(this.scene, -54, 65, -10));


        this.list.forEach(element => {
            this.addToUpdateList(element);
        });
    }

}