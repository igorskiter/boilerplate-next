const locales = ['br', 'en'];

// Get the preferred locale, similar to the above or using a library
function getLocale(request) {
  if (request && request.language) {
    return request.language;
  }
  return 'br';
}

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);

  request.nextUrl.pathname = `/${locale}${pathname}`;

  // eslint-disable-next-line consistent-return
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    '/'
    // Optional: only run on root (/) URL
    // '/'
  ],
};
