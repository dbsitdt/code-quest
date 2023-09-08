<template>
  <div ref="card" class="progress-card">
    <h3 class="white mastery-text">
      Mastery: <span class="yellow rank">Novice</span>
    </h3>
    <div class="progress-bar">
      <svg class="fill" viewBox="0 0 308 308">
        <circle
          class="meter2"
          fill="none"
          stroke="#151C24"
          stroke-width="30"
          r="124"
          cx="154"
          cy="154"
        />
        <circle
          ref="meter"
          class="meter"
          fill="none"
          stroke-width="30"
          r="124"
          cx="154"
          cy="154"
          :style="meterStyles"
        />
      </svg>
      <div class="card-text">
        <h4 ref="number" class="yellow number">
          {{ tasksCompleted }}
        </h4>
        <p class="white">Quests Completed</p>
      </div>
    </div>
    <button @click="downloadCard" class="button">
      <img src="../../assets/Quests/share.svg" />Share
    </button>
  </div>
</template>
<script setup>
import html2canvas from "html2canvas";

const props = defineProps(["tasksCompleted"]);
const tasksCompleted = computed(() => props.tasksCompleted);
const meter = ref(null);
const number = ref(null);
const strokeDasharray = ref(0);
const strokeDashoffset = ref(0);
const meterStyles = computed(() => {
  return {
    strokeDasharray: strokeDasharray.value,
    strokeDashoffset: strokeDashoffset.value,
  };
});
const max_tasks = 6;
onMounted(() => {
  const circumference = 2 * Math.PI * meter.value.getAttribute("r");
  const offset = computed(
    () => circumference * (1 - tasksCompleted.value / max_tasks)
  );
  strokeDasharray.value = `${circumference} ${circumference}`;
  strokeDashoffset.value = offset.value;
});
const card = ref(null);
const downloadCard = async function () {
  const el = card.value;
  const elClone = el.cloneNode(true);
  elClone.style.borderRadius = 0;
  elClone.style.zIndex = -5;
  elClone.style.width = "400px";
  elClone.style.top = 0;
  elClone.style.left = 0;
  elClone.style.position = "absolute";
  elClone.querySelector("button").style.display = "none";
  document.querySelector("body").append(elClone);
  const options = {
    type: "dataURL",
  };
  const printCanvas = await html2canvas(elClone, options);
  elClone.remove();
  const link = document.createElement("a");
  link.setAttribute("download", "download.png");
  link.setAttribute(
    "href",
    printCanvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream")
  );
  // elClone.remove();

  link.click();
};
</script>
<style scoped>
.mastery-text {
  font-size: 30px;
  font-style: normal;
  font-weight: 450;
  margin-bottom: 1rem;
}
.rank {
  font-style: normal;
  font-weight: 600;
}
.card-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -59%);
}
.card-text .number {
  font-size: clamp(40px, 3vw, 70px);
  font-style: normal;
  font-weight: 500;
}
.card-text p {
  font-size: clamp(10px, 1vw, 16px);
  font-style: normal;
  font-weight: 500;
}
.progress-card {
  background-color: #3b3d42;
  border-radius: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", Sans-Serif;
  width: 100%;
  /* box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); */
  transition: transform 0.6s;
  backface-visibility: hidden;
  padding: 5vh 0;
  position: relative;
}
@media (min-width: 1550px) {
  .progress-card {
    width: 85%;
  }
}
/* owen so bully not let me have flip effect*/
/* .card:hover .progress-card {
  transform: rotateY(-20deg);
} */

.progress-bar {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: clamp(150px, 18vw, 328px);
  height: clamp(150px, 18vw, 328px);
}

.meter {
  stroke-dasharray: 779.11432;
  stroke-dashoffset: 779.11432;
  transition: stroke-dashoffset 0.5s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  stroke: #e1b86f;
}
.progress-text {
  padding-top: 1rem;
}
.meter2 {
  stroke-dasharray: 779.11432px, 779.11432px;
  stroke-dashoffset: 0;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}

button.button {
  background-color: #444444;
  color: white;
  border-radius: 5px;
  border: 2px solid #278bff;
  cursor: pointer;
  font-family: "Poppins", Sans-Serif;
  padding: 0.4rem 13px;
  transition-duration: 300ms;
  font-size: 18px;
  margin-top: 1rem;
  display: flex;
  gap: 0.6rem;
}

button.button:hover {
  border: 2px solid #57bbff;
}

.white {
  color: white;
}

.yellow {
  color: #e1b86f;
}
@media (max-width: 1300px) {
  .progress-bar {
    width: 250px;
    height: 250px;
  }
  .card-text .number {
    font-size: 60px;
  }
  .card-text p {
    font-size: 13px;
  }
}
</style>
