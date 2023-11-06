<template>
  <footer class="footer bg-dark text-light">
    <div class="footer__container container-fluid footer__container--with-social">
      <div class="row py-5">
        <div class="col-12 col-md-6 col-lg-4">
          <div class="footer__info pb-3">
            <a href="http://studentlife.uiowa.edu" class="footer__logo">
              <img
                loading="lazy"
                src="~/assets/images/dosl-uiowa.png"
                alt="Division Of Student Life"
                class="img-fluid"
              />
            </a>

            <div class="footer__summary my-3">
              <p>
                After Class is a service of the
                <a rel="noopener" href="http://studentlife.uiowa.edu" target="_blank"
                  >Division of Student Life</a
                >.
              </p>
            </div>

            <div
              class="footer__address my-3"
              itemscope=""
              itemtype="http://schema.org/PostalAddress"
            >
              <p>
                <font-awesome-icon icon="fas fa-phone mx-2" />
                <a href="tel:319-335-3557"> 319-335-3557 </a>
              </p>
            </div>

            <nav aria-labelledby="footer-social">
              <h2 class="sr-only" id="footer-social">Social Media</h2>
              <ul class="footer__socialmedia">
                <li>
                  <a
                    href="https://www.facebook.com/uistudentlife"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-facebook-square fa-2x pr-2 align-middle"></i>
                    <span class="sr-only">Facebook</span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/uistudentlife"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-twitter-square fa-2x pr-2 align-middle"></i>
                    <span class="sr-only">Twitter</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <!-- end footer__info -->
        </div>
        <!-- end .col -->
        <div class="col-12 col-md-6 col-lg-8">
          <div class="footer__navigation pb-3">
            <div class="row">
              <div class="col">
                <div class="footer__links">
                  <h2 class="sr-only">Footer Navigation</h2>
                  <ul class="list-unstyled row">
                    <li class="col-6">
                      <NuxtLink href="/" class="text-light d-block py-2">Events</NuxtLink>
                    </li>

                    <li class="col-6">
                      <NuxtLink href="/add/" class="text-light d-block py-2"
                        >Add your event</NuxtLink
                      >
                    </li>

                    <li class="col-6">
                      <NuxtLink href="/about-after-class/" class="text-light d-block py-2"
                        >About</NuxtLink
                      >
                    </li>

                    <li class="col-6">
                      <NuxtLink
                        href="https://slc.studentlife.uiowa.edu/resources/event-promotion"
                        class="text-light d-block py-2"
                        >Promote</NuxtLink
                      >
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="footer__buttons py-2">
                  <NuxtLink
                    href="/events/weekend"
                    class="btn d-block d-sm-inline-block d-lg-block btn-outline-warning mr-1 mb-1"
                    >This Weekend
                    <font-awesome-icon icon="fas fa-arrow-right" />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end .col -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->

    <div class="footer__copyrightcontainer text-black">
      <div class="container-xl">
        <div class="row">
          <div class="footer__copyright py-2 col">
            <p class="mb-0 small">
              &copy; {{ currentYear }} <a href="http://www.uiowa.edu/">The University of Iowa</a>.
              All Rights Reserved.
              <a
                href="http://www.uiowa.edu/homepage/online-privacy-information"
                class="footer__bar-link"
                >Privacy Information</a
              >
              <a
                href="https://opsmanual.uiowa.edu/community-policies/nondiscrimination-statement"
                class="footer__bar-link"
                >Nondiscrimination Statement</a
              >
              <a href="https://uiowa.edu/accessibility" target="_blank" class="footer__bar-link"
                >Accessibility</a
              >
              <a href="https://nativeamericancouncil.org.uiowa.edu/" class="footer__bar-link"
                >UI Indigenous Land Acknowledgement</a
              >
              Created by
              <a href="https://slc.studentlife.uiowa.edu/">Student Life Communications</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
const currentYear = new Date().getFullYear();
</script>
