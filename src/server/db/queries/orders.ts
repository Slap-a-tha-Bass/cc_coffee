import { Query } from "..";
import { mysqlResponse, orders } from "../../../../types";

const get_orders = () => Query<orders[]>('SELECT * FROM Orders ORDER BY created_at ASC');
const get_1_order = (id: string) => Query<orders[]>('SELECT * FROM Orders WHERE id = ?', [id]);
const post_order = (newOrderObject: orders) => Query('INSERT INTO Orders SET ?', [newOrderObject]);
const edit_order = (updatedOrder: orders, id: string) => Query('UPDATE Orders SET ? WHERE id=?', [updatedOrder, id]);
const delete_order = (id: string) => Query('DELETE FROM Orders WHERE id = ?', [id]);

const get_drinks = () => Query<orders[]>('SELECT * FROM Drinks');
const get_food = () => Query<orders[]>('SELECT * FROM Food');



export default {
    get_orders,
    get_1_order,
    post_order,
    edit_order,
    delete_order,
    get_drinks,
    get_food
}