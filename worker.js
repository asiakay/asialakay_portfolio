// worker.js
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 1. Example API routes
    if (url.pathname === "/api/ping") {
      return new Response(JSON.stringify({ ok: true, message: "pong" }), {
        headers: { "content-type": "application/json" },
      });
    }

    if (url.pathname === "/api/contact" && request.method === "POST") {
      const body = await request.text();
      // later: save to KV, send webhook, etc.
      return new Response(JSON.stringify({ received: true, data: body }), {
        headers: { "content-type": "application/json" },
      });
    }

    // 2. Default: serve static assets
    try {
      return await env.ASSETS.fetch(request);
    } catch {
      // 3. Fallback 404 (can show your own HTML page)
      return new Response("404 | Page not found", {
        status: 404,
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
    }
  },
};
