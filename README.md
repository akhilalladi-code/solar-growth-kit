# Solar Growth Kit

A free-first product validation website for practical marketing and sales resources aimed at solar installers, EPCs, dealers and solar teams.

## Current release

- Responsive product landing page and catalogue.
- Interactive illustrative electricity-bill offset estimator.
- Early-interest links that open GitHub Discussions.
- No fabricated checkout, testimonials, customer counts, savings guarantees or sales claims.
- No third-party analytics, cookies, database or paid dependencies.

## Deploy with GitHub Pages

1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch **main** and folder **/(root)**, then Save.
4. Wait for the Pages deployment workflow to complete. Your site should appear at:
   `https://akhilalladi-code.github.io/solar-growth-kit/`

A workflow is included at `.github/workflows/pages.yml` to publish the static site.

## Important launch checklist

- Replace the placeholder `hello@solargrowthkit.example` mail links in `index.html` with a real, monitored address, or remove them.
- Create GitHub Discussions (Settings → General → Features → Discussions) to accept product feedback. The current CTA links there.
- Validate the intended products with actual solar businesses before producing a large catalogue.
- All planned prices are hypotheses, not live offers or validated willingness-to-pay.
- Connect a compliant payment and digital-delivery provider only after validation. No payment data is collected by this site.
- Add a privacy notice before enabling any form, mailing list, analytics or tracking.
- Check local legal, tax and consumer obligations before taking payments.

## Calculator limitations

The estimator converts the entered monthly bill to implied energy units using the entered tariff, then models the chosen percentage as an offset to that energy charge. It intentionally does **not** estimate rooftop area, system capacity, solar generation, installation cost, subsidy, payback or ROI. Real bills include charges and rules that vary by utility, tariff, state and customer type. Obtain a site-specific design and utility bill assessment before making a purchase decision.

## Local preview

This is a static website. Open `index.html` directly, or run a simple local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Contact

Until a real business inbox is connected, use GitHub Issues or Discussions for feedback. No form currently submits or stores visitor data.
