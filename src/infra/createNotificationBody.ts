import { IsNotEmpty, IsUUID, Length } from "class-validator"

export class CreateNotificationBody {
    @IsNotEmpty()
    @IsUUID()
    recipientId: string;
    
    @IsNotEmpty()
    @Length(5,240)
    Content: string

    @IsNotEmpty()
    Category: string
}