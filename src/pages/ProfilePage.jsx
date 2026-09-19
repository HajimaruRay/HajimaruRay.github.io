export function ProfilePage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-12 sm:px-8" data-testid="profile-page">
      <div className="flex flex-col items-center gap-10 py-4 md:flex-row md:items-start md:gap-16" data-testid="profile-layout">
        <img className="h-52 w-52 shrink-0 rounded-2xl border-2 border-ink object-cover shadow-xl shadow-slate-900/10 sm:h-64 sm:w-64" src="/Photo/icon/Profile_Picture.jpg" alt="Profile Photo" data-testid="profile-photo" />

        <div className="min-w-0 flex-1" data-testid="profile-content">
          <h2 className="m-0 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl" data-testid="profile-greeting">
            Hi! <img className="inline-block h-8 w-8 align-middle" src="https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif" alt="wave" data-testid="profile-greeting-image" /> My name is Chonlatree Ketkorwoing.
          </h2>
          <hr data-testid="profile-greeting-divider" />

          <h3 className="mb-3 mt-8 font-display text-2xl font-semibold text-ink" data-testid="profile-about-heading">About Me!</h3>
          <hr data-testid="profile-about-divider" />
          <div data-testid="profile-about-content">
            <p className="my-2 text-base leading-relaxed text-muted" data-testid="profile-about-student">- Student at Silpakorn University | Computer Science | 3rd Years</p>
            <p className="my-2 text-base leading-relaxed text-muted" data-testid="profile-about-location">- 🌍 Based in Nonthaburi, Thailand</p>
            <p className="my-2 text-base leading-relaxed text-muted" data-testid="profile-about-contact">
              - ✉️ You can contract me at [
              <a href="mailto:chonlareeketkorwoingwork@gmail.com" data-testid="profile-email-link">chonlareeketkorwoingwork@gmail.com</a>
              ]
            </p>
          </div>

          <h3 className="mb-3 mt-8 font-display text-2xl font-semibold text-ink" data-testid="profile-programming-heading">Programming Languages</h3>
          <hr data-testid="profile-programming-divider" />
          <div className="flex flex-wrap gap-3 pt-2" data-testid="profile-programming-links">
            <a className="rounded-lg border border-line bg-white p-2 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md" href="https://www.java.com" target="_blank" rel="noreferrer" data-testid="profile-java-link"><img className="h-10 w-10 object-contain" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="Java" data-testid="profile-java-image" /></a>
            <a className="rounded-lg border border-line bg-white p-2 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md" href="https://docs.microsoft.com/en-us/cpp/?view=msvc-170" target="_blank" rel="noreferrer" data-testid="profile-c-link"><img className="h-10 w-10 object-contain" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/c-colored.svg" alt="C" data-testid="profile-c-image" /></a>
            <a className="rounded-lg border border-line bg-white p-2 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md" href="https://dotnet.microsoft.com/en-us/languages/csharp" target="_blank" rel="noreferrer" data-testid="profile-csharp-link"><img className="h-10 w-10 object-contain" src="/Photo/icon/c-programming-language-logo-microsoft-visual-studio-net-framework-png-favpng-WLLTMqZhSPAk9q3DTh993fZnh.jpg" alt="C#" data-testid="profile-csharp-image" /></a>
            <a className="rounded-lg border border-line bg-white p-2 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md" href="https://www.python.org" target="_blank" rel="noreferrer" data-testid="profile-python-link"><img className="h-10 w-10 object-contain" src="/Photo/icon/Python-logo-notext.svg.webp" alt="Python" data-testid="profile-python-image" /></a>
          </div>

          <h3 className="mb-3 mt-8 font-display text-2xl font-semibold text-ink" data-testid="profile-web-heading">Web Development</h3>
          <hr data-testid="profile-web-divider" />
          <div className="flex flex-wrap gap-3 pt-2" data-testid="profile-web-links">
            <a className="rounded-lg border border-line bg-white p-2 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md" href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer" data-testid="profile-css-link"><img className="h-10 w-10 object-contain" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS3" data-testid="profile-css-image" /></a>
            <a className="rounded-lg border border-line bg-white p-2 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md" href="https://www.w3schools.com/html/" target="_blank" rel="noreferrer" data-testid="profile-html-link"><img className="h-10 w-10 object-contain" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML5" data-testid="profile-html-image" /></a>
            <a className="rounded-lg border border-line bg-white p-2 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md" href="https://www.w3schools.com/js/" target="_blank" rel="noreferrer" data-testid="profile-javascript-link"><img className="h-10 w-10 object-contain" src="https://www.w3schools.com/js/img_javascript_480.jpg" alt="JavaScript" data-testid="profile-javascript-image" /></a>
            <a className="rounded-lg border border-line bg-white p-2 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md" href="https://www.php.net" target="_blank" rel="noreferrer" data-testid="profile-php-link"><img className="h-10 w-10 object-contain" src="/Photo/icon/new-php-logo.png" alt="PHP" data-testid="profile-php-image" /></a>
          </div>

          <h3 className="mb-3 mt-8 font-display text-2xl font-semibold text-ink" data-testid="profile-tools-heading">Tools</h3>
          <hr data-testid="profile-tools-divider" />
          <div className="flex flex-wrap gap-3 pt-2" data-testid="profile-tools-links">
            <a className="rounded-lg border border-line bg-white p-2 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md" href="https://code.visualstudio.com" target="_blank" rel="noreferrer" data-testid="profile-vscode-link"><img className="h-10 w-10 object-contain" src="/Photo/icon/Visual_Studio_Code_1.35_icon.svg.png" alt="VS Code" data-testid="profile-vscode-image" /></a>
            <a className="rounded-lg border border-line bg-white p-2 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md" href="https://github.com" target="_blank" rel="noreferrer" data-testid="profile-github-link"><img className="h-10 w-10 object-contain" src="/Photo/icon/Github.png" alt="GitHub" data-testid="profile-github-image" /></a>
            <a className="rounded-lg border border-line bg-white p-2 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md" href="https://unity.com/" target="_blank" rel="noreferrer" data-testid="profile-unity-link"><img className="h-10 w-10 object-contain" src="https://files.rubixdev.de/logos/unity.svg" alt="Unity" data-testid="profile-unity-image" /></a>
            <a className="rounded-lg border border-line bg-white p-2 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md" href="https://jupyter.org" target="_blank" rel="noreferrer" data-testid="profile-jupyter-link"><img className="h-10 w-10 object-contain" src="/Photo/icon/Jupyter_logo.svg.png" alt="Jupyter" data-testid="profile-jupyter-image" /></a>
            <a className="rounded-lg border border-line bg-white p-2 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md" href="https://www.cypress.io" target="_blank" rel="noreferrer" data-testid="profile-cypress-link"><img className="h-10 w-10 object-contain" src="https://iconape.com/wp-content/files/gj/370774/svg/370774.svg" alt="Cypress" data-testid="profile-cypress-image" /></a>
          </div>
        </div>
      </div>
    </main>
  )
}
