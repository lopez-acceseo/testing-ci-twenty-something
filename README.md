<div align="center">
    <a href="https://www.acceseo.com">
        <img
            alt="acceseo logo"
            src="logo-acceseo.svg"
            width="150">
    </a>
</div>
</br>
<h1 align="center">Twenty Something</h1>

Child theme utilizado para el desarrollo a medida en WordPress.


## Prerequisitos
Tener WordPress operativo en un directorio, con el tema <a href="https://es.wordpress.org/themes/twentytwentyfive/" target="_blank">twentytwentyfive</a>

## Instrucciones de uso
1. Copiar el directorio twenty-something a la carpeta themes.
2. Ejecutar la instalacion de las dependencias con `npm install`.
    1. En caso de utilizar [acceseo/PHP-WebApp-Docker-Compose](https://github.com/acceseo/PHP-WebApp-Docker-Compose) ejecutar `docker compose run --rm node.local npm --prefix /app/wp-content/themes/twenty-something install`.
3. Revisar la configuración necesaria dentro del archivo theme.json donde se definirán las características del proyecto: colores, fuentes, etc...

# Notas
- Fuente por defecto: Roboto, variante Regular. Si se quiere añadir más, completar las diferentes variaciones de las fuentes necesarias.
- En el documento theme.json los bloques utilizarán la fuente anterior como fuente por defecto `"fontFamily": "var(--wp--preset--font-family--roboto)"`. Para declarar cualquier otro tipo de fuente <a href="https://fullsiteediting.com/lessons/theme-json-typography-options/#h-using-a-custom-web-font" target="_blank">revisar la documentación de FSE</a>
- Paleta de colores inicial del proyecto: blanco y negro.

# CI/CD
Este repositorio incluye workflows de GitHub Actions para:

## Build de Assets
- **Workflow**: `.github/workflows/build-assets.yml`
- Se ejecuta en push y pull requests a `main` y `develop`
- Compila assets JS y CSS
- Valida que los builds se generen correctamente
- Prueba con Node.js 18.x y 20.x

## Releases Automáticas
- **Workflow**: `.github/workflows/release.yml`
- Se ejecuta al crear tags con formato `v*.*.*` (ej: `v1.25.0`)
- Compila assets y crea un ZIP con el tema listo para producción
- Genera release en GitHub con el archivo ZIP adjunto

### Crear un release:
```bash
git tag v1.25.1
git push origin v1.25.1
```

## Code Quality
- **Workflow**: `.github/workflows/code-quality.yml`
- Valida código en busca de problemas comunes
- Añade ESLint y Stylelint descomentando las secciones correspondientes

# Referencias
- Documento de normalizado de css obtenido de github.com/jgthms/minireset.css
- ITCSS: https://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528, https://github.com/aarongarciah/itcss-sample/blob/master/src/scss/main.scss
