import * as bcrypt from 'bcrypt';

export const generateHash = (password: string) => {
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

export const compareHash = (password: string, hashed: string) => {
    return bcrypt.compareSync(password, hashed);
}

// console.log(generateHash('password123'));
// $2b$12$uTnY/cqkPJCS35Hcrv2FK.xqxlS2N/5aEuz20Hb3BBTsLY0K5OMTK