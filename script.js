$(document).ready(function(){
    const statsSection = document.getElementById('statistics');

    const options = {
        root: null, // use the viewport as the root
        rootMargin: '0px',
        threshold: 0.5 // trigger when 50% of the target is visible
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Function to initialize and animate charts
                initializeCharts();
                observer.unobserve(entry.target); // Stop observing after animation plays once
            }
        });
    }, options);

    if (statsSection) {
        observer.observe(statsSection);
    }

    function initializeCharts() {
        // Pie Chart Data (Revenue Breakdown by Sector)
        const pieCtx = document.getElementById('pieChart').getContext('2d');
        new Chart(pieCtx, {
            type: 'pie',
            data: {
                labels: ['Infrastructure', 'Energy', 'Defence', 'Financial Services', 'IT & Technology Services'],
                datasets: [{
                    data: [45, 15, 10, 10, 20  ],
                    backgroundColor: [
                        '#003366',
                        '#0066cc',
                        '#ff6600',
                        '#99cc33',
                        '#cc3366'
                    ],
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                animation: {
                    duration: 1500, // Animation duration in milliseconds
                    easing: 'easeInOutQuart' // Easing function for a smoother animation
                },
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed !== null) {
                                    label += context.parsed + '%';
                                }
                                return label;
                            }
                        }
                    }
                }
            }
        });

        // Line Graph Data (Revenue Growth Over Years)
        const lineCtx = document.getElementById('lineChart').getContext('2d');
        new Chart(lineCtx, {
            type: 'line',
            data: {
                labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
                datasets: [{
                    label: 'Revenue (in Billion USD)',
                    data: [20, 22, 25, 28, 31, 34],
                    borderColor: '#003366',
                    backgroundColor: 'rgba(0, 51, 102, 0.1)',
                    fill: true,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                animation: {
                    duration: 1500, // Animation duration in milliseconds
                    easing: 'easeInOutQuart' // Easing function for a smoother animation
                },
                plugins: {
                    legend: {
                        position: 'top',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Revenue (Billion USD)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Year'
                        }
                    }
                }
            }
        });
    }
    
    const tenderLink = document.getElementById("tenders-link");

    if (tenderLink) {
      tenderLink.addEventListener("click", function (e) {
        e.preventDefault();
        // Force redirect to tenders.html (replace with exact file name if needed)
        window.location.href = "tenders.html";
      });
    }

    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.nav-slider',
        autoplay: true,
        autoplaySpeed: 3000
    });
    $('.nav-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.main-slider',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: true,
       
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Group Websites Modal Logic
    $('#group-websites-link').on('click', function(e) {
        e.preventDefault();
        $('#group-websites-modal').fadeIn(200);
    });
    $('#close-group-websites, #group-websites-modal').on('click', function(e) {
        if (e.target === this) {
            $('#group-websites-modal').fadeOut(200);
        }
    });
});
