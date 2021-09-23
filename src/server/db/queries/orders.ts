import { StringLiteralLike } from "typescript";
import { Query } from "..";
import { drinks, food, mysqlResponse, orders } from "../../../../types";

const get_orders = () => Query<orders[]>('SELECT * FROM Orders ORDER BY created_at ASC');
const get_1_order = (id: string) => Query<orders[]>('SELECT * FROM Orders WHERE id = ?', [id]);
const post_order = (newOrderObject: {id: string, first_name: string, price: number,  drink_id: number, food_id: number, food_type: string, drink_type: string } ) => Query('INSERT INTO Orders SET ?', [newOrderObject]);
const edit_order = (updatedOrder: {first_name: string, price: number,  drink_id: number, food_id: number, food_type: string, drink_type: string}, id: string) => Query('UPDATE Orders SET ? WHERE id=?', [updatedOrder, id]);
const delete_order = (id: string) => Query('DELETE FROM Orders WHERE id = ?', [id]);

const get_drinks = () => Query<orders[]>('SELECT * FROM Drinks');
const get_1_drink = (id: string, drink_type?: string) => Query<drinks[]>('SELECT * FROM Drinks WHERE id=?',[id, drink_type]);
const get_food = () => Query<orders[]>('SELECT * FROM Food');
const get_1_food = (id: string, food_type?: string) => Query<food[]>('SELECT * FROM Food WHERE id=?', [id, food_type]);



export default {
    get_orders,
    get_1_order,
    post_order,
    edit_order,
    delete_order,
    get_drinks,
    get_food,
    get_1_drink,
    get_1_food
}