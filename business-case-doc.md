**Caso de negocio**

By Async Girls

**Introducción**


**Objetivo general**

El objetivo principal de este proyecto es desarrollar una plataforma de gestión de usuarios diseñada para facilitar el registro, la gestión y la manipulación de datos de los usuarios de manera eficiente y segura. Utilizando tecnologías modernas y escalables como Node.js, Nest.js, React.js y bases de datos SQL, se construirá una solución robusta y flexible que garantice una experiencia de usuario fluida. La plataforma integrará prácticas avanzadas de seguridad, incluyendo bcrypt y JSON Web Tokens (JWT), para proteger los datos y las sesiones de usuario. La metodología de trabajo será ágil, promoviendo una colaboración efectiva, adaptabilidad a cambios y entregas incrementales de funcionalidades.

**Objetivo comercial**

Desde una perspectiva comercial, la plataforma tiene como objetivo optimizar el proceso de inscripción para reducir el tiempo y los esfuerzos requeridos, aumentando así la tasa de conversión y la satisfacción del usuario. Además, busca mejorar la experiencia del usuario mediante una interfaz intuitiva y accesible, lo que contribuirá a una mayor retención y compromiso. La automatización de tareas administrativas incrementará la eficiencia en la gestión de datos, mejorando la productividad y reduciendo errores.

**Nuestra entrega de valor**

El valor del producto reside en su capacidad para simplificar y optimizar el proceso de inscripción y gestión de datos, proporcionando una experiencia de usuario eficiente, mejorando la productividad y garantizando la seguridad de la información mediante tecnologías avanzadas.

**Público objetivo**

El público objetivo de esta plataforma incluye a **usuarios de bootcamps**, quienes buscan una experiencia de registro y gestión de datos sencilla y eficiente, y a **administradores de bootcamps**, que necesitan herramientas efectivas para gestionar inscripciones, datos y perfiles de los participantes.

**Requerimientos Funcionales**

La plataforma debe permitir la creación de cuentas mediante un formulario de registro. En caso de olvido de contraseña, se debe poder cambiar la contraseña en la plataforma. Los cambios en los datos del usuario deben actualizarse en tiempo real en la base de datos SQL y reflejarse de inmediato en la interfaz del usuario.

Los flujos de trabajo del sistema incluyen el registro de usuarios, el inicio de sesión y la recuperación de contraseña, cada uno con sus respectivos procesos de validación y notificación. Todas las transacciones y modificaciones importantes deben ser registradas para asegurar la integridad y trazabilidad de la información.

Desde una perspectiva administrativa, se debe ofrecer un panel para que los administradores gestionen usuarios, roles y permisos. La plataforma debe cumplir con protección de datos, la encriptación de datos sensibles con tecnologías con bcrypt y JWT.

En términos de desempeño, la plataforma debe asegurar tiempos de respuesta rápidos y ser escalable para manejar un aumento en usuarios y transacciones sin afectar el rendimiento. Cada pantalla, ya sea de registro, perfil de usuario o administración, debe estar diseñada para permitir la entrada, visualización y modificación de datos de manera eficiente y amigable.

**Requerimientos No Funcionales**

|   |   |
|---|---|
| **Rendimiento:**                  | __Tiempo de Respuesta:__ La plataforma debe proporcionar tiempos de respuesta rápidos.|
| **Seguridad:**                    | __Encriptación:__ Todos los datos sensibles, como contraseñas y datos personales, deben ser encriptados utilizando algoritmos de cifrado robustos como bcrypt para contraseñas. <br>     __Autenticación y Autorización:__ Utilizar JSON Web Tokens (JWT) para gestionar sesiones de usuario de manera segura.         |
| **Usabilidad:**                   | __Interfaz de Usuario:__ La interfaz debe ser intuitiva y fácil de usar, con una navegación clara y accesible para todos los tipos de usuarios.                         |
| **Mantenibilidad:**               | __Documentación y Ayuda:__ Proveer documentación en línea y guías de usuario para facilitar la comprensión y el uso de la plataforma.                       |
| **Compatibilidad:**               | __Código Limpio y Documentado:__ El código fuente debe estar bien documentado y seguir las mejores prácticas de codificación para facilitar el mantenimiento y la evolución del sistema.<br> __Navegadores:__ La plataforma debe ser compatible con los principales navegadores web.      |
| **Disponibilidad:**               | __Tiempo de Actividad:__ La plataforma debe tener una disponibilidad mínima del 99%, con un tiempo máximo de inactividad programada para mantenimiento no superior a 2 horas al mes.                     |

