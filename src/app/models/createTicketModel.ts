import { TicketModel } from "./ticketModel";

export class CreateTicketModel{
    TicketModel: TicketModel| undefined;
    ContentMessage: string| undefined;

    constructor(init?: Partial<CreateTicketModel>){
        Object.assign(this, init);
    }
}