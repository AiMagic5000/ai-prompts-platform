'use client'

import Link from 'next/link'
import { Logo } from '@/components/shared/logo'
import { ArrowLeft, RefreshCw, Shield, Clock, CheckCircle, XCircle, HelpCircle, Mail, CreditCard, FileText, AlertTriangle } from 'lucide-react'

export default function RefundPolicyPage() {
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
            <RefreshCw className="w-10 h-10 text-indigo-400" />
            <h1 className="text-4xl font-bold text-white">Refund Policy</h1>
          </div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            We stand behind our products with a 30-day money-back guarantee. Your satisfaction is our priority.
          </p>
          <div className="mt-4 text-sm text-slate-400">
            <p>Last Updated: {lastUpdated}</p>
            <p>Effective Date: {effectiveDate}</p>
          </div>
        </div>
      </div>

      {/* Guarantee Banner */}
      <div className="bg-green-50 border-b border-green-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-green-800">30-Day Money-Back Guarantee</h2>
              <p className="text-green-700">Not satisfied? Get a full refund within 30 days of purchase. No questions asked.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-slate prose-lg max-w-none">

          {/* Overview */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">1. Overview</h2>
            </div>
            <p className="text-slate-600">
              At The Prompts Library, we are committed to your complete satisfaction. We understand that digital products require trust, which is why we offer a straightforward 30-day money-back guarantee on all purchases.
            </p>
            <p className="text-slate-600">
              This Refund Policy explains the terms and conditions under which you may request a refund for The Prompts Library products and services. By making a purchase, you acknowledge that you have read and agree to this policy.
            </p>
            <p className="text-slate-600">
              This policy applies to all purchases made through our website or through our authorized payment processor, Gumroad. It applies regardless of your location or payment method used.
            </p>
          </section>

          {/* 30-Day Guarantee */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">2. Our 30-Day Money-Back Guarantee</h2>
            </div>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">2.1 Guarantee Period</h3>
            <p className="text-slate-600">
              You have 30 calendar days from the date of your original purchase to request a full refund. The guarantee period begins on the date your payment is processed, not the date you first access the content.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">2.2 What&apos;s Covered</h3>
            <p className="text-slate-600">Our money-back guarantee covers:</p>
            <ul className="text-slate-600">
              <li>All The Prompts Library product purchases, including prompt libraries, bonus content, and educational materials</li>
              <li>Any add-on purchases made alongside the main product</li>
              <li>Purchases made at any price point (regular or promotional pricing)</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">2.3 No Questions Asked</h3>
            <p className="text-slate-600">
              Within the 30-day period, you may request a refund for any reason. While we appreciate feedback to help us improve, you are not required to provide a reason for your refund request.
            </p>
          </section>

          {/* Eligibility */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">3. Refund Eligibility</h2>
            </div>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">3.1 Eligible for Refund</h3>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-4">
              <p className="text-green-800 font-semibold mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                You ARE eligible for a refund if:
              </p>
              <ul className="text-green-700 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 shrink-0" />
                  <span>Your request is made within 30 days of the original purchase date</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 shrink-0" />
                  <span>This is your first purchase of the product (not a repeat purchase)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 shrink-0" />
                  <span>You purchased through our official channels (website or Gumroad)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 shrink-0" />
                  <span>The product doesn&apos;t meet your expectations for any reason</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 shrink-0" />
                  <span>You experienced technical issues preventing access to the content</span>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">3.2 Not Eligible for Refund</h3>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-4">
              <p className="text-red-800 font-semibold mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                You are NOT eligible for a refund if:
              </p>
              <ul className="text-red-700 space-y-2">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 mt-1 shrink-0" />
                  <span>More than 30 days have passed since your purchase</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 mt-1 shrink-0" />
                  <span>You have previously purchased and received a refund for the same product</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 mt-1 shrink-0" />
                  <span>You purchased through an unauthorized third party or reseller</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 mt-1 shrink-0" />
                  <span>Your account has been terminated for violation of our Terms of Service</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 mt-1 shrink-0" />
                  <span>Evidence of abuse of our refund policy (e.g., repeated purchases and refunds)</span>
                </li>
              </ul>
            </div>
          </section>

          {/* How to Request */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">4. How to Request a Refund</h2>
            </div>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">4.1 Refund Request Process</h3>
            <p className="text-slate-600">To request a refund, please follow these steps:</p>
            <ol className="text-slate-600">
              <li>
                <strong>Email Us:</strong> Send an email to <a href="mailto:refunds@thepromptslibrary.com" className="text-indigo-600 hover:text-indigo-500">refunds@thepromptslibrary.com</a> with the subject line &quot;Refund Request&quot;
              </li>
              <li>
                <strong>Include Your Information:</strong>
                <ul className="mt-2 ml-4">
                  <li>Your full name (as used for the purchase)</li>
                  <li>Email address used for the purchase</li>
                  <li>Order number or transaction ID (from your Gumroad receipt)</li>
                  <li>Date of purchase</li>
                  <li>Reason for refund (optional but appreciated)</li>
                </ul>
              </li>
              <li>
                <strong>Await Confirmation:</strong> We will confirm receipt of your request within 24-48 business hours
              </li>
              <li>
                <strong>Receive Your Refund:</strong> Once approved, your refund will be processed within 5-10 business days
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">4.2 Alternative: Gumroad Direct Refund</h3>
            <p className="text-slate-600">
              You may also request a refund directly through Gumroad:
            </p>
            <ol className="text-slate-600">
              <li>Locate your original purchase confirmation email from Gumroad</li>
              <li>Click the &quot;View in Library&quot; or receipt link</li>
              <li>Look for the refund option on your order page</li>
              <li>Follow Gumroad&apos;s refund request process</li>
            </ol>
          </section>

          {/* Refund Processing */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">5. Refund Processing</h2>
            </div>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">5.1 Processing Time</h3>
            <ul className="text-slate-600">
              <li><strong>Request Review:</strong> 24-48 business hours</li>
              <li><strong>Refund Processing:</strong> 3-5 business days after approval</li>
              <li><strong>Credit to Account:</strong> 5-10 business days depending on your payment method and financial institution</li>
            </ul>
            <p className="text-slate-600">
              Total time from request to receiving funds is typically 7-15 business days.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">5.2 Refund Method</h3>
            <p className="text-slate-600">
              Refunds are issued to the original payment method used for the purchase:
            </p>
            <ul className="text-slate-600">
              <li><strong>Credit/Debit Card:</strong> Refunded to the same card</li>
              <li><strong>PayPal:</strong> Refunded to your PayPal account</li>
              <li><strong>Other Methods:</strong> Refunded according to Gumroad&apos;s policies for that payment method</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">5.3 Refund Amount</h3>
            <p className="text-slate-600">
              Refunds are issued for the full purchase amount. This includes:
            </p>
            <ul className="text-slate-600">
              <li>The original purchase price</li>
              <li>Any applicable taxes that were collected</li>
            </ul>
            <p className="text-slate-600">
              Note: We cannot refund any fees charged by your bank or payment provider for international transactions or currency conversion.
            </p>
          </section>

          {/* After Refund */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">6. After Your Refund</h2>
            </div>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">6.1 Access Revocation</h3>
            <p className="text-slate-600">
              Upon processing a refund:
            </p>
            <ul className="text-slate-600">
              <li>Your access to the purchased content will be revoked</li>
              <li>Your account access may be limited or terminated</li>
              <li>Any associated bonuses or add-ons will also be revoked</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">6.2 Future Purchases</h3>
            <p className="text-slate-600">
              A refund does not prevent you from making future purchases. However:
            </p>
            <ul className="text-slate-600">
              <li>Repeat purchases of the same product after a refund are not eligible for the 30-day guarantee</li>
              <li>Accounts showing patterns of abuse may be restricted</li>
            </ul>
          </section>

          {/* International */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">7. International Customers</h2>
            </div>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">7.1 Currency</h3>
            <p className="text-slate-600">
              All refunds are processed in US Dollars (USD), the currency of the original transaction. If you paid in a different currency, Gumroad or your bank will handle the conversion. Exchange rate fluctuations may result in a slightly different amount being credited to your account.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">7.2 Consumer Rights</h3>
            <p className="text-slate-600">
              This policy is designed to comply with consumer protection laws worldwide. Customers in certain jurisdictions (including the European Union, United Kingdom, Australia, and others) may have additional statutory rights:
            </p>
            <ul className="text-slate-600">
              <li><strong>EU/UK Consumers:</strong> Under the Consumer Rights Directive, you may have a 14-day cooling-off period for digital content purchases, which may be waived upon accessing the content</li>
              <li><strong>Australian Consumers:</strong> The Australian Consumer Law provides additional guarantees that cannot be excluded</li>
              <li><strong>Other Jurisdictions:</strong> Local consumer protection laws may provide additional rights</li>
            </ul>
            <p className="text-slate-600">
              Nothing in this policy is intended to limit your statutory rights as a consumer.
            </p>
          </section>

          {/* Disputes */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">8. Disputes and Chargebacks</h2>
            </div>
            <p className="text-slate-600">
              We encourage you to contact us directly for any issues before initiating a chargeback or dispute with your payment provider. In most cases, we can resolve issues quickly and provide a refund if you&apos;re eligible.
            </p>
            <p className="text-slate-600">
              Initiating a chargeback without first attempting to resolve the issue with us may result in:
            </p>
            <ul className="text-slate-600">
              <li>Permanent account suspension</li>
              <li>Being blocked from future purchases</li>
              <li>Potential collection efforts for fraudulent chargebacks</li>
            </ul>
            <p className="text-slate-600">
              If you have a legitimate concern that we haven&apos;t addressed satisfactorily, please escalate to <a href="mailto:support@thepromptslibrary.com" className="text-indigo-600 hover:text-indigo-500">support@thepromptslibrary.com</a> before filing a dispute.
            </p>
          </section>

          {/* Abuse Prevention */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">9. Policy Abuse Prevention</h2>
            </div>
            <p className="text-slate-600">
              We reserve the right to decline refund requests from customers who we reasonably believe are abusing our refund policy. Indicators of abuse include:
            </p>
            <ul className="text-slate-600">
              <li>Multiple purchases followed by refund requests</li>
              <li>Downloading or extensively using content before requesting a refund</li>
              <li>Sharing account access or content before requesting a refund</li>
              <li>Pattern of similar behavior across multiple accounts</li>
            </ul>
            <p className="text-slate-600">
              We take abuse seriously and may share information with payment processors to prevent fraud across platforms.
            </p>
          </section>

          {/* Changes */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">10. Changes to This Policy</h2>
            </div>
            <p className="text-slate-600">
              We may update this Refund Policy from time to time. Changes will be effective immediately upon posting to our website. The &quot;Last Updated&quot; date at the top of this policy indicates when it was last revised.
            </p>
            <p className="text-slate-600">
              The refund policy in effect at the time of your purchase will apply to that purchase. We will not retroactively apply less favorable terms to existing purchases.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900 m-0">11. Contact Us</h2>
            </div>
            <p className="text-slate-600">
              If you have questions about this Refund Policy or need assistance with a refund request:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mt-4">
              <p className="text-slate-700 font-semibold">The Prompts Library Refund Support</p>
              <p className="text-slate-600">Refund Requests: <a href="mailto:refunds@thepromptslibrary.com" className="text-indigo-600 hover:text-indigo-500">refunds@thepromptslibrary.com</a></p>
              <p className="text-slate-600">General Support: <a href="mailto:support@thepromptslibrary.com" className="text-indigo-600 hover:text-indigo-500">support@thepromptslibrary.com</a></p>
              <p className="text-slate-500 text-sm mt-2">Response time: 24-48 business hours</p>
            </div>
          </section>

        </div>

        {/* Summary Box */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8 my-12">
          <h3 className="text-xl font-bold text-indigo-900 mb-4 text-center">Refund Policy Summary</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-indigo-600" />
              </div>
              <h4 className="font-semibold text-indigo-900">30 Days</h4>
              <p className="text-indigo-700 text-sm">Money-back guarantee period</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-indigo-600" />
              </div>
              <h4 className="font-semibold text-indigo-900">No Questions</h4>
              <p className="text-indigo-700 text-sm">Asked for refund requests</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CreditCard className="w-6 h-6 text-indigo-600" />
              </div>
              <h4 className="font-semibold text-indigo-900">Full Refund</h4>
              <p className="text-indigo-700 text-sm">100% of purchase price</p>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="border-t border-slate-200 pt-8 mt-12">
          <div className="flex flex-wrap gap-6 justify-center text-sm">
            <Link href="/privacy-policy" className="text-indigo-600 hover:text-indigo-500">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-indigo-600 hover:text-indigo-500">
              Terms of Service
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
