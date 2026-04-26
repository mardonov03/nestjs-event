export const getUserInfo = `SELECT * FROM users WHERE mail = $1`;
export const addUser = `INSERT INTO users(mail, password) VALUES($1, $2) ON CONFLICT (mail) DO UPDATE SET password = EXCLUDED.password, created_at = NOW();`;
