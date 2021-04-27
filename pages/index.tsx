import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Ribbit &amp; Roo</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <nav className="bg-white fixed w-full">
          <div>
            <div className="relative flex items-center h-16">
              <div className="absolute inset-y-0 left-0 sm:hidden">
                {/*Mobile menu button*/}
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-primary-green focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {/*
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          */}
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  {/*
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
        */}
                  <svg
                    className="hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="h-8 w-auto"
                  src="/logo.png"
                  alt="RIBBIT &amp; ROO"
                />
                <p>RIBBIT &amp; ROO</p>
              </div>
              <div className="flex-1 flex justify-end items-center sm:items-stretch">
                <div className="hidden justify-end sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                    <a
                      href="#"
                      className="bg-primary-green text-white px-3 py-2 rounded-md text-sm font-medium"
                      aria-current="page"
                    >
                      Play Sessions
                    </a>

                    <a
                      href="#"
                      className="text-gray-300 hover:bg-primary-green hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Early Childcare Programs
                    </a>

                    <a
                      href="#"
                      className="text-gray-300 hover:bg-primary-green hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Gallery
                    </a>

                    <a
                      href="#"
                      className="text-gray-300 hover:bg-primary-green hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Testamonials
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*Mobile menu, show/hide based on menu state. */}
          <div className="sm:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/*Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <a
                href="#"
                className="bg-primary-green text-white block px-3 py-2 rounded-md text-base font-medium"
                aria-current="page"
              >
                Play Sessions
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-primary-green hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Early Childhood Programs
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-primary-green hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Gallery
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-primary-green hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Testamonials
              </a>
            </div>
          </div>
        </nav>
        <section className="h-96 mb-8">
          <div className="h-full w-full bg-cover bg-black bg-opacity-75">
            <div className="h-full w-full bg-cover bg-fixed bg-center bg-hero-image p-20 pt-48 text-white font-normal leading-loose uppercase">
              <h3 className="text-3xl">Terms and Conditions</h3>
              <p>All the small print</p>
            </div>
          </div>
        </section>
        <div className="container mx-auto px-32">
          <p className="mb-8">
            Please read these terms carefully before you book any of our Ribbit
            &amp; Roo play sessions. These terms tell you about Ribbit &amp;
            Roo, how we will provide play sessions to you, how you or Ribbit
            &amp; Roo may change or end the contract, what to do if there is an
            issue and other important information. If you think that there is a
            mistake in these terms, please contact us at
            jennyh@ribbitandroo.com.au to discuss.
          </p>
          <h2 className="uppercase text-xl mb-4">
            ACCEPTANCE OF TERMS &amp; CONDITIONS
          </h2>
          <p className="mb-8">
            All those who wish to attend any Ribbit &amp; Roo play session must
            agree to the terms and conditions set out below. These are the terms
            and conditions which we provide Ribbit &amp; Roo play sessions to
            you and your child(ren). No variation or addition to the terms shall
            be binding unless agreed in writing by Ribbit &amp; Roo and the
            parent. In the unlikely event of a customer failing to abide by
            these terms and conditions, a customer may be requested to
            discontinue with any Ribbit &amp; Roo play session. In this instance
            Ribbit &amp; Roo will be under no obligation to provide a refund for
            any outstanding lessons. The Parent must agree to keep the play
            session's content confidential and not to copy or use any content of
            the program directly or indirectly. At the time of publishing all
            session information is correct.
          </p>
          <h2 className="uppercase text-xl mb-4">
            ENROLMENTS, PAYMENT &amp; CANCELLATIONS
          </h2>
          <h3 className="uppercase text-l mb-2">Enrolments </h3>
          <p className="mb-8">
            Enrolments will not be accepted without payment. Please ensure you
            have transferred the funds for your 10 week enrolment before your
            child’s first session. Also please ensure you have read and
            understood the enrolment, payment &amp; cancellations policy and the
            refund &amp; missed session policy. You can book a Ribbit &amp; Roo
            play session by visiting www.ribbitandroo.com.au/play-sessions and
            by registering using our registration form. You must provide us with
            the specific information we need in order to enrol in a session with
            us. During the enrolment process, you will be asked to read and
            agree to our Terms and Conditions (this document). Once registered,
            Ribbit &amp; Roo will receive a confirmation email with your details
            and will contact you with further information about your chosen play
            session. You are eligible for a free trial session when registering.
            When registering for a free trial you must press the 'Register for a
            Free Trial' button to submit your details. Ribbit &amp; Roo will
            receive a confirmation email with your details and will contact you
            with further information about your free trial play session. After
            completing your play session free trial, if you choose to enrol in a
            10 week Ribbit &amp; Roo program you must re register at
            www.ribbitandroo.com.au/play-sessions and submit 'Register and
            Book'. This will transfer you to the payment page. Please note, that
            if you wish to enrol after your free trial we cannot guarantee that
            there will be available spaces in our 10 week program. Our play
            sessions are open to enrolments until we are sold out.
          </p>
          <h3 className="uppercase text-l mb-2">Payments</h3>
          <p className="mb-8">
            The 10 week term is paid for in advance and must be paid in full
            prior to you child attending their first session. If you wish to re
            enrol for our next 10 week term you can do so by registering at
            www.ribbitandroo.com.au/play-sessions and submitting the button
            'Register and Book'. It is your responsibility to make sure that
            there are sufficient funds in your account and that the saved card
            is valid. If a payment has failed, you will be notified and another
            form of payment/credit card must be used. The Fee is non-refundable
            under any circumstances whatsoever except with the prior written
            agreement of Ribbit &amp; Roo. If the cost of the sessions change
            you will be notified prior to the start of the following term.
            <br />
            We will accept the following methods of payment: Visa, MasterCard
            and American Express
          </p>
          <h3 className="uppercase text-l mb-2">Payments</h3>
          <p className="mb-8">
            All refund requests must be in writing to Jenny at
            jennyh@ribbitandroo.com.au.
            <br />
            Cancellation by Ribbit &amp; Roo - Ribbit &amp; Roo may cancel this
            contract at any time before the child commences the 10 week program
            for any reason whatsoever. Ribbit &amp; Roo shall not be liable for
            any loss or damage whatsoever arising from such cancellation. In the
            event of cancellation by Ribbit &amp; Roo prior to the commencement
            of the 10 week program, Ribbit &amp; Roo will refund any fees for
            outstanding sessions. If classes are cancelled as a result of
            extreme weather conditions or where local authorities/public
            guidance advise that sessions should be temporarily suspended for
            health or other reasons, then a make up lesson will be granted.
            Please see the make up lesson policy. In the event of a 'last
            minute' lesson change or a lesson cancellation by Ribbit &amp; Roo,
            we will notify you with as much notice as possible. Ribbit &amp; Roo
            will not reimburse any expenses incurred by a customer failing to
            acknowledge this communication. Should you decide to leave an
            enrolled Ribbit &amp; Roo program before the make up lesson credit
            has been used we will refund the credit to you. If insufficient
            children are booked into your session, we reserve the right to
            cancel or change the class. In this instance we will offer you
            either an alternative session to attend or a refund will be given
            for any remaining sessions after the cancellation.
          </p>
          <h2 className="uppercase text-xl mb-4">Attendance</h2>
          <p className="mb-8">
            Your payment has reserved your place just for you so if you know you
            are unable to attend a lesson, please let us know with as much
            notice as possible by emailing or telephoning Jenny at
            jennyh@ribbitandroo.com.au or +61406603583. The Parent/carer
            understands that sessions are ongoing and to be used consecutively.
            No credits or refunds will be issued for missed classes. No refunds
            will be given if you change your mind about your child participating
            in the program. Class attendance has been limited to 10 children per
            class. If the play sessions reach capacity we will update our
            booking system to stop all new enrolments until the following term.
          </p>
          <h2 className="uppercase text-xl mb-4">
            MAKE UP LESSONS &amp; BONUS SESSIONS
          </h2>
          <p className="mb-8">
            If you cannot attend a lesson and notify us prior to your session
            you are eligible for a make up lesson. This make up lesson must be
            used in another session other than your scheduled day (e.g. if you
            attend on a Tuesday, your make up lesson must be used in an
            available Wednesday session). A maximum of 2 make up lessons can be
            used in a 10 week period. Make up lessons will be arranged for any
            cancellations made by Ribbit &amp; Roo for severe weather, sick
            staff members or reasons we feel are of danger to our participants
            and staff members.
            <br />
            If you are entitled to a free bonus session after enrolling with
            Ribbit &amp; Roo, there will be a added session at the end of your
            10 week program available for you to book. Bonus sessions should be
            booked with as much notice as possible.
          </p>
          <h2 className="uppercase text-xl mb-4">HEALTH &amp; SAFETY</h2>
          <p className="mb-8">
            The safety of all the children attending our play sessions is of the
            greatest importance to us. Due to the nature of the play sessions
            and the age of the child(ren) attending, your child(ren) remain your
            responsibility while attending and must be supervised throughout. If
            you leave the play session venue for any reason you must take your
            child(ren) with you. We accept no responsibility for any injury
            caused during a play session. Please be advised that we have a first
            aid kit on site and first aid will be given to your child in the
            event an accident/injury occurs at a play session. We accept no
            responsibility for any belongings that get lost or damaged. We
            politely ask that parents and children do not attend if either are
            feeling unwell. We are a smoke free zone for the safety of our
            participating children and families and the surrounding environment.
            Any parents/carers who are seen smoking at the time of a play
            session will be asked to leave the play session with their child.
          </p>
          <h2 className="uppercase text-xl mb-4">
            PHOTOGRPAHY &amp; SOCIAL MEDIA
          </h2>
          <p className="mb-8">
            Please be aware that by enrolling your child(ren) in any Ribbit
            &amp; Roo Play Session program, you are granting us permission to
            photograph or record short video clips of your child(ren) during the
            play sessions that we may use for Ribbit &amp; Roo promotional
            purposes on our social media and/or website. No data under any
            circumstance will be passed over to a third party. If you do not
            wish to provide consent for this then you need to notify Jenny in
            writing at jennyh@ribbitandroo.com.au and notify Jenny in person at
            your play session.
          </p>
          <h2 className="uppercase text-xl mb-4">CONTACT</h2>
          <p className="mb-8">
            For specific questions about Ribbit &amp; Roo play sessions, please
            contact Jenny directly at jennyh@ribbitandroo.com.au. If we have to
            contact you we will do so in writing with the email address you
            provided us in your registration, or by telephone or text message
            with the phone number you provided us in your registration.
          </p>
        </div>
      </main>

      <footer className="bg-gray-200">
        <div className="flex flex-col mx-auto w-max justify-center ">
          <div className="mb-8">
            <img
              className="h-24 w-auto"
              src="/logo.png"
              alt="RIBBIT &amp; ROO"
            />
          </div>
          <div></div>
          <div className="flex justify-center">
            <p>Ribbit &amp; Roo ©</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
