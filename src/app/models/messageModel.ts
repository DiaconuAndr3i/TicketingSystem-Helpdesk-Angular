export class MessageModel{
    public TicketId: string | undefined;
    public ContentMessage: string | undefined;
    public EmailCreator: string | undefined;

    constructor(init?: Partial<MessageModel>){
        Object.assign(this, init);
    }
}