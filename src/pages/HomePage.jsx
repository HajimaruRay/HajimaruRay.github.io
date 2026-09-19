import { useNavigate } from 'react-router-dom'

export function HomePage() {
  const navigate = useNavigate()

  return (
    <main className="page-shell" data-testid="home-page">
      <section className="home-hero" data-testid="home-hero">
        <h1 data-testid="home-heading">
          I&apos;m Chonlatree <br data-testid="home-heading-break" /> Ketkorwoing
        </h1>
        <h3 data-testid="home-subheading">Computer Science student, Silpakorn University, 3rd year</h3>
        <button type="button" className="primary-button" onClick={() => navigate('/profile')} data-testid="home-profile-button">
          View Profile!
        </button>
      </section>

      <section className="games-section" data-testid="home-games-section">
        <hr className="divider" data-testid="home-games-divider" />
        <h2 data-testid="home-games-heading">Games Development</h2>

        <div className="games-grid" data-testid="home-games-grid">
          <div className="game-card" data-testid="home-games-card-monophobia">
            <a href="https://hajimaruray.itch.io/monophobia" target="_blank" rel="noreferrer" data-testid="home-games-link-monophobia">
              <img src="/Photo/icon/Monophobia_Games.png" alt="Monophobia" data-testid="home-games-image-monophobia" />
            </a>
            <h3 data-testid="home-games-title-monophobia">MONOPHOBIA_DEMO</h3>
          </div>
          <div className="game-card" data-testid="home-games-card-pacman">
            <a href="https://hajimaruray.itch.io/pacman-3d" target="_blank" rel="noreferrer" data-testid="home-games-link-pacman">
              <img src="/Photo/icon/FOR EDUCATION.png" alt="PacMan" data-testid="home-games-image-pacman" />
            </a>
            <h3 data-testid="home-games-title-pacman">PACMAN 3D</h3>
          </div>
        </div>
      </section>
    </main>
  )
}
