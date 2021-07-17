# Kitchen-Store

Una simple aplicación hecha con Node.js(Koa) y React que está conectada con Shopify. Esta lista el catálogo de productos de una base de datos.

## Instalación

Clonar el repositorio:

```sh
$ git clone https://github.com/romedu/kitchen-store.git
```

Instalar las dependencias:

```sh
$ cd kitchen-store
$ npm install
```

## Requerimientos

Antes de proceder a la ejecución del proyecto es necesario tener en cuenta que para poder correrlo hay que tener una [cuenta de Shopify](https://partners.shopify.com/signup) y una [tienda de desarrollo](https://help.shopify.com/en/partners/dashboard/development-stores#create-a-development-store), asi como tambien las credenciales del API de Shopify encontradas en la [misma](https://help.shopify.com/en/api/tools/partner-dashboard/your-apps#create-a-new-app).

**Nota:** En caso de utilizar una tienda ya existente ignorar este paso.

Otro requerimiento es tener [Node.js](https://nodejs.org), preferiblemente de la versión 10.x.x en adelante.

## Correr el proyecto

Setear las variables de entorno en un archivo .env:

```sh
SHOPIFY_API_KEY="YOUR_SHOPIFY_API_KEY"
SHOPIFY_API_SECRET="YOUR_SHOPIFY_SECRET"
HOST="YOUR_TUNNEL_URL"
SHOP="my-shop-name.myshopify.com"
SCOPES=read_products
DB_URL="YOUR_DATABASE_URL"
```

**Nota:** Se puede usar el archivo .env.example como referencia

Crear el build con el siguiente comando:

```sh
$ npm run build
```

Correr el proyect con el siguiente comando:

```sh
$ npm start
```

## Pasos para poder utilizar la aplicación

1. Entrar al portal del administrador de la tienda
2. En el menu de la izquierda, dar click en la opción de Apps
3. Elegir y dar click en la aplicación que se desea ejecutar

## Extras

En cuanto a los principios de código limpio y patrones de diseños aplicados, podemos destacar los siguientes:

- Todos los módulos dentro de la carpeta `server` y `pages`, implementan el [Module Pattern](https://en.wikipedia.org/wiki/Module_pattern).

- El hook `useFetch` de la carpeta `pages` se crea con el fin de aplicar el principio de [Dependency inversion](https://en.wikipedia.org/wiki/Dependency_inversion_principle) y se realiza mediante la implementación del [Adapter Pattern](https://en.wikipedia.org/wiki/Adapter_pattern).

## Licencia

Este repositorio está disponible como open source de acuerdo a la licencia [MIT License](https://opensource.org/licenses/MIT).
