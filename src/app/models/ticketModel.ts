export class TicketModel{
    Title: string | undefined;
    CreatedDate: Date| undefined;
    ArrivalEmail: string| undefined;
    TicketCreatorEmail: string | undefined;
    NewActivity: Boolean;
    Priority: string| undefined;
    Status: string| undefined;
    Tag: string[]| undefined;


    constructor(init?: Partial<TicketModel>){
        Object.assign(this, init);
        this.CreatedDate = new Date();
        this.Status = 'Open';
        this.TicketCreatorEmail = localStorage.getItem('email') || "";
        this.NewActivity = true;
    }
}