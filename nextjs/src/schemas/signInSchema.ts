import {z} from "zod";


export const singnInSchema = z.object({
    identifeir:z.string(),
    password:z.string(),
})