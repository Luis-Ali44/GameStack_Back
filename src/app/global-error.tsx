"use client"; // Obligatorio para que Next.js no intente renderizar esto en el servidor

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="es">
      <body>
        <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
          <h2>¡Ups! Ocurrió un error en el servidor.</h2>
          <button 
            onClick={() => reset()}
            style={{ padding: '10px 20px', cursor: 'pointer' }}
          >
            Intentar de nuevo
          </button>
        </div>
      </body>
    </html>
  );
}