export class changePassword{
    public Token: string | undefined;
    public UserId: string | undefined;
    public Password: string | undefined;
    
    constructor(init?: Partial<changePassword>){
        Object.assign(this, init);
    }
}