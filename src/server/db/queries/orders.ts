import { Query } from "..";
import { mysqlResponse, orders } from "../../../../types";

const get_orders = () => Query<orders[]>('SELECT * FROM Orders ORDER BY created_at ASC');

export default {
    get_orders
}