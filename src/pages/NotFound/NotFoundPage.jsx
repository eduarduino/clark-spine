import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main
      style={{
        paddingTop: '72px',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        textAlign: 'center',
        padding: '72px 1.5rem 4rem',
      }}
    >
      <h1
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '4rem',
          color: 'var(--navy)',
          lineHeight: 1,
        }}
      >
        404
      </h1>
      <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>
        Page not found.
      </p>
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
    </main>
  )
}
