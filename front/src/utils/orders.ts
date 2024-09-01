import { IOrder } from "@/types/IOrders"

// status: pending, approved, rejected

export const orders:IOrder[] = [
    {
        id:1,
        status:'pending',
        date:"02/06/2024"
    },
    {
        id:2,
        status:'approved',
        date:"03/06/2024"
    },
    {
        id:3,
        status:'rejected',
        date:"04/06/2024"
    },
    {
        id:4,
        status:'pending',
        date:"01/06/2024"
    }
    
]