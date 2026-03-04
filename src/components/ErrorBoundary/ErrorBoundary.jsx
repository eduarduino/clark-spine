import { Component } from 'react'

/**
 * Top-level React Error Boundary.
 *
 * - Catches any uncaught render / child-component error.
 * - Shows a generic, non-revealing message to the user (OWASP: hide impl details).
 * - In development, logs the full error to the console for debugging.
 * - In production, this is where you'd send the error to a monitoring service
 *   such as Sentry, Datadog, or LogRocket — never expose the raw stack to users.
 */
export default class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    if (import.meta.env.DEV) {
      // Safe to log in dev — never reaches the end user
      console.error('[ErrorBoundary] Uncaught error:', error, info.componentStack)
    }
    // TODO (production): send to error monitoring service
    // e.g. Sentry.captureException(error, { extra: info })
  }

  handleReset = () => {
    this.setState({ hasError: false })
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      return (
        <main
          role="main"
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
              fontSize: '2.25rem',
              color: 'var(--navy)',
            }}
          >
            Something went wrong
          </h1>
          <p
            style={{
              color: 'var(--text-light)',
              fontSize: '1rem',
              maxWidth: '460px',
              lineHeight: 1.7,
            }}
          >
            We&rsquo;re sorry&nbsp;&mdash; an unexpected error occurred. Please try
            returning to the homepage or call us directly.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              className="btn btn-primary"
              onClick={this.handleReset}
            >
              Go to Homepage
            </button>
            <a href="tel:9084979440" className="btn btn-outline">
              (908) 497-9440
            </a>
          </div>
        </main>
      )
    }

    return this.props.children
  }
}
