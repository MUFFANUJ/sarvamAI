import React from "react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div>
      <div class="relative grow overflow-x-auto flex flex-col bg-[rgb(249,243,235)] overflow-y-scroll h-[100vh]">
        <div class="bg-card-background">
          <div class="flex items-center py-5 mt-2 rounded-t-card md:mt-0 md:rounded-none px-4 lg:px-10">
            <Link
              aria-label="Go back"
              class="flex h-9 w-9 items-center justify-center rounded-full p-1.5 text-primary-700 bg-neutral-300 hover:bg-neutral-300-hover active:bg-neutral-300-tap"
              type="button"
              to="/profile"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.1408 17.6558C10.9157 17.8808 10.6106 18.0072 10.2924 18.0072C9.97418 18.0072 9.66902 17.8808 9.44398 17.6558L4.64398 12.8558C4.41902 12.6308 4.29264 12.3256 4.29264 12.0074C4.29264 11.6892 4.41902 11.3841 4.64398 11.159L9.44398 6.35902C9.55468 6.24441 9.68709 6.15299 9.8335 6.0901C9.9799 6.02721 10.1374 5.99411 10.2967 5.99272C10.456 5.99134 10.6141 6.0217 10.7615 6.08204C10.909 6.14237 11.043 6.23148 11.1557 6.34415C11.2683 6.45682 11.3574 6.5908 11.4178 6.73828C11.4781 6.88575 11.5085 7.04377 11.5071 7.2031C11.5057 7.36244 11.4726 7.5199 11.4097 7.66631C11.3468 7.81271 11.2554 7.94512 11.1408 8.05582L8.38918 10.8074L17.4924 10.8074C17.8106 10.8074 18.1159 10.9339 18.3409 11.1589C18.566 11.3839 18.6924 11.6892 18.6924 12.0074C18.6924 12.3257 18.566 12.6309 18.3409 12.8559C18.1159 13.081 17.8106 13.2074 17.4924 13.2074L8.38918 13.2074L11.1408 15.959C11.3657 16.1841 11.4921 16.4892 11.4921 16.8074C11.4921 17.1256 11.3657 17.4308 11.1408 17.6558Z"
                  fill="currentColor"
                ></path>
              </svg>
            </Link>
            <div class="grow text-primary-700">
              <h1 class="t-body-m m-0 pr-9 text-center">Privacy policy</h1>
            </div>
          </div>
        </div>
        <div class="h-[calc(100%-6.25rem)] overflow-y-auto pb-16">
          <div class="mx-auto px-5 lg:px-6 t-body-m prose text-neutral-900 marker:text-primary-700 prose-headings:text-primary-700 prose-a:text-primary-600 prose-strong:text-primary-700 prose-em:not-italic">
            <div>
              <p>
                <em>Last updated: September 19, 2023</em>
              </p>
              <p>
                Please see our <a href="#privacy-snapshot">Privacy Snapshot</a>{" "}
                for a high-level overview of our privacy practices.
              </p>
              <p>
                This Privacy Policy outlines how{" "}
                <a
                  href="https://inflection.ai/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Inflection AI, Inc.
                </a>{" "}
                (“Inflection AI”, “we”, “us”) your personal information through
                our website –{" "}
                <a href="https://pi.ai/" target="_blank" rel="noreferrer">
                  pi.ai
                </a>
                , our mobile applications, our interactions with you through
                other modes of communication (such as SMS or instant messaging),
                and any other sites or services that link to this Privacy Policy
                (collectively, the “Services”).
              </p>
              <ul>
                <li>
                  When you use Pi, we collect data including your name, phone
                  number, and IP address. We use this data to run Pi, inform
                  improvements to the platform, keep you safe, and comply with
                  all applicable laws.
                </li>
                <li>
                  Keeping your conversations with Pi private and safe is our top
                  priority, and we will never sell or share your data for
                  advertising or marketing purposes. We have strict internal
                  controls over the use of and access to user data.
                </li>
                <li>
                  You agree to follow our Acceptable Use policy. When you talk
                  to Pi, you should not try to get it to talk about harmful,
                  abusive, or illegal topics. You also should not attempt to
                  evade our security measures or learn about the models,
                  algorithms, prompts, or source code of Pi. If our automated
                  systems detect this activity, you may be suspended.
                </li>
                <li>
                  You are not permitted to use Pi if you are under the age of
                  18.
                </li>
                <li>
                  Pi may make up facts, events, or advice. You should never rely
                  on anything it tells you without double-checking the facts
                  yourself or, if appropriate, talking to a professional.
                </li>
              </ul>
              <h3>Information We Collect</h3>
              <p>
                <strong>Information you provide to us</strong>
              </p>
              <ul>
                <li>
                  <strong>Contact and account information</strong>, such as your
                  first and last name, email address, and your phone number.
                </li>
                <li>
                  <strong>Content and metadata</strong> of any messages that you
                  send using the Services or to Inflection AI directly.
                </li>
                <li>
                  <strong>Communications</strong> that we exchange with you,
                  including when you respond to our surveys or contact us with
                  questions, feedback or otherwise.
                </li>
                <li>
                  <strong>Other data</strong> not specifically listed here,
                  which we will use as described in this Privacy Policy or as
                  otherwise disclosed at the time of collection.
                </li>
              </ul>
              <p>
                <strong>Automatic data collection.</strong> We and our service
                providers may automatically log and combine information about
                you, your computer or mobile device, and your interaction over
                time with the Services, online resources and our communications,
                such as:
              </p>
              <ul>
                <li>
                  <strong>Device data</strong> such as your computer’s or mobile
                  device’s operating system type and version, manufacturer and
                  model, browser type, screen resolution, device type (e.g.,
                  phone, tablet), IP address, unique identifiers, language
                  settings and general location information such as city, state
                  or geographic area.
                </li>
                <li>
                  <strong>Online activity data</strong> such as pages or screens
                  you viewed, how long you spent on a page or screen, the
                  website you visited before browsing to the Services,
                  navigation paths between pages or screens, information about
                  your activity on a page or screen, access times, duration of
                  access, and whether you have opened or otherwise engage with
                  our communications.
                </li>
              </ul>
              <p>
                <strong>Sensitive data.</strong> In your conversations with the
                Services, you may choose to provide sensitive information. This
                includes, but is not limited to, your religious views, sexual
                orientation, political views, health, racial or ethnic origin,
                philosophical beliefs, or trade union membership. By providing
                sensitive information, you consent to our use of it for the
                purposes set out in this Privacy Policy.
              </p>
              <h3>How We Use Your Information</h3>
              <p>
                We use personal information for the following purposes or as
                otherwise described at the time of collection:
              </p>
              <p>
                <strong>Provide our Services.</strong> We use personal
                information to operate, maintain, and provide you with our
                Services. In particular, we use personal information to perform
                our contractual obligations under our Terms of Service.
              </p>
              <p>
                <strong>Communicate with you about our Services.</strong> It is
                in our legitimate business interests to use personal information
                to respond to your requests, provide customer support, and
                communicate with you about our Services, including by sending
                announcements, surveys, reminders, updates, security alerts, and
                support and administrative messages.
              </p>
              <p>
                <strong>
                  Improve, monitor, personalize, and protect our Services.
                </strong>{" "}
                It is in our legitimate business interests to improve and keep
                our Services safe for our users, which includes:
              </p>
              <ul>
                <li>
                  Understanding your needs and interests, and personalizing your
                  experience with the Services and our communications.
                </li>
                <li>
                  Troubleshooting, testing, and research, and keeping the
                  Services secure.
                </li>
                <li>
                  Investigating and protecting against fraudulent, harmful,
                  unauthorized, or illegal activity.
                </li>
              </ul>
              <p>
                <strong>Compliance and protection.</strong> We may use personal
                information to comply with legal obligations, and to defend us
                against legal claims or disputes, including to:
              </p>
              <ul>
                <li>
                  Protect our, your, or others’ rights, privacy, safety, or
                  property (including by making and defending legal claims).
                </li>
                <li>
                  Audit our internal processes for compliance with legal and
                  contractual requirements and internal policies.
                </li>
                <li>
                  Enforce the terms and conditions that govern the Services.
                </li>
                <li>
                  Prevent, identify, investigate and deter fraudulent, harmful,
                  unauthorized, unethical, or illegal activity, including
                  cyberattacks and identity theft.
                </li>
                <li>
                  Comply with applicable laws, lawful requests, and legal
                  process, such as to respond to subpoenas or requests from
                  government authorities.
                </li>
              </ul>
              
              <p>
                <strong>Business transferees.</strong> Personal information may
                be transferred to another entity in the event of a bankruptcy,
                change of control, or shutdown of Inflection AI. We may also
                transfer personal information in the course of a sale or merger
                of the business.
              </p>
              <h3>Privacy Rights and Choices</h3>
              <p>
                <strong>Delete your account.</strong> You may request that we
                delete your account by contacting us as provided in the{" "}
                <a href="#contact-us">How to Contact Us</a> section below.
              </p>
              <p>
                <strong>Online tracking technologies opt-out.</strong> You can
                opt out of third-party cookies as described in our{" "}
                <a href="#cookie-policy">Cookie Policy</a>.
              </p>
              <p>
                To make a request, please email us or write to us as provided in
                the <a href="#contact-us">How to Contact Us</a> section below.
                We may ask for specific information from you to help us confirm
                your identity. Depending on where you reside, you may be
                entitled to empower an authorized agent to submit requests on
                your behalf. We will require authorized agents to confirm their
                identity and authority, in accordance with applicable laws. You
                are entitled to exercise the rights described above free from
                discrimination.
              </p>
              <p>
                <strong>Limits on your privacy rights and choices.</strong> In
                some instances, your choices may be limited, such as where
                fulfilling your request would impair the rights of others, our
                ability to provide a service you have requested, or our ability
                to comply with our legal obligations and enforce our legal
                rights. If you are not satisfied with how we address your
                request, you may submit a complaint by contacting us as provided
                in the <a href="#contact-us">How to Contact Us</a> section
                below. Depending on where you reside, you may have the right to
                complain to a data protection regulator where you live or work,
                or where you feel a violation has occurred.
              </p>
              <p>
                <strong>Do Not Track.</strong> Some Internet browsers can be
                configured to send “Do Not Track” signals to the online services
                that you visit. We currently do not respond to “Do Not Track” or
                similar signals. To find out more about “Do Not Track,” please
                visit{" "}
                <a
                  href="https://allaboutdnt.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  http://www.allaboutdnt.com
                </a>
                .
              </p>
              <h3>Security</h3>
              <p>
                Security is integral to the success of conversational AI: people
                need to trust that their data is being handled responsibly and
                safely in order to fully get the benefits of our Services.
              </p>
              <p>
                Ensuring the integrity of your data is a major priority for us.
                Inflection AI has technical measures in place to protect
                personal information against unauthorized access, corruption,
                loss, or misuse. This includes internal measures that limit
                access to personal information to a dedicated set of specialist
                employees working on improving the safety or quality of our
                Services. Where possible and appropriate, we also deidentify
                sensitive data like conversational logs to preserve user
                privacy.
              </p>
              <p>
                However, these measures are not a guarantee of absolute security
                and you acknowledge and accept that your use of our Services is
                ultimately at your own risk.
              </p>
             
              
              <p>
                If you believe that a minor under the age of 18 has provided
                personal information to us or is otherwise using our Services,
                please let us know immediately at{" "}
                <a
                  href="mailto:privacy@pi.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  privacy@pi.ai
                </a>{" "}
                and we will seek to delete this information and revoke access as
                quickly as possible.
              </p>
              <h3>International Data Transfers</h3>
              <p>
                You will provide personal information directly to our Services
                in the United States. We may also transfer personal information
                to our affiliates, partners, and service providers in the United
                States and other jurisdictions. Please note that such
                jurisdictions may not provide the same protections as the data
                protection laws in your home country.
              </p>
              <h3>Job Applicants</h3>
              <h3>Changes To This Policy</h3>
              <p>
                We are continuing to iterate on our Services, and this Privacy
                Policy will need to be updated. Please be aware that we reserve
                the right to modify this Privacy Policy at any time.
              </p>
              <p>
                When we do so and unless required by law to provide an
                alternative notice, we will post an updated version on this
                page. If you choose to continue your use of our Services after
                such a revision, you consent to be governed by the amended
                Privacy Policy.
              </p>
              <h3 id="contact-us">How to Contact Us</h3>
              <p>
                <strong>Responsible entity.</strong> Inflection AI is the entity
                responsible for the processing of personal information under
                this Privacy Policy (as a controller, where provided under
                applicable law).
              </p>
              <p>
                Please reach out to the Inflection AI team at{" "}
                <a
                  href="mailto:privacy@pi.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  privacy@pi.ai
                </a>{" "}
                if you have any questions or concerns pertaining to this Privacy
                Policy.
              </p>
            </div>
            <hr class="my-12" />
            <div>
              <a href="#privacy-snapshot" id="privacy-snapshot">
                <h1>Privacy Snapshot</h1>
              </a>
              <p>
                The chart below provides a high-level snapshot of our privacy
                practices. You need to read the entire Privacy Policy for
                complete information.
              </p>
              <div class="overflow-x-auto">
                <table class="mt-0 min-w-[60rem]">
                  <thead>
                    <tr>
                      <th class="w-40">Category</th>
                      <th class="w-20">Do We Collect?</th>
                      <th class="w-40">How We Collect</th>
                      <th class="w-40">Primary Purposes of Processing</th>
                      <th class="w-20">Key Recipients / Disclosures</th>
                      <th class="w-20">Can You Limit Sharing?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Identifiers such as a real name, alias, postal address,
                        unique personal identifier, online identifier, Internet
                        Protocol address, email address, account name
                      </td>
                      <td>Yes</td>
                      <td>
                        When you visit or use our Services; from third-party
                        sites and services; when you apply for a job with us
                      </td>
                      <td>
                        To provide our Services; to improve, monitor, and
                        personalize our Services; to communicate with you; to
                        process your job application
                      </td>
                      <td>Service providers</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>
                        Characteristics of protected classifications under CA or
                        federal law
                      </td>
                      <td>Yes</td>
                      <td>When you apply for a job with us</td>
                      <td>To process your job application</td>
                      <td>Service providers</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>
                        Commercial information, including but not limited to
                        records of personal property, products or services
                        purchased, obtained or considered
                      </td>
                      <td>No</td>
                      <td>N/A</td>
                      <td>N/A</td>
                      <td>N/A</td>
                      <td>N/A</td>
                    </tr>
                    <tr>
                      <td>
                        Personal information categories listed in the CA
                        Customer Records Statute (e.g., name, contact details)
                      </td>
                      <td>Yes</td>
                      <td>
                        When you visit or use our Services; from third-party
                        sites and services; when you apply for a job with us
                      </td>
                      <td>
                        To provide our Services; to improve, monitor, and
                        personalize our Services; to communicate with you; to
                        process your job application
                      </td>
                      <td>Service providers</td>
                      <td>No</td>
                    </tr>
                    
                    <tr>
                      <td>
                        Internet or other electronic network activity
                        information, including information regarding a
                        consumer’s interaction with a website
                      </td>
                      <td>Yes</td>
                      <td>When you visit or use our Services</td>
                      <td>Service providers</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Geolocation data</td>
                      <td>Yes</td>
                      <td>When you visit or use our Services</td>
                      <td>
                        To provide our Services; to improve, monitor, and
                        personalize our Services
                      </td>
                      <td>Service providers</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>
                        Audio, electronic, visual, thermal, olfactory or similar
                        information
                      </td>
                      <td>No</td>
                      <td>N/A</td>
                      <td>N/A</td>
                      <td>N/A</td>
                      <td>N/A</td>
                    </tr>
                    <tr>
                      <td>Professional or employment-related information</td>
                      <td>Yes</td>
                      <td>When you apply for a job with us</td>
                      <td>To process your job application</td>
                      <td>Service providers</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>
                        Education information, defined as information that is
                        not publicly available personally identifiable
                        information as defined in FERPA
                      </td>
                      <td>No</td>
                      <td>N/A</td>
                      <td>N/A</td>
                      <td>N/A</td>
                      <td>N/A</td>
                    </tr>
                    <tr>
                      <td>
                        Inferences drawn from information identified to create a
                        profile about a consumer
                      </td>
                      <td>Yes</td>
                      <td>When you visit or use our Services</td>
                      <td>
                        To provide our Services; to improve, monitor, and
                        personalize our Services
                      </td>
                      <td>Service providers</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>
                        Sensitive personal information (as defined in CA Civil
                        Code 1798.140 (ae))
                      </td>
                      <td>Yes</td>
                      <td>
                        When you visit or use our Services; when you apply for a
                        job with us
                      </td>
                      <td>
                        To provide our Services; to improve, monitor, and
                        personalize our Services; to process your job
                        application
                      </td>
                      <td>Service providers</td>
                      <td>No</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <hr class="my-12" />
            <div>
              <a href="#cookie-policy" id="cookie-policy">
                <h1>Cookie Policy</h1>
              </a>
              <p>
                <i>Last updated: September 19, 2023</i>
              </p>
              <p>
                This Cookie Policy explains how Inflection AI, Inc. (“Inflection
                AI”, “we”, or “us”) uses cookies and similar technologies when
                you visit our Services as defined in our Privacy Policy. Here,
                we explain what these technologies are and why we use them, as
                well as your rights to control our use of them.
              </p>
              <h3>1. What are cookies and similar technologies?</h3>
              <p>
                <strong>Cookies.</strong> A cookie is a text file containing a
                string of characters that is sent to your device when you visit
                a website. When you visit the website again, the cookie allows
                that website to recognize your browser. Cookies may store user
                preferences and other information. Cookies set by the website
                owner are called “first party cookies.” Cookies set by parties
                other than the website owner are called “third party cookies.”
                Third party cookies enable third party features or functionality
                to be provided on or through a website (e.g., interactive
                content, and analytics). The parties that set these third party
                cookies can recognize your device both when it visits the
                website in question and also when it visits certain other
                websites.
              </p>
              <p>
                <strong>Session storage.</strong> Session storage is a feature
                of your web browser or device that allows a website or
                application to temporarily store data on your device while you
                are actively using the website or application. This data is
                deleted as soon as you close your browser or application, or
                navigate away from the website. Websites and applications may
                use session storage to improve your experience and ensure that
                certain information is readily available during your browsing
                session.
              </p>
              <h3>4. How can you control cookies?</h3>
              <p>
                You can set your browser to block cookies, but then some parts
                of the Services will not work given that we only use cookies
                that are strictly necessary to provide you with our Services. To
                do this, follow the instructions in your browser settings. Many
                browsers accept cookies by default until you change your
                settings. For more information about cookies, including how to
                see what cookies have been set on your device and how to manage
                and delete them, visit{" "}
                <a
                  href="https://allaboutcookies.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.allaboutcookies.org
                </a>
                . Use the following links to learn more about how to control
                cookies and online tracking through your browser:{" "}
                <a
                  href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox"
                  target="_blank"
                  rel="noreferrer"
                >
                  Firefox
                </a>
                ;{" "}
                <a
                  href="https://support.google.com/chrome/answer/95647?hl=en-GB&amp;co=GENIE.Platform%3DDesktop#:~:text=that%20web%20page.-,On%20your%20computer%2C%20open%20Chrome%20.,Allow%20all%20cookies."
                  target="_blank"
                  rel="noreferrer"
                >
                  Chrome
                </a>
                ;{" "}
                <a
                  href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noreferrer"
                >
                  Microsoft Edge
                </a>
                ;{" "}
                <a
                  href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noreferrer"
                >
                  Safari
                </a>
                .
              </p>
              <p>
                Note that because these opt-out mechanisms are specific to the
                device or browser on which they are exercised, you will need to
                opt out on each browser and device that you use.
              </p>
              <p>
                <strong>Do Not Track.</strong> Some Internet browsers can be
                configured to send “Do Not Track” signals to the online services
                that you visit. We currently do not respond to “Do Not Track” or
                similar signals. To find out more about “Do Not Track,” please
                visit{" "}
                <a
                  href="https://allaboutdnt.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  http://www.allaboutdnt.com
                </a>
                .
              </p>
              <h3>5. How often will we update this Cookie Policy?</h3>
              <p>
                We may update this Cookie Policy from time to time in order to
                reflect, for example, changes to the cookies we use or for other
                operational, legal or regulatory reasons. We will notify you of
                any material changes to this Cookie Policy prior to the changes
                becoming effective by posting the changes on this page and
                providing a more prominent notice with on-site or email
                notifications. Please therefore re-visit this Cookie Policy
                regularly to stay informed about our use of cookies and related
                technologies.
              </p>
              <p>
                The date at the top of this Cookie Policy indicates when it was
                last updated.
              </p>
              <h3>6. Where can you get further information?</h3>
              <p>
                Please reach out to the Inflection AI team at{" "}
                <a
                  href="mailto:privacy@pi.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  privacy@pi.ai
                </a>{" "}
                if you have any questions or concerns pertaining to this Cookie
                Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
