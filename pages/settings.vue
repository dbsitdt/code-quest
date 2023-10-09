<template>
  <div class="settings-container">
    <h4>User Settings</h4>
    <div class="row"></div>
    <!-- <div class="setting">
      <h5>Profile Picture</h5>
      <div class="form-control">
        <div>
          <input
            id="dbs-logo"
            name="pfp"
            type="radio"
            value="1"
            v-model="pfp"
          />
          <label for="dbs-logo">DBS Logo</label>
        </div>
        <div>
          <input
            id="itdt-logo"
            name="pfp"
            value="2"
            type="radio"
            v-model="pfp"
          />
          <label for="itdt-logo">ITDT Logo</label>
        </div>
        <div>
          <input
            id="question-mark"
            value="3"
            name="pfp"
            type="radio"
            v-model="pfp"
          />
          <label for="question-mark">Question Mark</label>
        </div>
      </div>
    </div> -->
    <!-- <button @click="saveSettings" class="btn">Save</button> -->
  </div>
</template>
<script setup>
import { useUserStore } from "../stores/user.ts";
import { useAuthStore } from "../stores/auth.ts";
const store = useUserStore();
const authStore = useAuthStore();
const pfp = ref(store.getPfp);
const saveSettings = async function () {
  store.updatePfp(pfp.value);
  store.updateUserInfo(store.getUserId, authStore.getToken);
};
definePageMeta({
  middleware: ["auth-page"],
});
</script>
<style scoped>
.btn {
  margin-top: 20px;
  padding: 0.6rem 1.3rem;
  border-radius: 10px;
  background: var(--accent-main);
  border: none;
  color: white;
  font-size: 1.1rem;
  user-select: none;
  transition: background 200ms linear;
  cursor: pointer;
}
.btn:hover {
  background: #4b9fff;
}
.settings-container {
  padding: 3vh 5vw;
}
h4 {
  font-size: 2rem;
  color: white;
}
h5 {
  color: white;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
}
label {
  padding-left: 0.5rem;
  color: white;
  font-size: 1.1rem;
}
input[type="radio"] {
  accent-color: var(--accent-dark);
  width: 14px;
  height: 14px;
}
.settings-container .row {
  height: 3px;
  width: 100%;
  margin-bottom: clamp(1.2rem, 3vh, 1.5rem);
  background: rgba(255, 255, 255, 0.15);
}
.setting {
  background: rgba(255, 255, 255, 0.15);
  padding: 1.5rem;
}
</style>
