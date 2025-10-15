export default {
  async fetch(request, env, ctx) {
    return new Response("Asia Lakay Portfolio Cloudflare Worker is live!", {
      headers: { "content-type": "text/plain" },
    });
  },
};
