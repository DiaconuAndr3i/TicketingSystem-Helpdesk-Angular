export class Registration{
    public First_Name: string | undefined;
    public Last_Name: string | undefined;
    public Phone_Number: string | undefined;
    public Email: string | undefined;
    public Password: string | undefined;
    public InstitutionName: string | undefined;
    public RoleName: string | undefined;

    constructor(init?: Partial<Registration>){
        Object.assign(this, init);
    }
}