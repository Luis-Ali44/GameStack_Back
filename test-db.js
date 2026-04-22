const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "postgresql://postgres.bxvrrriqkscjvpgaqmvj:GameAR7730*0@aws-1-us-east-1.pooler.supabase.com:6543/postgres",
  ssl: { rejectUnauthorized: false }
});

async function testConnection() {
  try {
    console.log('🔄 Intentando conectar a la base de datos...');
    const client = await pool.connect();
    console.log('✅ Conexión exitosa!');
    
    // Probar una query simple
    const result = await client.query('SELECT NOW()');
    console.log('⏰ Hora del servidor:', result.rows[0].now);
    
    // Verificar si existe la tabla matches
    const tableCheck = await client.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'matches'
      );
    `);
    console.log('📋 Tabla "matches" existe:', tableCheck.rows[0].exists);
    
    if (tableCheck.rows[0].exists) {
      const count = await client.query('SELECT COUNT(*) FROM matches');
      console.log('📊 Total de partidas:', count.rows[0].count);
    }
    
    client.release();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error de conexión:', error.message);
    console.error('Detalles:', error);
    process.exit(1);
  }
}

testConnection();
