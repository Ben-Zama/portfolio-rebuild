<template>
  <div class="contactPage">
    <div class="layout">
      <div class="container">
        <div class="heading">
          <pageTitle title="Contact" />
          <h2>Get in <span>touch</span></h2>
          <p class="text">Got an idea, a project, or just want to say hi? I’d love to hear from you.</p>
        </div>
        <hr />
        <div class="box">
          <PhEnvelope :size="32" />
          <div class="text">
            <p>Send me an email</p>
            <a>Benzamasimon@gmail.com</a>
          </div>
        </div>
        <hr />
        <div class="box">
          <PhPhoneCall :size="32" />
          <div class="text">
            <p>Give me a call</p>
            <a>+234 704 2195 431</a>
          </div>
        </div>
        <hr />
        <div class="socials">
          <a href="">
            <i class="bi bi-github"></i>
          </a>
          <a href="">
            <i class="bi bi-linkedin"></i>
          </a>
          <a href="">
            <i class="bi bi-twitter-x"></i>
          </a>
          <a href="">
            <i class="bi bi-instagram"></i>
          </a>
        </div>
      </div>

      <form @submit.prevent>
        <div class="span">
          <div class="input-control">
            <input type="text" placeholder=" " required />
            <label>Name</label>
          </div>
          <div class="input-control">
            <input type="email" placeholder=" " required />
            <label>Email</label>
          </div>
        </div>
        <div class="span">
          <div class="input-control">
            <input type="number" placeholder=" " />
            <label>Phone (optional)</label>
          </div>
          <div class="input-control">
            <input type="text" placeholder=" " />
            <label>Subject (optional)</label>
          </div>
        </div>
        <div class="input-control textarea-control">
          <textarea required placeholder=" " />
          <label>Message</label>
        </div>
        <button type="submit">
          <ctaButton name="Send message" />
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { PhEnvelope, PhPhoneCall } from "@phosphor-icons/vue";
</script>
