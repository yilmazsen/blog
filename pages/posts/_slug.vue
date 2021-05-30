<template>
  <div class="post">
    <h1>{{ post.title }}</h1>
    <p class="lead">{{ post.description }}</p>
    <nuxt-content :document="post" />
  </div>
</template>
<script>
export default {
  async asyncData({ params, error, $content }) {
    try {
      const postPath = `/posts/${params.slug}`;
      const [post] = await $content("posts", { deep: true })
        .where({ dir: postPath })
        .fetch();
      return { post };
    } catch (err) {
      error({
        statusCode: 404,
        message: "Page could not be found",
      });
    }
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.post.description,
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://nuxt-blog.com/" + this.post.dir,
        },
      ],
    };
  },
};
</script>npm run dev
