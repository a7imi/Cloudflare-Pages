addEventListener(
  "fetch", event => {
      let url = new URL(event.request.url);
      url.hostname = "ns0.moghavemat.site";
      url.pathname = "/"
      url.protocol = "https";
      let headers = new Headers(event.request.headers);
      headers.set('Upgrade-Insecure-Requests', '1');
      headers.set('Host', 'ns0.moghavemat.site');
      headers.set('SNI', 'ns0.moghavemat.site');

      let request = new Request(url, {
        method: event.request.method,
        headers: headers,
        body: event.request.body
      });
      event.respondWith(
         fetch(request)
      )
  }
);
