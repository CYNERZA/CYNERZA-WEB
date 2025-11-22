#!/usr/bin/env python3
"""
Generate favicons, social images, and UI logo sizes from CYNERZA logos.
Inputs:
- public/logo/cynerza-sqaure.png   (source square logo)
- public/logo/cynerza-horizontal.png (source horizontal logo)
Outputs (all in public/):
- favicon.ico (16,32,48,64)
- favicon-16x16.png
- favicon-32x32.png
- favicon-96x96.png
- apple-touch-icon.png (180x180)
- android-chrome-192x192.png
- android-chrome-512x512.png
- og-image.png (1200x630)
- twitter-image.png (1200x675)
UI logos for app usage:
- logo-square-96.png
- logo-square-256.png
- logo-square-512.png
- logo-horizontal-256.png
- logo-horizontal-512.png
Microsoft tiles:
- mstile-70x70.png
- mstile-150x150.png
- mstile-310x310.png
- mstile-310x150.png
"""
from pathlib import Path
from typing import Tuple

try:
    from PIL import Image, ImageDraw
except ImportError as e:
    raise SystemExit("Pillow is not installed. Please run: pip install pillow")

# Brand colors
PURPLE = (139, 92, 246)   # #8B5CF6
BLUE = (37, 99, 235)      # #2563EB
WHITE = (255, 255, 255)
BG = (252, 252, 255)

ROOT = Path(__file__).resolve().parents[1]
SRC_LOGO_SQUARE = ROOT / "public" / "logo" / "cynerza-sqaure.png"
SRC_LOGO_HORIZONTAL = ROOT / "public" / "logo" / "cynerza-horizontal.png"
OUT_DIR = ROOT / "public"

OUT_DIR.mkdir(parents=True, exist_ok=True)


def ensure_square(img: Image.Image) -> Image.Image:
    """Center-crop to a square."""
    w, h = img.size
    if w == h:
        return img
    side = min(w, h)
    left = (w - side) // 2
    top = (h - side) // 2
    return img.crop((left, top, left + side, top + side))


def load_square_source() -> Image.Image:
    """Load a square-capable source image with fallbacks after /public/logo removal."""
    if SRC_LOGO_SQUARE.exists():
        return Image.open(SRC_LOGO_SQUARE).convert("RGBA")
    # fallback to generated assets
    for candidate in [
        OUT_DIR / "logo-square-512.png",
        OUT_DIR / "android-chrome-512x512.png",
        OUT_DIR / "apple-touch-icon.png",
    ]:
        if candidate.exists():
            return Image.open(candidate).convert("RGBA")
    raise SystemExit("No square-capable logo found. Provide public/logo/cynerza-sqaure.png or logo-square-512.png.")


def load_horizontal_source() -> Image.Image | None:
    if SRC_LOGO_HORIZONTAL.exists():
        return Image.open(SRC_LOGO_HORIZONTAL).convert("RGBA")
    # fallback to generated horizontal asset
    candidate = OUT_DIR / "logo-horizontal-512.png"
    if candidate.exists():
        return Image.open(candidate).convert("RGBA")
    return None


def save_png(img: Image.Image, path: Path, size: Tuple[int, int] | None = None, quality: int = 90):
    im = img
    if size is not None:
        im = img.resize(size, Image.LANCZOS)
    im.save(path, format="PNG", optimize=True, quality=quality)


def make_linear_gradient(size: Tuple[int, int], start: Tuple[int, int, int], end: Tuple[int, int, int]) -> Image.Image:
    """Create a simple left-to-right linear gradient image."""
    w, h = size
    base = Image.new("RGB", (w, h), start)
    overlay = Image.new("RGB", (w, h), end)
    # alpha gradient
    alpha = Image.new("L", (w, 1))
    for x in range(w):
        alpha.putpixel((x, 0), int(255 * (x / max(1, w - 1))))
    alpha = alpha.resize((w, h))
    base.paste(overlay, (0, 0), alpha)
    return base


def paste_center(bg: Image.Image, fg: Image.Image):
    bx, by = bg.size
    fx, fy = fg.size
    bg.paste(fg, ((bx - fx) // 2, (by - fy) // 2), fg if fg.mode == "RGBA" else None)


def generate_favicons(square_logo: Image.Image):
    # PNG favicons
    save_png(square_logo, OUT_DIR / "favicon-16x16.png", (16, 16))
    save_png(square_logo, OUT_DIR / "favicon-32x32.png", (32, 32))
    save_png(square_logo, OUT_DIR / "favicon-96x96.png", (96, 96))

    # Apple & Android
    save_png(square_logo, OUT_DIR / "apple-touch-icon.png", (180, 180))
    save_png(square_logo, OUT_DIR / "android-chrome-192x192.png", (192, 192))
    save_png(square_logo, OUT_DIR / "android-chrome-512x512.png", (512, 512))

    # ICO (multi-size)
    ico_base = square_logo.copy()
    (OUT_DIR / "favicon.ico").write_bytes(b"")  # ensure file is recreated
    ico_base.save(OUT_DIR / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])


def generate_social_images(square_logo: Image.Image):
    # Open Graph 1200x630
    og_bg = make_linear_gradient((1200, 630), PURPLE, BLUE)
    # subtle overlay
    overlay = Image.new("RGBA", og_bg.size, (255, 255, 255, 20))
    og_bg = Image.alpha_composite(og_bg.convert("RGBA"), overlay).convert("RGB")
    og_logo = square_logo.resize((480, 480), Image.LANCZOS)
    paste_center(og_bg, og_logo)
    save_png(og_bg, OUT_DIR / "og-image.png")

    # Twitter 1200x675
    tw_bg = make_linear_gradient((1200, 675), PURPLE, BLUE)
    overlay2 = Image.new("RGBA", tw_bg.size, (255, 255, 255, 20))
    tw_bg = Image.alpha_composite(tw_bg.convert("RGBA"), overlay2).convert("RGB")
    tw_logo = square_logo.resize((520, 520), Image.LANCZOS)
    paste_center(tw_bg, tw_logo)
    save_png(tw_bg, OUT_DIR / "twitter-image.png")


def generate_ui_logos(square_logo: Image.Image, horizontal_logo: Image.Image | None):
    # Square UI logos
    save_png(square_logo, OUT_DIR / "logo-square-96.png", (96, 96))
    save_png(square_logo, OUT_DIR / "logo-square-256.png", (256, 256))
    save_png(square_logo, OUT_DIR / "logo-square-512.png", (512, 512))

    # Horizontal UI logos: scale by width preserving aspect ratio
    if horizontal_logo is not None:
        for w in (256, 512):
            hw = horizontal_logo.copy()
            hw = hw.convert("RGBA")
            ow, oh = hw.size
            if ow != w:
                ratio = w / float(ow)
                new_h = max(1, int(oh * ratio))
                hw = hw.resize((w, new_h), Image.LANCZOS)
            save_png(hw, OUT_DIR / f"logo-horizontal-{w}.png")


def generate_ms_tiles(square_logo: Image.Image):
    # Square tiles
    save_png(square_logo, OUT_DIR / "mstile-70x70.png", (70, 70))
    save_png(square_logo, OUT_DIR / "mstile-150x150.png", (150, 150))
    save_png(square_logo, OUT_DIR / "mstile-310x310.png", (310, 310))

    # Wide tile 310x150 with gradient background
    wide_bg = make_linear_gradient((310, 150), PURPLE, BLUE).convert("RGBA")
    overlay = Image.new("RGBA", wide_bg.size, (255, 255, 255, 18))
    wide_bg = Image.alpha_composite(wide_bg, overlay)
    logo_size = int(150 * 0.8)
    wide_logo = square_logo.resize((logo_size, logo_size), Image.LANCZOS)
    paste_center(wide_bg, wide_logo)
    save_png(wide_bg.convert("RGB"), OUT_DIR / "mstile-310x150.png")


def main():
    # load with fallbacks so we can delete /public/logo
    square_img = load_square_source()
    square = ensure_square(square_img)
    generate_favicons(square)
    generate_social_images(square)
    horizontal = load_horizontal_source()
    generate_ui_logos(square, horizontal)
    generate_ms_tiles(square)

    print("✅ Generated assets in ./public:")
    for p in [
        "favicon.ico",
        "favicon-16x16.png",
        "favicon-32x32.png",
        "favicon-96x96.png",
        "apple-touch-icon.png",
        "android-chrome-192x192.png",
        "android-chrome-512x512.png",
        "og-image.png",
        "twitter-image.png",
        "logo-square-96.png",
        "logo-square-256.png",
        "logo-square-512.png",
        "logo-horizontal-256.png",
        "logo-horizontal-512.png",
        "mstile-70x70.png",
        "mstile-150x150.png",
        "mstile-310x310.png",
        "mstile-310x150.png",
    ]:
        fp = OUT_DIR / p
        print(f" - {p} ({fp.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
