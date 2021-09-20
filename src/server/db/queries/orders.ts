import { Query } from "..";
import { mysqlResponse, orders } from "../../../../types";

const get_orders = () => Query<orders[]>('SELECT * FROM Orders ORDER BY created_at ASC');
const get_1_order = (id: string) => Query<orders[]>('SELECT * FROM Orders WHERE id = ?', [id]);
const post_order = (newOrderObject: orders) => Query('INSERT INTO Orders SET ?', [newOrderObject]);

export default {
    get_orders,
    get_1_order,
    post_order
}