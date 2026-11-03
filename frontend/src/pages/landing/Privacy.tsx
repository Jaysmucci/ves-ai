export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-2xl px-5 py-16 sm:px-6 sm:py-20">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-white/50">
            Last updated: November 3, 2026
          </p>
        </div>

        <div className="mt-10 space-y-8 text-sm sm:text-base leading-relaxed text-white/80">
          <section>
            <h2 className="text-lg font-medium text-white">
              1. Information We Collect
            </h2>
            <p className="mt-2">
              We collect information you provide when creating an account (such
              as email address) and usage data to improve the service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white">
              2. How We Use Information
            </h2>
            <p className="mt-2">
              We use your information to provide and maintain the service,
              communicate with you, and improve VES-AI.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white">
              3. Sharing of Information
            </h2>
            <p className="mt-2">
              We do not sell your personal information. We may share data with
              trusted service providers who assist in operating the platform, or
              when required by law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white">4. Data Security</h2>
            <p className="mt-2">
              We implement reasonable security measures to protect your
              information. However, no method of transmission over the internet
              is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white">5. Your Rights</h2>
            <p className="mt-2">
              Depending on your location, you may have rights to access,
              correct, or delete your personal information. Contact us to
              exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white">6. Cookies</h2>
            <p className="mt-2">
              We use cookies and similar technologies to maintain sessions and
              understand how the service is used.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white">
              7. Changes to This Policy
            </h2>
            <p className="mt-2">
              We may update this Privacy Policy from time to time. Continued use
              of the service after changes constitutes acceptance of the updated
              policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white">8. Contact</h2>
            <p className="mt-2">
              For privacy-related questions, contact{" "}
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
