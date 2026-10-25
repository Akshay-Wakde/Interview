<p>
Q.What is event delegation ?
- Event delegation is a JavaScript technique for managing events efficiently by attaching a single event listener to a parent element instead of multiple listeners to individual child elements. 

Q.Why Event Delegation is Useful:
- Improved Performance - Attaching one listener instead of hundreds reduces memory usage and improves application speed.
- Dynamic Element Handling - New child elements added to the DOM automatically work with the existing parent listener without needing additional code.
- Simplified Maintenance - A single listener manages all child interactions, making the codebase cleaner and easier to manage. 
- Handles Dynamic Content - If you add new items to a list via JavaScript, they automatically work with the parent listener. You don't need to manually attach new listeners to every new element.
- Cleaner Code - It centralizes your event logic in one place, making it easier to maintain and reducing "boilerplate" loops.


Q.Limitations to Keep in Mind ?
- Non-Bubbling Events : Some events like focus, blur, mouseenter, and mouseleave do not bubble by default, so standard delegation won't work for them without using the capturing phase instead.
- CPU Overhead: The parent listener fires for every event in its container. While usually negligible, extremely deep nesting or complex filtering logic can slightly increase CPU usage
</p>

<code>
<table id="data-table">
  <tr data-id="1">
    <td>Alice</td>
    <td>Developer</td>
  </tr>
  <tr data-id="2"><td>Bob</td><td>Designer</td></tr>
  <!-- Imagine 1000+ more rows here -->
</table>

    //Table

    const table = document.querySelector('#data-table');

    table.addEventListener('click', (event) => {
    // 1. Find the nearest cell (td) that was clicked
    // .closest() ensures we handle clicks on tags INSIDE the td too
    const cell = event.target.closest('td');

    // 2. If the click wasn't inside a cell (e.g., on a border), exit
    if (!cell || !table.contains(cell)) return;

    // 3. Find the parent row
    const row = cell.parentElement;
  
    // 4. Perform the action
    console.log(`Clicked row ID: ${row.dataset.id}`);
    row.classList.toggle('highlight');
    });


</code>