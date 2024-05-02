export default defineEventHandler(() => {
  // console.log(event);
  const runtimeConfig = useRuntimeConfig();

  return {
    config: runtimeConfig.public.apiBase,
    /* esse arquivo foi eu que criei baseado na aula do curso
       com o comando no terminal: nuxi add api test

       E essa public.apiBase é uma variável de ambiente que eu setei
       lá em nuxt.config.ts, baseado no que está no env
     */
  };
});
