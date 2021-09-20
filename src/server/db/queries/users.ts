import { Query } from "..";
import { mysqlResponse, users } from "../../../../types";

const find = (column: string, value: string)  => Query<users[]>('SELECT * FROM Users WHERE ?? = ?', [column, value]);
const insert = () => Query<mysqlResponse>('');

export default {
    find,
    insert
}