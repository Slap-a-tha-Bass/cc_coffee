import { Request } from "express";

export interface mysqlResponse {
    affectedRows: number,
    insertId: number,
    sqlMessage: string
}
export interface users {
    id?: number,
    name?: string,
    email?: string,
    password?: string,
    created_at?: Date
}
export interface ReqUsers extends Request {
    user?: users
}
export interface orders {
    id: string,
    drink_type: string,
    food_type: string,
    drink_id: string,
    food_id: string,
    price: number,
    created_at?: Date,
    updated_at?: Date,
    isPreview?: boolean,
    first_name: string
}
export interface drinks {
    id: string,
    drink_type: string,
    price: number
}
export interface food {
    id: string,
    food_type: string,
    price: number
}