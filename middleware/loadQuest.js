import { useQuestStore } from "../stores/quest.js";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const questId = to.params.id;
  try {
    const test = await import(`../checks/${questId}.js`);
  } catch (err) {
    console.error(err);
    return abortNavigation({
      statusCode: 404,
      statusMessage: `Quest not found`,
      fatal: true,
    });
  }
  const { default: questInfo } = await import(`../checks/${questId}.js`);
  const { title, category } = questInfo;
  const store = useQuestStore();

  store.updateCurQuest({
    title: title,
    cat: category,
    id: questId,
  });
});
