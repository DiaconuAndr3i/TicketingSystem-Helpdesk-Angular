export class HandleUserRoleModel{
    public Email: string | undefined;
    public RoleName: string | undefined;
    public InstitutionName: string | undefined;

    constructor(init?: Partial<HandleUserRoleModel>){
        Object.assign(this, init);
    }
}