export class resetPassword{
    public Email: string | undefined;
    
    constructor(init?: Partial<resetPassword>){
        Object.assign(this, init);
    }
}