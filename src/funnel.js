// funnel.js

// Function to handle next step in the funnel
function nextStep(currentStep) {
  switch (currentStep) {
    case 1:
      document.getElementById('step-1').style.display = 'none';
      document.getElementById('step-2').style.display = 'block';
      break;
    case 2:
      document.getElementById('step-2').style.display = 'none';
      document.getElementById('step-3').style.display = 'block';
      break;
    case 3:
      document.getElementById('step-3').style.display = 'none';
      document.getElementById('complete').style.display = 'block';
      break;
    default:
      console.error('Invalid step');
  }
}

// Initialize funnel
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('next-button').addEventListener('click', () => {
    const currentStep = parseInt(document.getElementById('current-step').value, 10);
    nextStep(currentStep);
    document.getElementById('current-step').value = currentStep + 1;
  });
});
