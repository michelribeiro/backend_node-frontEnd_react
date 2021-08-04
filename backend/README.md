

[ ] Cadastro de usuários
[ ] Autenticação de Users
[ ] Cadastro de permissões
[ ] Cadastro de Roles
[ ] Cadastro de Products
[ ] Conexão User_Roles
[ ] Conexão Permission_Roles

<h5>Type ORM</h5>

```
yarn add typeorm pg reflect-metadata
```
* [typeorm](https://typeorm.io/)
* Postgres BD

<h5>Create migration</h5>


- yarn typeorm migration:create -n CreateUsers
- yarn typeorm migration:create -n CreatePermissions
- yarn typeorm migration:create -n CreateRoles
- yarn typeorm migration:create -n CreateUsersRoles

---

<h5>Running migration</h5>

```
yarn typeorm migration:run
```

<h5>Create UUID</h5>
```
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

<h5>Security - encrypt password </h5>
```
yarn add bcryptjs
```

<h5>Generate token</h5>
```
yarn add jsonwebtoken
```

<h5>Generate hash</h5>

[http://www.md5.cz](http://www.md5.cz)


