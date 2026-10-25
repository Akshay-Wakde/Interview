The Event Flow Cycle
When you click an element, the event follows a three-phase process. Imagine clicking a button inside a <div>

- Capture Phase: The event starts at the window and moves down the DOM tree toward the target element.
- Target Phase: The event reaches the element you actually clicked.
- Bubble Phase: The event "bubbles" back up from the target element toward the window.


 - Bubbling :  The Bottom-Up Approach - Bubbling is the default behavior for almost all event handlers. When an event happens on an element, it first runs the handlers on that element, then on its parent, then all the way up to the ancestors.Direction: Target $\rightarrow$ Parent $\rightarrow$ Document $\rightarrow$ Window.Analogy: Like a bubble rising from the bottom of a fish tank to the surface.Why it’s useful: This is the foundation of Event Delegation. Instead of adding a listener to 100 separate table cells, you add one listener to the <table> and catch the "bubbles" as they rise.

- Capturing: The Top-Down Approach : Capturing (also known as "trickling") is less common in day-to-day coding but vital for specific logic. The event is intercepted by the ancestors before it ever reaches the intended target.Direction: Window $\rightarrow$ Document $\rightarrow$ Parent $\rightarrow$ Target.How to use it: You must explicitly tell the browser to use capturing by passing { capture: true } or true as the third argument in addEventListener.Why it’s useful: It allows a parent to "intercept" an event and potentially stop it before the child element even knows it happened.