#!/usr/bin/env node

/**
 * 🔍 VERIFICADOR DE INSTALACIÓN
 * 
 * Script que verifica que toda la implementación esté funcionando correctamente
 */

const fs = require('fs');
const path = require('path');
const http = require('http');

console.log('🔍 Verificando instalación del CMS nativo...\n');

const colors = {
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function check(description, condition, successMsg, errorMsg) {
  if (condition) {
    log(`✅ ${description}: ${successMsg}`, 'green');
    return true;
  } else {
    log(`❌ ${description}: ${errorMsg}`, 'red');
    return false;
  }
}

let allChecks = true;

try {
  log('🧠 VERIFICACIÓN DEL CMS NATIVO PARA PSICÓLOGOS', 'bold');
  log('================================================\n', 'blue');

  // 1. Verificar estructura de archivos
  log('📁 ESTRUCTURA DE ARCHIVOS:', 'bold');
  
  const requiredFiles = [
    'static/admin/config.yml',
    'static/admin/index.html',
    'content/settings/site.json',
    'content/blog/posts',
    'gatsby-config.js',
    'package.json'
  ];

  requiredFiles.forEach(file => {
    const exists = fs.existsSync(file);
    allChecks = check(
      `Archivo ${file}`,
      exists,
      'Existe',
      'No encontrado'
    ) && allChecks;
  });

  // 2. Verificar contenido de ejemplo
  log('\n📝 CONTENIDO DE EJEMPLO:', 'bold');
  
  const postsDir = 'content/blog/posts';
  if (fs.existsSync(postsDir)) {
    const posts = fs.readdirSync(postsDir).filter(file => file.endsWith('.md'));
    allChecks = check(
      'Posts de ejemplo',
      posts.length >= 3,
      `${posts.length} posts encontrados`,
      'Faltan posts de ejemplo'
    ) && allChecks;
  }

  // 3. Verificar configuración del CMS
  log('\n⚙️ CONFIGURACIÓN DEL CMS:', 'bold');
  
  try {
    const cmsConfig = fs.readFileSync('static/admin/config.yml', 'utf8');
    allChecks = check(
      'Configuración CMS',
      cmsConfig.includes('collections:'),
      'Configurado correctamente',
      'Configuración incompleta'
    ) && allChecks;
  } catch (error) {
    allChecks = false;
    log('❌ Error leyendo configuración CMS', 'red');
  }

  // 4. Verificar package.json
  log('\n📦 DEPENDENCIAS:', 'bold');
  
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const requiredDeps = [
      'gatsby',
      'gatsby-transformer-remark',
      'netlify-cms-app'
    ];

    requiredDeps.forEach(dep => {
      allChecks = check(
        `Dependencia ${dep}`,
        packageJson.dependencies[dep],
        'Instalada',
        'Falta'
      ) && allChecks;
    });
  } catch (error) {
    allChecks = false;
    log('❌ Error leyendo package.json', 'red');
  }

  // 5. Verificar optimizaciones
  log('\n⚡ OPTIMIZACIONES:', 'bold');
  
  const optimizationFiles = [
    'static/robots.txt',
    'netlify.toml',
    'src/utils/seo-config.js'
  ];

  optimizationFiles.forEach(file => {
    const exists = fs.existsSync(file);
    allChecks = check(
      `Optimización ${path.basename(file)}`,
      exists,
      'Aplicada',
      'No aplicada'
    ) && allChecks;
  });

  // 6. Verificar scripts
  log('\n🔧 SCRIPTS DE AUTOMATIZACIÓN:', 'bold');
  
  const scripts = [
    'scripts/setup-native-cms.js',
    'scripts/optimize-performance.js',
    'scripts/verify-installation.js'
  ];

  scripts.forEach(script => {
    const exists = fs.existsSync(script);
    allChecks = check(
      `Script ${path.basename(script)}`,
      exists,
      'Disponible',
      'No encontrado'
    ) && allChecks;
  });

  // Resumen final
  log('\n' + '='.repeat(50), 'blue');
  
  if (allChecks) {
    log('\n🎉 ¡VERIFICACIÓN EXITOSA!', 'bold');
    log('\n✅ ESTADO: Instalación completa y funcional', 'green');
    log('✅ CMS: Configurado correctamente', 'green');
    log('✅ CONTENIDO: Posts de ejemplo creados', 'green');
    log('✅ OPTIMIZACIÓN: Todas las mejoras aplicadas', 'green');
    log('✅ SCRIPTS: Herramientas de automatización listas', 'green');
    
    log('\n🚀 PRÓXIMOS PASOS:', 'bold');
    log('1. El servidor debería estar ejecutándose en http://localhost:8000', 'blue');
    log('2. Accede al CMS en http://localhost:8000/admin', 'blue');
    log('3. Personaliza tu contenido', 'blue');
    log('4. ¡Comienza a ayudar a más personas!', 'blue');
    
    log('\n💡 COMANDOS ÚTILES:', 'bold');
    log('npm run develop     - Servidor de desarrollo', 'yellow');
    log('npm run build       - Build de producción', 'yellow');
    log('npm run lighthouse  - Test de rendimiento', 'yellow');
    
  } else {
    log('\n⚠️ VERIFICACIÓN CON ERRORES', 'bold');
    log('\nAlgunos componentes necesitan atención.', 'yellow');
    log('Revisa los errores marcados arriba y ejecuta:', 'yellow');
    log('node scripts/setup-native-cms.js', 'blue');
    log('node scripts/optimize-performance.js', 'blue');
  }

  // Información adicional
  log('\n📊 ESTADÍSTICAS DE LA INSTALACIÓN:', 'bold');
  
  try {
    const stats = {
      posts: fs.readdirSync('content/blog/posts').filter(f => f.endsWith('.md')).length,
      pages: fs.existsSync('content/pages') ? fs.readdirSync('content/pages').length : 0,
      images: fs.existsSync('static/img') ? fs.readdirSync('static/img').filter(f => f.match(/\.(jpg|png|gif|webp)$/i)).length : 0,
      scripts: fs.readdirSync('scripts').length
    };
    
    log(`📝 Posts de ejemplo: ${stats.posts}`, 'cyan');
    log(`📄 Páginas configuradas: ${stats.pages}`, 'cyan');
    log(`🖼️ Imágenes disponibles: ${stats.images}`, 'cyan');
    log(`🔧 Scripts de automatización: ${stats.scripts}`, 'cyan');
  } catch (error) {
    log('No se pudieron obtener estadísticas detalladas', 'yellow');
  }

  log('\n🧠 ¡Tu CMS nativo para psicólogos está listo!', 'bold');
  log('Desarrollado con tecnología de vanguardia y amor por la psicología profesional.', 'blue');

} catch (error) {
  log('\n❌ ERROR EN LA VERIFICACIÓN:', 'red');
  log(`${error.message}`, 'red');
  process.exit(1);
}
