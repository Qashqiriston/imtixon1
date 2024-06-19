<template>
  <section>
    <h2>Post:</h2>
    <pre >{{ posts?.[0]?.name?.toUpperCase() }}</pre>

    <BaseButton @click="fetchNextPost" />


  </section>
</template>

<script setup lang="ts">
import type { Post, Sanjar, PostId, PersonStatus } from "~/types/post"

definePageMeta({
  layout: "custom",
  middleware: ["profile"],
});

const postId = ref(1);

const post_id : PostId = 1

const localPost : Post = {
  postId: 1,
  id: 1,
  name: 'Name',
  body: ["Body", "Body2"],
  onChange(str) {
    const s = String(str)
    return s.toUpperCase()
  },
  comment: {
    id: 1,
    text: 'Text'
  }
}

const sanjar : Sanjar = {
  name: "Sanjar",
  age: 24,
  job: "Frontend Developer",
  countryName: "Uzbekistan",
  status: "success",
  workPlace: {
    name: 'Commeta',
    tech: 'JavaScript'
  }
}

const {
  data: posts,
} = useFetch<Post[]>("https://jsonplaceholder.typicode.com/comments", {
  watch: [postId],
  query: {
    postId,
  },
});

const getUserStatusText = (status: PersonStatus) => {
  return status === 'success' ? "Muvaffaqiyatli" : 'Muvaffaqiyatsiz'
}

const fetchNextPost = () => {
  postId.value++;
};

interface Card {
  title : string | number
  colors: Pick<Post, 'name'>[]
}
</script>
