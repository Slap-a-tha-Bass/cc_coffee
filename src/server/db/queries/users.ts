import { Query } from "..";
import { mysqlResponse, users } from "../../../../types";

const get_users = () => Query('SELECT * FROM Users');
const find = (column: string, value: string)  => Query<users[]>('SELECT * FROM Users WHERE ?? = ?', [column, value]);
const insert = (newUser: {email: string, password: string }) => Query<mysqlResponse>('INSERT INTO Users Set ?', newUser);

export default {
    get_users,
    find,
    insert
}