export class Joke {
    public setUp: string;
    public punchline: string;
    public hide: boolean;

    constructor(setup: string, punchline: string) {
        this.setUp = setup;
        this.punchline = punchline;
        this.hide = true;
    }

    toggle() {
        this.hide = !this.hide;
    }
}
