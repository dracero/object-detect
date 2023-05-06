try {
  self["workbox:core:6.5.3"] && _();
} catch {
}
const W = {
  "invalid-value": ({ paramName: t, validValueDescription: e, value: r }) => {
    if (!t || !e)
      throw new Error("Unexpected input to 'invalid-value' error.");
    return `The '${t}' parameter was given a value with an unexpected value. ${e} Received a value of ${JSON.stringify(r)}.`;
  },
  "not-an-array": ({ moduleName: t, className: e, funcName: r, paramName: s }) => {
    if (!t || !e || !r || !s)
      throw new Error("Unexpected input to 'not-an-array' error.");
    return `The parameter '${s}' passed into '${t}.${e}.${r}()' must be an array.`;
  },
  "incorrect-type": ({ expectedType: t, paramName: e, moduleName: r, className: s, funcName: n }) => {
    if (!t || !e || !r || !n)
      throw new Error("Unexpected input to 'incorrect-type' error.");
    const a = s ? `${s}.` : "";
    return `The parameter '${e}' passed into '${r}.${a}${n}()' must be of type ${t}.`;
  },
  "incorrect-class": ({ expectedClassName: t, paramName: e, moduleName: r, className: s, funcName: n, isReturnValueProblem: a }) => {
    if (!t || !r || !n)
      throw new Error("Unexpected input to 'incorrect-class' error.");
    const o = s ? `${s}.` : "";
    return a ? `The return value from '${r}.${o}${n}()' must be an instance of class ${t}.` : `The parameter '${e}' passed into '${r}.${o}${n}()' must be an instance of class ${t}.`;
  },
  "missing-a-method": ({ expectedMethod: t, paramName: e, moduleName: r, className: s, funcName: n }) => {
    if (!t || !e || !r || !s || !n)
      throw new Error("Unexpected input to 'missing-a-method' error.");
    return `${r}.${s}.${n}() expected the '${e}' parameter to expose a '${t}' method.`;
  },
  "add-to-cache-list-unexpected-type": ({ entry: t }) => `An unexpected entry was passed to 'workbox-precaching.PrecacheController.addToCacheList()' The entry '${JSON.stringify(t)}' isn't supported. You must supply an array of strings with one or more characters, objects with a url property or Request objects.`,
  "add-to-cache-list-conflicting-entries": ({ firstEntry: t, secondEntry: e }) => {
    if (!t || !e)
      throw new Error("Unexpected input to 'add-to-cache-list-duplicate-entries' error.");
    return `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${t} but different revision details. Workbox is unable to cache and version the asset correctly. Please remove one of the entries.`;
  },
  "plugin-error-request-will-fetch": ({ thrownErrorMessage: t }) => {
    if (!t)
      throw new Error("Unexpected input to 'plugin-error-request-will-fetch', error.");
    return `An error was thrown by a plugins 'requestWillFetch()' method. The thrown error message was: '${t}'.`;
  },
  "invalid-cache-name": ({ cacheNameId: t, value: e }) => {
    if (!t)
      throw new Error("Expected a 'cacheNameId' for error 'invalid-cache-name'");
    return `You must provide a name containing at least one character for setCacheDetails({${t}: '...'}). Received a value of '${JSON.stringify(e)}'`;
  },
  "unregister-route-but-not-found-with-method": ({ method: t }) => {
    if (!t)
      throw new Error("Unexpected input to 'unregister-route-but-not-found-with-method' error.");
    return `The route you're trying to unregister was not  previously registered for the method type '${t}'.`;
  },
  "unregister-route-route-not-registered": () => "The route you're trying to unregister was not previously registered.",
  "queue-replay-failed": ({ name: t }) => `Replaying the background sync queue '${t}' failed.`,
  "duplicate-queue-name": ({ name: t }) => `The Queue name '${t}' is already being used. All instances of backgroundSync.Queue must be given unique names.`,
  "expired-test-without-max-age": ({ methodName: t, paramName: e }) => `The '${t}()' method can only be used when the '${e}' is used in the constructor.`,
  "unsupported-route-type": ({ moduleName: t, className: e, funcName: r, paramName: s }) => `The supplied '${s}' parameter was an unsupported type. Please check the docs for ${t}.${e}.${r} for valid input types.`,
  "not-array-of-class": ({ value: t, expectedClass: e, moduleName: r, className: s, funcName: n, paramName: a }) => `The supplied '${a}' parameter must be an array of '${e}' objects. Received '${JSON.stringify(t)},'. Please check the call to ${r}.${s}.${n}() to fix the issue.`,
  "max-entries-or-age-required": ({ moduleName: t, className: e, funcName: r }) => `You must define either config.maxEntries or config.maxAgeSecondsin ${t}.${e}.${r}`,
  "statuses-or-headers-required": ({ moduleName: t, className: e, funcName: r }) => `You must define either config.statuses or config.headersin ${t}.${e}.${r}`,
  "invalid-string": ({ moduleName: t, funcName: e, paramName: r }) => {
    if (!r || !t || !e)
      throw new Error("Unexpected input to 'invalid-string' error.");
    return `When using strings, the '${r}' parameter must start with 'http' (for cross-origin matches) or '/' (for same-origin matches). Please see the docs for ${t}.${e}() for more info.`;
  },
  "channel-name-required": () => "You must provide a channelName to construct a BroadcastCacheUpdate instance.",
  "invalid-responses-are-same-args": () => "The arguments passed into responsesAreSame() appear to be invalid. Please ensure valid Responses are used.",
  "expire-custom-caches-only": () => "You must provide a 'cacheName' property when using the expiration plugin with a runtime caching strategy.",
  "unit-must-be-bytes": ({ normalizedRangeHeader: t }) => {
    if (!t)
      throw new Error("Unexpected input to 'unit-must-be-bytes' error.");
    return `The 'unit' portion of the Range header must be set to 'bytes'. The Range header provided was "${t}"`;
  },
  "single-range-only": ({ normalizedRangeHeader: t }) => {
    if (!t)
      throw new Error("Unexpected input to 'single-range-only' error.");
    return `Multiple ranges are not supported. Please use a  single start value, and optional end value. The Range header provided was "${t}"`;
  },
  "invalid-range-values": ({ normalizedRangeHeader: t }) => {
    if (!t)
      throw new Error("Unexpected input to 'invalid-range-values' error.");
    return `The Range header is missing both start and end values. At least one of those values is needed. The Range header provided was "${t}"`;
  },
  "no-range-header": () => "No Range header was found in the Request provided.",
  "range-not-satisfiable": ({ size: t, start: e, end: r }) => `The start (${e}) and end (${r}) values in the Range are not satisfiable by the cached response, which is ${t} bytes.`,
  "attempt-to-cache-non-get-request": ({ url: t, method: e }) => `Unable to cache '${t}' because it is a '${e}' request and only 'GET' requests can be cached.`,
  "cache-put-with-no-response": ({ url: t }) => `There was an attempt to cache '${t}' but the response was not defined.`,
  "no-response": ({ url: t, error: e }) => {
    let r = `The strategy could not generate a response for '${t}'.`;
    return e && (r += ` The underlying error is ${e}.`), r;
  },
  "bad-precaching-response": ({ url: t, status: e }) => `The precaching request for '${t}' failed` + (e ? ` with an HTTP status of ${e}.` : "."),
  "non-precached-url": ({ url: t }) => `createHandlerBoundToURL('${t}') was called, but that URL is not precached. Please pass in a URL that is precached instead.`,
  "add-to-cache-list-conflicting-integrities": ({ url: t }) => `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${t} with different integrity values. Please remove one of them.`,
  "missing-precache-entry": ({ cacheName: t, url: e }) => `Unable to find a precached response in ${t} for ${e}.`,
  "cross-origin-copy-response": ({ origin: t }) => `workbox-core.copyResponse() can only be used with same-origin responses. It was passed a response with origin ${t}.`,
  "opaque-streams-source": ({ type: t }) => {
    const e = `One of the workbox-streams sources resulted in an '${t}' response.`;
    return t === "opaqueredirect" ? `${e} Please do not use a navigation request that results in a redirect as a source.` : `${e} Please ensure your sources are CORS-enabled.`;
  }
}, F = (t, ...e) => {
  let r = t;
  return e.length > 0 && (r += ` :: ${JSON.stringify(e)}`), r;
}, H = (t, e = {}) => {
  const r = W[t];
  if (!r)
    throw new Error(`Unable to find message for code '${t}'.`);
  return r(e);
}, K = process.env.NODE_ENV === "production" ? F : H;
class d extends Error {
  /**
   *
   * @param {string} errorCode The error code that
   * identifies this particular error.
   * @param {Object=} details Any relevant arguments
   * that will help developers identify issues should
   * be added as a key on the context object.
   */
  constructor(e, r) {
    const s = K(e, r);
    super(s), this.name = e, this.details = r;
  }
}
const G = (t, e) => {
  if (!Array.isArray(t))
    throw new d("not-an-array", e);
}, J = (t, e, r) => {
  if (typeof t[e] !== "function")
    throw r.expectedMethod = e, new d("missing-a-method", r);
}, Y = (t, e, r) => {
  if (typeof t !== e)
    throw r.expectedType = e, new d("incorrect-type", r);
}, Q = (t, e, r) => {
  if (!(t instanceof e))
    throw r.expectedClassName = e.name, new d("incorrect-class", r);
}, X = (t, e, r) => {
  if (!e.includes(t))
    throw r.validValueDescription = `Valid values are ${JSON.stringify(e)}.`, new d("invalid-value", r);
}, Z = (t, e, r) => {
  const s = new d("not-array-of-class", r);
  if (!Array.isArray(t))
    throw s;
  for (const n of t)
    if (!(n instanceof e))
      throw s;
}, h = process.env.NODE_ENV === "production" ? null : {
  hasMethod: J,
  isArray: G,
  isInstance: Q,
  isOneOf: X,
  isType: Y,
  isArrayOfClass: Z
}, i = process.env.NODE_ENV === "production" ? null : (() => {
  "__WB_DISABLE_DEV_LOGS" in self || (self.__WB_DISABLE_DEV_LOGS = !1);
  let t = !1;
  const e = {
    debug: "#7f8c8d",
    log: "#2ecc71",
    warn: "#f39c12",
    error: "#c0392b",
    groupCollapsed: "#3498db",
    groupEnd: null
    // No colored prefix on groupEnd
  }, r = function(a, o) {
    if (self.__WB_DISABLE_DEV_LOGS)
      return;
    if (a === "groupCollapsed" && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      console[a](...o);
      return;
    }
    const c = [
      `background: ${e[a]}`,
      "border-radius: 0.5em",
      "color: white",
      "font-weight: bold",
      "padding: 2px 0.5em"
    ], u = t ? [] : ["%cworkbox", c.join(";")];
    console[a](...u, ...o), a === "groupCollapsed" && (t = !0), a === "groupEnd" && (t = !1);
  }, s = {}, n = Object.keys(e);
  for (const a of n) {
    const o = a;
    s[o] = (...c) => {
      r(o, c);
    };
  }
  return s;
})();
try {
  self["workbox:routing:6.5.3"] && _();
} catch {
}
const M = "GET", z = [
  "DELETE",
  "GET",
  "HEAD",
  "PATCH",
  "POST",
  "PUT"
], R = (t) => t && typeof t == "object" ? (process.env.NODE_ENV !== "production" && h.hasMethod(t, "handle", {
  moduleName: "workbox-routing",
  className: "Route",
  funcName: "constructor",
  paramName: "handler"
}), t) : (process.env.NODE_ENV !== "production" && h.isType(t, "function", {
  moduleName: "workbox-routing",
  className: "Route",
  funcName: "constructor",
  paramName: "handler"
}), { handle: t });
class N {
  /**
   * Constructor for Route class.
   *
   * @param {workbox-routing~matchCallback} match
   * A callback function that determines whether the route matches a given
   * `fetch` event by returning a non-falsy value.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(e, r, s = M) {
    process.env.NODE_ENV !== "production" && (h.isType(e, "function", {
      moduleName: "workbox-routing",
      className: "Route",
      funcName: "constructor",
      paramName: "match"
    }), s && h.isOneOf(s, z, { paramName: "method" })), this.handler = R(r), this.match = e, this.method = s;
  }
  /**
   *
   * @param {workbox-routing-handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response
   */
  setCatchHandler(e) {
    this.catchHandler = R(e);
  }
}
class ee extends N {
  /**
   * If the regular expression contains
   * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
   * the captured values will be passed to the
   * {@link workbox-routing~handlerCallback} `params`
   * argument.
   *
   * @param {RegExp} regExp The regular expression to match against URLs.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(e, r, s) {
    process.env.NODE_ENV !== "production" && h.isInstance(e, RegExp, {
      moduleName: "workbox-routing",
      className: "RegExpRoute",
      funcName: "constructor",
      paramName: "pattern"
    });
    const n = ({ url: a }) => {
      const o = e.exec(a.href);
      if (o) {
        if (a.origin !== location.origin && o.index !== 0) {
          process.env.NODE_ENV !== "production" && i.debug(`The regular expression '${e.toString()}' only partially matched against the cross-origin URL '${a.toString()}'. RegExpRoute's will only handle cross-origin requests if they match the entire URL.`);
          return;
        }
        return o.slice(1);
      }
    };
    super(n, r, s);
  }
}
const l = (t) => new URL(String(t), location.href).href.replace(new RegExp(`^${location.origin}`), "");
class te {
  /**
   * Initializes a new Router.
   */
  constructor() {
    this._routes = /* @__PURE__ */ new Map(), this._defaultHandlerMap = /* @__PURE__ */ new Map();
  }
  /**
   * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
   * method name ('GET', etc.) to an array of all the corresponding `Route`
   * instances that are registered.
   */
  get routes() {
    return this._routes;
  }
  /**
   * Adds a fetch event listener to respond to events when a route matches
   * the event's request.
   */
  addFetchListener() {
    self.addEventListener("fetch", (e) => {
      const { request: r } = e, s = this.handleRequest({ request: r, event: e });
      s && e.respondWith(s);
    });
  }
  /**
   * Adds a message event listener for URLs to cache from the window.
   * This is useful to cache resources loaded on the page prior to when the
   * service worker started controlling it.
   *
   * The format of the message data sent from the window should be as follows.
   * Where the `urlsToCache` array may consist of URL strings or an array of
   * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
   *
   * ```
   * {
   *   type: 'CACHE_URLS',
   *   payload: {
   *     urlsToCache: [
   *       './script1.js',
   *       './script2.js',
   *       ['./script3.js', {mode: 'no-cors'}],
   *     ],
   *   },
   * }
   * ```
   */
  addCacheListener() {
    self.addEventListener("message", (e) => {
      if (e.data && e.data.type === "CACHE_URLS") {
        const { payload: r } = e.data;
        process.env.NODE_ENV !== "production" && i.debug("Caching URLs from the window", r.urlsToCache);
        const s = Promise.all(r.urlsToCache.map((n) => {
          typeof n == "string" && (n = [n]);
          const a = new Request(...n);
          return this.handleRequest({ request: a, event: e });
        }));
        e.waitUntil(s), e.ports && e.ports[0] && s.then(() => e.ports[0].postMessage(!0));
      }
    });
  }
  /**
   * Apply the routing rules to a FetchEvent object to get a Response from an
   * appropriate Route's handler.
   *
   * @param {Object} options
   * @param {Request} options.request The request to handle.
   * @param {ExtendableEvent} options.event The event that triggered the
   *     request.
   * @return {Promise<Response>|undefined} A promise is returned if a
   *     registered route can handle the request. If there is no matching
   *     route and there's no `defaultHandler`, `undefined` is returned.
   */
  handleRequest({ request: e, event: r }) {
    process.env.NODE_ENV !== "production" && h.isInstance(e, Request, {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "handleRequest",
      paramName: "options.request"
    });
    const s = new URL(e.url, location.href);
    if (!s.protocol.startsWith("http")) {
      process.env.NODE_ENV !== "production" && i.debug("Workbox Router only supports URLs that start with 'http'.");
      return;
    }
    const n = s.origin === location.origin, { params: a, route: o } = this.findMatchingRoute({
      event: r,
      request: e,
      sameOrigin: n,
      url: s
    });
    let c = o && o.handler;
    const u = [];
    process.env.NODE_ENV !== "production" && c && (u.push(["Found a route to handle this request:", o]), a && u.push([
      "Passing the following params to the route's handler:",
      a
    ]));
    const f = e.method;
    if (!c && this._defaultHandlerMap.has(f) && (process.env.NODE_ENV !== "production" && u.push(`Failed to find a matching route. Falling back to the default handler for ${f}.`), c = this._defaultHandlerMap.get(f)), !c) {
      process.env.NODE_ENV !== "production" && i.debug(`No route found for: ${l(s)}`);
      return;
    }
    process.env.NODE_ENV !== "production" && (i.groupCollapsed(`Router is responding to: ${l(s)}`), u.forEach((g) => {
      Array.isArray(g) ? i.log(...g) : i.log(g);
    }), i.groupEnd());
    let w;
    try {
      w = c.handle({ url: s, request: e, event: r, params: a });
    } catch (g) {
      w = Promise.reject(g);
    }
    const p = o && o.catchHandler;
    return w instanceof Promise && (this._catchHandler || p) && (w = w.catch(async (g) => {
      if (p) {
        process.env.NODE_ENV !== "production" && (i.groupCollapsed(`Error thrown when responding to:  ${l(s)}. Falling back to route's Catch Handler.`), i.error("Error thrown by:", o), i.error(g), i.groupEnd());
        try {
          return await p.handle({ url: s, request: e, event: r, params: a });
        } catch (V) {
          V instanceof Error && (g = V);
        }
      }
      if (this._catchHandler)
        return process.env.NODE_ENV !== "production" && (i.groupCollapsed(`Error thrown when responding to:  ${l(s)}. Falling back to global Catch Handler.`), i.error("Error thrown by:", o), i.error(g), i.groupEnd()), this._catchHandler.handle({ url: s, request: e, event: r });
      throw g;
    })), w;
  }
  /**
   * Checks a request and URL (and optionally an event) against the list of
   * registered routes, and if there's a match, returns the corresponding
   * route along with any params generated by the match.
   *
   * @param {Object} options
   * @param {URL} options.url
   * @param {boolean} options.sameOrigin The result of comparing `url.origin`
   *     against the current origin.
   * @param {Request} options.request The request to match.
   * @param {Event} options.event The corresponding event.
   * @return {Object} An object with `route` and `params` properties.
   *     They are populated if a matching route was found or `undefined`
   *     otherwise.
   */
  findMatchingRoute({ url: e, sameOrigin: r, request: s, event: n }) {
    const a = this._routes.get(s.method) || [];
    for (const o of a) {
      let c;
      const u = o.match({ url: e, sameOrigin: r, request: s, event: n });
      if (u)
        return process.env.NODE_ENV !== "production" && u instanceof Promise && i.warn(`While routing ${l(e)}, an async matchCallback function was used. Please convert the following route to use a synchronous matchCallback function:`, o), c = u, (Array.isArray(c) && c.length === 0 || u.constructor === Object && // eslint-disable-line
        Object.keys(u).length === 0 || typeof u == "boolean") && (c = void 0), { route: o, params: c };
    }
    return {};
  }
  /**
   * Define a default `handler` that's called when no routes explicitly
   * match the incoming request.
   *
   * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
   *
   * Without a default handler, unmatched requests will go against the
   * network as if there were no service worker present.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to associate with this
   * default handler. Each method has its own default.
   */
  setDefaultHandler(e, r = M) {
    this._defaultHandlerMap.set(r, R(e));
  }
  /**
   * If a Route throws an error while handling a request, this `handler`
   * will be called and given a chance to provide a response.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   */
  setCatchHandler(e) {
    this._catchHandler = R(e);
  }
  /**
   * Registers a route with the router.
   *
   * @param {workbox-routing.Route} route The route to register.
   */
  registerRoute(e) {
    process.env.NODE_ENV !== "production" && (h.isType(e, "object", {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "registerRoute",
      paramName: "route"
    }), h.hasMethod(e, "match", {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "registerRoute",
      paramName: "route"
    }), h.isType(e.handler, "object", {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "registerRoute",
      paramName: "route"
    }), h.hasMethod(e.handler, "handle", {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "registerRoute",
      paramName: "route.handler"
    }), h.isType(e.method, "string", {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "registerRoute",
      paramName: "route.method"
    })), this._routes.has(e.method) || this._routes.set(e.method, []), this._routes.get(e.method).push(e);
  }
  /**
   * Unregisters a route with the router.
   *
   * @param {workbox-routing.Route} route The route to unregister.
   */
  unregisterRoute(e) {
    if (!this._routes.has(e.method))
      throw new d("unregister-route-but-not-found-with-method", {
        method: e.method
      });
    const r = this._routes.get(e.method).indexOf(e);
    if (r > -1)
      this._routes.get(e.method).splice(r, 1);
    else
      throw new d("unregister-route-route-not-registered");
  }
}
let y;
const I = () => (y || (y = new te(), y.addFetchListener(), y.addCacheListener()), y);
function re(t, e, r) {
  let s;
  if (typeof t == "string") {
    const a = new URL(t, location.href);
    if (process.env.NODE_ENV !== "production") {
      if (!(t.startsWith("/") || t.startsWith("http")))
        throw new d("invalid-string", {
          moduleName: "workbox-routing",
          funcName: "registerRoute",
          paramName: "capture"
        });
      const c = t.startsWith("http") ? a.pathname : t, u = "[*:?+]";
      new RegExp(`${u}`).exec(c) && i.debug(`The '$capture' parameter contains an Express-style wildcard character (${u}). Strings are now always interpreted as exact matches; use a RegExp for partial or wildcard matches.`);
    }
    const o = ({ url: c }) => (process.env.NODE_ENV !== "production" && c.pathname === a.pathname && c.origin !== a.origin && i.debug(`${t} only partially matches the cross-origin URL ${c.toString()}. This route will only handle cross-origin requests if they match the entire URL.`), c.href === a.href);
    s = new N(o, e, r);
  } else if (t instanceof RegExp)
    s = new ee(t, e, r);
  else if (typeof t == "function")
    s = new N(t, e, r);
  else if (t instanceof N)
    s = t;
  else
    throw new d("unsupported-route-type", {
      moduleName: "workbox-routing",
      funcName: "registerRoute",
      paramName: "capture"
    });
  return I().registerRoute(s), s;
}
function se(t) {
  I().setCatchHandler(t);
}
const m = {
  googleAnalytics: "googleAnalytics",
  precache: "precache-v2",
  prefix: "workbox",
  runtime: "runtime",
  suffix: typeof registration < "u" ? registration.scope : ""
}, $ = (t) => [m.prefix, t, m.suffix].filter((e) => e && e.length > 0).join("-"), ne = (t) => {
  for (const e of Object.keys(m))
    t(e);
}, oe = {
  updateDetails: (t) => {
    ne((e) => {
      typeof t[e] == "string" && (m[e] = t[e]);
    });
  },
  getGoogleAnalyticsName: (t) => t || $(m.googleAnalytics),
  getPrecacheName: (t) => t || $(m.precache),
  getPrefix: () => m.prefix,
  getRuntimeName: (t) => t || $(m.runtime),
  getSuffix: () => m.suffix
};
function S(t, e) {
  const r = new URL(t);
  for (const s of e)
    r.searchParams.delete(s);
  return r.href;
}
async function ae(t, e, r, s) {
  const n = S(e.url, r);
  if (e.url === n)
    return t.match(e, s);
  const a = Object.assign(Object.assign({}, s), { ignoreSearch: !0 }), o = await t.keys(e, a);
  for (const c of o) {
    const u = S(c.url, r);
    if (n === u)
      return t.match(c, s);
  }
}
class ie {
  /**
   * Creates a promise and exposes its resolve and reject functions as methods.
   */
  constructor() {
    this.promise = new Promise((e, r) => {
      this.resolve = e, this.reject = r;
    });
  }
}
const U = /* @__PURE__ */ new Set();
async function ce() {
  process.env.NODE_ENV !== "production" && i.log(`About to run ${U.size} callbacks to clean up caches.`);
  for (const t of U)
    await t(), process.env.NODE_ENV !== "production" && i.log(t, "is complete.");
  process.env.NODE_ENV !== "production" && i.log("Finished running callbacks.");
}
function ue(t) {
  return new Promise((e) => setTimeout(e, t));
}
try {
  self["workbox:strategies:6.5.3"] && _();
} catch {
}
function E(t) {
  return typeof t == "string" ? new Request(t) : t;
}
class le {
  /**
   * Creates a new instance associated with the passed strategy and event
   * that's handling the request.
   *
   * The constructor also initializes the state that will be passed to each of
   * the plugins handling this request.
   *
   * @param {workbox-strategies.Strategy} strategy
   * @param {Object} options
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params] The return value from the
   *     {@link workbox-routing~matchCallback} (if applicable).
   */
  constructor(e, r) {
    this._cacheKeys = {}, process.env.NODE_ENV !== "production" && h.isInstance(r.event, ExtendableEvent, {
      moduleName: "workbox-strategies",
      className: "StrategyHandler",
      funcName: "constructor",
      paramName: "options.event"
    }), Object.assign(this, r), this.event = r.event, this._strategy = e, this._handlerDeferred = new ie(), this._extendLifetimePromises = [], this._plugins = [...e.plugins], this._pluginStateMap = /* @__PURE__ */ new Map();
    for (const s of this._plugins)
      this._pluginStateMap.set(s, {});
    this.event.waitUntil(this._handlerDeferred.promise);
  }
  /**
   * Fetches a given request (and invokes any applicable plugin callback
   * methods) using the `fetchOptions` (for non-navigation requests) and
   * `plugins` defined on the `Strategy` object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - `requestWillFetch()`
   * - `fetchDidSucceed()`
   * - `fetchDidFail()`
   *
   * @param {Request|string} input The URL or request to fetch.
   * @return {Promise<Response>}
   */
  async fetch(e) {
    const { event: r } = this;
    let s = E(e);
    if (s.mode === "navigate" && r instanceof FetchEvent && r.preloadResponse) {
      const o = await r.preloadResponse;
      if (o)
        return process.env.NODE_ENV !== "production" && i.log(`Using a preloaded navigation response for '${l(s.url)}'`), o;
    }
    const n = this.hasCallback("fetchDidFail") ? s.clone() : null;
    try {
      for (const o of this.iterateCallbacks("requestWillFetch"))
        s = await o({ request: s.clone(), event: r });
    } catch (o) {
      if (o instanceof Error)
        throw new d("plugin-error-request-will-fetch", {
          thrownErrorMessage: o.message
        });
    }
    const a = s.clone();
    try {
      let o;
      o = await fetch(s, s.mode === "navigate" ? void 0 : this._strategy.fetchOptions), process.env.NODE_ENV !== "production" && i.debug(`Network request for '${l(s.url)}' returned a response with status '${o.status}'.`);
      for (const c of this.iterateCallbacks("fetchDidSucceed"))
        o = await c({
          event: r,
          request: a,
          response: o
        });
      return o;
    } catch (o) {
      throw process.env.NODE_ENV !== "production" && i.log(`Network request for '${l(s.url)}' threw an error.`, o), n && await this.runCallbacks("fetchDidFail", {
        error: o,
        event: r,
        originalRequest: n.clone(),
        request: a.clone()
      }), o;
    }
  }
  /**
   * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
   * the response generated by `this.fetch()`.
   *
   * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
   * so you do not have to manually call `waitUntil()` on the event.
   *
   * @param {Request|string} input The request or URL to fetch and cache.
   * @return {Promise<Response>}
   */
  async fetchAndCachePut(e) {
    const r = await this.fetch(e), s = r.clone();
    return this.waitUntil(this.cachePut(e, s)), r;
  }
  /**
   * Matches a request from the cache (and invokes any applicable plugin
   * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
   * defined on the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillByUsed()
   * - cachedResponseWillByUsed()
   *
   * @param {Request|string} key The Request or URL to use as the cache key.
   * @return {Promise<Response|undefined>} A matching response, if found.
   */
  async cacheMatch(e) {
    const r = E(e);
    let s;
    const { cacheName: n, matchOptions: a } = this._strategy, o = await this.getCacheKey(r, "read"), c = Object.assign(Object.assign({}, a), { cacheName: n });
    s = await caches.match(o, c), process.env.NODE_ENV !== "production" && (s ? i.debug(`Found a cached response in '${n}'.`) : i.debug(`No cached response found in '${n}'.`));
    for (const u of this.iterateCallbacks("cachedResponseWillBeUsed"))
      s = await u({
        cacheName: n,
        matchOptions: a,
        cachedResponse: s,
        request: o,
        event: this.event
      }) || void 0;
    return s;
  }
  /**
   * Puts a request/response pair in the cache (and invokes any applicable
   * plugin callback methods) using the `cacheName` and `plugins` defined on
   * the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillByUsed()
   * - cacheWillUpdate()
   * - cacheDidUpdate()
   *
   * @param {Request|string} key The request or URL to use as the cache key.
   * @param {Response} response The response to cache.
   * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
   * not be cached, and `true` otherwise.
   */
  async cachePut(e, r) {
    const s = E(e);
    await ue(0);
    const n = await this.getCacheKey(s, "write");
    if (process.env.NODE_ENV !== "production") {
      if (n.method && n.method !== "GET")
        throw new d("attempt-to-cache-non-get-request", {
          url: l(n.url),
          method: n.method
        });
      const p = r.headers.get("Vary");
      p && i.debug(`The response for ${l(n.url)} has a 'Vary: ${p}' header. Consider setting the {ignoreVary: true} option on your strategy to ensure cache matching and deletion works as expected.`);
    }
    if (!r)
      throw process.env.NODE_ENV !== "production" && i.error(`Cannot cache non-existent response for '${l(n.url)}'.`), new d("cache-put-with-no-response", {
        url: l(n.url)
      });
    const a = await this._ensureResponseSafeToCache(r);
    if (!a)
      return process.env.NODE_ENV !== "production" && i.debug(`Response '${l(n.url)}' will not be cached.`, a), !1;
    const { cacheName: o, matchOptions: c } = this._strategy, u = await self.caches.open(o), f = this.hasCallback("cacheDidUpdate"), w = f ? await ae(
      // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
      // feature. Consider into ways to only add this behavior if using
      // precaching.
      u,
      n.clone(),
      ["__WB_REVISION__"],
      c
    ) : null;
    process.env.NODE_ENV !== "production" && i.debug(`Updating the '${o}' cache with a new Response for ${l(n.url)}.`);
    try {
      await u.put(n, f ? a.clone() : a);
    } catch (p) {
      if (p instanceof Error)
        throw p.name === "QuotaExceededError" && await ce(), p;
    }
    for (const p of this.iterateCallbacks("cacheDidUpdate"))
      await p({
        cacheName: o,
        oldResponse: w,
        newResponse: a.clone(),
        request: n,
        event: this.event
      });
    return !0;
  }
  /**
   * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
   * executes any of those callbacks found in sequence. The final `Request`
   * object returned by the last plugin is treated as the cache key for cache
   * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
   * been registered, the passed request is returned unmodified
   *
   * @param {Request} request
   * @param {string} mode
   * @return {Promise<Request>}
   */
  async getCacheKey(e, r) {
    const s = `${e.url} | ${r}`;
    if (!this._cacheKeys[s]) {
      let n = e;
      for (const a of this.iterateCallbacks("cacheKeyWillBeUsed"))
        n = E(await a({
          mode: r,
          request: n,
          event: this.event,
          // params has a type any can't change right now.
          params: this.params
          // eslint-disable-line
        }));
      this._cacheKeys[s] = n;
    }
    return this._cacheKeys[s];
  }
  /**
   * Returns true if the strategy has at least one plugin with the given
   * callback.
   *
   * @param {string} name The name of the callback to check for.
   * @return {boolean}
   */
  hasCallback(e) {
    for (const r of this._strategy.plugins)
      if (e in r)
        return !0;
    return !1;
  }
  /**
   * Runs all plugin callbacks matching the given name, in order, passing the
   * given param object (merged ith the current plugin state) as the only
   * argument.
   *
   * Note: since this method runs all plugins, it's not suitable for cases
   * where the return value of a callback needs to be applied prior to calling
   * the next callback. See
   * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
   * below for how to handle that case.
   *
   * @param {string} name The name of the callback to run within each plugin.
   * @param {Object} param The object to pass as the first (and only) param
   *     when executing each callback. This object will be merged with the
   *     current plugin state prior to callback execution.
   */
  async runCallbacks(e, r) {
    for (const s of this.iterateCallbacks(e))
      await s(r);
  }
  /**
   * Accepts a callback and returns an iterable of matching plugin callbacks,
   * where each callback is wrapped with the current handler state (i.e. when
   * you call each callback, whatever object parameter you pass it will
   * be merged with the plugin's current state).
   *
   * @param {string} name The name fo the callback to run
   * @return {Array<Function>}
   */
  *iterateCallbacks(e) {
    for (const r of this._strategy.plugins)
      if (typeof r[e] == "function") {
        const s = this._pluginStateMap.get(r);
        yield (a) => {
          const o = Object.assign(Object.assign({}, a), { state: s });
          return r[e](o);
        };
      }
  }
  /**
   * Adds a promise to the
   * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
   * of the event event associated with the request being handled (usually a
   * `FetchEvent`).
   *
   * Note: you can await
   * {@link workbox-strategies.StrategyHandler~doneWaiting}
   * to know when all added promises have settled.
   *
   * @param {Promise} promise A promise to add to the extend lifetime promises
   *     of the event that triggered the request.
   */
  waitUntil(e) {
    return this._extendLifetimePromises.push(e), e;
  }
  /**
   * Returns a promise that resolves once all promises passed to
   * {@link workbox-strategies.StrategyHandler~waitUntil}
   * have settled.
   *
   * Note: any work done after `doneWaiting()` settles should be manually
   * passed to an event's `waitUntil()` method (not this handler's
   * `waitUntil()` method), otherwise the service worker thread my be killed
   * prior to your work completing.
   */
  async doneWaiting() {
    let e;
    for (; e = this._extendLifetimePromises.shift(); )
      await e;
  }
  /**
   * Stops running the strategy and immediately resolves any pending
   * `waitUntil()` promises.
   */
  destroy() {
    this._handlerDeferred.resolve(null);
  }
  /**
   * This method will call cacheWillUpdate on the available plugins (or use
   * status === 200) to determine if the Response is safe and valid to cache.
   *
   * @param {Request} options.request
   * @param {Response} options.response
   * @return {Promise<Response|undefined>}
   *
   * @private
   */
  async _ensureResponseSafeToCache(e) {
    let r = e, s = !1;
    for (const n of this.iterateCallbacks("cacheWillUpdate"))
      if (r = await n({
        request: this.request,
        response: r,
        event: this.event
      }) || void 0, s = !0, !r)
        break;
    return s || (r && r.status !== 200 && (r = void 0), process.env.NODE_ENV !== "production" && r && r.status !== 200 && (r.status === 0 ? i.warn(`The response for '${this.request.url}' is an opaque response. The caching strategy that you're using will not cache opaque responses by default.`) : i.debug(`The response for '${this.request.url}' returned a status code of '${e.status}' and won't be cached as a result.`))), r;
  }
}
class he {
  /**
   * Creates a new instance of the strategy and sets all documented option
   * properties as public instance properties.
   *
   * Note: if a custom strategy class extends the base Strategy class and does
   * not need more than these properties, it does not need to define its own
   * constructor.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   */
  constructor(e = {}) {
    this.cacheName = oe.getRuntimeName(e.cacheName), this.plugins = e.plugins || [], this.fetchOptions = e.fetchOptions, this.matchOptions = e.matchOptions;
  }
  /**
   * Perform a request strategy and returns a `Promise` that will resolve with
   * a `Response`, invoking all relevant plugin callbacks.
   *
   * When a strategy instance is registered with a Workbox
   * {@link workbox-routing.Route}, this method is automatically
   * called when the route matches.
   *
   * Alternatively, this method can be used in a standalone `FetchEvent`
   * listener by passing it to `event.respondWith()`.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   */
  handle(e) {
    const [r] = this.handleAll(e);
    return r;
  }
  /**
   * Similar to {@link workbox-strategies.Strategy~handle}, but
   * instead of just returning a `Promise` that resolves to a `Response` it
   * it will return an tuple of `[response, done]` promises, where the former
   * (`response`) is equivalent to what `handle()` returns, and the latter is a
   * Promise that will resolve once any promises that were added to
   * `event.waitUntil()` as part of performing the strategy have completed.
   *
   * You can await the `done` promise to ensure any extra work performed by
   * the strategy (usually caching responses) completes successfully.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   * @return {Array<Promise>} A tuple of [response, done]
   *     promises that can be used to determine when the response resolves as
   *     well as when the handler has completed all its work.
   */
  handleAll(e) {
    e instanceof FetchEvent && (e = {
      event: e,
      request: e.request
    });
    const r = e.event, s = typeof e.request == "string" ? new Request(e.request) : e.request, n = "params" in e ? e.params : void 0, a = new le(this, { event: r, request: s, params: n }), o = this._getResponse(a, s, r), c = this._awaitComplete(o, a, s, r);
    return [o, c];
  }
  async _getResponse(e, r, s) {
    await e.runCallbacks("handlerWillStart", { event: s, request: r });
    let n;
    try {
      if (n = await this._handle(r, e), !n || n.type === "error")
        throw new d("no-response", { url: r.url });
    } catch (a) {
      if (a instanceof Error) {
        for (const o of e.iterateCallbacks("handlerDidError"))
          if (n = await o({ error: a, event: s, request: r }), n)
            break;
      }
      if (n)
        process.env.NODE_ENV !== "production" && i.log(`While responding to '${l(r.url)}', an ${a instanceof Error ? a.toString() : ""} error occurred. Using a fallback response provided by a handlerDidError plugin.`);
      else
        throw a;
    }
    for (const a of e.iterateCallbacks("handlerWillRespond"))
      n = await a({ event: s, request: r, response: n });
    return n;
  }
  async _awaitComplete(e, r, s, n) {
    let a, o;
    try {
      a = await e;
    } catch {
    }
    try {
      await r.runCallbacks("handlerDidRespond", {
        event: n,
        request: s,
        response: a
      }), await r.doneWaiting();
    } catch (c) {
      c instanceof Error && (o = c);
    }
    if (await r.runCallbacks("handlerDidComplete", {
      event: n,
      request: s,
      response: a,
      error: o
    }), r.destroy(), o)
      throw o;
  }
}
const L = {
  strategyStart: (t, e) => `Using ${t} to respond to '${l(e.url)}'`,
  printFinalResponse: (t) => {
    t && (i.groupCollapsed("View the final response here."), i.log(t || "[No response returned]"), i.groupEnd());
  }
};
class de extends he {
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(e, r) {
    const s = [];
    process.env.NODE_ENV !== "production" && h.isInstance(e, Request, {
      moduleName: "workbox-strategies",
      className: this.constructor.name,
      funcName: "makeRequest",
      paramName: "request"
    });
    let n = await r.cacheMatch(e), a;
    if (n)
      process.env.NODE_ENV !== "production" && s.push(`Found a cached response in the '${this.cacheName}' cache.`);
    else {
      process.env.NODE_ENV !== "production" && s.push(`No response found in the '${this.cacheName}' cache. Will respond with a network request.`);
      try {
        n = await r.fetchAndCachePut(e);
      } catch (o) {
        o instanceof Error && (a = o);
      }
      process.env.NODE_ENV !== "production" && (n ? s.push("Got response from network.") : s.push("Unable to get a response from the network."));
    }
    if (process.env.NODE_ENV !== "production") {
      i.groupCollapsed(L.strategyStart(this.constructor.name, e));
      for (const o of s)
        i.log(o);
      L.printFinalResponse(n), i.groupEnd();
    }
    if (!n)
      throw new d("no-response", { url: e.url, error: a });
    return n;
  }
}
try {
  self["workbox:cacheable-response:6.5.3"] && _();
} catch {
}
class fe {
  /**
   * To construct a new CacheableResponse instance you must provide at least
   * one of the `config` properties.
   *
   * If both `statuses` and `headers` are specified, then both conditions must
   * be met for the `Response` to be considered cacheable.
   *
   * @param {Object} config
   * @param {Array<number>} [config.statuses] One or more status codes that a
   * `Response` can have and be considered cacheable.
   * @param {Object<string,string>} [config.headers] A mapping of header names
   * and expected values that a `Response` can have and be considered cacheable.
   * If multiple headers are provided, only one needs to be present.
   */
  constructor(e = {}) {
    if (process.env.NODE_ENV !== "production") {
      if (!(e.statuses || e.headers))
        throw new d("statuses-or-headers-required", {
          moduleName: "workbox-cacheable-response",
          className: "CacheableResponse",
          funcName: "constructor"
        });
      e.statuses && h.isArray(e.statuses, {
        moduleName: "workbox-cacheable-response",
        className: "CacheableResponse",
        funcName: "constructor",
        paramName: "config.statuses"
      }), e.headers && h.isType(e.headers, "object", {
        moduleName: "workbox-cacheable-response",
        className: "CacheableResponse",
        funcName: "constructor",
        paramName: "config.headers"
      });
    }
    this._statuses = e.statuses, this._headers = e.headers;
  }
  /**
   * Checks a response to see whether it's cacheable or not, based on this
   * object's configuration.
   *
   * @param {Response} response The response whose cacheability is being
   * checked.
   * @return {boolean} `true` if the `Response` is cacheable, and `false`
   * otherwise.
   */
  isResponseCacheable(e) {
    process.env.NODE_ENV !== "production" && h.isInstance(e, Response, {
      moduleName: "workbox-cacheable-response",
      className: "CacheableResponse",
      funcName: "isResponseCacheable",
      paramName: "response"
    });
    let r = !0;
    if (this._statuses && (r = this._statuses.includes(e.status)), this._headers && r && (r = Object.keys(this._headers).some((s) => e.headers.get(s) === this._headers[s])), process.env.NODE_ENV !== "production" && !r) {
      i.groupCollapsed(`The request for '${l(e.url)}' returned a response that does not meet the criteria for being cached.`), i.groupCollapsed("View cacheability criteria here."), i.log("Cacheable statuses: " + JSON.stringify(this._statuses)), i.log("Cacheable headers: " + JSON.stringify(this._headers, null, 2)), i.groupEnd();
      const s = {};
      e.headers.forEach((n, a) => {
        s[a] = n;
      }), i.groupCollapsed("View response status and headers here."), i.log(`Response status: ${e.status}`), i.log("Response headers: " + JSON.stringify(s, null, 2)), i.groupEnd(), i.groupCollapsed("View full response details here."), i.log(e.headers), i.log(e), i.groupEnd(), i.groupEnd();
    }
    return r;
  }
}
class pe {
  /**
   * To construct a new CacheableResponsePlugin instance you must provide at
   * least one of the `config` properties.
   *
   * If both `statuses` and `headers` are specified, then both conditions must
   * be met for the `Response` to be considered cacheable.
   *
   * @param {Object} config
   * @param {Array<number>} [config.statuses] One or more status codes that a
   * `Response` can have and be considered cacheable.
   * @param {Object<string,string>} [config.headers] A mapping of header names
   * and expected values that a `Response` can have and be considered cacheable.
   * If multiple headers are provided, only one needs to be present.
   */
  constructor(e) {
    this.cacheWillUpdate = async ({ response: r }) => this._cacheableResponse.isResponseCacheable(r) ? r : null, this._cacheableResponse = new fe(e);
  }
}
const ge = (t, e) => e.some((r) => t instanceof r);
let P, q;
function me() {
  return P || (P = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function we() {
  return q || (q = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const j = /* @__PURE__ */ new WeakMap(), D = /* @__PURE__ */ new WeakMap(), B = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakMap(), O = /* @__PURE__ */ new WeakMap();
function be(t) {
  const e = new Promise((r, s) => {
    const n = () => {
      t.removeEventListener("success", a), t.removeEventListener("error", o);
    }, a = () => {
      r(b(t.result)), n();
    }, o = () => {
      s(t.error), n();
    };
    t.addEventListener("success", a), t.addEventListener("error", o);
  });
  return e.then((r) => {
    r instanceof IDBCursor && j.set(r, t);
  }).catch(() => {
  }), O.set(e, t), e;
}
function ye(t) {
  if (D.has(t))
    return;
  const e = new Promise((r, s) => {
    const n = () => {
      t.removeEventListener("complete", a), t.removeEventListener("error", o), t.removeEventListener("abort", o);
    }, a = () => {
      r(), n();
    }, o = () => {
      s(t.error || new DOMException("AbortError", "AbortError")), n();
    };
    t.addEventListener("complete", a), t.addEventListener("error", o), t.addEventListener("abort", o);
  });
  D.set(t, e);
}
let x = {
  get(t, e, r) {
    if (t instanceof IDBTransaction) {
      if (e === "done")
        return D.get(t);
      if (e === "objectStoreNames")
        return t.objectStoreNames || B.get(t);
      if (e === "store")
        return r.objectStoreNames[1] ? void 0 : r.objectStore(r.objectStoreNames[0]);
    }
    return b(t[e]);
  },
  set(t, e, r) {
    return t[e] = r, !0;
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in t;
  }
};
function Ee(t) {
  x = t(x);
}
function Ne(t) {
  return t === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...r) {
    const s = t.call(k(this), e, ...r);
    return B.set(s, e.sort ? e.sort() : [e]), b(s);
  } : we().includes(t) ? function(...e) {
    return t.apply(k(this), e), b(j.get(this));
  } : function(...e) {
    return b(t.apply(k(this), e));
  };
}
function Re(t) {
  return typeof t == "function" ? Ne(t) : (t instanceof IDBTransaction && ye(t), ge(t, me()) ? new Proxy(t, x) : t);
}
function b(t) {
  if (t instanceof IDBRequest)
    return be(t);
  if (v.has(t))
    return v.get(t);
  const e = Re(t);
  return e !== t && (v.set(t, e), O.set(e, t)), e;
}
const k = (t) => O.get(t);
function T(t, e, { blocked: r, upgrade: s, blocking: n, terminated: a } = {}) {
  const o = indexedDB.open(t, e), c = b(o);
  return s && o.addEventListener("upgradeneeded", (u) => {
    s(b(o.result), u.oldVersion, u.newVersion, b(o.transaction), u);
  }), r && o.addEventListener("blocked", (u) => r(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    u.oldVersion,
    u.newVersion,
    u
  )), c.then((u) => {
    a && u.addEventListener("close", () => a()), n && u.addEventListener("versionchange", (f) => n(f.oldVersion, f.newVersion, f));
  }).catch(() => {
  }), c;
}
const _e = ["get", "getKey", "getAll", "getAllKeys", "count"], $e = ["put", "add", "delete", "clear"], C = /* @__PURE__ */ new Map();
function A(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string"))
    return;
  if (C.get(e))
    return C.get(e);
  const r = e.replace(/FromIndex$/, ""), s = e !== r, n = $e.includes(r);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(r in (s ? IDBIndex : IDBObjectStore).prototype) || !(n || _e.includes(r))
  )
    return;
  const a = async function(o, ...c) {
    const u = this.transaction(o, n ? "readwrite" : "readonly");
    let f = u.store;
    return s && (f = f.index(c.shift())), (await Promise.all([
      f[r](...c),
      n && u.done
    ]))[0];
  };
  return C.set(e, a), a;
}
Ee((t) => ({
  ...t,
  get: (e, r, s) => A(e, r) || t.get(e, r, s),
  has: (e, r) => !!A(e, r) || t.has(e, r)
}));
self.addEventListener("install", (t) => {
  const e = ["/pages/offline.html"];
  t.waitUntil(
    self.caches.open("offline-fallbacks").then((r) => r.addAll(e))
  );
});
se(async (t) => {
  const e = t.request.destination, r = await self.caches.open("offline-fallbacks");
  return e === "document" && await r.match("/pages/offline.html") || Response.error();
});
const ve = new de({
  // Put all cached files in a cache named 'pages'
  cacheName: "pages",
  plugins: [
    // Only requests that return with a 200 status are cached
    new pe({
      statuses: [200]
    })
  ]
});
re(
  ({ request: t }) => t.mode === "navigate",
  ve
);
async function ke() {
  await T("cookbook", 1, {
    upgrade(t, e, r, s) {
      switch (e) {
        case 0:
        case 1:
          t.createObjectStore("recipes", {
            // The `id` property of the object will be the key, and be incremented automatically
            autoIncrement: !0,
            keyPath: "id"
          }).createIndex("type", "type");
      }
    }
  });
}
ke();
async function Ce() {
  const t = {
    name: "Chocolate chips cookies",
    type: "dessert",
    cook_time_minutes: 25
  }, r = await (await T("cookbook", 1)).transaction("recipes", "readwrite");
  r.objectStore("recipes").add(t), await r.done;
}
Ce();
async function De() {
  const r = (await (await T("cookbook", 1)).transaction("recipes", "readonly")).objectStore("recipes"), s = 1;
  await r.get([s]);
}
De();
