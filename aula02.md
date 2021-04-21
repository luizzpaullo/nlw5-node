# BANCO DE DADOS

## Installation

### TypeORM

### sqlite3

```JSX


> yarn add typeorm --save

> yarn add reflect-metadata --save

> yarn add sqlite3 --save

```

- criar arquivo ormconfig.json na raiz do projeto

## Migrations

- criar pasta Migrations;
- configurar package.json
- configurar ormconfig.json

```jsx
    yarn typeorm migration:create -n CreateSettings
    
```

## tsconfig.json

```json

 /* Experimental Options */
    "experimentalDecorators": true,              /* Enables experimental support for ES7 decorators. */
    "emitDecoratorMetadata": true,               /* Enables experimental support for emitting type metadata for decorators. */

```

## Adicionar Biblioteca para Gerenciar o UUID

```JSON
    yarn add uuid

    > yarn add @types/uuid -D
```

```jsx

/**
 * TIPOS DE PARAMETROS
 * 
 * Routes Params => Paramentos de Rotas
 * http://localhost:3333/settings/1
 * 
 * 
 * Query Params => Filtros e Buscas
 * http:localhost:3333/settings/1?search=algumacoisa
 * 
 * 
 * Body Params => {
 *     /JSON
 * }
 */
```
