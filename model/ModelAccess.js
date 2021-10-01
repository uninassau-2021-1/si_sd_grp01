const HandleDBMSMySQL = require('../config/database/HandleDBMSMySQL');

/**
 * Esta classe é o modelo de dados
 * do projeto de webservice
 * da disciplina de SD
 * 
 */
class ModelAccess {

      /**
     * Create a point.
     * @param {number} y - The y value.
     */
  constructor() {
    this._HandleDBMSMySQL = new HandleDBMSMySQL();
  }

  destroy(param=null) {
    var varToString = varObj => Object.keys(varObj)[0];
    new Error('Parâmetros incorretos para a classe: \`%s\`, parâmetro \`%s\`', this.constructor.name, varToString({param}));
  }

  postAccess(timestamp=null, hostname=null, ip=null) {
    var _timestamp = ( typeof timestamp  !== 'string' || timestamp === null ) ? this.destroy(timestamp) : timestamp;
    var _hostname  = ( typeof hostname   !== 'string' || hostname  === null ) ? this.destroy(hostname) : hostname;
    var _ip        = ( typeof ip         !== 'string' || ip        === null ) ? this.destroy(ip) : ip;

    var table = 'access';
    var sqlInsert = `insert into projeto1.${table} values (null, '${_timestamp}', '${_hostname}', '${_ip}')`;
    return this._HandleDBMSMySQL.insert(sqlInsert);
  } 

  getAccess() {
    var sqlSelect = `select * from employees.departments where dept_no < 'd005' order by dept_no`;
    var resultsJSON = this._HandleDBMSMySQL;
    return new Promise((resolve, reject) => {
      resultsJSON.query(sqlSelect, (err, results) => {
        if(err) {
          console.log(err);
          reject(err);
        } else {
          resolve(results);
        }
      });
      this._HandleDBMSMySQL.close();
    });
  }

}

module.exports = ModelAccess;


var a = new ModelAccess