"use client"; // Sigue siendo obligatorio

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h2>¡Ups! Algo salió mal.</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Intentar de nuevo
      </button>
    </div>
  );
}