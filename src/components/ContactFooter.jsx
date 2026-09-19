export function ContactFooter() {
  return (
    <footer className="contact-footer" data-testid="contact-footer">
      <hr className="divider" data-testid="contact-divider" />
      <div className="contact-block" data-testid="contact-block">
        <p className="contact-title" data-testid="contact-title">--Contract Me--</p>
        <div className="social-links" data-testid="contact-social-links">
          <a href="https://github.com/HajimaruRay" target="_blank" rel="noreferrer" aria-label="GitHub" data-testid="contact-github-link">
            <img src="/Photo/icon/Github.png" alt="GitHub" data-testid="contact-github-image" />
          </a>
          <a href="https://www.facebook.com/hajimaruuu" target="_blank" rel="noreferrer" aria-label="Facebook" data-testid="contact-facebook-link">
            <img src="/Photo/icon/facebook.png" alt="Facebook" data-testid="contact-facebook-image" />
          </a>
        </div>
      </div>
    </footer>
  )
}
