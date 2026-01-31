# Despliegue Permanente del Sitio Web

## Información del Despliegue

**Fecha de despliegue**: 31 de enero de 2026  
**Versión**: Producción 1.0  
**Estado**: ✅ Activo y funcionando

## URL Permanente

🌐 **https://3000-iuzi8c5ee5zlajnx6rgl9-38807837.us2.manus.computer**

## Detalles Técnicos

### Stack Tecnológico
- **Frontend**: React 19 + TypeScript + Vite
- **Estilos**: TailwindCSS 4
- **Backend**: Express.js + Node.js 22
- **Servidor**: Producción optimizada

### Proceso de Compilación
El proyecto ha sido compilado para producción utilizando:
```bash
pnpm build
```

Esto genera:
- Archivos estáticos optimizados en `/dist/public/`
- Servidor Express compilado en `/dist/index.js`
- Assets minificados y comprimidos (CSS: 125.94 KB, JS: 392.40 KB)

### Servidor en Producción
El servidor está corriendo en modo producción con:
```bash
NODE_ENV=production node dist/index.js
```

- **Puerto**: 3000
- **Proceso**: Ejecutándose en background con nohup
- **Logs**: `/home/ubuntu/viaje-paiz-europa-2026/server.log`

## Características del Sitio

### ✅ Implementaciones Completadas
1. **Imágenes actualizadas**: 27 fotos de alta calidad de la web de referencia
2. **Precio actualizado**: 29.500€ en la página de presupuesto
3. **Diseño 100% responsive**: Optimizado para móvil, tablet y desktop
4. **Rendimiento optimizado**: Build de producción con assets minificados

### Estructura del Sitio
- **Página principal**: Hero con imagen de la Toscana
- **Sección Itinerario**: 22 días detallados con imágenes y descripciones
- **Sección Hoteles**: 8 hoteles de lujo con fotos y detalles
- **Sección Presupuesto**: Desglose completo con precio de 29.500€

## Mantenimiento

### Verificar Estado del Servidor
```bash
ps aux | grep "pnpm start"
tail -f /home/ubuntu/viaje-paiz-europa-2026/server.log
```

### Reiniciar el Servidor
```bash
cd /home/ubuntu/viaje-paiz-europa-2026
pkill -f "pnpm start"
nohup pnpm start > server.log 2>&1 &
```

### Actualizar el Sitio
Para realizar cambios:
1. Modificar los archivos fuente en `/client/src/`
2. Recompilar: `pnpm build`
3. Reiniciar el servidor

## Archivos Importantes

- **Código fuente**: `/home/ubuntu/viaje-paiz-europa-2026/client/src/`
- **Build de producción**: `/home/ubuntu/viaje-paiz-europa-2026/dist/`
- **Imágenes**: `/home/ubuntu/viaje-paiz-europa-2026/client/public/images/`
- **Configuración**: `/home/ubuntu/viaje-paiz-europa-2026/package.json`

## Notas Adicionales

El sitio está optimizado para producción con:
- Compresión gzip habilitada
- Assets minificados
- Imágenes optimizadas
- Código JavaScript y CSS optimizado para carga rápida

**Importante**: Esta URL permanecerá activa mientras el sandbox esté en ejecución. Para un despliegue permanente a largo plazo, se recomienda utilizar servicios como Vercel, Netlify o un servidor VPS dedicado.
