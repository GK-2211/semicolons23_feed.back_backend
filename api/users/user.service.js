const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into registration(firstName, lastName, email, password, company, designation) 
                values(?,?,?,?,?,?)`,
      [
        data.first_name,
        data.last_name,
        data.email,
        data.password,
        data.company,
        data.designation
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  
  getUserByUserId: (id, callBack) => {
    pool.query(
      `select * from registration where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
   );
  },
  getUsers: callBack => {
    pool.query(
      `select * from registration`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      `update registration set firstName=?, lastName=?, email=?, password=?, company=?, designation=? where id = ?`,
      [
        data.first_name,
        data.last_name,
        data.email,
        data.password,
        data.company,
        data.designation,
        data.id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(
      `delete from registration where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};
