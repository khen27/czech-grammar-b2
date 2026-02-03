/**
 * Print Utilities
 */

/**
 * Initialize print functionality
 */
function initPrint() {
  // Add print button (optional floating button)
  addPrintButton();
  
  // Listen for print events
  window.addEventListener('beforeprint', handleBeforePrint);
  window.addEventListener('afterprint', handleAfterPrint);
}

/**
 * Add floating print button
 */
function addPrintButton() {
  const btn = document.createElement('button');
  btn.className = 'btn print-btn';
  btn.id = 'print-btn';
  btn.innerHTML = `
    <i data-lucide="printer"></i>
    <span>Print</span>
  `;
  btn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 100;
    opacity: 0.8;
  `;
  btn.addEventListener('click', handlePrint);
  
  document.body.appendChild(btn);
  
  // Initialize icon
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

/**
 * Handle print button click
 */
function handlePrint() {
  window.print();
}

/**
 * Before print handler
 */
function handleBeforePrint() {
  console.log('Preparing for print...');
  
  // Could expand all sections, show all exercises, etc.
  document.body.classList.add('printing');
}

/**
 * After print handler
 */
function handleAfterPrint() {
  console.log('Print complete');
  
  document.body.classList.remove('printing');
}

/**
 * Print only specific sections
 * @param {Array<string>} partIds - Part IDs to print
 */
function printSections(partIds) {
  // Hide sections not in the list
  document.querySelectorAll('.section-card').forEach(section => {
    const partId = section.dataset.partId;
    if (!partIds.includes(partId)) {
      section.classList.add('print-hidden');
    }
  });
  
  window.print();
  
  // Restore visibility
  document.querySelectorAll('.section-card').forEach(section => {
    section.classList.remove('print-hidden');
  });
}
