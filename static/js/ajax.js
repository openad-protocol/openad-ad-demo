!function(a, b) {
  'object' === typeof module && 'object' === typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
    if (!a.document) {
      throw new Error('Ajax requires a window with a document')
    }
    return b(a)
  }: b(a)
} ('undefined' !== typeof window ? window: this,
  function(a, b) {
    let c = [],
      f = c.push,
      h = {},
      i = h.toString,
      j = h.hasOwnProperty,
      k = {},
      l = 'Split jQuery Ajax Function as Window.J$.ajax and remove other Functions from jQuery.1.11.1, Compatible with old browsers, Case for import full jQuery component without conflict. Author: https://github.com:MrVincentP/jq-ajax, Modification Date: 2024-04-11 16:35:00. In My App, I use it to request JSONP for thirdParty components and same origin ajax request instead axios.',
      m = function(a, b) {
        return new m.fn.init(a, b)
      },
      n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    m.fn = m.prototype = {
      Async: l,
      constructor: m,
      selector: '',
      length: 0,
    },
    m.extend = m.fn.extend = function() {
      let a, b, c, d, e, f, g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;
      for ('boolean' === typeof g && (j = g, g = arguments[h] || {},
      h++), 'object' === typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
        if (null !== (e = arguments[h])) {
          for (d in e) {
            a = g[d],
            c = e[d],
            g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a: []) : f = a && m.isPlainObject(a) ? a: {},
            g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c))
          }
        }
      }
      return g
    },
    m.extend({
      expando: 'Ajax' + (l + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function(a) {
        throw new Error(a)
      },
      isFunction: function(a) {
        return 'function' === m.type(a)
      },
      isArray: Array.isArray ||
                        function(a) {
                          return 'array' === m.type(a)
                        },
      isWindow: function(a) {
        return null !== a && a === a.window
      },
      isPlainObject: function(a) {
        let b;
        if (!a || 'object' !== m.type(a) || a.nodeType || m.isWindow(a)) {
          return !1
        }
        try {
          if (a.constructor && !j.call(a, 'constructor') && !j.call(a.constructor.prototype, 'isPrototypeOf')) {
            return !1
          }
        } catch(c) {
          return !1
        }
        if (k.ownLast) {
          for (b in a) {
            return j.call(a, b)
          }
        }
        return void 0 === b || j.call(a, b);
      },
      type: function(a) {
        return null === a ? a + '': 'object' === typeof a || 'function' === typeof a ? h[i.call(a)] || 'object': typeof a
      },
      each: function(a, b, c) {
        let d, e = 0,
          f = a.length,
          // eslint-disable-next-line no-use-before-define
          g = r(a);
        if (c) {
          if (g) {
            for (; f > e; e++) {
              if (d = b.apply(a[e], c), d === !1) {
                break
              }
            }
          } else {
            for (e in a) {
              if (d = b.apply(a[e], c), d === !1) {
                break
              }
            }
          }
        } else {
          if (g) {
            for (; f > e; e++) {
              if (d = b.call(a[e], e, a[e]), d === !1) {
                break
              }
            }
          } else {
            for (e in a) {
              if (d = b.call(a[e], e, a[e]), d === !1) {
                break
              }
            }
          }
        }
        return a
      },
      trim: function(a) {
        return null === a ? '': (a + '').replace(n, '')
      },
      makeArray: function(a, b) {
        let c = b || [];
        // eslint-disable-next-line no-use-before-define
        return null !== a && (r(Object(a)) ? m.merge(c, 'string' === typeof a ? [a] : a) : f.call(c, a)),
        c
      },
      merge: function(a, b) {
        let c = +b.length,
          d = 0,
          e = a.length;
        while (c > d) {
          a[e++] = b[d++]
        }
        if (c !== c) {
          while (void 0 !== b[d]) {
            a[e++] = b[d++]
          }
        }
        return a.length = e,
        a
      },
      now: function() {
        return +new Date
      },
    }),
    m.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '),
      function(a, b) {
        h['[object ' + b + ']'] = b.toLowerCase()
      });
    function r(a) {
      let b = a.length,
        c = m.type(a);
      return 'function' === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : 'array' === c || 0 === b || 'number' === typeof b && b > 0 && b - 1 in a
    }
    let x, y = a.document,
      z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      A = m.fn.init = function(a, b) {
        let c, d;
        if (!a) {
          return this
        }
        if ('string' === typeof a) {
          if (c = '<' === a.charAt(0) && '>' === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) {
            return !b || b.Async ? (b || x).find(a) : this.constructor(b).find(a)
          }
          if (c[1]) {
            if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b: y, !0)), u.test(c[1]) && m.isPlainObject(b)) {
              for (c in b) {
                m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c])
              }
            }
            return this
          }
          if (d = y.getElementById(c[2]), d && d.parentNode) {
            if (d.id !== c[2]) {
              return x.find(a)
            }
            this.length = 1,
            this[0] = d
          }
          return this.context = y,
          this.selector = a,
          this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? 'undefined' !== typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
      };
    A.prototype = m.fn,
    x = m(y);
    let E = /\S+/g,
      F = {};
    function G(a) {
      let b = F[a] = {};
      return m.each(a.match(E) || [],
        function(a, c) {
          b[c] = !0
        }),
      b
    }
    m.Callbacks = function(a) {
      a = 'string' === typeof a ? F[a] || G(a) : m.extend({},
        a);
      var b, c, d, e, f, g, h = [],
        i = !a.once && [],
        j = function(l) {
          for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++) {
            if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
              c = !1;
              break
            }
          }
          b = !1,
          h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
        },
        k = {
          add: function() {
            if (h) {
              let d = h.length; !function f(b) {
                m.each(b,
                  function(b, c) {
                    let d = m.type(c);
                    'function' === d ? a.unique && k.has(c) || h.push(c) : c && c.length && 'string' !== d && f(c)
                  })
              } (arguments),
              b ? e = h.length: c && (g = d, j(c))
            }
            return this
          },
          remove: function() {
            return h && m.each(arguments,
              function(a, c) {
                let d;
                while ((d = m.inArray(c, h, d)) > -1) {
                  h.splice(d, 1),
                  b && (e >= d && e--, f >= d && f--)
                }
              }),
            this
          },
          has: function(a) {
            return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
          },
          empty: function() {
            return h = [],
            e = 0,
            this
          },
          disable: function() {
            return h = i = c = void 0,
            this
          },
          disabled: function() {
            return !h
          },
          lock: function() {
            return i = void 0,
            c || k.disable(),
            this
          },
          locked: function() {
            return !i
          },
          fireWith: function(a, c) {
            return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)),
            this
          },
          fire: function() {
            return k.fireWith(this, arguments),
            this
          },
          fired: function() {
            return !!d
          },
        };
      return k
    },
    m.extend({
      Deferred: function(a) {
        var b = [['resolve', 'done', m.Callbacks('once memory'), 'resolved'], ['reject', 'fail', m.Callbacks('once memory'), 'rejected'], ['notify', 'progress', m.Callbacks('memory')]],
          c = 'pending',
          d = {
            state: function() {
              return c
            },
            always: function() {
              return e.done(arguments).fail(arguments),
              this
            },
            then: function() {
              let a = arguments;
              return m.Deferred(function(c) {
                m.each(b,
                  function(b, f) {
                    let g = m.isFunction(a[b]) && a[b];
                    e[f[1]](function() {
                      let a = g && g.apply(this, arguments);
                      a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + 'With'](this === d ? c.promise() : this, g ? [a] : arguments)
                    })
                  }),
                a = null
              }).promise()
            },
            promise: function(a) {
              return null !== a ? m.extend(a, d) : d
            },
          },
          e = {};
        return d.pipe = d.then,
        m.each(b,
          function(a, f) {
            let g = f[2],
              h = f[3];
            d[f[1]] = g.add,
            h && g.add(function() {
              c = h
            },
            b[1 ^ a][2].disable, b[2][2].lock),
            e[f[0]] = function() {
              return e[f[0] + 'With'](this === e ? d: this, arguments),
              this
            },
            e[f[0] + 'With'] = g.fireWith
          }),
        d.promise(e),
        a && a.call(e, e),
        e
      },
    });
    let K = 'undefined',
      L;
    for (L in m(k)) {
      break
    }
    m.acceptData = function(a) {
      let b = m.noData[(a.nodeName + ' ').toLowerCase()],
        c = +a.nodeType || 1;
      return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute('classid') === b
    };
    function Q(a, b, d, e) {
      if (m.acceptData(a)) {
        let f, g, h = m.expando,
          i = a.nodeType,
          j = i ? m.cache: a,
          k = i ? a[h] : a[h] && h;
        if (k && j[k] && (e || j[k].data) || void 0 !== d || 'string' !== typeof b) {
          return k || (k = i ? a[h] = c.pop() || m.guid++:h),
          j[k] || (j[k] = i ? {}: {
            toJSON: m.noop,
          }),
          ('object' === typeof b || 'function' === typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)),
          g = j[k],
          e || (g.data || (g.data = {}), g = g.data),
          void 0 !== d && (g[m.camelCase(b)] = d),
          'string' === typeof b ? (f = g[b], null === f && (f = g[m.camelCase(b)])) : f = g,
          f
        }
      }
    }
    m.extend({
      noData: {
        'applet ': !0,
        'embed ': !0,
        'object ': 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',
      },
      _data: function(a, b, c) {
        return Q(a, b, c, !0)
      },
    });
    let Y = /^(?:focusinfocus|focusoutblur)$/;
    function J$() {
      return !0
    }
    function _() {
      return !1
    }
    m.event = {
      trigger: function(b, c, d, e) {
        let f, g, h, i, k, l, n, o = [d || y],
          p = j.call(b, 'type') ? b.type: b,
          q = j.call(b, 'namespace') ? b.namespace.split('.') : [];
        if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !Y.test(p + m.event.triggered) && (p.indexOf('.') >= 0 && (q = p.split('.'), p = q.shift(), q.sort()), g = p.indexOf(':') < 0 && 'on' + p, b = b[m.expando] ? b: new m.Event(p, 'object' === typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join('.'), b.namespace_re = b.namespace ? new RegExp('(^|\\.)' + q.join('\\.(?:.*\\.|)') + '(\\.|$)') : null, b.result = void 0, b.target || (b.target = d), c = null === c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {},
        e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
          if (!e && !k.noBubble && !m.isWindow(d)) {
            for (i = k.delegateType || p, Y.test(i + p) || (h = h.parentNode); h; h = h.parentNode) {
              o.push(h),
              l = h
            }
            l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
          }
          n = 0;
          while ((h = o[n++]) && !b.isPropagationStopped()) {
            b.type = n > 1 ? i: k.bindType || p,
            f = (m._data(h, 'events') || {})[b.type] && m._data(h, 'handle'),
            f && f.apply(h, c),
            f = g && h[g],
            f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault())
          }
          if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
            l = d[g],
            l && (d[g] = null),
            m.event.triggered = p;
            try {
              d[p]()
            } catch(r) {}
            m.event.triggered = void 0,
            l && (d[g] = l)
          }
          return b.result
        }
      },
      special: {
        load: {
          noBubble: !0,
        },
      },
    },
    m.removeEvent = y.removeEventListener ?
      function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
      }: function(a, b, c) {
        let d = 'on' + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
      },
    m.Event = function(a, b) {
      return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? J$: _) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void (this[m.expando] = !0)) : new m.Event(a, b)
    },
    m.Event.prototype = {
      isDefaultPrevented: _,
      isPropagationStopped: _,
    };
    m.fn.extend({
      bind: function(a, b, c) {
        return this.on(a, null, b, c)
      },
      unbind: function(a, b) {
        return this.off(a, null, b)
      },
    });
    let Kb = m.now(),
      Lb = /\?/,
      Mb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function(b) {
      if (a.JSON && a.JSON.parse) {
        return a.JSON.parse(b + '')
      }
      let c, d = null,
        e = m.trim(b + '');
      return e && !m.trim(e.replace(Mb,
        function(a, b, e, f) {
          return c && b && (d = 0),
          0 === d ? a: (c = e || b, d += !f - !e, '')
        })) ? Function('return ' + e)() : m.error('Invalid JSON: ' + b)
    },
    m.parseXML = function(b) {
      let c, d;
      if (!b || 'string' !== typeof b) {
        return null
      }
      try {
        // eslint-disable-next-line no-undef
        a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, 'text/xml')) : (c = new ActiveXObject('Microsoft.XMLDOM'), c.async = 'false', c.loadXML(b))
      } catch(e) {
        c = void 0
      }
      return c && c.documentElement && !c.getElementsByTagName('parsererror').length || m.error('Invalid XML: ' + b),
      c
    };
    let Nb, Ob, Pb = /#.*$/,
      Qb = /([?&])_=[^&]*/,
      Rb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Sb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Tb = /^(?:GET|HEAD)$/,
      Ub = /^\/\//,
      Vb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      Wb = {},
      Xb = {},
      Yb = '*/'.concat('*');
    try {
      Ob = location.href
    } catch(Zb) {
      Ob = y.createElement('a'),
      Ob.href = '',
      Ob = Ob.href
    }
    Nb = Vb.exec(Ob.toLowerCase()) || [];
    function $b(a) {
      return function(b, c) {
        'string' !== typeof b && (c = b, b = '*');
        let d, e = 0,
          f = b.toLowerCase().match(E) || [];
        if (m.isFunction(c)) {
          while (d = f[e++]) {
            '+' === d.charAt(0) ? (d = d.slice(1) || '*', (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
          }
        }
      }
    }
    function _b(a, b, c, d) {
      let e = {},
        f = a === Xb;
      function g(h) {
        let i;
        return e[h] = !0,
        m.each(a[h] || [],
          function(a, h) {
            let j = h(b, c, d);
            return 'string' !== typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
          }),
        i
      }
      return g(b.dataTypes[0]) || !e['*'] && g('*')
    }
    function ac(a, b) {
      let c, d, e = m.ajaxSettings.flatOptions || {};
      for (d in b) {
        void 0 !== b[d] && ((e[d] ? a: c || (c = {}))[d] = b[d])
      }
      return c && m.extend(!0, a, c),
      a
    }
    function bc(a, b, c) {
      let d, e, f, g, h = a.contents,
        i = a.dataTypes;
      while ('*' === i[0]) {
        i.shift(),
        void 0 === e && (e = a.mimeType || b.getResponseHeader('Content-Type'))
      }
      if (e) {
        for (g in h) {
          if (h[g] && h[g].test(e)) {
            i.unshift(g);
            break
          }
        }
      }
      if (i[0] in c) {
        f = i[0]
      } else {
        for (g in c) {
          if (!i[0] || a.converters[g + ' ' + i[0]]) {
            f = g;
            break
          }
          d || (d = g)
        }
        f = f || d
      }
      return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }
    function cc(a, b, c, d) {
      let e, f, g, h, i, j = {},
        k = a.dataTypes.slice();
      if (k[1]) {
        for (g in a.converters) {
          j[g.toLowerCase()] = a.converters[g]
        }
      }
      f = k.shift();
      while (f) {
        if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) {
          if ('*' === f) {
            f = i
          } else {
            if ('*' !== i && i !== f) {
              if (g = j[i + ' ' + f] || j['* ' + f], !g) {
                for (e in j) {
                  if (h = e.split(' '), h[1] === f && (g = j[i + ' ' + h[0]] || j['* ' + h[0]])) {
                    g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                    break
                  }
                }
              }
              if (g !== !0) {
                if (g && a['throws']) {
                  b = g(b)
                } else {
                  try {
                    b = g(b)
                  } catch(l) {
                    return {
                      state: 'parsererror',
                      error: g ? l: 'No conversion from ' + i + ' to ' + f,
                    }
                  }
                }
              }
            }
          }
        }
      }
      return {
        state: 'success',
        data: b,
      }
    }
    m.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Ob,
        type: 'GET',
        isLocal: Sb.test(Nb[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': Yb,
          text: 'text/plain',
          html: 'text/html',
          xml: 'application/xml, text/xml',
          json: 'application/json, text/javascript',
        },
        contents: {
          xml: /xml/,
          html: /html/,
          json: /json/,
        },
        responseFields: {
          xml: 'responseXML',
          text: 'responseText',
          json: 'responseJSON',
        },
        converters: {
          '* text': String,
          'text html': !0,
          'text json': m.parseJSON,
          'text xml': m.parseXML,
        },
        flatOptions: {
          url: !0,
          context: !0,
        },
      },
      ajaxSetup: function(a, b) {
        return b ? ac(ac(a, m.ajaxSettings), b) : ac(m.ajaxSettings, a)
      },
      ajaxPrefilter: $b(Wb),
      ajaxTransport: $b(Xb),
      ajax: function(a, b) {
        'object' === typeof a && (b = a, a = void 0),
        b = b || {};
        var c, d, e, f, g, h, i, j, k = m.ajaxSetup({},
            b),
          l = k.context || k,
          n = k.context && (l.nodeType || l.Async) ? m(l) : m.event,
          o = m.Deferred(),
          p = m.Callbacks('once memory'),
          q = k.statusCode || {},
          r = {},
          s = {},
          t = 0,
          u = 'canceled',
          v = {
            readyState: 0,
            getResponseHeader: function(a) {
              let b;
              if (2 === t) {
                if (!j) {
                  j = {};
                  while (b = Rb.exec(f)) {
                    j[b[1].toLowerCase()] = b[2]
                  }
                }
                b = j[a.toLowerCase()]
              }
              return null === b ? null: b
            },
            getAllResponseHeaders: function() {
              return 2 === t ? f: null
            },
            setRequestHeader: function(a, b) {
              let c = a.toLowerCase();
              return t || (a = s[c] = s[c] || a, r[a] = b),
              this
            },
            overrideMimeType: function(a) {
              return t || (k.mimeType = a),
              this
            },
            statusCode: function(a) {
              let b;
              if (a) {
                if (2 > t) {
                  for (b in a) {
                    q[b] = [q[b], a[b]]
                  }
                } else {
                  v.always(a[v.status])
                }
              }
              return this
            },
            abort: function(a) {
              let b = a || u;
              return i && i.abort(b),
              x(0, b),
              this
            },
          };
        if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || Ob) + '').replace(Pb, '').replace(Ub, Nb[1] + '//'), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || '*').toLowerCase().match(E) || [''], null === k.crossDomain && (c = Vb.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === Nb[1] && c[2] === Nb[2] && (c[3] || ('http:' === c[1] ? '80': '443')) === (Nb[3] || ('http:' === Nb[1] ? '80': '443')))), k.data && k.processData && 'string' !== typeof k.data && (k.data = m.param(k.data, k.traditional)), _b(Wb, k, b, v), 2 === t) {
          return v
        }
        h = k.global,
        h && 0 === m.active++&&m.event.trigger('ajaxStart'),
        k.type = k.type.toUpperCase(),
        k.hasContent = !Tb.test(k.type),
        e = k.url,
        k.hasContent || (k.data && (e = k.url += (Lb.test(e) ? '&': '?') + k.data, delete k.data), k.cache === !1 && (k.url = Qb.test(e) ? e.replace(Qb, '$1_=' + Kb++) : e + (Lb.test(e) ? '&': '?') + '_=' + Kb++)),
        k.ifModified && (m.lastModified[e] && v.setRequestHeader('If-Modified-Since', m.lastModified[e]), m.etag[e] && v.setRequestHeader('If-None-Match', m.etag[e])),
        (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader('Content-Type', k.contentType),
        v.setRequestHeader('Accept', k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ('*' !== k.dataTypes[0] ? ', ' + Yb + '; q=0.01': '') : k.accepts['*']);
        for (d in k.headers) {
          v.setRequestHeader(d, k.headers[d])
        }
        if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) {
          return v.abort()
        }
        u = 'abort';
        for (d in {
          success: 1,
          error: 1,
          complete: 1,
        }) {
          v[d](k[d])
        }
        if (i = _b(Xb, k, b, v)) {
          v.readyState = 1,
          h && n.trigger('ajaxSend', [v, k]),
          k.async && k.timeout > 0 && (g = setTimeout(function() {
            v.abort('timeout')
          },
          k.timeout));
          try {
            t = 1,
            i.send(r, x)
          } catch(w) {
            if (!(2 > t)) {
              throw w
            }
            x(-1, w)
          }
        } else {
          x(-1, 'No Transport')
        }
        function x(a, b, c, d) {
          let j, r, s, u, w, x = b;
          2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || '', v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = bc(k, v, c)), u = cc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader('Last-Modified'), w && (m.lastModified[e] = w), w = v.getResponseHeader('etag'), w && (m.etag[e] = w)), 204 === a || 'HEAD' === k.type ? x = 'nocontent': 304 === a ? x = 'notmodified': (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = 'error', 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + '', j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? 'ajaxSuccess': 'ajaxError', [v, k, j ? r: s]), p.fireWith(l, [v, x]), h && (n.trigger('ajaxComplete', [v, k]), --m.active || m.event.trigger('ajaxStop')))
        }
        return v
      },
      getJSON: function(a, b, c) {
        return m.get(a, b, c, 'json')
      },
      getScript: function(a, b) {
        return m.get(a, void 0, b, 'script')
      },
    }),
    m.each(['get', 'post'],
      function(a, b) {
        m[b] = function(a, c, d, e) {
          return m.isFunction(c) && (e = e || d, d = c, c = void 0),
          m.ajax({
            url: a,
            type: b,
            dataType: e,
            data: c,
            success: d,
          })
        }
      }),
    m.each([
      'ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend',
    ],
    function(a, b) {
      m.fn[b] = function(a) {
        return this.on(b, a)
      }
    }),
    m._evalUrl = function(a) {
      return m.ajax({
        url: a,
        type: 'GET',
        dataType: 'script',
        async: !1,
        global: !1,
        'throws': !0,
      })
    };
    let dc = /%20/g,
      ec = /\[\]$/,
      fc = /\r?\n/g,
      gc = /^(?:submit|button|image|reset|file)$/i,
      hc = /^(?:input|select|textarea|keygen)/i;
    function ic(a, b, c, d) {
      let e;
      if (m.isArray(b)) {
        m.each(b,
          function(b, e) {
            c || ec.test(a) ? d(a, e) : ic(a + '[' + ('object' === typeof e ? b: '') + ']', e, c, d)
          })
      } else {
        if (c || 'object' !== m.type(b)) {
          d(a, b)
        } else {
          for (e in b) {
            ic(a + '[' + e + ']', b[e], c, d)
          }
        }
      }
    }
    m.param = function(a, b) {
      let c, d = [],
        e = function(a, b) {
          b = m.isFunction(b) ? b() : null === b ? '': b,
          d[d.length] = encodeURIComponent(a) + '=' + encodeURIComponent(b)
        };
      if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.Async && !m.isPlainObject(a)) {
        m.each(a,
          function() {
            e(this.name, this.value)
          })
      } else {
        for (c in a) {
          ic(c, a[c], b, e)
        }
      }
      return d.join('&').replace(dc, '+')
    },
    m.fn.extend({
      serialize: function() {
        return m.param(this.serializeArray())
      },
      serializeArray: function() {
        return this.map(function() {
          let a = m.prop(this, 'elements');
          return a ? m.makeArray(a) : this
        }).filter(function() {
          let a = this.type;
          return this.name && !m(this).is(':disabled') && hc.test(this.nodeName) && !gc.test(a) && (this.checked || !U.test(a))
        }).map(function(a, b) {
          let c = m(this).val();
          return null === c ? null: m.isArray(c) ? m.map(c,
            function(a) {
              return {
                name: b.name,
                value: a.replace(fc, '\r\n'),
              }
            }) : {
            name: b.name,
            value: c.replace(fc, '\r\n'),
          }
        }).get()
      },
    }),
    m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ?
      function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && mc() || nc()
      }: mc;
    let jc = 0,
      kc = {},
      lc = m.ajaxSettings.xhr();
    a.ActiveXObject && m(a).on('unload',
      function() {
        for (let a in kc) {
          kc[a](void 0, !0)
        }
      }),
    k.cors = !!lc && 'withCredentials' in lc,
    lc = k.ajax = !!lc,
    lc && m.ajaxTransport(function(a) {
      if (!a.crossDomain || k.cors) {
        let b;
        return {
          send: function(c, d) {
            let e, f = a.xhr(),
              g = ++jc;
            if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) {
              for (e in a.xhrFields) {
                f[e] = a.xhrFields[e]
              }
            }
            a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType),
            a.crossDomain || c['X-Requested-With'] || (c['X-Requested-With'] = 'XMLHttpRequest');
            for (e in c) {
              void 0 !== c[e] && f.setRequestHeader(e, c[e] + '')
            }
            f.send(a.hasContent && a.data || null),
            b = function(c, e) {
              let h, i, j;
              if (b && (e || 4 === f.readyState)) {
                if (delete kc[g], b = void 0, f.onreadystatechange = m.noop, e) {
                  4 !== f.readyState && f.abort()
                } else {
                  j = {},
                  h = f.status,
                  'string' === typeof f.responseText && (j.text = f.responseText);
                  try {
                    i = f.statusText
                  } catch(k) {
                    i = ''
                  }
                  h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                }
              }
              j && d(h, i, j, f.getAllResponseHeaders())
            },
            a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = kc[g] = b: b()
          },
          abort: function() {
            b && b(void 0, !0)
          },
        }
      }
    });
    function mc() {
      try {
        return new a.XMLHttpRequest
      } catch(b) {}
    }
    function nc() {
      try {
        return new a.ActiveXObject('Microsoft.XMLHTTP')
      } catch(b) {}
    }
    m.ajaxSetup({
      accepts: {
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
      },
      contents: {
        script: /(?:java|ecma)script/,
      },
      converters: {
        'text script': function(a) {
          return m.globalEval(a),
          a
        },
      },
    }),
    m.ajaxPrefilter('script',
      function(a) {
        void 0 === a.cache && (a.cache = !1),
        a.crossDomain && (a.type = 'GET', a.global = !1)
      }),
    m.ajaxTransport('script',
      function(a) {
        if (a.crossDomain) {
          let b, c = y.head || m('head')[0] || y.documentElement;
          return {
            send: function(d, e) {
              b = y.createElement('script'),
              b.async = !0,
              a.scriptCharset && (b.charset = a.scriptCharset),
              b.src = a.url,
              b.onload = b.onreadystatechange = function(a, c) {
                (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, 'success'))
              },
              c.insertBefore(b, c.firstChild)
            },
            abort: function() {
              b && b.onload(void 0, !0)
            },
          }
        }
      });
    let oc = [],
      pc = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
      jsonp: 'callback',
      jsonpCallback: function() {
        let a = oc.pop() || m.expando + '_' + Kb++;
        return this[a] = !0,
        a
      },
    }),
    m.ajaxPrefilter('json jsonp',
      function(b, c, d) {
        let e, f, g, h = b.jsonp !== !1 && (pc.test(b.url) ? 'url': 'string' === typeof b.data && !(b.contentType || '').indexOf('application/x-www-form-urlencoded') && pc.test(b.data) && 'data');
        return h || 'jsonp' === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(pc, '$1' + e) : b.jsonp !== !1 && (b.url += (Lb.test(b.url) ? '&': '?') + b.jsonp + '=' + e), b.converters['script json'] = function() {
          return g || m.error(e + ' was not called'),
          g[0]
        },
        b.dataTypes[0] = 'json', f = a[e], a[e] = function() {
          g = arguments
        },
        d.always(function() {
          a[e] = f,
          b[e] && (b.jsonpCallback = c.jsonpCallback, oc.push(e)),
          g && m.isFunction(f) && f(g[0]),
          g = f = void 0
        }), 'script') : void 0
      }),
    m.parseHTML = function(a, b, c) {
      if (!a || 'string' !== typeof a) {
        return null
      }
      'boolean' === typeof b && (c = b, b = !1),
      b = b || y;
      let d = u.exec(a),
        e = !c && [];
      return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
    };
    let qc = m.fn.load;
    m.fn.load = function(a, b, c) {
      if ('string' !== typeof a && qc) {
        return qc.apply(this, arguments)
      }
      let d, e, f, g = this,
        h = a.indexOf(' ');
      return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)),
      m.isFunction(b) ? (c = b, b = void 0) : b && 'object' === typeof b && (f = 'POST'),
      g.length > 0 && m.ajax({
        url: a,
        type: f,
        dataType: 'html',
        data: b,
      }).done(function(a) {
        e = arguments,
        g.html(d ? m('<div>').append(m.parseHTML(a)).find(d) : a)
      }).complete(c &&
                    function(a, b) {
                      g.each(c, e || [a.responseText, b, a])
                    }),
      this
    },
    'function' === typeof define && define.amd && define('Async', [],
      function() {
        return m
      });
    let sc = a.J$;
    return m.noConflict = function(b) {
      return a.J$ === m && (a.J$ = sc),
      b,
      m
    },
    typeof b === K && (a.J$ = m),
    m
  });
