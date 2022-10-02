#Reto 3

## Realizar Api NodeJS con implementación de Swagger.

### Datos para API
Crea un un servicio Rest con NODEJS usando, este debe tener los métodos GET, POST, PUT y DELETE(lógico). La colección de datos deberá crear pacientes usando el modelo Patient, con sus respectivas validaciones.

```json
Patient
{
id: “string”,
patient: “string”,
documentType: “string”,
document: “string”,
email: “string”,
address: “string”,
dentist: “string”,
bloodType: “string”,
treatment: “string”,
price: “number”,
state:  “number”
}
````

Conectar el servicio a MongoDB Atlas, y hacer Deploy en Heroku e implementación e Swagger.

### Tecnologias :wrench:

*	VSC

![](https://code.visualstudio.com/assets/apple-touch-icon.png)


*	MongoDB

![](https://terracloudx.com/wp-content/uploads/2020/07/icono-mongo.png)

*	Heroku

![](https://dashboard.snapcraft.io/site_media/appmedia/2017/09/heroku.png)

*	Swagger.io

![](https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png)

### Autor
[@Nirsch95](https://github.com/Nirsch95) - Andrés Castro :wolf:

Resolución del reto planteado aplicando los metodos planteados y el modelo estipulado, implementado en Heroku y las validaciones en Swagger.

### Implemenado en Heroku

![image](https://user-images.githubusercontent.com/37886668/193461513-c4745c02-5c19-45e0-9f8b-d95bbac3e586.png)

### Validación en swagger

![image](https://user-images.githubusercontent.com/37886668/193461577-a3a32ccb-2415-4242-977f-fda18d10526c.png)

Se hace dentro del mismo codigo las respectivas direcciones que el swagger necesita para funcionar y validar

![image](https://user-images.githubusercontent.com/37886668/193461660-ec15959b-c2fd-441f-bdca-8339895e2216.png)

Ejemplo dentro del codigo de la correcta documentación con swagger

![image](https://user-images.githubusercontent.com/37886668/193461699-9709ba0b-66a0-417e-b1f8-9b4072f6e4c4.png)

## POST CREATE PATIENT

![image](https://user-images.githubusercontent.com/37886668/193461755-d6eb694e-b2a9-465c-9bec-3222075eb03c.png)

## GET ALL PATIENTS

![image](https://user-images.githubusercontent.com/37886668/193461802-6727f5d2-d604-4e7b-aa35-5126d8a5bfd4.png)

## GET PATIENT BY ID

![image](https://user-images.githubusercontent.com/37886668/193461861-e1d4b395-1e26-4c7f-8ef6-39507787571a.png)

## PUT UPDATE PATIENT

![image](https://user-images.githubusercontent.com/37886668/193461887-0d8040ef-2ffa-48bc-a35d-170287d56795.png)

## DELETE PATIENT

![image](https://user-images.githubusercontent.com/37886668/193461922-f30bb880-40ef-4f1c-a4e1-48976de6d4fd.png)
