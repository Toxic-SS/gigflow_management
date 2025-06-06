document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
    link.classList.remove(
      'bg-white',
      'text-blue-900',
      'rounded-full',
      'px-5',
      'py-1.5',
      'font-semibold',
      'text-sm'
    );

    if (link.getAttribute('href') === currentPage) {
      link.classList.add(
        'bg-white',
        'text-blue-900',
        'rounded-full',
        'px-5',
        'py-1.5',
        'font-semibold',
        'text-sm'
      );
    }
  });
});
