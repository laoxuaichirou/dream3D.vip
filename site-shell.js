(function () {
  "use strict";

  var path = decodeURIComponent(location.pathname.replace(/\\/g, "/"));
  var file = path.split("/").pop() || "index.html";
  var inArticles = /\/articles\//i.test(path);
  var inGaryPrompt = /\/gary-prompt\//i.test(path);
  var inGaryPromptPrivacy = /\/gary-prompt\/privacy\//i.test(path);
  var root = inGaryPromptPrivacy ? "../../" : (inArticles || inGaryPrompt ? "../" : "");
  var isSiteHome = !inArticles && !inGaryPrompt && (file === "index.html" || file === "");
  var corePages = ["benefits.html", "knowledge.html", "resources.html", "community.html", "videos.html", "h3-price.html"];
  var galleryPages = ["gpt2-gallery.html"];
  var themes = [
    { id: "black-gold", name: "经典黑金", colors: ["#c8a45c", "#e8c97a"] },
    { id: "dark-gold", name: "Signal Lime", colors: ["#e6ff55", "#68e8ef"] },
    { id: "dark-blue", name: "Electric Blue", colors: ["#62b7ff", "#54f0d1"] },
    { id: "dark-purple", name: "Ultraviolet", colors: ["#c98cff", "#ff79c9"] },
    { id: "kimi", name: "Kimi Iris", colors: ["#6157e8", "#a348d8"] },
    { id: "light-warm", name: "Warm Paper", colors: ["#c94f20", "#8054c7"] },
    { id: "light-cool", name: "Arctic Light", colors: ["#1769d2", "#008c8c"] }
  ];
  var themeIds = themes.map(function (theme) { return theme.id; });
  var savedUiTheme;
  try { savedUiTheme = localStorage.getItem("gary-ui-theme"); } catch (e) {}
  if (themeIds.indexOf(savedUiTheme) >= 0) document.documentElement.setAttribute("data-theme", savedUiTheme);

  document.body.classList.add("ds-enhanced");
  if (isSiteHome) {
    document.body.classList.add("ds-home");
    document.documentElement.classList.add("ds-home-html");
  }
  else if (inArticles) document.body.classList.add("ds-article");
  else if (galleryPages.indexOf(file) >= 0) document.body.classList.add("ds-core", "ds-gallery");
  else if (corePages.indexOf(file) >= 0) document.body.classList.add("ds-core", "ds-" + file.replace(".html", ""));
  else document.body.classList.add("ds-tool");

  var dictionary = {
    zh: { home: "AI 创作", benefits: "AI 福利", knowledge: "知识库", resources: "资源库", videos: "视频教程", community: "社区", theme: "主题", language: "语言", menu: "菜单", donate: "打赏作者", donateTitle: "请作者喝杯咖啡", donateDesc: "如果本站对你有帮助，微信扫码支持一下。", close: "关闭", skip: "跳到主要内容", brand: "AI 创作者实验室" },
    en: { home: "AI Studio", benefits: "Benefits", knowledge: "Knowledge", resources: "Resources", videos: "Videos", community: "Community", theme: "Theme", language: "Language", menu: "Menu", donate: "Support Gary", donateTitle: "Buy Gary a coffee", donateDesc: "If this site helps, scan with WeChat to support the creator.", close: "Close", skip: "Skip to content", brand: "AI Creator Lab" },
    ja: { home: "AI 制作", benefits: "AI 特典", knowledge: "ナレッジ", resources: "リソース", videos: "動画講座", community: "コミュニティ", theme: "テーマ", language: "言語", menu: "メニュー", donate: "作者を応援", donateTitle: "作者にコーヒーを", donateDesc: "役に立ったら、WeChatで応援してください。", close: "閉じる", skip: "本文へ移動", brand: "AI クリエイターラボ" },
    ko: { home: "AI 제작", benefits: "AI 혜택", knowledge: "지식 베이스", resources: "리소스", videos: "영상 강좌", community: "커뮤니티", theme: "테마", language: "언어", menu: "메뉴", donate: "후원하기", donateTitle: "커피 한 잔 후원", donateDesc: "사이트가 도움이 되었다면 WeChat으로 응원해 주세요.", close: "닫기", skip: "본문으로 이동", brand: "AI 크리에이터 랩" },
    ru: { home: "AI Студия", benefits: "Бонусы", knowledge: "База знаний", resources: "Ресурсы", videos: "Видео", community: "Сообщество", theme: "Тема", language: "Язык", menu: "Меню", donate: "Поддержать", donateTitle: "Угостить автора кофе", donateDesc: "Если сайт полезен, поддержите автора через WeChat.", close: "Закрыть", skip: "К содержанию", brand: "Лаборатория AI" }
  };
  var languageNames = { zh: "中文", en: "English", ja: "日本語", ko: "한국어", ru: "Русский" };
  var validLanguages = Object.keys(dictionary);
  var savedLanguage;
  try { savedLanguage = localStorage.getItem("gary-lang"); } catch (e) {}
  var language = validLanguages.indexOf(savedLanguage) >= 0 ? savedLanguage : "zh";

  function icon(name) {
    var icons = {
      sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>',
      palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3a9 9 0 100 18h1.2a2 2 0 001.5-3.3 1.7 1.7 0 011.3-2.8h2a3 3 0 003-3A9 9 0 0012 3z"/><circle cx="7.5" cy="10" r="1"/><circle cx="10" cy="6.8" r="1"/><circle cx="14" cy="7" r="1"/></svg>',
      globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>',
      menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M4 12h16M4 17h16"/></svg>'
    };
    return icons[name] || "";
  }

  var navItems = [
    ["home", "index.html"],
    ["benefits", "benefits.html"],
    ["knowledge", "knowledge.html"],
    ["resources", "resources.html"],
    ["videos", "videos.html"],
    ["community", "community.html"]
  ];

  function activeKey() {
    if (inArticles) return "knowledge";
    if (isSiteHome || inGaryPrompt) return "home";
    for (var i = 0; i < navItems.length; i += 1) {
      if (navItems[i][1] === file) return navItems[i][0];
    }
    return "";
  }

  var progress = document.createElement("div");
  progress.className = "ds-progress";
  progress.setAttribute("aria-hidden", "true");
  document.body.appendChild(progress);

  var skip = document.createElement("a");
  skip.className = "ds-skip";
  skip.href = "#ds-main";
  document.body.insertBefore(skip, document.body.firstChild);

  var mainTarget = document.querySelector("main") || document.querySelector(".container") || document.body.children[1];
  if (mainTarget && !mainTarget.id) mainTarget.id = "ds-main";

  var navShell = document.createElement("div");
  navShell.className = "ds-nav-shell";
  var links = navItems.map(function (item) {
    return '<a href="' + root + item[1] + '" data-ds-label="' + item[0] + '"' + (activeKey() === item[0] ? ' class="is-active" aria-current="page"' : "") + "></a>";
  }).join("");
  var languageButtons = validLanguages.map(function (code) {
    return '<button type="button" data-lang="' + code + '">' + languageNames[code] + "</button>";
  }).join("");
  var themeButtons = themes.map(function (theme) {
    return '<button type="button" data-theme-option="' + theme.id + '"><span class="ds-theme-swatch" style="--swatch-a:' + theme.colors[0] + ';--swatch-b:' + theme.colors[1] + '"></span><span>' + theme.name + '</span><i>✓</i></button>';
  }).join("");
  navShell.innerHTML =
    '<nav class="ds-nav" aria-label="Primary">' +
      '<a class="ds-brand" href="' + root + 'index.html" aria-label="GaryAIGC home">' +
        '<span class="ds-brand-mark">G.</span><span class="ds-brand-copy"><strong>GaryAIGC</strong><small data-ds-label="brand"></small></span>' +
      "</a>" +
      '<div class="ds-links">' + links + "</div>" +
      '<div class="ds-controls">' +
        '<div class="ds-theme-picker"><button class="ds-control ds-theme" type="button" aria-haspopup="true" aria-expanded="false">' + icon("palette") + '<span data-ds-label="theme"></span></button><div class="ds-theme-menu">' + themeButtons + "</div></div>" +
        '<div class="ds-lang"><button class="ds-control" type="button" aria-haspopup="true" aria-expanded="false">' + icon("globe") + '<span data-ds-label="language"></span></button><div class="ds-lang-menu">' + languageButtons + "</div></div>" +
        '<button class="ds-menu-toggle" type="button" aria-expanded="false" aria-label="Menu">' + icon("menu") + "</button>" +
      "</div>" +
    "</nav>";
  document.body.insertBefore(navShell, document.body.firstChild);

  var nav = navShell.querySelector(".ds-nav");
  var menuToggle = navShell.querySelector(".ds-menu-toggle");
  var lang = navShell.querySelector(".ds-lang");
  var langToggle = lang.querySelector(".ds-control");
  var themePicker = navShell.querySelector(".ds-theme-picker");
  var themeToggle = themePicker.querySelector(".ds-theme");

  function applyLanguage(code, callPageTranslator) {
    language = validLanguages.indexOf(code) >= 0 ? code : "zh";
    var words = dictionary[language];
    document.documentElement.lang = language === "zh" ? "zh-CN" : language;
    document.querySelectorAll("[data-ds-label]").forEach(function (element) {
      var key = element.getAttribute("data-ds-label");
      if (words[key]) element.textContent = words[key];
    });
    skip.textContent = words.skip;
    menuToggle.setAttribute("aria-label", words.menu);
    lang.querySelectorAll("[data-lang]").forEach(function (button) {
      button.classList.toggle("is-active", button.getAttribute("data-lang") === language);
    });
    var donation = document.querySelector(".donate-strip");
    if (donation) donation.textContent = words.donate;
    var injectedTitle = document.querySelector("[data-ds-donate-title]");
    var injectedDesc = document.querySelector("[data-ds-donate-desc]");
    var injectedClose = document.querySelector("[data-ds-donate-close]");
    if (injectedTitle) injectedTitle.textContent = words.donateTitle;
    if (injectedDesc) injectedDesc.textContent = words.donateDesc;
    if (injectedClose) injectedClose.textContent = words.close;
    try { localStorage.setItem("gary-lang", language); } catch (e) {}
    if (callPageTranslator && typeof window.setLang === "function") {
      try { window.setLang(language); } catch (e) {}
    }
  }

  langToggle.addEventListener("click", function (event) {
    event.stopPropagation();
    var open = !lang.classList.contains("is-open");
    lang.classList.toggle("is-open", open);
    langToggle.setAttribute("aria-expanded", String(open));
    themePicker.classList.remove("is-open");
    themeToggle.setAttribute("aria-expanded", "false");
  });
  lang.querySelectorAll("[data-lang]").forEach(function (button) {
    button.addEventListener("click", function () {
      applyLanguage(button.getAttribute("data-lang"), true);
      lang.classList.remove("is-open");
      langToggle.setAttribute("aria-expanded", "false");
    });
  });

  menuToggle.addEventListener("click", function () {
    var open = !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
  });
  navShell.querySelectorAll(".ds-links a").forEach(function (link) {
    link.addEventListener("click", function () { nav.classList.remove("is-open"); });
  });

  function applyTheme(themeId, persist) {
    var next = themeIds.indexOf(themeId) >= 0 ? themeId : "dark-gold";
    if (typeof window.setTheme === "function") {
      try { window.setTheme(next); } catch (e) { document.documentElement.setAttribute("data-theme", next); }
    } else document.documentElement.setAttribute("data-theme", next);
    document.documentElement.setAttribute("data-theme", next);
    themePicker.querySelectorAll("[data-theme-option]").forEach(function (button) {
      button.classList.toggle("is-active", button.getAttribute("data-theme-option") === next);
    });
    if (persist !== false) {
      try {
        localStorage.setItem("gary-ui-theme", next);
        localStorage.setItem("gary-theme", next);
      } catch (e) {}
    }
  }

  applyTheme(savedUiTheme || document.documentElement.getAttribute("data-theme"), false);
  themeToggle.addEventListener("click", function (event) {
    event.stopPropagation();
    var open = !themePicker.classList.contains("is-open");
    themePicker.classList.toggle("is-open", open);
    themeToggle.setAttribute("aria-expanded", String(open));
    lang.classList.remove("is-open");
    langToggle.setAttribute("aria-expanded", "false");
  });
  themePicker.querySelectorAll("[data-theme-option]").forEach(function (button) {
    button.addEventListener("click", function () {
      applyTheme(button.getAttribute("data-theme-option"), true);
      themePicker.classList.remove("is-open");
      themeToggle.setAttribute("aria-expanded", "false");
    });
  });

  function ensureDonation() {
    var button = document.querySelector(".donate-strip");
    var modal = document.getElementById("donateModal");
    if (!button) {
      button = document.createElement("button");
      button.type = "button";
      button.className = "donate-strip";
      button.id = "donateBtn";
      document.body.appendChild(button);
    }
    if (!modal) {
      modal = document.createElement("div");
      modal.className = "modal-mask";
      modal.id = "donateModal";
      modal.setAttribute("role", "dialog");
      modal.setAttribute("aria-modal", "true");
      modal.innerHTML = '<div class="modal-card"><div class="modal-title" data-ds-donate-title></div><div class="modal-desc" data-ds-donate-desc></div><div class="modal-qr"><img src="' + root + 'wx-pay.jpg" alt="WeChat payment QR code"></div><button type="button" class="modal-close" data-ds-donate-close></button></div>';
      document.body.appendChild(modal);
    }
    if (!button.dataset.dsBound) {
      button.dataset.dsBound = "true";
      button.addEventListener("click", function () {
        modal.classList.add("show");
        document.documentElement.style.overflow = "hidden";
      });
    }
    if (!modal.dataset.dsBound) {
      modal.dataset.dsBound = "true";
      modal.addEventListener("click", function (event) {
        if (event.target === modal || event.target.closest(".modal-close")) {
          modal.classList.remove("show");
          document.documentElement.style.overflow = "";
        }
      });
    }
  }

  ensureDonation();

  /* Wide data tables remain readable on small screens without widening the
     document. This wrapper is presentation-only and leaves table content intact. */
  document.querySelectorAll("table").forEach(function (table) {
    if (table.parentElement && table.parentElement.classList.contains("ds-table-scroll")) return;
    var scroller = document.createElement("div");
    scroller.className = "ds-table-scroll";
    table.parentNode.insertBefore(scroller, table);
    scroller.appendChild(table);
  });

  applyLanguage(language, false);

  document.addEventListener("click", function (event) {
    if (!lang.contains(event.target)) {
      lang.classList.remove("is-open");
      langToggle.setAttribute("aria-expanded", "false");
    }
    if (!themePicker.contains(event.target)) {
      themePicker.classList.remove("is-open");
      themeToggle.setAttribute("aria-expanded", "false");
    }
  });
  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    lang.classList.remove("is-open");
    langToggle.setAttribute("aria-expanded", "false");
    themePicker.classList.remove("is-open");
    themeToggle.setAttribute("aria-expanded", "false");
    var modal = document.getElementById("donateModal");
    if (modal) modal.classList.remove("show");
    document.documentElement.style.overflow = "";
  });

  var ticking = false;
  function updateScrollState() {
    var top = window.scrollY || document.documentElement.scrollTop;
    var max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    progress.style.width = Math.min(100, top / max * 100) + "%";
    nav.classList.toggle("is-scrolled", top > 18);
    ticking = false;
  }
  addEventListener("scroll", function () {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateScrollState);
    }
  }, { passive: true });
  updateScrollState();

  if (matchMedia("(pointer:fine)").matches) {
    addEventListener("pointermove", function (event) {
      document.body.style.setProperty("--ds-pointer-x", event.clientX + "px");
      document.body.style.setProperty("--ds-pointer-y", event.clientY + "px");
    }, { passive: true });
  }

  /* The former home layout used an internal desktop scroller. The new visual
     layer restores normal document scrolling while leaving the legacy code in
     place for easy migration and rollback. */
  if (document.body.classList.contains("ds-home")) {
    addEventListener("wheel", function (event) {
      event.stopImmediatePropagation();
    }, { capture: true, passive: true });
    document.addEventListener("click", function (event) {
      var anchor = event.target.closest && event.target.closest('a[href^="#"]');
      if (!anchor) return;
      var id = anchor.getAttribute("href").slice(1);
      var target = id && document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      event.stopPropagation();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", "#" + id);
    }, true);
  }

  if (!matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
    document.body.classList.add("ds-reveal-ready");
    var targets = document.querySelectorAll(".cat-card,.tool-card,.brief-panel,.section,.article > h1,.article-body > *,body.ds-article .sec");
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("ds-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -6%", threshold: .05 });
    targets.forEach(function (target, index) {
      target.style.transitionDelay = Math.min(index % 6 * 42, 210) + "ms";
      observer.observe(target);
    });
  }

  addEventListener("load", function () {
    applyLanguage(language, true);
  }, { once: true });
})();
