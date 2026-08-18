# Awwwards-Level Motion & Interactive Design Direction

## Core Principle

Do NOT use generic web animations.

Absolutely avoid:

- Simple `fade-in`
- `fade-up`
- `slide-up`
- Elements appearing one-by-one on scroll
- Generic `whileInView` animations
- Random floating cards
- Basic parallax
- Standard scale-on-hover cards
- "Reveal every section when it enters the viewport"
- Bouncing buttons
- Excessive blur animations
- Generic animated gradients

These techniques are overused and immediately make the website feel like an AI-generated template.

The goal is to create **art-directed motion** where animation is directly connected to the visual language of interior architecture.

Motion should communicate:

**space → material → scale → transition → discovery**

The website should feel closer to an **interactive architecture portfolio** than a conventional business website.

---

# HERO — THE SIGNATURE EXPERIENCE

The hero must be the most memorable part of the website.

Do not create a standard:

```text
Headline
Paragraph
Buttons
Image
```

layout.

Instead, create a **full-screen visual composition** where typography, photography and navigation interact with one another.

## Hero Concept: "Space Revealed"

Start with the screen almost entirely occupied by a single architectural photograph.

The image should initially behave like a **physical surface**.

As the user enters the website:

1. The image appears as a large architectural composition.
2. A subtle crop movement reveals more of the room.
3. Typography emerges from within the composition rather than simply fading in.
4. The image slowly scales from an extreme crop toward its intended framing.
5. Architectural lines in the image should visually align with typography.
6. Navigation settles into position as part of the composition.
7. The final hero should feel like the viewer has physically entered the space.

The animation should be approximately 1.5–3 seconds and feel cinematic rather than slow.

---

# Hero Typography

Do not simply animate text opacity.

Use **typographic choreography**.

Example:

```text
SPACES
DESIGNED
AROUND YOU.
```

The headline can initially be oversized and partially outside the viewport.

As the hero animation progresses:

- Words move along different axes
- Letter spacing changes
- Typography compresses into its final layout
- Some text passes behind the architectural image
- Some text appears clipped by image boundaries
- The final composition locks into place

Use clipping/masking where appropriate.

Possible techniques:

- `clip-path`
- CSS masks
- transform-based cropping
- overflow clipping
- split text
- letter-level or word-level motion

Do not make every letter fly around independently.

The movement should feel intentional and architectural.

---

# Hero Image Interaction

The hero image should have depth.

Create a layered composition:

```text
BACKGROUND
    ↓
Architectural Image
    ↓
Image Overlay / Texture
    ↓
Typography
    ↓
Small Project Metadata
    ↓
Navigation
```

Use subtle depth movement based on cursor position on desktop.

For example:

Moving the cursor horizontally should create a **very subtle horizontal shift** between image and typography.

Moving vertically should produce a smaller depth response.

Do NOT make it feel like a 3D game.

The movement should be barely noticeable until the user moves the cursor.

---

# Hero Scroll Interaction

The first scroll should trigger a **designed transition**, not simply move to the next section.

Example:

As the user scrolls:

1. Hero image expands beyond its original frame.
2. Typography begins moving out of the composition.
3. The image slowly shifts upward.
4. The next project image emerges from behind the hero.
5. The hero transforms into the first portfolio section.

The transition should feel like:

**Hero → Project**

rather than:

**Hero ↓ Section 2**

This is extremely important.

The first scroll should feel like the website is **changing scenes**.

---

# HERO ALTERNATIVE — SPLIT ARCHITECTURAL FRAME

If the first hero concept doesn't fit the chosen imagery, use a second possible concept.

Create a full-screen split composition:

```text
┌─────────────────────────────────────────┐
│                                         │
│        IMAGE              IMAGE         │
│                                         │
│                 TITLE                   │
│                                         │
│        IMAGE              IMAGE         │
│                                         │
└─────────────────────────────────────────┘
```

The composition starts fragmented.

As the page loads:

- Image panels move into alignment
- Typography passes through the gaps
- Panels settle into a single architectural composition
- The image becomes the hero

The transition should resemble **architectural panels sliding into position**.

Do not use generic rectangular slide animations.

The timing and easing should make the movement feel physical.

---

# Page Transition Language

The entire website should use one consistent motion language.

Every major section should feel like a continuation of the previous one.

Avoid:

```text
Hero
↓
fade
↓
Projects
↓
fade
↓
About
↓
fade
```

Instead create:

```text
Hero
   ↓
Image expands
   ↓
Project appears inside image
   ↓
Project becomes portfolio
   ↓
Portfolio image transforms
   ↓
Image becomes About image
   ↓
About transitions into Services
```

Use **image morphing, scaling, clipping and spatial continuity**.

---

# PROJECT SECTION — CINEMATIC PORTFOLIO

The portfolio should not be a normal grid.

Make it an **interactive visual gallery**.

## Option A — Horizontal Project Journey

Create a horizontally moving project sequence controlled by vertical scroll.

The user scrolls vertically, but the portfolio moves horizontally.

Example:

```text
        PROJECT 01        PROJECT 02        PROJECT 03
       ┌───────────┐     ┌───────────┐     ┌───────────┐
       │           │     │           │     │           │
       │   IMAGE   │ →   │   IMAGE   │ →   │   IMAGE   │
       │           │     │           │     │           │
       └───────────┘     └───────────┘     └───────────┘
```

Use large-scale imagery.

The transition between projects should feel continuous.

---

# Project Interaction

When hovering a project:

Do not just scale the image.

Instead:

- Image slightly reframes
- Project title shifts position
- Metadata changes opacity
- A directional arrow follows the cursor
- A subtle image crop changes
- Cursor can transform into `VIEW PROJECT`

The project should feel interactive before the user clicks it.

---

# Project Detail Transition

When the user clicks a project:

Do not simply navigate to another page.

Create a **shared-element transition**.

Example:

```text
Portfolio Image
      ↓
expands
      ↓
fills viewport
      ↓
project page opens
      ↓
image becomes project hero
```

The user should feel like they are moving **inside the photograph**.

This is a major premium interaction.

---

# CURSOR SYSTEM

Implement a custom cursor on desktop.

Default:

Small circular cursor.

When hovering a project:

```text
VIEW
PROJECT
```

appears inside the cursor.

When hovering CTA:

```text
OPEN
```

When hovering an image:

Cursor can subtly invert against the image.

The cursor should have smooth interpolation rather than directly following the pointer.

Do not make the cursor huge or distracting.

Disable/customize it appropriately on touch devices.

---

# IMAGE REVEALS

Do not reveal images using simple opacity.

Use physical-looking image transitions.

Possible techniques:

### Curtain Reveal

A mask travels across the image while the image itself remains visible behind it.

### Crop Reveal

The image begins heavily cropped and gradually reveals its final composition.

### Scale Reveal

The image starts slightly oversized and settles into its final framing.

### Directional Reveal

The image enters from an architectural edge.

### Image-to-Image Transition

One project image morphs into another through shared positioning.

Use different techniques strategically.

Do not repeat the same reveal on every image.

---

# ABOUT SECTION — IMAGE AS ARCHITECTURE

The About section should not simply be:

```text
IMAGE | TEXT
```

Instead create an editorial composition.

For example:

A large portrait/studio image occupies most of the viewport.

Typography overlaps the image.

A smaller text block sits in an empty architectural area.

As the user moves through the section:

- Image crop changes
- Text position subtly shifts
- Large typography moves relative to the image
- A small stat appears as part of the composition

The effect should feel like a printed architecture magazine coming alive.

---

# SERVICES — MATERIAL INTERACTION

Do not create six boring cards.

Instead create a **vertical interactive service list**.

Example:

```text
RESIDENTIAL INTERIORS              01
COMMERCIAL SPACES                  02
MODULAR KITCHENS                   03
LIVING SPACES                      04
BEDROOM DESIGN                     05
TURNKEY INTERIORS                  06
```

When hovering a service:

- The typography expands or shifts
- A large project image appears beside/behind it
- The active service becomes visually dominant
- Other services recede
- Image follows the cursor subtly

Example:

```text
RESIDENTIAL INTERIORS

              [ LARGE RESIDENTIAL IMAGE ]

COMMERCIAL SPACES
MODULAR KITCHENS
LIVING SPACES
```

This makes the Services section feel like an interactive portfolio rather than a feature list.

---

# PROCESS — SCROLLING NARRATIVE

Do not use five cards.

Create a cinematic process sequence.

As the user scrolls through the section:

```text
01
CONSULTATION

        ↓

02
CONCEPT

        ↓

03
PLANNING

        ↓

04
EXECUTION

        ↓

05
HANDOVER
```

The active step becomes dominant while previous/next steps remain visible.

Use:

- Typography scale
- Position changes
- Progress indicator
- Image changes
- Horizontal movement

The process should feel like progressing through a project.

---

# TESTIMONIALS — MINIMAL MOTION

Keep testimonials understated.

Do not make them a typical carousel with arrows.

Instead:

Large quote.

Small client information.

A subtle progress indicator.

Changing testimonials can happen through:

- Dragging
- Scroll
- Click
- Auto-transition

Use smooth crossfades combined with slight positional movement.

Do not over-animate testimonials.

---

# FINAL CTA — ARCHITECTURAL TRANSITION

The final CTA should be another visual experience.

Example:

A full-screen interior image.

Large text:

> **Let's create a space  
> you'll love coming home to.**

As the user moves toward the CTA:

- Image subtly moves
- Typography changes position
- CTA becomes more prominent
- Background transitions toward the footer

The final CTA should feel like the conclusion of the visual journey.

---

# SCROLL EXPERIENCE

Scrolling should feel intentional.

Use scroll-driven animation for major moments.

Good uses:

- Hero transformation
- Image cropping
- Portfolio horizontal movement
- Typography positioning
- Section transitions
- Process progression
- Image scale
- Shared visual continuity

Bad uses:

- Every paragraph fading upward
- Every card scaling from 0.95 → 1
- Every section revealing individually
- Random floating objects

Use scroll animation **only when it changes the composition**.

---

# EASING

Avoid default browser easing.

Use carefully chosen cinematic easing.

Preferred feeling:

- Smooth
- Heavy
- Physical
- Slightly elastic where appropriate
- No exaggerated bounce

For major transitions, use custom cubic-bezier curves or spring physics.

Animation should have:

- Deliberate acceleration
- Controlled deceleration
- Natural momentum

Do not make everything move at the same speed.

---

# TECHNICAL MOTION REQUIREMENTS

If using React, use a professional animation system such as:

- GSAP
- ScrollTrigger
- Framer Motion / Motion
- Lenis or another smooth-scroll solution where appropriate

Use GSAP/ScrollTrigger for complex timeline and scroll choreography.

Use Framer Motion/Motion for component-level interactions where appropriate.

Do not install animation libraries just to implement basic fade effects.

Prefer GPU-friendly transforms:

- `transform`
- `opacity`
- `clip-path`

Avoid expensive continuous layout calculations.

---

# PERFORMANCE + MOTION

Awwwards-level does NOT mean heavy and slow.

The experience must remain performant.

Use:

- `transform`
- `opacity`
- optimized images
- responsive image sizes
- lazy loading
- `will-change` only when necessary
- animation cleanup
- ScrollTrigger cleanup
- reduced-motion support

Avoid constantly animating:

- width
- height
- top
- left
- margin

when transform-based alternatives exist.

---

# REDUCED MOTION

Respect:

```css
prefers-reduced-motion: reduce
```

Users who disable motion should still receive the complete website experience without broken layouts.

Animations should gracefully reduce to simple transitions.

---

# MOBILE MOTION

Do NOT blindly transfer desktop animations to mobile.

Mobile should have its own motion strategy.

Remove:

- Custom cursor
- Cursor-following interactions
- Excessive parallax
- Complex hover effects

Keep:

- Hero cinematic entrance
- Image transformations
- Scroll-driven transitions where performance allows
- Project transitions
- Typography choreography
- Smooth navigation

Touch interactions should feel natural.

---

# MOTION HIERARCHY

Not every section deserves the same amount of motion.

Use this hierarchy:

### Level 1 — Signature

Hero  
Project transitions  
Project detail transitions

These should be spectacular.

### Level 2 — Strong

Portfolio  
Services  
Final CTA

These should have sophisticated interaction.

### Level 3 — Subtle

About  
Process  
Testimonials  
Footer

These should support the experience without competing with the portfolio.

This hierarchy is critical.

---

# THE WEBSITE SHOULD FEEL LIKE A JOURNEY

The final experience should roughly feel like:

```text
ENTER
  ↓
A SPACE IS REVEALED
  ↓
DISCOVER THE STUDIO
  ↓
MOVE THROUGH PROJECTS
  ↓
EXPLORE THEIR DESIGN APPROACH
  ↓
UNDERSTAND THE PROCESS
  ↓
SEE SOCIAL PROOF
  ↓
BECOME INTERESTED
  ↓
START A CONVERSATION
```

Every major transition should have a visual reason.

Do not animate something merely because it can be animated.

---

# Quality Bar

Before considering the website complete, ask:

> Would this look out of place on Awwwards?

If yes, continue refining.

The website should have:

- One unforgettable hero interaction
- One memorable portfolio interaction
- One strong shared-element/image transition
- Sophisticated typography choreography
- A coherent motion language
- Excellent image composition
- Smooth scrolling
- Strong desktop experience
- Thoughtful mobile experience
- No generic scroll-reveal animations

The goal is not to create the **most animated website possible**.

The goal is to create a website where someone says:

> **"How the hell did they make this?"**

while still being able to understand the business and contact the interior designer within a few seconds.