import { StringLiteralLike } from "typescript";
import { Query } from "..";
import { drinks, food, mysqlResponse, orders } from "../../../../types";

const get_orders = () => Query<orders[]>('SELECT * FROM Orders ORDER BY created_at ASC');
const get_1_order = (id: string) => Query<orders[]>('SELECT * FROM Orders WHERE id = ?', [id]);
const post_order = (id: string, first_name: string, price: Number) => Query('INSERT INTO Orders SET ?', [id, first_name, price]);
const edit_order = (updatedOrder: orders, id: string) => Query('UPDATE Orders SET ? WHERE id=?', [updatedOrder, id]);
const delete_order = (id: string) => Query('DELETE FROM Orders WHERE id = ?', [id]);

const get_drinks = () => Query<orders[]>('SELECT * FROM Drinks');
const get_1_drink = (id: string) => Query<drinks[]>('SELECT * FROM Drinks WHERE id=?',[id]);
const get_food = () => Query<orders[]>('SELECT * FROM Food');
const get_1_food = (id: string) => Query<food[]>('SELECT * FROM Food WHERE id=?', [id]);



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