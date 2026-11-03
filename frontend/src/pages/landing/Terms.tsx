export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-2xl px-5 py-16 sm:px-6 sm:py-20">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-white/50">
            Last updated: November 3, 2026
          </p>
        </div>

        <div className="mt-10 space-y-8 text-sm sm:text-base leading-relaxed text-white/80">
          <section>
            <h2 className="text-lg font-medium text-white">
              1. Acceptance of Terms
            </h2>
            <p className="mt-2">
              By accessing or using VES-AI, you agree to be bound by these Terms
              of Service. If you do not agree, do not use the service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white">
              2. Description of Service
            </h2>
            <p className="mt-2">
              VES-AI provides an AI-powered workspace for building, managing,
              and deploying intelligent applications. Features may change over
              time.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white">3. Accounts</h2>
            <p className="mt-2">
              You are responsible for maintaining the security of your account
              and for all activity that occurs under it. You must provide
              accurate information when creating an account.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white">
              4. Acceptable Use
            </h2>
            <p className="mt-2">
              You agree not to misuse the service, including but not limited to
              attempting to gain unauthorized access, distributing malware, or
              violating applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white">
              5. Intellectual Property
            </h2>
            <p className="mt-2">
              VES-AI and its original content, features, and functionality are
              owned by us and are protected by applicable intellectual property
              laws.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white">6. Termination</h2>
            <p className="mt-2">
              We may suspend or terminate your access to the service at any
              time, with or without cause, and with or without notice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white">7. Disclaimer</h2>
            <p className="mt-2">
              The service is provided “as is” without warranties of any kind. We
              do not guarantee uninterrupted or error-free operation.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white">8. Contact</h2>
            <p className="mt-2">
              Questions about these Terms can be sent to{" "}
              <a
                href="mailto:judeokechukwu@outlook.com"
                className="underline hover:text-white"
              >
                judeokechukwu@outlook.com
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/login"
            className="text-sm text-white/50 hover:text-white underline"
          >
            ← Back to sign in
          </a>
        </div>
      </div>
    </div>
  );
}
