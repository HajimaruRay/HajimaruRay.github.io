import { useNavigate } from 'react-router-dom'

export function HomePage() {
  const navigate = useNavigate()

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-12 sm:px-8" data-testid="home-page">
      <section className="mx-auto max-w-4xl py-12 text-center sm:py-20" data-testid="home-hero">
        <h1 className="m-0 font-display text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-ink sm:text-7xl lg:text-8xl" data-testid="home-heading">
          I&apos;m Chonlatree <br data-testid="home-heading-break" /> Ketkorwoing
        </h1>
        <h3 className="mx-auto mt-7 max-w-2xl text-lg font-medium leading-relaxed text-muted sm:text-2xl" data-testid="home-subheading">Computer Science student, Silpakorn University, 4th year</h3>
        <button type="button" className="mt-8 cursor-pointer rounded-md border border-ink bg-ink px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-slate-700" onClick={() => navigate('/profile')} data-testid="home-profile-button">
          View Profile!
        </button>
      </section>

      <section className="mx-auto max-w-5xl pt-4 text-center" data-testid="home-games-section">
        <hr className="my-8 h-1.5 border-0 bg-ink" data-testid="home-games-divider" />
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink" data-testid="home-games-heading">Games Development</h2>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2" data-testid="home-games-grid">
          <div className="text-center" data-testid="home-games-card-monophobia">
            <a href="https://hajimaruray.itch.io/monophobia" target="_blank" rel="noreferrer" data-testid="home-games-link-monophobia">
              <img className="mx-auto aspect-square w-48 rounded-xl object-cover shadow-xl shadow-slate-900/10 transition-transform hover:-translate-y-1" src="/Photo/icon/Monophobia_Games.png" alt="Monophobia" data-testid="home-games-image-monophobia" />
            </a>
            <h3 className="mt-4 font-display text-lg font-semibold text-ink" data-testid="home-games-title-monophobia">MONOPHOBIA_DEMO</h3>
          </div>
          <div className="text-center" data-testid="home-games-card-pacman">
            <a href="https://hajimaruray.itch.io/pacman-3d" target="_blank" rel="noreferrer" data-testid="home-games-link-pacman">
              <img className="mx-auto aspect-square w-48 rounded-xl object-cover shadow-xl shadow-slate-900/10 transition-transform hover:-translate-y-1" src="/Photo/icon/FOR EDUCATION.png" alt="PacMan" data-testid="home-games-image-pacman" />
            </a>
            <h3 className="mt-4 font-display text-lg font-semibold text-ink" data-testid="home-games-title-pacman">PACMAN 3D</h3>
          </div>
        </div>
      </section>
    </main>
  )
}
