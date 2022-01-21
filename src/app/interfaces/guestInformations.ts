import { UserInformations } from "./userInformation";

export interface GuestInformations{
    userInformationsModel: UserInformations;
    requiredRoles: string[];
}