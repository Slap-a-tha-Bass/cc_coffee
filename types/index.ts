export interface mysqlResponse {
    affectedRows: number,
    insertId: number,
    sqlMessage: string
}
export interface users {
    id: string,
    name: string,
    email: string,
    password: string,
    created_at: Date
}
export interface orders {
    id: string,
    drink_type: string,
    food_type: string,
    price: Number,
    created_at: Date,
    updated_at: Date
}