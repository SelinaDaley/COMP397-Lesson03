module objects {
    // Scene class
    export class Scene extends createjs.Container{
    // CUNSTRUCTOR CLASS ++++++++++++++++++++++++++++++++++++
        constructor() {
            super();
            this.start();
        }
    
        // Add game objects to my scene in this method
        public start(): void {
            stage.addChild(this);
        }

        // Update game objects in my scene
        public update(): void {

        }
    }
}