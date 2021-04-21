# NLW5 node + typescript

## 

```ZSH

yarn init -y  

yarn add express

yarn add @types/express -D

yarn add typescript -D

yarn tsc --init


```

 ```JSON
 /* Strict Type-Checking Options */
    "strict": false,   

```

```ZSH

yarn add ts-node-dev -D


```

```JSON

  "scripts": {
    "dev":"ts-node-dev src/server.ts"
  },


```
> Executar com :
```JS
    yarn dev
```

