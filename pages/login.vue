<template>
  <div class="container">
    <div class="left-col">
      <div class="login-box">
        <h3>Login</h3>
        <p class="help">
          Skill issue? <a href="mailto:dbsitdt@gmail.com">Get help.</a>
        </p>
        <p v-if="error" class="error-message">
          {{ error }}
        </p>
        <form id="login-form" @submit.prevent="submitCred">
          <div class="input-box">
            <div class="field">
              <label for="email">Email</label>
              <input
                v-model.trim="email"
                type="email"
                name="userEmail"
                id="email"
                required="true"
                autocomplete="email"
              />
            </div>
            <div class="field">
              <label for="password">Password</label
              ><input
                v-model.trim="password"
                type="password"
                id="password"
                name="userPassword"
                required="true"
                autocomplete="current-password"
              />
            </div>
          </div>
          <div class="itc24-container">
            https://mega.nz/file/EKtxXQ7a#nmas0LLAd0iNiv0LLyTG0K3TGdyME05PvtkW6wEsUL8
          </div>
          <button type="submit" form="login-form" class="submit-form-btn">
            <div v-if="isLoading" class="wrap">
              <div class="spinner"></div>
            </div>

            <p v-else>Login</p>
          </button>
        </form>
      </div>
    </div>
    <div draggable="false" class="right-col"></div>
  </div>
</template>
<script setup>
import { useAuthStore } from "../stores/auth.ts";
const store = useAuthStore();
const error = ref("");
const isLoading = ref(false);
const email = ref("");
const password = ref("");
onBeforeMount(async () => {});

const submitCred = async function () {
  error.value = "";
  isLoading.value = true;

  try {
    await store.auth({ email: email.value, password: password.value });
    isLoading.value = false;

    return navigateTo("/quests");
  } catch (err) {
    if (err.message === "Incorrect email or password") {
      // show the right error msg that wrong emial or pwd
      error.value = "Your email and password are not correct.";
    } else {
      // show something wnet wrong
      error.value = "Something went wrong; Please try again later.";
    }
    isLoading.value = false;
  }
};
const pwd = useCookie("pwd");
if (!pwd.value) {
  pwd.value = "itdtIsTheBest!";
}
definePageMeta({
  layout: "login",
  middleware: ["unauth-page"],
});
useHead({
  title: `Login - Code Quest`,
});
</script>
<style scoped>
a {
  color: var(--accent-main);
}
.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.itc24-container {
  display: none;
}
label {
  display: block;
}
.input-box {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
p.error-message {
  color: rgb(255, 97, 97);
}
.left-col {
  flex: 1;
  height: 100%;
  display: grid;
  place-items: center;
  background: #2a3232;
}
h3 {
  font-size: 3.6rem;
  font-weight: 600;
}
p.help {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 2.3rem;
}
.login-box {
  background: #3a4040;
  color: white;
  width: 85%;
  padding: 72px clamp(44px, 3vw, 55px);
}
label {
  font-size: 20px;
  margin-bottom: 4px;
}
input[type="email"],
input[type="password"] {
  background: transparent;
  border: 3px solid white;
  border-radius: 4px;
  outline: none;
  font-size: 1rem;
  padding: 13px;
  color: white;
  transition: border-color 250ms ease-in-out;
  width: clamp(200px, 65%, 334px);
  height: 42px;
}
input[type="email"]:focus,
input[type="password"]:focus {
  border: 3px solid rgb(177, 177, 177);
}

button {
  -webkit-appearance: none;
  appearance: none;
  margin-top: 32px;
  padding: 0.6rem 1.8rem;
  border-radius: 10px;
  background: var(--accent-main);
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  width: 110px;
  height: 50px;
}
.right-col {
  flex: 1;

  display: none;
}
.wrap {
  /*   Flex Perfect Centring  */
  display: flex;
  justify-content: center;
  align-items: center;
  /*   Colors */
  box-shadow: 0px 40px 60px -20px rgba(0, 0, 0, 0.2);
}

.spinner {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 4px solid var(--accent-dark);
  border-left: 4px solid white;
  animation: spinner 1.5s linear infinite;
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (min-width: 1000px) {
  .container {
    flex-direction: row;
  }
  .login-box {
    width: 70%;
  }
  .right-col {
    background: url("../assets/Login/loginPhoto.webp"),
      lightgray 50% / cover no-repeat;
    background-size: cover;
    box-shadow: 0px 4px 25px 21px rgba(0, 0, 0, 0.25) inset;
    display: block;
  }
}
</style>
