# Deep Dive in Sizing

This article details how we went about deriving the sizing values of the design system based upon a few key configuration variables.

## Preamble

### Sizing things is tough

It's notoriously one of the hardest things to get right in a design system; especially when translating it into code. When used for powers of good, size helps the user better understand the relation of things to each other

- A heading to a descriptive body of text
- An icon to word for an action
- An image relating a global error
- A contextual menu vs. a global menu.

Getting these things right typically doesn't fall on the engineer, but it's good that we are aware of these things because this when the time comes to make the designers amazing intentions come to life, we are faced with some tough decisions.

- `px`, `rem` or `em`?
- t-shirt sizes or scales
- baseline grids or margins
- inset or outset padding
- `content-box` or `border-box`

All of this can be extremely overwhelming; especially when you know that your application isn't going to be 3 features. We are faced with interminable concepts of **scalability** and **maintainability** in an uncertain and mostly unpredictable future of application development.

We as engineers need to understand the concepts of sizing & vertical rhythm better to architect a better system that can

1. ... precisely model what the designer has designed
2. ... be flexible enough to be changed based upon the product road-map and user feedback
3. ... be scaled across multiple applications
4. ... be easily refactored
5. ... respond to various devices on various platforms

**In order to do that, we need to recognize a few truths about sizing**

## Sizing Truths

In order to architect a proper technical sizing model, we need to understand a few truths.

### 1. Font size & object size are interrelated concepts

We can't think about one without considering the other. Objects are often placed next to text and visa-versa. Text is used to describe objects and incorrectly relatable sizing and position is sizing and position can easily make or break our UI.

### 2. Vertical rhythm is a primary concern

Regardless of how the text is used, vertical rhythm must be established for proper content ingestion. If a heading is too far away from it's related content area, it's value will be diminished. If text is too far away from an icon, it will degrade the experience.

### 3. Space is a function of size

The size of a particular element or node will determine it's inset & outset spacing.

### 4. Static units are antiquated

The times have passed where `px` values are acceptable for large scale use. We have too many devices and too many different visual variances that require an adaptive / responsive styling models. `px` values need to be translated to `em`s or `rem`s when evaluating design specifications

### 5. A common reference point must be used

All sizes are interrelated but if they don't have a common value to base their relation on, things will start to get chaotic.

## Configuration Values

Based upon the above truths, we were able to decide on the below values to provide the basis for the sizing in our design system

| Concept              | Variable             | Description                                                                |
| -------------------- | -------------------- | -------------------------------------------------------------------------- |
| Modular Scale        | `modularScaleRatio`  |                                                                            |
| Desired Line Height  | `lineHeight`         | This is the desired line height at which each size of text should receive. |
| Base Font Size       | `baseFontSize`       |                                                                            |
| Baseline Grid Factor | `baselineGridFactor` |                                                                            |
| Spacing Scale        | `spacingScale`       |                                                                            |
