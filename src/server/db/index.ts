import * as mysql from 'mysql';
import { mysqlResponse } from '../../../types';
import { sqlConfig } from '../config';

const pool = mysql.createPool(sqlConfig);

export const Query = <T = mysqlResponse>(queryString: string, values?: any) => {
    return new Promise <T> ((resolve, reject) => {
        pool.query(queryString, values, (error, results) => {
            error ? reject(error) : resolve(results);
        })
    })
}