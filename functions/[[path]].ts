export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);

  const isPagesDevHost =
    url.hostname === "shiftbackspace.pages.dev" ||
    url.hostname.endsWith(".shiftbackspace.pages.dev");

  if (isPagesDevHost) {
    url.hostname = "shiftbackspace.com";
    url.protocol = "https:";

    return Response.redirect(url.toString(), 301);
  }

  return context.next();
};
