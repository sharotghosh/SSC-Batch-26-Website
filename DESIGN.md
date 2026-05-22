---
name: Heritage Glow
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daef'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8fd'
  surface-container-highest: '#dce2f7'
  on-surface: '#141b2b'
  on-surface-variant: '#59413a'
  inverse-surface: '#293040'
  inverse-on-surface: '#edf0ff'
  outline: '#8d7168'
  outline-variant: '#e1bfb5'
  surface-tint: '#ac3400'
  primary: '#9b2f00'
  on-primary: '#ffffff'
  primary-container: '#c2410c'
  on-primary-container: '#ffece7'
  inverse-primary: '#ffb59d'
  secondary: '#855300'
  on-secondary: '#ffffff'
  secondary-container: '#fea619'
  on-secondary-container: '#684000'
  tertiary: '#56554e'
  on-tertiary: '#ffffff'
  tertiary-container: '#6f6d66'
  on-tertiary-container: '#f4f0e7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbd0'
  primary-fixed-dim: '#ffb59d'
  on-primary-fixed: '#390c00'
  on-primary-fixed-variant: '#832600'
  secondary-fixed: '#ffddb8'
  secondary-fixed-dim: '#ffb95f'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#e6e2d9'
  tertiary-fixed-dim: '#c9c6be'
  on-tertiary-fixed: '#1c1c17'
  on-tertiary-fixed-variant: '#484741'
  background: '#f9f9ff'
  on-background: '#141b2b'
  surface-variant: '#dce2f7'
typography:
  display-lg:
    fontFamily: Syne
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Syne
    fontSize: 30px
    fontWeight: '700'
    lineHeight: '1.5'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Syne
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Syne
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-padding: 32px
  gutter: 24px
  section-gap: 80px
  max-width: 1280px
---

## Brand & Style

The design system embodies a "Warm & Premium Heritage" aesthetic, pivoting from cold digital space to the tactile, inviting atmosphere of a high-end physical atelier. The brand personality is welcoming yet authoritative, blending modern fluidity with the gravitas of established tradition. It targets a sophisticated audience that appreciates craftsmanship, warmth, and seamless user experiences.

The visual style is a hybrid of **Minimalism** and **Glassmorphism**, characterized by expansive cream-toned surfaces, soft organic light leaks, and refined translucent layers. The emotional response is one of calm confidence—evoking the feeling of a sun-drenched library or a luxury boutique at golden hour. All transitions should feel "weighted" and deliberate, eschewing snappy animations for smooth, ease-in-out motions that suggest quality and care.

## Colors

The palette is anchored by a triad of warmth: a deep, sun-kissed orange serves as the primary brand driver, supported by soft amber accents that guide the user’s eye toward secondary actions. The foundational surface color is a rich, buttery cream, which replaces harsh whites to reduce eye strain and enhance the premium feel.

Contrast is provided by a refined charcoal—a blue-tinted near-black—used exclusively for typography and structural borders to ensure legibility and grounding. Glassmorphism effects should utilize semi-transparent versions of the cream background with a subtle "amber-tinted" blur to maintain the warm glow across layered interfaces.

## Typography

Typography in the design system focuses on the tension between the expressive, avant-garde nature of **Syne** and the professional precision of **Manrope**. Headlines utilize Syne in heavier weights (Bold to ExtraBold) to create a sense of architectural strength and heritage. 

Body copy transitions to Manrope to ensure maximum readability and a contemporary edge. To maintain the premium feel, letter-spacing is tightened slightly for large display text and opened up for labels and navigation items. All type should be rendered in the refined charcoal neutral for high accessibility against the cream and amber backgrounds.

## Layout & Spacing

This design system utilizes a **Fluid Grid** model built on an 8px baseline. Content is housed within a 12-column structure on desktop, collapsing to 8 columns on tablet and 4 columns on mobile. 

The spacing philosophy emphasizes "breathability." Large section gaps (80px+) are used to separate major content blocks, creating a sense of luxury through generous whitespace. Margins and container padding are intentionally wider than standard patterns to frame content like a high-end editorial spread. Components should utilize internal padding that favors height, giving buttons and inputs a "sturdy" and premium presence.

## Elevation & Depth

Visual hierarchy is established through **Premium Glassmorphism** and **Tonal Layers**. Rather than using traditional shadows, the design system creates depth by layering translucent panels over "organic glows"—soft, out-of-focus amber and orange radial gradients that appear to sit behind the main content area.

When depth is required for interactive elements (like modals or floating cards), use a high-refraction backdrop blur (20px-40px) combined with an ultra-thin, low-opacity charcoal border (5-10% opacity). This creates a "glass plate" effect that feels integrated into the warm environment rather than sitting on top of it.

## Shapes

The shape language is organic and approachable. The design system uses a consistent **Rounded (0.5rem)** corner radius for most UI elements, increasing to **1.5rem (rounded-xl)** for large container cards and glass panels. This avoids the clinical feel of sharp corners while maintaining more structure than a fully pill-shaped aesthetic. 

Interactive elements like buttons and input fields should feel substantial; the roundedness should be paired with generous vertical padding to create a "soft-tactile" look that invites interaction.

## Components

### Buttons
Primary buttons use the deep sun-kissed orange with white or charcoal text. Secondary buttons should be styled as "ghost glass"—a transparent background with a backdrop blur and a thin charcoal border. Hover states should feature a subtle "glow" expansion rather than a simple color shift.

### Input Fields
Fields use the rich cream background with a subtle bottom-border in charcoal. On focus, the border should animate into a refined amber, and the background should gain a very slight tint of amber to indicate activity.

### Cards
Cards are the primary vehicle for glassmorphism. They feature a 40% opaque cream fill, a 20px backdrop blur, and rounded corners. Information inside cards should be strictly aligned to the grid, using Syne for headers to maintain the heritage feel.

### Navigation & Menus
The navigation bar should be a fixed glass element at the top of the viewport. As the user scrolls, the backdrop blur increases, and the organic glows from the content move behind it, creating a fluid, high-end transition.

### Chips & Tags
Small, pill-shaped tags used for categorization should use the secondary amber color at a low opacity (10-15%) with high-contrast charcoal text, ensuring they are legible without distracting from primary actions.