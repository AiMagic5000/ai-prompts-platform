'use client'

import Link from 'next/link'
import { Logo } from '@/components/shared/logo'
import { ArrowLeft, FileText, Scale, Shield, AlertTriangle, CreditCard, BookOpen, Globe, Ban, Gavel, Mail } from 'lucide-react'

export default function TermsOfServicePage() {
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
            <FileText className="w-10 h-10 text-indigo-400" />
            <h1 className="text-4xl font-bold text-white">Terms of Service</h1>
          </div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Please read these terms carefully before using our services. By accessing or using The Prompts Library, you agree to be bound by these terms.
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

          {/* Agreement to Terms */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">1. Agreement to Terms</h2>
            </div>
            <p className="text-slate-600">
              These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and The Prompts Library (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) governing your access to and use of the The Prompts Library website, applications, products, and services (collectively, the &quot;Services&quot;).
            </p>
            <p className="text-slate-600">
              By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use our Services.
            </p>
            <p className="text-slate-600">
              We may modify these Terms at any time. If we make material changes, we will notify you by updating the date at the top of these Terms and, in some cases, provide additional notice. Your continued use of the Services after any modification constitutes your acceptance of the modified Terms.
            </p>
          </section>

          {/* Eligibility */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">2. Eligibility</h2>
            </div>
            <p className="text-slate-600">
              To use our Services, you must:
            </p>
            <ul className="text-slate-600">
              <li>Be at least 18 years of age, or the age of legal majority in your jurisdiction, whichever is greater</li>
              <li>Have the legal capacity to enter into binding contracts</li>
              <li>Not be barred from using our Services under applicable law</li>
              <li>Not have been previously suspended or removed from our Services</li>
            </ul>
            <p className="text-slate-600">
              If you are using our Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.
            </p>
          </section>

          {/* Account Registration */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">3. Account Registration and Security</h2>
            </div>
            <p className="text-slate-600">
              To access certain features of our Services, you may need to create an account or complete a purchase. When you do so, you agree to:
            </p>
            <ul className="text-slate-600">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your information to keep it accurate and complete</li>
              <li>Maintain the confidentiality of your account credentials and PIN codes</li>
              <li>Accept responsibility for all activities that occur under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
            <p className="text-slate-600">
              We reserve the right to suspend or terminate your account if any information provided proves to be inaccurate, outdated, or incomplete, or if we suspect unauthorized or fraudulent activity.
            </p>
          </section>

          {/* License and Access */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">4. License and Access Rights</h2>
            </div>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">4.1 License Grant</h3>
            <p className="text-slate-600">
              Upon completing a valid purchase, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the purchased content (&quot;Content&quot;), including AI prompts, automation templates, and educational materials, subject to these Terms.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">4.2 Permitted Uses</h3>
            <p className="text-slate-600">You may:</p>
            <ul className="text-slate-600">
              <li>Use the Content for personal and commercial purposes</li>
              <li>Modify and adapt the prompts for your specific use cases</li>
              <li>Use outputs generated from our prompts in your projects, products, or services</li>
              <li>Access the Content on multiple devices for your personal use</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">4.3 Prohibited Uses</h3>
            <p className="text-slate-600">You may NOT:</p>
            <ul className="text-slate-600">
              <li>Redistribute, resell, sublicense, or share the Content with third parties</li>
              <li>Include our prompts in any product or service intended for resale without our written consent</li>
              <li>Create derivative works based on our Content for distribution or sale</li>
              <li>Remove any copyright, trademark, or proprietary notices from the Content</li>
              <li>Use automated systems to access, scrape, or copy the Content</li>
              <li>Share your account access with others</li>
              <li>Circumvent any access restrictions or security measures</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">4.4 Lifetime Access</h3>
            <p className="text-slate-600">
              &quot;Lifetime access&quot; means access for the lifetime of the product, subject to these Terms. We may discontinue or modify the Services at any time. If we discontinue the Services entirely, we will provide reasonable notice and, where feasible, make the Content available for download.
            </p>
          </section>

          {/* Payments and Billing */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">5. Payments and Billing</h2>
            </div>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">5.1 Pricing</h3>
            <p className="text-slate-600">
              All prices are displayed in US Dollars unless otherwise specified. Prices are subject to change without notice, but price changes will not affect purchases already completed.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">5.2 Payment Processing</h3>
            <p className="text-slate-600">
              Payments are processed through Gumroad, our third-party payment processor. By making a purchase, you agree to Gumroad&apos;s terms of service and privacy policy. We do not store your full payment card information.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">5.3 Taxes</h3>
            <p className="text-slate-600">
              Prices may not include applicable taxes. You are responsible for paying any applicable sales tax, VAT, GST, or other taxes imposed by your jurisdiction. Gumroad will calculate and collect applicable taxes where required by law.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">5.4 Refunds</h3>
            <p className="text-slate-600">
              Our refund policy is detailed in our separate <Link href="/refund-policy" className="text-indigo-600 hover:text-indigo-500">Refund Policy</Link>. We offer a 30-day money-back guarantee subject to the terms described therein.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">6. Intellectual Property Rights</h2>
            </div>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">6.1 Our Intellectual Property</h3>
            <p className="text-slate-600">
              The Services and all Content, including but not limited to text, graphics, logos, icons, images, audio clips, video clips, data compilations, software, and the compilation thereof, are the property of The Prompts Library or our licensors and are protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">6.2 Trademarks</h3>
            <p className="text-slate-600">
              &quot;The Prompts Library&quot; and our logos are trademarks of The Prompts Library. You may not use our trademarks without our prior written consent. Other trademarks appearing on our Services belong to their respective owners.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">6.3 User Content</h3>
            <p className="text-slate-600">
              You retain ownership of any content you create using our prompts. The outputs you generate from AI models using our prompts belong to you, subject to the terms of the AI platforms you use.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">6.4 Feedback</h3>
            <p className="text-slate-600">
              If you provide us with feedback, suggestions, or ideas about our Services, you grant us a non-exclusive, royalty-free, perpetual, irrevocable license to use that feedback for any purpose without compensation to you.
            </p>
          </section>

          {/* Prohibited Conduct */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Ban className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">7. Prohibited Conduct</h2>
            </div>
            <p className="text-slate-600">
              When using our Services, you agree not to:
            </p>
            <ul className="text-slate-600">
              <li>Violate any applicable law, regulation, or third-party rights</li>
              <li>Use the Services for any illegal, harmful, or fraudulent purpose</li>
              <li>Generate content that is illegal, defamatory, obscene, or violates third-party rights</li>
              <li>Interfere with or disrupt the Services or servers connected to the Services</li>
              <li>Attempt to gain unauthorized access to any part of the Services</li>
              <li>Use automated systems (bots, scrapers, etc.) to access the Services without permission</li>
              <li>Collect or harvest user information without consent</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
              <li>Engage in any activity that could damage, disable, or impair the Services</li>
              <li>Use the Content to compete with The Prompts Library</li>
            </ul>
          </section>

          {/* Disclaimers */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">8. Disclaimers</h2>
            </div>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">8.1 &quot;As Is&quot; Basis</h3>
            <p className="text-slate-600 font-semibold uppercase">
              THE SERVICES AND CONTENT ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">8.2 No Guarantees</h3>
            <p className="text-slate-600">
              We do not warrant that:
            </p>
            <ul className="text-slate-600">
              <li>The Services will meet your specific requirements or expectations</li>
              <li>The Services will be uninterrupted, timely, secure, or error-free</li>
              <li>The results obtained from using the Services will be accurate or reliable</li>
              <li>Any errors in the Services will be corrected</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">8.3 AI Output Disclaimer</h3>
            <p className="text-slate-600">
              Our prompts are designed to work with third-party AI models. We do not control these AI models and cannot guarantee their output. You are solely responsible for reviewing and verifying any AI-generated content before use. AI outputs may contain errors, inaccuracies, or biases.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">8.4 Third-Party Services</h3>
            <p className="text-slate-600">
              Our Services may integrate with or link to third-party services (including AI platforms, payment processors, and hosting services). We are not responsible for the availability, content, or practices of these third-party services.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">9. Limitation of Liability</h2>
            </div>
            <p className="text-slate-600 font-semibold uppercase">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL PROMPTVAULT, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE SERVICES.
            </p>
            <p className="text-slate-600 font-semibold uppercase mt-4">
              OUR TOTAL LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED US DOLLARS ($100), WHICHEVER IS GREATER.
            </p>
            <p className="text-slate-600 mt-4">
              Some jurisdictions do not allow the exclusion or limitation of certain damages. In such jurisdictions, our liability shall be limited to the greatest extent permitted by law.
            </p>
          </section>

          {/* Indemnification */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">10. Indemnification</h2>
            </div>
            <p className="text-slate-600">
              You agree to defend, indemnify, and hold harmless The Prompts Library, its officers, directors, employees, agents, and licensors from and against any claims, damages, obligations, losses, liabilities, costs, or expenses (including reasonable attorneys&apos; fees) arising from:
            </p>
            <ul className="text-slate-600">
              <li>Your use of the Services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Any content you create using our Services</li>
              <li>Your violation of any applicable law or regulation</li>
            </ul>
          </section>

          {/* Governing Law and Disputes */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Gavel className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">11. Governing Law and Dispute Resolution</h2>
            </div>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">11.1 Governing Law</h3>
            <p className="text-slate-600">
              These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">11.2 Informal Resolution</h3>
            <p className="text-slate-600">
              Before initiating any formal dispute resolution, you agree to first contact us at <a href="mailto:legal@thepromptslibrary.com" className="text-indigo-600 hover:text-indigo-500">legal@thepromptslibrary.com</a> and attempt to resolve the dispute informally for at least 30 days.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">11.3 Arbitration Agreement</h3>
            <p className="text-slate-600">
              Any dispute arising out of or relating to these Terms or the Services that cannot be resolved informally shall be finally settled by binding arbitration administered by the American Arbitration Association (AAA) in accordance with its Commercial Arbitration Rules. The arbitration shall be conducted in English, and the arbitrator&apos;s decision shall be binding and enforceable in any court of competent jurisdiction.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">11.4 Class Action Waiver</h3>
            <p className="text-slate-600 font-semibold">
              YOU AND PROMPTVAULT AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR OUR INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">11.5 Exceptions</h3>
            <p className="text-slate-600">
              Notwithstanding the above, either party may seek injunctive or other equitable relief in any court of competent jurisdiction to prevent the actual or threatened infringement of intellectual property rights.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">11.6 International Users</h3>
            <p className="text-slate-600">
              If you are located outside the United States, the mandatory consumer protection laws of your jurisdiction may apply to certain aspects of these Terms. Nothing in these Terms affects your statutory rights as a consumer that cannot be waived or limited by contract.
            </p>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Ban className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">12. Termination</h2>
            </div>
            <p className="text-slate-600">
              We may terminate or suspend your access to the Services immediately, without prior notice or liability, for any reason, including if you breach these Terms.
            </p>
            <p className="text-slate-600">
              Upon termination:
            </p>
            <ul className="text-slate-600">
              <li>Your license to use the Content will immediately cease</li>
              <li>You must destroy all copies of the Content in your possession</li>
              <li>All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability</li>
            </ul>
          </section>

          {/* General Provisions */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">13. General Provisions</h2>
            </div>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">13.1 Entire Agreement</h3>
            <p className="text-slate-600">
              These Terms, together with our Privacy Policy and Refund Policy, constitute the entire agreement between you and The Prompts Library regarding the Services and supersede all prior agreements and understandings.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">13.2 Severability</h3>
            <p className="text-slate-600">
              If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">13.3 Waiver</h3>
            <p className="text-slate-600">
              Our failure to enforce any right or provision of these Terms shall not be considered a waiver of those rights.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">13.4 Assignment</h3>
            <p className="text-slate-600">
              You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may assign these Terms without restriction.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">13.5 Force Majeure</h3>
            <p className="text-slate-600">
              We shall not be liable for any failure or delay in performing our obligations due to circumstances beyond our reasonable control, including acts of God, natural disasters, war, terrorism, labor disputes, or government actions.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">13.6 Headings</h3>
            <p className="text-slate-600">
              The section headings in these Terms are for convenience only and have no legal or contractual effect.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">14. Contact Us</h2>
            </div>
            <p className="text-slate-600">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mt-4">
              <p className="text-slate-700 font-semibold">The Prompts Library</p>
              <p className="text-slate-600">Email: <a href="mailto:legal@thepromptslibrary.com" className="text-indigo-600 hover:text-indigo-500">legal@thepromptslibrary.com</a></p>
              <p className="text-slate-600">Support: <a href="mailto:support@thepromptslibrary.com" className="text-indigo-600 hover:text-indigo-500">support@thepromptslibrary.com</a></p>
            </div>
          </section>

        </div>

        {/* Footer Links */}
        <div className="border-t border-slate-200 pt-8 mt-12">
          <div className="flex flex-wrap gap-6 justify-center text-sm">
            <Link href="/privacy-policy" className="text-indigo-600 hover:text-indigo-500">
              Privacy Policy
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
