export class Image {
    private src: string;
    private srct: string;
    private title: string;

    constructor(src: string, srct: string, title: string) {
        this.src = src;
        this.srct = srct;
        this.title = title;
    }

    getSrc(): string {
        return this.src;
    }

    getSrct(): string {
        return this.srct;
    }

    getTitle(): string {
        return this.title;
    }

    setSrc(src: string): void {
        this.src = src;
    }

    setSrct(srct: string): void {
        this.srct = srct;
    }

    setTitle(title: string): void {
        this.title = title;
    }

}