#!/usr/bin/env node

/**
 * Script de inicialización para configurar Netlify Identity
 * y crear el primer usuario administrador
 */

const https = require('https');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function setupAdmin() {
  console.log('🔧 Configuración inicial de Netlify Identity\n');
  
  console.log('Para completar la configuración, necesitas:');
  console.log('1. Tener tu sitio desplegado en Netlify');
  console.log('2. Haber habilitado Netlify Identity en tu dashboard');
  console.log('3. Configurar Git Gateway en Netlify Identity\n');
  
  const siteUrl = await askQuestion('Ingresa la URL de tu sitio (ej: https://mi-sitio.netlify.app): ');
  const adminEmail = await askQuestion('Ingresa el email del administrador: ');
  
  console.log('\n📋 Pasos para completar la configuración:\n');
  
  console.log('1. Ve a tu dashboard de Netlify:');
  console.log(`   ${siteUrl.replace('https://', 'https://app.netlify.com/sites/')}/settings/identity`);
  
  console.log('\n2. En "Registration preferences", selecciona "Invite only"');
  
  console.log('\n3. En "Git Gateway", habilita el servicio');
  
  console.log('\n4. En "Identity" > "Invite users", invita al administrador:');
  console.log(`   Email: ${adminEmail}`);
  console.log('   Rol: Admin (opcional)');
  
  console.log('\n5. El administrador recibirá un email de invitación');
  
  console.log('\n6. Después del registro, podrá acceder al CMS en:');
  console.log(`   ${siteUrl}/admin/`);
  
  console.log('\n✅ Configuración completada!');
  console.log('\n📧 Proceso de acceso:');
  console.log('- URL de administración: /admin');
  console.log('- Solo usuarios invitados pueden registrarse');
  console.log('- Recuperación de contraseña disponible en el widget de login');
  console.log('- Redirección automática después del login');
  
  rl.close();
}

setupAdmin().catch(console.error);