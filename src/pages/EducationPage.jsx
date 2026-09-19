export function EducationPage() {
  return (
    <main className="page-shell education-page" data-testid="education-page">
      <div className="education-layout" data-testid="education-layout">
        <img className="profile-photo" src="/Photo/icon/Profile_Picture.jpg" alt="Profile Photo" data-testid="education-profile-photo" />

        <div className="education-content" data-testid="education-content">
          <div className="education-item" data-testid="education-primary">
            <h3 data-testid="education-primary-heading">Primary School</h3>
            <span data-testid="education-primary-label">at</span>
            <a href="https://www.facebook.com/MarieWittayaMWN/" target="_blank" rel="noreferrer" data-testid="education-primary-link">Marie Wittaya Nonthaburi School</a>
            <p data-testid="education-primary-period">2010 - 2016</p>
          </div>

          <hr data-testid="education-primary-divider" />

          <div className="education-item" data-testid="education-secondary">
            <h3 data-testid="education-secondary-heading">Secondary School</h3>
            <span data-testid="education-secondary-label">at</span>
            <a href="https://tpn.ac.th/home-2/" target="_blank" rel="noreferrer" data-testid="education-secondary-link">Tramudom Scksa Pattanakarn Nonthaburi School</a>
            <p data-testid="education-secondary-period">2016 - 2022</p>
          </div>

          <hr data-testid="education-secondary-divider" />

          <div className="education-item" data-testid="education-bachelor">
            <h3 data-testid="education-bachelor-heading">Bachelor&apos;s degree</h3>
            <span data-testid="education-bachelor-label">at</span>
            <a href="https://www.su.ac.th/th/index.php" target="_blank" rel="noreferrer" data-testid="education-bachelor-link">Silpakorn University</a>
            <p data-testid="education-bachelor-major">Faculty of Sciance || Computer Sciance Major</p>
            <p data-testid="education-bachelor-period">2023 - Present</p>
          </div>
        </div>
      </div>
    </main>
  )
}
