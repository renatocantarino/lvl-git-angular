export class RepositorioDTO {
    name: string= "";



    public constructor(init?: Partial<RepositorioDTO>) {
        Object.assign(this, init);
    }

}
