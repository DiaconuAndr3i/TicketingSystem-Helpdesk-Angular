export class Registration{
    public FirstName: string | undefined;
    public LastName: string | undefined;
    public PhoneNumber: string | undefined;
    public Email: string | undefined;
    public Password: string | undefined;
    public InstitutionName: string | undefined;
    public RoleName: string | undefined;

    constructor(init?: Partial<Registration>){
        Object.assign(this, init);
    }
}