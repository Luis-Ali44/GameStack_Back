export const dynamic = 'force-dynamic'; // <-- ESTA LÍNEA APAGA EL PRERENDER ESTÁTICO

export default function HomePage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>🟢 API de GameHub en línea</h1>
      <p>El servidor está funcionando correctamente.</p>
    </main>
  );
}