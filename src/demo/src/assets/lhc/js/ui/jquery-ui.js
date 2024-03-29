/* jQuery UI - v1.9.2 - 2012-11-23
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
 * Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */
(function(F, C) {
	var D = 0,
		A = /^ui-id-\d+$/;
	F.ui = F.ui || {};
	if (F.ui.version) {
		return
	}
	F.extend(F.ui, {
		version: "1.9.2",
		keyCode: {
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			NUMPAD_ADD: 107,
			NUMPAD_DECIMAL: 110,
			NUMPAD_DIVIDE: 111,
			NUMPAD_ENTER: 108,
			NUMPAD_MULTIPLY: 106,
			NUMPAD_SUBTRACT: 109,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		}
	});
	F.fn.extend({
		_focus: F.fn.focus,
		focus: function(H, G) {
			return typeof H === "number" ? this.each(function() {
				var I = this;
				setTimeout(function() {
					F(I).focus();
					if (G) {
						G.call(I)
					}
				}, H)
			}) : this._focus.apply(this, arguments)
		},
		scrollParent: function() {
			var G;
			if ((F.ui.ie && (/(static|relative)/).test(this.css("position"))) || (/absolute/).test(this.css("position"))) {
				G = this.parents().filter(function() {
					return (/(relative|absolute|fixed)/).test(F.css(this, "position")) && (/(auto|scroll)/).test(F.css(this, "overflow") + F.css(this, "overflow-y") + F.css(this, "overflow-x"))
				}).eq(0)
			} else {
				G = this.parents().filter(function() {
					return (/(auto|scroll)/).test(F.css(this, "overflow") + F.css(this, "overflow-y") + F.css(this, "overflow-x"))
				}).eq(0)
			}
			return (/fixed/).test(this.css("position")) || !G.length ? F(document) : G
		},
		zIndex: function(H) {
			if (H !== C) {
				return this.css("zIndex", H)
			}
			if (this.length) {
				var I = F(this[0]),
					G, J;
				while (I.length && I[0] !== document) {
					G = I.css("position");
					if (G === "absolute" || G === "relative" || G === "fixed") {
						J = parseInt(I.css("zIndex"), 10);
						if (!isNaN(J) && J !== 0) {
							return J
						}
					}
					I = I.parent()
				}
			}
			return 0
		},
		uniqueId: function() {
			return this.each(function() {
				if (!this.id) {
					this.id = "ui-id-" + (++D)
				}
			})
		},
		removeUniqueId: function() {
			return this.each(function() {
				if (A.test(this.id)) {
					F(this).removeAttr("id")
				}
			})
		}
	});

	function B(J, L) {
		var G, H, K, I = J.nodeName.toLowerCase();
		if ("area" === I) {
			G = J.parentNode;
			H = G.name;
			if (!J.href || !H || G.nodeName.toLowerCase() !== "map") {
				return false
			}
			K = F("img[usemap=#" + H + "]")[0];
			return !!K && E(K)
		}
		return (/input|select|textarea|button|object/.test(I) ? !J.disabled : "a" === I ? J.href || L : L) && E(J)
	}
	function E(G) {
		return F.expr.filters.visible(G) && !F(G).parents().andSelf().filter(function() {
			return F.css(this, "visibility") === "hidden"
		}).length
	}
	F.extend(F.expr[":"], {
		data: F.expr.createPseudo ? F.expr.createPseudo(function(G) {
			return function(H) {
				return !!F.data(H, G)
			}
		}) : function(I, G, H) {
			return !!F.data(I, H[3])
		},
		focusable: function(G) {
			return B(G, !isNaN(F.attr(G, "tabindex")))
		},
		tabbable: function(G) {
			var I = F.attr(G, "tabindex"),
				H = isNaN(I);
			return (H || I >= 0) && B(G, !H)
		}
	});
	F(function() {
		var G = document.body,
			H = G.appendChild(H = document.createElement("div"));
		H.offsetHeight;
		F.extend(H.style, {
			minHeight: "100px",
			height: "auto",
			padding: 0,
			borderWidth: 0
		});
		F.support.minHeight = H.offsetHeight === 100;
		F.support.selectstart = "onselectstart" in H;
		G.removeChild(H).style.display = "none"
	});
	if (!F("<a>").outerWidth(1).jquery) {
		F.each(["Width", "Height"], function(H, I) {
			var K = I === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
				G = I.toLowerCase(),
				J = {
					innerWidth: F.fn.innerWidth,
					innerHeight: F.fn.innerHeight,
					outerWidth: F.fn.outerWidth,
					outerHeight: F.fn.outerHeight
				};

			function L(O, M, P, N) {
				F.each(K, function() {
					M -= parseFloat(F.css(O, "padding" + this)) || 0;
					if (P) {
						M -= parseFloat(F.css(O, "border" + this + "Width")) || 0
					}
					if (N) {
						M -= parseFloat(F.css(O, "margin" + this)) || 0
					}
				});
				return M
			}
			F.fn["inner" + I] = function(M) {
				if (M === C) {
					return J["inner" + I].call(this)
				}
				return this.each(function() {
					F(this).css(G, L(this, M) + "px")
				})
			};
			F.fn["outer" + I] = function(M, N) {
				if (typeof M !== "number") {
					return J["outer" + I].call(this, M)
				}
				return this.each(function() {
					F(this).css(G, L(this, M, true, N) + "px")
				})
			}
		})
	}
	if (F("<a>").data("a-b", "a").removeData("a-b").data("a-b")) {
		F.fn.removeData = (function(G) {
			return function(H) {
				if (arguments.length) {
					return G.call(this, F.camelCase(H))
				} else {
					return G.call(this)
				}
			}
		})(F.fn.removeData)
	}(function() {
		var G = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [];
		F.ui.ie = G.length ? true : false;
		F.ui.ie6 = parseFloat(G[1], 10) === 6
	})();
	F.fn.extend({
		disableSelection: function() {
			return this.bind((F.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(G) {
				G.preventDefault()
			})
		},
		enableSelection: function() {
			return this.unbind(".ui-disableSelection")
		}
	});
	F.extend(F.ui, {
		plugin: {
			add: function(J, G, K) {
				var H, I = F.ui[J].prototype;
				for (H in K) {
					I.plugins[H] = I.plugins[H] || [];
					I.plugins[H].push([G, K[H]])
				}
			},
			call: function(H, I, K) {
				var G, J = H.plugins[I];
				if (!J || !H.element[0].parentNode || H.element[0].parentNode.nodeType === 11) {
					return
				}
				for (G = 0; G < J.length; G++) {
					if (H.options[J[G][0]]) {
						J[G][1].apply(H.element, K)
					}
				}
			}
		},
		contains: F.contains,
		hasScroll: function(G, I) {
			if (F(G).css("overflow") === "hidden") {
				return false
			}
			var H = (I && I === "left") ? "scrollLeft" : "scrollTop",
				J = false;
			if (G[H] > 0) {
				return true
			}
			G[H] = 1;
			J = (G[H] > 0);
			G[H] = 0;
			return J
		},
		isOverAxis: function(I, H, G) {
			return (I > H) && (I < (H + G))
		},
		isOver: function(K, J, I, H, G, L) {
			return F.ui.isOverAxis(K, I, G) && F.ui.isOverAxis(J, H, L)
		}
	})
})(jQuery);
(function(E, A) {
	var C = 0,
		D = Array.prototype.slice,
		B = E.cleanData;
	E.cleanData = function(H) {
		for (var F = 0, I;
		(I = H[F]) != null; F++) {
			try {
				E(I).triggerHandler("remove")
			} catch (G) {}
		}
		B(H)
	};
	E.widget = function(H, G, L) {
		var J, I, F, K, M = H.split(".")[0];
		H = H.split(".")[1];
		J = M + "-" + H;
		if (!L) {
			L = G;
			G = E.Widget
		}
		E.expr[":"][J.toLowerCase()] = function(N) {
			return !!E.data(N, J)
		};
		E[M] = E[M] || {};
		I = E[M][H];
		F = E[M][H] = function(N, O) {
			if (!this._createWidget) {
				return new F(N, O)
			}
			if (arguments.length) {
				this._createWidget(N, O)
			}
		};
		E.extend(F, I, {
			version: L.version,
			_proto: E.extend({}, L),
			_childConstructors: []
		});
		K = new G();
		K.options = E.widget.extend({}, K.options);
		E.each(L, function(N, O) {
			if (E.isFunction(O)) {
				L[N] = (function() {
					var P = function() {
							return G.prototype[N].apply(this, arguments)
						},
						Q = function(R) {
							return G.prototype[N].apply(this, R)
						};
					return function() {
						var S = this._super,
							T = this._superApply,
							R;
						this._super = P;
						this._superApply = Q;
						R = O.apply(this, arguments);
						this._super = S;
						this._superApply = T;
						return R
					}
				})()
			}
		});
		F.prototype = E.widget.extend(K, {
			widgetEventPrefix: I ? K.widgetEventPrefix : H
		}, L, {
			constructor: F,
			namespace: M,
			widgetName: H,
			widgetBaseClass: J,
			widgetFullName: J
		});
		if (I) {
			E.each(I._childConstructors, function(N, O) {
				var P = O.prototype;
				E.widget(P.namespace + "." + P.widgetName, F, O._proto)
			});
			delete I._childConstructors
		} else {
			G._childConstructors.push(F)
		}
		E.widget.bridge(H, F)
	};
	E.widget.extend = function(J) {
		var H = D.call(arguments, 1),
			F = 0,
			K = H.length,
			G, I;
		for (; F < K; F++) {
			for (G in H[F]) {
				I = H[F][G];
				if (H[F].hasOwnProperty(G) && I !== A) {
					if (E.isPlainObject(I)) {
						J[G] = E.isPlainObject(J[G]) ? E.widget.extend({}, J[G], I) : E.widget.extend({}, I)
					} else {
						J[G] = I
					}
				}
			}
		}
		return J
	};
	E.widget.bridge = function(G, F) {
		var H = F.prototype.widgetFullName || G;
		E.fn[G] = function(J) {
			var K = typeof J === "string",
				L = D.call(arguments, 1),
				I = this;
			J = !K && L.length ? E.widget.extend.apply(null, [J].concat(L)) : J;
			if (K) {
				this.each(function() {
					var M, N = E.data(this, H);
					if (!N) {
						return E.error("cannot call methods on " + G + " prior to initialization; attempted to call method '" + J + "'")
					}
					if (!E.isFunction(N[J]) || J.charAt(0) === "_") {
						return E.error("no such method '" + J + "' for " + G + " widget instance")
					}
					M = N[J].apply(N, L);
					if (M !== N && M !== A) {
						I = M && M.jquery ? I.pushStack(M.get()) : M;
						return false
					}
				})
			} else {
				this.each(function() {
					var M = E.data(this, H);
					if (M) {
						M.option(J || {})._init()
					} else {
						E.data(this, H, new F(J, this))
					}
				})
			}
			return I
		}
	};
	E.Widget = function() {};
	E.Widget._childConstructors = [];
	E.Widget.prototype = {
		widgetName: "widget",
		widgetEventPrefix: "",
		defaultElement: "<div>",
		options: {
			disabled: false,
			create: null
		},
		_createWidget: function(F, G) {
			G = E(G || this.defaultElement || this)[0];
			this.element = E(G);
			this.uuid = C++;
			this.eventNamespace = "." + this.widgetName + this.uuid;
			this.options = E.widget.extend({}, this.options, this._getCreateOptions(), F);
			this.bindings = E();
			this.hoverable = E();
			this.focusable = E();
			if (G !== this) {
				E.data(G, this.widgetName, this);
				E.data(G, this.widgetFullName, this);
				this._on(true, this.element, {
					remove: function(H) {
						if (H.target === G) {
							this.destroy()
						}
					}
				});
				this.document = E(G.style ? G.ownerDocument : G.document || G);
				this.window = E(this.document[0].defaultView || this.document[0].parentWindow)
			}
			this._create();
			this._trigger("create", null, this._getCreateEventData());
			this._init()
		},
		_getCreateOptions: E.noop,
		_getCreateEventData: E.noop,
		_create: E.noop,
		_init: E.noop,
		destroy: function() {
			this._destroy();
			this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(E.camelCase(this.widgetFullName));
			this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
			this.bindings.unbind(this.eventNamespace);
			this.hoverable.removeClass("ui-state-hover");
			this.focusable.removeClass("ui-state-focus")
		},
		_destroy: E.noop,
		widget: function() {
			return this.element
		},
		option: function(G, J) {
			var I = G,
				F, K, H;
			if (arguments.length === 0) {
				return E.widget.extend({}, this.options)
			}
			if (typeof G === "string") {
				I = {};
				F = G.split(".");
				G = F.shift();
				if (F.length) {
					K = I[G] = E.widget.extend({}, this.options[G]);
					for (H = 0; H < F.length - 1; H++) {
						K[F[H]] = K[F[H]] || {};
						K = K[F[H]]
					}
					G = F.pop();
					if (J === A) {
						return K[G] === A ? null : K[G]
					}
					K[G] = J
				} else {
					if (J === A) {
						return this.options[G] === A ? null : this.options[G]
					}
					I[G] = J
				}
			}
			this._setOptions(I);
			return this
		},
		_setOptions: function(G) {
			var F;
			for (F in G) {
				this._setOption(F, G[F])
			}
			return this
		},
		_setOption: function(F, G) {
			this.options[F] = G;
			if (F === "disabled") {
				this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !! G).attr("aria-disabled", G);
				this.hoverable.removeClass("ui-state-hover");
				this.focusable.removeClass("ui-state-focus")
			}
			return this
		},
		enable: function() {
			return this._setOption("disabled", false)
		},
		disable: function() {
			return this._setOption("disabled", true)
		},
		_on: function(H, I, F) {
			var J, G = this;
			if (typeof H !== "boolean") {
				F = I;
				I = H;
				H = false
			}
			if (!F) {
				F = I;
				I = this.element;
				J = this.widget()
			} else {
				I = J = E(I);
				this.bindings = this.bindings.add(I)
			}
			E.each(F, function(N, L) {
				function P() {
					if (!H && (G.options.disabled === true || E(this).hasClass("ui-state-disabled"))) {
						return
					}
					return (typeof L === "string" ? G[L] : L).apply(G, arguments)
				}
				if (typeof L !== "string") {
					P.guid = L.guid = L.guid || P.guid || E.guid++
				}
				var K = N.match(/^(\w+)\s*(.*)$/),
					M = K[1] + G.eventNamespace,
					O = K[2];
				if (O) {
					J.delegate(O, M, P)
				} else {
					I.bind(M, P)
				}
			})
		},
		_off: function(G, F) {
			F = (F || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
			G.unbind(F).undelegate(F)
		},
		_delay: function(G, I) {
			function H() {
				return (typeof G === "string" ? F[G] : G).apply(F, arguments)
			}
			var F = this;
			return setTimeout(H, I || 0)
		},
		_hoverable: function(F) {
			this.hoverable = this.hoverable.add(F);
			this._on(F, {
				mouseenter: function(G) {
					E(G.currentTarget).addClass("ui-state-hover")
				},
				mouseleave: function(G) {
					E(G.currentTarget).removeClass("ui-state-hover")
				}
			})
		},
		_focusable: function(F) {
			this.focusable = this.focusable.add(F);
			this._on(F, {
				focusin: function(G) {
					E(G.currentTarget).addClass("ui-state-focus")
				},
				focusout: function(G) {
					E(G.currentTarget).removeClass("ui-state-focus")
				}
			})
		},
		_trigger: function(F, I, K) {
			var H, G, J = this.options[F];
			K = K || {};
			I = E.Event(I);
			I.type = (F === this.widgetEventPrefix ? F : this.widgetEventPrefix + F).toLowerCase();
			I.target = this.element[0];
			G = I.originalEvent;
			if (G) {
				for (H in G) {
					if (!(H in I)) {
						I[H] = G[H]
					}
				}
			}
			this.element.trigger(I, K);
			return !(E.isFunction(J) && J.apply(this.element[0], [I].concat(K)) === false || I.isDefaultPrevented())
		}
	};
	E.each({
		show: "fadeIn",
		hide: "fadeOut"
	}, function(F, G) {
		E.Widget.prototype["_" + F] = function(L, J, H) {
			if (typeof J === "string") {
				J = {
					effect: J
				}
			}
			var I, K = !J ? F : J === true || typeof J === "number" ? G : J.effect || G;
			J = J || {};
			if (typeof J === "number") {
				J = {
					duration: J
				}
			}
			I = !E.isEmptyObject(J);
			J.complete = H;
			if (J.delay) {
				L.delay(J.delay)
			}
			if (I && E.effects && (E.effects.effect[K] || E.uiBackCompat !== false && E.effects[K])) {
				L[F](J)
			} else {
				if (K !== F && L[K]) {
					L[K](J.duration, J.easing, H)
				} else {
					L.queue(function(M) {
						E(this)[F]();
						if (H) {
							H.call(L[0])
						}
						M()
					})
				}
			}
		}
	});
	if (E.uiBackCompat !== false) {
		E.Widget.prototype._getCreateOptions = function() {
			return E.metadata && E.metadata.get(this.element[0])[this.widgetName]
		}
	}
})(jQuery);
(function(C, B) {
	var A = false;
	C(document).mouseup(function(D) {
		A = false
	});
	C.widget("ui.mouse", {
		version: "1.9.2",
		options: {
			cancel: "input,textarea,button,select,option",
			distance: 1,
			delay: 0
		},
		_mouseInit: function() {
			var D = this;
			this.element.bind("mousedown." + this.widgetName, function(E) {
				return D._mouseDown(E)
			}).bind("click." + this.widgetName, function(E) {
				if (true === C.data(E.target, D.widgetName + ".preventClickEvent")) {
					C.removeData(E.target, D.widgetName + ".preventClickEvent");
					E.stopImmediatePropagation();
					return false
				}
			});
			this.started = false
		},
		_mouseDestroy: function() {
			this.element.unbind("." + this.widgetName);
			if (this._mouseMoveDelegate) {
				C(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
			}
		},
		_mouseDown: function(F) {
			if (A) {
				return
			}(this._mouseStarted && this._mouseUp(F));
			this._mouseDownEvent = F;
			var D = this,
				G = (F.which === 1),
				E = (typeof this.options.cancel === "string" && F.target.nodeName ? C(F.target).closest(this.options.cancel).length : false);
			if (!G || E || !this._mouseCapture(F)) {
				return true
			}
			this.mouseDelayMet = !this.options.delay;
			if (!this.mouseDelayMet) {
				this._mouseDelayTimer = setTimeout(function() {
					D.mouseDelayMet = true
				}, this.options.delay)
			}
			if (this._mouseDistanceMet(F) && this._mouseDelayMet(F)) {
				this._mouseStarted = (this._mouseStart(F) !== false);
				if (!this._mouseStarted) {
					F.preventDefault();
					return true
				}
			}
			if (true === C.data(F.target, this.widgetName + ".preventClickEvent")) {
				C.removeData(F.target, this.widgetName + ".preventClickEvent")
			}
			this._mouseMoveDelegate = function(H) {
				return D._mouseMove(H)
			};
			this._mouseUpDelegate = function(H) {
				return D._mouseUp(H)
			};
			C(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
			F.preventDefault();
			A = true;
			return true
		},
		_mouseMove: function(D) {
			if (C.ui.ie && !(document.documentMode >= 9) && !D.button) {
				return this._mouseUp(D)
			}
			if (this._mouseStarted) {
				this._mouseDrag(D);
				return D.preventDefault()
			}
			if (this._mouseDistanceMet(D) && this._mouseDelayMet(D)) {
				this._mouseStarted = (this._mouseStart(this._mouseDownEvent, D) !== false);
				(this._mouseStarted ? this._mouseDrag(D) : this._mouseUp(D))
			}
			return !this._mouseStarted
		},
		_mouseUp: function(D) {
			C(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
			if (this._mouseStarted) {
				this._mouseStarted = false;
				if (D.target === this._mouseDownEvent.target) {
					C.data(D.target, this.widgetName + ".preventClickEvent", true)
				}
				this._mouseStop(D)
			}
			return false
		},
		_mouseDistanceMet: function(D) {
			return (Math.max(Math.abs(this._mouseDownEvent.pageX - D.pageX), Math.abs(this._mouseDownEvent.pageY - D.pageY)) >= this.options.distance)
		},
		_mouseDelayMet: function(D) {
			return this.mouseDelayMet
		},
		_mouseStart: function(D) {},
		_mouseDrag: function(D) {},
		_mouseStop: function(D) {},
		_mouseCapture: function(D) {
			return true
		}
	})

})(jQuery);
(function(B, A) {
	B.widget("ui.draggable", B.ui.mouse, {
		version: "1.9.2",
		widgetEventPrefix: "drag",
		options: {
			addClasses: true,
			appendTo: "parent",
			axis: false,
			connectToSortable: false,
			containment: false,
			cursor: "auto",
			cursorAt: false,
			grid: false,
			handle: false,
			helper: "original",
			iframeFix: false,
			opacity: false,
			refreshPositions: false,
			revert: false,
			revertDuration: 500,
			scope: "default",
			scroll: true,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			snap: false,
			snapMode: "both",
			snapTolerance: 20,
			stack: false,
			zIndex: false
		},
		_create: function() {
			if (this.options.helper == "original" && !(/^(?:r|a|f)/).test(this.element.css("position"))) {
				this.element[0].style.position = "relative"
			}(this.options.addClasses && this.element.addClass("ui-draggable"));
			(this.options.disabled && this.element.addClass("ui-draggable-disabled"));
			this._mouseInit()
		},
		_destroy: function() {
			this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
			this._mouseDestroy()
		},
		_mouseCapture: function(D) {
			var C = this.options;
			if (this.helper || C.disabled || B(D.target).is(".ui-resizable-handle")) {
				return false
			}
			this.handle = this._getHandle(D);
			if (!this.handle) {
				return false
			}
			B(C.iframeFix === true ? "iframe" : C.iframeFix).each(function() {
				B('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
					width: this.offsetWidth + "px",
					height: this.offsetHeight + "px",
					position: "absolute",
					opacity: "0.001",
					zIndex: 1000
				}).css(B(this).offset()).appendTo("body")
			});
			return true
		},
		_mouseStart: function(D) {
			var C = this.options;
			this.helper = this._createHelper(D);
			this.helper.addClass("ui-draggable-dragging");
			this._cacheHelperProportions();
			if (B.ui.ddmanager) {
				B.ui.ddmanager.current = this
			}
			this._cacheMargins();
			this.cssPosition = this.helper.css("position");
			this.scrollParent = this.helper.scrollParent();
			this.offset = this.positionAbs = this.element.offset();
			this.offset = {
				top: this.offset.top - this.margins.top,
				left: this.offset.left - this.margins.left
			};
			B.extend(this.offset, {
				click: {
					left: D.pageX - this.offset.left,
					top: D.pageY - this.offset.top
				},
				parent: this._getParentOffset(),
				relative: this._getRelativeOffset()
			});
			this.originalPosition = this.position = this._generatePosition(D);
			this.originalPageX = D.pageX;
			this.originalPageY = D.pageY;
			(C.cursorAt && this._adjustOffsetFromHelper(C.cursorAt));
			if (C.containment) {
				this._setContainment()
			}
			if (this._trigger("start", D) === false) {
				this._clear();
				return false
			}
			this._cacheHelperProportions();
			if (B.ui.ddmanager && !C.dropBehaviour) {
				B.ui.ddmanager.prepareOffsets(this, D)
			}
			this._mouseDrag(D, true);
			if (B.ui.ddmanager) {
				B.ui.ddmanager.dragStart(this, D)
			}
			return true
		},
		_mouseDrag: function(E, D) {
			this.position = this._generatePosition(E);
			this.positionAbs = this._convertPositionTo("absolute");
			if (!D) {
				var C = this._uiHash();
				if (this._trigger("drag", E, C) === false) {
					this._mouseUp({});
					return false
				}
				this.position = C.position
			}
			if (!this.options.axis || this.options.axis != "y") {
				this.helper[0].style.left = this.position.left + "px"
			}
			if (!this.options.axis || this.options.axis != "x") {
				this.helper[0].style.top = this.position.top + "px"
			}
			if (B.ui.ddmanager) {
				B.ui.ddmanager.drag(this, E)
			}
			return false
		},
		_mouseStop: function(E) {
			var D = false;
			if (B.ui.ddmanager && !this.options.dropBehaviour) {
				D = B.ui.ddmanager.drop(this, E)
			}
			if (this.dropped) {
				D = this.dropped;
				this.dropped = false
			}
			var F = this.element[0],
				C = false;
			while (F && (F = F.parentNode)) {
				if (F == document) {
					C = true
				}
			}
			if (!C && this.options.helper === "original") {
				return false
			}
			if ((this.options.revert == "invalid" && !D) || (this.options.revert == "valid" && D) || this.options.revert === true || (B.isFunction(this.options.revert) && this.options.revert.call(this.element, D))) {
				var G = this;
				B(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
					if (G._trigger("stop", E) !== false) {
						G._clear()
					}
				})
			} else {
				if (this._trigger("stop", E) !== false) {
					this._clear()
				}
			}
			return false
		},
		_mouseUp: function(C) {
			B("div.ui-draggable-iframeFix").each(function() {
				this.parentNode.removeChild(this)
			});
			if (B.ui.ddmanager) {
				B.ui.ddmanager.dragStop(this, C)
			}
			return B.ui.mouse.prototype._mouseUp.call(this, C)
		},
		cancel: function() {
			if (this.helper.is(".ui-draggable-dragging")) {
				this._mouseUp({})
			} else {
				this._clear()
			}
			return this
		},
		_getHandle: function(D) {
			var C = !this.options.handle || !B(this.options.handle, this.element).length ? true : false;
			B(this.options.handle, this.element).find("*").andSelf().each(function() {
				if (this == D.target) {
					C = true
				}
			});
			return C
		},
		_createHelper: function(D) {
			var C = this.options;
			var E = B.isFunction(C.helper) ? B(C.helper.apply(this.element[0], [D])) : (C.helper == "clone" ? this.element.clone().removeAttr("id") : this.element);
			if (!E.parents("body").length) {
				E.appendTo((C.appendTo == "parent" ? this.element[0].parentNode : C.appendTo))
			}
			if (E[0] != this.element[0] && !(/(fixed|absolute)/).test(E.css("position"))) {
				E.css("position", "absolute")
			}
			return E
		},
		_adjustOffsetFromHelper: function(C) {
			if (typeof C == "string") {
				C = C.split(" ")
			}
			if (B.isArray(C)) {
				C = {
					left: +C[0],
					top: +C[1] || 0
				}
			}
			if ("left" in C) {
				this.offset.click.left = C.left + this.margins.left
			}
			if ("right" in C) {
				this.offset.click.left = this.helperProportions.width - C.right + this.margins.left
			}
			if ("top" in C) {
				this.offset.click.top = C.top + this.margins.top
			}
			if ("bottom" in C) {
				this.offset.click.top = this.helperProportions.height - C.bottom + this.margins.top
			}
		},
		_getParentOffset: function() {
			this.offsetParent = this.helper.offsetParent();
			var C = this.offsetParent.offset();
			if (this.cssPosition == "absolute" && this.scrollParent[0] != document && B.contains(this.scrollParent[0], this.offsetParent[0])) {
				C.left += this.scrollParent.scrollLeft();
				C.top += this.scrollParent.scrollTop()
			}
			if ((this.offsetParent[0] == document.body) || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && B.ui.ie)) {
				C = {
					top: 0,
					left: 0
				}
			}
			return {
				top: C.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: C.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function() {
			if (this.cssPosition == "relative") {
				var C = this.element.position();
				return {
					top: C.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
					left: C.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
				}
			} else {
				return {
					top: 0,
					left: 0
				}
			}
		},
		_cacheMargins: function() {
			this.margins = {
				left: (parseInt(this.element.css("marginLeft"), 10) || 0),
				top: (parseInt(this.element.css("marginTop"), 10) || 0),
				right: (parseInt(this.element.css("marginRight"), 10) || 0),
				bottom: (parseInt(this.element.css("marginBottom"), 10) || 0)
			}
		},
		_cacheHelperProportions: function() {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function() {
			var D = this.options;
			if (D.containment == "parent") {
				D.containment = this.helper[0].parentNode
			}
			if (D.containment == "document" || D.containment == "window") {
				this.containment = [D.containment == "document" ? 0 : B(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, D.containment == "document" ? 0 : B(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (D.containment == "document" ? 0 : B(window).scrollLeft()) + B(D.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (D.containment == "document" ? 0 : B(window).scrollTop()) + (B(D.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]
			}
			if (!(/^(document|window|parent)$/).test(D.containment) && D.containment.constructor != Array) {
				var F = B(D.containment);
				var G = F[0];
				if (!G) {
					return
				}
				var C = F.offset();
				var E = (B(G).css("overflow") != "hidden");
				this.containment = [(parseInt(B(G).css("borderLeftWidth"), 10) || 0) + (parseInt(B(G).css("paddingLeft"), 10) || 0), (parseInt(B(G).css("borderTopWidth"), 10) || 0) + (parseInt(B(G).css("paddingTop"), 10) || 0), (E ? Math.max(G.scrollWidth, G.offsetWidth) : G.offsetWidth) - (parseInt(B(G).css("borderLeftWidth"), 10) || 0) - (parseInt(B(G).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (E ? Math.max(G.scrollHeight, G.offsetHeight) : G.offsetHeight) - (parseInt(B(G).css("borderTopWidth"), 10) || 0) - (parseInt(B(G).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom];
				this.relative_container = F
			} else {
				if (D.containment.constructor == Array) {
					this.containment = D.containment
				}
			}
		},
		_convertPositionTo: function(C, E) {
			if (!E) {
				E = this.position
			}
			var H = C == "absolute" ? 1 : -1;
			var D = this.options,
				G = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && B.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
				F = (/(html|body)/i).test(G[0].tagName);
			return {
				top: (E.top + this.offset.relative.top * H + this.offset.parent.top * H - ((this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : (F ? 0 : G.scrollTop())) * H)),
				left: (E.left + this.offset.relative.left * H + this.offset.parent.left * H - ((this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : F ? 0 : G.scrollLeft()) * H))
			}
		},
		_generatePosition: function(G) {
			var K = this.options,
				L = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && B.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
				C = (/(html|body)/i).test(L[0].tagName);
			var I = G.pageX;
			var H = G.pageY;
			if (this.originalPosition) {
				var J;
				if (this.containment) {
					if (this.relative_container) {
						var F = this.relative_container.offset();
						J = [this.containment[0] + F.left, this.containment[1] + F.top, this.containment[2] + F.left, this.containment[3] + F.top]
					} else {
						J = this.containment
					}
					if (G.pageX - this.offset.click.left < J[0]) {
						I = J[0] + this.offset.click.left
					}
					if (G.pageY - this.offset.click.top < J[1]) {
						H = J[1] + this.offset.click.top
					}
					if (G.pageX - this.offset.click.left > J[2]) {
						I = J[2] + this.offset.click.left
					}
					if (G.pageY - this.offset.click.top > J[3]) {
						H = J[3] + this.offset.click.top
					}
				}
				if (K.grid) {
					var D = K.grid[1] ? this.originalPageY + Math.round((H - this.originalPageY) / K.grid[1]) * K.grid[1] : this.originalPageY;
					H = J ? (!(D - this.offset.click.top < J[1] || D - this.offset.click.top > J[3]) ? D : (!(D - this.offset.click.top < J[1]) ? D - K.grid[1] : D + K.grid[1])) : D;
					var E = K.grid[0] ? this.originalPageX + Math.round((I - this.originalPageX) / K.grid[0]) * K.grid[0] : this.originalPageX;
					I = J ? (!(E - this.offset.click.left < J[0] || E - this.offset.click.left > J[2]) ? E : (!(E - this.offset.click.left < J[0]) ? E - K.grid[0] : E + K.grid[0])) : E
				}
			}
			return {
				top: (H - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ((this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : (C ? 0 : L.scrollTop())))),
				left: (I - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ((this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : C ? 0 : L.scrollLeft())))
			}
		},
		_clear: function() {
			this.helper.removeClass("ui-draggable-dragging");
			if (this.helper[0] != this.element[0] && !this.cancelHelperRemoval) {
				this.helper.remove()
			}
			this.helper = null;
			this.cancelHelperRemoval = false
		},
		_trigger: function(C, E, D) {
			D = D || this._uiHash();
			B.ui.plugin.call(this, C, [E, D]);
			if (C == "drag") {
				this.positionAbs = this._convertPositionTo("absolute")
			}
			return B.Widget.prototype._trigger.call(this, C, E, D)
		},
		plugins: {},
		_uiHash: function(C) {
			return {
				helper: this.helper,
				position: this.position,
				originalPosition: this.originalPosition,
				offset: this.positionAbs
			}
		}
	});
	B.ui.plugin.add("draggable", "connectToSortable", {
		start: function(F, C) {
			var E = B(this).data("draggable"),
				D = E.options,
				G = B.extend({}, C, {
					item: E.element
				});
			E.sortables = [];
			B(D.connectToSortable).each(function() {
				var H = B.data(this, "sortable");
				if (H && !H.options.disabled) {
					E.sortables.push({
						instance: H,
						shouldRevert: H.options.revert
					});
					H.refreshPositions();
					H._trigger("activate", F, G)
				}
			})
		},
		stop: function(E, C) {
			var D = B(this).data("draggable"),
				F = B.extend({}, C, {
					item: D.element
				});
			B.each(D.sortables, function() {
				if (this.instance.isOver) {
					this.instance.isOver = 0;
					D.cancelHelperRemoval = true;
					this.instance.cancelHelperRemoval = false;
					if (this.shouldRevert) {
						this.instance.options.revert = true
					}
					this.instance._mouseStop(E);
					this.instance.options.helper = this.instance.options._helper;
					if (D.options.helper == "original") {
						this.instance.currentItem.css({
							top: "auto",
							left: "auto"
						})
					}
				} else {
					this.instance.cancelHelperRemoval = false;
					this.instance._trigger("deactivate", E, F)
				}
			})
		},
		drag: function(G, C) {
			var F = B(this).data("draggable"),
				D = this;
			var E = function(L) {
					var M = this.offset.click.top,
						J = this.offset.click.left;
					var O = this.positionAbs.top,
						N = this.positionAbs.left;
					var I = L.height,
						P = L.width;
					var K = L.top,
						H = L.left;
					return B.ui.isOver(O + M, N + J, K, H, I, P)
				};
			B.each(F.sortables, function(H) {
				var J = false;
				var I = this;
				this.instance.positionAbs = F.positionAbs;
				this.instance.helperProportions = F.helperProportions;
				this.instance.offset.click = F.offset.click;
				if (this.instance._intersectsWith(this.instance.containerCache)) {
					J = true;
					B.each(F.sortables, function() {
						this.instance.positionAbs = F.positionAbs;
						this.instance.helperProportions = F.helperProportions;
						this.instance.offset.click = F.offset.click;
						if (this != I && this.instance._intersectsWith(this.instance.containerCache) && B.ui.contains(I.instance.element[0], this.instance.element[0])) {
							J = false
						}
						return J
					})
				}
				if (J) {
					if (!this.instance.isOver) {
						this.instance.isOver = 1;
						this.instance.currentItem = B(D).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", true);
						this.instance.options._helper = this.instance.options.helper;
						this.instance.options.helper = function() {
							return C.helper[0]
						};
						G.target = this.instance.currentItem[0];
						this.instance._mouseCapture(G, true);
						this.instance._mouseStart(G, true, true);
						this.instance.offset.click.top = F.offset.click.top;
						this.instance.offset.click.left = F.offset.click.left;
						this.instance.offset.parent.left -= F.offset.parent.left - this.instance.offset.parent.left;
						this.instance.offset.parent.top -= F.offset.parent.top - this.instance.offset.parent.top;
						F._trigger("toSortable", G);
						F.dropped = this.instance.element;
						F.currentItem = F.element;
						this.instance.fromOutside = F
					}
					if (this.instance.currentItem) {
						this.instance._mouseDrag(G)
					}
				} else {
					if (this.instance.isOver) {
						this.instance.isOver = 0;
						this.instance.cancelHelperRemoval = true;
						this.instance.options.revert = false;
						this.instance._trigger("out", G, this.instance._uiHash(this.instance));
						this.instance._mouseStop(G, true);
						this.instance.options.helper = this.instance.options._helper;
						this.instance.currentItem.remove();
						if (this.instance.placeholder) {
							this.instance.placeholder.remove()
						}
						F._trigger("fromSortable", G);
						F.dropped = false
					}
				}
			})
		}
	});
	B.ui.plugin.add("draggable", "cursor", {
		start: function(E, C) {
			var F = B("body"),
				D = B(this).data("draggable").options;
			if (F.css("cursor")) {
				D._cursor = F.css("cursor")
			}
			F.css("cursor", D.cursor)
		},
		stop: function(E, C) {
			var D = B(this).data("draggable").options;
			if (D._cursor) {
				B("body").css("cursor", D._cursor)
			}
		}
	});
	B.ui.plugin.add("draggable", "opacity", {
		start: function(E, C) {
			var F = B(C.helper),
				D = B(this).data("draggable").options;
			if (F.css("opacity")) {
				D._opacity = F.css("opacity")
			}
			F.css("opacity", D.opacity)
		},
		stop: function(E, C) {
			var D = B(this).data("draggable").options;
			if (D._opacity) {
				B(C.helper).css("opacity", D._opacity)
			}
		}
	});
	B.ui.plugin.add("draggable", "scroll", {
		start: function(E, C) {
			var D = B(this).data("draggable");
			if (D.scrollParent[0] != document && D.scrollParent[0].tagName != "HTML") {
				D.overflowOffset = D.scrollParent.offset()
			}
		},
		drag: function(G, C) {
			var D = B(this).data("draggable"),
				E = D.options,
				F = false;
			if (D.scrollParent[0] != document && D.scrollParent[0].tagName != "HTML") {
				if (!E.axis || E.axis != "x") {
					if ((D.overflowOffset.top + D.scrollParent[0].offsetHeight) - G.pageY < E.scrollSensitivity) {
						D.scrollParent[0].scrollTop = F = D.scrollParent[0].scrollTop + E.scrollSpeed
					} else {
						if (G.pageY - D.overflowOffset.top < E.scrollSensitivity) {
							D.scrollParent[0].scrollTop = F = D.scrollParent[0].scrollTop - E.scrollSpeed
						}
					}
				}
				if (!E.axis || E.axis != "y") {
					if ((D.overflowOffset.left + D.scrollParent[0].offsetWidth) - G.pageX < E.scrollSensitivity) {
						D.scrollParent[0].scrollLeft = F = D.scrollParent[0].scrollLeft + E.scrollSpeed
					} else {
						if (G.pageX - D.overflowOffset.left < E.scrollSensitivity) {
							D.scrollParent[0].scrollLeft = F = D.scrollParent[0].scrollLeft - E.scrollSpeed
						}
					}
				}
			} else {
				if (!E.axis || E.axis != "x") {
					if (G.pageY - B(document).scrollTop() < E.scrollSensitivity) {
						F = B(document).scrollTop(B(document).scrollTop() - E.scrollSpeed)
					} else {
						if (B(window).height() - (G.pageY - B(document).scrollTop()) < E.scrollSensitivity) {
							F = B(document).scrollTop(B(document).scrollTop() + E.scrollSpeed)
						}
					}
				}
				if (!E.axis || E.axis != "y") {
					if (G.pageX - B(document).scrollLeft() < E.scrollSensitivity) {
						F = B(document).scrollLeft(B(document).scrollLeft() - E.scrollSpeed)
					} else {
						if (B(window).width() - (G.pageX - B(document).scrollLeft()) < E.scrollSensitivity) {
							F = B(document).scrollLeft(B(document).scrollLeft() + E.scrollSpeed)
						}
					}
				}
			}
			if (F !== false && B.ui.ddmanager && !E.dropBehaviour) {
				B.ui.ddmanager.prepareOffsets(D, G)
			}
		}
	});
	B.ui.plugin.add("draggable", "snap", {
		start: function(F, C) {
			var D = B(this).data("draggable"),
				E = D.options;
			D.snapElements = [];
			B(E.snap.constructor != String ? (E.snap.items || ":data(draggable)") : E.snap).each(function() {
				var H = B(this);
				var G = H.offset();
				if (this != D.element[0]) {
					D.snapElements.push({
						item: this,
						width: H.outerWidth(),
						height: H.outerHeight(),
						top: G.top,
						left: G.left
					})
				}
			})
		},
		drag: function(O, G) {
			var L = B(this).data("draggable"),
				J = L.options;
			var N = J.snapTolerance;
			var Q = G.offset.left,
				S = Q + L.helperProportions.width,
				R = G.offset.top,
				T = R + L.helperProportions.height;
			for (var H = L.snapElements.length - 1; H >= 0; H--) {
				var K = L.snapElements[H].left,
					C = K + L.snapElements[H].width,
					F = L.snapElements[H].top,
					M = F + L.snapElements[H].height;
				if (!((K - N < Q && Q < C + N && F - N < R && R < M + N) || (K - N < Q && Q < C + N && F - N < T && T < M + N) || (K - N < S && S < C + N && F - N < R && R < M + N) || (K - N < S && S < C + N && F - N < T && T < M + N))) {
					if (L.snapElements[H].snapping) {
						(L.options.snap.release && L.options.snap.release.call(L.element, O, B.extend(L._uiHash(), {
							snapItem: L.snapElements[H].item
						})))
					}
					L.snapElements[H].snapping = false;
					continue
				}
				if (J.snapMode != "inner") {
					var E = Math.abs(F - T) <= N;
					var I = Math.abs(M - R) <= N;
					var P = Math.abs(K - S) <= N;
					var U = Math.abs(C - Q) <= N;
					if (E) {
						G.position.top = L._convertPositionTo("relative", {
							top: F - L.helperProportions.height,
							left: 0
						}).top - L.margins.top
					}
					if (I) {
						G.position.top = L._convertPositionTo("relative", {
							top: M,
							left: 0
						}).top - L.margins.top
					}
					if (P) {
						G.position.left = L._convertPositionTo("relative", {
							top: 0,
							left: K - L.helperProportions.width
						}).left - L.margins.left
					}
					if (U) {
						G.position.left = L._convertPositionTo("relative", {
							top: 0,
							left: C
						}).left - L.margins.left
					}
				}
				var D = (E || I || P || U);
				if (J.snapMode != "outer") {
					var E = Math.abs(F - R) <= N;
					var I = Math.abs(M - T) <= N;
					var P = Math.abs(K - Q) <= N;
					var U = Math.abs(C - S) <= N;
					if (E) {
						G.position.top = L._convertPositionTo("relative", {
							top: F,
							left: 0
						}).top - L.margins.top
					}
					if (I) {
						G.position.top = L._convertPositionTo("relative", {
							top: M - L.helperProportions.height,
							left: 0
						}).top - L.margins.top
					}
					if (P) {
						G.position.left = L._convertPositionTo("relative", {
							top: 0,
							left: K
						}).left - L.margins.left
					}
					if (U) {
						G.position.left = L._convertPositionTo("relative", {
							top: 0,
							left: C - L.helperProportions.width
						}).left - L.margins.left
					}
				}
				if (!L.snapElements[H].snapping && (E || I || P || U || D)) {
					(L.options.snap.snap && L.options.snap.snap.call(L.element, O, B.extend(L._uiHash(), {
						snapItem: L.snapElements[H].item
					})))
				}
				L.snapElements[H].snapping = (E || I || P || U || D)
			}
		}
	});
	B.ui.plugin.add("draggable", "stack", {
		start: function(F, C) {
			var E = B(this).data("draggable").options;
			var D = B.makeArray(B(E.stack)).sort(function(I, H) {
				return (parseInt(B(I).css("zIndex"), 10) || 0) - (parseInt(B(H).css("zIndex"), 10) || 0)
			});
			if (!D.length) {
				return
			}
			var G = parseInt(D[0].style.zIndex) || 0;
			B(D).each(function(H) {
				this.style.zIndex = G + H
			});
			this[0].style.zIndex = G + D.length
		}
	});
	B.ui.plugin.add("draggable", "zIndex", {
		start: function(E, C) {
			var F = B(C.helper),
				D = B(this).data("draggable").options;
			if (F.css("zIndex")) {
				D._zIndex = F.css("zIndex")
			}
			F.css("zIndex", D.zIndex)
		},
		stop: function(E, C) {
			var D = B(this).data("draggable").options;
			if (D._zIndex) {
				B(C.helper).css("zIndex", D._zIndex)
			}
		}
	})
})(jQuery);
(function(B, A) {
	B.widget("ui.droppable", {
		version: "1.9.2",
		widgetEventPrefix: "drop",
		options: {
			accept: "*",
			activeClass: false,
			addClasses: true,
			greedy: false,
			hoverClass: false,
			scope: "default",
			tolerance: "intersect"
		},
		_create: function() {
			var C = this.options,
				D = C.accept;
			this.isover = 0;
			this.isout = 1;
			this.accept = B.isFunction(D) ? D : function(E) {
				return E.is(D)
			};
			this.proportions = {
				width: this.element[0].offsetWidth,
				height: this.element[0].offsetHeight
			};
			B.ui.ddmanager.droppables[C.scope] = B.ui.ddmanager.droppables[C.scope] || [];
			B.ui.ddmanager.droppables[C.scope].push(this);
			(C.addClasses && this.element.addClass("ui-droppable"))
		},
		_destroy: function() {
			var D = B.ui.ddmanager.droppables[this.options.scope];
			for (var C = 0; C < D.length; C++) {
				if (D[C] == this) {
					D.splice(C, 1)
				}
			}
			this.element.removeClass("ui-droppable ui-droppable-disabled")
		},
		_setOption: function(C, D) {
			if (C == "accept") {
				this.accept = B.isFunction(D) ? D : function(E) {
					return E.is(D)
				}
			}
			B.Widget.prototype._setOption.apply(this, arguments)
		},
		_activate: function(D) {
			var C = B.ui.ddmanager.current;
			if (this.options.activeClass) {
				this.element.addClass(this.options.activeClass)
			}(C && this._trigger("activate", D, this.ui(C)))
		},
		_deactivate: function(D) {
			var C = B.ui.ddmanager.current;
			if (this.options.activeClass) {
				this.element.removeClass(this.options.activeClass)
			}(C && this._trigger("deactivate", D, this.ui(C)))
		},
		_over: function(D) {
			var C = B.ui.ddmanager.current;
			if (!C || (C.currentItem || C.element)[0] == this.element[0]) {
				return
			}
			if (this.accept.call(this.element[0], (C.currentItem || C.element))) {
				if (this.options.hoverClass) {
					this.element.addClass(this.options.hoverClass)
				}
				this._trigger("over", D, this.ui(C))
			}
		},
		_out: function(D) {
			var C = B.ui.ddmanager.current;
			if (!C || (C.currentItem || C.element)[0] == this.element[0]) {
				return
			}
			if (this.accept.call(this.element[0], (C.currentItem || C.element))) {
				if (this.options.hoverClass) {
					this.element.removeClass(this.options.hoverClass)
				}
				this._trigger("out", D, this.ui(C))
			}
		},
		_drop: function(F, C) {
			var D = C || B.ui.ddmanager.current;
			if (!D || (D.currentItem || D.element)[0] == this.element[0]) {
				return false
			}
			var E = false;
			this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() {
				var G = B.data(this, "droppable");
				if (G.options.greedy && !G.options.disabled && G.options.scope == D.options.scope && G.accept.call(G.element[0], (D.currentItem || D.element)) && B.ui.intersect(D, B.extend(G, {
					offset: G.element.offset()
				}), G.options.tolerance)) {
					E = true;
					return false
				}
			});
			if (E) {
				return false
			}
			if (this.accept.call(this.element[0], (D.currentItem || D.element))) {
				if (this.options.activeClass) {
					this.element.removeClass(this.options.activeClass)
				}
				if (this.options.hoverClass) {
					this.element.removeClass(this.options.hoverClass)
				}
				this._trigger("drop", F, this.ui(D));
				return this.element
			}
			return false
		},
		ui: function(C) {
			return {
				draggable: (C.currentItem || C.element),
				helper: C.helper,
				position: C.position,
				offset: C.positionAbs
			}
		}
	});
	B.ui.intersect = function(I, M, N) {
		if (!M.offset) {
			return false
		}
		var F = (I.positionAbs || I.position.absolute).left,
			L = F + I.helperProportions.width,
			G = (I.positionAbs || I.position.absolute).top,
			J = G + I.helperProportions.height;
		var P = M.offset.left,
			C = P + M.proportions.width,
			H = M.offset.top,
			O = H + M.proportions.height;
		switch (N) {
		case "fit":
			return (P <= F && L <= C && H <= G && J <= O);
			break;
		case "intersect":
			return (P < F + (I.helperProportions.width / 2) && L - (I.helperProportions.width / 2) < C && H < G + (I.helperProportions.height / 2) && J - (I.helperProportions.height / 2) < O);
			break;
		case "pointer":
			var D = ((I.positionAbs || I.position.absolute).left + (I.clickOffset || I.offset.click).left),
				E = ((I.positionAbs || I.position.absolute).top + (I.clickOffset || I.offset.click).top),
				K = B.ui.isOver(E, D, H, P, M.proportions.height, M.proportions.width);
			return K;
			break;
		case "touch":
			return ((G >= H && G <= O) || (J >= H && J <= O) || (G < H && J > O)) && ((F >= P && F <= C) || (L >= P && L <= C) || (F < P && L > C));
			break;
		default:
			return false;
			break
		}
	};
	B.ui.ddmanager = {
		current: null,
		droppables: {
			"default": []
		},
		prepareOffsets: function(H, G) {
			var F = B.ui.ddmanager.droppables[H.options.scope] || [];
			var C = G ? G.type : null;
			var E = (H.currentItem || H.element).find(":data(droppable)").andSelf();
			droppablesLoop: for (var D = 0; D < F.length; D++) {
				if (F[D].options.disabled || (H && !F[D].accept.call(F[D].element[0], (H.currentItem || H.element)))) {
					continue
				}
				for (var I = 0; I < E.length; I++) {
					if (E[I] == F[D].element[0]) {
						F[D].proportions.height = 0;
						continue droppablesLoop
					}
				}
				F[D].visible = F[D].element.css("display") != "none";
				if (!F[D].visible) {
					continue
				}
				if (C == "mousedown") {
					F[D]._activate.call(F[D], G)
				}
				F[D].offset = F[D].element.offset();
				F[D].proportions = {
					width: F[D].element[0].offsetWidth,
					height: F[D].element[0].offsetHeight
				}
			}
		},
		drop: function(C, E) {
			var D = false;
			B.each(B.ui.ddmanager.droppables[C.options.scope] || [], function() {
				if (!this.options) {
					return
				}
				if (!this.options.disabled && this.visible && B.ui.intersect(C, this, this.options.tolerance)) {
					D = this._drop.call(this, E) || D
				}
				if (!this.options.disabled && this.visible && this.accept.call(this.element[0], (C.currentItem || C.element))) {
					this.isout = 1;
					this.isover = 0;
					this._deactivate.call(this, E)
				}
			});
			return D
		},
		dragStart: function(C, D) {
			C.element.parentsUntil("body").bind("scroll.droppable", function() {
				if (!C.options.refreshPositions) {
					B.ui.ddmanager.prepareOffsets(C, D)
				}
			})
		},
		drag: function(C, D) {
			if (C.options.refreshPositions) {
				B.ui.ddmanager.prepareOffsets(C, D)
			}
			B.each(B.ui.ddmanager.droppables[C.options.scope] || [], function() {
				if (this.options.disabled || this.greedyChild || !this.visible) {
					return
				}
				var I = B.ui.intersect(C, this, this.options.tolerance);
				var G = !I && this.isover == 1 ? "isout" : (I && this.isover == 0 ? "isover" : null);
				if (!G) {
					return
				}
				var F;
				if (this.options.greedy) {
					var E = this.options.scope;
					var H = this.element.parents(":data(droppable)").filter(function() {
						return B.data(this, "droppable").options.scope === E
					});
					if (H.length) {
						F = B.data(H[0], "droppable");
						F.greedyChild = (G == "isover" ? 1 : 0)
					}
				}
				if (F && G == "isover") {
					F["isover"] = 0;
					F["isout"] = 1;
					F._out.call(F, D)
				}
				this[G] = 1;
				this[G == "isout" ? "isover" : "isout"] = 0;
				this[G == "isover" ? "_over" : "_out"].call(this, D);
				if (F && G == "isout") {
					F["isout"] = 0;
					F["isover"] = 1;
					F._over.call(F, D)
				}
			})
		},
		dragStop: function(C, D) {
			C.element.parentsUntil("body").unbind("scroll.droppable");
			if (!C.options.refreshPositions) {
				B.ui.ddmanager.prepareOffsets(C, D)
			}
		}
	}
})(jQuery);
(function(D, B) {
	D.widget("ui.resizable", D.ui.mouse, {
		version: "1.9.2",
		widgetEventPrefix: "resize",
		options: {
			alsoResize: false,
			animate: false,
			animateDuration: "slow",
			animateEasing: "swing",
			aspectRatio: false,
			autoHide: false,
			containment: false,
			ghost: false,
			grid: false,
			handles: "e,s,se",
			helper: false,
			maxHeight: null,
			maxWidth: null,
			minHeight: 10,
			minWidth: 10,
			zIndex: 1000
		},
		_create: function() {
			var H = this,
				I = this.options;
			this.element.addClass("ui-resizable");
			D.extend(this, {
				_aspectRatio: !! (I.aspectRatio),
				aspectRatio: I.aspectRatio,
				originalElement: this.element,
				_proportionallyResizeElements: [],
				_helper: I.helper || I.ghost || I.animate ? I.helper || "ui-resizable-helper" : null
			});
			if (this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)) {
				this.element.wrap(D('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
					position: this.element.css("position"),
					width: this.element.outerWidth(),
					height: this.element.outerHeight(),
					top: this.element.css("top"),
					left: this.element.css("left")
				}));
				this.element = this.element.parent().data("resizable", this.element.data("resizable"));
				this.elementIsWrapper = true;
				this.element.css({
					marginLeft: this.originalElement.css("marginLeft"),
					marginTop: this.originalElement.css("marginTop"),
					marginRight: this.originalElement.css("marginRight"),
					marginBottom: this.originalElement.css("marginBottom")
				});
				this.originalElement.css({
					marginLeft: 0,
					marginTop: 0,
					marginRight: 0,
					marginBottom: 0
				});
				this.originalResizeStyle = this.originalElement.css("resize");
				this.originalElement.css("resize", "none");
				this._proportionallyResizeElements.push(this.originalElement.css({
					position: "static",
					zoom: 1,
					display: "block"
				}));
				this.originalElement.css({
					margin: this.originalElement.css("margin")
				});
				this._proportionallyResize()
			}
			this.handles = I.handles || (!D(".ui-resizable-handle", this.element).length ? "e,s,se" : {
				n: ".ui-resizable-n",
				e: ".ui-resizable-e",
				s: ".ui-resizable-s",
				w: ".ui-resizable-w",
				se: ".ui-resizable-se",
				sw: ".ui-resizable-sw",
				ne: ".ui-resizable-ne",
				nw: ".ui-resizable-nw"
			});
			if (this.handles.constructor == String) {
				if (this.handles == "all") {
					this.handles = "n,e,s,w,se,sw,ne,nw"
				}
				var G = this.handles.split(",");
				this.handles = {};
				for (var F = 0; F < G.length; F++) {
					var E = D.trim(G[F]),
						J = "ui-resizable-" + E;
					var K = D('<div class="ui-resizable-handle ' + J + '"></div>');
					K.css({
						zIndex: I.zIndex
					});
					if ("se" == E) {
						K.addClass("ui-icon ui-icon-gripsmall-diagonal-se")
					}
					this.handles[E] = ".ui-resizable-" + E;
					this.element.append(K)
				}
			}
			this._renderAxis = function(O) {
				O = O || this.element;
				for (var L in this.handles) {
					if (this.handles[L].constructor == String) {
						this.handles[L] = D(this.handles[L], this.element).show()
					}
					if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
						var P = D(this.handles[L], this.element),
							N = 0;
						N = /sw|ne|nw|se|n|s/.test(L) ? P.outerHeight() : P.outerWidth();
						var M = ["padding", /ne|nw|n/.test(L) ? "Top" : /se|sw|s/.test(L) ? "Bottom" : /^e$/.test(L) ? "Right" : "Left"].join("");
						O.css(M, N);
						this._proportionallyResize()
					}
					if (!D(this.handles[L]).length) {
						continue
					}

				}
			};
			this._renderAxis(this.element);
			this._handles = D(".ui-resizable-handle", this.element).disableSelection();
			this._handles.mouseover(function() {
				if (!H.resizing) {
					if (this.className) {
						var L = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
					}
					H.axis = L && L[1] ? L[1] : "se"
				}
			});
			if (I.autoHide) {
				this._handles.hide();
				D(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
					if (I.disabled) {
						return
					}
					D(this).removeClass("ui-resizable-autohide");
					H._handles.show()
				}).mouseleave(function() {
					if (I.disabled) {
						return
					}
					if (!H.resizing) {
						D(this).addClass("ui-resizable-autohide");
						H._handles.hide()
					}
				})
			}
			this._mouseInit()
		},
		_destroy: function() {
			this._mouseDestroy();
			var F = function(G) {
					D(G).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
				};
			if (this.elementIsWrapper) {
				F(this.element);
				var E = this.element;
				this.originalElement.css({
					position: E.css("position"),
					width: E.outerWidth(),
					height: E.outerHeight(),
					top: E.css("top"),
					left: E.css("left")
				}).insertAfter(E);
				E.remove()
			}
			this.originalElement.css("resize", this.originalResizeStyle);
			F(this.originalElement);
			return this
		},
		_mouseCapture: function(G) {
			var E = false;
			for (var F in this.handles) {
				if (D(this.handles[F])[0] == G.target) {
					E = true
				}
			}
			return !this.options.disabled && E
		},
		_mouseStart: function(I) {
			var G = this.options,
				H = this.element.position(),
				E = this.element;
			this.resizing = true;
			this.documentScroll = {
				top: D(document).scrollTop(),
				left: D(document).scrollLeft()
			};
			if (E.is(".ui-draggable") || (/absolute/).test(E.css("position"))) {
				E.css({
					position: "absolute",
					top: H.top,
					left: H.left
				})
			}
			this._renderProxy();
			var K = C(this.helper.css("left")),
				J = C(this.helper.css("top"));
			if (G.containment) {
				K += D(G.containment).scrollLeft() || 0;
				J += D(G.containment).scrollTop() || 0
			}
			this.offset = this.helper.offset();
			this.position = {
				left: K,
				top: J
			};
			this.size = this._helper ? {
				width: E.outerWidth(),
				height: E.outerHeight()
			} : {
				width: E.width(),
				height: E.height()
			};
			this.originalSize = this._helper ? {
				width: E.outerWidth(),
				height: E.outerHeight()
			} : {
				width: E.width(),
				height: E.height()
			};
			this.originalPosition = {
				left: K,
				top: J
			};
			this.sizeDiff = {
				width: E.outerWidth() - E.width(),
				height: E.outerHeight() - E.height()
			};
			this.originalMousePosition = {
				left: I.pageX,
				top: I.pageY
			};
			this.aspectRatio = (typeof G.aspectRatio == "number") ? G.aspectRatio : ((this.originalSize.width / this.originalSize.height) || 1);
			var F = D(".ui-resizable-" + this.axis).css("cursor");
			D("body").css("cursor", F == "auto" ? this.axis + "-resize" : F);
			E.addClass("ui-resizable-resizing");
			this._propagate("start", I);
			return true
		},
		_mouseDrag: function(G) {
			var I = this.helper,
				K = this.options,
				H = {},
				J = this,
				O = this.originalMousePosition,
				N = this.axis;
			var M = (G.pageX - O.left) || 0,
				L = (G.pageY - O.top) || 0;
			var E = this._change[N];
			if (!E) {
				return false
			}
			var F = E.apply(this, [G, M, L]);
			this._updateVirtualBoundaries(G.shiftKey);
			if (this._aspectRatio || G.shiftKey) {
				F = this._updateRatio(F, G)
			}
			F = this._respectSize(F, G);
			this._propagate("resize", G);
			I.css({
				top: this.position.top + "px",
				left: this.position.left + "px",
				width: this.size.width + "px",
				height: this.size.height + "px"
			});
			if (!this._helper && this._proportionallyResizeElements.length) {
				this._proportionallyResize()
			}
			this._updateCache(F);
			this._trigger("resize", G, this.ui());
			return false
		},
		_mouseStop: function(H) {
			this.resizing = false;
			var L = this.options,
				K = this;
			if (this._helper) {
				var M = this._proportionallyResizeElements,
					E = M.length && (/textarea/i).test(M[0].nodeName),
					F = E && D.ui.hasScroll(M[0], "left") ? 0 : K.sizeDiff.height,
					N = E ? 0 : K.sizeDiff.width;
				var G = {
					width: (K.helper.width() - N),
					height: (K.helper.height() - F)
				},
					J = (parseInt(K.element.css("left"), 10) + (K.position.left - K.originalPosition.left)) || null,
					I = (parseInt(K.element.css("top"), 10) + (K.position.top - K.originalPosition.top)) || null;
				if (!L.animate) {
					this.element.css(D.extend(G, {
						top: I,
						left: J
					}))
				}
				K.helper.height(K.size.height);
				K.helper.width(K.size.width);
				if (this._helper && !L.animate) {
					this._proportionallyResize()
				}
			}
			D("body").css("cursor", "auto");
			this.element.removeClass("ui-resizable-resizing");
			this._propagate("stop", H);
			if (this._helper) {
				this.helper.remove()
			}
			return false
		},
		_updateVirtualBoundaries: function(H) {
			var E = this.options,
				I, J, G, F, K;
			K = {
				minWidth: A(E.minWidth) ? E.minWidth : 0,
				maxWidth: A(E.maxWidth) ? E.maxWidth : Infinity,
				minHeight: A(E.minHeight) ? E.minHeight : 0,
				maxHeight: A(E.maxHeight) ? E.maxHeight : Infinity
			};
			if (this._aspectRatio || H) {
				I = K.minHeight * this.aspectRatio;
				G = K.minWidth / this.aspectRatio;
				J = K.maxHeight * this.aspectRatio;
				F = K.maxWidth / this.aspectRatio;
				if (I > K.minWidth) {
					K.minWidth = I
				}
				if (G > K.minHeight) {
					K.minHeight = G
				}
				if (J < K.maxWidth) {
					K.maxWidth = J
				}
				if (F < K.maxHeight) {
					K.maxHeight = F
				}
			}
			this._vBoundaries = K
		},
		_updateCache: function(F) {
			var E = this.options;
			this.offset = this.helper.offset();
			if (A(F.left)) {
				this.position.left = F.left
			}
			if (A(F.top)) {
				this.position.top = F.top
			}
			if (A(F.height)) {
				this.size.height = F.height
			}
			if (A(F.width)) {
				this.size.width = F.width
			}
		},
		_updateRatio: function(J, G) {
			var F = this.options,
				H = this.position,
				E = this.size,
				I = this.axis;
			if (A(J.height)) {
				J.width = (J.height * this.aspectRatio)
			} else {
				if (A(J.width)) {
					J.height = (J.width / this.aspectRatio)
				}
			}
			if (I == "sw") {
				J.left = H.left + (E.width - J.width);
				J.top = null
			}
			if (I == "nw") {
				J.top = H.top + (E.height - J.height);
				J.left = H.left + (E.width - J.width)
			}
			return J
		},
		_respectSize: function(I, K) {
			var M = this.helper,
				O = this._vBoundaries,
				N = this._aspectRatio || K.shiftKey,
				S = this.axis,
				L = A(I.width) && O.maxWidth && (O.maxWidth < I.width),
				F = A(I.height) && O.maxHeight && (O.maxHeight < I.height),
				H = A(I.width) && O.minWidth && (O.minWidth > I.width),
				G = A(I.height) && O.minHeight && (O.minHeight > I.height);
			if (H) {
				I.width = O.minWidth
			}
			if (G) {
				I.height = O.minHeight
			}
			if (L) {
				I.width = O.maxWidth
			}
			if (F) {
				I.height = O.maxHeight
			}
			var J = this.originalPosition.left + this.originalSize.width,
				P = this.position.top + this.size.height;
			var E = /sw|nw|w/.test(S),
				R = /nw|ne|n/.test(S);
			if (H && E) {
				I.left = J - O.minWidth
			}
			if (L && E) {
				I.left = J - O.maxWidth
			}
			if (G && R) {
				I.top = P - O.minHeight
			}
			if (F && R) {
				I.top = P - O.maxHeight
			}
			var Q = !I.width && !I.height;
			if (Q && !I.left && I.top) {
				I.top = null
			} else {
				if (Q && !I.top && I.left) {
					I.left = null
				}
			}
			return I
		},
		_proportionallyResize: function() {
			var F = this.options;
			if (!this._proportionallyResizeElements.length) {
				return
			}
			var I = this.helper || this.element;
			for (var E = 0; E < this._proportionallyResizeElements.length; E++) {
				var J = this._proportionallyResizeElements[E];
				if (!this.borderDif) {
					var H = [J.css("borderTopWidth"), J.css("borderRightWidth"), J.css("borderBottomWidth"), J.css("borderLeftWidth")],
						G = [J.css("paddingTop"), J.css("paddingRight"), J.css("paddingBottom"), J.css("paddingLeft")];
					this.borderDif = D.map(H, function(N, L) {
						var K = parseInt(N, 10) || 0,
							M = parseInt(G[L], 10) || 0;
						return K + M
					})
				}
				J.css({
					height: (I.height() - this.borderDif[0] - this.borderDif[2]) || 0,
					width: (I.width() - this.borderDif[1] - this.borderDif[3]) || 0
				})
			}
		},
		_renderProxy: function() {
			var E = this.element,
				F = this.options;
			this.elementOffset = E.offset();
			if (this._helper) {
				this.helper = this.helper || D('<div style="overflow:hidden;"></div>');
				var H = (D.ui.ie6 ? 1 : 0),
					G = (D.ui.ie6 ? 2 : -1);
				this.helper.addClass(this._helper).css({
					width: this.element.outerWidth() + G,
					height: this.element.outerHeight() + G,
					position: "absolute",
					left: this.elementOffset.left - H + "px",
					top: this.elementOffset.top - H + "px",
					zIndex: ++F.zIndex
				});
				this.helper.appendTo("body").disableSelection()
			} else {
				this.helper = this.element
			}
		},
		_change: {
			e: function(G, F, E) {
				return {
					width: this.originalSize.width + F
				}
			},
			w: function(I, G, E) {
				var F = this.options,
					J = this.originalSize,
					H = this.originalPosition;
				return {
					left: H.left + G,
					width: J.width - G
				}
			},
			n: function(I, G, E) {
				var F = this.options,
					J = this.originalSize,
					H = this.originalPosition;
				return {
					top: H.top + E,
					height: J.height - E
				}
			},
			s: function(G, F, E) {
				return {
					height: this.originalSize.height + E
				}
			},
			se: function(G, F, E) {
				return D.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [G, F, E]))
			},
			sw: function(G, F, E) {
				return D.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [G, F, E]))
			},
			ne: function(G, F, E) {
				return D.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [G, F, E]))
			},
			nw: function(G, F, E) {
				return D.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [G, F, E]))
			}
		},
		_propagate: function(E, F) {
			D.ui.plugin.call(this, E, [F, this.ui()]);
			(E != "resize" && this._trigger(E, F, this.ui()))
		},
		plugins: {},
		ui: function() {
			return {
				originalElement: this.originalElement,
				element: this.element,
				helper: this.helper,
				position: this.position,
				size: this.size,
				originalSize: this.originalSize,
				originalPosition: this.originalPosition
			}
		}
	});
	D.ui.plugin.add("resizable", "alsoResize", {
		start: function(H, E) {
			var F = D(this).data("resizable"),
				G = F.options;
			var I = function(J) {
					D(J).each(function() {
						var K = D(this);
						K.data("resizable-alsoresize", {
							width: parseInt(K.width(), 10),
							height: parseInt(K.height(), 10),
							left: parseInt(K.css("left"), 10),
							top: parseInt(K.css("top"), 10)
						})
					})
				};
			if (typeof(G.alsoResize) == "object" && !G.alsoResize.parentNode) {
				if (G.alsoResize.length) {
					G.alsoResize = G.alsoResize[0];
					I(G.alsoResize)
				} else {
					D.each(G.alsoResize, function(J) {
						I(J)
					})
				}
			} else {
				I(G.alsoResize)
			}
		},
		resize: function(G, E) {
			var H = D(this).data("resizable"),
				I = H.options,
				L = H.originalSize,
				K = H.originalPosition;
			var J = {
				height: (H.size.height - L.height) || 0,
				width: (H.size.width - L.width) || 0,
				top: (H.position.top - K.top) || 0,
				left: (H.position.left - K.left) || 0
			},
				F = function(M, N) {
					D(M).each(function() {
						var O = D(this),
							R = D(this).data("resizable-alsoresize"),
							P = {},
							Q = N && N.length ? N : O.parents(E.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
						D.each(Q, function(S, T) {
							var U = (R[T] || 0) + (J[T] || 0);
							if (U && U >= 0) {
								P[T] = U || null
							}
						});
						O.css(P)
					})
				};
			if (typeof(I.alsoResize) == "object" && !I.alsoResize.nodeType) {
				D.each(I.alsoResize, function(M, N) {
					F(M, N)
				})
			} else {
				F(I.alsoResize)
			}
		},
		stop: function(F, E) {
			D(this).removeData("resizable-alsoresize")
		}
	});
	D.ui.plugin.add("resizable", "animate", {
		stop: function(I, G) {
			var L = D(this).data("resizable"),
				N = L.options;
			var F = L._proportionallyResizeElements,
				E = F.length && (/textarea/i).test(F[0].nodeName),
				M = E && D.ui.hasScroll(F[0], "left") ? 0 : L.sizeDiff.height,
				O = E ? 0 : L.sizeDiff.width;
			var K = {
				width: (L.size.width - O),
				height: (L.size.height - M)
			},
				H = (parseInt(L.element.css("left"), 10) + (L.position.left - L.originalPosition.left)) || null,
				J = (parseInt(L.element.css("top"), 10) + (L.position.top - L.originalPosition.top)) || null;
			L.element.animate(D.extend(K, J && H ? {
				top: J,
				left: H
			} : {}), {
				duration: N.animateDuration,
				easing: N.animateEasing,
				step: function() {
					var P = {
						width: parseInt(L.element.css("width"), 10),
						height: parseInt(L.element.css("height"), 10),
						top: parseInt(L.element.css("top"), 10),
						left: parseInt(L.element.css("left"), 10)
					};
					if (F && F.length) {
						D(F[0]).css({
							width: P.width,
							height: P.height
						})
					}
					L._updateCache(P);
					L._propagate("resize", I)
				}
			})
		}
	});
	D.ui.plugin.add("resizable", "containment", {
		start: function(J, G) {
			var L = D(this).data("resizable"),
				M = L.options,
				K = L.element;
			var Q = M.containment,
				O = (Q instanceof D) ? Q.get(0) : (/parent/.test(Q)) ? K.parent().get(0) : Q;
			if (!O) {
				return
			}
			L.containerElement = D(O);
			if (/document/.test(Q) || Q == document) {
				L.containerOffset = {
					left: 0,
					top: 0
				};
				L.containerPosition = {
					left: 0,
					top: 0
				};
				L.parentData = {
					element: D(document),
					left: 0,
					top: 0,
					width: D(document).width(),
					height: D(document).height() || document.body.parentNode.scrollHeight
				}
			} else {
				var F = D(O),
					H = [];
				D(["Top", "Right", "Left", "Bottom"]).each(function(S, T) {
					H[S] = C(F.css("padding" + T))
				});
				L.containerOffset = F.offset();
				L.containerPosition = F.position();
				L.containerSize = {
					height: (F.innerHeight() - H[3]),
					width: (F.innerWidth() - H[1])
				};
				var I = L.containerOffset,
					E = L.containerSize.height,
					P = L.containerSize.width,
					N = (D.ui.hasScroll(O, "left") ? O.scrollWidth : P),
					R = (D.ui.hasScroll(O) ? O.scrollHeight : E);
				L.parentData = {
					element: O,
					left: I.left,
					top: I.top,
					width: N,
					height: R
				}
			}
		},
		resize: function(J, H) {
			var N = D(this).data("resizable"),
				O = N.options,
				L = N.containerSize,
				I = N.containerOffset,
				G = N.size,
				S = N.position,
				M = N._aspectRatio || J.shiftKey,
				K = {
					top: 0,
					left: 0
				},
				Q = N.containerElement;
			if (Q[0] != document && (/static/).test(Q.css("position"))) {
				K = I
			}
			if (S.left < (N._helper ? I.left : 0)) {
				N.size.width = N.size.width + (N._helper ? (N.position.left - I.left) : (N.position.left - K.left));
				if (M) {
					N.size.height = N.size.width / N.aspectRatio
				}
				N.position.left = O.helper ? I.left : 0
			}
			if (S.top < (N._helper ? I.top : 0)) {
				N.size.height = N.size.height + (N._helper ? (N.position.top - I.top) : N.position.top);
				if (M) {
					N.size.width = N.size.height * N.aspectRatio
				}
				N.position.top = N._helper ? I.top : 0
			}
			N.offset.left = N.parentData.left + N.position.left;
			N.offset.top = N.parentData.top + N.position.top;
			var P = Math.abs((N._helper ? N.offset.left - K.left : (N.offset.left - K.left)) + N.sizeDiff.width),
				E = Math.abs((N._helper ? N.offset.top - K.top : (N.offset.top - I.top)) + N.sizeDiff.height);
			var F = N.containerElement.get(0) == N.element.parent().get(0),
				R = /relative|absolute/.test(N.containerElement.css("position"));
			if (F && R) {
				P -= N.parentData.left
			}
			if (P + N.size.width >= N.parentData.width) {
				N.size.width = N.parentData.width - P;
				if (M) {
					N.size.height = N.size.width / N.aspectRatio
				}
			}
			if (E + N.size.height >= N.parentData.height) {
				N.size.height = N.parentData.height - E;
				if (M) {
					N.size.width = N.size.height * N.aspectRatio
				}
			}
		},
		stop: function(I, F) {
			var K = D(this).data("resizable"),
				L = K.options,
				P = K.position,
				H = K.containerOffset,
				J = K.containerPosition,
				N = K.containerElement;
			var O = D(K.helper),
				E = O.offset(),
				G = O.outerWidth() - K.sizeDiff.width,
				M = O.outerHeight() - K.sizeDiff.height;
			if (K._helper && !L.animate && (/relative/).test(N.css("position"))) {
				D(this).css({
					left: E.left - J.left - H.left,
					width: G,
					height: M
				})
			}
			if (K._helper && !L.animate && (/static/).test(N.css("position"))) {
				D(this).css({
					left: E.left - J.left - H.left,
					width: G,
					height: M
				})
			}
		}
	});
	D.ui.plugin.add("resizable", "ghost", {
		start: function(H, E) {
			var F = D(this).data("resizable"),
				G = F.options,
				I = F.size;
			F.ghost = F.originalElement.clone();
			F.ghost.css({
				opacity: 0.25,
				display: "block",
				position: "relative",
				height: I.height,
				width: I.width,
				margin: 0,
				left: 0,
				top: 0
			}).addClass("ui-resizable-ghost").addClass(typeof G.ghost == "string" ? G.ghost : "");
			F.ghost.appendTo(F.helper)
		},
		resize: function(H, E) {
			var F = D(this).data("resizable"),
				G = F.options;
			if (F.ghost) {
				F.ghost.css({
					position: "relative",
					height: F.size.height,
					width: F.size.width
				})
			}
		},
		stop: function(H, E) {
			var F = D(this).data("resizable"),
				G = F.options;
			if (F.ghost && F.helper) {
				F.helper.get(0).removeChild(F.ghost.get(0))
			}
		}
	});
	D.ui.plugin.add("resizable", "grid", {
		resize: function(I, F) {
			var J = D(this).data("resizable"),
				K = J.options,
				E = J.size,
				O = J.originalSize,
				M = J.originalPosition,
				N = J.axis,
				L = K._aspectRatio || I.shiftKey;
			K.grid = typeof K.grid == "number" ? [K.grid, K.grid] : K.grid;
			var H = Math.round((E.width - O.width) / (K.grid[0] || 1)) * (K.grid[0] || 1),
				G = Math.round((E.height - O.height) / (K.grid[1] || 1)) * (K.grid[1] || 1);
			if (/^(se|s|e)$/.test(N)) {
				J.size.width = O.width + H;
				J.size.height = O.height + G
			} else {
				if (/^(ne)$/.test(N)) {
					J.size.width = O.width + H;
					J.size.height = O.height + G;
					J.position.top = M.top - G
				} else {
					if (/^(sw)$/.test(N)) {
						J.size.width = O.width + H;
						J.size.height = O.height + G;
						J.position.left = M.left - H
					} else {
						J.size.width = O.width + H;
						J.size.height = O.height + G;
						J.position.top = M.top - G;
						J.position.left = M.left - H
					}
				}
			}
		}
	});
	var C = function(E) {
			return parseInt(E, 10) || 0
		};
	var A = function(E) {
			return !isNaN(parseInt(E, 10))
		}
})(jQuery);
(function(B, A) {
	B.widget("ui.selectable", B.ui.mouse, {
		version: "1.9.2",
		options: {
			appendTo: "body",
			autoRefresh: true,
			distance: 0,
			filter: "*",

			tolerance: "touch"
		},
		_create: function() {
			var C = this;
			this.element.addClass("ui-selectable");
			this.dragged = false;
			var D;
			this.refresh = function() {
				D = B(C.options.filter, C.element[0]);
				D.addClass("ui-selectee");
				D.each(function() {
					var E = B(this);
					var F = E.offset();
					B.data(this, "selectable-item", {
						element: this,
						$element: E,
						left: F.left,
						top: F.top,
						right: F.left + E.outerWidth(),
						bottom: F.top + E.outerHeight(),
						startselected: false,
						selected: E.hasClass("ui-selected"),
						selecting: E.hasClass("ui-selecting"),
						unselecting: E.hasClass("ui-unselecting")
					})
				})
			};
			this.refresh();
			this.selectees = D.addClass("ui-selectee");
			this._mouseInit();
			this.helper = B("<div class='ui-selectable-helper'></div>")
		},
		_destroy: function() {
			this.selectees.removeClass("ui-selectee").removeData("selectable-item");
			this.element.removeClass("ui-selectable ui-selectable-disabled");
			this._mouseDestroy()
		},
		_mouseStart: function(E) {
			var C = this;
			this.opos = [E.pageX, E.pageY];
			if (this.options.disabled) {
				return
			}
			var D = this.options;
			this.selectees = B(D.filter, this.element[0]);
			this._trigger("start", E);
			B(D.appendTo).append(this.helper);
			this.helper.css({
				"left": E.clientX,
				"top": E.clientY,
				"width": 0,
				"height": 0
			});
			if (D.autoRefresh) {
				this.refresh()
			}
			this.selectees.filter(".ui-selected").each(function() {
				var F = B.data(this, "selectable-item");
				F.startselected = true;
				if (!E.metaKey && !E.ctrlKey) {
					F.$element.removeClass("ui-selected");
					F.selected = false;
					F.$element.addClass("ui-unselecting");
					F.unselecting = true;
					C._trigger("unselecting", E, {
						unselecting: F.element
					})
				}
			});
			B(E.target).parents().andSelf().each(function() {
				var F = B.data(this, "selectable-item");
				if (F) {
					var G = (!E.metaKey && !E.ctrlKey) || !F.$element.hasClass("ui-selected");
					F.$element.removeClass(G ? "ui-unselecting" : "ui-selected").addClass(G ? "ui-selecting" : "ui-unselecting");
					F.unselecting = !G;
					F.selecting = G;
					F.selected = G;
					if (G) {
						C._trigger("selecting", E, {
							selecting: F.element
						})
					} else {
						C._trigger("unselecting", E, {
							unselecting: F.element
						})
					}
					return false
				}
			})
		},
		_mouseDrag: function(F) {
			var H = this;
			this.dragged = true;
			if (this.options.disabled) {
				return
			}
			var I = this.options;
			var C = this.opos[0],
				D = this.opos[1],
				E = F.pageX,
				J = F.pageY;
			if (C > E) {
				var G = E;
				E = C;
				C = G
			}
			if (D > J) {
				var G = J;
				J = D;
				D = G
			}
			this.helper.css({
				left: C,
				top: D,
				width: E - C,
				height: J - D
			});
			this.selectees.each(function() {
				var K = B.data(this, "selectable-item");
				if (!K || K.element == H.element[0]) {
					return
				}
				var L = false;
				if (I.tolerance == "touch") {
					L = (!(K.left > E || K.right < C || K.top > J || K.bottom < D))
				} else {
					if (I.tolerance == "fit") {
						L = (K.left > C && K.right < E && K.top > D && K.bottom < J)
					}
				}
				if (L) {
					if (K.selected) {
						K.$element.removeClass("ui-selected");
						K.selected = false
					}
					if (K.unselecting) {
						K.$element.removeClass("ui-unselecting");
						K.unselecting = false
					}
					if (!K.selecting) {
						K.$element.addClass("ui-selecting");
						K.selecting = true;
						H._trigger("selecting", F, {
							selecting: K.element
						})
					}
				} else {
					if (K.selecting) {
						if ((F.metaKey || F.ctrlKey) && K.startselected) {
							K.$element.removeClass("ui-selecting");
							K.selecting = false;
							K.$element.addClass("ui-selected");
							K.selected = true
						} else {
							K.$element.removeClass("ui-selecting");
							K.selecting = false;
							if (K.startselected) {
								K.$element.addClass("ui-unselecting");
								K.unselecting = true
							}
							H._trigger("unselecting", F, {
								unselecting: K.element
							})
						}
					}
					if (K.selected) {
						if (!F.metaKey && !F.ctrlKey && !K.startselected) {
							K.$element.removeClass("ui-selected");
							K.selected = false;
							K.$element.addClass("ui-unselecting");
							K.unselecting = true;
							H._trigger("unselecting", F, {
								unselecting: K.element
							})
						}
					}
				}
			});
			return false
		},
		_mouseStop: function(E) {
			var C = this;
			this.dragged = false;
			var D = this.options;
			B(".ui-unselecting", this.element[0]).each(function() {
				var F = B.data(this, "selectable-item");
				F.$element.removeClass("ui-unselecting");
				F.unselecting = false;
				F.startselected = false;
				C._trigger("unselected", E, {
					unselected: F.element
				})
			});
			B(".ui-selecting", this.element[0]).each(function() {
				var F = B.data(this, "selectable-item");
				F.$element.removeClass("ui-selecting").addClass("ui-selected");
				F.selecting = false;
				F.selected = true;
				F.startselected = true;
				C._trigger("selected", E, {
					selected: F.element
				})
			});
			this._trigger("stop", E);
			this.helper.remove();
			return false
		}
	})
})(jQuery);
(function(B, A) {
	B.widget("ui.sortable", B.ui.mouse, {
		version: "1.9.2",
		widgetEventPrefix: "sort",
		ready: false,
		options: {
			appendTo: "parent",
			axis: false,
			connectWith: false,
			containment: false,
			cursor: "auto",
			cursorAt: false,
			dropOnEmpty: true,
			forcePlaceholderSize: false,
			forceHelperSize: false,
			grid: false,
			handle: false,
			helper: "original",
			items: "> *",
			opacity: false,
			placeholder: false,
			revert: false,
			scroll: true,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			scope: "default",
			tolerance: "intersect",
			zIndex: 1000
		},
		_create: function() {
			var C = this.options;
			this.containerCache = {};
			this.element.addClass("ui-sortable");
			this.refresh();
			this.floating = this.items.length ? C.axis === "x" || (/left|right/).test(this.items[0].item.css("float")) || (/inline|table-cell/).test(this.items[0].item.css("display")) : false;
			this.offset = this.element.offset();
			this._mouseInit();
			this.ready = true
		},
		_destroy: function() {
			this.element.removeClass("ui-sortable ui-sortable-disabled");
			this._mouseDestroy();
			for (var C = this.items.length - 1; C >= 0; C--) {
				this.items[C].item.removeData(this.widgetName + "-item")
			}
			return this
		},
		_setOption: function(C, D) {
			if (C === "disabled") {
				this.options[C] = D;
				this.widget().toggleClass("ui-sortable-disabled", !! D)
			} else {
				B.Widget.prototype._setOption.apply(this, arguments)
			}
		},
		_mouseCapture: function(G, H) {
			var E = this;
			if (this.reverting) {
				return false
			}
			if (this.options.disabled || this.options.type == "static") {
				return false
			}
			this._refreshItems(G);
			var D = null,
				C = B(G.target).parents().each(function() {
					if (B.data(this, E.widgetName + "-item") == E) {
						D = B(this);
						return false
					}
				});
			if (B.data(G.target, E.widgetName + "-item") == E) {
				D = B(G.target)
			}
			if (!D) {
				return false
			}
			if (this.options.handle && !H) {
				var F = false;
				B(this.options.handle, D).find("*").andSelf().each(function() {
					if (this == G.target) {
						F = true
					}
				});
				if (!F) {
					return false
				}
			}
			this.currentItem = D;
			this._removeCurrentsFromItems();
			return true
		},
		_mouseStart: function(F, G, D) {
			var E = this.options;
			this.currentContainer = this;
			this.refreshPositions();
			this.helper = this._createHelper(F);
			this._cacheHelperProportions();
			this._cacheMargins();
			this.scrollParent = this.helper.scrollParent();
			this.offset = this.currentItem.offset();
			this.offset = {
				top: this.offset.top - this.margins.top,
				left: this.offset.left - this.margins.left
			};
			B.extend(this.offset, {
				click: {
					left: F.pageX - this.offset.left,
					top: F.pageY - this.offset.top
				},
				parent: this._getParentOffset(),
				relative: this._getRelativeOffset()
			});
			this.helper.css("position", "absolute");
			this.cssPosition = this.helper.css("position");
			this.originalPosition = this._generatePosition(F);
			this.originalPageX = F.pageX;
			this.originalPageY = F.pageY;
			(E.cursorAt && this._adjustOffsetFromHelper(E.cursorAt));
			this.domPosition = {
				prev: this.currentItem.prev()[0],
				parent: this.currentItem.parent()[0]
			};
			if (this.helper[0] != this.currentItem[0]) {
				this.currentItem.hide()
			}
			this._createPlaceholder();
			if (E.containment) {
				this._setContainment()
			}
			if (E.cursor) {
				if (B("body").css("cursor")) {
					this._storedCursor = B("body").css("cursor")
				}
				B("body").css("cursor", E.cursor)
			}
			if (E.opacity) {
				if (this.helper.css("opacity")) {
					this._storedOpacity = this.helper.css("opacity")
				}
				this.helper.css("opacity", E.opacity)
			}
			if (E.zIndex) {
				if (this.helper.css("zIndex")) {
					this._storedZIndex = this.helper.css("zIndex")
				}
				this.helper.css("zIndex", E.zIndex)
			}
			if (this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML") {
				this.overflowOffset = this.scrollParent.offset()
			}
			this._trigger("start", F, this._uiHash());
			if (!this._preserveHelperProportions) {
				this._cacheHelperProportions()
			}
			if (!D) {
				for (var C = this.containers.length - 1; C >= 0; C--) {
					this.containers[C]._trigger("activate", F, this._uiHash(this))
				}
			}
			if (B.ui.ddmanager) {
				B.ui.ddmanager.current = this
			}
			if (B.ui.ddmanager && !E.dropBehaviour) {
				B.ui.ddmanager.prepareOffsets(this, F)
			}
			this.dragging = true;
			this.helper.addClass("ui-sortable-helper");
			this._mouseDrag(F);
			return true
		},
		_mouseDrag: function(H) {
			this.position = this._generatePosition(H);
			this.positionAbs = this._convertPositionTo("absolute");
			if (!this.lastPositionAbs) {
				this.lastPositionAbs = this.positionAbs
			}
			if (this.options.scroll) {
				var E = this.options,
					G = false;
				if (this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML") {
					if ((this.overflowOffset.top + this.scrollParent[0].offsetHeight) - H.pageY < E.scrollSensitivity) {
						this.scrollParent[0].scrollTop = G = this.scrollParent[0].scrollTop + E.scrollSpeed
					} else {
						if (H.pageY - this.overflowOffset.top < E.scrollSensitivity) {
							this.scrollParent[0].scrollTop = G = this.scrollParent[0].scrollTop - E.scrollSpeed
						}
					}
					if ((this.overflowOffset.left + this.scrollParent[0].offsetWidth) - H.pageX < E.scrollSensitivity) {
						this.scrollParent[0].scrollLeft = G = this.scrollParent[0].scrollLeft + E.scrollSpeed
					} else {
						if (H.pageX - this.overflowOffset.left < E.scrollSensitivity) {
							this.scrollParent[0].scrollLeft = G = this.scrollParent[0].scrollLeft - E.scrollSpeed
						}
					}
				} else {
					if (H.pageY - B(document).scrollTop() < E.scrollSensitivity) {
						G = B(document).scrollTop(B(document).scrollTop() - E.scrollSpeed)
					} else {
						if (B(window).height() - (H.pageY - B(document).scrollTop()) < E.scrollSensitivity) {
							G = B(document).scrollTop(B(document).scrollTop() + E.scrollSpeed)
						}
					}
					if (H.pageX - B(document).scrollLeft() < E.scrollSensitivity) {
						G = B(document).scrollLeft(B(document).scrollLeft() - E.scrollSpeed)
					} else {
						if (B(window).width() - (H.pageX - B(document).scrollLeft()) < E.scrollSensitivity) {
							G = B(document).scrollLeft(B(document).scrollLeft() + E.scrollSpeed)
						}
					}
				}
				if (G !== false && B.ui.ddmanager && !E.dropBehaviour) {
					B.ui.ddmanager.prepareOffsets(this, H)
				}
			}
			this.positionAbs = this._convertPositionTo("absolute");
			if (!this.options.axis || this.options.axis != "y") {
				this.helper[0].style.left = this.position.left + "px"
			}
			if (!this.options.axis || this.options.axis != "x") {
				this.helper[0].style.top = this.position.top + "px"
			}
			for (var C = this.items.length - 1; C >= 0; C--) {
				var F = this.items[C],
					I = F.item[0],
					D = this._intersectsWithPointer(F);
				if (!D) {
					continue
				}
				if (F.instance !== this.currentContainer) {
					continue
				}
				if (I != this.currentItem[0] && this.placeholder[D == 1 ? "next" : "prev"]()[0] != I && !B.contains(this.placeholder[0], I) && (this.options.type == "semi-dynamic" ? !B.contains(this.element[0], I) : true)) {
					this.direction = D == 1 ? "down" : "up";
					if (this.options.tolerance == "pointer" || this._intersectsWithSides(F)) {
						this._rearrange(H, F)
					} else {
						break
					}
					this._trigger("change", H, this._uiHash());
					break
				}
			}
			this._contactContainers(H);
			if (B.ui.ddmanager) {
				B.ui.ddmanager.drag(this, H)
			}
			this._trigger("sort", H, this._uiHash());
			this.lastPositionAbs = this.positionAbs;
			return false
		},
		_mouseStop: function(F, E) {
			if (!F) {
				return
			}
			if (B.ui.ddmanager && !this.options.dropBehaviour) {
				B.ui.ddmanager.drop(this, F)
			}
			if (this.options.revert) {
				var D = this;
				var C = this.placeholder.offset();
				this.reverting = true;
				B(this.helper).animate({
					left: C.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
					top: C.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
				}, parseInt(this.options.revert, 10) || 500, function() {
					D._clear(F)
				})
			} else {
				this._clear(F, E)
			}
			return false
		},
		cancel: function() {
			if (this.dragging) {
				this._mouseUp({
					target: null
				});
				if (this.options.helper == "original") {
					this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
				} else {
					this.currentItem.show()
				}
				for (var C = this.containers.length - 1; C >= 0; C--) {
					this.containers[C]._trigger("deactivate", null, this._uiHash(this));
					if (this.containers[C].containerCache.over) {
						this.containers[C]._trigger("out", null, this._uiHash(this));
						this.containers[C].containerCache.over = 0
					}
				}
			}
			if (this.placeholder) {
				if (this.placeholder[0].parentNode) {
					this.placeholder[0].parentNode.removeChild(this.placeholder[0])
				}
				if (this.options.helper != "original" && this.helper && this.helper[0].parentNode) {
					this.helper.remove()
				}
				B.extend(this, {
					helper: null,
					dragging: false,
					reverting: false,
					_noFinalSort: null
				});
				if (this.domPosition.prev) {
					B(this.domPosition.prev).after(this.currentItem)
				} else {
					B(this.domPosition.parent).prepend(this.currentItem)
				}
			}
			return this
		},
		serialize: function(C) {
			var E = this._getItemsAsjQuery(C && C.connected);
			var D = [];
			C = C || {};
			B(E).each(function() {
				var F = (B(C.item || this).attr(C.attribute || "id") || "").match(C.expression || (/(.+)[-=_](.+)/));
				if (F) {
					D.push((C.key || F[1] + "[]") + "=" + (C.key && C.expression ? F[1] : F[2]))
				}
			});
			if (!D.length && C.key) {
				D.push(C.key + "=")
			}
			return D.join("&")
		},
		toArray: function(C) {
			var E = this._getItemsAsjQuery(C && C.connected);
			var D = [];
			C = C || {};
			E.each(function() {
				D.push(B(C.item || this).attr(C.attribute || "id") || "")
			});
			return D
		},
		_intersectsWith: function(N) {
			var D = this.positionAbs.left,
				G = D + this.helperProportions.width,
				E = this.positionAbs.top,
				H = E + this.helperProportions.height;
			var J = N.left,
				C = J + N.width,
				F = N.top,
				K = F + N.height;
			var L = this.offset.click.top,
				I = this.offset.click.left;
			var M = (E + L) > F && (E + L) < K && (D + I) > J && (D + I) < C;
			if (this.options.tolerance == "pointer" || this.options.forcePointerForContainers || (this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width" : "height"] > N[this.floating ? "width" : "height"])) {
				return M
			} else {
				return (J < D + (this.helperProportions.width / 2) && G - (this.helperProportions.width / 2) < C && F < E + (this.helperProportions.height / 2) && H - (this.helperProportions.height / 2) < K)
			}
		},
		_intersectsWithPointer: function(F) {
			var C = (this.options.axis === "x") || B.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, F.top, F.height),
				H = (this.options.axis === "y") || B.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, F.left, F.width),
				D = C && H,
				E = this._getDragVerticalDirection(),
				G = this._getDragHorizontalDirection();
			if (!D) {
				return false
			}
			return this.floating ? (((G && G == "right") || E == "down") ? 2 : 1) : (E && (E == "down" ? 2 : 1))
		},
		_intersectsWithSides: function(D) {
			var C = B.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, D.top + (D.height / 2), D.height),
				E = B.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, D.left + (D.width / 2), D.width),
				G = this._getDragVerticalDirection(),
				F = this._getDragHorizontalDirection();
			if (this.floating && F) {
				return ((F == "right" && E) || (F == "left" && !E))
			} else {
				return G && ((G == "down" && C) || (G == "up" && !C))
			}
		},
		_getDragVerticalDirection: function() {
			var C = this.positionAbs.top - this.lastPositionAbs.top;
			return C != 0 && (C > 0 ? "down" : "up")
		},
		_getDragHorizontalDirection: function() {
			var C = this.positionAbs.left - this.lastPositionAbs.left;
			return C != 0 && (C > 0 ? "right" : "left")
		},
		refresh: function(C) {
			this._refreshItems(C);
			this.refreshPositions();
			return this
		},
		_connectWith: function() {
			var C = this.options;
			return C.connectWith.constructor == String ? [C.connectWith] : C.connectWith
		},
		_getItemsAsjQuery: function(D) {
			var I = [];
			var G = [];
			var J = this._connectWith();
			if (J && D) {
				for (var H = J.length - 1; H >= 0; H--) {
					var C = B(J[H]);
					for (var F = C.length - 1; F >= 0; F--) {
						var E = B.data(C[F], this.widgetName);
						if (E && E != this && !E.options.disabled) {
							G.push([B.isFunction(E.options.items) ? E.options.items.call(E.element) : B(E.options.items, E.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), E])
						}
					}
				}
			}
			G.push([B.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
				options: this.options,
				item: this.currentItem
			}) : B(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
			for (var H = G.length - 1; H >= 0; H--) {
				G[H][0].each(function() {
					I.push(this)
				})
			}
			return B(I)
		},
		_removeCurrentsFromItems: function() {
			var C = this.currentItem.find(":data(" + this.widgetName + "-item)");
			this.items = B.grep(this.items, function(D) {
				for (var E = 0; E < C.length; E++) {
					if (C[E] == D.item[0]) {
						return false
					}
				}
				return true
			})
		},
		_refreshItems: function(M) {
			this.items = [];
			this.containers = [this];
			var L = this.items;
			var G = [
				[B.isFunction(this.options.items) ? this.options.items.call(this.element[0], M, {
					item: this.currentItem
				}) : B(this.options.items, this.element), this]
			];
			var N = this._connectWith();
			if (N && this.ready) {
				for (var H = N.length - 1; H >= 0; H--) {
					var C = B(N[H]);
					for (var F = C.length - 1; F >= 0; F--) {
						var D = B.data(C[F], this.widgetName);
						if (D && D != this && !D.options.disabled) {
							G.push([B.isFunction(D.options.items) ? D.options.items.call(D.element[0], M, {
								item: this.currentItem
							}) : B(D.options.items, D.element), D]);
							this.containers.push(D)
						}
					}
				}
			}
			for (var H = G.length - 1; H >= 0; H--) {
				var K = G[H][1];
				var I = G[H][0];
				for (var F = 0, E = I.length; F < E; F++) {
					var J = B(I[F]);
					J.data(this.widgetName + "-item", K);
					L.push({
						item: J,
						instance: K,
						width: 0,
						height: 0,
						left: 0,
						top: 0
					})
				}
			}
		},
		refreshPositions: function(E) {
			if (this.offsetParent && this.helper) {
				this.offset.parent = this._getParentOffset()
			}
			for (var C = this.items.length - 1; C >= 0; C--) {
				var F = this.items[C];
				if (F.instance != this.currentContainer && this.currentContainer && F.item[0] != this.currentItem[0]) {
					continue
				}
				var G = this.options.toleranceElement ? B(this.options.toleranceElement, F.item) : F.item;
				if (!E) {
					F.width = G.outerWidth();
					F.height = G.outerHeight()
				}
				var D = G.offset();
				F.left = D.left;
				F.top = D.top
			}
			if (this.options.custom && this.options.custom.refreshContainers) {
				this.options.custom.refreshContainers.call(this)
			} else {
				for (var C = this.containers.length - 1; C >= 0; C--) {
					var D = this.containers[C].element.offset();
					this.containers[C].containerCache.left = D.left;
					this.containers[C].containerCache.top = D.top;
					this.containers[C].containerCache.width = this.containers[C].element.outerWidth();
					this.containers[C].containerCache.height = this.containers[C].element.outerHeight()
				}
			}
			return this
		},
		_createPlaceholder: function(D) {
			D = D || this;
			var E = D.options;
			if (!E.placeholder || E.placeholder.constructor == String) {
				var C = E.placeholder;
				E.placeholder = {
					element: function() {
						var F = B(document.createElement(D.currentItem[0].nodeName)).addClass(C || D.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
						if (!C) {
							F.style.visibility = "hidden"
						}
						return F
					},
					update: function(G, F) {
						if (C && !E.forcePlaceholderSize) {
							return
						}
						if (!F.height()) {
							F.height(D.currentItem.innerHeight() - parseInt(D.currentItem.css("paddingTop") || 0, 10) - parseInt(D.currentItem.css("paddingBottom") || 0, 10))
						}
						if (!F.width()) {
							F.width(D.currentItem.innerWidth() - parseInt(D.currentItem.css("paddingLeft") || 0, 10) - parseInt(D.currentItem.css("paddingRight") || 0, 10))
						}
					}
				}
			}
			D.placeholder = B(E.placeholder.element.call(D.element, D.currentItem));
			D.currentItem.after(D.placeholder);
			E.placeholder.update(D, D.placeholder)
		},
		_contactContainers: function(G) {
			var L = null,
				F = null;
			for (var H = this.containers.length - 1; H >= 0; H--) {
				if (B.contains(this.currentItem[0], this.containers[H].element[0])) {
					continue
				}
				if (this._intersectsWith(this.containers[H].containerCache)) {
					if (L && B.contains(this.containers[H].element[0], L.element[0])) {
						continue
					}
					L = this.containers[H];
					F = H
				} else {
					if (this.containers[H].containerCache.over) {
						this.containers[H]._trigger("out", G, this._uiHash(this));
						this.containers[H].containerCache.over = 0
					}
				}
			}
			if (!L) {
				return
			}
			if (this.containers.length === 1) {
				this.containers[F]._trigger("over", G, this._uiHash(this));
				this.containers[F].containerCache.over = 1
			} else {
				var K = 10000;
				var I = null;
				var J = this.containers[F].floating ? "left" : "top";
				var E = this.containers[F].floating ? "width" : "height";
				var D = this.positionAbs[J] + this.offset.click[J];
				for (var N = this.items.length - 1; N >= 0; N--) {
					if (!B.contains(this.containers[F].element[0], this.items[N].item[0])) {
						continue
					}
					if (this.items[N].item[0] == this.currentItem[0]) {
						continue
					}
					var C = this.items[N].item.offset()[J];
					var M = false;
					if (Math.abs(C - D) > Math.abs(C + this.items[N][E] - D)) {
						M = true;
						C += this.items[N][E]
					}
					if (Math.abs(C - D) < K) {
						K = Math.abs(C - D);
						I = this.items[N];
						this.direction = M ? "up" : "down"
					}
				}
				if (!I && !this.options.dropOnEmpty) {
					return
				}
				this.currentContainer = this.containers[F];
				I ? this._rearrange(G, I, null, true) : this._rearrange(G, null, this.containers[F].element, true);
				this._trigger("change", G, this._uiHash());
				this.containers[F]._trigger("change", G, this._uiHash(this));
				this.options.placeholder.update(this.currentContainer, this.placeholder);
				this.containers[F]._trigger("over", G, this._uiHash(this));
				this.containers[F].containerCache.over = 1
			}
		},
		_createHelper: function(D) {
			var C = this.options;
			var E = B.isFunction(C.helper) ? B(C.helper.apply(this.element[0], [D, this.currentItem])) : (C.helper == "clone" ? this.currentItem.clone() : this.currentItem);
			if (!E.parents("body").length) {
				B(C.appendTo != "parent" ? C.appendTo : this.currentItem[0].parentNode)[0].appendChild(E[0])
			}
			if (E[0] == this.currentItem[0]) {
				this._storedCSS = {
					width: this.currentItem[0].style.width,
					height: this.currentItem[0].style.height,
					position: this.currentItem.css("position"),
					top: this.currentItem.css("top"),
					left: this.currentItem.css("left")
				}
			}
			if (E[0].style.width == "" || C.forceHelperSize) {
				E.width(this.currentItem.width())
			}
			if (E[0].style.height == "" || C.forceHelperSize) {
				E.height(this.currentItem.height())
			}
			return E
		},
		_adjustOffsetFromHelper: function(C) {
			if (typeof C == "string") {
				C = C.split(" ")
			}
			if (B.isArray(C)) {
				C = {
					left: +C[0],
					top: +C[1] || 0
				}
			}
			if ("left" in C) {
				this.offset.click.left = C.left + this.margins.left
			}
			if ("right" in C) {
				this.offset.click.left = this.helperProportions.width - C.right + this.margins.left
			}
			if ("top" in C) {
				this.offset.click.top = C.top + this.margins.top
			}
			if ("bottom" in C) {
				this.offset.click.top = this.helperProportions.height - C.bottom + this.margins.top
			}
		},
		_getParentOffset: function() {
			this.offsetParent = this.helper.offsetParent();
			var C = this.offsetParent.offset();
			if (this.cssPosition == "absolute" && this.scrollParent[0] != document && B.contains(this.scrollParent[0], this.offsetParent[0])) {
				C.left += this.scrollParent.scrollLeft();
				C.top += this.scrollParent.scrollTop()
			}
			if ((this.offsetParent[0] == document.body) || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && B.ui.ie)) {
				C = {
					top: 0,
					left: 0
				}
			}
			return {
				top: C.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: C.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function() {
			if (this.cssPosition == "relative") {
				var C = this.currentItem.position();
				return {
					top: C.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
					left: C.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
				}
			} else {
				return {
					top: 0,
					left: 0
				}
			}
		},
		_cacheMargins: function() {
			this.margins = {
				left: (parseInt(this.currentItem.css("marginLeft"), 10) || 0),
				top: (parseInt(this.currentItem.css("marginTop"), 10) || 0)
			}
		},
		_cacheHelperProportions: function() {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function() {
			var D = this.options;
			if (D.containment == "parent") {
				D.containment = this.helper[0].parentNode
			}
			if (D.containment == "document" || D.containment == "window") {
				this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, B(D.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (B(D.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]
			}
			if (!(/^(document|window|parent)$/).test(D.containment)) {
				var E = B(D.containment)[0];
				var C = B(D.containment).offset();
				var F = (B(E).css("overflow") != "hidden");
				this.containment = [C.left + (parseInt(B(E).css("borderLeftWidth"), 10) || 0) + (parseInt(B(E).css("paddingLeft"), 10) || 0) - this.margins.left, C.top + (parseInt(B(E).css("borderTopWidth"), 10) || 0) + (parseInt(B(E).css("paddingTop"), 10) || 0) - this.margins.top, C.left + (F ? Math.max(E.scrollWidth, E.offsetWidth) : E.offsetWidth) - (parseInt(B(E).css("borderLeftWidth"), 10) || 0) - (parseInt(B(E).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, C.top + (F ? Math.max(E.scrollHeight, E.offsetHeight) : E.offsetHeight) - (parseInt(B(E).css("borderTopWidth"), 10) || 0) - (parseInt(B(E).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
			}
		},
		_convertPositionTo: function(C, E) {
			if (!E) {
				E = this.position
			}
			var H = C == "absolute" ? 1 : -1;
			var D = this.options,
				G = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && B.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
				F = (/(html|body)/i).test(G[0].tagName);
			return {
				top: (E.top + this.offset.relative.top * H + this.offset.parent.top * H - ((this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : (F ? 0 : G.scrollTop())) * H)),
				left: (E.left + this.offset.relative.left * H + this.offset.parent.left * H - ((this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : F ? 0 : G.scrollLeft()) * H))
			}
		},
		_generatePosition: function(F) {
			var I = this.options,
				J = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && B.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
				C = (/(html|body)/i).test(J[0].tagName);
			if (this.cssPosition == "relative" && !(this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0])) {
				this.offset.relative = this._getRelativeOffset()
			}
			var H = F.pageX;
			var G = F.pageY;
			if (this.originalPosition) {
				if (this.containment) {
					if (F.pageX - this.offset.click.left < this.containment[0]) {
						H = this.containment[0] + this.offset.click.left
					}
					if (F.pageY - this.offset.click.top < this.containment[1]) {
						G = this.containment[1] + this.offset.click.top
					}
					if (F.pageX - this.offset.click.left > this.containment[2]) {
						H = this.containment[2] + this.offset.click.left
					}
					if (F.pageY - this.offset.click.top > this.containment[3]) {
						G = this.containment[3] + this.offset.click.top
					}
				}
				if (I.grid) {
					var D = this.originalPageY + Math.round((G - this.originalPageY) / I.grid[1]) * I.grid[1];
					G = this.containment ? (!(D - this.offset.click.top < this.containment[1] || D - this.offset.click.top > this.containment[3]) ? D : (!(D - this.offset.click.top < this.containment[1]) ? D - I.grid[1] : D + I.grid[1])) : D;
					var E = this.originalPageX + Math.round((H - this.originalPageX) / I.grid[0]) * I.grid[0];
					H = this.containment ? (!(E - this.offset.click.left < this.containment[0] || E - this.offset.click.left > this.containment[2]) ? E : (!(E - this.offset.click.left < this.containment[0]) ? E - I.grid[0] : E + I.grid[0])) : E
				}
			}
			return {
				top: (G - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ((this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : (C ? 0 : J.scrollTop())))),
				left: (H - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ((this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : C ? 0 : J.scrollLeft())))
			}
		},
		_rearrange: function(F, D, G, C) {
			G ? G[0].appendChild(this.placeholder[0]) : D.item[0].parentNode.insertBefore(this.placeholder[0], (this.direction == "down" ? D.item[0] : D.item[0].nextSibling));
			this.counter = this.counter ? ++this.counter : 1;
			var E = this.counter;
			this._delay(function() {
				if (E == this.counter) {
					this.refreshPositions(!C)
				}
			})
		},
		_clear: function(E, D) {
			this.reverting = false;
			var F = [];
			if (!this._noFinalSort && this.currentItem.parent().length) {
				this.placeholder.before(this.currentItem)
			}
			this._noFinalSort = null;
			if (this.helper[0] == this.currentItem[0]) {
				for (var C in this._storedCSS) {
					if (this._storedCSS[C] == "auto" || this._storedCSS[C] == "static") {
						this._storedCSS[C] = ""
					}
				}
				this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
			} else {
				this.currentItem.show()
			}
			if (this.fromOutside && !D) {
				F.push(function(G) {
					this._trigger("receive", G, this._uiHash(this.fromOutside))
				})
			}
			if ((this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !D) {
				F.push(function(G) {
					this._trigger("update", G, this._uiHash())
				})
			}
			if (this !== this.currentContainer) {
				if (!D) {
					F.push(function(G) {
						this._trigger("remove", G, this._uiHash())
					});
					F.push((function(G) {
						return function(H) {
							G._trigger("receive", H, this._uiHash(this))
						}
					}).call(this, this.currentContainer));
					F.push((function(G) {
						return function(H) {
							G._trigger("update", H, this._uiHash(this))
						}
					}).call(this, this.currentContainer))
				}
			}
			for (var C = this.containers.length - 1; C >= 0; C--) {
				if (!D) {
					F.push((function(G) {
						return function(H) {
							G._trigger("deactivate", H, this._uiHash(this))
						}
					}).call(this, this.containers[C]))
				}
				if (this.containers[C].containerCache.over) {
					F.push((function(G) {
						return function(H) {
							G._trigger("out", H, this._uiHash(this))
						}
					}).call(this, this.containers[C]));
					this.containers[C].containerCache.over = 0
				}
			}
			if (this._storedCursor) {
				B("body").css("cursor", this._storedCursor)
			}
			if (this._storedOpacity) {
				this.helper.css("opacity", this._storedOpacity)
			}
			if (this._storedZIndex) {
				this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex)
			}
			this.dragging = false;
			if (this.cancelHelperRemoval) {
				if (!D) {
					this._trigger("beforeStop", E, this._uiHash());
					for (var C = 0; C < F.length; C++) {
						F[C].call(this, E)
					}
					this._trigger("stop", E, this._uiHash())
				}
				this.fromOutside = false;
				return false
			}
			if (!D) {
				this._trigger("beforeStop", E, this._uiHash())
			}
			this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
			if (this.helper[0] != this.currentItem[0]) {
				this.helper.remove()
			}
			this.helper = null;
			if (!D) {
				for (var C = 0; C < F.length; C++) {
					F[C].call(this, E)
				}
				this._trigger("stop", E, this._uiHash())
			}
			this.fromOutside = false;
			return true
		},
		_trigger: function() {
			if (B.Widget.prototype._trigger.apply(this, arguments) === false) {
				this.cancel()
			}
		},
		_uiHash: function(C) {
			var D = C || this;
			return {
				helper: D.helper,
				placeholder: D.placeholder || B([]),
				position: D.position,
				originalPosition: D.originalPosition,
				offset: D.positionAbs,
				item: D.currentItem,
				sender: C ? C.element : null
			}
		}
	})
})(jQuery);
(jQuery.effects || (function(D, C) {
	var B = D.uiBackCompat !== false,
		A = "ui-effects-";
	D.effects = {
		effect: {}
	};
	/* jQuery Color Animations v2.0.0
	 * http://jquery.com/
	 * Copyright 2012 jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 *
	 * Date: Mon Aug 13 13:41:02 2012 -0500
	 */
	(function(R, E) {
		var L = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),
			M = /^([\-+])=\s*(\d+\.?\d*)/,
			I = [{
				re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
				parse: function(T) {
					return [T[1], T[2], T[3], T[4]]
				}
			}, {
				re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
				parse: function(T) {
					return [T[1] * 2.55, T[2] * 2.55, T[3] * 2.55, T[4]]
				}
			}, {
				re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
				parse: function(T) {
					return [parseInt(T[1], 16), parseInt(T[2], 16), parseInt(T[3], 16)]
				}
			}, {
				re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
				parse: function(T) {
					return [parseInt(T[1] + T[1], 16), parseInt(T[2] + T[2], 16), parseInt(T[3] + T[3], 16)]
				}
			}, {
				re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
				space: "hsla",
				parse: function(T) {
					return [T[1], T[2] / 100, T[3] / 100, T[4]]
				}
			}],
			J = R.Color = function(W, U, T, V) {
				return new R.Color.fn.parse(W, U, T, V)
			},
			K = {
				rgba: {
					props: {
						red: {
							idx: 0,
							type: "byte"
						},
						green: {
							idx: 1,
							type: "byte"
						},
						blue: {
							idx: 2,
							type: "byte"
						}
					}
				},
				hsla: {
					props: {
						hue: {
							idx: 0,
							type: "degrees"
						},
						saturation: {
							idx: 1,
							type: "percent"
						},
						lightness: {
							idx: 2,
							type: "percent"
						}
					}
				}
			},
			O = {
				"byte": {
					floor: true,
					max: 255
				},
				"percent": {
					max: 1
				},
				"degrees": {
					mod: 360,
					floor: true
				}
			},
			G = J.support = {},
			H = R("<p>")[0],
			P, S = R.each;
		H.style.cssText = "background-color:rgba(1,1,1,.5)";
		G.rgba = H.style.backgroundColor.indexOf("rgba") > -1;
		S(K, function(T, U) {
			U.cache = "_" + T;
			U.props.alpha = {
				idx: 3,
				type: "percent",
				def: 1
			}
		});

		function Q(W, U, V) {
			var T = O[U.type] || {};
			if (W == null) {
				return (V || !U.def) ? null : U.def
			}
			W = T.floor ? ~~W : parseFloat(W);
			if (isNaN(W)) {
				return U.def
			}
			if (T.mod) {
				return (W + T.mod) % T.mod
			}
			return 0 > W ? 0 : T.max < W ? T.max : W
		}
		function F(U) {
			var T = J(),
				V = T._rgba = [];
			U = U.toLowerCase();
			S(I, function(W, b) {
				var Z, X = b.re.exec(U),
					a = X && b.parse(X),
					Y = b.space || "rgba";
				if (a) {
					Z = T[Y](a);
					T[K[Y].cache] = Z[K[Y].cache];
					V = T._rgba = Z._rgba;
					return false
				}
			});
			if (V.length) {
				if (V.join() === "0,0,0,0") {
					R.extend(V, P.transparent)
				}
				return T
			}
			return P[U]
		}
		J.fn = R.extend(J.prototype, {
			parse: function(U, W, V, Y) {
				if (U === E) {
					this._rgba = [null, null, null, null];
					return this
				}
				if (U.jquery || U.nodeType) {
					U = R(U).css(W);
					W = E
				}
				var X = this,
					T = R.type(U),
					Z = this._rgba = [];
				if (W !== E) {
					U = [U, W, V, Y];
					T = "array"
				}
				if (T === "string") {
					return this.parse(F(U) || P._default)
				}
				if (T === "array") {
					S(K.rgba.props, function(a, b) {
						Z[b.idx] = Q(U[b.idx], b)
					});
					return this
				}
				if (T === "object") {
					if (U instanceof J) {
						S(K, function(a, b) {
							if (U[b.cache]) {
								X[b.cache] = U[b.cache].slice()
							}
						})
					} else {
						S(K, function(a, b) {
							var c = b.cache;
							S(b.props, function(d, e) {
								if (!X[c] && b.to) {
									if (d === "alpha" || U[d] == null) {
										return
									}
									X[c] = b.to(X._rgba)
								}
								X[c][e.idx] = Q(U[d], e, true)
							});
							if (X[c] && D.inArray(null, X[c].slice(0, 3)) < 0) {
								X[c][3] = 1;
								if (b.from) {
									X._rgba = b.from(X[c])
								}
							}
						})
					}
					return this
				}
			},
			is: function(U) {
				var T = J(U),
					W = true,
					V = this;
				S(K, function(a, Y) {
					var X, Z = T[Y.cache];
					if (Z) {
						X = V[Y.cache] || Y.to && Y.to(V._rgba) || [];
						S(Y.props, function(c, b) {
							if (Z[b.idx] != null) {
								W = (Z[b.idx] === X[b.idx]);
								return W
							}
						})
					}
					return W
				});
				return W
			},
			_space: function() {
				var U = [],
					T = this;
				S(K, function(V, W) {
					if (T[W.cache]) {
						U.push(V)
					}
				});
				return U.pop()
			},
			transition: function(Z, Y) {
				var W = J(Z),
					a = W._space(),
					V = K[a],
					X = this.alpha() === 0 ? J("transparent") : this,
					U = X[V.cache] || V.to(X._rgba),
					T = U.slice();
				W = W[V.cache];
				S(V.props, function(c, f) {
					var g = f.idx,
						e = U[g],
						d = W[g],
						b = O[f.type] || {};
					if (d === null) {
						return
					}
					if (e === null) {
						T[g] = d
					} else {
						if (b.mod) {
							if (d - e > b.mod / 2) {
								e += b.mod
							} else {
								if (e - d > b.mod / 2) {
									e -= b.mod
								}
							}
						}
						T[g] = Q((d - e) * Y + e, f)
					}
				});
				return this[a](T)
			},
			blend: function(V) {
				if (this._rgba[3] === 1) {
					return this
				}
				var U = this._rgba.slice(),
					W = U.pop(),
					T = J(V)._rgba;
				return J(R.map(U, function(Y, X) {
					return (1 - W) * T[X] + W * Y
				}))
			},
			toRgbaString: function() {
				var T = "rgba(",
					U = R.map(this._rgba, function(W, V) {
						return W == null ? (V > 2 ? 1 : 0) : W
					});
				if (U[3] === 1) {
					U.pop();
					T = "rgb("
				}
				return T + U.join() + ")"
			},
			toHslaString: function() {
				var T = "hsla(",
					U = R.map(this.hsla(), function(W, V) {
						if (W == null) {
							W = V > 2 ? 1 : 0
						}
						if (V && V < 3) {
							W = Math.round(W * 100) + "%"
						}
						return W
					});
				if (U[3] === 1) {
					U.pop();
					T = "hsl("
				}
				return T + U.join() + ")"
			},
			toHexString: function(T) {
				var V = this._rgba.slice(),
					U = V.pop();
				if (T) {
					V.push(~~ (U * 255))
				}
				return "#" + R.map(V, function(W) {
					W = (W || 0).toString(16);
					return W.length === 1 ? "0" + W : W
				}).join("")
			},
			toString: function() {
				return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
			}
		});
		J.fn.parse.prototype = J.fn;

		function N(U, V, T) {
			T = (T + 1) % 1;
			if (T * 6 < 1) {
				return U + (V - U) * T * 6
			}
			if (T * 2 < 1) {
				return V
			}
			if (T * 3 < 2) {
				return U + (V - U) * ((2 / 3) - T) * 6
			}
			return U
		}
		K.hsla.to = function(d) {
			if (d[0] == null || d[1] == null || d[2] == null) {
				return [null, null, null, d[3]]
			}
			var T = d[0] / 255,
				f = d[1] / 255,
				i = d[2] / 255,
				e = d[3],
				W = Math.max(T, f, i),
				V = Math.min(T, f, i),
				X = W - V,
				c = W + V,
				Z = c * 0.5,
				Y, U;
			if (V === W) {
				Y = 0
			} else {
				if (T === W) {
					Y = (60 * (f - i) / X) + 360
				} else {
					if (f === W) {
						Y = (60 * (i - T) / X) + 120
					} else {
						Y = (60 * (T - f) / X) + 240
					}
				}
			}
			if (Z === 0 || Z === 1) {
				U = Z
			} else {
				if (Z <= 0.5) {
					U = X / c
				} else {
					U = X / (2 - c)
				}
			}
			return [Math.round(Y) % 360, U, Z, e == null ? 1 : e]
		};
		K.hsla.from = function(Z) {
			if (Z[0] == null || Z[1] == null || Z[2] == null) {
				return [null, null, null, Z[3]]
			}
			var T = Z[0] / 360,
				U = Z[1],
				W = Z[2],
				Y = Z[3],
				X = W <= 0.5 ? W * (1 + U) : W + U - W * U,
				V = 2 * W - X;
			return [Math.round(N(V, X, T + (1 / 3)) * 255), Math.round(N(V, X, T) * 255), Math.round(N(V, X, T - (1 / 3)) * 255), Y]
		};
		S(K, function(T, X) {
			var Y = X.props,
				U = X.cache,
				V = X.to,
				W = X.from;
			J.fn[T] = function(c) {
				if (V && !this[U]) {
					this[U] = V(this._rgba)
				}
				if (c === E) {
					return this[U].slice()
				}
				var b, Z = R.type(c),
					a = (Z === "array" || Z === "object") ? c : arguments,
					d = this[U].slice();
				S(Y, function(e, f) {
					var g = a[Z === "object" ? e : f.idx];
					if (g == null) {
						g = d[f.idx]
					}
					d[f.idx] = Q(g, f)
				});
				if (W) {
					b = J(W(d));
					b[U] = d;
					return b
				} else {
					return J(d)
				}
			};
			S(Y, function(Z, a) {
				if (J.fn[Z]) {
					return
				}
				J.fn[Z] = function(f) {
					var d = R.type(f),
						e = (Z === "alpha" ? (this._hsla ? "hsla" : "rgba") : T),
						g = this[e](),
						b = g[a.idx],
						c;
					if (d === "undefined") {
						return b
					}
					if (d === "function") {
						f = f.call(this, b);
						d = R.type(f)
					}
					if (f == null && a.empty) {
						return this
					}
					if (d === "string") {
						c = M.exec(f);
						if (c) {
							f = b + parseFloat(c[2]) * (c[1] === "+" ? 1 : -1)
						}
					}
					g[a.idx] = f;
					return this[e](g)
				}
			})
		});
		S(L, function(T, U) {
			R.cssHooks[U] = {
				set: function(X, Z) {
					var Y, b, V = "";
					if (R.type(Z) !== "string" || (Y = F(Z))) {
						Z = J(Y || Z);
						if (!G.rgba && Z._rgba[3] !== 1) {
							b = U === "backgroundColor" ? X.parentNode : X;
							while ((V === "" || V === "transparent") && b && b.style) {
								try {
									V = R.css(b, "backgroundColor");
									b = b.parentNode
								} catch (W) {}
							}
							Z = Z.blend(V && V !== "transparent" ? V : "_default")
						}
						Z = Z.toRgbaString()
					}
					try {
						X.style[U] = Z
					} catch (a) {}
				}
			};
			R.fx.step[U] = function(V) {
				if (!V.colorInit) {
					V.start = J(V.elem, U);
					V.end = J(V.end);
					V.colorInit = true
				}
				R.cssHooks[U].set(V.elem, V.start.transition(V.end, V.pos))
			}
		});
		R.cssHooks.borderColor = {
			expand: function(T) {
				var U = {};
				S(["Top", "Right", "Bottom", "Left"], function(V, W) {
					U["border" + W + "Color"] = T
				});
				return U
			}
		};
		P = R.Color.names = {
			aqua: "#00ffff",
			black: "#000000",
			blue: "#0000ff",
			fuchsia: "#ff00ff",
			gray: "#808080",
			green: "#008000",
			lime: "#00ff00",
			maroon: "#800000",
			navy: "#000080",
			olive: "#808000",
			purple: "#800080",
			red: "#ff0000",
			silver: "#c0c0c0",
			teal: "#008080",
			white: "#ffffff",
			yellow: "#ffff00",
			transparent: [null, null, null, 0],
			_default: "#ffffff"
		}
	})(jQuery);
	(function() {
		var H = ["add", "remove", "toggle"],
			F = {
				border: 1,
				borderBottom: 1,
				borderColor: 1,
				borderLeft: 1,
				borderRight: 1,
				borderTop: 1,
				borderWidth: 1,
				margin: 1,
				padding: 1
			};
		D.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(J, I) {
			D.fx.step[I] = function(K) {
				if (K.end !== "none" && !K.setAttr || K.pos === 1 && !K.setAttr) {
					jQuery.style(K.elem, I, K.end);
					K.setAttr = true
				}
			}
		});

		function E() {
			var J = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle,
				L = {},
				I, K;
			if (J && J.length && J[0] && J[J[0]]) {
				K = J.length;
				while (K--) {
					I = J[K];
					if (typeof J[I] === "string") {
						L[D.camelCase(I)] = J[I]
					}
				}
			} else {
				for (I in J) {
					if (typeof J[I] === "string") {
						L[I] = J[I]
					}
				}
			}
			return L
		}
		function G(I, L) {
			var M = {},
				J, K;
			for (J in L) {
				K = L[J];
				if (I[J] !== K) {
					if (!F[J]) {
						if (D.fx.step[J] || !isNaN(parseFloat(K))) {
							M[J] = K
						}
					}
				}
			}
			return M
		}
		D.effects.animateClass = function(M, L, K, I) {
			var J = D.speed(L, K, I);
			return this.queue(function() {
				var P = D(this),
					O = P.attr("class") || "",
					Q, N = J.children ? P.find("*").andSelf() : P;
				N = N.map(function() {
					var R = D(this);
					return {
						el: R,
						start: E.call(this)
					}
				});
				Q = function() {
					D.each(H, function(S, R) {
						if (M[R]) {
							P[R + "Class"](M[R])
						}
					})
				};
				Q();
				N = N.map(function() {
					this.end = E.call(this.el[0]);
					this.diff = G(this.start, this.end);
					return this
				});
				P.attr("class", O);
				N = N.map(function() {
					var T = this,
						S = D.Deferred(),
						R = jQuery.extend({}, J, {
							queue: false,
							complete: function() {
								S.resolve(T)
							}
						});
					this.el.animate(this.diff, R);
					return S.promise()
				});
				D.when.apply(D, N.get()).done(function() {
					Q();
					D.each(arguments, function() {
						var R = this.el;
						D.each(this.diff, function(S) {
							R.css(S, "")
						})
					});
					J.complete.call(P[0])
				})
			})
		};
		D.fn.extend({
			_addClass: D.fn.addClass,
			addClass: function(L, J, K, I) {
				return J ? D.effects.animateClass.call(this, {
					add: L
				}, J, K, I) : this._addClass(L)
			},
			_removeClass: D.fn.removeClass,
			removeClass: function(L, J, K, I) {
				return J ? D.effects.animateClass.call(this, {
					remove: L
				}, J, K, I) : this._removeClass(L)
			},
			_toggleClass: D.fn.toggleClass,
			toggleClass: function(L, M, J, K, I) {
				if (typeof M === "boolean" || M === C) {
					if (!J) {
						return this._toggleClass(L, M)
					} else {
						return D.effects.animateClass.call(this, (M ? {
							add: L
						} : {
							remove: L
						}), J, K, I)
					}
				} else {
					return D.effects.animateClass.call(this, {
						toggle: L
					}, M, J, K)
				}
			},
			switchClass: function(I, M, J, K, L) {
				return D.effects.animateClass.call(this, {
					add: M,
					remove: I
				}, J, K, L)
			}
		})
	})();
	(function() {
		D.extend(D.effects, {
			version: "1.9.2",
			save: function(H, I) {
				for (var G = 0; G < I.length; G++) {
					if (I[G] !== null) {
						H.data(A + I[G], H[0].style[I[G]])
					}
				}
			},
			restore: function(I, J) {
				var H, G;
				for (G = 0; G < J.length; G++) {
					if (J[G] !== null) {
						H = I.data(A + J[G]);
						if (H === C) {
							H = ""
						}
						I.css(J[G], H)
					}
				}
			},
			setMode: function(G, H) {
				if (H === "toggle") {
					H = G.is(":hidden") ? "show" : "hide"
				}
				return H
			},
			getBaseline: function(J, G) {
				var I, H;
				switch (J[0]) {
				case "top":
					I = 0;
					break;
				case "middle":
					I = 0.5;
					break;
				case "bottom":
					I = 1;
					break;
				default:
					I = J[0] / G.height
				}
				switch (J[1]) {
				case "left":
					H = 0;
					break;
				case "center":
					H = 0.5;
					break;
				case "right":
					H = 1;
					break;
				default:
					H = J[1] / G.width
				}
				return {
					x: H,
					y: I
				}
			},
			createWrapper: function(L) {
				if (L.parent().is(".ui-effects-wrapper")) {
					return L.parent()
				}
				var K = {
					width: L.outerWidth(true),
					height: L.outerHeight(true),
					"float": L.css("float")
				},
					H = D("<div></div>").addClass("ui-effects-wrapper").css({
						fontSize: "100%",
						background: "transparent",
						border: "none",
						margin: 0,
						padding: 0
					}),
					G = {
						width: L.width(),
						height: L.height()
					},
					I = document.activeElement;
				try {
					I.id
				} catch (J) {
					I = document.body
				}
				L.wrap(H);
				if (L[0] === I || D.contains(L[0], I)) {
					D(I).focus()
				}
				H = L.parent();
				if (L.css("position") === "static") {
					H.css({
						position: "relative"
					});
					L.css({
						position: "relative"
					})
				} else {
					D.extend(K, {
						position: L.css("position"),
						zIndex: L.css("z-index")
					});
					D.each(["top", "left", "bottom", "right"], function(M, N) {
						K[N] = L.css(N);
						if (isNaN(parseInt(K[N], 10))) {
							K[N] = "auto"
						}
					});
					L.css({
						position: "relative",
						top: 0,
						left: 0,
						right: "auto",
						bottom: "auto"
					})
				}
				L.css(G);
				return H.css(K).show()
			},
			removeWrapper: function(H) {
				var G = document.activeElement;
				if (H.parent().is(".ui-effects-wrapper")) {
					H.parent().replaceWith(H);
					if (H[0] === G || D.contains(H[0], G)) {
						D(G).focus()
					}
				}
				return H
			},
			setTransition: function(J, H, G, I) {
				I = I || {};
				D.each(H, function(K, M) {
					var L = J.cssUnit(M);
					if (L[0] > 0) {
						I[M] = L[0] * G + L[1]
					}
				});
				return I
			}
		});

		function F(G, I, H, J) {
			if (D.isPlainObject(G)) {
				I = G;
				G = G.effect
			}
			G = {
				effect: G
			};
			if (I == null) {
				I = {}
			}
			if (D.isFunction(I)) {
				J = I;
				H = null;
				I = {}
			}
			if (typeof I === "number" || D.fx.speeds[I]) {
				J = H;
				H = I;
				I = {}
			}
			if (D.isFunction(H)) {
				J = H;
				H = null
			}
			if (I) {
				D.extend(G, I)
			}
			H = H || I.duration;
			G.duration = D.fx.off ? 0 : typeof H === "number" ? H : H in D.fx.speeds ? D.fx.speeds[H] : D.fx.speeds._default;
			G.complete = J || I.complete;
			return G
		}
		function E(G) {
			if (!G || typeof G === "number" || D.fx.speeds[G]) {
				return true
			}
			if (typeof G === "string" && !D.effects.effect[G]) {
				if (B && D.effects[G]) {
					return false
				}
				return true
			}
			return false
		}
		D.fn.extend({
			effect: function() {
				var L = F.apply(this, arguments),
					G = L.mode,
					I = L.queue,
					H = D.effects.effect[L.effect],
					J = !H && B && D.effects[L.effect];
				if (D.fx.off || !(H || J)) {
					if (G) {
						return this[G](L.duration, L.complete)
					} else {
						return this.each(function() {
							if (L.complete) {
								L.complete.call(this)
							}
						})
					}
				}
				function K(P) {
					var Q = D(this),
						M = L.complete,
						O = L.mode;

					function N() {
						if (D.isFunction(M)) {
							M.call(Q[0])
						}
						if (D.isFunction(P)) {
							P()
						}
					}
					if (Q.is(":hidden") ? O === "hide" : O === "show") {
						N()
					} else {
						H.call(Q[0], L, N)
					}
				}
				if (H) {
					return I === false ? this.each(K) : this.queue(I || "fx", K)
				} else {
					return J.call(this, {
						options: L,
						duration: L.duration,
						callback: L.complete,
						mode: L.mode
					})
				}
			},
			_show: D.fn.show,
			show: function(G) {
				if (E(G)) {
					return this._show.apply(this, arguments)
				} else {
					var H = F.apply(this, arguments);
					H.mode = "show";
					return this.effect.call(this, H)
				}
			},
			_hide: D.fn.hide,
			hide: function(G) {
				if (E(G)) {
					return this._hide.apply(this, arguments)
				} else {
					var H = F.apply(this, arguments);
					H.mode = "hide";
					return this.effect.call(this, H)
				}
			},
			__toggle: D.fn.toggle,
			toggle: function(G) {
				if (E(G) || typeof G === "boolean" || D.isFunction(G)) {
					return this.__toggle.apply(this, arguments)
				} else {
					var H = F.apply(this, arguments);
					H.mode = "toggle";
					return this.effect.call(this, H)
				}
			},
			cssUnit: function(G) {
				var H = this.css(G),
					I = [];
				D.each(["em", "px", "%", "pt"], function(J, K) {
					if (H.indexOf(K) > 0) {
						I = [parseFloat(H), K]
					}
				});
				return I
			}
		})
	})();
	(function() {
		var E = {};
		D.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(F, G) {
			E[G] = function(H) {
				return Math.pow(H, F + 2)
			}
		});
		D.extend(E, {
			Sine: function(F) {
				return 1 - Math.cos(F * Math.PI / 2)
			},
			Circ: function(F) {
				return 1 - Math.sqrt(1 - F * F)
			},
			Elastic: function(F) {
				return F === 0 || F === 1 ? F : -Math.pow(2, 8 * (F - 1)) * Math.sin(((F - 1) * 80 - 7.5) * Math.PI / 15)
			},
			Back: function(F) {
				return F * F * (3 * F - 2)
			},
			Bounce: function(G) {
				var H, F = 4;
				while (G < ((H = Math.pow(2, --F)) - 1) / 11) {}
				return 1 / Math.pow(4, 3 - F) - 7.5625 * Math.pow((H * 3 - 2) / 22 - G, 2)
			}
		});
		D.each(E, function(G, F) {
			D.easing["easeIn" + G] = F;
			D.easing["easeOut" + G] = function(H) {
				return 1 - F(1 - H)
			};
			D.easing["easeInOut" + G] = function(H) {
				return H < 0.5 ? F(H * 2) / 2 : 1 - F(H * -2 + 2) / 2
			}
		})
	})()
})(jQuery));
(function(E, B) {
	var A = 0,
		D = {},
		C = {};
	D.height = D.paddingTop = D.paddingBottom = D.borderTopWidth = D.borderBottomWidth = "hide";
	C.height = C.paddingTop = C.paddingBottom = C.borderTopWidth = C.borderBottomWidth = "show";
	E.widget("ui.accordion", {
		version: "1.9.2",
		options: {
			active: 0,
			animate: {},
			collapsible: false,
			event: "click",
			header: "> li > :first-child,> :not(li):even",
			heightStyle: "auto",
			icons: {
				activeHeader: "ui-icon-triangle-1-s",
				header: "ui-icon-triangle-1-e"
			},
			activate: null,
			beforeActivate: null
		},
		_create: function() {
			var G = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++A),
				F = this.options;
			this.prevShow = this.prevHide = E();
			this.element.addClass("ui-accordion ui-widget ui-helper-reset");
			this.headers = this.element.find(F.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all");
			this._hoverable(this.headers);
			this._focusable(this.headers);
			this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide();
			if (!F.collapsible && (F.active === false || F.active == null)) {
				F.active = 0
			}
			if (F.active < 0) {
				F.active += this.headers.length
			}
			this.active = this._findActive(F.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top");
			this.active.next().addClass("ui-accordion-content-active").show();
			this._createIcons();
			this.refresh();
			this.element.attr("role", "tablist");
			this.headers.attr("role", "tab").each(function(I) {
				var K = E(this),
					L = K.attr("id"),
					H = K.next(),
					J = H.attr("id");
				if (!L) {
					L = G + "-header-" + I;
					K.attr("id", L)
				}
				if (!J) {
					J = G + "-panel-" + I;
					H.attr("id", J)
				}
				K.attr("aria-controls", J);
				H.attr("aria-labelledby", L)
			}).next().attr("role", "tabpanel");
			this.headers.not(this.active).attr({
				"aria-selected": "false",
				tabIndex: -1
			}).next().attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			}).hide();
			if (!this.active.length) {
				this.headers.eq(0).attr("tabIndex", 0)
			} else {
				this.active.attr({
					"aria-selected": "true",
					tabIndex: 0
				}).next().attr({
					"aria-expanded": "true",
					"aria-hidden": "false"
				})
			}
			this._on(this.headers, {
				keydown: "_keydown"
			});
			this._on(this.headers.next(), {
				keydown: "_panelKeyDown"
			});
			this._setupEvents(F.event)
		},
		_getCreateEventData: function() {
			return {
				header: this.active,
				content: !this.active.length ? E() : this.active.next()
			}
		},
		_createIcons: function() {
			var F = this.options.icons;
			if (F) {
				E("<span>").addClass("ui-accordion-header-icon ui-icon " + F.header).prependTo(this.headers);
				this.active.children(".ui-accordion-header-icon").removeClass(F.header).addClass(F.activeHeader);
				this.headers.addClass("ui-accordion-icons")
			}
		},
		_destroyIcons: function() {
			this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
		},
		_destroy: function() {
			var F;
			this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
			this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
				if (/^ui-accordion/.test(this.id)) {
					this.removeAttribute("id")
				}
			});
			this._destroyIcons();
			F = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
				if (/^ui-accordion/.test(this.id)) {
					this.removeAttribute("id")
				}
			});
			if (this.options.heightStyle !== "content") {
				F.css("height", "")
			}
		},
		_setOption: function(F, G) {
			if (F === "active") {
				this._activate(G);
				return
			}
			if (F === "event") {
				if (this.options.event) {
					this._off(this.headers, this.options.event)
				}
				this._setupEvents(G)
			}
			this._super(F, G);
			if (F === "collapsible" && !G && this.options.active === false) {
				this._activate(0)
			}
			if (F === "icons") {
				this._destroyIcons();
				if (G) {
					this._createIcons()
				}
			}
			if (F === "disabled") {
				this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !! G)
			}
		},
		_keydown: function(H) {
			if (H.altKey || H.ctrlKey) {
				return
			}
			var G = E.ui.keyCode,
				F = this.headers.length,
				I = this.headers.index(H.target),
				J = false;
			switch (H.keyCode) {
			case G.RIGHT:
			case G.DOWN:
				J = this.headers[(I + 1) % F];
				break;
			case G.LEFT:
			case G.UP:
				J = this.headers[(I - 1 + F) % F];
				break;
			case G.SPACE:
			case G.ENTER:
				this._eventHandler(H);
				break;
			case G.HOME:
				J = this.headers[0];
				break;
			case G.END:
				J = this.headers[F - 1];
				break
			}
			if (J) {
				E(H.target).attr("tabIndex", -1);
				E(J).attr("tabIndex", 0);
				J.focus();
				H.preventDefault()
			}
		},
		_panelKeyDown: function(F) {
			if (F.keyCode === E.ui.keyCode.UP && F.ctrlKey) {
				E(F.currentTarget).prev().focus()
			}
		},
		refresh: function() {
			var H, F, I = this.options.heightStyle,
				G = this.element.parent();
			if (I === "fill") {
				if (!E.support.minHeight) {
					F = G.css("overflow");
					G.css("overflow", "hidden")
				}
				H = G.height();
				this.element.siblings(":visible").each(function() {
					var K = E(this),
						J = K.css("position");
					if (J === "absolute" || J === "fixed") {
						return
					}
					H -= K.outerHeight(true)
				});
				if (F) {
					G.css("overflow", F)
				}
				this.headers.each(function() {
					H -= E(this).outerHeight(true)
				});
				this.headers.next().each(function() {
					E(this).height(Math.max(0, H - E(this).innerHeight() + E(this).height()))
				}).css("overflow", "auto")
			} else {
				if (I === "auto") {
					H = 0;
					this.headers.next().each(function() {
						H = Math.max(H, E(this).css("height", "").height())
					}).height(H)
				}
			}
		},
		_activate: function(G) {
			var F = this._findActive(G)[0];
			if (F === this.active[0]) {
				return
			}
			F = F || this.active[0];
			this._eventHandler({
				target: F,
				currentTarget: F,
				preventDefault: E.noop
			})
		},
		_findActive: function(F) {
			return typeof F === "number" ? this.headers.eq(F) : E()
		},
		_setupEvents: function(F) {
			var G = {};
			if (!F) {
				return
			}
			E.each(F.split(" "), function(I, H) {
				G[H] = "_eventHandler"
			});
			this._on(this.headers, G)
		},
		_eventHandler: function(I) {
			var K = this.options,
				L = this.active,
				F = E(I.currentTarget),
				N = F[0] === L[0],
				H = N && K.collapsible,
				M = H ? E() : F.next(),
				G = L.next(),
				J = {
					oldHeader: L,
					oldPanel: G,
					newHeader: H ? E() : F,
					newPanel: M
				};
			I.preventDefault();
			if ((N && !K.collapsible) || (this._trigger("beforeActivate", I, J) === false)) {
				return
			}
			K.active = H ? false : this.headers.index(F);
			this.active = N ? E() : F;
			this._toggle(J);
			L.removeClass("ui-accordion-header-active ui-state-active");
			if (K.icons) {
				L.children(".ui-accordion-header-icon").removeClass(K.icons.activeHeader).addClass(K.icons.header)
			}
			if (!N) {
				F.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");
				if (K.icons) {
					F.children(".ui-accordion-header-icon").removeClass(K.icons.header).addClass(K.icons.activeHeader)
				}
				F.next().addClass("ui-accordion-content-active")
			}
		},
		_toggle: function(H) {
			var G = H.newPanel,
				F = this.prevShow.length ? this.prevShow : H.oldPanel;
			this.prevShow.add(this.prevHide).stop(true, true);
			this.prevShow = G;
			this.prevHide = F;
			if (this.options.animate) {
				this._animate(G, F, H)
			} else {
				F.hide();
				G.show();
				this._toggleComplete(H)
			}
			F.attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			});
			F.prev().attr("aria-selected", "false");
			if (G.length && F.length) {
				F.prev().attr("tabIndex", -1)
			} else {
				if (G.length) {
					this.headers.filter(function() {
						return E(this).attr("tabIndex") === 0
					}).attr("tabIndex", -1)
				}
			}
			G.attr({
				"aria-expanded": "true",
				"aria-hidden": "false"
			}).prev().attr({
				"aria-selected": "true",
				tabIndex: 0
			})
		},
		_animate: function(O, H, F) {
			var M, N, J, K = this,
				P = 0,
				G = O.length && (!H.length || (O.index() < H.index())),
				I = this.options.animate || {},
				L = G && I.down || I,
				Q = function() {
					K._toggleComplete(F)
				};
			if (typeof L === "number") {
				J = L
			}
			if (typeof L === "string") {
				N = L
			}
			N = N || L.easing || I.easing;
			J = J || L.duration || I.duration;
			if (!H.length) {
				return O.animate(C, J, N, Q)
			}
			if (!O.length) {
				return H.animate(D, J, N, Q)
			}
			M = O.show().outerHeight();
			H.animate(D, {
				duration: J,
				easing: N,
				step: function(S, R) {
					R.now = Math.round(S)
				}
			});
			O.hide().animate(C, {
				duration: J,
				easing: N,
				complete: Q,
				step: function(S, R) {
					R.now = Math.round(S);
					if (R.prop !== "height") {
						P += R.now
					} else {
						if (K.options.heightStyle !== "content") {
							R.now = Math.round(M - H.outerHeight() - P);
							P = 0
						}
					}
				}
			})
		},
		_toggleComplete: function(G) {
			var F = G.oldPanel;
			F.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
			if (F.length) {
				F.parent()[0].className = F.parent()[0].className
			}
			this._trigger("activate", null, G)
		}
	});
	if (E.uiBackCompat !== false) {
		(function(H, G) {
			H.extend(G.options, {
				navigation: false,
				navigationFilter: function() {
					return this.href.toLowerCase() === location.href.toLowerCase()
				}
			});
			var F = G._create;
			G._create = function() {
				if (this.options.navigation) {
					var J = this,
						I = this.element.find(this.options.header),
						L = I.next(),
						K = I.add(L).find("a").filter(this.options.navigationFilter)[0];
					if (K) {
						I.add(L).each(function(M) {
							if (H.contains(this, K)) {
								J.options.active = Math.floor(M / 2);
								return false
							}
						})
					}
				}
				F.call(this)
			}
		}(jQuery, jQuery.ui.accordion.prototype));
		(function(I, H) {
			I.extend(H.options, {
				heightStyle: null,
				autoHeight: true,
				clearStyle: false,
				fillSpace: false
			});
			var F = H._create,
				G = H._setOption;
			I.extend(H, {
				_create: function() {
					this.options.heightStyle = this.options.heightStyle || this._mergeHeightStyle();
					F.call(this)
				},
				_setOption: function(J) {
					if (J === "autoHeight" || J === "clearStyle" || J === "fillSpace") {
						this.options.heightStyle = this._mergeHeightStyle()
					}
					G.apply(this, arguments)
				},
				_mergeHeightStyle: function() {
					var J = this.options;
					if (J.fillSpace) {
						return "fill"
					}
					if (J.clearStyle) {
						return "content"
					}
					if (J.autoHeight) {
						return "auto"
					}
				}
			})
		}(jQuery, jQuery.ui.accordion.prototype));
		(function(H, G) {
			H.extend(G.options.icons, {
				activeHeader: null,
				headerSelected: "ui-icon-triangle-1-s"
			});
			var F = G._createIcons;
			G._createIcons = function() {
				if (this.options.icons) {
					this.options.icons.activeHeader = this.options.icons.activeHeader || this.options.icons.headerSelected
				}
				F.call(this)
			}
		}(jQuery, jQuery.ui.accordion.prototype));
		(function(H, G) {
			G.activate = G._activate;
			var F = G._findActive;
			G._findActive = function(I) {
				if (I === -1) {
					I = false
				}
				if (I && typeof I !== "number") {
					I = this.headers.index(this.headers.filter(I));
					if (I === -1) {
						I = false
					}
				}
				return F.call(this, I)
			}
		}(jQuery, jQuery.ui.accordion.prototype));
		jQuery.ui.accordion.prototype.resize = jQuery.ui.accordion.prototype.refresh;
		(function(H, G) {
			H.extend(G.options, {
				change: null,
				changestart: null
			});
			var F = G._trigger;
			G._trigger = function(I, J, L) {
				var K = F.apply(this, arguments);
				if (!K) {
					return false
				}
				if (I === "beforeActivate") {
					K = F.call(this, "changestart", J, {
						oldHeader: L.oldHeader,
						oldContent: L.oldPanel,
						newHeader: L.newHeader,
						newContent: L.newPanel
					})
				} else {
					if (I === "activate") {
						K = F.call(this, "change", J, {
							oldHeader: L.oldHeader,
							oldContent: L.oldPanel,
							newHeader: L.newHeader,
							newContent: L.newPanel
						})
					}
				}
				return K
			}
		}(jQuery, jQuery.ui.accordion.prototype));
		(function(H, G) {
			H.extend(G.options, {
				animate: null,
				animated: "slide"
			});
			var F = G._create;
			G._create = function() {
				var I = this.options;
				if (I.animate === null) {
					if (!I.animated) {
						I.animate = false
					} else {
						if (I.animated === "slide") {
							I.animate = 300
						} else {
							if (I.animated === "bounceslide") {
								I.animate = {
									duration: 200,
									down: {
										easing: "easeOutBounce",
										duration: 1000
									}
								}
							} else {
								I.animate = I.animated
							}
						}
					}
				}
				F.call(this)
			}
		}(jQuery, jQuery.ui.accordion.prototype))
	}
})(jQuery);
(function(C, B) {
	var A = 0;
	C.widget("ui.autocomplete", {
		version: "1.9.2",
		defaultElement: "<input>",
		options: {
			appendTo: "body",
			autoFocus: false,
			delay: 300,
			minLength: 1,
			position: {
				my: "left top",
				at: "left bottom",
				collision: "none"
			},
			source: null,
			change: null,
			close: null,
			focus: null,
			open: null,
			response: null,
			search: null,
			select: null
		},
		pending: 0,
		_create: function() {
			var F, E, D;
			this.isMultiLine = this._isMultiLine();
			this.valueMethod = this.element[this.element.is("input,textarea") ? "val" : "text"];
			this.isNewMenu = true;
			this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off");
			this._on(this.element, {
				keydown: function(H) {
					if (this.element.prop("readOnly")) {
						F = true;
						D = true;
						E = true;
						return
					}
					F = false;
					D = false;
					E = false;
					var G = C.ui.keyCode;
					switch (H.keyCode) {
					case G.PAGE_UP:
						F = true;
						this._move("previousPage", H);
						break;
					case G.PAGE_DOWN:
						F = true;
						this._move("nextPage", H);
						break;
					case G.UP:
						F = true;
						this._keyEvent("previous", H);
						break;
					case G.DOWN:
						F = true;
						this._keyEvent("next", H);
						break;
					case G.ENTER:
					case G.NUMPAD_ENTER:
						if (this.menu.active) {
							F = true;
							H.preventDefault();
							this.menu.select(H)
						}
						break;
					case G.TAB:
						if (this.menu.active) {
							this.menu.select(H)
						}
						break;
					case G.ESCAPE:
						if (this.menu.element.is(":visible")) {
							this._value(this.term);
							this.close(H);
							H.preventDefault()
						}
						break;
					default:
						E = true;
						this._searchTimeout(H);
						break
					}
				},
				keypress: function(H) {
					if (F) {
						F = false;
						H.preventDefault();
						return
					}
					if (E) {
						return
					}
					var G = C.ui.keyCode;
					switch (H.keyCode) {
					case G.PAGE_UP:
						this._move("previousPage", H);
						break;
					case G.PAGE_DOWN:
						this._move("nextPage", H);
						break;
					case G.UP:
						this._keyEvent("previous", H);
						break;
					case G.DOWN:
						this._keyEvent("next", H);
						break
					}
				},
				input: function(G) {
					if (D) {
						D = false;
						G.preventDefault();
						return
					}
					this._searchTimeout(G)
				},
				focus: function() {
					this.selectedItem = null;
					this.previous = this._value()
				},
				blur: function(G) {
					if (this.cancelBlur) {
						delete this.cancelBlur;
						return
					}
					clearTimeout(this.searching);
					this.close(G);
					this._change(G)
				}
			});
			this._initSource();
			this.menu = C("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo || "body")[0]).menu({
				input: C(),
				role: null
			}).zIndex(this.element.zIndex() + 1).hide().data("menu");
			this._on(this.menu.element, {
				mousedown: function(H) {
					H.preventDefault();
					this.cancelBlur = true;
					this._delay(function() {
						delete this.cancelBlur
					});
					var G = this.menu.element[0];
					if (!C(H.target).closest(".ui-menu-item").length) {
						this._delay(function() {
							var I = this;
							this.document.one("mousedown", function(J) {
								if (J.target !== I.element[0] && J.target !== G && !C.contains(G, J.target)) {
									I.close()
								}
							})
						})
					}
				},
				menufocus: function(I, G) {
					if (this.isNewMenu) {
						this.isNewMenu = false;
						if (I.originalEvent && /^mouse/.test(I.originalEvent.type)) {
							this.menu.blur();
							this.document.one("mousemove", function() {
								C(I.target).trigger(I.originalEvent)
							});
							return
						}
					}
					var H = G.item.data("ui-autocomplete-item") || G.item.data("item.autocomplete");
					if (false !== this._trigger("focus", I, {
						item: H
					})) {
						if (I.originalEvent && /^key/.test(I.originalEvent.type)) {
							this._value(H.value)
						}
					} else {
						this.liveRegion.text(H.value)
					}
				},
				menuselect: function(I, G) {
					var H = G.item.data("ui-autocomplete-item") || G.item.data("item.autocomplete"),
						J = this.previous;
					if (this.element[0] !== this.document[0].activeElement) {
						this.element.focus();
						this.previous = J;
						this._delay(function() {
							this.previous = J;
							this.selectedItem = H
						})
					}
					if (false !== this._trigger("select", I, {
						item: H
					})) {
						this._value(H.value)
					}
					this.term = this._value();
					this.close(I);
					this.selectedItem = H
				}
			});
			this.liveRegion = C("<span>", {
				role: "status",
				"aria-live": "polite"
			}).addClass("ui-helper-hidden-accessible").insertAfter(this.element);
			if (C.fn.bgiframe) {
				this.menu.element.bgiframe()
			}
			this._on(this.window, {
				beforeunload: function() {
					this.element.removeAttr("autocomplete")
				}
			})
		},
		_destroy: function() {
			clearTimeout(this.searching);
			this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
			this.menu.element.remove();
			this.liveRegion.remove()
		},
		_setOption: function(D, E) {
			this._super(D, E);
			if (D === "source") {
				this._initSource()
			}
			if (D === "appendTo") {
				this.menu.element.appendTo(this.document.find(E || "body")[0])
			}
			if (D === "disabled" && E && this.xhr) {
				this.xhr.abort()
			}
		},
		_isMultiLine: function() {
			if (this.element.is("textarea")) {
				return true
			}
			if (this.element.is("input")) {
				return false
			}
			return this.element.prop("isContentEditable")
		},
		_initSource: function() {
			var D, E, F = this;
			if (C.isArray(this.options.source)) {
				D = this.options.source;
				this.source = function(G, H) {
					H(C.ui.autocomplete.filter(D, G.term))
				}
			} else {
				if (typeof this.options.source === "string") {
					E = this.options.source;
					this.source = function(G, H) {
						if (F.xhr) {
							F.xhr.abort()
						}
						F.xhr = C.ajax({
							url: E,
							data: G,
							dataType: "json",
							success: function(I) {
								H(I)
							},
							error: function() {
								H([])
							}
						})
					}
				} else {
					this.source = this.options.source
				}
			}
		},
		_searchTimeout: function(D) {
			clearTimeout(this.searching);
			this.searching = this._delay(function() {
				if (this.term !== this._value()) {
					this.selectedItem = null;
					this.search(null, D)
				}
			}, this.options.delay)
		},
		search: function(E, D) {
			E = E != null ? E : this._value();
			this.term = this._value();
			if (E.length < this.options.minLength) {
				return this.close(D)
			}
			if (this._trigger("search", D) === false) {
				return
			}
			return this._search(E)
		},
		_search: function(D) {
			this.pending++;
			this.element.addClass("ui-autocomplete-loading");
			this.cancelSearch = false;
			this.source({
				term: D
			}, this._response())
		},
		_response: function() {
			var D = this,
				E = ++A;
			return function(F) {
				if (E === A) {
					D.__response(F)
				}
				D.pending--;
				if (!D.pending) {
					D.element.removeClass("ui-autocomplete-loading")
				}
			}
		},
		__response: function(D) {
			if (D) {
				D = this._normalize(D)
			}
			this._trigger("response", null, {
				content: D
			});
			if (!this.options.disabled && D && D.length && !this.cancelSearch) {
				this._suggest(D);
				this._trigger("open")
			} else {
				this._close()
			}
		},
		close: function(D) {
			this.cancelSearch = true;
			this._close(D)
		},
		_close: function(D) {
			if (this.menu.element.is(":visible")) {
				this.menu.element.hide();
				this.menu.blur();
				this.isNewMenu = true;
				this._trigger("close", D)
			}
		},
		_change: function(D) {
			if (this.previous !== this._value()) {
				this._trigger("change", D, {
					item: this.selectedItem
				})
			}
		},
		_normalize: function(D) {
			if (D.length && D[0].label && D[0].value) {
				return D
			}
			return C.map(D, function(E) {
				if (typeof E === "string") {
					return {
						label: E,
						value: E
					}
				}
				return C.extend({
					label: E.label || E.value,
					value: E.value || E.label
				}, E)
			})
		},
		_suggest: function(E) {
			var D = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
			this._renderMenu(D, E);
			this.menu.refresh();
			D.show();
			this._resizeMenu();
			D.position(C.extend({
				of: this.element
			}, this.options.position));
			if (this.options.autoFocus) {
				this.menu.next()
			}
		},
		_resizeMenu: function() {
			var D = this.menu.element;
			D.outerWidth(Math.max(D.width("").outerWidth() + 1, this.element.outerWidth()))
		},
		_renderMenu: function(E, F) {
			var D = this;
			C.each(F, function(H, G) {
				D._renderItemData(E, G)
			})
		},
		_renderItemData: function(E, D) {
			return this._renderItem(E, D).data("ui-autocomplete-item", D)
		},
		_renderItem: function(E, D) {
			return C("<li>").append(C("<a>").text(D.label)).appendTo(E)
		},
		_move: function(E, D) {
			if (!this.menu.element.is(":visible")) {
				this.search(null, D);
				return
			}
			if (this.menu.isFirstItem() && /^previous/.test(E) || this.menu.isLastItem() && /^next/.test(E)) {
				this._value(this.term);
				this.menu.blur();
				return
			}
			this.menu[E](D)
		},
		widget: function() {
			return this.menu.element
		},
		_value: function() {
			return this.valueMethod.apply(this.element, arguments)
		},
		_keyEvent: function(D, E) {
			if (!this.isMultiLine || this.menu.element.is(":visible")) {
				this._move(D, E);
				E.preventDefault()
			}
		}
	});
	C.extend(C.ui.autocomplete, {
		escapeRegex: function(D) {
			return D.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
		},
		filter: function(D, F) {
			var E = new RegExp(C.ui.autocomplete.escapeRegex(F), "i");
			return C.grep(D, function(G) {
				return E.test(G.label || G.value || G)
			})
		}
	});
	C.widget("ui.autocomplete", C.ui.autocomplete, {
		options: {
			messages: {
				noResults: "No search results.",
				results: function(D) {
					return D + (D > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
				}
			}
		},
		__response: function(D) {
			var E;
			this._superApply(arguments);
			if (this.options.disabled || this.cancelSearch) {
				return
			}
			if (D && D.length) {
				E = this.options.messages.results(D.length)
			} else {
				E = this.options.messages.noResults
			}
			this.liveRegion.text(E)
		}
	})
}(jQuery));
(function(I, A) {
	var D, E, B, H, C = "ui-button ui-widget ui-state-default ui-corner-all",
		F = "ui-state-hover ui-state-active ",
		J = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
		K = function() {
			var L = I(this).find(":ui-button");
			setTimeout(function() {
				L.button("refresh")
			}, 1)
		},
		G = function(M) {
			var N = M.name,
				L = M.form,
				O = I([]);
			if (N) {
				if (L) {
					O = I(L).find("[name='" + N + "']")
				} else {
					O = I("[name='" + N + "']", M.ownerDocument).filter(function() {
						return !this.form
					})
				}
			}
			return O
		};
	I.widget("ui.button", {
		version: "1.9.2",
		defaultElement: "<button>",
		options: {
			disabled: null,
			text: true,
			label: null,
			icons: {
				primary: null,
				secondary: null
			}
		},
		_create: function() {
			this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, K);
			if (typeof this.options.disabled !== "boolean") {
				this.options.disabled = !! this.element.prop("disabled")
			} else {
				this.element.prop("disabled", this.options.disabled)
			}
			this._determineButtonType();
			this.hasTitle = !! this.buttonElement.attr("title");
			var M = this,
				O = this.options,
				N = this.type === "checkbox" || this.type === "radio",
				P = !N ? "ui-state-active" : "",
				L = "ui-state-focus";
			if (O.label === null) {
				O.label = (this.type === "input" ? this.buttonElement.val() : this.buttonElement.html())
			}
			this._hoverable(this.buttonElement);
			this.buttonElement.addClass(C).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
				if (O.disabled) {
					return
				}
				if (this === D) {
					I(this).addClass("ui-state-active")
				}
			}).bind("mouseleave" + this.eventNamespace, function() {
				if (O.disabled) {
					return
				}
				I(this).removeClass(P)
			}).bind("click" + this.eventNamespace, function(Q) {
				if (O.disabled) {
					Q.preventDefault();
					Q.stopImmediatePropagation()
				}
			});
			this.element.bind("focus" + this.eventNamespace, function() {
				M.buttonElement.addClass(L)
			}).bind("blur" + this.eventNamespace, function() {
				M.buttonElement.removeClass(L)
			});
			if (N) {
				this.element.bind("change" + this.eventNamespace, function() {
					if (H) {
						return
					}
					M.refresh()
				});
				this.buttonElement.bind("mousedown" + this.eventNamespace, function(Q) {
					if (O.disabled) {
						return
					}
					H = false;
					E = Q.pageX;
					B = Q.pageY
				}).bind("mouseup" + this.eventNamespace, function(Q) {
					if (O.disabled) {
						return
					}
					if (E !== Q.pageX || B !== Q.pageY) {
						H = true
					}
				})
			}
			if (this.type === "checkbox") {
				this.buttonElement.bind("click" + this.eventNamespace, function() {
					if (O.disabled || H) {
						return false
					}
					I(this).toggleClass("ui-state-active");
					M.buttonElement.attr("aria-pressed", M.element[0].checked)
				})
			} else {
				if (this.type === "radio") {
					this.buttonElement.bind("click" + this.eventNamespace, function() {
						if (O.disabled || H) {
							return false
						}
						I(this).addClass("ui-state-active");
						M.buttonElement.attr("aria-pressed", "true");
						var Q = M.element[0];
						G(Q).not(Q).map(function() {
							return I(this).button("widget")[0]
						}).removeClass("ui-state-active").attr("aria-pressed", "false")
					})
				} else {
					this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
						if (O.disabled) {
							return false
						}
						I(this).addClass("ui-state-active");
						D = this;
						M.document.one("mouseup", function() {
							D = null
						})
					}).bind("mouseup" + this.eventNamespace, function() {
						if (O.disabled) {
							return false
						}
						I(this).removeClass("ui-state-active")
					}).bind("keydown" + this.eventNamespace, function(Q) {
						if (O.disabled) {
							return false
						}
						if (Q.keyCode === I.ui.keyCode.SPACE || Q.keyCode === I.ui.keyCode.ENTER) {
							I(this).addClass("ui-state-active")
						}
					}).bind("keyup" + this.eventNamespace, function() {
						I(this).removeClass("ui-state-active")
					});
					if (this.buttonElement.is("a")) {
						this.buttonElement.keyup(function(Q) {
							if (Q.keyCode === I.ui.keyCode.SPACE) {
								I(this).click()
							}
						})
					}
				}
			}
			this._setOption("disabled", O.disabled);
			this._resetButton()
		},
		_determineButtonType: function() {
			var M, L, N;
			if (this.element.is("[type=checkbox]")) {
				this.type = "checkbox"
			} else {
				if (this.element.is("[type=radio]")) {
					this.type = "radio"
				} else {
					if (this.element.is("input")) {
						this.type = "input"
					} else {
						this.type = "button"
					}
				}
			}
			if (this.type === "checkbox" || this.type === "radio") {
				M = this.element.parents().last();
				L = "label[for='" + this.element.attr("id") + "']";
				this.buttonElement = M.find(L);
				if (!this.buttonElement.length) {
					M = M.length ? M.siblings() : this.element.siblings();
					this.buttonElement = M.filter(L);
					if (!this.buttonElement.length) {
						this.buttonElement = M.find(L)
					}
				}
				this.element.addClass("ui-helper-hidden-accessible");
				N = this.element.is(":checked");
				if (N) {
					this.buttonElement.addClass("ui-state-active")
				}
				this.buttonElement.prop("aria-pressed", N)
			} else {
				this.buttonElement = this.element
			}
		},
		widget: function() {
			return this.buttonElement
		},
		_destroy: function() {
			this.element.removeClass("ui-helper-hidden-accessible");
			this.buttonElement.removeClass(C + " " + F + " " + J).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
			if (!this.hasTitle) {
				this.buttonElement.removeAttr("title")
			}
		},
		_setOption: function(L, M) {
			this._super(L, M);
			if (L === "disabled") {
				if (M) {
					this.element.prop("disabled", true)
				} else {
					this.element.prop("disabled", false)
				}
				return
			}
			this._resetButton()
		},
		refresh: function() {
			var L = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
			if (L !== this.options.disabled) {
				this._setOption("disabled", L)
			}
			if (this.type === "radio") {
				G(this.element[0]).each(function() {
					if (I(this).is(":checked")) {
						I(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true")
					} else {
						I(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
					}
				})
			} else {
				if (this.type === "checkbox") {
					if (this.element.is(":checked")) {
						this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true")
					} else {
						this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false")
					}
				}
			}
		},
		_resetButton: function() {
			if (this.type === "input") {
				if (this.options.label) {
					this.element.val(this.options.label)
				}
				return
			}
			var P = this.buttonElement.removeClass(J),
				O = I("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(P.empty()).text(),
				L = this.options.icons,
				M = L.primary && L.secondary,
				N = [];
			if (L.primary || L.secondary) {
				if (this.options.text) {
					N.push("ui-button-text-icon" + (M ? "s" : (L.primary ? "-primary" : "-secondary")))
				}
				if (L.primary) {
					P.prepend("<span class='ui-button-icon-primary ui-icon " + L.primary + "'></span>")
				}
				if (L.secondary) {
					P.append("<span class='ui-button-icon-secondary ui-icon " + L.secondary + "'></span>")
				}
				if (!this.options.text) {
					N.push(M ? "ui-button-icons-only" : "ui-button-icon-only");
					if (!this.hasTitle) {
						P.attr("title", I.trim(O))
					}
				}
			} else {
				N.push("ui-button-text-only")
			}
			P.addClass(N.join(" "))
		}
	});
	I.widget("ui.buttonset", {
		version: "1.9.2",
		options: {
			items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"
		},
		_create: function() {
			this.element.addClass("ui-buttonset")
		},
		_init: function() {
			this.refresh()
		},
		_setOption: function(L, M) {
			if (L === "disabled") {
				this.buttons.button("option", L, M)
			}
			this._super(L, M)
		},
		refresh: function() {
			var L = this.element.css("direction") === "rtl";
			this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
				return I(this).button("widget")[0]
			}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(L ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(L ? "ui-corner-left" : "ui-corner-right").end().end()
		},
		_destroy: function() {
			this.element.removeClass("ui-buttonset");
			this.buttons.map(function() {
				return I(this).button("widget")[0]
			}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
		}
	})
}(jQuery));
(function($, undefined) {
	$.extend($.ui, {
		datepicker: {
			version: "1.9.2"
		}
	});
	var PROP_NAME = "datepicker";
	var dpuuid = new Date().getTime();
	var instActive;

	function Datepicker() {
		this.debug = false;
		this._curInst = null;
		this._keyEvent = false;
		this._disabledInputs = [];
		this._datepickerShowing = false;
		this._inDialog = false;
		this._mainDivId = "ui-datepicker-div";
		this._inlineClass = "ui-datepicker-inline";
		this._appendClass = "ui-datepicker-append";
		this._triggerClass = "ui-datepicker-trigger";
		this._dialogClass = "ui-datepicker-dialog";
		this._disableClass = "ui-datepicker-disabled";
		this._unselectableClass = "ui-datepicker-unselectable";
		this._currentClass = "ui-datepicker-current-day";
		this._dayOverClass = "ui-datepicker-days-cell-over";
		this.regional = [];
		this.regional[""] = {
			closeText: "Done",
			prevText: "Prev",
			nextText: "Next",
			currentText: "Today",
			monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			weekHeader: "Wk",
			dateFormat: "mm/dd/yy",
			firstDay: 0,
			isRTL: false,
			showMonthAfterYear: false,
			yearSuffix: ""
		};
		this._defaults = {
			showOn: "focus",
			showAnim: "fadeIn",
			showOptions: {},
			defaultDate: null,
			appendText: "",
			buttonText: "...",
			buttonImage: "",
			buttonImageOnly: false,
			hideIfNoPrevNext: false,
			navigationAsDateFormat: false,
			gotoCurrent: false,
			changeMonth: false,
			changeYear: false,
			yearRange: "c-10:c+10",
			showOtherMonths: false,
			selectOtherMonths: false,
			showWeek: false,
			calculateWeek: this.iso8601Week,
			shortYearCutoff: "+10",
			minDate: null,
			maxDate: null,
			duration: "fast",
			beforeShowDay: null,
			beforeShow: null,
			onSelect: null,
			onChangeMonthYear: null,
			onClose: null,
			numberOfMonths: 1,
			showCurrentAtPos: 0,
			stepMonths: 1,
			stepBigMonths: 12,
			altField: "",
			altFormat: "",
			constrainInput: true,
			showButtonPanel: false,
			autoSize: false,
			disabled: false
		};
		$.extend(this._defaults, this.regional[""]);
		this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
	}
	$.extend(Datepicker.prototype, {
		markerClassName: "hasDatepicker",
		maxRows: 4,
		log: function() {
			if (this.debug) {
				console.log.apply("", arguments)
			}
		},
		_widgetDatepicker: function() {
			return this.dpDiv
		},
		setDefaults: function(settings) {
			extendRemove(this._defaults, settings || {});
			return this
		},
		_attachDatepicker: function(target, settings) {
			var inlineSettings = null;
			for (var attrName in this._defaults) {
				var attrValue = target.getAttribute("date:" + attrName);
				if (attrValue) {
					inlineSettings = inlineSettings || {};
					try {
						inlineSettings[attrName] = eval(attrValue)
					} catch (err) {
						inlineSettings[attrName] = attrValue
					}
				}
			}
			var nodeName = target.nodeName.toLowerCase();
			var inline = (nodeName == "div" || nodeName == "span");
			if (!target.id) {
				this.uuid += 1;
				target.id = "dp" + this.uuid
			}
			var inst = this._newInst($(target), inline);
			inst.settings = $.extend({}, settings || {}, inlineSettings || {});
			if (nodeName == "input") {
				this._connectDatepicker(target, inst)
			} else {
				if (inline) {
					this._inlineDatepicker(target, inst)
				}
			}
		},
		_newInst: function(target, inline) {
			var id = target[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
			return {
				id: id,
				input: target,
				selectedDay: 0,
				selectedMonth: 0,
				selectedYear: 0,
				drawMonth: 0,
				drawYear: 0,
				inline: inline,
				dpDiv: (!inline ? this.dpDiv : bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')))
			}
		},
		_connectDatepicker: function(target, inst) {
			var input = $(target);
			inst.append = $([]);
			inst.trigger = $([]);
			if (input.hasClass(this.markerClassName)) {
				return
			}
			this._attachments(input, inst);
			input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(event, key, value) {
				inst.settings[key] = value
			}).bind("getData.datepicker", function(event, key) {
				return this._get(inst, key)
			});
			this._autoSize(inst);
			$.data(target, PROP_NAME, inst);
			if (inst.settings.disabled) {
				this._disableDatepicker(target)
			}
		},
		_attachments: function(input, inst) {
			var appendText = this._get(inst, "appendText");
			var isRTL = this._get(inst, "isRTL");
			if (inst.append) {
				inst.append.remove()
			}
			if (appendText) {
				inst.append = $('<span class="' + this._appendClass + '">' + appendText + "</span>");
				input[isRTL ? "before" : "after"](inst.append)
			}
			input.unbind("focus", this._showDatepicker);
			if (inst.trigger) {
				inst.trigger.remove()
			}
			var showOn = this._get(inst, "showOn");
			if (showOn == "focus" || showOn == "both") {
				input.focus(this._showDatepicker)
			}
			if (showOn == "button" || showOn == "both") {
				var buttonText = this._get(inst, "buttonText");
				var buttonImage = this._get(inst, "buttonImage");
				inst.trigger = $(this._get(inst, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
					src: buttonImage,
					alt: buttonText,
					title: buttonText
				}) : $('<button type="button"></button>').addClass(this._triggerClass).html(buttonImage == "" ? buttonText : $("<img/>").attr({
					src: buttonImage,
					alt: buttonText,
					title: buttonText
				})));
				input[isRTL ? "before" : "after"](inst.trigger);
				inst.trigger.click(function() {
					if ($.datepicker._datepickerShowing && $.datepicker._lastInput == input[0]) {
						$.datepicker._hideDatepicker()
					} else {
						if ($.datepicker._datepickerShowing && $.datepicker._lastInput != input[0]) {
							$.datepicker._hideDatepicker();
							$.datepicker._showDatepicker(input[0])
						} else {
							$.datepicker._showDatepicker(input[0])
						}
					}
					return false
				})
			}
		},
		_autoSize: function(inst) {
			if (this._get(inst, "autoSize") && !inst.inline) {
				var date = new Date(2009, 12 - 1, 20);
				var dateFormat = this._get(inst, "dateFormat");
				if (dateFormat.match(/[DM]/)) {
					var findMax = function(names) {
							var max = 0;
							var maxI = 0;
							for (var i = 0; i < names.length; i++) {
								if (names[i].length > max) {
									max = names[i].length;
									maxI = i
								}
							}
							return maxI
						};
					date.setMonth(findMax(this._get(inst, (dateFormat.match(/MM/) ? "monthNames" : "monthNamesShort"))));
					date.setDate(findMax(this._get(inst, (dateFormat.match(/DD/) ? "dayNames" : "dayNamesShort"))) + 20 - date.getDay())
				}
				inst.input.attr("size", this._formatDate(inst, date).length)
			}
		},
		_inlineDatepicker: function(target, inst) {
			var divSpan = $(target);
			if (divSpan.hasClass(this.markerClassName)) {
				return
			}
			divSpan.addClass(this.markerClassName).append(inst.dpDiv).bind("setData.datepicker", function(event, key, value) {
				inst.settings[key] = value
			}).bind("getData.datepicker", function(event, key) {
				return this._get(inst, key)
			});
			$.data(target, PROP_NAME, inst);
			this._setDate(inst, this._getDefaultDate(inst), true);
			this._updateDatepicker(inst);
			this._updateAlternate(inst);
			if (inst.settings.disabled) {
				this._disableDatepicker(target)
			}
			inst.dpDiv.css("display", "block")
		},
		_dialogDatepicker: function(input, date, onSelect, settings, pos) {
			var inst = this._dialogInst;
			if (!inst) {
				this.uuid += 1;
				var id = "dp" + this.uuid;
				this._dialogInput = $('<input type="text" id="' + id + '" style="position: absolute; top: -100px; width: 0px;"/>');
				this._dialogInput.keydown(this._doKeyDown);
				$("body").append(this._dialogInput);
				inst = this._dialogInst = this._newInst(this._dialogInput, false);
				inst.settings = {};
				$.data(this._dialogInput[0], PROP_NAME, inst)
			}
			extendRemove(inst.settings, settings || {});
			date = (date && date.constructor == Date ? this._formatDate(inst, date) : date);
			this._dialogInput.val(date);
			this._pos = (pos ? (pos.length ? pos : [pos.pageX, pos.pageY]) : null);
			if (!this._pos) {
				var browserWidth = document.documentElement.clientWidth;
				var browserHeight = document.documentElement.clientHeight;
				var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
				var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
				this._pos = [(browserWidth / 2) - 100 + scrollX, (browserHeight / 2) - 150 + scrollY]
			}
			this._dialogInput.css("left", (this._pos[0] + 20) + "px").css("top", this._pos[1] + "px");
			inst.settings.onSelect = onSelect;
			this._inDialog = true;
			this.dpDiv.addClass(this._dialogClass);
			this._showDatepicker(this._dialogInput[0]);
			if ($.blockUI) {
				$.blockUI(this.dpDiv)
			}
			$.data(this._dialogInput[0], PROP_NAME, inst);
			return this
		},
		_destroyDatepicker: function(target) {
			var $target = $(target);
			var inst = $.data(target, PROP_NAME);
			if (!$target.hasClass(this.markerClassName)) {
				return
			}
			var nodeName = target.nodeName.toLowerCase();
			$.removeData(target, PROP_NAME);
			if (nodeName == "input") {
				inst.append.remove();
				inst.trigger.remove();
				$target.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)
			} else {
				if (nodeName == "div" || nodeName == "span") {
					$target.removeClass(this.markerClassName).empty()
				}
			}
		},
		_enableDatepicker: function(target) {
			var $target = $(target);
			var inst = $.data(target, PROP_NAME);
			if (!$target.hasClass(this.markerClassName)) {
				return
			}
			var nodeName = target.nodeName.toLowerCase();
			if (nodeName == "input") {
				target.disabled = false;
				inst.trigger.filter("button").each(function() {
					this.disabled = false
				}).end().filter("img").css({
					opacity: "1.0",
					cursor: ""
				})
			} else {
				if (nodeName == "div" || nodeName == "span") {
					var inline = $target.children("." + this._inlineClass);
					inline.children().removeClass("ui-state-disabled");
					inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", false)
				}
			}
			this._disabledInputs = $.map(this._disabledInputs, function(value) {
				return (value == target ? null : value)
			})
		},
		_disableDatepicker: function(target) {
			var $target = $(target);
			var inst = $.data(target, PROP_NAME);
			if (!$target.hasClass(this.markerClassName)) {
				return
			}
			var nodeName = target.nodeName.toLowerCase();
			if (nodeName == "input") {
				target.disabled = true;
				inst.trigger.filter("button").each(function() {
					this.disabled = true
				}).end().filter("img").css({
					opacity: "0.5",
					cursor: "default"
				})
			} else {
				if (nodeName == "div" || nodeName == "span") {
					var inline = $target.children("." + this._inlineClass);
					inline.children().addClass("ui-state-disabled");
					inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", true)
				}
			}
			this._disabledInputs = $.map(this._disabledInputs, function(value) {
				return (value == target ? null : value)
			});
			this._disabledInputs[this._disabledInputs.length] = target
		},
		_isDisabledDatepicker: function(target) {
			if (!target) {
				return false
			}
			for (var i = 0; i < this._disabledInputs.length; i++) {
				if (this._disabledInputs[i] == target) {
					return true
				}
			}
			return false
		},
		_getInst: function(target) {
			try {
				return $.data(target, PROP_NAME)
			} catch (err) {
				throw "Missing instance data for this datepicker"
			}
		},
		_optionDatepicker: function(target, name, value) {
			var inst = this._getInst(target);
			if (arguments.length == 2 && typeof name == "string") {
				return (name == "defaults" ? $.extend({}, $.datepicker._defaults) : (inst ? (name == "all" ? $.extend({}, inst.settings) : this._get(inst, name)) : null))
			}
			var settings = name || {};
			if (typeof name == "string") {
				settings = {};
				settings[name] = value
			}
			if (inst) {
				if (this._curInst == inst) {
					this._hideDatepicker()
				}
				var date = this._getDateDatepicker(target, true);
				var minDate = this._getMinMaxDate(inst, "min");
				var maxDate = this._getMinMaxDate(inst, "max");
				extendRemove(inst.settings, settings);
				if (minDate !== null && settings["dateFormat"] !== undefined && settings["minDate"] === undefined) {
					inst.settings.minDate = this._formatDate(inst, minDate)
				}
				if (maxDate !== null && settings["dateFormat"] !== undefined && settings["maxDate"] === undefined) {
					inst.settings.maxDate = this._formatDate(inst, maxDate)
				}
				this._attachments($(target), inst);
				this._autoSize(inst);
				this._setDate(inst, date);
				this._updateAlternate(inst);
				this._updateDatepicker(inst)
			}
		},
		_changeDatepicker: function(target, name, value) {
			this._optionDatepicker(target, name, value)
		},
		_refreshDatepicker: function(target) {
			var inst = this._getInst(target);
			if (inst) {
				this._updateDatepicker(inst)
			}
		},
		_setDateDatepicker: function(target, date) {
			var inst = this._getInst(target);
			if (inst) {
				this._setDate(inst, date);
				this._updateDatepicker(inst);
				this._updateAlternate(inst)
			}
		},
		_getDateDatepicker: function(target, noDefault) {
			var inst = this._getInst(target);
			if (inst && !inst.inline) {
				this._setDateFromField(inst, noDefault)
			}
			return (inst ? this._getDate(inst) : null)
		},
		_doKeyDown: function(event) {
			var inst = $.datepicker._getInst(event.target);
			var handled = true;
			var isRTL = inst.dpDiv.is(".ui-datepicker-rtl");
			inst._keyEvent = true;
			if ($.datepicker._datepickerShowing) {
				switch (event.keyCode) {
				case 9:
					$.datepicker._hideDatepicker();
					handled = false;
					break;
				case 13:
					var sel = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", inst.dpDiv);
					if (sel[0]) {
						$.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0])
					}
					var onSelect = $.datepicker._get(inst, "onSelect");
					if (onSelect) {
						var dateStr = $.datepicker._formatDate(inst);
						onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst])
					} else {
						$.datepicker._hideDatepicker()
					}
					return false;
					break;
				case 27:
					$.datepicker._hideDatepicker();
					break;
				case 33:
					$.datepicker._adjustDate(event.target, (event.ctrlKey ? -$.datepicker._get(inst, "stepBigMonths") : -$.datepicker._get(inst, "stepMonths")), "M");
					break;
				case 34:
					$.datepicker._adjustDate(event.target, (event.ctrlKey ? +$.datepicker._get(inst, "stepBigMonths") : +$.datepicker._get(inst, "stepMonths")), "M");
					break;
				case 35:
					if (event.ctrlKey || event.metaKey) {
						$.datepicker._clearDate(event.target)
					}
					handled = event.ctrlKey || event.metaKey;
					break;
				case 36:
					if (event.ctrlKey || event.metaKey) {
						$.datepicker._gotoToday(event.target)
					}
					handled = event.ctrlKey || event.metaKey;
					break;
				case 37:
					if (event.ctrlKey || event.metaKey) {
						$.datepicker._adjustDate(event.target, (isRTL ? +1 : -1), "D")
					}
					handled = event.ctrlKey || event.metaKey;
					if (event.originalEvent.altKey) {
						$.datepicker._adjustDate(event.target, (event.ctrlKey ? -$.datepicker._get(inst, "stepBigMonths") : -$.datepicker._get(inst, "stepMonths")), "M")
					}
					break;
				case 38:
					if (event.ctrlKey || event.metaKey) {
						$.datepicker._adjustDate(event.target, -7, "D")
					}
					handled = event.ctrlKey || event.metaKey;
					break;
				case 39:
					if (event.ctrlKey || event.metaKey) {
						$.datepicker._adjustDate(event.target, (isRTL ? -1 : +1), "D")
					}
					handled = event.ctrlKey || event.metaKey;
					if (event.originalEvent.altKey) {
						$.datepicker._adjustDate(event.target, (event.ctrlKey ? +$.datepicker._get(inst, "stepBigMonths") : +$.datepicker._get(inst, "stepMonths")), "M")
					}
					break;
				case 40:
					if (event.ctrlKey || event.metaKey) {
						$.datepicker._adjustDate(event.target, +7, "D")
					}
					handled = event.ctrlKey || event.metaKey;
					break;
				default:
					handled = false
				}
			} else {
				if (event.keyCode == 36 && event.ctrlKey) {
					$.datepicker._showDatepicker(this)
				} else {
					handled = false
				}
			}
			if (handled) {
				event.preventDefault();
				event.stopPropagation()
			}
		},
		_doKeyPress: function(event) {
			var inst = $.datepicker._getInst(event.target);
			if ($.datepicker._get(inst, "constrainInput")) {
				var chars = $.datepicker._possibleChars($.datepicker._get(inst, "dateFormat"));
				var chr = String.fromCharCode(event.charCode == undefined ? event.keyCode : event.charCode);
				return event.ctrlKey || event.metaKey || (chr < " " || !chars || chars.indexOf(chr) > -1)
			}
		},
		_doKeyUp: function(event) {
			var inst = $.datepicker._getInst(event.target);
			if (inst.input.val() != inst.lastVal) {
				try {
					var date = $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"), (inst.input ? inst.input.val() : null), $.datepicker._getFormatConfig(inst));
					if (date) {
						$.datepicker._setDateFromField(inst);
						$.datepicker._updateAlternate(inst);
						$.datepicker._updateDatepicker(inst)
					}
				} catch (err) {
					$.datepicker.log(err)
				}
			}
			return true
		},
		_showDatepicker: function(input) {
			input = input.target || input;
			if (input.nodeName.toLowerCase() != "input") {
				input = $("input", input.parentNode)[0]
			}
			if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput == input) {
				return
			}
			var inst = $.datepicker._getInst(input);
			if ($.datepicker._curInst && $.datepicker._curInst != inst) {
				$.datepicker._curInst.dpDiv.stop(true, true);
				if (inst && $.datepicker._datepickerShowing) {
					$.datepicker._hideDatepicker($.datepicker._curInst.input[0])
				}
			}
			var beforeShow = $.datepicker._get(inst, "beforeShow");
			var beforeShowSettings = beforeShow ? beforeShow.apply(input, [input, inst]) : {};
			if (beforeShowSettings === false) {
				return
			}
			extendRemove(inst.settings, beforeShowSettings);
			inst.lastVal = null;
			$.datepicker._lastInput = input;
			$.datepicker._setDateFromField(inst);
			if ($.datepicker._inDialog) {
				input.value = ""
			}
			if (!$.datepicker._pos) {
				$.datepicker._pos = $.datepicker._findPos(input);
				$.datepicker._pos[1] += input.offsetHeight
			}
			var isFixed = false;
			$(input).parents().each(function() {
				isFixed |= $(this).css("position") == "fixed";
				return !isFixed
			});
			var offset = {
				left: $.datepicker._pos[0],
				top: $.datepicker._pos[1]
			};
			$.datepicker._pos = null;
			inst.dpDiv.empty();
			inst.dpDiv.css({
				position: "absolute",
				display: "block",
				top: "-1000px"
			});
			$.datepicker._updateDatepicker(inst);
			offset = $.datepicker._checkOffset(inst, offset, isFixed);
			inst.dpDiv.css({
				position: ($.datepicker._inDialog && $.blockUI ? "static" : (isFixed ? "fixed" : "absolute")),
				display: "none",
				left: offset.left + "px",
				top: offset.top + "px"
			});
			if (!inst.inline) {
				var showAnim = $.datepicker._get(inst, "showAnim");
				var duration = $.datepicker._get(inst, "duration");
				var postProcess = function() {
						var cover = inst.dpDiv.find("iframe.ui-datepicker-cover");
						if ( !! cover.length) {
							var borders = $.datepicker._getBorders(inst.dpDiv);
							cover.css({
								left: -borders[0],
								top: -borders[1],
								width: inst.dpDiv.outerWidth(),
								height: inst.dpDiv.outerHeight()
							})
						}
					};
				inst.dpDiv.zIndex($(input).zIndex() + 1);
				$.datepicker._datepickerShowing = true;
				if ($.effects && ($.effects.effect[showAnim] || $.effects[showAnim])) {
					inst.dpDiv.show(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess)
				} else {
					inst.dpDiv[showAnim || "show"]((showAnim ? duration : null), postProcess)
				}
				if (!showAnim || !duration) {
					postProcess()
				}
				if (inst.input.is(":visible") && !inst.input.is(":disabled")) {
					inst.input.focus()
				}
				$.datepicker._curInst = inst
			}
		},
		_updateDatepicker: function(inst) {
			this.maxRows = 4;
			var borders = $.datepicker._getBorders(inst.dpDiv);
			instActive = inst;
			inst.dpDiv.empty().append(this._generateHTML(inst));
			this._attachHandlers(inst);
			var cover = inst.dpDiv.find("iframe.ui-datepicker-cover");
			if ( !! cover.length) {
				cover.css({
					left: -borders[0],
					top: -borders[1],
					width: inst.dpDiv.outerWidth(),
					height: inst.dpDiv.outerHeight()
				})
			}
			inst.dpDiv.find("." + this._dayOverClass + " a").mouseover();
			var numMonths = this._getNumberOfMonths(inst);
			var cols = numMonths[1];
			var width = 17;
			inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
			if (cols > 1) {
				inst.dpDiv.addClass("ui-datepicker-multi-" + cols).css("width", (width * cols) + "em")
			}
			inst.dpDiv[(numMonths[0] != 1 || numMonths[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
			inst.dpDiv[(this._get(inst, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
			if (inst == $.datepicker._curInst && $.datepicker._datepickerShowing && inst.input && inst.input.is(":visible") && !inst.input.is(":disabled") && inst.input[0] != document.activeElement) {
				inst.input.focus()
			}
			if (inst.yearshtml) {
				var origyearshtml = inst.yearshtml;
				setTimeout(function() {
					if (origyearshtml === inst.yearshtml && inst.yearshtml) {
						inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml)
					}
					origyearshtml = inst.yearshtml = null
				}, 0)
			}
		},
		_getBorders: function(elem) {
			var convert = function(value) {
					return {
						thin: 1,
						medium: 2,
						thick: 3
					}[value] || value
				};
			return [parseFloat(convert(elem.css("border-left-width"))), parseFloat(convert(elem.css("border-top-width")))]
		},
		_checkOffset: function(inst, offset, isFixed) {
			var dpWidth = inst.dpDiv.outerWidth();
			var dpHeight = inst.dpDiv.outerHeight();
			var inputWidth = inst.input ? inst.input.outerWidth() : 0;
			var inputHeight = inst.input ? inst.input.outerHeight() : 0;
			var viewWidth = document.documentElement.clientWidth + (isFixed ? 0 : $(document).scrollLeft());
			var viewHeight = document.documentElement.clientHeight + (isFixed ? 0 : $(document).scrollTop());
			offset.left -= (this._get(inst, "isRTL") ? (dpWidth - inputWidth) : 0);
			offset.left -= (isFixed && offset.left == inst.input.offset().left) ? $(document).scrollLeft() : 0;
			offset.top -= (isFixed && offset.top == (inst.input.offset().top + inputHeight)) ? $(document).scrollTop() : 0;
			offset.left -= Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ? Math.abs(offset.left + dpWidth - viewWidth) : 0);
			offset.top -= Math.min(offset.top, (offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ? Math.abs(dpHeight + inputHeight) : 0);
			return offset
		},
		_findPos: function(obj) {
			var inst = this._getInst(obj);
			var isRTL = this._get(inst, "isRTL");
			while (obj && (obj.type == "hidden" || obj.nodeType != 1 || $.expr.filters.hidden(obj))) {
				obj = obj[isRTL ? "previousSibling" : "nextSibling"]
			}
			var position = $(obj).offset();
			return [position.left, position.top]
		},
		_hideDatepicker: function(input) {
			var inst = this._curInst;
			if (!inst || (input && inst != $.data(input, PROP_NAME))) {
				return
			}
			if (this._datepickerShowing) {
				var showAnim = this._get(inst, "showAnim");
				var duration = this._get(inst, "duration");
				var postProcess = function() {
						$.datepicker._tidyDialog(inst)
					};
				if ($.effects && ($.effects.effect[showAnim] || $.effects[showAnim])) {
					inst.dpDiv.hide(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess)
				} else {
					inst.dpDiv[(showAnim == "slideDown" ? "slideUp" : (showAnim == "fadeIn" ? "fadeOut" : "hide"))]((showAnim ? duration : null), postProcess)
				}
				if (!showAnim) {
					postProcess()
				}
				this._datepickerShowing = false;
				var onClose = this._get(inst, "onClose");
				if (onClose) {
					onClose.apply((inst.input ? inst.input[0] : null), [(inst.input ? inst.input.val() : ""), inst])
				}
				this._lastInput = null;
				if (this._inDialog) {
					this._dialogInput.css({
						position: "absolute",
						left: "0",
						top: "-100px"
					});
					if ($.blockUI) {
						$.unblockUI();
						$("body").append(this.dpDiv)
					}
				}
				this._inDialog = false
			}
		},
		_tidyDialog: function(inst) {
			inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
		},
		_checkExternalClick: function(event) {
			if (!$.datepicker._curInst) {
				return
			}
			var $target = $(event.target),
				inst = $.datepicker._getInst($target[0]);
			if ((($target[0].id != $.datepicker._mainDivId && $target.parents("#" + $.datepicker._mainDivId).length == 0 && !$target.hasClass($.datepicker.markerClassName) && !$target.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI))) || ($target.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != inst)) {
				$.datepicker._hideDatepicker()
			}
		},
		_adjustDate: function(id, offset, period) {
			var target = $(id);
			var inst = this._getInst(target[0]);
			if (this._isDisabledDatepicker(target[0])) {
				return
			}
			this._adjustInstDate(inst, offset + (period == "M" ? this._get(inst, "showCurrentAtPos") : 0), period);
			this._updateDatepicker(inst)
		},
		_gotoToday: function(id) {
			var target = $(id);
			var inst = this._getInst(target[0]);
			if (this._get(inst, "gotoCurrent") && inst.currentDay) {
				inst.selectedDay = inst.currentDay;
				inst.drawMonth = inst.selectedMonth = inst.currentMonth;
				inst.drawYear = inst.selectedYear = inst.currentYear
			} else {
				var date = new Date();
				inst.selectedDay = date.getDate();
				inst.drawMonth = inst.selectedMonth = date.getMonth();
				inst.drawYear = inst.selectedYear = date.getFullYear()
			}
			this._notifyChange(inst);
			this._adjustDate(target)
		},
		_selectMonthYear: function(id, select, period) {
			var target = $(id);
			var inst = this._getInst(target[0]);
			inst["selected" + (period == "M" ? "Month" : "Year")] = inst["draw" + (period == "M" ? "Month" : "Year")] = parseInt(select.options[select.selectedIndex].value, 10);
			this._notifyChange(inst);
			this._adjustDate(target)
		},
		_selectDay: function(id, month, year, td) {
			var target = $(id);
			if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
				return
			}
			var inst = this._getInst(target[0]);
			inst.selectedDay = inst.currentDay = $("a", td).html();
			inst.selectedMonth = inst.currentMonth = month;
			inst.selectedYear = inst.currentYear = year;
			this._selectDate(id, this._formatDate(inst, inst.currentDay, inst.currentMonth, inst.currentYear))
		},
		_clearDate: function(id) {
			var target = $(id);
			var inst = this._getInst(target[0]);
			this._selectDate(target, "")
		},
		_selectDate: function(id, dateStr) {
			var target = $(id);
			var inst = this._getInst(target[0]);
			dateStr = (dateStr != null ? dateStr : this._formatDate(inst));
			if (inst.input) {
				inst.input.val(dateStr)
			}
			this._updateAlternate(inst);
			var onSelect = this._get(inst, "onSelect");
			if (onSelect) {
				onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst])
			} else {
				if (inst.input) {
					inst.input.trigger("change")
				}
			}
			if (inst.inline) {
				this._updateDatepicker(inst)
			} else {
				this._hideDatepicker();
				this._lastInput = inst.input[0];
				if (typeof(inst.input[0]) != "object") {
					inst.input.focus()
				}
				this._lastInput = null
			}
		},
		_updateAlternate: function(inst) {
			var altField = this._get(inst, "altField");
			if (altField) {
				var altFormat = this._get(inst, "altFormat") || this._get(inst, "dateFormat");
				var date = this._getDate(inst);
				var dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
				$(altField).each(function() {
					$(this).val(dateStr)
				})
			}
		},
		noWeekends: function(date) {
			var day = date.getDay();
			return [(day > 0 && day < 6), ""]
		},
		iso8601Week: function(date) {
			var checkDate = new Date(date.getTime());
			checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
			var time = checkDate.getTime();
			checkDate.setMonth(0);
			checkDate.setDate(1);
			return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1
		},
		parseDate: function(format, value, settings) {
			if (format == null || value == null) {
				throw "Invalid arguments"
			}
			value = (typeof value == "object" ? value.toString() : value + "");
			if (value == "") {
				return null
			}
			var shortYearCutoff = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff;
			shortYearCutoff = (typeof shortYearCutoff != "string" ? shortYearCutoff : new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
			var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
			var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
			var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
			var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
			var year = -1;
			var month = -1;
			var day = -1;
			var doy = -1;
			var literal = false;
			var lookAhead = function(match) {
					var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
					if (matches) {
						iFormat++
					}
					return matches
				};
			var getNumber = function(match) {
					var isDoubled = lookAhead(match);
					var size = (match == "@" ? 14 : (match == "!" ? 20 : (match == "y" && isDoubled ? 4 : (match == "o" ? 3 : 2))));
					var digits = new RegExp("^\\d{1," + size + "}");
					var num = value.substring(iValue).match(digits);
					if (!num) {
						throw "Missing number at position " + iValue
					}
					iValue += num[0].length;
					return parseInt(num[0], 10)
				};
			var getName = function(match, shortNames, longNames) {
					var names = $.map(lookAhead(match) ? longNames : shortNames, function(v, k) {
						return [[k, v]]
					}).sort(function(a, b) {
						return -(a[1].length - b[1].length)
					});
					var index = -1;
					$.each(names, function(i, pair) {
						var name = pair[1];
						if (value.substr(iValue, name.length).toLowerCase() == name.toLowerCase()) {
							index = pair[0];
							iValue += name.length;
							return false
						}
					});
					if (index != -1) {
						return index + 1
					} else {
						throw "Unknown name at position " + iValue
					}
				};
			var checkLiteral = function() {
					if (value.charAt(iValue) != format.charAt(iFormat)) {
						throw "Unexpected literal at position " + iValue
					}
					iValue++
				};
			var iValue = 0;
			for (var iFormat = 0; iFormat < format.length; iFormat++) {
				if (literal) {
					if (format.charAt(iFormat) == "'" && !lookAhead("'")) {
						literal = false
					} else {
						checkLiteral()
					}
				} else {
					switch (format.charAt(iFormat)) {
					case "d":
						day = getNumber("d");
						break;
					case "D":
						getName("D", dayNamesShort, dayNames);
						break;
					case "o":
						doy = getNumber("o");
						break;
					case "m":
						month = getNumber("m");
						break;
					case "M":
						month = getName("M", monthNamesShort, monthNames);
						break;
					case "y":
						year = getNumber("y");
						break;
					case "@":
						var date = new Date(getNumber("@"));
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case "!":
						var date = new Date((getNumber("!") - this._ticksTo1970) / 10000);
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case "'":
						if (lookAhead("'")) {
							checkLiteral()
						} else {
							literal = true
						}
						break;
					default:
						checkLiteral()
					}
				}
			}
			if (iValue < value.length) {
				var extra = value.substr(iValue);
				if (!/^\s+/.test(extra)) {
					throw "Extra/unparsed characters found in date: " + extra
				}
			}
			if (year == -1) {
				year = new Date().getFullYear()
			} else {
				if (year < 100) {
					year += new Date().getFullYear() - new Date().getFullYear() % 100 + (year <= shortYearCutoff ? 0 : -100)
				}
			}
			if (doy > -1) {
				month = 1;
				day = doy;
				do {
					var dim = this._getDaysInMonth(year, month - 1);
					if (day <= dim) {
						break
					}
					month++;
					day -= dim
				} while (true)
			}
			var date = this._daylightSavingAdjust(new Date(year, month - 1, day));
			if (date.getFullYear() != year || date.getMonth() + 1 != month || date.getDate() != day) {
				throw "Invalid date"
			}
			return date
		},
		ATOM: "yy-mm-dd",
		COOKIE: "D, dd M yy",
		ISO_8601: "yy-mm-dd",
		RFC_822: "D, d M y",
		RFC_850: "DD, dd-M-y",
		RFC_1036: "D, d M y",
		RFC_1123: "D, d M yy",
		RFC_2822: "D, d M yy",
		RSS: "D, d M y",
		TICKS: "!",
		TIMESTAMP: "@",
		W3C: "yy-mm-dd",
		_ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),
		formatDate: function(format, date, settings) {
			if (!date) {
				return ""
			}
			var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
			var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
			var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
			var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
			var lookAhead = function(match) {
					var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
					if (matches) {
						iFormat++
					}
					return matches
				};
			var formatNumber = function(match, value, len) {
					var num = "" + value;
					if (lookAhead(match)) {
						while (num.length < len) {
							num = "0" + num
						}
					}
					return num
				};
			var formatName = function(match, value, shortNames, longNames) {
					return (lookAhead(match) ? longNames[value] : shortNames[value])
				};
			var output = "";
			var literal = false;
			if (date) {
				for (var iFormat = 0; iFormat < format.length; iFormat++) {
					if (literal) {
						if (format.charAt(iFormat) == "'" && !lookAhead("'")) {
							literal = false
						} else {
							output += format.charAt(iFormat)
						}
					} else {
						switch (format.charAt(iFormat)) {
						case "d":
							output += formatNumber("d", date.getDate(), 2);
							break;
						case "D":
							output += formatName("D", date.getDay(), dayNamesShort, dayNames);
							break;
						case "o":
							output += formatNumber("o", Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
							break;
						case "m":
							output += formatNumber("m", date.getMonth() + 1, 2);
							break;
						case "M":
							output += formatName("M", date.getMonth(), monthNamesShort, monthNames);
							break;
						case "y":
							output += (lookAhead("y") ? date.getFullYear() : (date.getYear() % 100 < 10 ? "0" : "") + date.getYear() % 100);
							break;
						case "@":
							output += date.getTime();
							break;
						case "!":
							output += date.getTime() * 10000 + this._ticksTo1970;
							break;
						case "'":
							if (lookAhead("'")) {
								output += "'"
							} else {
								literal = true
							}
							break;
						default:
							output += format.charAt(iFormat)
						}
					}
				}
			}
			return output
		},
		_possibleChars: function(format) {
			var chars = "";
			var literal = false;
			var lookAhead = function(match) {
					var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
					if (matches) {
						iFormat++
					}
					return matches
				};
			for (var iFormat = 0; iFormat < format.length; iFormat++) {
				if (literal) {
					if (format.charAt(iFormat) == "'" && !lookAhead("'")) {
						literal = false
					} else {
						chars += format.charAt(iFormat)
					}
				} else {
					switch (format.charAt(iFormat)) {
					case "d":
					case "m":
					case "y":
					case "@":
						chars += "0123456789";
						break;
					case "D":
					case "M":
						return null;
					case "'":
						if (lookAhead("'")) {
							chars += "'"
						} else {
							literal = true
						}
						break;
					default:
						chars += format.charAt(iFormat)
					}
				}
			}
			return chars
		},
		_get: function(inst, name) {
			return inst.settings[name] !== undefined ? inst.settings[name] : this._defaults[name]
		},
		_setDateFromField: function(inst, noDefault) {
			if (inst.input.val() == inst.lastVal) {
				return
			}
			var dateFormat = this._get(inst, "dateFormat");
			var dates = inst.lastVal = inst.input ? inst.input.val() : null;
			var date, defaultDate;
			date = defaultDate = this._getDefaultDate(inst);
			var settings = this._getFormatConfig(inst);
			try {
				date = this.parseDate(dateFormat, dates, settings) || defaultDate
			} catch (event) {
				this.log(event);
				dates = (noDefault ? "" : dates)
			}
			inst.selectedDay = date.getDate();
			inst.drawMonth = inst.selectedMonth = date.getMonth();
			inst.drawYear = inst.selectedYear = date.getFullYear();
			inst.currentDay = (dates ? date.getDate() : 0);
			inst.currentMonth = (dates ? date.getMonth() : 0);
			inst.currentYear = (dates ? date.getFullYear() : 0);
			this._adjustInstDate(inst)
		},
		_getDefaultDate: function(inst) {
			return this._restrictMinMax(inst, this._determineDate(inst, this._get(inst, "defaultDate"), new Date()))
		},
		_determineDate: function(inst, date, defaultDate) {
			var offsetNumeric = function(offset) {
					var date = new Date();
					date.setDate(date.getDate() + offset);
					return date
				};
			var offsetString = function(offset) {
					try {
						return $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"), offset, $.datepicker._getFormatConfig(inst))
					} catch (e) {}
					var date = (offset.toLowerCase().match(/^c/) ? $.datepicker._getDate(inst) : null) || new Date();
					var year = date.getFullYear();
					var month = date.getMonth();
					var day = date.getDate();
					var pattern = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;
					var matches = pattern.exec(offset);
					while (matches) {
						switch (matches[2] || "d") {
						case "d":
						case "D":
							day += parseInt(matches[1], 10);
							break;
						case "w":
						case "W":
							day += parseInt(matches[1], 10) * 7;
							break;
						case "m":
						case "M":
							month += parseInt(matches[1], 10);
							day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
							break;
						case "y":
						case "Y":
							year += parseInt(matches[1], 10);
							day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
							break
						}
						matches = pattern.exec(offset)
					}
					return new Date(year, month, day)
				};
			var newDate = (date == null || date === "" ? defaultDate : (typeof date == "string" ? offsetString(date) : (typeof date == "number" ? (isNaN(date) ? defaultDate : offsetNumeric(date)) : new Date(date.getTime()))));
			newDate = (newDate && newDate.toString() == "Invalid Date" ? defaultDate : newDate);
			if (newDate) {
				newDate.setHours(0);
				newDate.setMinutes(0);
				newDate.setSeconds(0);
				newDate.setMilliseconds(0)
			}
			return this._daylightSavingAdjust(newDate)
		},
		_daylightSavingAdjust: function(date) {
			if (!date) {
				return null
			}
			date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
			return date
		},
		_setDate: function(inst, date, noChange) {
			var clear = !date;
			var origMonth = inst.selectedMonth;
			var origYear = inst.selectedYear;
			var newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));
			inst.selectedDay = inst.currentDay = newDate.getDate();
			inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
			inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
			if ((origMonth != inst.selectedMonth || origYear != inst.selectedYear) && !noChange) {
				this._notifyChange(inst)
			}
			this._adjustInstDate(inst);
			if (inst.input) {
				inst.input.val(clear ? "" : this._formatDate(inst))
			}
		},
		_getDate: function(inst) {
			var startDate = (!inst.currentYear || (inst.input && inst.input.val() == "") ? null : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
			return startDate
		},
		_attachHandlers: function(inst) {
			var stepMonths = this._get(inst, "stepMonths");
			var id = "#" + inst.id.replace(/\\\\/g, "\\");
			inst.dpDiv.find("[data-handler]").map(function() {
				var handler = {
					prev: function() {
						window["DP_jQuery_" + dpuuid].datepicker._adjustDate(id, -stepMonths, "M")
					},
					next: function() {
						window["DP_jQuery_" + dpuuid].datepicker._adjustDate(id, +stepMonths, "M")
					},
					hide: function() {
						window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker()
					},
					today: function() {
						window["DP_jQuery_" + dpuuid].datepicker._gotoToday(id)
					},
					selectDay: function() {
						window["DP_jQuery_" + dpuuid].datepicker._selectDay(id, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
						return false
					},
					selectMonth: function() {
						window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(id, this, "M");
						return false
					},
					selectYear: function() {
						window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(id, this, "Y");
						return false
					}
				};
				$(this).bind(this.getAttribute("data-event"), handler[this.getAttribute("data-handler")])
			})
		},
		_generateHTML: function(inst) {
			var today = new Date();
			today = this._daylightSavingAdjust(new Date(today.getFullYear(), today.getMonth(), today.getDate()));
			var isRTL = this._get(inst, "isRTL");
			var showButtonPanel = this._get(inst, "showButtonPanel");
			var hideIfNoPrevNext = this._get(inst, "hideIfNoPrevNext");
			var navigationAsDateFormat = this._get(inst, "navigationAsDateFormat");
			var numMonths = this._getNumberOfMonths(inst);
			var showCurrentAtPos = this._get(inst, "showCurrentAtPos");
			var stepMonths = this._get(inst, "stepMonths");
			var isMultiMonth = (numMonths[0] != 1 || numMonths[1] != 1);
			var currentDate = this._daylightSavingAdjust((!inst.currentDay ? new Date(9999, 9, 9) : new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
			var minDate = this._getMinMaxDate(inst, "min");
			var maxDate = this._getMinMaxDate(inst, "max");
			var drawMonth = inst.drawMonth - showCurrentAtPos;
			var drawYear = inst.drawYear;
			if (drawMonth < 0) {
				drawMonth += 12;
				drawYear--
			}
			if (maxDate) {
				var maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(), maxDate.getMonth() - (numMonths[0] * numMonths[1]) + 1, maxDate.getDate()));
				maxDraw = (minDate && maxDraw < minDate ? minDate : maxDraw);
				while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
					drawMonth--;
					if (drawMonth < 0) {
						drawMonth = 11;
						drawYear--
					}
				}
			}
			inst.drawMonth = drawMonth;
			inst.drawYear = drawYear;
			var prevText = this._get(inst, "prevText");
			prevText = (!navigationAsDateFormat ? prevText : this.formatDate(prevText, this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)), this._getFormatConfig(inst)));
			var prev = (this._canAdjustMonth(inst, -1, drawYear, drawMonth) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + prevText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? "e" : "w") + '">' + prevText + "</span></a>" : (hideIfNoPrevNext ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + prevText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? "e" : "w") + '">' + prevText + "</span></a>"));
			var nextText = this._get(inst, "nextText");
			nextText = (!navigationAsDateFormat ? nextText : this.formatDate(nextText, this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)), this._getFormatConfig(inst)));
			var next = (this._canAdjustMonth(inst, +1, drawYear, drawMonth) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? "w" : "e") + '">' + nextText + "</span></a>" : (hideIfNoPrevNext ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? "w" : "e") + '">' + nextText + "</span></a>"));
			var currentText = this._get(inst, "currentText");
			var gotoDate = (this._get(inst, "gotoCurrent") && inst.currentDay ? currentDate : today);
			currentText = (!navigationAsDateFormat ? currentText : this.formatDate(currentText, gotoDate, this._getFormatConfig(inst)));
			var controls = (!inst.inline ? '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(inst, "closeText") + "</button>" : "");
			var buttonPanel = (showButtonPanel) ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (isRTL ? controls : "") + (this._isInRange(inst, gotoDate) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + currentText + "</button>" : "") + (isRTL ? "" : controls) + "</div>" : "";
			var firstDay = parseInt(this._get(inst, "firstDay"), 10);
			firstDay = (isNaN(firstDay) ? 0 : firstDay);
			var showWeek = this._get(inst, "showWeek");
			var dayNames = this._get(inst, "dayNames");
			var dayNamesShort = this._get(inst, "dayNamesShort");
			var dayNamesMin = this._get(inst, "dayNamesMin");
			var monthNames = this._get(inst, "monthNames");
			var monthNamesShort = this._get(inst, "monthNamesShort");
			var beforeShowDay = this._get(inst, "beforeShowDay");
			var showOtherMonths = this._get(inst, "showOtherMonths");
			var selectOtherMonths = this._get(inst, "selectOtherMonths");
			var calculateWeek = this._get(inst, "calculateWeek") || this.iso8601Week;
			var defaultDate = this._getDefaultDate(inst);
			var html = "";
			for (var row = 0; row < numMonths[0]; row++) {
				var group = "";
				this.maxRows = 4;
				for (var col = 0; col < numMonths[1]; col++) {
					var selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
					var cornerClass = " ui-corner-all";
					var calender = "";
					if (isMultiMonth) {
						calender += '<div class="ui-datepicker-group';
						if (numMonths[1] > 1) {
							switch (col) {
							case 0:
								calender += " ui-datepicker-group-first";
								cornerClass = " ui-corner-" + (isRTL ? "right" : "left");
								break;
							case numMonths[1] - 1:
								calender += " ui-datepicker-group-last";
								cornerClass = " ui-corner-" + (isRTL ? "left" : "right");
								break;
							default:
								calender += " ui-datepicker-group-middle";
								cornerClass = "";
								break
							}
						}
						calender += '">'
					}
					calender += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + cornerClass + '">' + (/all|left/.test(cornerClass) && row == 0 ? (isRTL ? next : prev) : "") + (/all|right/.test(cornerClass) && row == 0 ? (isRTL ? prev : next) : "") + this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate, row > 0 || col > 0, monthNames, monthNamesShort) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
					var thead = (showWeek ? '<th class="ui-datepicker-week-col">' + this._get(inst, "weekHeader") + "</th>" : "");
					for (var dow = 0; dow < 7; dow++) {
						var day = (dow + firstDay) % 7;
						thead += "<th" + ((dow + firstDay + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + dayNames[day] + '">' + dayNamesMin[day] + "</span></th>"
					}
					calender += thead + "</tr></thead><tbody>";
					var daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
					if (drawYear == inst.selectedYear && drawMonth == inst.selectedMonth) {
						inst.selectedDay = Math.min(inst.selectedDay, daysInMonth)
					}
					var leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
					var curRows = Math.ceil((leadDays + daysInMonth) / 7);
					var numRows = (isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows);
					this.maxRows = numRows;
					var printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
					for (var dRow = 0; dRow < numRows; dRow++) {
						calender += "<tr>";
						var tbody = (!showWeek ? "" : '<td class="ui-datepicker-week-col">' + this._get(inst, "calculateWeek")(printDate) + "</td>");
						for (var dow = 0; dow < 7; dow++) {
							var daySettings = (beforeShowDay ? beforeShowDay.apply((inst.input ? inst.input[0] : null), [printDate]) : [true, ""]);
							var otherMonth = (printDate.getMonth() != drawMonth);
							var unselectable = (otherMonth && !selectOtherMonths) || !daySettings[0] || (minDate && printDate < minDate) || (maxDate && printDate > maxDate);
							tbody += '<td class="' + ((dow + firstDay + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (otherMonth ? " ui-datepicker-other-month" : "") + ((printDate.getTime() == selectedDate.getTime() && drawMonth == inst.selectedMonth && inst._keyEvent) || (defaultDate.getTime() == printDate.getTime() && defaultDate.getTime() == selectedDate.getTime()) ? " " + this._dayOverClass : "") + (unselectable ? " " + this._unselectableClass + " ui-state-disabled" : "") + (otherMonth && !showOtherMonths ? "" : " " + daySettings[1] + (printDate.getTime() == currentDate.getTime() ? " " + this._currentClass : "") + (printDate.getTime() == today.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!otherMonth || showOtherMonths) && daySettings[2] ? ' title="' + daySettings[2] + '"' : "") + (unselectable ? "" : ' data-handler="selectDay" data-event="click" data-month="' + printDate.getMonth() + '" data-year="' + printDate.getFullYear() + '"') + ">" + (otherMonth && !showOtherMonths ? "&#xa0;" : (unselectable ? '<span class="ui-state-default">' + printDate.getDate() + "</span>" : '<a class="ui-state-default' + (printDate.getTime() == today.getTime() ? " ui-state-highlight" : "") + (printDate.getTime() == currentDate.getTime() ? " ui-state-active" : "") + (otherMonth ? " ui-priority-secondary" : "") + '" href="#">' + printDate.getDate() + "</a>")) + "</td>";
							printDate.setDate(printDate.getDate() + 1);
							printDate = this._daylightSavingAdjust(printDate)
						}
						calender += tbody + "</tr>"
					}
					drawMonth++;
					if (drawMonth > 11) {
						drawMonth = 0;
						drawYear++
					}
					calender += "</tbody></table>" + (isMultiMonth ? "</div>" + ((numMonths[0] > 0 && col == numMonths[1] - 1) ? '<div class="ui-datepicker-row-break"></div>' : "") : "");
					group += calender
				}
				html += group
			}
			html += buttonPanel + ($.ui.ie6 && !inst.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : "");
			inst._keyEvent = false;
			return html
		},
		_generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate, secondary, monthNames, monthNamesShort) {
			var changeMonth = this._get(inst, "changeMonth");
			var changeYear = this._get(inst, "changeYear");
			var showMonthAfterYear = this._get(inst, "showMonthAfterYear");
			var html = '<div class="ui-datepicker-title">';
			var monthHtml = "";
			if (secondary || !changeMonth) {
				monthHtml += '<span class="ui-datepicker-month">' + monthNames[drawMonth] + "</span>"
			} else {
				var inMinYear = (minDate && minDate.getFullYear() == drawYear);
				var inMaxYear = (maxDate && maxDate.getFullYear() == drawYear);
				monthHtml += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
				for (var month = 0; month < 12; month++) {
					if ((!inMinYear || month >= minDate.getMonth()) && (!inMaxYear || month <= maxDate.getMonth())) {
						monthHtml += '<option value="' + month + '"' + (month == drawMonth ? ' selected="selected"' : "") + ">" + monthNamesShort[month] + "</option>"
					}
				}
				monthHtml += "</select>"
			}
			if (!showMonthAfterYear) {
				html += monthHtml + (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "")
			}
			if (!inst.yearshtml) {
				inst.yearshtml = "";
				if (secondary || !changeYear) {
					html += '<span class="ui-datepicker-year">' + drawYear + "</span>"
				} else {
					var years = this._get(inst, "yearRange").split(":");
					var thisYear = new Date().getFullYear();
					var determineYear = function(value) {
							var year = (value.match(/c[+-].*/) ? drawYear + parseInt(value.substring(1), 10) : (value.match(/[+-].*/) ? thisYear + parseInt(value, 10) : parseInt(value, 10)));
							return (isNaN(year) ? thisYear : year)
						};
					var year = determineYear(years[0]);
					var endYear = Math.max(year, determineYear(years[1] || ""));
					year = (minDate ? Math.max(year, minDate.getFullYear()) : year);
					endYear = (maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear);
					inst.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';
					for (; year <= endYear; year++) {
						inst.yearshtml += '<option value="' + year + '"' + (year == drawYear ? ' selected="selected"' : "") + ">" + year + "</option>"
					}
					inst.yearshtml += "</select>";
					html += inst.yearshtml;
					inst.yearshtml = null
				}
			}
			html += this._get(inst, "yearSuffix");
			if (showMonthAfterYear) {
				html += (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "") + monthHtml
			}
			html += "</div>";
			return html
		},
		_adjustInstDate: function(inst, offset, period) {
			var year = inst.drawYear + (period == "Y" ? offset : 0);
			var month = inst.drawMonth + (period == "M" ? offset : 0);
			var day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) + (period == "D" ? offset : 0);
			var date = this._restrictMinMax(inst, this._daylightSavingAdjust(new Date(year, month, day)));
			inst.selectedDay = date.getDate();
			inst.drawMonth = inst.selectedMonth = date.getMonth();
			inst.drawYear = inst.selectedYear = date.getFullYear();
			if (period == "M" || period == "Y") {
				this._notifyChange(inst)
			}
		},
		_restrictMinMax: function(inst, date) {
			var minDate = this._getMinMaxDate(inst, "min");
			var maxDate = this._getMinMaxDate(inst, "max");
			var newDate = (minDate && date < minDate ? minDate : date);
			newDate = (maxDate && newDate > maxDate ? maxDate : newDate);
			return newDate
		},
		_notifyChange: function(inst) {
			var onChange = this._get(inst, "onChangeMonthYear");
			if (onChange) {
				onChange.apply((inst.input ? inst.input[0] : null), [inst.selectedYear, inst.selectedMonth + 1, inst])
			}
		},
		_getNumberOfMonths: function(inst) {
			var numMonths = this._get(inst, "numberOfMonths");
			return (numMonths == null ? [1, 1] : (typeof numMonths == "number" ? [1, numMonths] : numMonths))
		},
		_getMinMaxDate: function(inst, minMax) {
			return this._determineDate(inst, this._get(inst, minMax + "Date"), null)
		},
		_getDaysInMonth: function(year, month) {
			return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate()
		},
		_getFirstDayOfMonth: function(year, month) {
			return new Date(year, month, 1).getDay()
		},
		_canAdjustMonth: function(inst, offset, curYear, curMonth) {
			var numMonths = this._getNumberOfMonths(inst);
			var date = this._daylightSavingAdjust(new Date(curYear, curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));
			if (offset < 0) {
				date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()))
			}
			return this._isInRange(inst, date)
		},
		_isInRange: function(inst, date) {
			var minDate = this._getMinMaxDate(inst, "min");
			var maxDate = this._getMinMaxDate(inst, "max");
			return ((!minDate || date.getTime() >= minDate.getTime()) && (!maxDate || date.getTime() <= maxDate.getTime()))
		},
		_getFormatConfig: function(inst) {
			var shortYearCutoff = this._get(inst, "shortYearCutoff");
			shortYearCutoff = (typeof shortYearCutoff != "string" ? shortYearCutoff : new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
			return {
				shortYearCutoff: shortYearCutoff,
				dayNamesShort: this._get(inst, "dayNamesShort"),
				dayNames: this._get(inst, "dayNames"),
				monthNamesShort: this._get(inst, "monthNamesShort"),
				monthNames: this._get(inst, "monthNames")
			}
		},
		_formatDate: function(inst, day, month, year) {
			if (!day) {
				inst.currentDay = inst.selectedDay;
				inst.currentMonth = inst.selectedMonth;
				inst.currentYear = inst.selectedYear
			}
			var date = (day ? (typeof day == "object" ? day : this._daylightSavingAdjust(new Date(year, month, day))) : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
			return this.formatDate(this._get(inst, "dateFormat"), date, this._getFormatConfig(inst))
		}
	});

	function bindHover(dpDiv) {
		var selector = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
		return dpDiv.delegate(selector, "mouseout", function() {
			$(this).removeClass("ui-state-hover");
			if (this.className.indexOf("ui-datepicker-prev") != -1) {
				$(this).removeClass("ui-datepicker-prev-hover")
			}
			if (this.className.indexOf("ui-datepicker-next") != -1) {
				$(this).removeClass("ui-datepicker-next-hover")
			}
		}).delegate(selector, "mouseover", function() {
			if (!$.datepicker._isDisabledDatepicker(instActive.inline ? dpDiv.parent()[0] : instActive.input[0])) {
				$(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
				$(this).addClass("ui-state-hover");
				if (this.className.indexOf("ui-datepicker-prev") != -1) {
					$(this).addClass("ui-datepicker-prev-hover")
				}
				if (this.className.indexOf("ui-datepicker-next") != -1) {
					$(this).addClass("ui-datepicker-next-hover")
				}
			}
		})
	}
	function extendRemove(target, props) {
		$.extend(target, props);
		for (var name in props) {
			if (props[name] == null || props[name] == undefined) {
				target[name] = props[name]
			}
		}
		return target
	}
	$.fn.datepicker = function(options) {
		if (!this.length) {
			return this
		}
		if (!$.datepicker.initialized) {
			$(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv);
			$.datepicker.initialized = true
		}
		var otherArgs = Array.prototype.slice.call(arguments, 1);
		if (typeof options == "string" && (options == "isDisabled" || options == "getDate" || options == "widget")) {
			return $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this[0]].concat(otherArgs))
		}
		if (options == "option" && arguments.length == 2 && typeof arguments[1] == "string") {
			return $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this[0]].concat(otherArgs))
		}
		return this.each(function() {
			typeof options == "string" ? $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this].concat(otherArgs)) : $.datepicker._attachDatepicker(this, options)
		})
	};
	$.datepicker = new Datepicker();
	$.datepicker.initialized = false;
	$.datepicker.uuid = new Date().getTime();
	$.datepicker.version = "1.9.2";
	window["DP_jQuery_" + dpuuid] = $
})(jQuery);
(function(E, C) {
	var A = "ui-dialog ui-widget ui-widget-content ui-corner-all ",
		D = {
			buttons: true,
			height: true,
			maxHeight: true,
			maxWidth: true,
			minHeight: true,
			minWidth: true,
			width: true
		},
		B = {
			maxHeight: true,
			maxWidth: true,
			minHeight: true,
			minWidth: true
		};
	E.widget("ui.dialog", {
		version: "1.9.2",
		options: {
			autoOpen: true,
			buttons: {},
			closeOnEscape: true,
			closeText: "close",
			dialogClass: "",
			draggable: true,
			hide: null,
			height: "auto",
			maxHeight: false,
			maxWidth: false,
			minHeight: 150,
			minWidth: 150,
			modal: false,
			position: {
				my: "center",
				at: "center",
				of: window,
				collision: "fit",
				using: function(G) {
					var F = E(this).css(G).offset().top;
					if (F < 0) {
						E(this).css("top", G.top - F)
					}
				}
			},
			resizable: true,
			show: null,
			stack: true,
			title: "",
			width: 300,
			zIndex: 1000
		},
		_create: function() {
			this.originalTitle = this.element.attr("title");
			if (typeof this.originalTitle !== "string") {
				this.originalTitle = ""
			}
			this.oldPosition = {
				parent: this.element.parent(),
				index: this.element.parent().children().index(this.element)
			};
			this.options.title = this.options.title || this.originalTitle;
			var I = this,
				J = this.options,
				K = J.title || "&#160;",
				L, F, M, G, H;
			L = (this.uiDialog = E("<div>")).addClass(A + J.dialogClass).css({
				display: "none",
				outline: 0,
				zIndex: J.zIndex
			}).attr("tabIndex", -1).keydown(function(N) {
				if (J.closeOnEscape && !N.isDefaultPrevented() && N.keyCode && N.keyCode === E.ui.keyCode.ESCAPE) {
					I.close(N);
					N.preventDefault()
				}
			}).mousedown(function(N) {
				I.moveToTop(false, N)
			}).appendTo("body");
			this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(L);
			F = (this.uiDialogTitlebar = E("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").bind("mousedown", function() {
				L.focus()
			}).prependTo(L);
			M = E("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role", "button").click(function(N) {
				N.preventDefault();
				I.close(N)
			}).appendTo(F);
			(this.uiDialogTitlebarCloseText = E("<span>")).addClass("ui-icon ui-icon-closethick").text(J.closeText).appendTo(M);
			G = E("<span>").uniqueId().addClass("ui-dialog-title").html(K).prependTo(F);
			H = (this.uiDialogButtonPane = E("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
			(this.uiButtonSet = E("<div>")).addClass("ui-dialog-buttonset").appendTo(H);
			L.attr({
				role: "dialog",
				"aria-labelledby": G.attr("id")
			});
			F.find("*").add(F).disableSelection();
			this._hoverable(M);
			this._focusable(M);
			if (J.draggable && E.fn.draggable) {
				this._makeDraggable()
			}
			if (J.resizable && E.fn.resizable) {
				this._makeResizable()
			}
			this._createButtons(J.buttons);
			this._isOpen = false;
			if (E.fn.bgiframe) {
				L.bgiframe()
			}
			this._on(L, {
				keydown: function(O) {
					if (!J.modal || O.keyCode !== E.ui.keyCode.TAB) {
						return
					}
					var P = E(":tabbable", L),
						N = P.filter(":first"),
						Q = P.filter(":last");
					if (O.target === Q[0] && !O.shiftKey) {
						N.focus(1);
						return false
					} else {
						if (O.target === N[0] && O.shiftKey) {
							Q.focus(1);
							return false
						}
					}
				}
			})
		},
		_init: function() {
			if (this.options.autoOpen) {
				this.open()
			}
		},
		_destroy: function() {
			var G, F = this.oldPosition;
			if (this.overlay) {
				this.overlay.destroy()
			}
			this.uiDialog.hide();
			this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");
			this.uiDialog.remove();
			if (this.originalTitle) {
				this.element.attr("title", this.originalTitle)
			}
			G = F.parent.children().eq(F.index);
			if (G.length && G[0] !== this.element[0]) {
				G.before(this.element)
			} else {
				F.parent.append(this.element)
			}
		},
		widget: function() {
			return this.uiDialog
		},
		close: function(G) {
			var F = this,
				H, I;
			if (!this._isOpen) {
				return
			}
			if (false === this._trigger("beforeClose", G)) {
				return
			}
			this._isOpen = false;
			if (this.overlay) {
				this.overlay.destroy()
			}
			if (this.options.hide) {
				this._hide(this.uiDialog, this.options.hide, function() {
					F._trigger("close", G)
				})
			} else {
				this.uiDialog.hide();
				this._trigger("close", G)
			}
			E.ui.dialog.overlay.resize();
			if (this.options.modal) {
				H = 0;
				E(".ui-dialog").each(function() {
					if (this !== F.uiDialog[0]) {
						I = E(this).css("z-index");
						if (!isNaN(I)) {
							H = Math.max(H, I)
						}
					}
				});
				E.ui.dialog.maxZ = H
			}
			return this
		},
		isOpen: function() {
			return this._isOpen
		},
		moveToTop: function(H, I) {
			var G = this.options,
				F;
			if ((G.modal && !H) || (!G.stack && !G.modal)) {
				return this._trigger("focus", I)
			}
			if (G.zIndex > E.ui.dialog.maxZ) {
				E.ui.dialog.maxZ = G.zIndex
			}
			if (this.overlay) {
				E.ui.dialog.maxZ += 1;
				E.ui.dialog.overlay.maxZ = E.ui.dialog.maxZ;
				this.overlay.$el.css("z-index", E.ui.dialog.overlay.maxZ)
			}
			F = {
				scrollTop: this.element.scrollTop(),
				scrollLeft: this.element.scrollLeft()
			};
			E.ui.dialog.maxZ += 1;
			this.uiDialog.css("z-index", E.ui.dialog.maxZ);
			this.element.attr(F);
			this._trigger("focus", I);
			return this
		},
		open: function() {
			if (this._isOpen) {
				return
			}
			var G, F = this.options,
				H = this.uiDialog;
			this._size();
			this._position(F.position);
			H.show(F.show);
			this.overlay = F.modal ? new E.ui.dialog.overlay(this) : null;
			this.moveToTop(true);
			G = this.element.find(":tabbable");
			if (!G.length) {
				G = this.uiDialogButtonPane.find(":tabbable");
				if (!G.length) {
					G = H
				}
			}
			G.eq(0).focus();
			this._isOpen = true;
			this._trigger("open");
			return this
		},
		_createButtons: function(G) {
			var F = this,
				H = false;
			this.uiDialogButtonPane.remove();
			this.uiButtonSet.empty();
			if (typeof G === "object" && G !== null) {
				E.each(G, function() {
					return !(H = true)
				})
			}
			if (H) {
				E.each(G, function(J, K) {
					var I, L;
					K = E.isFunction(K) ? {
						click: K,
						text: J
					} : K;
					K = E.extend({
						type: "button"
					}, K);
					L = K.click;
					K.click = function() {
						L.apply(F.element[0], arguments)
					};
					I = E("<button></button>", K).appendTo(F.uiButtonSet);
					if (E.fn.button) {
						I.button()
					}
				});
				this.uiDialog.addClass("ui-dialog-buttons");
				this.uiDialogButtonPane.appendTo(this.uiDialog)
			} else {
				this.uiDialog.removeClass("ui-dialog-buttons")
			}
		},
		_makeDraggable: function() {
			var F = this,
				G = this.options;

			function H(I) {
				return {
					position: I.position,
					offset: I.offset
				}
			}
			this.uiDialog.draggable({
				cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
				handle: ".ui-dialog-titlebar",
				containment: "document",
				start: function(J, I) {

					E(this).addClass("ui-dialog-dragging");
					F._trigger("dragStart", J, H(I))
				},
				drag: function(J, I) {
					F._trigger("drag", J, H(I))
				},
				stop: function(J, I) {
					G.position = [I.position.left - F.document.scrollLeft(), I.position.top - F.document.scrollTop()];
					E(this).removeClass("ui-dialog-dragging");
					F._trigger("dragStop", J, H(I));
					E.ui.dialog.overlay.resize()
				}
			})
		},
		_makeResizable: function(J) {
			J = (J === C ? this.options.resizable : J);
			var H = this,
				I = this.options,
				F = this.uiDialog.css("position"),
				G = typeof J === "string" ? J : "n,e,s,w,se,sw,ne,nw";

			function K(L) {
				return {
					originalPosition: L.originalPosition,
					originalSize: L.originalSize,
					position: L.position,
					size: L.size
				}
			}
			this.uiDialog.resizable({
				cancel: ".ui-dialog-content",
				containment: "document",
				alsoResize: this.element,
				maxWidth: I.maxWidth,
				maxHeight: I.maxHeight,
				minWidth: I.minWidth,
				minHeight: this._minHeight(),
				handles: G,
				start: function(M, L) {
					E(this).addClass("ui-dialog-resizing");
					H._trigger("resizeStart", M, K(L))
				},
				resize: function(M, L) {
					H._trigger("resize", M, K(L))
				},
				stop: function(M, L) {
					E(this).removeClass("ui-dialog-resizing");
					I.height = E(this).height();
					I.width = E(this).width();
					H._trigger("resizeStop", M, K(L));
					E.ui.dialog.overlay.resize()
				}
			}).css("position", F).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
		},
		_minHeight: function() {
			var F = this.options;
			if (F.height === "auto") {
				return F.minHeight
			} else {
				return Math.min(F.minHeight, F.height)
			}
		},
		_position: function(H) {
			var I = [],
				F = [0, 0],
				G;
			if (H) {
				if (typeof H === "string" || (typeof H === "object" && "0" in H)) {
					I = H.split ? H.split(" ") : [H[0], H[1]];
					if (I.length === 1) {
						I[1] = I[0]
					}
					E.each(["left", "top"], function(J, K) {
						if (+I[J] === I[J]) {
							F[J] = I[J];
							I[J] = K
						}
					});
					H = {
						my: I[0] + (F[0] < 0 ? F[0] : "+" + F[0]) + " " + I[1] + (F[1] < 0 ? F[1] : "+" + F[1]),
						at: I.join(" ")
					}
				}
				H = E.extend({}, E.ui.dialog.prototype.options.position, H)
			} else {
				H = E.ui.dialog.prototype.options.position
			}
			G = this.uiDialog.is(":visible");
			if (!G) {
				this.uiDialog.show()
			}
			this.uiDialog.position(H);
			if (!G) {
				this.uiDialog.hide()
			}
		},
		_setOptions: function(H) {
			var G = this,
				F = {},
				I = false;
			E.each(H, function(J, K) {
				G._setOption(J, K);
				if (J in D) {
					I = true
				}
				if (J in B) {
					F[J] = K
				}
			});
			if (I) {
				this._size()
			}
			if (this.uiDialog.is(":data(resizable)")) {
				this.uiDialog.resizable("option", F)
			}
		},
		_setOption: function(G, I) {
			var H, J, F = this.uiDialog;
			switch (G) {
			case "buttons":
				this._createButtons(I);
				break;
			case "closeText":
				this.uiDialogTitlebarCloseText.text("" + I);
				break;
			case "dialogClass":
				F.removeClass(this.options.dialogClass).addClass(A + I);
				break;
			case "disabled":
				if (I) {
					F.addClass("ui-dialog-disabled")
				} else {
					F.removeClass("ui-dialog-disabled")
				}
				break;
			case "draggable":
				H = F.is(":data(draggable)");
				if (H && !I) {
					F.draggable("destroy")
				}
				if (!H && I) {
					this._makeDraggable()
				}
				break;
			case "position":
				this._position(I);
				break;
			case "resizable":
				J = F.is(":data(resizable)");
				if (J && !I) {
					F.resizable("destroy")
				}
				if (J && typeof I === "string") {
					F.resizable("option", "handles", I)
				}
				if (!J && I !== false) {
					this._makeResizable(I)
				}
				break;
			case "title":
				E(".ui-dialog-title", this.uiDialogTitlebar).html("" + (I || "&#160;"));
				break
			}
			this._super(G, I)
		},
		_size: function() {
			var G, I, J, H = this.options,
				F = this.uiDialog.is(":visible");
			this.element.show().css({
				width: "auto",
				minHeight: 0,
				height: 0
			});
			if (H.minWidth > H.width) {
				H.width = H.minWidth
			}
			G = this.uiDialog.css({
				height: "auto",
				width: H.width
			}).outerHeight();
			I = Math.max(0, H.minHeight - G);
			if (H.height === "auto") {
				if (E.support.minHeight) {
					this.element.css({
						minHeight: I,
						height: "auto"
					})
				} else {
					this.uiDialog.show();
					J = this.element.css("height", "auto").height();
					if (!F) {
						this.uiDialog.hide()
					}
					this.element.height(Math.max(J, I))
				}
			} else {
				this.element.height(Math.max(H.height - G, 0))
			}
			if (this.uiDialog.is(":data(resizable)")) {
				this.uiDialog.resizable("option", "minHeight", this._minHeight())
			}
		}
	});
	E.extend(E.ui.dialog, {
		uuid: 0,
		maxZ: 0,
		getTitleId: function(F) {
			var G = F.attr("id");
			if (!G) {
				this.uuid += 1;
				G = this.uuid
			}
			return "ui-dialog-title-" + G
		},
		overlay: function(F) {
			this.$el = E.ui.dialog.overlay.create(F)
		}
	});
	E.extend(E.ui.dialog.overlay, {
		instances: [],
		oldInstances: [],
		maxZ: 0,
		events: E.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function(F) {
			return F + ".dialog-overlay"
		}).join(" "),
		create: function(G) {
			if (this.instances.length === 0) {
				setTimeout(function() {
					if (E.ui.dialog.overlay.instances.length) {
						E(document).bind(E.ui.dialog.overlay.events, function(H) {
							if (E(H.target).zIndex() < E.ui.dialog.overlay.maxZ) {
								return false
							}
						})
					}
				}, 1);
				E(window).bind("resize.dialog-overlay", E.ui.dialog.overlay.resize)
			}
			var F = (this.oldInstances.pop() || E("<div>").addClass("ui-widget-overlay"));
			E(document).bind("keydown.dialog-overlay", function(I) {
				var H = E.ui.dialog.overlay.instances;
				if (H.length !== 0 && H[H.length - 1] === F && G.options.closeOnEscape && !I.isDefaultPrevented() && I.keyCode && I.keyCode === E.ui.keyCode.ESCAPE) {
					G.close(I);
					I.preventDefault()
				}
			});
			F.appendTo(document.body).css({
				width: this.width(),
				height: this.height()
			});
			if (E.fn.bgiframe) {
				F.bgiframe()
			}
			this.instances.push(F);
			return F
		},
		destroy: function(G) {
			var F = E.inArray(G, this.instances),
				H = 0;
			if (F !== -1) {
				this.oldInstances.push(this.instances.splice(F, 1)[0])
			}
			if (this.instances.length === 0) {
				E([document, window]).unbind(".dialog-overlay")
			}
			G.height(0).width(0).remove();
			E.each(this.instances, function() {
				H = Math.max(H, this.css("z-index"))
			});
			this.maxZ = H
		},
		height: function() {
			var G, F;
			if (E.ui.ie) {
				G = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
				F = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight);
				if (G < F) {
					return E(window).height() + "px"
				} else {
					return G + "px"
				}
			} else {
				return E(document).height() + "px"
			}
		},
		width: function() {
			var G, F;
			if (E.ui.ie) {
				G = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
				F = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);
				if (G < F) {
					return E(window).width() + "px"
				} else {
					return G + "px"
				}
			} else {
				return E(document).width() + "px"
			}
		},
		resize: function() {
			var F = E([]);
			E.each(E.ui.dialog.overlay.instances, function() {
				F = F.add(this)
			});
			F.css({
				width: 0,
				height: 0
			}).css({
				width: E.ui.dialog.overlay.width(),
				height: E.ui.dialog.overlay.height()
			})
		}
	});
	E.extend(E.ui.dialog.overlay.prototype, {
		destroy: function() {
			E.ui.dialog.overlay.destroy(this.$el)
		}
	})
}(jQuery));
(function(D, A) {
	var C = /up|down|vertical/,
		B = /up|left|vertical|horizontal/;
	D.effects.effect.blind = function(N, P) {
		var K = D(this),
			J = ["position", "top", "bottom", "left", "right", "height", "width"],
			O = D.effects.setMode(K, N.mode || "hide"),
			F = N.direction || "up",
			H = C.test(F),
			I = H ? "height" : "width",
			S = H ? "top" : "left",
			Q = B.test(F),
			R = {},
			L = O === "show",
			G, M, E;
		if (K.parent().is(".ui-effects-wrapper")) {
			D.effects.save(K.parent(), J)
		} else {
			D.effects.save(K, J)
		}
		K.show();
		G = D.effects.createWrapper(K).css({
			overflow: "hidden"
		});
		M = G[I]();
		E = parseFloat(G.css(S)) || 0;
		R[I] = L ? M : 0;
		if (!Q) {
			K.css(H ? "bottom" : "right", 0).css(H ? "top" : "left", "auto").css({
				position: "absolute"
			});
			R[S] = L ? E : M + E
		}
		if (L) {
			G.css(I, 0);
			if (!Q) {
				G.css(S, E + M)
			}
		}
		G.animate(R, {
			duration: N.duration,
			easing: N.easing,
			queue: false,
			complete: function() {
				if (O === "hide") {
					K.hide()
				}
				D.effects.restore(K, J);
				D.effects.removeWrapper(K);
				P()
			}
		})
	}
})(jQuery);
(function(B, A) {
	B.effects.effect.bounce = function(K, G) {
		var T = B(this),
			D = ["position", "top", "bottom", "left", "right", "height", "width"],
			H = B.effects.setMode(T, K.mode || "effect"),
			L = H === "hide",
			Q = H === "show",
			J = K.direction || "up",
			U = K.distance,
			O = K.times || 5,
			C = O * 2 + (Q || L ? 1 : 0),
			E = K.duration / C,
			F = K.easing,
			P = (J === "up" || J === "down") ? "top" : "left",
			R = (J === "up" || J === "left"),
			I, V, M, N = T.queue(),
			S = N.length;
		if (Q || L) {
			D.push("opacity")
		}
		B.effects.save(T, D);
		T.show();
		B.effects.createWrapper(T);
		if (!U) {
			U = T[P === "top" ? "outerHeight" : "outerWidth"]() / 3
		}
		if (Q) {
			M = {
				opacity: 1
			};
			M[P] = 0;
			T.css("opacity", 0).css(P, R ? -U * 2 : U * 2).animate(M, E, F)
		}
		if (L) {
			U = U / Math.pow(2, O - 1)
		}
		M = {};
		M[P] = 0;
		for (I = 0; I < O; I++) {
			V = {};
			V[P] = (R ? "-=" : "+=") + U;
			T.animate(V, E, F).animate(M, E, F);
			U = L ? U * 2 : U / 2
		}
		if (L) {
			V = {
				opacity: 0
			};
			V[P] = (R ? "-=" : "+=") + U;
			T.animate(V, E, F)
		}
		T.queue(function() {
			if (L) {
				T.hide()
			}
			B.effects.restore(T, D);
			B.effects.removeWrapper(T);
			G()
		});
		if (S > 1) {
			N.splice.apply(N, [1, 0].concat(N.splice(S, C + 1)))
		}
		T.dequeue()
	}
})(jQuery);
(function(B, A) {
	B.effects.effect.clip = function(J, M) {
		var H = B(this),
			G = ["position", "top", "bottom", "left", "right", "height", "width"],
			L = B.effects.setMode(H, J.mode || "hide"),
			P = L === "show",
			C = J.direction || "vertical",
			O = C === "vertical",
			E = O ? "height" : "width",
			K = O ? "top" : "left",
			D = {},
			N, F, I;
		B.effects.save(H, G);
		H.show();
		N = B.effects.createWrapper(H).css({
			overflow: "hidden"
		});
		F = (H[0].tagName === "IMG") ? N : H;
		I = F[E]();
		if (P) {
			F.css(E, 0);
			F.css(K, I / 2)
		}
		D[E] = P ? I : 0;
		D[K] = P ? 0 : I / 2;
		F.animate(D, {
			queue: false,
			duration: J.duration,
			easing: J.easing,
			complete: function() {
				if (!P) {
					H.hide()
				}
				B.effects.restore(H, G);
				B.effects.removeWrapper(H);
				M()
			}
		})
	}
})(jQuery);
(function(B, A) {
	B.effects.effect.drop = function(H, J) {
		var F = B(this),
			E = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
			I = B.effects.setMode(F, H.mode || "hide"),
			M = I === "show",
			C = H.direction || "left",
			D = (C === "up" || C === "down") ? "top" : "left",
			K = (C === "up" || C === "left") ? "pos" : "neg",
			L = {
				opacity: M ? 1 : 0
			},
			G;
		B.effects.save(F, E);
		F.show();
		B.effects.createWrapper(F);
		G = H.distance || F[D === "top" ? "outerHeight" : "outerWidth"](true) / 2;
		if (M) {
			F.css("opacity", 0).css(D, K === "pos" ? -G : G)
		}
		L[D] = (M ? (K === "pos" ? "+=" : "-=") : (K === "pos" ? "-=" : "+=")) + G;
		F.animate(L, {
			queue: false,
			duration: H.duration,
			easing: H.easing,
			complete: function() {
				if (I === "hide") {
					F.hide()
				}
				B.effects.restore(F, E);
				B.effects.removeWrapper(F);
				J()
			}
		})
	}
})(jQuery);
(function(B, A) {
	B.effects.effect.explode = function(H, G) {
		var S = H.pieces ? Math.round(Math.sqrt(H.pieces)) : 3,
			O = S,
			T = B(this),
			E = B.effects.setMode(T, H.mode || "hide"),
			P = E === "show",
			J = T.show().css("visibility", "hidden").offset(),
			N = Math.ceil(T.outerWidth() / O),
			U = Math.ceil(T.outerHeight() / S),
			I = [],
			F, D, R, K, C, M;

		function L() {
			I.push(this);
			if (I.length === S * O) {
				Q()
			}
		}
		for (F = 0; F < S; F++) {
			K = J.top + F * U;
			M = F - (S - 1) / 2;
			for (D = 0; D < O; D++) {
				R = J.left + D * N;
				C = D - (O - 1) / 2;
				T.clone().appendTo("body").wrap("<div></div>").css({
					position: "absolute",
					visibility: "visible",
					left: -D * N,
					top: -F * U
				}).parent().addClass("ui-effects-explode").css({
					position: "absolute",
					overflow: "hidden",
					width: N,
					height: U,
					left: R + (P ? C * N : 0),
					top: K + (P ? M * U : 0),
					opacity: P ? 0 : 1
				}).animate({
					left: R + (P ? 0 : C * N),
					top: K + (P ? 0 : M * U),
					opacity: P ? 1 : 0
				}, H.duration || 500, H.easing, L)
			}
		}
		function Q() {
			T.css({
				visibility: "visible"
			});
			B(I).remove();
			if (!P) {
				T.hide()
			}
			G()
		}
	}
})(jQuery);
(function(B, A) {
	B.effects.effect.fade = function(F, D) {
		var C = B(this),
			E = B.effects.setMode(C, F.mode || "toggle");
		C.animate({
			opacity: E
		}, {
			queue: false,
			duration: F.duration,
			easing: F.easing,
			complete: D
		})
	}
})(jQuery);
(function(B, A) {
	B.effects.effect.fold = function(I, E) {
		var P = B(this),
			D = ["position", "top", "bottom", "left", "right", "height", "width"],
			F = B.effects.setMode(P, I.mode || "hide"),
			O = F === "show",
			K = F === "hide",
			H = I.size || 15,
			G = /([0-9]+)%/.exec(H),
			S = !! I.horizFirst,
			L = O !== S,
			M = L ? ["width", "height"] : ["height", "width"],
			J = I.duration / 2,
			C, R, Q = {},
			N = {};
		B.effects.save(P, D);
		P.show();
		C = B.effects.createWrapper(P).css({
			overflow: "hidden"
		});
		R = L ? [C.width(), C.height()] : [C.height(), C.width()];
		if (G) {
			H = parseInt(G[1], 10) / 100 * R[K ? 0 : 1]
		}
		if (O) {
			C.css(S ? {
				height: 0,
				width: H
			} : {
				height: H,
				width: 0
			})
		}
		Q[M[0]] = O ? R[0] : H;
		N[M[1]] = O ? R[1] : 0;
		C.animate(Q, J, I.easing).animate(N, J, I.easing, function() {
			if (K) {
				P.hide()
			}
			B.effects.restore(P, D);
			B.effects.removeWrapper(P);
			E()
		})
	}
})(jQuery);
(function(B, A) {
	B.effects.effect.highlight = function(E, C) {
		var F = B(this),
			G = ["backgroundImage", "backgroundColor", "opacity"],
			D = B.effects.setMode(F, E.mode || "show"),
			H = {
				backgroundColor: F.css("backgroundColor")
			};
		if (D === "hide") {
			H.opacity = 0
		}
		B.effects.save(F, G);
		F.show().css({
			backgroundImage: "none",
			backgroundColor: E.color || "#ffff99"
		}).animate(H, {
			queue: false,
			duration: E.duration,
			easing: E.easing,
			complete: function() {
				if (D === "hide") {
					F.hide()
				}
				B.effects.restore(F, G);
				C()
			}
		})
	}
})(jQuery);
(function(B, A) {
	B.effects.effect.pulsate = function(K, C) {
		var D = B(this),
			L = B.effects.setMode(D, K.mode || "show"),
			O = L === "show",
			I = L === "hide",
			M = (O || L === "hide"),
			E = ((K.times || 5) * 2) + (M ? 1 : 0),
			H = K.duration / E,
			N = 0,
			G = D.queue(),
			F = G.length,
			J;
		if (O || !D.is(":visible")) {
			D.css("opacity", 0).show();

			N = 1
		}
		for (J = 1; J < E; J++) {
			D.animate({
				opacity: N
			}, H, K.easing);
			N = 1 - N
		}
		D.animate({
			opacity: N
		}, H, K.easing);
		D.queue(function() {
			if (I) {
				D.hide()
			}
			C()
		});
		if (F > 1) {
			G.splice.apply(G, [1, 0].concat(G.splice(F, E + 1)))
		}
		D.dequeue()
	}
})(jQuery);
(function(B, A) {
	B.effects.effect.puff = function(I, D) {
		var E = B(this),
			J = B.effects.setMode(E, I.mode || "hide"),
			G = J === "hide",
			F = parseInt(I.percent, 10) || 150,
			H = F / 100,
			C = {
				height: E.height(),
				width: E.width(),
				outerHeight: E.outerHeight(),
				outerWidth: E.outerWidth()
			};
		B.extend(I, {
			effect: "scale",
			queue: false,
			fade: true,
			mode: J,
			complete: D,
			percent: G ? F : 100,
			from: G ? C : {
				height: C.height * H,
				width: C.width * H,
				outerHeight: C.outerHeight * H,
				outerWidth: C.outerWidth * H
			}
		});
		E.effect(I)
	};
	B.effects.effect.scale = function(K, F) {
		var G = B(this),
			I = B.extend(true, {}, K),
			L = B.effects.setMode(G, K.mode || "effect"),
			J = parseInt(K.percent, 10) || (parseInt(K.percent, 10) === 0 ? 0 : (L === "hide" ? 0 : 100)),
			D = K.direction || "both",
			H = K.origin,
			C = {
				height: G.height(),
				width: G.width(),
				outerHeight: G.outerHeight(),
				outerWidth: G.outerWidth()
			},
			E = {
				y: D !== "horizontal" ? (J / 100) : 1,
				x: D !== "vertical" ? (J / 100) : 1
			};
		I.effect = "size";
		I.queue = false;
		I.complete = F;
		if (L !== "effect") {
			I.origin = H || ["middle", "center"];
			I.restore = true
		}
		I.from = K.from || (L === "show" ? {
			height: 0,
			width: 0,
			outerHeight: 0,
			outerWidth: 0
		} : C);
		I.to = {
			height: C.height * E.y,
			width: C.width * E.x,
			outerHeight: C.outerHeight * E.y,
			outerWidth: C.outerWidth * E.x
		};
		if (I.fade) {
			if (L === "show") {
				I.from.opacity = 0;
				I.to.opacity = 1
			}
			if (L === "hide") {
				I.from.opacity = 1;
				I.to.opacity = 0
			}
		}
		G.effect(I)
	};
	B.effects.effect.size = function(J, G) {
		var D, O, R, S = B(this),
			U = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
			M = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
			L = ["width", "height", "overflow"],
			P = ["fontSize"],
			I = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
			N = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
			H = B.effects.setMode(S, J.mode || "effect"),
			C = J.restore || H !== "effect",
			K = J.scale || "both",
			F = J.origin || ["middle", "center"],
			Q = S.css("position"),
			E = C ? U : M,
			T = {
				height: 0,
				width: 0,
				outerHeight: 0,
				outerWidth: 0
			};
		if (H === "show") {
			S.show()
		}
		D = {
			height: S.height(),
			width: S.width(),
			outerHeight: S.outerHeight(),
			outerWidth: S.outerWidth()
		};
		if (J.mode === "toggle" && H === "show") {
			S.from = J.to || T;
			S.to = J.from || D
		} else {
			S.from = J.from || (H === "show" ? T : D);
			S.to = J.to || (H === "hide" ? T : D)
		}
		R = {
			from: {
				y: S.from.height / D.height,
				x: S.from.width / D.width
			},
			to: {
				y: S.to.height / D.height,
				x: S.to.width / D.width
			}
		};
		if (K === "box" || K === "both") {
			if (R.from.y !== R.to.y) {
				E = E.concat(I);
				S.from = B.effects.setTransition(S, I, R.from.y, S.from);
				S.to = B.effects.setTransition(S, I, R.to.y, S.to)
			}
			if (R.from.x !== R.to.x) {
				E = E.concat(N);
				S.from = B.effects.setTransition(S, N, R.from.x, S.from);
				S.to = B.effects.setTransition(S, N, R.to.x, S.to)
			}
		}
		if (K === "content" || K === "both") {
			if (R.from.y !== R.to.y) {
				E = E.concat(P).concat(L);
				S.from = B.effects.setTransition(S, P, R.from.y, S.from);
				S.to = B.effects.setTransition(S, P, R.to.y, S.to)
			}
		}
		B.effects.save(S, E);

		S.show();
		B.effects.createWrapper(S);
		S.css("overflow", "hidden").css(S.from);
		if (F) {
			O = B.effects.getBaseline(F, D);
			S.from.top = (D.outerHeight - S.outerHeight()) * O.y;
			S.from.left = (D.outerWidth - S.outerWidth()) * O.x;
			S.to.top = (D.outerHeight - S.to.outerHeight) * O.y;
			S.to.left = (D.outerWidth - S.to.outerWidth) * O.x
		}
		S.css(S.from);
		if (K === "content" || K === "both") {
			I = I.concat(["marginTop", "marginBottom"]).concat(P);
			N = N.concat(["marginLeft", "marginRight"]);
			L = U.concat(I).concat(N);
			S.find("*[width]").each(function() {
				var W = B(this),
					V = {
						height: W.height(),
						width: W.width(),
						outerHeight: W.outerHeight(),
						outerWidth: W.outerWidth()
					};
				if (C) {
					B.effects.save(W, L)
				}
				W.from = {
					height: V.height * R.from.y,
					width: V.width * R.from.x,
					outerHeight: V.outerHeight * R.from.y,
					outerWidth: V.outerWidth * R.from.x
				};
				W.to = {
					height: V.height * R.to.y,
					width: V.width * R.to.x,
					outerHeight: V.height * R.to.y,
					outerWidth: V.width * R.to.x
				};
				if (R.from.y !== R.to.y) {
					W.from = B.effects.setTransition(W, I, R.from.y, W.from);
					W.to = B.effects.setTransition(W, I, R.to.y, W.to)
				}
				if (R.from.x !== R.to.x) {
					W.from = B.effects.setTransition(W, N, R.from.x, W.from);
					W.to = B.effects.setTransition(W, N, R.to.x, W.to)
				}
				W.css(W.from);
				W.animate(W.to, J.duration, J.easing, function() {
					if (C) {
						B.effects.restore(W, L)
					}
				})
			})
		}
		S.animate(S.to, {
			queue: false,
			duration: J.duration,
			easing: J.easing,
			complete: function() {
				if (S.to.opacity === 0) {
					S.css("opacity", S.from.opacity)
				}
				if (H === "hide") {
					S.hide()
				}
				B.effects.restore(S, E);
				if (!C) {
					if (Q === "static") {
						S.css({
							position: "relative",
							top: S.to.top,
							left: S.to.left
						})
					} else {
						B.each(["top", "left"], function(W, V) {
							S.css(V, function(a, X) {
								var Z = parseInt(X, 10),
									Y = W ? S.to.left : S.to.top;
								if (X === "auto") {
									return Y + "px"
								}
								return Z + Y + "px"
							})
						})
					}
				}
				B.effects.removeWrapper(S);
				G()
			}
		})
	}
})(jQuery);
(function(B, A) {
	B.effects.effect.shake = function(J, I) {
		var S = B(this),
			D = ["position", "top", "bottom", "left", "right", "height", "width"],
			G = B.effects.setMode(S, J.mode || "effect"),
			F = J.direction || "left",
			T = J.distance || 20,
			M = J.times || 3,
			C = M * 2 + 1,
			E = Math.round(J.duration / C),
			N = (F === "up" || F === "down") ? "top" : "left",
			L = (F === "up" || F === "left"),
			P = {},
			K = {},
			O = {},
			H, Q = S.queue(),
			R = Q.length;
		B.effects.save(S, D);
		S.show();
		B.effects.createWrapper(S);
		P[N] = (L ? "-=" : "+=") + T;
		K[N] = (L ? "+=" : "-=") + T * 2;
		O[N] = (L ? "-=" : "+=") + T * 2;
		S.animate(P, E, J.easing);
		for (H = 1; H < M; H++) {
			S.animate(K, E, J.easing).animate(O, E, J.easing)
		}
		S.animate(K, E, J.easing).animate(P, E / 2, J.easing).queue(function() {
			if (G === "hide") {
				S.hide()
			}
			B.effects.restore(S, D);
			B.effects.removeWrapper(S);
			I()
		});
		if (R > 1) {
			Q.splice.apply(Q, [1, 0].concat(Q.splice(R, C + 1)))
		}
		S.dequeue()
	}
})(jQuery);
(function(B, A) {
	B.effects.effect.slide = function(I, K) {
		var G = B(this),
			F = ["position", "top", "bottom", "left", "right", "width", "height"],
			J = B.effects.setMode(G, I.mode || "show"),
			M = J === "show",
			C = I.direction || "left",
			E = (C === "up" || C === "down") ? "top" : "left",
			L = (C === "up" || C === "left"),
			H, D = {};
		B.effects.save(G, F);
		G.show();
		H = I.distance || G[E === "top" ? "outerHeight" : "outerWidth"](true);
		B.effects.createWrapper(G).css({
			overflow: "hidden"
		});
		if (M) {
			G.css(E, L ? (isNaN(H) ? "-" + H : -H) : H)
		}
		D[E] = (M ? (L ? "+=" : "-=") : (L ? "-=" : "+=")) + H;
		G.animate(D, {
			queue: false,
			duration: I.duration,
			easing: I.easing,
			complete: function() {
				if (J === "hide") {
					G.hide()
				}
				B.effects.restore(G, F);
				B.effects.removeWrapper(G);
				K()
			}
		})
	}
})(jQuery);
(function(B, A) {
	B.effects.effect.transfer = function(I, C) {
		var E = B(this),
			K = B(I.to),
			N = K.css("position") === "fixed",
			J = B("body"),
			H = N ? J.scrollTop() : 0,
			D = N ? J.scrollLeft() : 0,
			L = K.offset(),
			M = {
				top: L.top - H,
				left: L.left - D,
				height: K.innerHeight(),
				width: K.innerWidth()
			},
			F = E.offset(),
			G = B('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(I.className).css({
				top: F.top - H,
				left: F.left - D,
				height: E.innerHeight(),
				width: E.innerWidth(),
				position: N ? "fixed" : "absolute"
			}).animate(M, I.duration, I.easing, function() {
				G.remove();
				C()
			})
	}
})(jQuery);
(function(C, B) {
	var A = false;
	C.widget("ui.menu", {
		version: "1.9.2",
		defaultElement: "<ul>",
		delay: 300,
		options: {
			icons: {
				submenu: "ui-icon-carat-1-e"
			},
			menus: "ul",
			position: {
				my: "left top",
				at: "right top"
			},
			role: "menu",
			blur: null,
			focus: null,
			select: null
		},
		_create: function() {
			this.activeMenu = this.element;
			this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !! this.element.find(".ui-icon").length).attr({
				role: this.options.role,
				tabIndex: 0
			}).bind("click" + this.eventNamespace, C.proxy(function(D) {
				if (this.options.disabled) {
					D.preventDefault()
				}
			}, this));
			if (this.options.disabled) {
				this.element.addClass("ui-state-disabled").attr("aria-disabled", "true")
			}
			this._on({
				"mousedown .ui-menu-item > a": function(D) {
					D.preventDefault()
				},
				"click .ui-state-disabled > a": function(D) {
					D.preventDefault()
				},
				"click .ui-menu-item:has(a)": function(D) {
					var E = C(D.target).closest(".ui-menu-item");
					if (!A && E.not(".ui-state-disabled").length) {
						A = true;
						this.select(D);
						if (E.has(".ui-menu").length) {
							this.expand(D)
						} else {
							if (!this.element.is(":focus")) {
								this.element.trigger("focus", [true]);
								if (this.active && this.active.parents(".ui-menu").length === 1) {
									clearTimeout(this.timer)
								}
							}
						}
					}
				},
				"mouseenter .ui-menu-item": function(D) {
					var E = C(D.currentTarget);
					E.siblings().children(".ui-state-active").removeClass("ui-state-active");
					this.focus(D, E)
				},
				mouseleave: "collapseAll",
				"mouseleave .ui-menu": "collapseAll",
				focus: function(E, F) {
					var D = this.active || this.element.children(".ui-menu-item").eq(0);
					if (!F) {
						this.focus(E, D)
					}
				},
				blur: function(D) {
					this._delay(function() {
						if (!C.contains(this.element[0], this.document[0].activeElement)) {
							this.collapseAll(D)
						}
					})
				},
				keydown: "_keydown"
			});
			this.refresh();
			this._on(this.document, {
				click: function(D) {
					if (!C(D.target).closest(".ui-menu").length) {
						this.collapseAll(D)
					}
					A = false
				}
			})
		},
		_destroy: function() {
			this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
			this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
				var D = C(this);
				if (D.data("ui-menu-submenu-carat")) {
					D.remove()
				}
			});
			this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
		},
		_keydown: function(G) {
			var E, I, D, F, K, J = true;

			function H(L) {
				return L.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
			}
			switch (G.keyCode) {
			case C.ui.keyCode.PAGE_UP:
				this.previousPage(G);
				break;
			case C.ui.keyCode.PAGE_DOWN:
				this.nextPage(G);
				break;
			case C.ui.keyCode.HOME:
				this._move("first", "first", G);
				break;
			case C.ui.keyCode.END:
				this._move("last", "last", G);
				break;
			case C.ui.keyCode.UP:
				this.previous(G);
				break;
			case C.ui.keyCode.DOWN:
				this.next(G);
				break;
			case C.ui.keyCode.LEFT:
				this.collapse(G);
				break;
			case C.ui.keyCode.RIGHT:
				if (this.active && !this.active.is(".ui-state-disabled")) {
					this.expand(G)
				}
				break;
			case C.ui.keyCode.ENTER:
			case C.ui.keyCode.SPACE:
				this._activate(G);
				break;
			case C.ui.keyCode.ESCAPE:
				this.collapse(G);
				break;
			default:
				J = false;
				I = this.previousFilter || "";
				D = String.fromCharCode(G.keyCode);
				F = false;
				clearTimeout(this.filterTimer);
				if (D === I) {
					F = true
				} else {
					D = I + D
				}
				K = new RegExp("^" + H(D), "i");
				E = this.activeMenu.children(".ui-menu-item").filter(function() {
					return K.test(C(this).children("a").text())
				});
				E = F && E.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : E;
				if (!E.length) {
					D = String.fromCharCode(G.keyCode);
					K = new RegExp("^" + H(D), "i");
					E = this.activeMenu.children(".ui-menu-item").filter(function() {
						return K.test(C(this).children("a").text())
					})
				}
				if (E.length) {
					this.focus(G, E);
					if (E.length > 1) {
						this.previousFilter = D;
						this.filterTimer = this._delay(function() {
							delete this.previousFilter
						}, 1000)
					} else {
						delete this.previousFilter
					}
				} else {
					delete this.previousFilter
				}
			}
			if (J) {
				G.preventDefault()
			}
		},
		_activate: function(D) {
			if (!this.active.is(".ui-state-disabled")) {
				if (this.active.children("a[aria-haspopup='true']").length) {
					this.expand(D)
				} else {
					this.select(D)
				}
			}
		},
		refresh: function() {
			var D, F = this.options.icons.submenu,
				E = this.element.find(this.options.menus);
			E.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
				role: this.options.role,
				"aria-hidden": "true",
				"aria-expanded": "false"
			}).each(function() {
				var I = C(this),
					G = I.prev("a"),
					H = C("<span>").addClass("ui-menu-icon ui-icon " + F).data("ui-menu-submenu-carat", true);
				G.attr("aria-haspopup", "true").prepend(H);
				I.attr("aria-labelledby", G.attr("id"))
			});
			D = E.add(this.element);
			D.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
				tabIndex: -1,
				role: this._itemRole()
			});
			D.children(":not(.ui-menu-item)").each(function() {
				var G = C(this);
				if (!/[^\-—–\s]/.test(G.text())) {
					G.addClass("ui-widget-content ui-menu-divider")
				}
			});
			D.children(".ui-state-disabled").attr("aria-disabled", "true");
			if (this.active && !C.contains(this.element[0], this.active[0])) {
				this.blur()
			}
		},
		_itemRole: function() {
			return {
				menu: "menuitem",
				listbox: "option"
			}[this.options.role]
		},
		focus: function(E, D) {
			var F, G;
			this.blur(E, E && E.type === "focus");
			this._scrollIntoView(D);
			this.active = D.first();
			G = this.active.children("a").addClass("ui-state-focus");
			if (this.options.role) {
				this.element.attr("aria-activedescendant", G.attr("id"))
			}
			this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");
			if (E && E.type === "keydown") {
				this._close()
			} else {
				this.timer = this._delay(function() {
					this._close()
				}, this.delay)
			}
			F = D.children(".ui-menu");
			if (F.length && (/^mouse/.test(E.type))) {
				this._startOpening(F)
			}
			this.activeMenu = D.parent();
			this._trigger("focus", E, {
				item: D
			})
		},
		_scrollIntoView: function(G) {
			var F, I, E, H, D, J;
			if (this._hasScroll()) {
				F = parseFloat(C.css(this.activeMenu[0], "borderTopWidth")) || 0;
				I = parseFloat(C.css(this.activeMenu[0], "paddingTop")) || 0;
				E = G.offset().top - this.activeMenu.offset().top - F - I;
				H = this.activeMenu.scrollTop();
				D = this.activeMenu.height();
				J = G.height();
				if (E < 0) {
					this.activeMenu.scrollTop(H + E)
				} else {
					if (E + J > D) {
						this.activeMenu.scrollTop(H + E - D + J)
					}
				}
			}
		},
		blur: function(D, E) {
			if (!E) {
				clearTimeout(this.timer)
			}
			if (!this.active) {
				return
			}
			this.active.children("a").removeClass("ui-state-focus");
			this.active = null;
			this._trigger("blur", D, {
				item: this.active
			})
		},
		_startOpening: function(D) {
			clearTimeout(this.timer);
			if (D.attr("aria-hidden") !== "true") {
				return
			}
			this.timer = this._delay(function() {
				this._close();
				this._open(D)
			}, this.delay)
		},
		_open: function(E) {
			var D = C.extend({
				of: this.active
			}, this.options.position);
			clearTimeout(this.timer);
			this.element.find(".ui-menu").not(E.parents(".ui-menu")).hide().attr("aria-hidden", "true");
			E.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(D)
		},
		collapseAll: function(E, D) {
			clearTimeout(this.timer);
			this.timer = this._delay(function() {
				var F = D ? this.element : C(E && E.target).closest(this.element.find(".ui-menu"));
				if (!F.length) {
					F = this.element
				}
				this._close(F);
				this.blur(E);
				this.activeMenu = F
			}, this.delay)
		},
		_close: function(D) {
			if (!D) {
				D = this.active ? this.active.parent() : this.element
			}
			D.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
		},
		collapse: function(E) {
			var D = this.active && this.active.parent().closest(".ui-menu-item", this.element);
			if (D && D.length) {
				this._close();
				this.focus(E, D)
			}
		},
		expand: function(E) {
			var D = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
			if (D && D.length) {
				this._open(D.parent());
				this._delay(function() {
					this.focus(E, D)
				})
			}
		},
		next: function(D) {
			this._move("next", "first", D)
		},
		previous: function(D) {
			this._move("prev", "last", D)
		},
		isFirstItem: function() {
			return this.active && !this.active.prevAll(".ui-menu-item").length
		},
		isLastItem: function() {
			return this.active && !this.active.nextAll(".ui-menu-item").length
		},
		_move: function(F, E, G) {
			var D;
			if (this.active) {
				if (F === "first" || F === "last") {
					D = this.active[F === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1)
				} else {
					D = this.active[F + "All"](".ui-menu-item").eq(0)
				}
			}
			if (!D || !D.length || !this.active) {
				D = this.activeMenu.children(".ui-menu-item")[E]()
			}
			this.focus(G, D)
		},
		nextPage: function(F) {
			var E, G, D;
			if (!this.active) {
				this.next(F);
				return
			}
			if (this.isLastItem()) {
				return
			}
			if (this._hasScroll()) {
				G = this.active.offset().top;
				D = this.element.height();
				this.active.nextAll(".ui-menu-item").each(function() {
					E = C(this);
					return E.offset().top - G - D < 0
				});
				this.focus(F, E)
			} else {
				this.focus(F, this.activeMenu.children(".ui-menu-item")[!this.active ? "first" : "last"]())
			}
		},
		previousPage: function(F) {
			var E, G, D;
			if (!this.active) {
				this.next(F);
				return
			}
			if (this.isFirstItem()) {
				return
			}
			if (this._hasScroll()) {
				G = this.active.offset().top;
				D = this.element.height();
				this.active.prevAll(".ui-menu-item").each(function() {
					E = C(this);
					return E.offset().top - G + D > 0
				});
				this.focus(F, E)
			} else {
				this.focus(F, this.activeMenu.children(".ui-menu-item").first())
			}
		},
		_hasScroll: function() {
			return this.element.outerHeight() < this.element.prop("scrollHeight")
		},
		select: function(E) {
			this.active = this.active || C(E.target).closest(".ui-menu-item");
			var D = {
				item: this.active
			};
			if (!this.active.has(".ui-menu").length) {
				this.collapseAll(E, true)
			}
			this._trigger("select", E, D)
		}
	})
}(jQuery));
(function(J, A) {
	J.ui = J.ui || {};
	var E, C = Math.max,
		L = Math.abs,
		D = Math.round,
		G = /left|center|right/,
		B = /top|center|bottom/,
		F = /[\+\-]\d+%?/,
		K = /^\w+/,
		N = /%$/,
		I = J.fn.position;

	function M(P, Q, O) {
		return [parseInt(P[0], 10) * (N.test(P[0]) ? Q / 100 : 1), parseInt(P[1], 10) * (N.test(P[1]) ? O / 100 : 1)]
	}
	function H(P, O) {
		return parseInt(J.css(P, O), 10) || 0
	}
	J.position = {
		scrollbarWidth: function() {
			if (E !== A) {
				return E
			}
			var Q, O, P = J("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
				R = P.children()[0];
			J("body").append(P);
			Q = R.offsetWidth;
			P.css("overflow", "scroll");
			O = R.offsetWidth;
			if (Q === O) {
				O = P[0].clientWidth
			}
			P.remove();
			return (E = Q - O)
		},
		getScrollInfo: function(P) {
			var R = P.isWindow ? "" : P.element.css("overflow-x"),
				O = P.isWindow ? "" : P.element.css("overflow-y"),
				Q = R === "scroll" || (R === "auto" && P.width < P.element[0].scrollWidth),
				S = O === "scroll" || (O === "auto" && P.height < P.element[0].scrollHeight);
			return {
				width: Q ? J.position.scrollbarWidth() : 0,
				height: S ? J.position.scrollbarWidth() : 0
			}
		},
		getWithinInfo: function(Q) {
			var O = J(Q || window),
				P = J.isWindow(O[0]);
			return {
				element: O,
				isWindow: P,
				offset: O.offset() || {
					left: 0,
					top: 0
				},
				scrollLeft: O.scrollLeft(),
				scrollTop: O.scrollTop(),
				width: P ? O.width() : O.outerWidth(),
				height: P ? O.height() : O.outerHeight()
			}
		}
	};
	J.fn.position = function(W) {
		if (!W || !W.of) {
			return I.apply(this, arguments)
		}
		W = J.extend({}, W);
		var O, Z, T, U, S, X = J(W.of),
			Y = J.position.getWithinInfo(W.within),
			R = J.position.getScrollInfo(Y),
			P = X[0],
			Q = (W.collision || "flip").split(" "),
			V = {};
		if (P.nodeType === 9) {
			Z = X.width();
			T = X.height();
			U = {
				top: 0,
				left: 0
			}
		} else {
			if (J.isWindow(P)) {
				Z = X.width();
				T = X.height();
				U = {
					top: X.scrollTop(),
					left: X.scrollLeft()
				}
			} else {
				if (P.preventDefault) {
					W.at = "left top";
					Z = T = 0;
					U = {
						top: P.pageY,
						left: P.pageX
					}
				} else {
					Z = X.outerWidth();
					T = X.outerHeight();
					U = X.offset()
				}
			}
		}
		S = J.extend({}, U);
		J.each(["my", "at"], function() {
			var b = (W[this] || "").split(" "),
				a, c;
			if (b.length === 1) {
				b = G.test(b[0]) ? b.concat(["center"]) : B.test(b[0]) ? ["center"].concat(b) : ["center", "center"]
			}
			b[0] = G.test(b[0]) ? b[0] : "center";
			b[1] = B.test(b[1]) ? b[1] : "center";
			a = F.exec(b[0]);
			c = F.exec(b[1]);
			V[this] = [a ? a[0] : 0, c ? c[0] : 0];
			W[this] = [K.exec(b[0])[0], K.exec(b[1])[0]]
		});
		if (Q.length === 1) {
			Q[1] = Q[0]
		}
		if (W.at[0] === "right") {
			S.left += Z
		} else {
			if (W.at[0] === "center") {
				S.left += Z / 2
			}
		}
		if (W.at[1] === "bottom") {
			S.top += T
		} else {
			if (W.at[1] === "center") {
				S.top += T / 2
			}
		}
		O = M(V.at, Z, T);
		S.left += O[0];
		S.top += O[1];
		return this.each(function() {
			var a, h, d = J(this),
				j = d.outerWidth(),
				c = d.outerHeight(),
				k = H(this, "marginLeft"),
				g = H(this, "marginTop"),
				e = j + k + H(this, "marginRight") + R.width,
				b = c + g + H(this, "marginBottom") + R.height,
				f = J.extend({}, S),
				i = M(V.my, d.outerWidth(), d.outerHeight());
			if (W.my[0] === "right") {
				f.left -= j
			} else {
				if (W.my[0] === "center") {
					f.left -= j / 2
				}
			}
			if (W.my[1] === "bottom") {
				f.top -= c
			} else {
				if (W.my[1] === "center") {
					f.top -= c / 2
				}
			}
			f.left += i[0];
			f.top += i[1];
			if (!J.support.offsetFractions) {
				f.left = D(f.left);
				f.top = D(f.top)
			}
			a = {
				marginLeft: k,
				marginTop: g
			};
			J.each(["left", "top"], function(m, l) {
				if (J.ui.position[Q[m]]) {
					J.ui.position[Q[m]][l](f, {
						targetWidth: Z,
						targetHeight: T,
						elemWidth: j,
						elemHeight: c,
						collisionPosition: a,
						collisionWidth: e,
						collisionHeight: b,
						offset: [O[0] + i[0], O[1] + i[1]],
						my: W.my,
						at: W.at,
						within: Y,
						elem: d
					})
				}
			});
			if (J.fn.bgiframe) {
				d.bgiframe()
			}
			if (W.using) {
				h = function(o) {
					var m = U.left - f.left,
						l = m + Z - j,
						n = U.top - f.top,
						q = n + T - c,
						p = {
							target: {
								element: X,
								left: U.left,
								top: U.top,
								width: Z,
								height: T
							},
							element: {
								element: d,
								left: f.left,
								top: f.top,
								width: j,
								height: c
							},
							horizontal: l < 0 ? "left" : m > 0 ? "right" : "center",
							vertical: q < 0 ? "top" : n > 0 ? "bottom" : "middle"
						};
					if (Z < j && L(m + l) < Z) {
						p.horizontal = "center"
					}
					if (T < c && L(n + q) < T) {
						p.vertical = "middle"
					}
					if (C(L(m), L(l)) > C(L(n), L(q))) {
						p.important = "horizontal"
					} else {
						p.important = "vertical"
					}
					W.using.call(this, o, p)
				}
			}
			d.offset(J.extend(f, {
				using: h
			}))
		})
	};
	J.ui.position = {
		fit: {
			left: function(V, P) {
				var W = P.within,
					O = W.isWindow ? W.scrollLeft : W.offset.left,
					R = W.width,
					U = V.left - P.collisionPosition.marginLeft,
					Q = O - U,
					S = U + P.collisionWidth - R - O,
					T;
				if (P.collisionWidth > R) {
					if (Q > 0 && S <= 0) {
						T = V.left + Q + P.collisionWidth - R - O;
						V.left += Q - T
					} else {
						if (S > 0 && Q <= 0) {
							V.left = O
						} else {
							if (Q > S) {
								V.left = O + R - P.collisionWidth
							} else {
								V.left = O
							}
						}
					}
				} else {
					if (Q > 0) {
						V.left += Q
					} else {
						if (S > 0) {
							V.left -= S
						} else {
							V.left = C(V.left - U, V.left)
						}
					}
				}
			},
			top: function(V, Q) {
				var W = Q.within,
					P = W.isWindow ? W.scrollTop : W.offset.top,
					T = Q.within.height,
					R = V.top - Q.collisionPosition.marginTop,
					U = P - R,
					S = R + Q.collisionHeight - T - P,
					O;
				if (Q.collisionHeight > T) {
					if (U > 0 && S <= 0) {
						O = V.top + U + Q.collisionHeight - T - P;
						V.top += U - O
					} else {
						if (S > 0 && U <= 0) {
							V.top = P
						} else {
							if (U > S) {
								V.top = P + T - Q.collisionHeight
							} else {
								V.top = P
							}
						}
					}
				} else {
					if (U > 0) {
						V.top += U
					} else {
						if (S > 0) {
							V.top -= S
						} else {
							V.top = C(V.top - R, V.top)
						}
					}
				}
			}
		},
		flip: {
			left: function(Z, S) {
				var b = S.within,
					P = b.offset.left + b.scrollLeft,
					U = b.width,
					O = b.isWindow ? b.scrollLeft : b.offset.left,
					Y = Z.left - S.collisionPosition.marginLeft,
					T = Y - O,
					V = Y + S.collisionWidth - U - O,
					W = S.my[0] === "left" ? -S.elemWidth : S.my[0] === "right" ? S.elemWidth : 0,
					R = S.at[0] === "left" ? S.targetWidth : S.at[0] === "right" ? -S.targetWidth : 0,
					Q = -2 * S.offset[0],
					X, a;
				if (T < 0) {
					X = Z.left + W + R + Q + S.collisionWidth - U - P;
					if (X < 0 || X < L(T)) {
						Z.left += W + R + Q
					}
				} else {
					if (V > 0) {
						a = Z.left - S.collisionPosition.marginLeft + W + R + Q - O;
						if (a > 0 || L(a) < V) {
							Z.left += W + R + Q
						}
					}
				}
			},
			top: function(Z, S) {
				var a = S.within,
					Q = a.offset.top + a.scrollTop,
					X = a.height,
					c = a.isWindow ? a.scrollTop : a.offset.top,
					T = Z.top - S.collisionPosition.marginTop,
					Y = T - c,
					V = T + S.collisionHeight - X - c,
					U = S.my[1] === "top",
					W = U ? -S.elemHeight : S.my[1] === "bottom" ? S.elemHeight : 0,
					O = S.at[1] === "top" ? S.targetHeight : S.at[1] === "bottom" ? -S.targetHeight : 0,
					R = -2 * S.offset[1],
					b, P;
				if (Y < 0) {
					P = Z.top + W + O + R + S.collisionHeight - X - Q;
					if ((Z.top + W + O + R) > Y && (P < 0 || P < L(Y))) {
						Z.top += W + O + R
					}
				} else {
					if (V > 0) {
						b = Z.top - S.collisionPosition.marginTop + W + O + R - c;
						if ((Z.top + W + O + R) > V && (b > 0 || L(b) < V)) {
							Z.top += W + O + R
						}
					}
				}
			}
		},
		flipfit: {
			left: function() {
				J.ui.position.flip.left.apply(this, arguments);
				J.ui.position.fit.left.apply(this, arguments)
			},
			top: function() {
				J.ui.position.flip.top.apply(this, arguments);
				J.ui.position.fit.top.apply(this, arguments)
			}
		}
	};
	(function() {
		var O, P, Q, T, R, S = document.getElementsByTagName("body")[0],
			U = document.createElement("div");
		O = document.createElement(S ? "div" : "body");
		Q = {
			visibility: "hidden",
			width: 0,
			height: 0,
			border: 0,
			margin: 0,
			background: "none"
		};
		if (S) {
			J.extend(Q, {
				position: "absolute",
				left: "-1000px",
				top: "-1000px"
			})
		}
		for (R in Q) {
			O.style[R] = Q[R]
		}
		O.appendChild(U);
		P = S || document.documentElement;
		P.insertBefore(O, P.firstChild);
		U.style.cssText = "position: absolute; left: 10.7432222px;";
		T = J(U).offset().left;
		J.support.offsetFractions = T > 10 && T < 11;
		O.innerHTML = "";
		P.removeChild(O)
	})();
	if (J.uiBackCompat !== false) {
		(function(P) {
			var O = P.fn.position;
			P.fn.position = function(R) {
				if (!R || !R.offset) {
					return O.call(this, R)
				}
				var Q = R.offset.split(" "),
					S = R.at.split(" ");
				if (Q.length === 1) {
					Q[1] = Q[0]
				}
				if (/^\d/.test(Q[0])) {
					Q[0] = "+" + Q[0]
				}
				if (/^\d/.test(Q[1])) {
					Q[1] = "+" + Q[1]
				}
				if (S.length === 1) {
					if (/left|center|right/.test(S[0])) {
						S[1] = "center"
					} else {
						S[1] = S[0];
						S[0] = "center"
					}
				}
				return O.call(this, P.extend(R, {
					at: S[0] + Q[0] + " " + S[1] + Q[1],
					offset: A
				}))
			}
		}(jQuery))
	}
}(jQuery));
(function(B, A) {
	B.widget("ui.progressbar", {
		version: "1.9.2",
		options: {
			value: 0,
			max: 100
		},
		min: 0,
		_create: function() {
			this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
				role: "progressbar",
				"aria-valuemin": this.min,
				"aria-valuemax": this.options.max,
				"aria-valuenow": this._value()
			});
			this.valueDiv = B("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
			this.oldValue = this._value();
			this._refreshValue()
		},
		_destroy: function() {
			this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
			this.valueDiv.remove()
		},
		value: function(C) {
			if (C === A) {
				return this._value()
			}
			this._setOption("value", C);
			return this
		},
		_setOption: function(C, D) {
			if (C === "value") {
				this.options.value = D;
				this._refreshValue();
				if (this._value() === this.options.max) {
					this._trigger("complete")
				}
			}
			this._super(C, D)
		},
		_value: function() {
			var C = this.options.value;
			if (typeof C !== "number") {
				C = 0
			}
			return Math.min(this.options.max, Math.max(this.min, C))
		},
		_percentage: function() {
			return 100 * this._value() / this.options.max
		},
		_refreshValue: function() {
			var D = this.value(),
				C = this._percentage();
			if (this.oldValue !== D) {
				this.oldValue = D;
				this._trigger("change")
			}
			this.valueDiv.toggle(D > this.min).toggleClass("ui-corner-right", D === this.options.max).width(C.toFixed(0) + "%");
			this.element.attr("aria-valuenow", D)
		}
	})
})(jQuery);
(function(C, B) {
	var A = 5;
	C.widget("ui.slider", C.ui.mouse, {
		version: "1.9.2",
		widgetEventPrefix: "slide",
		options: {
			animate: false,
			distance: 0,
			max: 100,
			min: 0,
			orientation: "horizontal",
			range: false,
			step: 1,
			value: 0,
			values: null
		},
		_create: function() {
			var E, G, F = this.options,
				I = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
				D = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
				H = [];
			this._keySliding = false;
			this._mouseSliding = false;
			this._animateOff = true;
			this._handleIndex = null;
			this._detectOrientation();
			this._mouseInit();
			this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all" + (F.disabled ? " ui-slider-disabled ui-disabled" : ""));
			this.range = C([]);
			if (F.range) {
				if (F.range === true) {
					if (!F.values) {
						F.values = [this._valueMin(), this._valueMin()]
					}
					if (F.values.length && F.values.length !== 2) {
						F.values = [F.values[0], F.values[0]]
					}
				}
				this.range = C("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + ((F.range === "min" || F.range === "max") ? " ui-slider-range-" + F.range : ""))
			}
			G = (F.values && F.values.length) || 1;
			for (E = I.length; E < G; E++) {
				H.push(D)
			}
			this.handles = I.add(C(H.join("")).appendTo(this.element));
			this.handle = this.handles.eq(0);
			this.handles.add(this.range).filter("a").click(function(J) {
				J.preventDefault()
			}).mouseenter(function() {
				if (!F.disabled) {
					C(this).addClass("ui-state-hover")
				}
			}).mouseleave(function() {
				C(this).removeClass("ui-state-hover")
			}).focus(function() {
				if (!F.disabled) {
					C(".ui-slider .ui-state-focus").removeClass("ui-state-focus");
					C(this).addClass("ui-state-focus")
				} else {
					C(this).blur()
				}
			}).blur(function() {
				C(this).removeClass("ui-state-focus")
			});
			this.handles.each(function(J) {
				C(this).data("ui-slider-handle-index", J)
			});
			this._on(this.handles, {
				keydown: function(N) {
					var L, M, K, J, O = C(N.target).data("ui-slider-handle-index");
					switch (N.keyCode) {
					case C.ui.keyCode.HOME:
					case C.ui.keyCode.END:
					case C.ui.keyCode.PAGE_UP:
					case C.ui.keyCode.PAGE_DOWN:
					case C.ui.keyCode.UP:
					case C.ui.keyCode.RIGHT:
					case C.ui.keyCode.DOWN:
					case C.ui.keyCode.LEFT:
						N.preventDefault();
						if (!this._keySliding) {
							this._keySliding = true;
							C(N.target).addClass("ui-state-active");
							L = this._start(N, O);
							if (L === false) {
								return
							}
						}
						break
					}
					J = this.options.step;
					if (this.options.values && this.options.values.length) {
						M = K = this.values(O)
					} else {
						M = K = this.value()
					}
					switch (N.keyCode) {
					case C.ui.keyCode.HOME:
						K = this._valueMin();
						break;
					case C.ui.keyCode.END:
						K = this._valueMax();
						break;
					case C.ui.keyCode.PAGE_UP:
						K = this._trimAlignValue(M + ((this._valueMax() - this._valueMin()) / A));
						break;
					case C.ui.keyCode.PAGE_DOWN:
						K = this._trimAlignValue(M - ((this._valueMax() - this._valueMin()) / A));
						break;
					case C.ui.keyCode.UP:
					case C.ui.keyCode.RIGHT:
						if (M === this._valueMax()) {
							return
						}
						K = this._trimAlignValue(M + J);
						break;
					case C.ui.keyCode.DOWN:
					case C.ui.keyCode.LEFT:
						if (M === this._valueMin()) {
							return
						}
						K = this._trimAlignValue(M - J);
						break
					}
					this._slide(N, O, K)
				},
				keyup: function(J) {
					var K = C(J.target).data("ui-slider-handle-index");
					if (this._keySliding) {
						this._keySliding = false;
						this._stop(J, K);
						this._change(J, K);
						C(J.target).removeClass("ui-state-active")
					}
				}
			});
			this._refreshValue();
			this._animateOff = false
		},
		_destroy: function() {
			this.handles.remove();
			this.range.remove();
			this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all");
			this._mouseDestroy()
		},
		_mouseCapture: function(H) {
			var L, D, J, M, F, G, E, I, N = this,
				K = this.options;
			if (K.disabled) {
				return false
			}
			this.elementSize = {
				width: this.element.outerWidth(),
				height: this.element.outerHeight()
			};
			this.elementOffset = this.element.offset();
			L = {
				x: H.pageX,
				y: H.pageY
			};
			D = this._normValueFromMouse(L);
			J = this._valueMax() - this._valueMin() + 1;
			this.handles.each(function(O) {
				var P = Math.abs(D - N.values(O));
				if (J > P) {
					J = P;
					M = C(this);
					F = O
				}
			});
			if (K.range === true && this.values(1) === K.min) {
				F += 1;
				M = C(this.handles[F])
			}
			G = this._start(H, F);
			if (G === false) {
				return false
			}
			this._mouseSliding = true;
			this._handleIndex = F;
			M.addClass("ui-state-active").focus();
			E = M.offset();
			I = !C(H.target).parents().andSelf().is(".ui-slider-handle");
			this._clickOffset = I ? {
				left: 0,
				top: 0
			} : {
				left: H.pageX - E.left - (M.width() / 2),
				top: H.pageY - E.top - (M.height() / 2) - (parseInt(M.css("borderTopWidth"), 10) || 0) - (parseInt(M.css("borderBottomWidth"), 10) || 0) + (parseInt(M.css("marginTop"), 10) || 0)
			};
			if (!this.handles.hasClass("ui-state-hover")) {
				this._slide(H, F, D)
			}
			this._animateOff = true;
			return true
		},
		_mouseStart: function() {
			return true
		},
		_mouseDrag: function(E) {
			var D = {
				x: E.pageX,
				y: E.pageY
			},
				F = this._normValueFromMouse(D);
			this._slide(E, this._handleIndex, F);
			return false
		},
		_mouseStop: function(D) {
			this.handles.removeClass("ui-state-active");
			this._mouseSliding = false;
			this._stop(D, this._handleIndex);
			this._change(D, this._handleIndex);
			this._handleIndex = null;
			this._clickOffset = null;
			this._animateOff = false;
			return false
		},
		_detectOrientation: function() {
			this.orientation = (this.options.orientation === "vertical") ? "vertical" : "horizontal"
		},
		_normValueFromMouse: function(G) {
			var I, E, H, F, D;
			if (this.orientation === "horizontal") {
				I = this.elementSize.width;
				E = G.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)
			} else {
				I = this.elementSize.height;
				E = G.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)
			}
			H = (E / I);
			if (H > 1) {
				H = 1
			}
			if (H < 0) {
				H = 0
			}
			if (this.orientation === "vertical") {
				H = 1 - H
			}
			F = this._valueMax() - this._valueMin();
			D = this._valueMin() + H * F;
			return this._trimAlignValue(D)
		},
		_start: function(D, E) {
			var F = {
				handle: this.handles[E],
				value: this.value()
			};
			if (this.options.values && this.options.values.length) {
				F.value = this.values(E);
				F.values = this.values()
			}
			return this._trigger("start", D, F)
		},
		_slide: function(G, H, F) {
			var D, I, E;
			if (this.options.values && this.options.values.length) {
				D = this.values(H ? 0 : 1);
				if ((this.options.values.length === 2 && this.options.range === true) && ((H === 0 && F > D) || (H === 1 && F < D))) {
					F = D
				}
				if (F !== this.values(H)) {
					I = this.values();
					I[H] = F;
					E = this._trigger("slide", G, {
						handle: this.handles[H],
						value: F,
						values: I
					});
					D = this.values(H ? 0 : 1);
					if (E !== false) {
						this.values(H, F, true)
					}
				}
			} else {
				if (F !== this.value()) {
					E = this._trigger("slide", G, {
						handle: this.handles[H],
						value: F
					});
					if (E !== false) {
						this.value(F)
					}
				}
			}
		},
		_stop: function(D, E) {
			var F = {
				handle: this.handles[E],
				value: this.value()
			};
			if (this.options.values && this.options.values.length) {
				F.value = this.values(E);
				F.values = this.values()
			}
			this._trigger("stop", D, F)
		},
		_change: function(D, E) {
			if (!this._keySliding && !this._mouseSliding) {
				var F = {
					handle: this.handles[E],
					value: this.value()
				};
				if (this.options.values && this.options.values.length) {
					F.value = this.values(E);
					F.values = this.values()
				}
				this._trigger("change", D, F)
			}
		},
		value: function(D) {
			if (arguments.length) {
				this.options.value = this._trimAlignValue(D);
				this._refreshValue();
				this._change(null, 0);
				return
			}
			return this._value()
		},
		values: function(F, H) {
			var G, D, E;
			if (arguments.length > 1) {
				this.options.values[F] = this._trimAlignValue(H);
				this._refreshValue();
				this._change(null, F);
				return
			}
			if (arguments.length) {
				if (C.isArray(arguments[0])) {
					G = this.options.values;
					D = arguments[0];
					for (E = 0; E < G.length; E += 1) {
						G[E] = this._trimAlignValue(D[E]);
						this._change(null, E)
					}
					this._refreshValue()
				} else {
					if (this.options.values && this.options.values.length) {
						return this._values(F)
					} else {
						return this.value()
					}
				}
			} else {
				return this._values()
			}
		},
		_setOption: function(D, G) {
			var E, F = 0;
			if (C.isArray(this.options.values)) {
				F = this.options.values.length
			}
			C.Widget.prototype._setOption.apply(this, arguments);
			switch (D) {
			case "disabled":
				if (G) {
					this.handles.filter(".ui-state-focus").blur();
					this.handles.removeClass("ui-state-hover");
					this.handles.prop("disabled", true);
					this.element.addClass("ui-disabled")
				} else {
					this.handles.prop("disabled", false);
					this.element.removeClass("ui-disabled")
				}
				break;
			case "orientation":
				this._detectOrientation();
				this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
				this._refreshValue();
				break;
			case "value":
				this._animateOff = true;
				this._refreshValue();
				this._change(null, 0);
				this._animateOff = false;
				break;
			case "values":
				this._animateOff = true;
				this._refreshValue();
				for (E = 0; E < F; E += 1) {
					this._change(null, E)
				}
				this._animateOff = false;
				break;
			case "min":
			case "max":
				this._animateOff = true;
				this._refreshValue();
				this._animateOff = false;
				break
			}
		},
		_value: function() {
			var D = this.options.value;
			D = this._trimAlignValue(D);
			return D
		},
		_values: function(E) {
			var F, G, D;
			if (arguments.length) {
				F = this.options.values[E];
				F = this._trimAlignValue(F);
				return F
			} else {
				G = this.options.values.slice();
				for (D = 0; D < G.length; D += 1) {
					G[D] = this._trimAlignValue(G[D])
				}
				return G
			}
		},
		_trimAlignValue: function(G) {
			if (G <= this._valueMin()) {
				return this._valueMin()
			}
			if (G >= this._valueMax()) {
				return this._valueMax()
			}
			var D = (this.options.step > 0) ? this.options.step : 1,
				E = (G - this._valueMin()) % D,
				F = G - E;
			if (Math.abs(E) * 2 >= D) {
				F += (E > 0) ? D : (-D)
			}
			return parseFloat(F.toFixed(5))
		},
		_valueMin: function() {
			return this.options.min
		},
		_valueMax: function() {
			return this.options.max
		},
		_refreshValue: function() {
			var D, F, J, I, G, H = this.options.range,
				L = this.options,
				K = this,
				M = (!this._animateOff) ? L.animate : false,
				E = {};
			if (this.options.values && this.options.values.length) {
				this.handles.each(function(N) {
					F = (K.values(N) - K._valueMin()) / (K._valueMax() - K._valueMin()) * 100;
					E[K.orientation === "horizontal" ? "left" : "bottom"] = F + "%";
					C(this).stop(1, 1)[M ? "animate" : "css"](E, L.animate);
					if (K.options.range === true) {
						if (K.orientation === "horizontal") {
							if (N === 0) {
								K.range.stop(1, 1)[M ? "animate" : "css"]({
									left: F + "%"
								}, L.animate)
							}
							if (N === 1) {
								K.range[M ? "animate" : "css"]({
									width: (F - D) + "%"
								}, {
									queue: false,
									duration: L.animate
								})
							}
						} else {
							if (N === 0) {
								K.range.stop(1, 1)[M ? "animate" : "css"]({
									bottom: (F) + "%"
								}, L.animate)
							}
							if (N === 1) {
								K.range[M ? "animate" : "css"]({
									height: (F - D) + "%"
								}, {
									queue: false,
									duration: L.animate
								})
							}
						}
					}
					D = F
				})
			} else {
				J = this.value();
				I = this._valueMin();
				G = this._valueMax();
				F = (G !== I) ? (J - I) / (G - I) * 100 : 0;
				E[this.orientation === "horizontal" ? "left" : "bottom"] = F + "%";
				this.handle.stop(1, 1)[M ? "animate" : "css"](E, L.animate);
				if (H === "min" && this.orientation === "horizontal") {
					this.range.stop(1, 1)[M ? "animate" : "css"]({
						width: F + "%"
					}, L.animate)
				}
				if (H === "max" && this.orientation === "horizontal") {
					this.range[M ? "animate" : "css"]({
						width: (100 - F) + "%"
					}, {
						queue: false,
						duration: L.animate
					})
				}
				if (H === "min" && this.orientation === "vertical") {
					this.range.stop(1, 1)[M ? "animate" : "css"]({
						height: F + "%"
					}, L.animate)
				}
				if (H === "max" && this.orientation === "vertical") {
					this.range[M ? "animate" : "css"]({
						height: (100 - F) + "%"
					}, {
						queue: false,
						duration: L.animate
					})
				}
			}
		}
	})
}(jQuery));
(function(B) {
	function A(C) {
		return function() {
			var D = this.element.val();
			C.apply(this, arguments);
			this._refresh();
			if (D !== this.element.val()) {
				this._trigger("change")
			}
		}
	}
	B.widget("ui.spinner", {
		version: "1.9.2",
		defaultElement: "<input>",
		widgetEventPrefix: "spin",
		options: {
			culture: null,
			icons: {
				down: "ui-icon-triangle-1-s",
				up: "ui-icon-triangle-1-n"
			},
			incremental: true,
			max: null,
			min: null,
			numberFormat: null,
			page: 10,
			step: 1,
			change: null,
			spin: null,
			start: null,
			stop: null
		},
		_create: function() {
			this._setOption("max", this.options.max);
			this._setOption("min", this.options.min);
			this._setOption("step", this.options.step);
			this._value(this.element.val(), true);
			this._draw();
			this._on(this._events);
			this._refresh();
			this._on(this.window, {
				beforeunload: function() {
					this.element.removeAttr("autocomplete")
				}
			})
		},
		_getCreateOptions: function() {
			var C = {},
				D = this.element;
			B.each(["min", "max", "step"], function(E, F) {
				var G = D.attr(F);
				if (G !== undefined && G.length) {
					C[F] = G
				}
			});
			return C
		},
		_events: {
			keydown: function(C) {
				if (this._start(C) && this._keydown(C)) {
					C.preventDefault()
				}
			},
			keyup: "_stop",
			focus: function() {
				this.previous = this.element.val()
			},
			blur: function(C) {
				if (this.cancelBlur) {
					delete this.cancelBlur;
					return
				}
				this._refresh();
				if (this.previous !== this.element.val()) {
					this._trigger("change", C)
				}
			},
			mousewheel: function(D, C) {
				if (!C) {
					return
				}
				if (!this.spinning && !this._start(D)) {
					return false
				}
				this._spin((C > 0 ? 1 : -1) * this.options.step, D);
				clearTimeout(this.mousewheelTimer);
				this.mousewheelTimer = this._delay(function() {
					if (this.spinning) {
						this._stop(D)
					}
				}, 100);
				D.preventDefault()
			},
			"mousedown .ui-spinner-button": function(D) {
				var E;
				E = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val();

				function C() {
					var F = this.element[0] === this.document[0].activeElement;
					if (!F) {
						this.element.focus();
						this.previous = E;
						this._delay(function() {
							this.previous = E
						})
					}
				}
				D.preventDefault();
				C.call(this);
				this.cancelBlur = true;
				this._delay(function() {
					delete this.cancelBlur;
					C.call(this)
				});
				if (this._start(D) === false) {
					return
				}
				this._repeat(null, B(D.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, D)
			},
			"mouseup .ui-spinner-button": "_stop",
			"mouseenter .ui-spinner-button": function(C) {
				if (!B(C.currentTarget).hasClass("ui-state-active")) {
					return
				}
				if (this._start(C) === false) {
					return false
				}
				this._repeat(null, B(C.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, C)
			},
			"mouseleave .ui-spinner-button": "_stop"
		},
		_draw: function() {
			var C = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
			this.element.attr("role", "spinbutton");
			this.buttons = C.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all");
			if (this.buttons.height() > Math.ceil(C.height() * 0.5) && C.height() > 0) {
				C.height(C.height())
			}
			if (this.options.disabled) {
				this.disable()
			}
		},
		_keydown: function(D) {
			var C = this.options,
				E = B.ui.keyCode;
			switch (D.keyCode) {
			case E.UP:
				this._repeat(null, 1, D);
				return true;
			case E.DOWN:
				this._repeat(null, -1, D);
				return true;
			case E.PAGE_UP:
				this._repeat(null, C.page, D);
				return true;
			case E.PAGE_DOWN:
				this._repeat(null, -C.page, D);
				return true
			}
			return false
		},
		_uiSpinnerHtml: function() {
			return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
		},
		_buttonHtml: function() {
			return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
		},
		_start: function(C) {
			if (!this.spinning && this._trigger("start", C) === false) {
				return false
			}
			if (!this.counter) {
				this.counter = 1
			}
			this.spinning = true;
			return true
		},
		_repeat: function(C, D, E) {
			C = C || 500;
			clearTimeout(this.timer);
			this.timer = this._delay(function() {
				this._repeat(40, D, E)
			}, C);
			this._spin(D * this.options.step, E)
		},
		_spin: function(C, D) {
			var E = this.value() || 0;
			if (!this.counter) {
				this.counter = 1
			}
			E = this._adjustValue(E + C * this._increment(this.counter));
			if (!this.spinning || this._trigger("spin", D, {
				value: E
			}) !== false) {
				this._value(E);
				this.counter++
			}
		},
		_increment: function(C) {
			var D = this.options.incremental;
			if (D) {
				return B.isFunction(D) ? D(C) : Math.floor(C * C * C / 50000 - C * C / 500 + 17 * C / 200 + 1)
			}
			return 1
		},
		_precision: function() {
			var C = this._precisionOf(this.options.step);
			if (this.options.min !== null) {
				C = Math.max(C, this._precisionOf(this.options.min))
			}
			return C
		},
		_precisionOf: function(D) {
			var C = D.toString(),
				E = C.indexOf(".");
			return E === -1 ? 0 : C.length - E - 1
		},
		_adjustValue: function(E) {
			var F, D, C = this.options;
			F = C.min !== null ? C.min : 0;
			D = E - F;
			D = Math.round(D / C.step) * C.step;
			E = F + D;
			E = parseFloat(E.toFixed(this._precision()));
			if (C.max !== null && E > C.max) {
				return C.max
			}
			if (C.min !== null && E < C.min) {
				return C.min
			}
			return E
		},
		_stop: function(C) {
			if (!this.spinning) {
				return
			}
			clearTimeout(this.timer);
			clearTimeout(this.mousewheelTimer);
			this.counter = 0;
			this.spinning = false;
			this._trigger("stop", C)
		},
		_setOption: function(D, E) {
			if (D === "culture" || D === "numberFormat") {
				var C = this._parse(this.element.val());
				this.options[D] = E;
				this.element.val(this._format(C));
				return
			}
			if (D === "max" || D === "min" || D === "step") {
				if (typeof E === "string") {
					E = this._parse(E)
				}
			}
			this._super(D, E);
			if (D === "disabled") {
				if (E) {
					this.element.prop("disabled", true);
					this.buttons.button("disable")
				} else {
					this.element.prop("disabled", false);
					this.buttons.button("enable")
				}
			}
		},
		_setOptions: A(function(C) {
			this._super(C);
			this._value(this.element.val())
		}),
		_parse: function(C) {
			if (typeof C === "string" && C !== "") {
				C = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(C, 10, this.options.culture) : +C
			}
			return C === "" || isNaN(C) ? null : C
		},
		_format: function(C) {
			if (C === "") {
				return ""
			}
			return window.Globalize && this.options.numberFormat ? Globalize.format(C, this.options.numberFormat, this.options.culture) : C
		},
		_refresh: function() {
			this.element.attr({
				"aria-valuemin": this.options.min,
				"aria-valuemax": this.options.max,
				"aria-valuenow": this._parse(this.element.val())
			})
		},
		_value: function(D, E) {
			var C;
			if (D !== "") {
				C = this._parse(D);
				if (C !== null) {
					if (!E) {
						C = this._adjustValue(C)
					}
					D = this._format(C)
				}
			}
			this.element.val(D);
			this._refresh()
		},
		_destroy: function() {
			this.element.removeClass("ui-spinner-input").prop("disabled", false).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
			this.uiSpinner.replaceWith(this.element)
		},
		stepUp: A(function(C) {
			this._stepUp(C)
		}),
		_stepUp: function(C) {
			this._spin((C || 1) * this.options.step)
		},
		stepDown: A(function(C) {
			this._stepDown(C)
		}),
		_stepDown: function(C) {
			this._spin((C || 1) * -this.options.step)
		},
		pageUp: A(function(C) {
			this._stepUp((C || 1) * this.options.page)
		}),
		pageDown: A(function(C) {
			this._stepDown((C || 1) * this.options.page)
		}),
		value: function(C) {
			if (!arguments.length) {
				return this._parse(this.element.val())
			}
			A(this._value).call(this, C)
		},
		widget: function() {
			return this.uiSpinner
		}
	})
}(jQuery));
(function(F, D) {
	var E = 0,
		B = /#.*$/;

	function C() {
		return ++E
	}
	function A(G) {
		return G.hash.length > 1 && G.href.replace(B, "") === location.href.replace(B, "").replace(/\s/g, "%20")
	}
	F.widget("ui.tabs", {
		version: "1.9.2",
		delay: 300,
		options: {
			active: null,
			collapsible: false,
			event: "click",
			heightStyle: "content",
			hide: null,
			show: null,
			activate: null,
			beforeActivate: null,
			beforeLoad: null,
			load: null
		},
		_create: function() {
			var G = this,
				H = this.options,
				I = H.active,
				J = location.hash.substring(1);
			this.running = false;
			this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", H.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(K) {
				if (F(this).is(".ui-state-disabled")) {
					K.preventDefault()
				}
			}).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
				if (F(this).closest("li").is(".ui-state-disabled")) {
					this.blur()
				}
			});
			this._processTabs();
			if (I === null) {
				if (J) {
					this.tabs.each(function(K, L) {
						if (F(L).attr("aria-controls") === J) {
							I = K;
							return false
						}
					})
				}
				if (I === null) {
					I = this.tabs.index(this.tabs.filter(".ui-tabs-active"))
				}
				if (I === null || I === -1) {
					I = this.tabs.length ? 0 : false
				}
			}
			if (I !== false) {
				I = this.tabs.index(this.tabs.eq(I));
				if (I === -1) {
					I = H.collapsible ? false : 0
				}
			}
			H.active = I;
			if (!H.collapsible && H.active === false && this.anchors.length) {
				H.active = 0
			}
			if (F.isArray(H.disabled)) {
				H.disabled = F.unique(H.disabled.concat(F.map(this.tabs.filter(".ui-state-disabled"), function(K) {
					return G.tabs.index(K)
				}))).sort()
			}
			if (this.options.active !== false && this.anchors.length) {
				this.active = this._findActive(this.options.active)
			} else {
				this.active = F()
			}
			this._refresh();
			if (this.active.length) {
				this.load(H.active)
			}
		},
		_getCreateEventData: function() {
			return {
				tab: this.active,
				panel: !this.active.length ? F() : this._getPanelForTab(this.active)
			}
		},
		_tabKeydown: function(I) {
			var J = F(this.document[0].activeElement).closest("li"),
				H = this.tabs.index(J),
				G = true;
			if (this._handlePageNav(I)) {
				return
			}
			switch (I.keyCode) {
			case F.ui.keyCode.RIGHT:
			case F.ui.keyCode.DOWN:
				H++;
				break;
			case F.ui.keyCode.UP:
			case F.ui.keyCode.LEFT:
				G = false;
				H--;
				break;
			case F.ui.keyCode.END:
				H = this.anchors.length - 1;
				break;
			case F.ui.keyCode.HOME:
				H = 0;
				break;
			case F.ui.keyCode.SPACE:
				I.preventDefault();
				clearTimeout(this.activating);
				this._activate(H);
				return;
			case F.ui.keyCode.ENTER:
				I.preventDefault();
				clearTimeout(this.activating);
				this._activate(H === this.options.active ? false : H);
				return;
			default:
				return
			}
			I.preventDefault();
			clearTimeout(this.activating);
			H = this._focusNextTab(H, G);
			if (!I.ctrlKey) {
				J.attr("aria-selected", "false");
				this.tabs.eq(H).attr("aria-selected", "true");
				this.activating = this._delay(function() {
					this.option("active", H)
				}, this.delay)
			}
		},
		_panelKeydown: function(G) {
			if (this._handlePageNav(G)) {
				return
			}
			if (G.ctrlKey && G.keyCode === F.ui.keyCode.UP) {
				G.preventDefault();
				this.active.focus()
			}
		},
		_handlePageNav: function(G) {
			if (G.altKey && G.keyCode === F.ui.keyCode.PAGE_UP) {
				this._activate(this._focusNextTab(this.options.active - 1, false));
				return true
			}
			if (G.altKey && G.keyCode === F.ui.keyCode.PAGE_DOWN) {
				this._activate(this._focusNextTab(this.options.active + 1, true));
				return true
			}
		},
		_findNextTab: function(H, G) {
			var I = this.tabs.length - 1;

			function J() {
				if (H > I) {
					H = 0
				}
				if (H < 0) {
					H = I
				}
				return H
			}
			while (F.inArray(J(), this.options.disabled) !== -1) {
				H = G ? H + 1 : H - 1
			}
			return H
		},
		_focusNextTab: function(H, G) {
			H = this._findNextTab(H, G);
			this.tabs.eq(H).focus();
			return H
		},
		_setOption: function(G, H) {
			if (G === "active") {
				this._activate(H);
				return
			}
			if (G === "disabled") {
				this._setupDisabled(H);
				return
			}
			this._super(G, H);
			if (G === "collapsible") {
				this.element.toggleClass("ui-tabs-collapsible", H);
				if (!H && this.options.active === false) {
					this._activate(0)
				}
			}
			if (G === "event") {
				this._setupEvents(H)
			}
			if (G === "heightStyle") {
				this._setupHeightStyle(H)
			}
		},
		_tabId: function(G) {
			return G.attr("aria-controls") || "ui-tabs-" + C()
		},
		_sanitizeSelector: function(G) {
			return G ? G.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
		},
		refresh: function() {
			var H = this.options,
				G = this.tablist.children(":has(a[href])");
			H.disabled = F.map(G.filter(".ui-state-disabled"), function(I) {
				return G.index(I)
			});
			this._processTabs();
			if (H.active === false || !this.anchors.length) {
				H.active = false;
				this.active = F()
			} else {
				if (this.active.length && !F.contains(this.tablist[0], this.active[0])) {
					if (this.tabs.length === H.disabled.length) {
						H.active = false;
						this.active = F()
					} else {
						this._activate(this._findNextTab(Math.max(0, H.active - 1), false))
					}
				} else {
					H.active = this.tabs.index(this.active)
				}
			}
			this._refresh()
		},
		_refresh: function() {
			this._setupDisabled(this.options.disabled);
			this._setupEvents(this.options.event);
			this._setupHeightStyle(this.options.heightStyle);
			this.tabs.not(this.active).attr({
				"aria-selected": "false",
				tabIndex: -1
			});
			this.panels.not(this._getPanelForTab(this.active)).hide().attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			});
			if (!this.active.length) {
				this.tabs.eq(0).attr("tabIndex", 0)
			} else {
				this.active.addClass("ui-tabs-active ui-state-active").attr({
					"aria-selected": "true",
					tabIndex: 0
				});
				this._getPanelForTab(this.active).show().attr({
					"aria-expanded": "true",
					"aria-hidden": "false"
				})
			}
		},
		_processTabs: function() {
			var G = this;
			this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist");
			this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
				role: "tab",
				tabIndex: -1
			});
			this.anchors = this.tabs.map(function() {
				return F("a", this)[0]
			}).addClass("ui-tabs-anchor").attr({
				role: "presentation",
				tabIndex: -1
			});
			this.panels = F();
			this.anchors.each(function(M, H) {
				var N, O, K, J = F(H).uniqueId().attr("id"),
					L = F(H).closest("li"),
					I = L.attr("aria-controls");
				if (A(H)) {
					N = H.hash;
					O = G.element.find(G._sanitizeSelector(N))
				} else {
					K = G._tabId(L);
					N = "#" + K;
					O = G.element.find(N);
					if (!O.length) {
						O = G._createPanel(K);
						O.insertAfter(G.panels[M - 1] || G.tablist)
					}
					O.attr("aria-live", "polite")
				}
				if (O.length) {
					G.panels = G.panels.add(O)
				}
				if (I) {
					L.data("ui-tabs-aria-controls", I)
				}
				L.attr({
					"aria-controls": N.substring(1),
					"aria-labelledby": J
				});
				O.attr("aria-labelledby", J)
			});
			this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
		},
		_getList: function() {
			return this.element.find("ol,ul").eq(0)
		},
		_createPanel: function(G) {
			return F("<div>").attr("id", G).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", true)
		},
		_setupDisabled: function(I) {
			if (F.isArray(I)) {
				if (!I.length) {
					I = false
				} else {
					if (I.length === this.anchors.length) {
						I = true
					}
				}
			}
			for (var G = 0, H;
			(H = this.tabs[G]); G++) {
				if (I === true || F.inArray(G, I) !== -1) {
					F(H).addClass("ui-state-disabled").attr("aria-disabled", "true")
				} else {
					F(H).removeClass("ui-state-disabled").removeAttr("aria-disabled")
				}
			}
			this.options.disabled = I
		},
		_setupEvents: function(G) {
			var H = {
				click: function(I) {
					I.preventDefault()
				}
			};
			if (G) {
				F.each(G.split(" "), function(J, I) {
					H[I] = "_eventHandler"
				})
			}
			this._off(this.anchors.add(this.tabs).add(this.panels));
			this._on(this.anchors, H);
			this._on(this.tabs, {
				keydown: "_tabKeydown"
			});
			this._on(this.panels, {
				keydown: "_panelKeydown"
			});
			this._focusable(this.tabs);
			this._hoverable(this.tabs)
		},
		_setupHeightStyle: function(J) {
			var I, G, H = this.element.parent();
			if (J === "fill") {
				if (!F.support.minHeight) {
					G = H.css("overflow");
					H.css("overflow", "hidden")
				}
				I = H.height();
				this.element.siblings(":visible").each(function() {
					var L = F(this),
						K = L.css("position");
					if (K === "absolute" || K === "fixed") {
						return
					}
					I -= L.outerHeight(true)
				});
				if (G) {
					H.css("overflow", G)
				}
				this.element.children().not(this.panels).each(function() {
					I -= F(this).outerHeight(true)
				});
				this.panels.each(function() {
					F(this).height(Math.max(0, I - F(this).innerHeight() + F(this).height()))
				}).css("overflow", "auto")
			} else {
				if (J === "auto") {
					I = 0;
					this.panels.each(function() {
						I = Math.max(I, F(this).height("").height())
					}).height(I)
				}
			}
		},
		_eventHandler: function(P) {
			var L = this.options,
				M = this.active,
				G = F(P.currentTarget),
				O = G.closest("li"),
				J = O[0] === M[0],
				I = J && L.collapsible,
				N = I ? F() : this._getPanelForTab(O),
				H = !M.length ? F() : this._getPanelForTab(M),
				K = {
					oldTab: M,
					oldPanel: H,
					newTab: I ? F() : O,
					newPanel: N
				};
			P.preventDefault();
			if (O.hasClass("ui-state-disabled") || O.hasClass("ui-tabs-loading") || this.running || (J && !L.collapsible) || (this._trigger("beforeActivate", P, K) === false)) {
				return
			}
			L.active = I ? false : this.tabs.index(O);
			this.active = J ? F() : O;
			if (this.xhr) {
				this.xhr.abort()
			}
			if (!H.length && !N.length) {
				F.error("jQuery UI Tabs: Mismatching fragment identifier.")
			}
			if (N.length) {
				this.load(this.tabs.index(O), P)
			}
			this._toggle(P, K)
		},
		_toggle: function(K, M) {
			var I = this,
				H = M.newPanel,
				J = M.oldPanel;
			this.running = true;

			function G() {
				I.running = false;
				I._trigger("activate", K, M)
			}
			function L() {
				M.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
				if (H.length && I.options.show) {
					I._show(H, I.options.show, G)
				} else {
					H.show();
					G()
				}
			}
			if (J.length && this.options.hide) {
				this._hide(J, this.options.hide, function() {
					M.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
					L()
				})
			} else {
				M.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
				J.hide();
				L()
			}
			J.attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			});
			M.oldTab.attr("aria-selected", "false");
			if (H.length && J.length) {
				M.oldTab.attr("tabIndex", -1)
			} else {
				if (H.length) {
					this.tabs.filter(function() {
						return F(this).attr("tabIndex") === 0
					}).attr("tabIndex", -1)
				}
			}
			H.attr({
				"aria-expanded": "true",
				"aria-hidden": "false"
			});
			M.newTab.attr({
				"aria-selected": "true",
				tabIndex: 0
			})
		},
		_activate: function(H) {
			var I, G = this._findActive(H);
			if (G[0] === this.active[0]) {
				return
			}
			if (!G.length) {
				G = this.active
			}
			I = G.find(".ui-tabs-anchor")[0];
			this._eventHandler({
				target: I,
				currentTarget: I,
				preventDefault: F.noop
			})
		},
		_findActive: function(G) {
			return G === false ? F() : this.tabs.eq(G)
		},
		_getIndex: function(G) {
			if (typeof G === "string") {
				G = this.anchors.index(this.anchors.filter("[href$='" + G + "']"))
			}
			return G
		},
		_destroy: function() {
			if (this.xhr) {
				this.xhr.abort()
			}
			this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
			this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
			this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeData("href.tabs").removeData("load.tabs").removeUniqueId();
			this.tabs.add(this.panels).each(function() {
				if (F.data(this, "ui-tabs-destroy")) {
					F(this).remove()
				} else {
					F(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
				}
			});
			this.tabs.each(function() {
				var G = F(this),
					H = G.data("ui-tabs-aria-controls");
				if (H) {
					G.attr("aria-controls", H)
				} else {
					G.removeAttr("aria-controls")
				}
			});
			this.panels.show();
			if (this.options.heightStyle !== "content") {
				this.panels.css("height", "")
			}
		},
		enable: function(G) {
			var H = this.options.disabled;
			if (H === false) {
				return
			}
			if (G === D) {
				H = false
			} else {
				G = this._getIndex(G);
				if (F.isArray(H)) {
					H = F.map(H, function(I) {
						return I !== G ? I : null
					})
				} else {
					H = F.map(this.tabs, function(J, I) {
						return I !== G ? I : null
					})
				}
			}
			this._setupDisabled(H)
		},
		disable: function(G) {
			var H = this.options.disabled;
			if (H === true) {
				return
			}
			if (G === D) {
				H = true
			} else {
				G = this._getIndex(G);
				if (F.inArray(G, H) !== -1) {
					return
				}
				if (F.isArray(H)) {
					H = F.merge([G], H).sort()
				} else {
					H = [G]
				}
			}
			this._setupDisabled(H)
		},
		load: function(K, J) {
			K = this._getIndex(K);
			var H = this,
				I = this.tabs.eq(K),
				L = I.find(".ui-tabs-anchor"),
				G = this._getPanelForTab(I),
				M = {
					tab: I,
					panel: G
				};
			if (A(L[0])) {
				return
			}
			this.xhr = F.ajax(this._ajaxSettings(L, J, M));
			if (this.xhr && this.xhr.statusText !== "canceled") {
				I.addClass("ui-tabs-loading");
				G.attr("aria-busy", "true");
				this.xhr.success(function(N) {
					setTimeout(function() {
						G.html(N);
						H._trigger("load", J, M)
					}, 1)
				}).complete(function(N, O) {
					setTimeout(function() {
						if (O === "abort") {
							H.panels.stop(false, true)
						}
						I.removeClass("ui-tabs-loading");
						G.removeAttr("aria-busy");
						if (N === H.xhr) {
							delete H.xhr
						}
					}, 1)
				})
			}
		},
		_ajaxSettings: function(I, H, J) {
			var G = this;
			return {
				url: I.attr("href"),
				beforeSend: function(K, L) {
					return G._trigger("beforeLoad", H, F.extend({
						jqXHR: K,
						ajaxSettings: L
					}, J))
				}
			}
		},
		_getPanelForTab: function(G) {
			var H = F(G).attr("aria-controls");
			return this.element.find(this._sanitizeSelector("#" + H))
		}
	});
	if (F.uiBackCompat !== false) {
		F.ui.tabs.prototype._ui = function(H, G) {
			return {
				tab: H,
				panel: G,
				index: this.anchors.index(H)
			}
		};
		F.widget("ui.tabs", F.ui.tabs, {
			url: function(H, G) {
				this.anchors.eq(H).attr("href", G)
			}
		});
		F.widget("ui.tabs", F.ui.tabs, {
			options: {
				ajaxOptions: null,
				cache: false
			},
			_create: function() {
				this._super();
				var G = this;
				this._on({
					tabsbeforeload: function(I, H) {
						if (F.data(H.tab[0], "cache.tabs")) {
							I.preventDefault();
							return
						}
						H.jqXHR.success(function() {
							if (G.options.cache) {
								F.data(H.tab[0], "cache.tabs", true)
							}
						})
					}
				})
			},
			_ajaxSettings: function(J, I, G) {
				var H = this.options.ajaxOptions;
				return F.extend({}, H, {
					error: function(L, K) {
						try {
							H.error(L, K, G.tab.closest("li").index(), G.tab[0])
						} catch (M) {}
					}
				}, this._superApply(arguments))
			},
			_setOption: function(G, H) {
				if (G === "cache" && H === false) {
					this.anchors.removeData("cache.tabs")
				}
				this._super(G, H)
			},
			_destroy: function() {
				this.anchors.removeData("cache.tabs");
				this._super()
			},
			url: function(G) {
				this.anchors.eq(G).removeData("cache.tabs");
				this._superApply(arguments)
			}
		});
		F.widget("ui.tabs", F.ui.tabs, {
			abort: function() {
				if (this.xhr) {
					this.xhr.abort()
				}
			}
		});
		F.widget("ui.tabs", F.ui.tabs, {
			options: {
				spinner: "<em>Loading&#8230;</em>"
			},
			_create: function() {
				this._super();
				this._on({
					tabsbeforeload: function(J, G) {
						if (J.target !== this.element[0] || !this.options.spinner) {
							return
						}
						var H = G.tab.find("span"),
							I = H.html();
						H.html(this.options.spinner);
						G.jqXHR.complete(function() {
							H.html(I)
						})
					}
				})
			}
		});
		F.widget("ui.tabs", F.ui.tabs, {
			options: {
				enable: null,
				disable: null
			},
			enable: function(H) {
				var G = this.options,
					I;
				if (H && G.disabled === true || (F.isArray(G.disabled) && F.inArray(H, G.disabled) !== -1)) {
					I = true
				}
				this._superApply(arguments);
				if (I) {
					this._trigger("enable", null, this._ui(this.anchors[H], this.panels[H]))
				}
			},
			disable: function(H) {
				var G = this.options,
					I;
				if (H && G.disabled === false || (F.isArray(G.disabled) && F.inArray(H, G.disabled) === -1)) {
					I = true
				}
				this._superApply(arguments);
				if (I) {
					this._trigger("disable", null, this._ui(this.anchors[H], this.panels[H]))
				}
			}
		});
		F.widget("ui.tabs", F.ui.tabs, {
			options: {
				add: null,
				remove: null,
				tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
			},
			add: function(N, J, G) {
				if (G === D) {
					G = this.anchors.length
				}
				var L, K, I = this.options,
					H = F(I.tabTemplate.replace(/#\{href\}/g, N).replace(/#\{label\}/g, J)),
					M = !N.indexOf("#") ? N.replace("#", "") : this._tabId(H);
				H.addClass("ui-state-default ui-corner-top").data("ui-tabs-destroy", true);
				H.attr("aria-controls", M);
				L = G >= this.tabs.length;
				K = this.element.find("#" + M);
				if (!K.length) {
					K = this._createPanel(M);
					if (L) {
						if (G > 0) {
							K.insertAfter(this.panels.eq(-1))
						} else {
							K.appendTo(this.element)
						}
					} else {
						K.insertBefore(this.panels[G])
					}
				}
				K.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").hide();
				if (L) {
					H.appendTo(this.tablist)
				} else {
					H.insertBefore(this.tabs[G])
				}
				I.disabled = F.map(I.disabled, function(O) {
					return O >= G ? ++O : O
				});
				this.refresh();
				if (this.tabs.length === 1 && I.active === false) {
					this.option("active", 0)
				}
				this._trigger("add", null, this._ui(this.anchors[G], this.panels[G]));
				return this
			},
			remove: function(J) {
				J = this._getIndex(J);
				var I = this.options,
					H = this.tabs.eq(J).remove(),
					G = this._getPanelForTab(H).remove();
				if (H.hasClass("ui-tabs-active") && this.anchors.length > 2) {
					this._activate(J + (J + 1 < this.anchors.length ? 1 : -1))
				}
				I.disabled = F.map(F.grep(I.disabled, function(K) {
					return K !== J
				}), function(K) {
					return K >= J ? --K : K
				});
				this.refresh();
				this._trigger("remove", null, this._ui(H.find("a")[0], G[0]));
				return this
			}
		});
		F.widget("ui.tabs", F.ui.tabs, {
			length: function() {
				return this.anchors.length
			}
		});
		F.widget("ui.tabs", F.ui.tabs, {
			options: {
				idPrefix: "ui-tabs-"
			},
			_tabId: function(G) {
				var H = G.is("li") ? G.find("a[href]") : G;
				H = H[0];
				return F(H).closest("li").attr("aria-controls") || H.title && H.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF\-]/g, "") || this.options.idPrefix + C()
			}
		});
		F.widget("ui.tabs", F.ui.tabs, {
			options: {
				panelTemplate: "<div></div>"
			},
			_createPanel: function(G) {
				return F(this.options.panelTemplate).attr("id", G).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", true)
			}
		});
		F.widget("ui.tabs", F.ui.tabs, {
			_create: function() {
				var G = this.options;
				if (G.active === null && G.selected !== D) {
					G.active = G.selected === -1 ? false : G.selected
				}
				this._super();
				G.selected = G.active;
				if (G.selected === false) {
					G.selected = -1
				}
			},
			_setOption: function(G, I) {
				if (G !== "selected") {
					return this._super(G, I)
				}
				var H = this.options;
				this._super("active", I === -1 ? false : I);
				H.selected = H.active;
				if (H.selected === false) {
					H.selected = -1
				}
			},
			_eventHandler: function() {
				this._superApply(arguments);
				this.options.selected = this.options.active;
				if (this.options.selected === false) {
					this.options.selected = -1
				}
			}
		});
		F.widget("ui.tabs", F.ui.tabs, {
			options: {
				show: null,
				select: null
			},
			_create: function() {
				this._super();
				if (this.options.active !== false) {
					this._trigger("show", null, this._ui(this.active.find(".ui-tabs-anchor")[0], this._getPanelForTab(this.active)[0]))
				}
			},
			_trigger: function(G, J, L) {
				var H, I, K = this._superApply(arguments);
				if (!K) {
					return false
				}
				if (G === "beforeActivate") {
					H = L.newTab.length ? L.newTab : L.oldTab;
					I = L.newPanel.length ? L.newPanel : L.oldPanel;
					K = this._super("select", J, {
						tab: H.find(".ui-tabs-anchor")[0],
						panel: I[0],
						index: H.closest("li").index()
					})
				} else {
					if (G === "activate" && L.newTab.length) {
						K = this._super("show", J, {
							tab: L.newTab.find(".ui-tabs-anchor")[0],
							panel: L.newPanel[0],
							index: L.newTab.closest("li").index()
						})
					}
				}
				return K
			}
		});
		F.widget("ui.tabs", F.ui.tabs, {
			select: function(G) {
				G = this._getIndex(G);
				if (G === -1) {
					if (this.options.collapsible && this.options.selected !== -1) {
						G = this.options.selected
					} else {
						return
					}
				}
				this.anchors.eq(G).trigger(this.options.event + this.eventNamespace)
			}
		});
		(function() {
			var G = 0;
			F.widget("ui.tabs", F.ui.tabs, {
				options: {
					cookie: null
				},
				_create: function() {
					var I = this.options,
						H;
					if (I.active == null && I.cookie) {
						H = parseInt(this._cookie(), 10);
						if (H === -1) {
							H = false
						}
						I.active = H
					}
					this._super()
				},
				_cookie: function(H) {
					var I = [this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + (++G))];
					if (arguments.length) {
						I.push(H === false ? -1 : H);
						I.push(this.options.cookie)
					}
					return F.cookie.apply(null, I)
				},
				_refresh: function() {
					this._super();
					if (this.options.cookie) {
						this._cookie(this.options.active, this.options.cookie)
					}
				},
				_eventHandler: function() {
					this._superApply(arguments);
					if (this.options.cookie) {
						this._cookie(this.options.active, this.options.cookie)
					}
				},
				_destroy: function() {
					this._super();
					if (this.options.cookie) {
						this._cookie(null, this.options.cookie)
					}
				}
			})
		})();
		F.widget("ui.tabs", F.ui.tabs, {
			_trigger: function(G, I, J) {
				var H = F.extend({}, J);
				if (G === "load") {
					H.panel = H.panel[0];
					H.tab = H.tab.find(".ui-tabs-anchor")[0]
				}
				return this._super(G, I, H)
			}
		});
		F.widget("ui.tabs", F.ui.tabs, {
			options: {
				fx: null
			},
			_getFx: function() {
				var I, H, G = this.options.fx;
				if (G) {
					if (F.isArray(G)) {
						I = G[0];
						H = G[1]
					} else {
						I = H = G
					}
				}
				return G ? {
					show: H,
					hide: I
				} : null
			},
			_toggle: function(H, G) {
				var J = this,
					M = G.newPanel,
					L = G.oldPanel,
					K = this._getFx();
				if (!K) {
					return this._super(H, G)
				}
				J.running = true;

				function I() {
					J.running = false;
					J._trigger("activate", H, G)
				}
				function N() {
					G.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
					if (M.length && K.show) {
						M.animate(K.show, K.show.duration, function() {
							I()
						})
					} else {
						M.show();
						I()
					}
				}
				if (L.length && K.hide) {
					L.animate(K.hide, K.hide.duration, function() {
						G.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
						N()
					})
				} else {
					G.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
					L.hide();
					N()
				}
			}
		})
	}
})(jQuery);
(function(D) {
	var B = 0;

	function A(E, G) {
		var F = (E.attr("aria-describedby") || "").split(/\s+/);
		F.push(G);
		E.data("ui-tooltip-id", G).attr("aria-describedby", D.trim(F.join(" ")))
	}
	function C(E) {
		var H = E.data("ui-tooltip-id"),
			G = (E.attr("aria-describedby") || "").split(/\s+/),
			F = D.inArray(H, G);
		if (F !== -1) {
			G.splice(F, 1)
		}
		E.removeData("ui-tooltip-id");
		G = D.trim(G.join(" "));
		if (G) {
			E.attr("aria-describedby", G)
		} else {
			E.removeAttr("aria-describedby")
		}
	}
	D.widget("ui.tooltip", {
		version: "1.9.2",
		options: {
			content: function() {
				return D(this).attr("title")
			},
			hide: true,
			items: "[title]:not([disabled])",
			position: {
				my: "left top+15",
				at: "left bottom",
				collision: "flipfit flip"
			},
			show: true,
			tooltipClass: null,
			track: false,
			close: null,
			open: null
		},
		_create: function() {
			this._on({
				mouseover: "open",
				focusin: "open"
			});
			this.tooltips = {};
			this.parents = {};
			if (this.options.disabled) {
				this._disable()
			}
		},
		_setOption: function(E, G) {
			var F = this;
			if (E === "disabled") {
				this[G ? "_disable" : "_enable"]();
				this.options[E] = G;
				return
			}
			this._super(E, G);
			if (E === "content") {
				D.each(this.tooltips, function(I, H) {
					F._updateContent(H)
				})
			}
		},
		_disable: function() {
			var E = this;
			D.each(this.tooltips, function(H, G) {
				var F = D.Event("blur");
				F.target = F.currentTarget = G[0];
				E.close(F, true)
			});
			this.element.find(this.options.items).andSelf().each(function() {
				var F = D(this);
				if (F.is("[title]")) {
					F.data("ui-tooltip-title", F.attr("title")).attr("title", "")
				}
			})
		},
		_enable: function() {
			this.element.find(this.options.items).andSelf().each(function() {
				var E = D(this);
				if (E.data("ui-tooltip-title")) {
					E.attr("title", E.data("ui-tooltip-title"))
				}
			})
		},
		open: function(F) {
			var E = this,
				G = D(F ? F.target : this.element).closest(this.options.items);
			if (!G.length || G.data("ui-tooltip-id")) {
				return
			}
			if (G.attr("title")) {
				G.data("ui-tooltip-title", G.attr("title"))
			}
			G.data("ui-tooltip-open", true);
			if (F && F.type === "mouseover") {
				G.parents().each(function() {
					var H = D(this),
						I;
					if (H.data("ui-tooltip-open")) {
						I = D.Event("blur");
						I.target = I.currentTarget = this;
						E.close(I, true)
					}
					if (H.attr("title")) {
						H.uniqueId();
						E.parents[this.id] = {

							element: this,
							title: H.attr("title")
						};
						H.attr("title", "")
					}
				})
			}
			this._updateContent(G, F)
		},
		_updateContent: function(I, H) {
			var F, J = this.options.content,
				G = this,
				E = H ? H.type : null;
			if (typeof J === "string") {
				return this._open(H, I, J)
			}
			F = J.call(I[0], function(K) {
				if (!I.data("ui-tooltip-open")) {
					return
				}
				G._delay(function() {
					if (H) {
						H.type = E
					}
					this._open(H, I, K)
				})
			});
			if (F) {
				this._open(H, I, F)
			}
		},
		_open: function(G, I, K) {
			var E, J, F, L = D.extend({}, this.options.position);
			if (!K) {
				return
			}
			E = this._find(I);
			if (E.length) {
				E.find(".ui-tooltip-content").html(K);
				return
			}
			if (I.is("[title]")) {
				if (G && G.type === "mouseover") {
					I.attr("title", "")
				} else {
					I.removeAttr("title")
				}
			}
			E = this._tooltip(I);
			A(I, E.attr("id"));
			E.find(".ui-tooltip-content").html(K);

			function H(M) {
				L.of = M;
				if (E.is(":hidden")) {
					return
				}
				E.position(L)
			}
			if (this.options.track && G && /^mouse/.test(G.type)) {
				this._on(this.document, {
					mousemove: H
				});
				H(G)
			} else {
				E.position(D.extend({
					of: I
				}, this.options.position))
			}
			E.hide();
			this._show(E, this.options.show);
			if (this.options.show && this.options.show.delay) {
				F = setInterval(function() {
					if (E.is(":visible")) {
						H(L.of);
						clearInterval(F)
					}
				}, D.fx.interval)
			}
			this._trigger("open", G, {
				tooltip: E
			});
			J = {
				keyup: function(N) {
					if (N.keyCode === D.ui.keyCode.ESCAPE) {
						var M = D.Event(N);
						M.currentTarget = I[0];
						this.close(M, true)
					}
				},
				remove: function() {
					this._removeTooltip(E)
				}
			};
			if (!G || G.type === "mouseover") {
				J.mouseleave = "close"
			}
			if (!G || G.type === "focusin") {
				J.focusout = "close"
			}
			this._on(true, I, J)
		},
		close: function(F) {
			var E = this,
				H = D(F ? F.currentTarget : this.element),
				G = this._find(H);
			if (this.closing) {
				return
			}
			if (H.data("ui-tooltip-title")) {
				H.attr("title", H.data("ui-tooltip-title"))
			}
			C(H);
			G.stop(true);
			this._hide(G, this.options.hide, function() {
				E._removeTooltip(D(this))
			});
			H.removeData("ui-tooltip-open");
			this._off(H, "mouseleave focusout keyup");
			if (H[0] !== this.element[0]) {
				this._off(H, "remove")
			}
			this._off(this.document, "mousemove");
			if (F && F.type === "mouseleave") {
				D.each(this.parents, function(J, I) {
					D(I.element).attr("title", I.title);
					delete E.parents[J]
				})
			}
			this.closing = true;
			this._trigger("close", F, {
				tooltip: G
			});
			this.closing = false
		},
		_tooltip: function(F) {
			var G = "ui-tooltip-" + B++,
				E = D("<div>").attr({
					id: G,
					role: "tooltip"
				}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
			D("<div>").addClass("ui-tooltip-content").appendTo(E);
			E.appendTo(this.document[0].body);
			if (D.fn.bgiframe) {
				E.bgiframe()
			}
			this.tooltips[G] = F;
			return E
		},
		_find: function(E) {
			var F = E.data("ui-tooltip-id");
			return F ? D("#" + F) : D()
		},
		_removeTooltip: function(E) {
			E.remove();
			delete this.tooltips[E.attr("id")]
		},
		_destroy: function() {
			var E = this;
			D.each(this.tooltips, function(H, G) {
				var F = D.Event("blur");
				F.target = F.currentTarget = G[0];
				E.close(F, true);
				D("#" + H).remove();
				if (G.data("ui-tooltip-title")) {
					G.attr("title", G.data("ui-tooltip-title"));
					G.removeData("ui-tooltip-title")
				}
			})
		}
	})
}(jQuery));