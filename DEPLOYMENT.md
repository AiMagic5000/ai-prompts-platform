# AI Prompts Platform - Deployment Guide

## Quick Deploy to Vercel

### Option 1: Via Vercel Dashboard (Recommended)

1. **Visit Vercel Dashboard**
   - Go to https://vercel.com/new
   - Click "Import Git Repository"

2. **Connect GitHub**
   - Select the `AiMagic5000/ai-prompts-platform` repository
   - Click "Import"

3. **Configure Environment Variables**
   Add these variables in the Vercel dashboard:

   ```
   # Required
   NEXT_PUBLIC_SITE_URL=https://prompts.alwaysencrypted.com
   NEXT_PUBLIC_SUPABASE_URL=https://db.cognabase.com
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<your_anon_key>
   SUPABASE_SERVICE_ROLE_KEY=<your_service_role_key>

   # NextAuth (Required for auth)
   NEXTAUTH_URL=https://prompts.alwaysencrypted.com
   NEXTAUTH_SECRET=<generate_with: openssl rand -base64 32>

   # Optional - Analytics
   NEXT_PUBLIC_UMAMI_WEBSITE_ID=<your_umami_id>
   NEXT_PUBLIC_UMAMI_URL=https://analytics.alwaysencrypted.com
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~2 minutes)

### Option 2: Via Vercel CLI

1. **Authenticate**
   ```bash
   vercel login
   ```
   Visit the URL shown and authenticate with your Vercel account.

2. **Deploy**
   ```bash
   cd /mnt/c/Users/flowc/Projects/ai-prompts-platform
   vercel --prod
   ```

3. **Set Environment Variables**
   ```bash
   vercel env add NEXT_PUBLIC_SITE_URL production
   vercel env add NEXT_PUBLIC_SUPABASE_URL production
   vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production
   vercel env add SUPABASE_SERVICE_ROLE_KEY production
   vercel env add NEXTAUTH_URL production
   vercel env add NEXTAUTH_SECRET production
   ```

4. **Redeploy with env vars**
   ```bash
   vercel --prod
   ```

---

## Custom Domain Setup

### Connect prompts.alwaysencrypted.com

1. In Vercel Dashboard, go to your project settings
2. Navigate to "Domains"
3. Add `prompts.alwaysencrypted.com`
4. Add the DNS records shown to your Cloudflare dashboard:
   - Type: CNAME
   - Name: prompts
   - Target: cname.vercel-dns.com

### Cloudflare DNS Configuration

```
Type    Name      Content                  Proxy Status
CNAME   prompts   cname.vercel-dns.com    DNS only (gray cloud)
```

**Important:** Set to "DNS only" (gray cloud) - Vercel handles SSL.

---

## Cognabase Database Setup

### 1. Create New Supabase Instance (if needed)

Using Coolify at https://coolify.alwaysencrypted.com:
- Create new Supabase instance for "ai-prompts-platform"
- Note the Kong URL, anon key, and service role key

### 2. Run Database Migration

Connect to your Cognabase instance and run:

```sql
-- Copy contents of supabase/migrations/001_initial_schema.sql
-- Run in Supabase SQL Editor
```

Or via psql:
```bash
psql -h <your-db-host> -U postgres -d postgres -f supabase/migrations/001_initial_schema.sql
```

### 3. Seed Initial Prompts

```bash
# Set environment variables first
export NEXT_PUBLIC_SUPABASE_URL=<your_url>
export SUPABASE_SERVICE_ROLE_KEY=<your_service_key>

# Run seed script
npx tsx scripts/seed-prompts.ts
```

---

## Post-Deployment Checklist

- [ ] Vercel deployment successful
- [ ] Custom domain connected
- [ ] SSL certificate active (automatic with Vercel)
- [ ] Environment variables set
- [ ] Database migration run
- [ ] Initial prompts seeded
- [ ] Test homepage loads
- [ ] Test dashboard loads
- [ ] Test search functionality
- [ ] Run Lighthouse audit (target: 90+)

---

## Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes | Production URL (https://prompts.alwaysencrypted.com) |
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | Cognabase API URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes | Public anonymous key |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes | Server-side service key |
| `NEXTAUTH_URL` | Yes | Auth callback URL |
| `NEXTAUTH_SECRET` | Yes | 32+ char secret |
| `GOOGLE_CLIENT_ID` | No | Google OAuth |
| `GOOGLE_CLIENT_SECRET` | No | Google OAuth |
| `STRIPE_SECRET_KEY` | No | Stripe payments |
| `STRIPE_WEBHOOK_SECRET` | No | Stripe webhooks |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | No | Stripe public key |
| `NEXT_PUBLIC_UMAMI_WEBSITE_ID` | No | Umami analytics |
| `NEXT_PUBLIC_UMAMI_URL` | No | Umami server URL |

---

## Troubleshooting

### Build Fails
```bash
# Run locally first
npm run build

# Check for TypeScript errors
npm run lint
```

### Database Connection Issues
- Verify NEXT_PUBLIC_SUPABASE_URL is correct
- Check Kong container is healthy
- Verify anon key matches Supabase instance

### Auth Not Working
- Ensure NEXTAUTH_URL matches deployment URL exactly
- Generate fresh NEXTAUTH_SECRET
- Check callback URLs in OAuth provider settings

---

## Support

- GitHub: https://github.com/AiMagic5000/ai-prompts-platform
- Issues: Create issue in repository
- Company: AlwaysEncrypted
