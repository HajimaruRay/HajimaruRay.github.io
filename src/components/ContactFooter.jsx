export function ContactFooter() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-5 pb-10 text-center sm:px-8" data-testid="contact-footer">
      <hr className="my-8 h-1.5 border-0 bg-ink" data-testid="contact-divider" />
      <div className="mt-8" data-testid="contact-block">
        <p className="mb-4 font-display text-lg font-semibold text-ink" data-testid="contact-title">--Contract Me--</p>
        <div className="flex justify-center gap-4" data-testid="contact-social-links">
          <a className="rounded-full transition-transform hover:-translate-y-1" href="https://github.com/HajimaruRay" target="_blank" rel="noreferrer" aria-label="GitHub" data-testid="contact-github-link">
            <img className="h-10 w-10 rounded-full object-cover" src="/Photo/icon/Github.png" alt="GitHub" data-testid="contact-github-image" />
          </a>
          <a className="rounded-full transition-transform hover:-translate-y-1" href="https://www.facebook.com/hajimaruuu" target="_blank" rel="noreferrer" aria-label="Facebook" data-testid="contact-facebook-link">
            <img className="h-10 w-10 rounded-full object-cover" src="/Photo/icon/facebook.png" alt="Facebook" data-testid="contact-facebook-image" />
          </a>
        </div>
      </div>
    </footer>
  )
}
