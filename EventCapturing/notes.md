In JavaScript, Event Capturing (also known as "Trickling") is the first phase of the event propagation model. When an event occurs on an element, it doesn't just trigger on that element immediately. Instead, it travels through three phases:

1.Capturing Phase: The event starts from the window and travels down the DOM tree to the target element.
2.Target Phase: The event reaches the actual element you clicked.
3.Bubbling Phase: The event travels back up from the target element to the window.

1. How to use Capturing
By default, event listeners are set to the Bubbling phase. To "capture" an event during the downward phase, you must pass true (or an options object) as the third argument to addEventListener.

<script>
const parent = document.querySelector("#parent");

// This listener triggers during the Capturing phase
parent.addEventListener("click", () => {
    console.log("Parent Captured!");
}, true); // The 'true' here enables capturing

</script>