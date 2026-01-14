# AI Prompts Platform - Claude Session Context

> **Last Updated:** January 14, 2026
> **Project URL:** https://prompts.alwaysencrypted.com
> **Repository:** https://github.com/AiMagic5000/ai-prompts-platform

---

## Project Overview

A premium AI prompts library platform selling access to 1000+ AI prompts, n8n automations, masterclass training, and AI tools guide. Users purchase via Gumroad and verify access using a 6-digit PIN code.

### Key Features
- 500 main AI prompts + 500 bonus prompts
- 250+ n8n automation templates
- Prompt Engineering Masterclass (YouTube embeds)
- AI Tools Guide
- Mobile-first responsive design
- Dark theme dashboard with light auth pages

### Business Model
- **Price:** $39 one-time (80% off from $199)
- **Payment:** Gumroad integration
- **Access:** PIN verification (197019)
- **Upsell:** n8n hosting ($11.95/mo after 2 months free)

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.1 | Framework (App Router) |
| React | 19 | UI Library |
| TypeScript | 5.x | Type Safety |
| Tailwind CSS | 4.x | Styling |
| Framer Motion | 12.x | Animations |
| Clerk | Optional | Auth (when configured) |
| Lucide React | Icons | Icon Library |

### Important Dependencies
```json
{
  "dependencies": {
    "@tailwindcss/postcss": "^4",
    "tailwindcss": "^4",
    "next": "16.1.1",
    "react": "^19.0.0",
    "framer-motion": "^12.0.0",
    "@clerk/nextjs": "^6.12.0"
  }
}
```

> **CRITICAL:** Tailwind CSS v4 dependencies MUST be in `dependencies`, NOT `devDependencies`, or production builds will fail.

---

## Authentication Flow

### Current System (PIN-based)
Since Clerk is not configured with real API keys, the platform uses a simple PIN verification system:

```
User Journey:
1. User purchases on Gumroad → Receives PIN (197019) in email
2. User visits /sign-in → Clicks "Enter PIN Code"
3. User enters PIN at /verify-pin
4. PIN validated → Stored in localStorage
5. User redirected to /dashboard
```

### Key Files

| File | Purpose |
|------|---------|
| `/src/app/(auth)/sign-in/[[...sign-in]]/page.tsx` | Sign-in page with PIN option |
| `/src/app/(auth)/sign-up/[[...sign-up]]/page.tsx` | Payment/sign-up page (Gumroad) |
| `/src/app/(auth)/verify-pin/page.tsx` | PIN entry and verification |
| `/src/contexts/payment-context.tsx` | Payment/verification state management |
| `/src/app/(dashboard)/layout.tsx` | Dashboard layout with auth check |

### PIN Verification Code
```typescript
// In /src/contexts/payment-context.tsx
const VALID_PIN = '197019'

const verifyPin = (pin: string): boolean => {
  if (pin === VALID_PIN) {
    localStorage.setItem('pin_verified', 'true')
    localStorage.setItem('pin_verified_at', new Date().toISOString())
    setHasPaid(true)
    return true
  }
  return false
}
```

### Clerk Configuration (When Ready)
To enable Clerk auth with Google sign-in:
1. Get real Clerk API keys
2. Set `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` in `.env.local`
3. Set `CLERK_SECRET_KEY` in `.env.local`
4. The code automatically detects and uses Clerk when configured

```typescript
// Detection logic in auth pages
const CLERK_CONFIGURED = !!(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
  !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes('placeholder') &&
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.startsWith('pk_')
)
```

---

## Deployment Infrastructure

### Coolify Setup
- **Application ID:** `l4gsc8gcssos0w0cs44kk8go`
- **Coolify URL:** https://coolify.alwaysencrypted.com
- **API Token:** `4|1XflCpmREERP7N4yfscb7sSUVruXHSpzkddp7aBN0bbc79d2`
- **Server:** R730 at 10.28.28.30

### Cloudflare Tunnel
- **Tunnel ID:** `d4b5f6f4-a09b-4c0b-9cbb-a80659ea775c`
- **Tunnel Name:** `r730-tunnel`
- **Account ID:** `82f3c6e0ba2e585cd0fe3492151de1a0`

### Deployment Commands

```bash
# Trigger deployment via API
curl -s -X POST -H "Authorization: Bearer 4|1XflCpmREERP7N4yfscb7sSUVruXHSpzkddp7aBN0bbc79d2" \
  "http://10.28.28.30:8000/api/v1/applications/l4gsc8gcssos0w0cs44kk8go/restart"

# Check deployment status
curl -s -H "Authorization: Bearer 4|1XflCpmREERP7N4yfscb7sSUVruXHSpzkddp7aBN0bbc79d2" \
  "http://10.28.28.30:8000/api/v1/deployments/{DEPLOYMENT_UUID}" | jq '.status'

# Get current container name
ssh admin1@10.28.28.30 "docker ps --filter 'name=l4gsc8gcssos0w0cs44kk8go' --format '{{.Names}}'"
```

### Container Name Changes After Deployment
**IMPORTANT:** After each Coolify deployment, the container name changes (e.g., `l4gsc8gcssos0w0cs44kk8go-085454001057`). You MUST update the Cloudflare tunnel configuration:

```bash
# Get new container name
NEW_CONTAINER=$(ssh admin1@10.28.28.30 "docker ps --filter 'name=l4gsc8gcssos0w0cs44kk8go' --format '{{.Names}}' | head -1")

# Update tunnel config via API (replace container name in the ingress array)
# See "Cloudflare Tunnel Update" section below
```

### Cloudflare Tunnel Update Script
```bash
TUNNEL_ID="d4b5f6f4-a09b-4c0b-9cbb-a80659ea775c"
CF_EMAIL="Coreypearsonemail@gmail.com"
CF_KEY="922460400012ed8596f9188ad3a21aac2918e"
ACCOUNT_ID="82f3c6e0ba2e585cd0fe3492151de1a0"
NEW_CONTAINER="l4gsc8gcssos0w0cs44kk8go-XXXXXX"  # Replace with actual

CONFIG='{
  "config": {
    "ingress": [
      {"service":"http://'$NEW_CONTAINER':3000","hostname":"prompts.alwaysencrypted.com"},
      {"service":"http://q84s4wk88gs4o8880sssc8ww-173037475067:3000","hostname":"humanlystaffing.com"},
      {"service":"http://q84s4wk88gs4o8880sssc8ww-173037475067:3000","hostname":"www.humanlystaffing.com"},
      {"service":"http://onlyoffice-documentserver:80","hostname":"onlyoffice.alwaysencrypted.com"},
      {"service":"http://umami:3000","hostname":"analytics.alwaysencrypted.com"},
      {"service":"http://10.0.1.7:3001","hostname":"uptime.alwaysencrypted.com"},
      {"service":"http://seafile-g0gog8cccgcswcwwk040kokg:80","hostname":"seafile.alwaysencrypted.com"},
      {"service":"http://n8n:5678","hostname":"n8n.alwaysencrypted.com"},
      {"service":"http://10.0.1.6:8080","hostname":"coolify.alwaysencrypted.com"},
      {"service":"http://coolify-realtime:6001","hostname":"realtime.alwaysencrypted.com"},
      {"service":"http://n4wkkcg408swkssw0gcsss00-005223494378:3000","hostname":"cognabase.com"},
      {"service":"http://supabase-kong-r8woc8gk8gcsg8ksc4sgckgw:8000","hostname":"db.cognabase.com"},
      {"service":"http://supabase-studio-r8woc8gk8gcsg8ksc4sgckgw:3000","hostname":"studio.cognabase.com"},
      {"service":"http://supabase-kong-z0scccs8w0g0sg0wccsws00k:8000","hostname":"smb-db.cognabase.com"},
      {"service":"http://supabase-studio-z0scccs8w0g0sg0wccsws00k:3000","hostname":"smb-studio.cognabase.com"},
      {"service":"http://supabase-kong-rok0wookccc0kgcwo88kg08o:8000","hostname":"scorewise-db.cognabase.com"},
      {"service":"http://supabase-studio-rok0wookccc0kgcwo88kg08o:3000","hostname":"scorewise-studio.cognabase.com"},
      {"service":"http://supabase-kong-os04ocgs80w8c8w8cgkcc408:8000","hostname":"ccform-db.cognabase.com"},
      {"service":"http://supabase-studio-os04ocgs80w8c8w8cgkcc408:3000","hostname":"ccform-studio.cognabase.com"},
      {"service":"http://supabase-kong-io0ko4c8c440sckkoog8ogg0:8000","hostname":"bizmanage-db.cognabase.com"},
      {"service":"http://supabase-studio-io0ko4c8c440sckkoog8ogg0:3000","hostname":"bizmanage-studio.cognabase.com"},
      {"service":"http://supabase-kong-go0o4w08ok4kgwgo4go40kg4:8000","hostname":"onboarding-db.cognabase.com"},
      {"service":"http://supabase-studio-go0o4w08ok4kgwgo4go40kg4:3000","hostname":"onboarding-studio.cognabase.com"},
      {"service":"http_status:404"}
    ],
    "warp-routing":{"enabled":false}
  }
}'

curl -s -X PUT "https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/cfd_tunnel/${TUNNEL_ID}/configurations" \
  -H "X-Auth-Email: ${CF_EMAIL}" \
  -H "X-Auth-Key: ${CF_KEY}" \
  -H "Content-Type: application/json" \
  -d "$CONFIG"
```

---

## Issues Fixed (Session History)

### 1. Tailwind CSS v4 Build Failure
**Problem:** Production build failed with `@tailwindcss/postcss module not found`
**Cause:** Tailwind v4 dependencies were in `devDependencies`
**Solution:** Moved to `dependencies` in package.json
```json
"dependencies": {
  "@tailwindcss/postcss": "^4",
  "tailwindcss": "^4"
}
```

### 2. Disk Space Exhaustion on R730
**Problem:** Deployment failed with "No space left on device"
**Cause:** Docker build cache accumulated to 34GB, root disk at 100%
**Solution:**
```bash
ssh admin1@10.28.28.30 "docker builder prune -a -f"
ssh admin1@10.28.28.30 "docker image prune -a -f --filter 'until=168h'"
```

### 3. PIN Input Not Showing Numbers
**Problem:** Users couldn't see numbers when typing PIN
**Cause:** Missing explicit text color on input field
**Solution:** Added `bg-white text-slate-900 placeholder:text-slate-300` classes
```tsx
<input
  className="... bg-white text-slate-900 placeholder:text-slate-300 ..."
/>
```

### 4. 502 Errors After Deployment
**Problem:** Site returned 502 after successful deployment
**Cause:** Cloudflare tunnel pointed to old container name
**Solution:** Update tunnel config with new container name after each deployment

### 5. Authentication Flow Confusion
**Problem:** Sign-in page showed payment form instead of login for returning users
**Solution:**
- Created separate `/verify-pin` page for PIN entry
- Updated sign-in to direct users to PIN verification
- Sign-up page handles new purchases via Gumroad

---

## Important URLs & Links

### Platform URLs
| Page | URL |
|------|-----|
| Homepage | https://prompts.alwaysencrypted.com |
| Sign In | https://prompts.alwaysencrypted.com/sign-in |
| Sign Up | https://prompts.alwaysencrypted.com/sign-up |
| PIN Verify | https://prompts.alwaysencrypted.com/verify-pin |
| Dashboard | https://prompts.alwaysencrypted.com/dashboard |
| Prompts | https://prompts.alwaysencrypted.com/dashboard/prompts |
| Bonus Prompts | https://prompts.alwaysencrypted.com/dashboard/bonus-prompts |
| Automations | https://prompts.alwaysencrypted.com/dashboard/automations |
| Masterclass | https://prompts.alwaysencrypted.com/dashboard/masterclass |
| AI Tools Guide | https://prompts.alwaysencrypted.com/dashboard/ai-tools-guide |

### External Links
| Service | URL |
|---------|-----|
| Gumroad Payment | https://coreypearson.gumroad.com/l/eayfol |
| n8n Training | https://dashboard.startmybusiness.us/training |
| Business Services | https://startmybusiness.us |

---

## File Structure

```
src/
├── app/
│   ├── (auth)/
│   │   ├── sign-in/[[...sign-in]]/page.tsx    # Sign-in with PIN option
│   │   ├── sign-up/[[...sign-up]]/page.tsx    # Gumroad payment page
│   │   └── verify-pin/page.tsx                 # PIN verification
│   ├── (dashboard)/
│   │   ├── layout.tsx                          # Dashboard layout + auth
│   │   └── dashboard/
│   │       ├── page.tsx                        # Dashboard home
│   │       ├── prompts/page.tsx                # Main prompts
│   │       ├── bonus-prompts/page.tsx          # Bonus prompts
│   │       ├── automations/page.tsx            # n8n templates
│   │       ├── masterclass/page.tsx            # Training videos
│   │       ├── ai-tools-guide/page.tsx         # AI tools guide
│   │       ├── collections/page.tsx            # User collections
│   │       ├── favorites/page.tsx              # User favorites
│   │       ├── resources/page.tsx              # Resources
│   │       └── settings/page.tsx               # Settings
│   ├── layout.tsx                              # Root layout
│   └── page.tsx                                # Homepage
├── components/
│   ├── dashboard/
│   │   └── paywall.tsx                         # Paywall component
│   ├── marketing/
│   │   └── business-cta.tsx                    # Business CTAs
│   ├── shared/
│   │   └── logo.tsx                            # Logo component
│   └── ui/
│       └── theme-toggle.tsx                    # Dark/light toggle
├── contexts/
│   └── payment-context.tsx                     # Payment/PIN state
├── data/
│   ├── prompts.json                            # 500 main prompts
│   └── bonus-prompts.json                      # 500 bonus prompts
└── lib/
    └── utils.ts                                # Utility functions
```

---

## n8n Setup Service Offer

Displayed on `/dashboard/automations`:

| Feature | Value |
|---------|-------|
| Setup Fee | ~~$50~~ **FREE** (Prompt Vault bonus) |
| Trial Period | 2 months FREE |
| Monthly After Trial | $11.95/month |
| What's Included | Own n8n server, 250+ templates, professional setup |

---

## Environment Variables

```env
# Clerk (optional - only if using Clerk auth)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_xxx
CLERK_SECRET_KEY=sk_xxx
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# App
NEXT_PUBLIC_APP_URL=https://prompts.alwaysencrypted.com
```

---

## Common Tasks

### Deploy Changes
```bash
cd "/mnt/c/Users/flowc/Documents/AI prompts platform"
git add -A && git commit -m "Your message" && git push origin main

# Then trigger Coolify deployment
curl -s -X POST -H "Authorization: Bearer 4|1XflCpmREERP7N4yfscb7sSUVruXHSpzkddp7aBN0bbc79d2" \
  "http://10.28.28.30:8000/api/v1/applications/l4gsc8gcssos0w0cs44kk8go/restart"

# Wait for deployment, then update tunnel with new container name
```

### Check Site Status
```bash
curl -s -o /dev/null -w "%{http_code}" "https://prompts.alwaysencrypted.com"
```

### View Container Logs
```bash
ssh admin1@10.28.28.30 "docker logs l4gsc8gcssos0w0cs44kk8go-XXXXXX --tail 100"
```

### Clear User's PIN Verification (for testing)
In browser console on the site:
```javascript
localStorage.removeItem('pin_verified')
localStorage.removeItem('pin_verified_at')
```

---

## Contact & Support

- **Support Email:** support@startmybusiness.us
- **Business Phone:** 888-534-4145
- **Business Website:** https://startmybusiness.us
- **Footer Credit:** startmybrand.us

---

## Notes for Future Sessions

1. **After any deployment:** Always update Cloudflare tunnel with new container name
2. **Tailwind CSS:** Keep v4 deps in `dependencies`, not `devDependencies`
3. **Disk space:** Monitor R730 disk usage, clean Docker cache if needed
4. **PIN code:** Currently universal (197019) - can be changed in `payment-context.tsx` and `verify-pin/page.tsx`
5. **Clerk integration:** Ready to enable when API keys are provided
6. **All "Access Free Automations" links:** Point to `https://dashboard.startmybusiness.us/training`
