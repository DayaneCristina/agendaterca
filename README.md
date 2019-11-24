# agendaterca


<h3>Desenvolvedores</h3>
<ul>
    <li>Bruno Silva Carvalho RA: 12160062</li>
    <li>Dayane Cristina RA: 12160393</li>
</ul>

<h3>Estrutura de arquivos</h3>

~~~
    agendaterca
    ├── backend/
    │   ├── src/
    │   │   ├── controllers/
    │   │   │   ├── controllerPeople/
    │   │   │   │   └── index.js
    │   │   │   └── controllerUser/
    │   │   │       └── index.js
    │   │   ├── database/
    │   │   │   └── index.js
    │   │   ├── middleware/
    │   │   │   └── index.js
    │   │   ├── models/
    │   │   │   ├── modelPeople/
    │   │   │   │   └── index.js
    │   │   │   └── modelUser/
    │   │   │       └── index.js
    │   │   ├── routes/
    │   │   │   └── index.js
    │   │   └── index.js
    │   ├── .gitignore
    │   ├── LICENSE
    │   ├── package.json
    │   ├── package-lock.json
    │   ├── .env.exemplo
    │   └── yarn.lock
    ├── Database/
    │   └── MySQL/
    │      └── agendaterca.sql
    └── backend/
        ├── src/
        │   ├── favicon.ico
        │   ├── index.html
        │   ├── logo192.png
        │   ├── logo512.png
        │   ├── manifest.json
        │   └── robots.txt
        ├── src/
        │   ├── config/
        │   │   └── index.js
        │   ├── file/
        │   │   └── img/
        │   │       ├── backgroud.jpg
        │   │       └── backgroud.png
        │   ├── pages/
        │   │   ├── cadastro/
        │   │   │   └── index.js
        │   │   ├── main/
        │   │   │   └── index.js
        │   │   ├── people/
        │   │   │   └── index.js
        │   │   ├── signin/
        │   │   │   └── index.js
        │   │   └── signup/
        │   │      └── index.js
        │   ├── services/
        │   │   └── index.js
        │   ├── index.js
        │   ├── routes.js/
        │   └── serviceWorker.js
        ├── .gitignore
        ├── LICENSE
        ├── package.json
        ├── package-lock.json
        ├── README.│md
        └── yarn.lock
~~~

<h4>Inicializando o projeto</h4>
<h5>Backend é Database</h5>
<p>Após baixar o repositorio, e necessario criar o banco com o arquivo agendaterca.sql, logo em seguida configurar as variaveis de ambiente, no diretorio: </p>

~~~
    Backend/.env.example
~~~
<p>Colocar os dados necessarios para conectar ao banco de dados que criou com o passo anterior.</p>
<p>Com as variaveis de ambiente configuradas, renomei o arquivo:</p>

~~~ 
    .env.exemple 
~~~
<p>para:</p>

~~~ 
.env 
~~~

<p>Em seguida execute os seguintes comandos</p>

~~~
    ...\agendaterca\backend> npm i
~~~

~~~
    ...\agendaterca\backend> npm start
~~~

<p>
Se tudo der certo, no cmd irá retorna a seguinte mensagem <b>Servidor on-line</b>
</p>

<h5>Frontend</h5>

<p>Com o Servidor on-line só será necessario agora executar o frontend </p>
<p>Em seguida execute os seguintes comandos:</p>

~~~
    ...\agendaterca\frontend> npm i
~~~

~~~
    ...\agendaterca\frontend> npm start
~~~


<h4>Data de desenvolvimento: 23/11/2019</h4>