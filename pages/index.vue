<template>
  <div>
    <div class="hero-section">
      <Header />
      <div class="hero-section__welcome z-10 border-b-8 border-gray-800">
        <div>
          <h1 class="hero-section__welcome-title">
            Unlimited movies, TV shows and more.
          </h1>
          <p class="hero-section__welcome-subtitle">
            Watch anywhere. Cancel anytime.
          </p>
          <p class="hero-section__welcome-subtitle">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div class="flex">
            <input
              type="email"
              placeholder="Email address"
              class="px-4 py-2 rounded-l-sm w-full"
            />
            <NuxtLink
              to="/movies"
              class="bg-alizarin-crimson text-white items-center justify-between inline-flex px-4 py-4 rounded-r-sm"
            >
              <span class="whitespace-nowrap text-lg">Get Started</span>
              <svg
                class="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
      <img
        class="absolute top-0 left-0 right-0 bottom-0 h-full object-cover w-full"
        src="/images/hero-banner.jpg"
      />
      <div class="image_overlay"></div>
    </div>
    <div class="features">
      <div class="py-32 px-12 border-b-8 border-gray-800">
        <div class="grid lg:grid-cols-2 container items-center">
          <div class="lg:pr-10 pb-12 lg:pb-0">
            <h2
              class="text-white text-4xl lg:text-5xl font-bold mb-4 lg:mb-7 text-center lg:text-left"
            >
              Enjoy on your TV.
            </h2>
            <p class="text-white text-lg lg:text-2xl text-center lg:text-left">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <div class="mx-auto">
            <div class="store-container">
              <img src="/images/tv.png" />
              <video class="video-animation" autoplay playsinline muted loop>
                <source src="/videos/video-tv-in-0819.m4v" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div class="py-32 px-12 border-b-8 border-gray-800">
        <div class="grid lg:grid-cols-2 container items-center">
          <div class="mx-auto lg:order-1 order-2">
            <img src="/images/mobile-0819.jpg" />
          </div>
          <div class="lg:pr-10 pb-12 lg:pb-0 lg:order-2 order-1">
            <h2
              class="text-white text-4xl lg:text-5xl font-bold mb-4 lg:mb-7 text-center lg:text-left"
            >
              Download your shows to watch offline.
            </h2>
            <p class="text-white text-lg lg:text-2xl text-center lg:text-lef">
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>
      <div class="py-32 px-12 border-b-8 border-gray-800">
        <div class="grid lg:grid-cols-2 container items-center">
          <div class="lg:pr-10 pb-12 lg:pb-0">
            <h2
              class="text-white text-4xl lg:text-5xl font-bold mb-4 lg:mb-7 text-center lg:text-left"
            >
              Watch everywhere.
            </h2>
            <p class="text-white text-lg lg:text-2xl text-center lg:text-left">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          <div class="mx-auto">
            <div class="store-container-watch">
              <img src="/images/device-pile-in.png" />
              <video class="video-animation" autoplay playsinline muted loop>
                <source src="/videos/video-devices-in.m4v" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div class="py-32 px-12 border-b-8 border-gray-800">
        <div class="grid lg:grid-cols-2 container items-center">
          <div class="mx-auto lg:order-1 order-2">
            <img src="/images/4.png" />
          </div>
          <div class="lg:pr-10 pb-12 lg:pb-0 lg:order-2 order-1">
            <h2
              class="text-white text-4xl lg:text-5xl font-bold mb-4 lg:mb-7 text-center lg:text-left"
            >
              Create profiles for children.
            </h2>
            <p class="text-white text-lg lg:text-2xl text-center lg:text-left">
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'IndexPage',
  setup() {},
})
</script>

<style lang="scss" scoped>
.hero-section {
  position: relative;
  .image_overlay {
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0) 40%,
      rgba(0, 0, 0, 0) 75%,
      rgba(0, 0, 0, 0.8) 100%
    );
    z-index: 2;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  &__welcome {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    text-align: center;
    position: relative;
    height: 500px;
    @media screen and (max-width: 768px) {
      height: 512px;
      background-position: center top;
    }
    @media screen and (min-width: 991px) {
      height: 700px;
      background-position: center top;
    }
    h1 {
      font-size: 3.125rem;
      font-weight: bold;
      line-height: 1.1;
      max-width: 640px;
      margin: 0 auto;
    }
    p {
      font-size: 23px;
      font-weight: lighter;
      max-width: 540px;
      margin: auto;
      padding: 15px 0;
    }
  }
}

.store-container {
  margin: -10% 0 0 0;
  position: relative;
  img {
    position: relative;
    z-index: 2;
  }

  .video-animation {
    width: 100%;
    height: 100%;
    max-width: 73%;
    max-height: 54%;
    position: absolute;
    top: 46%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
}

.store-container-watch {
  margin: -10% 0 0 0;
  position: relative;
  img {
    position: relative;
    z-index: 2;
  }
  .video-animation {
    width: 100%;
    height: 100%;
    max-width: 63%;
    max-height: 47%;
    position: absolute;
    top: 34%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
}
</style>
