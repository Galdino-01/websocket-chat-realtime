import { v4 as uuidv4 } from 'uuid';

export const seed = async (knex) => {

    const [{ count }] = await knex('users').count('* as count');

    if (!Number.isInteger(count) || Number(count)> 0 ) return;

    const statesToInsert = {
        user_id: uuidv4(),
        user_token: 'token-teste',
        user_situation: 1,
        type: 'user'
    };

    await knex('users').insert(statesToInsert);
};
