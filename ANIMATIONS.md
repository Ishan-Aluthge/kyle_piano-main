# Animation System Documentation

This project includes a comprehensive animation system that provides smooth, professional animations throughout the website.

## Overview

The animation system combines:
- **Framer Motion** for React-based animations
- **CSS Animations** for performant scroll-based effects
- **Intersection Observer** for scroll-triggered animations
- **Custom hooks and components** for reusable animations

## Animation Components

### 1. PageTransition
Wraps entire pages for smooth entry/exit animations.

```tsx
import { PageTransition } from "@/components/page-transition"

<PageTransition>
  <YourPageContent />
</PageTransition>
```

### 2. AnimatedSection
Animates sections as they scroll into view.

```tsx
import { AnimatedSection } from "@/components/animated-section"

<AnimatedSection direction="up" delay={0.2} duration={0.6}>
  <YourContent />
</AnimatedSection>
```

**Props:**
- `direction`: "up" | "down" | "left" | "right" | "none"
- `delay`: number (in seconds)
- `duration`: number (in seconds)
- `className`: string

### 3. FadeIn
Simple fade-in animation for elements.

```tsx
import { FadeIn } from "@/components/fade-in"

<FadeIn delay={0.3}>
  <YourContent />
</FadeIn>
```

### 4. StaggerContainer & StaggerItem
Creates staggered animations for lists or grids.

```tsx
import { StaggerContainer, StaggerItem } from "@/components/stagger-container"

<StaggerContainer staggerDelay={0.1} initialDelay={0.5}>
  {items.map((item) => (
    <StaggerItem key={item.id} direction="up">
      <YourItemComponent item={item} />
    </StaggerItem>
  ))}
</StaggerContainer>
```

### 5. SmoothHover
Adds smooth hover effects to interactive elements.

```tsx
import { SmoothHover } from "@/components/smooth-hover"

<SmoothHover scale={1.05} lift={true}>
  <YourButton />
</SmoothHover>
```

## CSS Animation Classes

### Smooth Animations
- `.smooth-fade-in` - Fade in animation
- `.smooth-slide-up` - Slide up from bottom
- `.smooth-slide-down` - Slide down from top
- `.smooth-slide-left` - Slide from right
- `.smooth-slide-right` - Slide from left
- `.smooth-zoom-in` - Zoom in animation
- `.smooth-rotate-in` - Rotate and fade in
- `.smooth-bounce` - Continuous bounce
- `.smooth-pulse` - Continuous pulse

### Scroll Reveal Classes
Add these classes to elements you want to animate on scroll:

- `.reveal` - Fade and slide up
- `.reveal-left` - Fade and slide from left
- `.reveal-right` - Fade and slide from right
- `.reveal-zoom` - Fade and zoom in
- `.scroll-animate` - Generic scroll animation

Elements with these classes will automatically animate when they enter the viewport.

### Animation Delays
Use these classes to stagger animations:

- `.animation-delay-75` (75ms)
- `.animation-delay-150` (150ms)
- `.animation-delay-225` (225ms)
- `.animation-delay-300` (300ms)
- `.animation-delay-500` (500ms)
- `.animation-delay-1000` (1s)
- `.animation-delay-1500` (1.5s)
- `.animation-delay-2000` (2s)
- `.animation-delay-2500` (2.5s)

### Hover Effects
- `.smooth-hover-scale` - Scale on hover
- `.smooth-hover-lift` - Lift and add shadow on hover

## Global Features

### Scroll Reveal Hook
The `useScrollReveal` hook is automatically applied via the `ScrollRevealProvider` in the root layout. All elements with reveal classes will automatically animate when scrolled into view.

### Smooth Scrolling
Enabled globally for all anchor links with offset for fixed navigation.

### Performance Optimizations
- Hardware-accelerated animations using `transform` and `opacity`
- Efficient cubic-bezier easing: `cubic-bezier(0.4, 0, 0.2, 1)`
- Intersection Observer for scroll animations (better than scroll listeners)
- CSS animations where possible for better performance

## Best Practices

1. **Use Framer Motion for interactive elements** (buttons, cards)
2. **Use CSS animations for scroll-based effects** (sections appearing)
3. **Stagger animations** for better visual hierarchy
4. **Keep delays consistent** (multiples of 100-150ms)
5. **Don't overuse animations** - animate intentionally
6. **Test on slower devices** - ensure smooth performance

## Examples

### Animated Card Grid
```tsx
<StaggerContainer staggerDelay={0.15}>
  {cards.map((card) => (
    <StaggerItem key={card.id}>
      <SmoothHover lift={true}>
        <Card {...card} />
      </SmoothHover>
    </StaggerItem>
  ))}
</StaggerContainer>
```

### Scroll-Triggered Section
```tsx
<section className="reveal py-20">
  <h2 className="reveal-left animation-delay-150">Title</h2>
  <p className="reveal-right animation-delay-300">Content</p>
</section>
```

### Page with Smooth Transitions
```tsx
export default function MyPage() {
  return (
    <PageTransition>
      <Navigation />
      <AnimatedSection direction="up">
        <HeroSection />
      </AnimatedSection>
      <FadeIn delay={0.3}>
        <ContentSection />
      </FadeIn>
    </PageTransition>
  )
}
```

## Customization

### Modifying Animation Timing
Edit the CSS custom properties in `globals.css`:

```css
/* Change default animation duration */
.smooth-fade-in {
  animation: smoothFadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
```

### Adding New Animations
1. Define keyframes in `globals.css`
2. Create animation class
3. Optionally create a React component wrapper

## Browser Support

All animations are tested and working in:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

Animations gracefully degrade in older browsers.
