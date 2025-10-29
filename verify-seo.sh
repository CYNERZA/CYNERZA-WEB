#!/bin/bash

# SEO Verification Script for CYNERZA
# Run this before deployment to verify everything is correct

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🔍 CYNERZA SEO Verification Script"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

ERRORS=0
WARNINGS=0

echo "📋 Step 1: Building project..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if npm run build > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Build successful${NC}"
else
    echo -e "${RED}❌ Build failed${NC}"
    ERRORS=$((ERRORS + 1))
fi
echo ""

echo "📂 Step 2: Checking critical files..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Check robots.txt
if [ -f "public/robots.txt" ]; then
    echo -e "${GREEN}✅ robots.txt exists${NC}"
    if grep -q "Sitemap: https://cynerza.com/sitemap.xml" public/robots.txt; then
        echo -e "${GREEN}✅ Sitemap reference found in robots.txt${NC}"
    else
        echo -e "${RED}❌ Sitemap reference missing in robots.txt${NC}"
        ERRORS=$((ERRORS + 1))
    fi
else
    echo -e "${RED}❌ robots.txt not found${NC}"
    ERRORS=$((ERRORS + 1))
fi

# Check sitemap.xml
if [ -f "public/sitemap.xml" ]; then
    echo -e "${GREEN}✅ sitemap.xml exists${NC}"
    URL_COUNT=$(grep -c "<loc>" public/sitemap.xml)
    echo -e "${GREEN}   Found $URL_COUNT URLs in sitemap${NC}"
    if [ "$URL_COUNT" -ge 25 ]; then
        echo -e "${GREEN}✅ Sufficient URLs in sitemap (26 expected)${NC}"
    else
        echo -e "${YELLOW}⚠️  Less URLs than expected ($URL_COUNT found, 26 expected)${NC}"
        WARNINGS=$((WARNINGS + 1))
    fi
else
    echo -e "${RED}❌ sitemap.xml not found${NC}"
    ERRORS=$((ERRORS + 1))
fi
echo ""

echo "🔑 Step 3: Verifying SEO Keys..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Check industry pages
INDUSTRY_PAGES=("banking" "healthcare" "education" "retail" "capitalMarkets" "mediaCommunications" "publicServices" "travelLogistics")
INDUSTRY_ERRORS=0

for key in "${INDUSTRY_PAGES[@]}"; do
    if grep -q "getSEOData('$key')" src/components/industries/*.tsx 2>/dev/null; then
        echo -e "${GREEN}✅ Industry key '$key' in use${NC}"
    else
        echo -e "${RED}❌ Industry key '$key' NOT found${NC}"
        INDUSTRY_ERRORS=$((INDUSTRY_ERRORS + 1))
    fi
done

if [ $INDUSTRY_ERRORS -eq 0 ]; then
    echo -e "${GREEN}✅ All 8 industry pages have unique SEO keys${NC}"
else
    echo -e "${RED}❌ $INDUSTRY_ERRORS industry pages have issues${NC}"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# Check service pages
SERVICE_KEYS=("webDevelopment" "customLLMAPI" "automationSolutions" "aiMLSolutions" "cloudDevOps" "itServiceManagement")
SERVICE_ERRORS=0

for key in "${SERVICE_KEYS[@]}"; do
    if grep -q "getSEOData('$key')" src/components/services/*.tsx 2>/dev/null; then
        echo -e "${GREEN}✅ Service key '$key' in use${NC}"
    else
        echo -e "${RED}❌ Service key '$key' NOT found${NC}"
        SERVICE_ERRORS=$((SERVICE_ERRORS + 1))
    fi
done

if [ $SERVICE_ERRORS -eq 0 ]; then
    echo -e "${GREEN}✅ All 6 service pages have correct SEO keys${NC}"
else
    echo -e "${RED}❌ $SERVICE_ERRORS service pages have issues${NC}"
    ERRORS=$((ERRORS + 1))
fi
echo ""

echo "📊 Step 4: SEOConfig.ts Validation..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Count SEO configurations
SEO_COUNT=$(grep -c "title:" src/components/seo/SEOConfig.ts)
echo -e "${GREEN}   Found $SEO_COUNT SEO configurations${NC}"

if [ "$SEO_COUNT" -ge 30 ]; then
    echo -e "${GREEN}✅ SEOConfig has sufficient entries${NC}"
else
    echo -e "${YELLOW}⚠️  SEOConfig has fewer entries than expected${NC}"
    WARNINGS=$((WARNINGS + 1))
fi

# Check for critical keys
CRITICAL_KEYS=("customLLMAPI" "aiMLSolutions" "cloudDevOps" "itServiceManagement" "banking" "healthcare")
for key in "${CRITICAL_KEYS[@]}"; do
    if grep -q "$key:" src/components/seo/SEOConfig.ts; then
        echo -e "${GREEN}✅ Critical key '$key' exists in SEOConfig${NC}"
    else
        echo -e "${RED}❌ Critical key '$key' MISSING from SEOConfig${NC}"
        ERRORS=$((ERRORS + 1))
    fi
done
echo ""

echo "🌐 Step 5: Checking for duplicate SEO..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Check if industry pages all use generic 'industries' key (BAD)
GENERIC_INDUSTRY_COUNT=$(grep -h "getSEOData('industries')" src/components/industries/*.tsx 2>/dev/null | wc -l)

if [ "$GENERIC_INDUSTRY_COUNT" -eq 0 ]; then
    echo -e "${GREEN}✅ No industry pages using generic SEO (good!)${NC}"
else
    echo -e "${RED}❌ $GENERIC_INDUSTRY_COUNT industry pages using generic 'industries' key${NC}"
    echo -e "${RED}   This causes duplicate content issues!${NC}"
    ERRORS=$((ERRORS + 1))
fi
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📋 VERIFICATION SUMMARY"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo -e "${GREEN}🎉 ALL CHECKS PASSED!${NC}"
    echo -e "${GREEN}✅ Your SEO implementation is production-ready${NC}"
    echo ""
    echo "Next steps:"
    echo "  1. Run: npm run preview"
    echo "  2. Test manually at http://localhost:4173"
    echo "  3. Deploy to production"
    echo "  4. Submit sitemap to Google Search Console"
    exit 0
elif [ $ERRORS -eq 0 ]; then
    echo -e "${YELLOW}⚠️  Passed with $WARNINGS warning(s)${NC}"
    echo -e "${YELLOW}Review warnings above but safe to deploy${NC}"
    exit 0
else
    echo -e "${RED}❌ FAILED: $ERRORS error(s), $WARNINGS warning(s)${NC}"
    echo -e "${RED}Fix errors above before deploying${NC}"
    exit 1
fi
