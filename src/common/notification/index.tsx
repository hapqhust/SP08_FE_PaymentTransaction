import {notification} from "antd";
import { NOTIFICATION_TYPE } from "../../const/notification";

export const pushNotification = (mesage:string, description:string, type:string) => {
    if (type === 'success') notification['success']({
        message: `${mesage}`,
        description:`${description}`,
        placement: 'bottomRight'
    })
    else{
        if (type === 'info') notification['info']({
            message: `${mesage}`,
            description:`${description}`,
            placement: 'bottomRight'})
        else
        notification['error']({
            message: `${mesage}`,
            description:`${description}`,
            placement: 'bottomRight'
        });
    };
    
};