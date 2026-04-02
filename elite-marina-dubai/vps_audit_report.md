# Auditoría y Plan de Optimización de VPS - 62.84.189.155

Tras realizar la auditoría técnica como Ingeniero de Sistemas Senior, he detectado varios puntos críticos que afectan el rendimiento y la estabilidad de tu servidor.

## 1. Hallazgos Principales

### 🚀 Rendimiento de Aplicación y Memoria
- **Cuello de Botella en PHP-FPM**: Tienes **8 sitios activos** usando PHP 8.3, pero la configuración solo permite **5 procesos simultáneos** (`max_children = 5`). Esto provoca que la web se ponga lenta o de errores de "puerta de enlace" cuando hay varias visitas.
- **Sin Memoria Swap**: El servidor tiene 8GB de RAM física pero **0GB de Swap**. Si la RAM se llena (por procesos pesados como n8n), el sistema podría colapsar.
- **Procesos Pesados**: El proceso Node.js (`dist/main`) está consumiendo **1.4GB de RAM** de forma constante.
- **Procesos Zombie**: Se detectó un proceso zombie (`[node] <defunct>`) que está ocupando un espacio en la tabla de procesos innecesariamente.

### 💾 Almacenamiento y Limpieza
- **Logs del Sistema Inflados**: El registro de `journald` ocupa **2.4GB**. El estándar saludable es menos de 500MB.
- **Ataques de Fuerza Bruta**: Los archivos `btmp` (intentos de login fallidos) son grandes, lo que indica ataques constantes que consumen CPU.

### 🗄️ Bases de Datos y Otros
- **MariaDB/MySQL**: No se encontró fragmentación significativa (tablas limpias).
- **Docker**: Tienes contenedores de `n8n`, `evolution-api`, `postgres` y `redis` funcionando correctamente desde hace semanas.

---

## 2. Propuesta de Optimización (Requiere Confirmación)

Sugiero realizar los siguientes cambios técnicos:

### A. Estabilidad de Memoria
1. **Crear SWAP de 2GB**: Dará un "respiro" al servidor si la RAM física llega al límite, evitando caídas.

### B. Tuning de PHP-FPM (Mejora de velocidad web)
1. **Aumentar `max_children` a 20**: Permitirá manejar mucho más tráfico simultáneo para tus 8 sitios.
2. **Ajustar servidores de reserva**: Configurar `start_servers = 5` y `max_spare_servers = 10` para respuestas más rápidas.

### C. Limpieza Profunda
1. **Vaciar logs antiguos**: Limpiar el `journal` para que solo guarde los últimos 7 días (liberando ~2GB).
2. **Limpiar Caché APT**: Ejecutar `apt-get clean` para eliminar instaladores antiguos.
3. **Mantenimiento PHP**: Reiniciar el servicio PHP-FPM para limpiar el proceso zombie.

### D. Seguridad (Opcional pero recomendado)
1. Ejecutar una limpieza de los archivos `btmp` para liberar espacio y reducir ruido en el sistema.

---

**¿Me das permiso para proceder con estas optimizaciones?** No borraré bases de datos ni archivos de tus proyectos.
