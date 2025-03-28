# YoApp

**YoApp** es un proyecto desarrollado para el **Mobility Hackathon 2025** del estado de Aguascalientes. Este proyecto se enfoca en la **Vertical 3: Logística y Comunicación**, específicamente en los **Ejes 8 y 9**.

La aplicación tiene como objetivo mejorar la experiencia de los usuarios del transporte público mediante dos funcionalidades principales:

1. **Ubicación en tiempo real**: Mostrar la ubicación en tiempo real de los transportes que porten un dispositivo de rastreo.
2. **Pago digital**: Ofrecer una alternativa para el pago del transporte mediante una tarjeta digital recargable con tarjeta de débito, eliminando las molestias asociadas con las tarjetas físicas.

## **Índice**

- [YoApp](#yoapp)
- [Características principales](#características-principales)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Requisitos previos](#requisitos-previos)
- [Instalación y configuración](#instalación-y-configuración)
- [Despliegue en Azure](#despliegue-en-azure)
- [Pruebas](#pruebas)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)
- [Contacto](#contacto)

---

## **Características principales**

- **Ubicación en tiempo real**: Los usuarios pueden visualizar en un mapa la ubicación de los transportes en tiempo real.
- **Tarjeta digital**: Una solución para realizar pagos de transporte sin necesidad de una tarjeta física.
- **Recarga directa**: Recarga de saldo mediante tarjetas de débito o crédito.

---

## **Estructura del proyecto**

El proyecto está dividido en dos partes principales:

### **1. API**

- Ubicación: `Api/`
- **Tecnologías**:
  - Node.js
  - Express
  - MongoDB
- **Descripción**: Proporciona los endpoints necesarios para manejar la lógica del backend, como la gestión de usuarios, la ubicación de los transportes y las transacciones de recarga.

### **2. Aplicación móvil**

- Ubicación: `App/`
- **Tecnologías**:
  - React Native
  - Expo
- **Descripción**: La aplicación móvil permite a los usuarios interactuar con el sistema, visualizar la ubicación de los transportes y gestionar su tarjeta digital.

---

## **Requisitos previos**

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [Docker](https://www.docker.com/) y [Docker Compose](https://docs.docker.com/compose/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli) (opcional, para despliegue en Azure)

---

## **Instalación y configuración**

### **1. Clonar el repositorio**

```bash
git clone https://github.com/tu-usuario/yoapp.git
cd yoapp
```

### **2. Configurar la API**

```bash
cd Api
```

### **3. Crea un archivo .env con las siguientes variables:**

```bash
MONGO_URI=mongodb://localhost:27017/yoapp
JWT_SECRET=tu_secreto
JWT_ISSUER=yoapp
JWT_AUDIENCE=yoapp
```

### **4. Instalar las dependencias:**

```bash
npm install
```

### **5. Iniciar la API:**

```bash
npm start
```

### **6. Configurar la aplicación móvil**

```bash
cd App
```

### **7. Instalar las dependencias:**

```bash
npm install
```

### **8. Iniciar la aplicación móvil:**

```bash
npm start
```

### **9. Abrir la aplicación en un emulador o dispositivo físico:**

```bash
expo start
```

## **Despliegue en Azure**

Para desplegar la API en Azure, asegúrate de tener configurado tu entorno de Azure y sigue estos pasos:

```bash
az login
az group create --name yoapp-group --location eastus
az appservice plan create --name yoapp-plan --resource-group yoapp-group --sku B1 --is-linux
az webapp create --name yoapp-api --resource-group yoapp-group --plan yoapp-plan --runtime "NODE|18-lts"
```

### **Contribuciones**

Si deseas contribuir al proyecto, por favor sigue estos pasos:

- Haz un fork del repositorio.
- Crea una rama para tu funcionalidad (git checkout -b feature/nueva-funcionalidad).
- Realiza tus cambios y haz un commit (git commit -m 'Agrega nueva funcionalidad').
- Haz un push a tu rama (git push origin feature/nueva-funcionalidad).
- Abre un Pull Request.

### **Licencia**

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

### **Contacto**

Si tienes preguntas o sugerencias, no dudes en contactarnos:

Equipo YoApp
Hackathon Mobility 2025
