import type { APIRoute } from "astro";

export const GET: APIRoute = ({ request }) => {
  return new Response(
    JSON.stringify({
      userAgent: request.headers.get("User-Agent")?.includes("Mobile"),
    })
  );
};
