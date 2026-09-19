export function EducationPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-12 sm:px-8" data-testid="education-page">
      <div className="flex flex-col items-center gap-10 py-4 md:flex-row md:items-start md:gap-16" data-testid="education-layout">
        <img className="h-52 w-52 shrink-0 rounded-2xl border-2 border-ink object-cover shadow-xl shadow-slate-900/10 sm:h-64 sm:w-64" src="/Photo/icon/Profile_Picture.jpg" alt="Profile Photo" data-testid="education-profile-photo" />

        <div className="min-w-0 flex-1" data-testid="education-content">
          <div className="flex flex-col gap-1" data-testid="education-primary">
            <h3 className="m-0 font-display text-2xl font-semibold text-ink" data-testid="education-primary-heading">Primary School</h3>
            <span className="text-muted" data-testid="education-primary-label">at</span>
            <a className="font-medium text-ink underline decoration-accent decoration-2 underline-offset-4" href="https://www.facebook.com/MarieWittayaMWN/" target="_blank" rel="noreferrer" data-testid="education-primary-link">Marie Wittaya Nonthaburi School</a>
            <p className="text-muted" data-testid="education-primary-period">2010 - 2016</p>
          </div>

          <hr className="my-4 border-0 border-t border-line" data-testid="education-primary-divider" />

          <div className="flex flex-col gap-1" data-testid="education-secondary">
            <h3 className="m-0 font-display text-2xl font-semibold text-ink" data-testid="education-secondary-heading">Secondary School</h3>
            <span className="text-muted" data-testid="education-secondary-label">at</span>
            <a className="font-medium text-ink underline decoration-accent decoration-2 underline-offset-4" href="https://tpn.ac.th/home-2/" target="_blank" rel="noreferrer" data-testid="education-secondary-link">Tramudom Scksa Pattanakarn Nonthaburi School</a>
            <p className="text-muted" data-testid="education-secondary-period">2016 - 2022</p>
          </div>

          <hr className="my-4 border-0 border-t border-line" data-testid="education-secondary-divider" />

          <div className="flex flex-col gap-1" data-testid="education-bachelor">
            <h3 className="m-0 font-display text-2xl font-semibold text-ink" data-testid="education-bachelor-heading">Bachelor&apos;s degree</h3>
            <span className="text-muted" data-testid="education-bachelor-label">at</span>
            <a className="font-medium text-ink underline decoration-accent decoration-2 underline-offset-4" href="https://www.su.ac.th/th/index.php" target="_blank" rel="noreferrer" data-testid="education-bachelor-link">Silpakorn University</a>
            <p className="text-muted" data-testid="education-bachelor-major">Faculty of Sciance || Computer Sciance Major</p>
            <p className="text-muted" data-testid="education-bachelor-period">2023 - Present</p>
          </div>
        </div>
      </div>
    </main>
  )
}
