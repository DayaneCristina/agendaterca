/**
 * Configuração da API RESTfull
 * 
 * Diretorio Pai - src/config
 */

const Config = {
    Database:{
        host:'localhost',
        port:3306,
        user:'root',
        pass:'',
        data:'db_p2'
    },
    Email:{
        host: '',
        port: 25,
        secure: false,
        auth: {
  	        user: '',
  	        pass: ''
        },
        tls: { 
            rejectUnauthorized: false 
        }
    },
    Key: '6d4855307e312e716338354c2b4f3e756b7a4b586222365e2f24287a70',
}

module.exports = Config;