'use client'

import Link from 'next/link'
import { Logo } from '@/components/shared/logo'
import { ArrowLeft, Shield, Eye, Database, Lock, Bell, Globe, Users, Mail } from 'lucide-react'

export default function PrivacyPolicyPage() {
  const lastUpdated = 'January 14, 2026'
  const effectiveDate = 'January 14, 2026'

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Logo size="sm" />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-10 h-10 text-indigo-400" />
            <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
          </div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, disclose, and safeguard your information.
          </p>
          <div className="mt-4 text-sm text-slate-400">
            <p>Last Updated: {lastUpdated}</p>
            <p>Effective Date: {effectiveDate}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-slate prose-lg max-w-none">

          {/* Introduction */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">1. Introduction</h2>
            </div>
            <p className="text-slate-600">
              The Prompts Library (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy informs you about how we handle your personal data when you visit our website, use our services, or purchase our products, and tells you about your privacy rights and how the law protects you.
            </p>
            <p className="text-slate-600">
              This policy applies to information we collect through our website (thepromptslibrary.com), mobile applications, and any other services or products that link to this policy (collectively, the &quot;Services&quot;). This policy applies regardless of the device you use to access our Services.
            </p>
            <p className="text-slate-600">
              By using our Services, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this policy, please do not access or use our Services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">2. Information We Collect</h2>
            </div>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">2.1 Information You Provide to Us</h3>
            <ul className="text-slate-600">
              <li><strong>Account Information:</strong> When you create an account, we collect your email address and any profile information you choose to provide.</li>
              <li><strong>Purchase Information:</strong> When you make a purchase, we collect billing information including your name, email address, and payment details. Payment processing is handled by our third-party payment processor (Gumroad), and we do not store your full payment card details.</li>
              <li><strong>Communications:</strong> When you contact us, we collect the information you provide, such as your name, email address, and the content of your message.</li>
              <li><strong>Survey Responses:</strong> If you participate in surveys, we collect the information you provide.</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">2.2 Information We Collect Automatically</h3>
            <ul className="text-slate-600">
              <li><strong>Device Information:</strong> We collect information about the device you use to access our Services, including device type, operating system, unique device identifiers, and browser type.</li>
              <li><strong>Log Data:</strong> Our servers automatically record information when you use our Services, including your IP address, access times, pages viewed, and referring URLs.</li>
              <li><strong>Usage Data:</strong> We collect information about how you interact with our Services, such as features used, prompts viewed, and actions taken.</li>
              <li><strong>Cookies and Similar Technologies:</strong> We use cookies, web beacons, and similar technologies to collect information. See Section 7 for more details.</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">2.3 Information from Third Parties</h3>
            <ul className="text-slate-600">
              <li><strong>Payment Processors:</strong> We receive transaction information from our payment processor (Gumroad).</li>
              <li><strong>Analytics Providers:</strong> We receive aggregated analytics data from services like Google Analytics.</li>
              <li><strong>Social Media:</strong> If you connect your account to social media platforms, we may receive information from those platforms.</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">3. How We Use Your Information</h2>
            </div>
            <p className="text-slate-600">We use the information we collect for the following purposes:</p>
            <ul className="text-slate-600">
              <li><strong>Provide and Maintain Services:</strong> To operate, maintain, and improve our Services, including processing transactions and providing customer support.</li>
              <li><strong>Personalization:</strong> To personalize your experience and deliver content and features that match your interests.</li>
              <li><strong>Communication:</strong> To send you transactional communications, such as purchase confirmations and account updates. With your consent, to send promotional communications.</li>
              <li><strong>Security:</strong> To protect our Services and users from fraudulent, abusive, or unlawful activity.</li>
              <li><strong>Legal Compliance:</strong> To comply with legal obligations and respond to legal requests.</li>
              <li><strong>Analytics:</strong> To analyze usage patterns and improve our Services.</li>
              <li><strong>Marketing:</strong> To send you marketing communications, subject to your preferences and applicable law.</li>
            </ul>
          </section>

          {/* Legal Basis for Processing (GDPR) */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">4. Legal Basis for Processing (EU/EEA/UK Users)</h2>
            </div>
            <p className="text-slate-600">
              If you are located in the European Union, European Economic Area, or United Kingdom, we process your personal data under the following legal bases:
            </p>
            <ul className="text-slate-600">
              <li><strong>Contract Performance:</strong> Processing necessary to perform our contract with you, including providing our Services and processing transactions.</li>
              <li><strong>Legitimate Interests:</strong> Processing necessary for our legitimate interests, such as improving our Services, preventing fraud, and marketing (where not overridden by your rights).</li>
              <li><strong>Consent:</strong> Processing based on your consent, such as for marketing communications. You can withdraw consent at any time.</li>
              <li><strong>Legal Obligation:</strong> Processing necessary to comply with legal obligations.</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">5. How We Share Your Information</h2>
            </div>
            <p className="text-slate-600">We may share your information with:</p>
            <ul className="text-slate-600">
              <li><strong>Service Providers:</strong> Third-party vendors who provide services on our behalf, such as payment processing (Gumroad), hosting, analytics, and email delivery. These providers are contractually obligated to protect your information.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.</li>
              <li><strong>Legal Requirements:</strong> When required by law, subpoena, or other legal process, or to protect our rights, property, or safety.</li>
              <li><strong>With Your Consent:</strong> We may share information with third parties when you explicitly consent.</li>
            </ul>
            <p className="text-slate-600 font-semibold">
              We do not sell your personal information to third parties.
            </p>
          </section>

          {/* International Data Transfers */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">6. International Data Transfers</h2>
            </div>
            <p className="text-slate-600">
              Your information may be transferred to, and processed in, countries other than the country in which you are resident. These countries may have data protection laws that are different from the laws of your country.
            </p>
            <p className="text-slate-600">
              When we transfer personal data from the EU, EEA, UK, or Switzerland to other countries, we use appropriate safeguards, including:
            </p>
            <ul className="text-slate-600">
              <li>Standard Contractual Clauses approved by the European Commission</li>
              <li>Adequacy decisions by the European Commission</li>
              <li>Other legally approved mechanisms</li>
            </ul>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">7. Cookies and Tracking Technologies</h2>
            </div>
            <p className="text-slate-600">
              We use cookies and similar tracking technologies to collect and use information about you and your interaction with our Services. Cookies are small data files stored on your device.
            </p>
            <h3 className="text-xl font-semibold text-slate-800 mt-6">Types of Cookies We Use:</h3>
            <ul className="text-slate-600">
              <li><strong>Essential Cookies:</strong> Required for the operation of our Services. These include cookies that enable you to log into secure areas.</li>
              <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our Services by collecting anonymous information.</li>
              <li><strong>Functionality Cookies:</strong> Enable enhanced functionality and personalization, such as remembering your preferences.</li>
              <li><strong>Targeting Cookies:</strong> May be set by advertising partners to build a profile of your interests and show relevant ads.</li>
            </ul>
            <p className="text-slate-600">
              You can control cookies through your browser settings. However, disabling certain cookies may limit your ability to use some features of our Services.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">8. Data Retention</h2>
            </div>
            <p className="text-slate-600">
              We retain your personal data for as long as necessary to fulfill the purposes for which it was collected, including:
            </p>
            <ul className="text-slate-600">
              <li>Account data: Retained for the duration of your account and for a reasonable period thereafter</li>
              <li>Transaction records: Retained for at least 7 years to comply with legal and accounting requirements</li>
              <li>Communication records: Retained for up to 3 years</li>
              <li>Analytics data: Retained in aggregate form indefinitely</li>
            </ul>
            <p className="text-slate-600">
              When we no longer need your information, we will securely delete or anonymize it.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">9. Your Rights</h2>
            </div>
            <p className="text-slate-600">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">9.1 Rights Under GDPR (EU/EEA/UK)</h3>
            <ul className="text-slate-600">
              <li><strong>Right of Access:</strong> Request a copy of your personal data</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your data (&quot;right to be forgotten&quot;)</li>
              <li><strong>Right to Restrict Processing:</strong> Request limitation of how we process your data</li>
              <li><strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
              <li><strong>Right to Object:</strong> Object to processing based on legitimate interests or for direct marketing</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent</li>
              <li><strong>Right to Lodge a Complaint:</strong> File a complaint with a supervisory authority</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">9.2 Rights Under CCPA/CPRA (California Residents)</h3>
            <ul className="text-slate-600">
              <li><strong>Right to Know:</strong> Request disclosure of categories and specific pieces of personal information collected</li>
              <li><strong>Right to Delete:</strong> Request deletion of personal information</li>
              <li><strong>Right to Opt-Out:</strong> Opt out of the sale or sharing of personal information (we do not sell personal information)</li>
              <li><strong>Right to Non-Discrimination:</strong> Not receive discriminatory treatment for exercising your rights</li>
              <li><strong>Right to Correct:</strong> Request correction of inaccurate information</li>
              <li><strong>Right to Limit:</strong> Limit use of sensitive personal information</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">9.3 Rights Under Other Jurisdictions</h3>
            <p className="text-slate-600">
              Residents of other jurisdictions (including Brazil under LGPD, Canada under PIPEDA, Australia under the Privacy Act, and others) may have similar rights under their respective laws. Please contact us to exercise these rights.
            </p>

            <p className="text-slate-600 mt-4">
              To exercise any of these rights, please contact us at <a href="mailto:privacy@thepromptslibrary.com" className="text-indigo-600 hover:text-indigo-500">privacy@thepromptslibrary.com</a>. We will respond within the timeframe required by applicable law.
            </p>
          </section>

          {/* Security */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">10. Data Security</h2>
            </div>
            <p className="text-slate-600">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage. These measures include:
            </p>
            <ul className="text-slate-600">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Employee training on data protection</li>
              <li>Incident response procedures</li>
            </ul>
            <p className="text-slate-600">
              While we take reasonable measures to protect your information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          {/* Children&apos;s Privacy */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">11. Children&apos;s Privacy</h2>
            </div>
            <p className="text-slate-600">
              Our Services are not directed to individuals under the age of 16 (or the applicable age of majority in your jurisdiction). We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us. If we discover that we have collected personal information from a child without verification of parental consent, we will take steps to delete that information.
            </p>
          </section>

          {/* Third-Party Links */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">12. Third-Party Links and Services</h2>
            </div>
            <p className="text-slate-600">
              Our Services may contain links to third-party websites, applications, or services. This privacy policy does not apply to those third-party services. We encourage you to review the privacy policies of any third-party services you access.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Bell className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">13. Changes to This Privacy Policy</h2>
            </div>
            <p className="text-slate-600">
              We may update this privacy policy from time to time. We will notify you of any material changes by posting the new privacy policy on this page and updating the &quot;Last Updated&quot; date. For significant changes, we may also notify you by email or through our Services. We encourage you to review this policy periodically.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">14. Contact Us</h2>
            </div>
            <p className="text-slate-600">
              If you have any questions, concerns, or requests regarding this privacy policy or our data practices, please contact us:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mt-4">
              <p className="text-slate-700 font-semibold">The Prompts Library</p>
              <p className="text-slate-600">Email: <a href="mailto:privacy@thepromptslibrary.com" className="text-indigo-600 hover:text-indigo-500">privacy@thepromptslibrary.com</a></p>
              <p className="text-slate-600">Support: <a href="mailto:support@thepromptslibrary.com" className="text-indigo-600 hover:text-indigo-500">support@thepromptslibrary.com</a></p>
            </div>
            <p className="text-slate-600 mt-4">
              For EU/EEA/UK residents, you also have the right to lodge a complaint with your local data protection authority.
            </p>
          </section>

        </div>

        {/* Footer Links */}
        <div className="border-t border-slate-200 pt-8 mt-12">
          <div className="flex flex-wrap gap-6 justify-center text-sm">
            <Link href="/terms-of-service" className="text-indigo-600 hover:text-indigo-500">
              Terms of Service
            </Link>
            <Link href="/refund-policy" className="text-indigo-600 hover:text-indigo-500">
              Refund Policy
            </Link>
            <Link href="/" className="text-indigo-600 hover:text-indigo-500">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
