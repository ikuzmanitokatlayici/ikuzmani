export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.hostname.includes('workers.dev')) {
      return Response.redirect(`https://karakoc.dev${url.pathname}${url.search}`, 301);
    }

    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mahir Karakoç | Backend Systems Engineer & Cinematic Editor</title>
  <meta name="description" content="Mahir Karakoç — Backend Systems Engineer and Premiere Pro Cinematic Editor. Secure backend systems, Cloudflare edge architecture, and cinematic visual storytelling." />
  <meta name="theme-color" content="#0a0a0c" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700;800&display=swap" rel="stylesheet" />
  <style>
    :root {
      --bg: #0a0a0c;
      --bg-soft: #111116;
      --panel: rgba(17, 17, 22, 0.78);
      --panel-strong: rgba(14, 14, 18, 0.92);
      --line: rgba(255,255,255,0.08);
      --line-strong: rgba(255,255,255,0.14);
      --text: #f4f4f6;
      --muted: #b9bac1;
      --soft: #8f9097;
      --accent: #a83226;
      --accent-strong: #c44539;
      --accent-dim: rgba(168,50,38,0.16);
      --success: #3ad07b;
      --radius-xl: 28px;
      --radius-lg: 22px;
      --radius-md: 16px;
      --shadow-lg: 0 30px 80px rgba(0,0,0,0.42);
      --shadow-md: 0 18px 44px rgba(0,0,0,0.28);
      --container: 1240px;
      --nav-h: 82px;
    }

    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      font-family: 'Inter', system-ui, sans-serif;
      color: var(--text);
      background:
        linear-gradient(180deg, rgba(10,10,12,0.66), rgba(10,10,12,0.94)),
        radial-gradient(circle at 80% 0%, rgba(168,50,38,0.18), transparent 24%),
        url('https://sspark.genspark.ai/cfimages?u1=3CzOmhD46QIPbO7oNA7lPo4jGeS7O%2BSABnkN6H4f%2B%2BFZRQkhDsGqYL6NNSDK7dRU9YIUnJD6C%2Bp74wgRpqEA1XlijdEvdNhDkXWZxl2858BmFp81vTtWUCqtcy7bM1pr%2Fq4j8i2cmAuX6nyvEdjHsL3YnLq3x7dq%2Fwcda1OQ98SqrDXjHbCpLJTzNXs7t9CdNs5aj81UrMBMKR8L3vbMKOA1BewQzX1dGIwApvLF3OQVxHso6Bnxv4d1bPmRBpZP2VIo05oTHTSE2wvLlULBotHJ16gt2KUu93v4e%2FWi2dLxFM2sQ8vpVkzB9sRzBxtTAa5vHlhxQesMlr3xO3mjlis18Y8FohOHiTHvIwDqHqQx4RqEx9xNsDoW8hELG44ORNt5NC4PnGbnJpPXAgiQJDYBkFWsKCqBbtm1xCoGJvV0tux9C%2FVNS%2BJhQC%2FAvMTiwuOLD6v4VStT1Rwpma9EkYaGlo65Ex4atq9qZdINQ%2FoxPjeHHdd%2Bqjug6jPdHwCc2kt%2BEQfNOcd9WCionFp6X5qIseQ3&u2=6C%2B7FS9aNlfsBq0Y&width=2560') center/cover fixed;
      min-height: 100vh;
      overflow-x: hidden;
    }

    a { color: inherit; text-decoration: none; }
    button { font: inherit; }
    img { display: block; max-width: 100%; }
    ::selection { background: rgba(168,50,38,0.35); color: var(--text); }

    .container { width: min(calc(100% - 32px), var(--container)); margin: 0 auto; }
    .skip-link {
      position: absolute; left: 16px; top: -46px; z-index: 200;
      padding: 10px 14px; border-radius: 12px; background: var(--text); color: var(--bg);
    }
    .skip-link:focus { top: 14px; }

    .nav-wrap { position: sticky; top: 0; z-index: 100; padding-top: 16px; }
    .nav {
      min-height: var(--nav-h);
      display: flex; align-items: center; justify-content: space-between; gap: 18px;
      padding: 14px 18px; border-radius: 22px;
      background: rgba(11,11,14,0.66);
      border: 1px solid var(--line);
      backdrop-filter: blur(18px) saturate(145%);
      -webkit-backdrop-filter: blur(18px) saturate(145%);
      box-shadow: var(--shadow-md);
    }
    .brand { display: flex; align-items: center; gap: 14px; min-width: 0; }
    .badge {
      width: 52px; height: 52px; border-radius: 16px; display: grid; place-items: center;
      font: 800 1rem 'Space Grotesk', sans-serif; letter-spacing: .08em;
      background: linear-gradient(180deg, rgba(255,255,255,0.13), rgba(255,255,255,0.03)), linear-gradient(135deg, rgba(168,50,38,0.24), rgba(0,0,0,0.15));
      border: 1px solid rgba(255,255,255,0.12);
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.12);
      flex-shrink: 0;
    }
    .brand-copy strong, h1, h2, h3, h4 { font-family: 'Space Grotesk', sans-serif; }
    .brand-copy strong { display: block; font-size: .95rem; letter-spacing: .08em; }
    .brand-copy span { display: block; color: var(--muted); font-size: .78rem; text-transform: uppercase; letter-spacing: .13em; }

    .nav-links { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; justify-content: center; }
    .nav-links a {
      padding: 10px 14px; border-radius: 999px; color: var(--muted); font-size: .94rem;
      transition: .25s ease;
    }
    .nav-links a:hover, .nav-links a:focus-visible { background: rgba(255,255,255,0.06); color: var(--text); outline: none; transform: translateY(-1px); }

    .nav-social { display: flex; align-items: center; gap: 10px; }
    .icon-link {
      width: 40px; height: 40px; display: grid; place-items: center; border-radius: 12px;
      background: rgba(255,255,255,0.04); border: 1px solid var(--line); transition: .25s ease;
    }
    .icon-link:hover, .icon-link:focus-visible { transform: translateY(-2px); background: rgba(168,50,38,0.12); border-color: rgba(168,50,38,0.28); outline: none; }
    .icon-link svg { width: 18px; height: 18px; fill: currentColor; }

    .menu-toggle {
      display: none; width: 46px; height: 46px; border-radius: 14px; cursor: pointer;
      border: 1px solid var(--line); background: rgba(255,255,255,0.04); color: var(--text);
      align-items: center; justify-content: center;
    }

    .section { padding: 32px 0; }
    .section-head {
      display: flex; justify-content: space-between; align-items: end; gap: 18px; margin-bottom: 20px;
    }
    .section-kicker { color: var(--muted); text-transform: uppercase; letter-spacing: .14em; font-size: .82rem; margin-bottom: 10px; }
    .section-title { font-size: clamp(2rem, 4vw, 3.3rem); line-height: 1.02; margin: 0; }
    .section-head p { margin: 0; max-width: 62ch; color: var(--muted); line-height: 1.75; }

    .hero { padding: 70px 0 28px; }
    .hero-grid { display: grid; grid-template-columns: 1.15fr .85fr; gap: 24px; }
    .panel, .work-card, .stat-card, .modal-panel {
      position: relative; overflow: hidden; border-radius: var(--radius-xl);
      border: 1px solid var(--line); background: linear-gradient(180deg, rgba(17,17,22,0.82), rgba(11,11,15,0.94));
      box-shadow: var(--shadow-lg);
    }
    .panel::before, .work-card::before, .stat-card::before, .modal-panel::before {
      content: ''; position: absolute; inset: 0; pointer-events: none;
      background: linear-gradient(180deg, rgba(255,255,255,0.04), transparent 20%), linear-gradient(135deg, rgba(168,50,38,0.08), transparent 42%);
    }
    .hero-copy { padding: 34px; min-height: 620px; display: flex; flex-direction: column; justify-content: space-between; }
    .status-chip {
      display: inline-flex; align-items: center; gap: 10px; align-self: flex-start;
      padding: 10px 14px; border-radius: 999px; background: rgba(255,255,255,0.04); border: 1px solid var(--line);
      color: var(--muted); font-size: .82rem; letter-spacing: .08em; text-transform: uppercase;
    }
    .pulse { width: 10px; height: 10px; border-radius: 50%; background: var(--success); box-shadow: 0 0 0 0 rgba(58,208,123,.55); animation: pulse 2s infinite; }
    @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(58,208,123,.55);} 70% { box-shadow: 0 0 0 12px rgba(58,208,123,0);} 100% { box-shadow: 0 0 0 0 rgba(58,208,123,0);} }

    .eyebrow { margin: 24px 0 14px; color: var(--muted); font-size: .82rem; letter-spacing: .16em; text-transform: uppercase; }
    h1 { margin: 0; font-size: clamp(2.8rem, 7vw, 6.1rem); line-height: .96; max-width: 10ch; }
    .hero-subtitle { margin-top: 18px; font-size: clamp(1.08rem, 2vw, 1.35rem); font-weight: 600; }
    .hero-tagline { margin-top: 18px; max-width: 60ch; color: var(--muted); line-height: 1.82; font-size: 1.03rem; }

    .btn-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }
    .btn {
      display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 52px;
      padding: 15px 20px; border-radius: 999px; cursor: pointer; border: 1px solid transparent; transition: .25s ease;
      font-weight: 700; letter-spacing: .01em;
    }
    .btn:hover, .btn:focus-visible { transform: translateY(-2px); outline: none; }
    .btn-primary { background: linear-gradient(180deg, var(--accent-strong), var(--accent)); color: #fff; box-shadow: 0 16px 34px rgba(168,50,38,.28); }
    .btn-secondary { background: rgba(255,255,255,0.045); border-color: var(--line); color: var(--text); }
    .btn-ghost { background: transparent; border-color: var(--line); color: var(--muted); }

    .hero-metrics { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 34px; }
    .metric {
      padding: 18px; border-radius: 18px; background: rgba(255,255,255,0.04); border: 1px solid var(--line);
    }
    .metric strong { display: block; font: 700 1.08rem 'Space Grotesk', sans-serif; margin-bottom: 8px; }
    .metric span { color: var(--muted); font-size: .92rem; line-height: 1.55; }

    .hero-visual {
      min-height: 620px; display: flex; align-items: end;
      background:
        linear-gradient(180deg, rgba(10,10,12,0.16), rgba(10,10,12,0.78)),
        linear-gradient(35deg, rgba(168,50,38,0.14), transparent 38%),
        url('https://sspark.genspark.ai/cfimages?u1=KGuw9IJjjhhojVYEU6iQp0WIEWJCT8Hk0nnYJInnMlE0ElZHvw%2BRllEfX4yQ%2BCAQO3rShqjN6%2B%2Fxf22Y3noQ3KceeJOrz4Zmhrk7vaFF2CCJ&u2=bA8PcLou0oqu6Lvd&width=2560') center/cover;
    }
    .hero-visual-body { width: 100%; padding: 34px; display: grid; gap: 14px; }
    .intel {
      width: min(100%, 440px); margin-left: auto; padding: 20px; border-radius: 22px;
      background: rgba(8,8,10,0.62); border: 1px solid rgba(255,255,255,0.12);
      backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
    }
    .intel h3 { margin: 0 0 12px; font-size: 1rem; }
    .intel p { margin: 0; color: var(--muted); line-height: 1.72; }
    .intel-list { display: grid; gap: 10px; margin-top: 16px; }
    .intel-item {
      display: flex; justify-content: space-between; gap: 12px; padding: 12px 14px;
      border-radius: 14px; background: rgba(255,255,255,0.04); border: 1px solid var(--line);
      color: var(--muted); font-size: .92rem;
    }
    .intel-item strong { color: var(--text); }

    .section-card { padding: 30px; border-radius: var(--radius-xl); border: 1px solid var(--line); background: linear-gradient(180deg, rgba(17,17,22,0.82), rgba(11,11,15,0.94)); box-shadow: var(--shadow-lg); }
    .letter-grid { display: grid; grid-template-columns: 1.05fr .95fr; gap: 20px; }
    .letter-copy p { margin: 0 0 16px; color: var(--muted); line-height: 1.88; }
    .quote-box {
      min-height: 100%; padding: 28px; border-radius: 24px; position: relative; overflow: hidden;
      border: 1px solid var(--line); box-shadow: inset 0 -80px 120px rgba(8,8,10,.78);
      background: url('https://sspark.genspark.ai/cfimages?u1=9dwyi723hpmfFunfrxmqdAokejykTwgQcsAz3ByrHll3KDHCFeBTFDa5NZb2Pn%2F%2BKu5as4juAXTZDuY6JCdB8h%2Bd%2Fbctz61rnDkT409vCS0LHjw7jSlZqMwklOaiFxevUPtaQ37KvzlLAXn%2F3Q%3D%3D&u2=Z5IAcTxWoaHS5%2BYZ&width=2560') center/cover;
    }
    .quote-box::after {
      content: ''; position: absolute; inset: 0;
      background: linear-gradient(180deg, rgba(10,10,12,0.18), rgba(10,10,12,0.88)), linear-gradient(135deg, rgba(168,50,38,0.22), transparent 45%);
    }
    .quote-box > * { position: relative; z-index: 1; }
    .quote-box .label { color: var(--muted); text-transform: uppercase; letter-spacing: .14em; font-size: .8rem; }
    .quote-box blockquote { margin: 36px 0 20px; max-width: 18ch; font: 700 clamp(1.2rem,2vw,1.9rem)/1.34 'Space Grotesk', sans-serif; }
    .quote-box .sig { color: var(--muted); font-size: .95rem; }
    .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
    .cap-card, .arch-card, .stat-card { padding: 24px; border-radius: var(--radius-xl); }
    .cap-card h3, .arch-card h3, .work-body h3, .stat-card h3 { margin: 0 0 12px; font-size: 1.18rem; }
    .cap-card p, .arch-card p, .work-body p, .stat-card p { margin: 0; color: var(--muted); line-height: 1.78; }
    .arch-tag, .tag {
      display: inline-flex; align-items: center; gap: 8px; padding: 8px 12px; border-radius: 999px;
      background: rgba(255,255,255,0.04); border: 1px solid var(--line); color: var(--muted); font-size: .8rem;
      text-transform: uppercase; letter-spacing: .1em;
    }
    .list { list-style: none; padding: 0; margin: 16px 0 0; display: grid; gap: 10px; }
    .list li { position: relative; padding-left: 18px; color: var(--muted); line-height: 1.68; }
    .list li::before { content: ''; position: absolute; left: 0; top: .72em; width: 7px; height: 7px; border-radius: 50%; background: var(--accent); }

    .works-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
    .work-card {
      min-height: 520px; display: flex; align-items: end; background-size: cover; background-position: center; transition: .3s ease;
    }
    .work-card:hover { transform: translateY(-6px); border-color: rgba(168,50,38,.34); }
    .work-card::after {
      content: ''; position: absolute; inset: 0;
      background: linear-gradient(180deg, rgba(10,10,12,0.08), rgba(10,10,12,0.9)), linear-gradient(140deg, rgba(168,50,38,0.14), transparent 42%);
    }
    .work-body { position: relative; z-index: 1; width: 100%; padding: 24px; }
    .tag-row { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 14px; }
    .tag { font-size: .77rem; }

    .status-grid { display: grid; grid-template-columns: 1.08fr .92fr; gap: 20px; }
    .status-line { display: flex; align-items: center; gap: 10px; margin: 16px 0 22px; font-weight: 700; }
    .contact-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-top: 20px; }
    .contact-link {
      display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 16px 18px;
      border-radius: 16px; background: rgba(255,255,255,0.04); border: 1px solid var(--line); transition: .25s ease;
      color: var(--muted);
    }
    .contact-link strong { display: block; margin-bottom: 4px; color: var(--text); }
    .contact-link:hover, .contact-link:focus-visible { transform: translateY(-3px); background: rgba(168,50,38,0.08); border-color: rgba(168,50,38,0.28); outline: none; }

    footer { padding: 16px 0 42px; }
    .footer-bar {
      display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;
      padding-top: 18px; border-top: 1px solid var(--line); color: var(--soft); font-size: .94rem;
    }
    .footer-social { display: flex; flex-wrap: wrap; gap: 10px; }

    .reveal { opacity: 0; transform: translateY(26px); transition: opacity .75s ease, transform .75s ease; }
    .reveal.is-visible { opacity: 1; transform: translateY(0); }

    .modal-root { position: fixed; inset: 0; display: none; align-items: center; justify-content: center; padding: 20px; z-index: 180; }
    .modal-root.is-open { display: flex; }
    .modal-backdrop { position: absolute; inset: 0; background: rgba(7,7,9,.76); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); }
    .modal-panel { position: relative; z-index: 1; width: min(100%, 920px); max-height: 92vh; overflow: auto; }
    .modal-media { min-height: 280px; background-size: cover; background-position: center; position: relative; }
    .modal-media::after { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(10,10,12,0.06), rgba(10,10,12,0.88)), linear-gradient(135deg, rgba(168,50,38,0.14), transparent 42%); }
    .modal-close {
      position: absolute; right: 16px; top: 16px; z-index: 2; width: 46px; height: 46px; border-radius: 14px; cursor: pointer;
      border: 1px solid rgba(255,255,255,0.12); background: rgba(8,8,10,0.58); color: var(--text);
    }
    .modal-content { position: relative; z-index: 1; padding: 28px; }
    .modal-content p { color: var(--muted); line-height: 1.84; }
    .modal-meta, .modal-actions { display: flex; flex-wrap: wrap; gap: 10px; }
    .modal-meta { margin: 16px 0 20px; }
    .modal-actions { margin-top: 22px; }
    .micro-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 14px; margin-top: 18px; }
    .micro-card { padding: 16px; border-radius: 16px; background: rgba(255,255,255,0.04); border: 1px solid var(--line); }
    .micro-card strong { display: block; margin-bottom: 8px; font-family: 'Space Grotesk', sans-serif; }
    .micro-card span { color: var(--muted); line-height: 1.66; font-size: .94rem; }

    @media (max-width: 1100px) {
      .hero-grid, .letter-grid, .grid-3, .works-grid, .status-grid { grid-template-columns: 1fr; }
      .hero-metrics { grid-template-columns: 1fr; }
      .hero-copy, .hero-visual { min-height: unset; }
    }
    @media (max-width: 900px) {
      .nav { flex-wrap: wrap; }
      .menu-toggle { display: inline-flex; }
      .nav-links { width: 100%; display: none; flex-direction: column; align-items: stretch; padding-top: 8px; }
      .nav-links.is-open { display: flex; }
      .nav-links a { width: 100%; border-radius: 14px; background: rgba(255,255,255,0.03); }
      .contact-grid, .micro-grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 640px) {
      .container { width: min(calc(100% - 20px), var(--container)); }
      .hero { padding-top: 48px; }
      .hero-copy, .hero-visual-body, .section-card, .cap-card, .arch-card, .stat-card, .modal-content { padding: 22px; }
      .btn-row, .modal-actions { flex-direction: column; }
      .btn { width: 100%; }
      .footer-bar { flex-direction: column; align-items: flex-start; }
    }
    @media (prefers-reduced-motion: reduce) {
      html { scroll-behavior: auto; }
      *, *::before, *::after { animation: none !important; transition: none !important; }
      .reveal { opacity: 1 !important; transform: none !important; }
    }
  </style>
</head>
<body>
  <a href="#main" class="skip-link">Skip to content</a>
  <div class="nav-wrap">
    <div class="container">
      <nav class="nav" aria-label="Primary navigation">
        <a class="brand" href="#top" aria-label="Mahir Karakoç home">
          <div class="badge">MK</div>
          <div class="brand-copy">
            <strong>MAHIR KARAKOÇ</strong>
            <span>Backend & Cinematic Editing</span>
          </div>
        </a>

        <button class="menu-toggle" id="menuToggle" aria-expanded="false" aria-controls="navLinks" aria-label="Toggle navigation">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M4 7h16v2H4V7Zm0 8h16v2H4v-2Zm0-4h16v2H4v-2Z"></path></svg>
        </button>

        <div class="nav-links" id="navLinks">
          <a href="#about">About & Vision</a>
          <a href="#architecture">System Architecture</a>
          <a href="#works">Selected Works</a>
          <a href="#letter">Executive Letter</a>
          <a href="#contact">Contact</a>
        </div>

        <div class="nav-social" aria-label="Social links">
          <a class="icon-link" href="https://github.com/Siberexe/disciplinehub.git" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><svg viewBox="0 0 24 24"><path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.56 0-.27-.01-1.18-.02-2.14-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.76 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.3 1.18-3.11-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.16 1.19a10.9 10.9 0 0 1 5.75 0c2.18-1.5 3.15-1.19 3.15-1.19.62 1.59.23 2.77.11 3.06.73.81 1.18 1.85 1.18 3.11 0 4.42-2.69 5.39-5.25 5.67.41.36.77 1.06.77 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.2.66.79.55 4.56-1.53 7.84-5.84 7.84-10.93C23.5 5.66 18.35.5 12 .5Z"></path></svg></a>
          <a class="icon-link" href="https://www.linkedin.com/in/mahir-karako%C3%A7-a8677b423?trk=contact-info" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path d="M4.98 3.5A2.49 2.49 0 0 0 2.5 6a2.49 2.49 0 0 0 2.48 2.5A2.5 2.5 0 1 0 4.98 3.5ZM3 9h4v12H3V9Zm7 0h3.83v1.71h.05c.53-1.01 1.83-2.08 3.77-2.08 4.03 0 4.77 2.66 4.77 6.12V21h-4v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95V21h-4V9Z"></path></svg></a>
          <a class="icon-link" href="https://x.com/STAR_WANTED_" target="_blank" rel="noopener noreferrer" aria-label="X"><svg viewBox="0 0 24 24"><path d="M18.9 2H22l-6.77 7.73L23.2 22h-6.26l-4.9-6.46L6.39 22H3.28l7.24-8.27L.8 2h6.42l4.43 5.85L18.9 2Zm-1.1 18h1.73L6.26 3.89H4.4L17.8 20Z"></path></svg></a>
          <a class="icon-link" href="https://instagram.com/karakoc.dev" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7Zm10.75 1.65a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2A2.8 2.8 0 1 0 12 14.8 2.8 2.8 0 0 0 12 9.2Z"></path></svg></a>
        </div>
      </nav>
    </div>
  </div>

  <main id="main">
    <section class="hero section" id="top">
      <div class="container">
        <div class="hero-grid">
          <div class="panel hero-copy reveal">
            <div>
              <div class="status-chip"><span class="pulse" aria-hidden="true"></span><span>SYSTEM OPERATIONAL // PROTECTED BY CLOUDFLARE EDGE WAF</span></div>
              <div class="eyebrow">Lead Backend Systems / Cinematic Post-Production</div>
              <h1>MAHIR KARAKOÇ</h1>
              <div class="hero-subtitle">Backend Systems Engineer | Premiere Pro Cinematic Editor</div>
              <p class="hero-tagline">Architecting resilient high-concurrency backend infrastructures. Crafting frame-accurate cinematic visual narratives.</p>
              <div class="btn-row">
                <a class="btn btn-primary" href="#works">Explore Selected Works</a>
                <a class="btn btn-secondary" href="#letter">Read Cover Letter</a>
                <a class="btn btn-ghost" href="mailto:karakocmahir2@gmail.com">Direct Email</a>
              </div>
              <div class="btn-row" style="margin-top:14px;">
                <a class="btn btn-secondary" href="https://www.linkedin.com/in/mahir-karako%C3%A7-a8677b423?trk=contact-info" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a class="btn btn-secondary" href="https://github.com/Siberexe/disciplinehub.git" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a class="btn btn-secondary" href="https://x.com/STAR_WANTED_" target="_blank" rel="noopener noreferrer">X</a>
                <a class="btn btn-secondary" href="https://instagram.com/karakoc.dev" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
              <div class="hero-metrics">
                <div class="metric"><strong>Cloudflare Edge</strong><span>Worker routing, custom domains, permanent redirects, and disciplined perimeter control.</span></div>
                <div class="metric"><strong>Backend Systems</strong><span>Node.js, Python, APIs, automation layers, and durable operations under pressure.</span></div>
                <div class="metric"><strong>Cinematic Editing</strong><span>Premiere Pro storytelling, narrative pacing, sound layering, and high-fidelity finish quality.</span></div>
              </div>
            </div>
          </div>

          <aside class="panel hero-visual reveal" aria-label="Visual showcase panel">
            <div class="hero-visual-body">
              <div class="intel">
                <h3>Executive Contact Channel</h3>
                <p>Senior-grade technical rigor paired with cinematic presentation discipline for global studio, platform, and enterprise environments.</p>
                <div class="intel-list">
                  <div class="intel-item"><span>LinkedIn</span><strong>Executive Profile</strong></div>
                  <div class="intel-item"><span>GitHub</span><strong>Infrastructure Access</strong></div>
                  <div class="intel-item"><span>X / Instagram</span><strong>Public Presence</strong></div>
                  <div class="intel-item"><span>Email</span><strong>Direct Recruitment Route</strong></div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <section class="section" id="about">
      <div class="container">
        <div class="section-head reveal">
          <div>
            <div class="section-kicker">About & Vision</div>
            <h2 class="section-title">Tier-1 standards. Hardened systems. Cinematic execution.</h2>
          </div>
          <p>This portfolio is deliberately restrained and premium: dark, cinematic, operationally clear, and aligned with AAA studio presentation language rather than trend-driven spectacle.</p>
        </div>

        <div class="section-card reveal" id="letter">
          <div class="letter-grid">
            <div class="letter-copy">
              <div class="section-kicker">Executive Cover Letter</div>
              <h3 class="section-title" style="font-size:clamp(1.8rem,3vw,2.5rem);margin-bottom:16px;">Formal Vision Statement</h3>
              <p>I am a results-driven Backend Engineer and Cinematic Video Editor dedicated to building uncompromising digital infrastructure and high-impact visual storytelling. Operating with relentless discipline, I specialize in designing secure, high-performance backend systems and crafting immersive narrative experiences.</p>
              <p>My foundation combines edge worker routing, Cloudflare WAF security, and script automation with frame-accurate Adobe Premiere Pro editing. My objective is to contribute world-class technical architecture and creative editor workflows to tier-1 global studios and enterprise platforms.</p>
              <p>I bring a dual-threat execution model: one side focused on resilient backend engineering and operational trust, the other focused on emotionally controlled cinematic pacing, post-production finish quality, and presentation that respects brand gravity.</p>
              <div class="btn-row" style="margin-top:20px;">
                <a class="btn btn-primary" href="https://www.linkedin.com/in/mahir-karako%C3%A7-a8677b423?trk=contact-info" target="_blank" rel="noopener noreferrer">Open LinkedIn</a>
                <a class="btn btn-secondary" href="mailto:karakocmahir2@gmail.com">Contact by Email</a>
              </div>
            </div>
            <div class="quote-box">
              <div class="label">Studio Positioning</div>
              <blockquote>“Designed to serve global game studios, enterprise platforms, and high-accountability digital operations.”</blockquote>
              <div class="sig">Mahir Karakoç / Backend & Cinematic Editing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section" id="architecture">
      <div class="container">
        <div class="section-head reveal">
          <div>
            <div class="section-kicker">System Architecture</div>
            <h2 class="section-title">Edge-first architecture with disciplined operational flow.</h2>
          </div>
          <p>The technical story centers on route certainty, attack-surface reduction, predictable deployment paths, and backend workflows that stay dependable under pressure.</p>
        </div>
        <div class="grid-3">
          <article class="panel arch-card reveal">
            <div class="arch-tag">Layer 01 / Edge Ingress</div>
            <h3>Custom Domain Routing & WAF Gatekeeping</h3>
            <p>Traffic enters through Cloudflare’s edge where custom domains, permanent redirects, and WAF policy establish brand integrity and immediate threat-surface reduction.</p>
          </article>
          <article class="panel arch-card reveal">
            <div class="arch-tag">Layer 02 / Service Logic</div>
            <h3>Worker Logic, APIs & Secure Backend Contracts</h3>
            <p>Lightweight edge execution shapes responses, filters requests, and orchestrates frontend delivery while backend services maintain structured contracts for data flow and control.</p>
          </article>
          <article class="panel arch-card reveal">
            <div class="arch-tag">Layer 03 / Automation Core</div>
            <h3>Python & Script-Driven Deployments</h3>
            <p>Repeatable deployment and maintenance tasks are pushed into automation, reducing drift, improving release consistency, and reinforcing a production mindset around repeatable outcomes.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head reveal">
          <div>
            <div class="section-kicker">Dual-Threat Capabilities</div>
            <h2 class="section-title">Engineering precision paired with editorial storytelling.</h2>
          </div>
          <p>Structured for studio executives, recruiters, and technical leads who value both robust systems and refined presentation quality.</p>
        </div>
        <div class="grid-3">
          <article class="panel cap-card reveal">
            <h3>Backend & Edge Engineering</h3>
            <p>A practical architecture profile focused on secure backend delivery, performance discipline, and edge-native control surfaces.</p>
            <ul class="list">
              <li>Node.js backend service logic and structured API handling</li>
              <li>Python scripting for automation, maintenance, and deployment flow</li>
              <li>Cloudflare Workers and custom domain integration</li>
              <li>WAF security armor and hardened routing posture</li>
              <li>Script automation supporting repeatable production pipelines</li>
            </ul>
          </article>
          <article class="panel cap-card reveal">
            <h3>Cinematic Video Production</h3>
            <p>Editorial workflow shaped by AAA trailer rhythm, controlled atmosphere, and premium post-production judgment.</p>
            <ul class="list">
              <li>Adobe Premiere Pro mastery for cinematic timeline construction</li>
              <li>Narrative pacing designed for emotional escalation and release</li>
              <li>Sound layering, mixing awareness, and impact framing</li>
              <li>High-fidelity color grading instincts for dramatic tone</li>
              <li>Frame-accurate cut discipline for premium branded storytelling</li>
            </ul>
          </article>
          <article class="panel cap-card reveal">
            <h3>Edge Infrastructure Accomplishments</h3>
            <p>Outcome-oriented infrastructure thinking centered on speed, survivability, and operational confidence.</p>
            <ul class="list">
              <li>Zero-latency previews through edge-delivered response paths</li>
              <li>Custom route proxies that simplify external-facing flows</li>
              <li>DDoS mitigation posture reinforced at the network edge</li>
              <li>Script-driven deployments for disciplined release cycles</li>
              <li>Production UX aligned with high-trust studio and enterprise expectations</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="section" id="works">
      <div class="container">
        <div class="section-head reveal">
          <div>
            <div class="section-kicker">Selected Works</div>
            <h2 class="section-title">Three focused proofs of technical and creative range.</h2>
          </div>
          <p>Each project card opens a detailed modal preview and includes an external action path for recruiters, studios, and collaborators.</p>
        </div>

        <div class="works-grid">
          <article class="work-card reveal" style="background-image:url('https://sspark.genspark.ai/cfimages?u1=KGuw9IJjjhhojVYEU6iQp0WIEWJCT8Hk0nnYJInnMlE0ElZHvw%2BRllEfX4yQ%2BCAQO3rShqjN6%2B%2Fxf22Y3noQ3KceeJOrz4Zmhrk7vaFF2CCJ&u2=bA8PcLou0oqu6Lvd&width=2560');">
            <div class="work-body">
              <div class="tag-row"><span class="tag">Cloudflare Worker</span><span class="tag">WAF</span><span class="tag">Custom Domain</span></div>
              <h3>Cyber Castle / Discipline Hub</h3>
              <p>Edge-routed Cloudflare Worker infrastructure protected by WAF and custom domain armor at karakoc.dev.</p>
              <div class="btn-row">
                <button class="btn btn-primary" data-modal-open="modal-castle">Open Details</button>
                <a class="btn btn-secondary" href="https://karakoc.dev" target="_blank" rel="noopener noreferrer">Visit Domain</a>
              </div>
            </div>
          </article>

          <article class="work-card reveal" style="background-image:url('https://sspark.genspark.ai/cfimages?u1=AKGpnb6qOvyrQZZ3EmKxiu3BSaGQ5zlhzEAXTqjoVaHss%2Fx%2F1PIyOkiMrrryFTH7EGVTb31t0DExygD49Gu3BnKyyqfl05f%2FRXYnMm2H%2FlljpEetuGsItZf%2F%2BSFJXOmnzVx85QpyfKW%2BlsSYcVRMKthd60suCXRfi1dlA5lgdEY%2FO71yIX0lc5wzkwFqQj%2FXO5YJjxS6BgjaJWHpTQJNyDqJqUX0Q8vKuRsgUIRPMAkuwhpwl0onvX9egZO0nkDf9x8hBL4xjP%2FB2O0iZmz8Y5H%2FlbqMRppygisGp0E%3D&u2=LG%2Bo%2BBPc5x5%2FW1WP&width=2560');">
            <div class="work-body">
              <div class="tag-row"><span class="tag">Premiere Pro</span><span class="tag">Narrative Edit</span><span class="tag">Color Grade</span></div>
              <h3>TLOU Part II Cinematic Tribute</h3>
              <p>Narrative-driven editorial treatment with custom sound design instincts and AAA-grade cinematic finishing.</p>
              <div class="btn-row">
                <button class="btn btn-primary" data-modal-open="modal-tlou">Open Details</button>
                <a class="btn btn-secondary" href="https://instagram.com/karakoc.dev" target="_blank" rel="noopener noreferrer">View Social Channel</a>
              </div>
            </div>
          </article>

          <article class="work-card reveal" style="background-image:url('https://sspark.genspark.ai/cfimages?u1=55ch4KPl6qLgD2uvK6Ra1Y62WCjFcWZc8yXEF5DQiVzCYV5AMwvuMn1y03k47qhuLgAsHRww7qvvi7dQH9AZzGHKKnis1u1VtrQE5ehMjKe72F%2FFgoZOcuSvTTvlvv%2BANqgLD6QXnm8Ehg%3D%3D&u2=ujnp6pM9Xb0%2Bo9oY&width=2560');">
            <div class="work-body">
              <div class="tag-row"><span class="tag">Python</span><span class="tag">Automation</span><span class="tag">CI/CD Support</span></div>
              <h3>Edge Automation Script Suite</h3>
              <p>Python-based deployment and CI/CD support scripts designed to reduce friction, manual drift, and operational repetition.</p>
              <div class="btn-row">
                <button class="btn btn-primary" data-modal-open="modal-automation">Open Details</button>
                <a class="btn btn-secondary" href="https://github.com/Siberexe/disciplinehub.git" target="_blank" rel="noopener noreferrer">Open GitHub</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section" id="contact">
      <div class="container">
        <div class="status-grid">
          <div class="panel stat-card reveal">
            <div class="section-kicker">System Status</div>
            <h2 class="section-title" style="font-size:clamp(1.9rem,3vw,2.7rem);">All Networks Operational. Edge WAF Active.</h2>
            <div class="status-line"><span class="pulse" aria-hidden="true"></span><span>Secure delivery posture live across edge-facing entry points.</span></div>
            <p>For recruiter outreach, studio conversations, backend engineering roles, or cinematic editing opportunities, all primary channels are linked directly below for immediate access.</p>
            <div class="contact-grid">
              <a class="contact-link" href="https://github.com/Siberexe/disciplinehub.git" target="_blank" rel="noopener noreferrer"><div><strong>GitHub</strong><span>Infrastructure & code access</span></div><span>↗</span></a>
              <a class="contact-link" href="https://www.linkedin.com/in/mahir-karako%C3%A7-a8677b423?trk=contact-info" target="_blank" rel="noopener noreferrer"><div><strong>LinkedIn</strong><span>Executive profile</span></div><span>↗</span></a>
              <a class="contact-link" href="https://x.com/STAR_WANTED_" target="_blank" rel="noopener noreferrer"><div><strong>X / Twitter</strong><span>Public updates</span></div><span>↗</span></a>
              <a class="contact-link" href="https://instagram.com/karakoc.dev" target="_blank" rel="noopener noreferrer"><div><strong>Instagram</strong><span>Creative channel</span></div><span>↗</span></a>
              <a class="contact-link" href="mailto:karakocmahir2@gmail.com"><div><strong>Email</strong><span>karakocmahir2@gmail.com</span></div><span>↗</span></a>
              <a class="contact-link" href="#top"><div><strong>Return to Top</strong><span>Back to hero section</span></div><span>↑</span></a>
            </div>
          </div>

          <div class="panel stat-card reveal">
            <div class="section-kicker">Executive Summary</div>
            <h3 style="font-size:1.42rem;margin-bottom:14px;">Why this presentation works</h3>
            <p>The interface fuses AAA studio restraint with enterprise clarity: dark cinematic surfaces, disciplined rust-red accents, precise typography, and no disposable visual noise.</p>
            <div class="micro-grid">
              <div class="micro-card"><strong>Visual Direction</strong><span>Grounded, premium, atmospheric, and high-contrast without cheap glow or trend-driven gimmicks.</span></div>
              <div class="micro-card"><strong>Operational UX</strong><span>Sticky navigation, responsive layout logic, smooth anchors, reveal sequencing, and accessible modal behavior.</span></div>
              <div class="micro-card"><strong>Code Strategy</strong><span>Single Worker file, vanilla web stack, direct HTML response, and clean separation via CSS variables.</span></div>
              <div class="micro-card"><strong>Recruitment Focus</strong><span>Every section is designed to help recruiters and studio leads understand positioning within seconds.</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">
      <div class="footer-bar">
        <div>© 2026 Mahir Karakoç. Built with relentless discipline.</div>
        <div class="footer-social">
          <a class="icon-link" href="https://github.com/Siberexe/disciplinehub.git" target="_blank" rel="noopener noreferrer" aria-label="GitHub footer"><svg viewBox="0 0 24 24"><path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.56 0-.27-.01-1.18-.02-2.14-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.76 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.3 1.18-3.11-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.16 1.19a10.9 10.9 0 0 1 5.75 0c2.18-1.5 3.15-1.19 3.15-1.19.62 1.59.23 2.77.11 3.06.73.81 1.18 1.85 1.18 3.11 0 4.42-2.69 5.39-5.25 5.67.41.36.77 1.06.77 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.2.66.79.55 4.56-1.53 7.84-5.84 7.84-10.93C23.5 5.66 18.35.5 12 .5Z"></path></svg></a>
          <a class="icon-link" href="https://www.linkedin.com/in/mahir-karako%C3%A7-a8677b423?trk=contact-info" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn footer"><svg viewBox="0 0 24 24"><path d="M4.98 3.5A2.49 2.49 0 0 0 2.5 6a2.49 2.49 0 0 0 2.48 2.5A2.5 2.5 0 1 0 4.98 3.5ZM3 9h4v12H3V9Zm7 0h3.83v1.71h.05c.53-1.01 1.83-2.08 3.77-2.08 4.03 0 4.77 2.66 4.77 6.12V21h-4v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95V21h-4V9Z"></path></svg></a>
          <a class="icon-link" href="https://x.com/STAR_WANTED_" target="_blank" rel="noopener noreferrer" aria-label="X footer"><svg viewBox="0 0 24 24"><path d="M18.9 2H22l-6.77 7.73L23.2 22h-6.26l-4.9-6.46L6.39 22H3.28l7.24-8.27L.8 2h6.42l4.43 5.85L18.9 2Zm-1.1 18h1.73L6.26 3.89H4.4L17.8 20Z"></path></svg></a>
          <a class="icon-link" href="https://instagram.com/karakoc.dev" target="_blank" rel="noopener noreferrer" aria-label="Instagram footer"><svg viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7Zm10.75 1.65a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2A2.8 2.8 0 1 0 12 14.8 2.8 2.8 0 0 0 12 9.2Z"></path></svg></a>
          <a class="icon-link" href="mailto:karakocmahir2@gmail.com" aria-label="Email footer"><svg viewBox="0 0 24 24"><path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.4l9 5.85 9-5.85V7H3Zm18 10V9.77l-8.46 5.5a1 1 0 0 1-1.08 0L3 9.77V17h18Z"></path></svg></a>
        </div>
      </div>
    </div>
  </footer>

  <div class="modal-root" id="modal-castle" aria-hidden="true">
    <div class="modal-backdrop" data-modal-close></div>
    <div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="castle-title">
      <div class="modal-media" style="background-image:url('https://sspark.genspark.ai/cfimages?u1=KGuw9IJjjhhojVYEU6iQp0WIEWJCT8Hk0nnYJInnMlE0ElZHvw%2BRllEfX4yQ%2BCAQO3rShqjN6%2B%2Fxf22Y3noQ3KceeJOrz4Zmhrk7vaFF2CCJ&u2=bA8PcLou0oqu6Lvd&width=2560');"></div>
      <button class="modal-close" data-modal-close aria-label="Close modal">✕</button>
      <div class="modal-content">
        <h3 id="castle-title">Cyber Castle / Discipline Hub</h3>
        <div class="modal-meta"><span class="tag">Cloudflare</span><span class="tag">Workers</span><span class="tag">Custom Domain Armor</span></div>
        <p>This project demonstrates edge-routed delivery through Cloudflare Worker logic, domain-level authority through karakoc.dev, and a hardened security posture shaped around WAF-first traffic control.</p>
        <p>The presentation direction emphasizes confidence and survivability: fast entry paths, controlled request handling, and a premium public surface that reflects operational seriousness.</p>
        <div class="modal-actions">
          <a class="btn btn-primary" href="https://karakoc.dev" target="_blank" rel="noopener noreferrer">Open karakoc.dev</a>
          <a class="btn btn-secondary" href="https://github.com/Siberexe/disciplinehub.git" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a class="btn btn-secondary" href="https://www.linkedin.com/in/mahir-karako%C3%A7-a8677b423?trk=contact-info" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
  </div>

  <div class="modal-root" id="modal-tlou" aria-hidden="true">
    <div class="modal-backdrop" data-modal-close></div>
    <div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="tlou-title">
      <div class="modal-media" style="background-image:url('https://sspark.genspark.ai/cfimages?u1=AKGpnb6qOvyrQZZ3EmKxiu3BSaGQ5zlhzEAXTqjoVaHss%2Fx%2F1PIyOkiMrrryFTH7EGVTb31t0DExygD49Gu3BnKyyqfl05f%2FRXYnMm2H%2FlljpEetuGsItZf%2F%2BSFJXOmnzVx85QpyfKW%2BlsSYcVRMKthd60suCXRfi1dlA5lgdEY%2FO71yIX0lc5wzkwFqQj%2FXO5YJjxS6BgjaJWHpTQJNyDqJqUX0Q8vKuRsgUIRPMAkuwhpwl0onvX9egZO0nkDf9x8hBL4xjP%2FB2O0iZmz8Y5H%2FlbqMRppygisGp0E%3D&u2=LG%2Bo%2BBPc5x5%2FW1WP&width=2560');"></div>
      <button class="modal-close" data-modal-close aria-label="Close modal">✕</button>
      <div class="modal-content">
        <h3 id="tlou-title">TLOU Part II Cinematic Tribute</h3>
        <div class="modal-meta"><span class="tag">Premiere Pro</span><span class="tag">Narrative Pacing</span><span class="tag">AAA Finish</span></div>
        <p>This editorial concept is built around dramatic tempo control, emotional scene escalation, custom sound-layer instincts, and color treatment aimed at a grounded, prestige-studio tone.</p>
        <p>The work represents a creative profile designed for game studios and branded narrative teams that need a trailer-minded editor with technical discipline and visual restraint.</p>
        <div class="modal-actions">
          <a class="btn btn-primary" href="https://instagram.com/karakoc.dev" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a class="btn btn-secondary" href="https://x.com/STAR_WANTED_" target="_blank" rel="noopener noreferrer">X</a>
          <a class="btn btn-secondary" href="mailto:karakocmahir2@gmail.com">Email</a>
        </div>
      </div>
    </div>
  </div>

  <div class="modal-root" id="modal-automation" aria-hidden="true">
    <div class="modal-backdrop" data-modal-close></div>
    <div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="automation-title">
      <div class="modal-media" style="background-image:url('https://sspark.genspark.ai/cfimages?u1=55ch4KPl6qLgD2uvK6Ra1Y62WCjFcWZc8yXEF5DQiVzCYV5AMwvuMn1y03k47qhuLgAsHRww7qvvi7dQH9AZzGHKKnis1u1VtrQE5ehMjKe72F%2FFgoZOcuSvTTvlvv%2BANqgLD6QXnm8Ehg%3D%3D&u2=ujnp6pM9Xb0%2Bo9oY&width=2560');"></div>
      <button class="modal-close" data-modal-close aria-label="Close modal">✕</button>
      <div class="modal-content">
        <h3 id="automation-title">Edge Automation Script Suite</h3>
        <div class="modal-meta"><span class="tag">Python</span><span class="tag">Deployment Scripts</span><span class="tag">Operational Discipline</span></div>
        <p>This automation layer reflects a practical production philosophy: eliminate repetitive friction, codify maintenance steps, and support cleaner release velocity through repeatable scripts and CI/CD-friendly patterns.</p>
        <p>The value is not just speed. It is consistency, reduced human error, and stronger confidence during deployment and environment changes.</p>
        <div class="modal-actions">
          <a class="btn btn-primary" href="https://github.com/Siberexe/disciplinehub.git" target="_blank" rel="noopener noreferrer">Open GitHub</a>
          <a class="btn btn-secondary" href="https://www.linkedin.com/in/mahir-karako%C3%A7-a8677b423?trk=contact-info" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a class="btn btn-secondary" href="mailto:karakocmahir2@gmail.com">Email</a>
        </div>
      </div>
    </div>
  </div>

  <script>
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', function () {
        const isOpen = navLinks.classList.toggle('is-open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
      });

      navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          navLinks.classList.remove('is-open');
          menuToggle.setAttribute('aria-expanded', 'false');
        });
      });
    }

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });

    document.querySelectorAll('.reveal').forEach(function (el) { observer.observe(el); });

    const modalButtons = document.querySelectorAll('[data-modal-open]');
    const modals = document.querySelectorAll('.modal-root');

    function openModal(id) {
      const modal = document.getElementById(id);
      if (!modal) return;
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeModal(modal) {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    modalButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        openModal(button.getAttribute('data-modal-open'));
      });
    });

    modals.forEach(function (modal) {
      modal.querySelectorAll('[data-modal-close]').forEach(function (el) {
        el.addEventListener('click', function () { closeModal(modal); });
      });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        modals.forEach(function (modal) {
          if (modal.classList.contains('is-open')) closeModal(modal);
        });
      }
    });
  </script>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
        'cache-control': 'public, max-age=300',
        'x-content-type-options': 'nosniff',
        'referrer-policy': 'strict-origin-when-cross-origin',
        'permissions-policy': 'camera=(), microphone=(), geolocation=()'
      }
    });
  }
};
