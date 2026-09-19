const portfolioSections = [
  {
    title: 'Professional Summary',
    content: [
      'Computer Science student with experience as a Manual Software Tester, responsible for designing and creating test cases, executing test scenarios, recording test results, and preparing detailed bug reports. Experienced in working within an Agile environment and collaborating closely with developers and team members to ensure software quality and support issue resolution.',
      'Hands-on experience in testing internal web-based systems, including an Employee Medical Benefits System and an Employee Performance Evaluation System. Performed manual UI testing for web applications on both desktop environments and responsive layouts to ensure correct functionality and consistent user experience across different screen sizes.',
      'Additionally, gained basic experience in API testing using Postman to verify request and response behavior.',
      'Currently expanding skills in test automation, including designing Smoke Test, Regression Test, and Service-level test scenarios, as well as developing automated test scripts using Playwright. Possess fundamental knowledge of software testing concepts and practices.',
    ],
  },
  {
    title: 'Internship Experience',
    content: [
      'Software Tester (Intern) – Move Plus Co., Ltd. (Oct 2025 – Present)',
      '• Designed and executed manual test cases based on system requirements',
      '• Performed functional and regression testing on web applications',
      '• Reported bugs and tracked issues using testing and documentation tools',
      '• Collaborated with developers to verify and re-test bug fixes',
      '• Prepared test reports and test documentation',
    ],
  },
  {
    title: 'Manual Testing Experience',
    content: [
      'Manual Testing Experience',
      '• Performed manual testing for internal Web Applications, including:',
      '• Employee Medical Benefits Management System',
      '• Employee Performance Evaluation System',
      'Testing Activities',
      '• Designed and created detailed Test Cases based on requirements and user workflows',
      '• Executed test cases and recorded test results systematically',
      '• Conducted UI Testing by validating the application against design prototypes',
      '• Performed Responsive Testing across different screen sizes and devices',
      '• Tracked test execution progress and maintained Test Result Reports',
      'Defect Management',
      '• Identified and reported defects using a structured Bug Report',
      '• Assigned appropriate Severity and Priority levels based on impact',
      '• Provided clear reproduction steps, expected results, and actual results',
      'Process & Collaboration',
      '• Worked in an Agile environment (Scrum)',
      '• Collaborated with Developers and team members to clarify issues and verify fixes',
    ],
  },
  {
    title: 'Automation Testing Experience',
    content: [
      'Automation Testing Experience',
      '• Developed automated test scripts for End-to-End (E2E) Regression Testing (personal practice project – work in progress)',
      '• Implemented Smoke Test automation for the SauceDemo web application',
      '• Designed test scenarios based on functional workflows and critical user paths',
      '• Executed automated tests to validate core system functionality',
      'Tools & Technologies',
      '• Playwright (TypeScript)',
      '• Git for version control',
      '• GitLab for repository management',
      'CI/CD',
      '• Configured and tested basic GitLab CI/CD pipeline',
      '• Executed automated test scripts through CI to support continuous testing',
      'Code Repository',
      'SaucedemoAutomateTest Github: Link!',
      'Web Profile Github: Link!',
    ],
  },
]

export function PortfolioPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-12 sm:px-8" data-testid="portfolio-page">
      <section className="pb-10 pt-2 text-center" data-testid="portfolio-cover">
        <img className="mx-auto mb-5 h-36 w-36 rounded-2xl border-2 border-ink object-cover shadow-lg" src="/Photo/icon/Profile_Picture.jpg" alt="Profile Photo" data-testid="portfolio-profile-photo" />
        <h1 className="m-0 font-display text-4xl font-semibold tracking-tight text-ink sm:text-6xl" data-testid="portfolio-heading">Chonlatree Ketkorwoing</h1>
        <p className="mt-3 text-lg text-muted" data-testid="portfolio-subheading">Software Test Engineer | Manual QA | Automation</p>
        <div className="mt-4" data-testid="portfolio-contact-links">
          <a href="mailto:chonlareeketkorwoingwork@gmail.com" data-testid="portfolio-email-link">[Email]</a>
          <span data-testid="portfolio-contact-separator"> | </span>
          <a href="https://github.com/HajimaruRay" data-testid="portfolio-github-link">[Github]</a>
        </div>
      </section>

      {portfolioSections.map((section) => (
        <section key={section.title} className="mx-auto mb-6 max-w-5xl rounded-xl border border-line/70 bg-white p-6 shadow-sm sm:p-8" data-testid={`portfolio-section-${section.title.toLowerCase().replaceAll(' ', '-')}`}>
          <h2 className="m-0 font-display text-2xl font-semibold text-ink" data-testid={`portfolio-section-heading-${section.title.toLowerCase().replaceAll(' ', '-')}`}>{section.title}</h2>
          <div className="mt-5 flex flex-col gap-2" data-testid={`portfolio-section-content-${section.title.toLowerCase().replaceAll(' ', '-')}`}>
            {section.content.map((item, index) => (
              <p className="m-0 leading-relaxed text-muted" key={`${section.title}-${index}`} data-testid={`portfolio-item-${section.title.toLowerCase().replaceAll(' ', '-')}-${index}`}>{item}</p>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}
