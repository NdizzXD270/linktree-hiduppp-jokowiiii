
document.addEventListener('DOMContentLoaded', function() {
    const nebulaForm = document.getElementById('nebulaForm');
    const nebulaResponse = document.getElementById('nebulaResponse');
    const visitorName = document.getElementById('visitorName');
    const linkCards = document.querySelectorAll('.link-card');

    if (nebulaForm) {
        nebulaForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (visitorName && visitorName.value.trim() !== '') {
                const name = visitorName.value.trim();
                nebulaResponse.textContent = '✦ Ohh Itu Nama Lu ' + name + ' Jelek Banget Nama Nya Oh Ya Tq Bre Dah Kunjungi Web Gw ✦';
                nebulaForm.reset();
                setTimeout(() => { 
                    if (nebulaResponse) nebulaResponse.textContent = ''; 
                }, 3000);
            }
        });
    }

    if (linkCards.length > 0) {
        linkCards.forEach(card => {
            card.addEventListener('mouseenter', function() { 
                this.style.transform = 'translateY(-5px) scale(1.02)';
                this.style.transition = 'all 0.3s ease';
            });
            
            card.addEventListener('mouseleave', function() { 
                this.style.transform = 'translateY(0) scale(1)'; 
            });
            
            card.addEventListener('click', function(e) {
                const platform = this.classList[1];
                console.log('✦ Diklik:', platform);
            });
        });
    }

    document.addEventListener('click', function(e) {
        if (nebulaResponse && nebulaResponse.textContent !== '') {
            if (!e.target.closest('#nebulaForm')) {
                nebulaResponse.textContent = '';
            }
        }
    });

    const bodyTheme = document.body.getAttribute('data-theme') || 'nebula';
    console.log('✨ Zxx LinkTree - Tema:', bodyTheme);

    function createExtraStars() {
        const starsContainer = document.querySelector('.nebula-stars');
        if (!starsContainer) return;
        
        for (let i = 0; i < 30; i++) {
            const star = document.createElement('div');
            star.style.position = 'absolute';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.width = Math.random() * 2 + 'px';
            star.style.height = star.style.width;
            star.style.background = 'white';
            star.style.borderRadius = '50%';
            star.style.animation = `twinkleStar ${Math.random() * 3 + 2}s infinite`;
            star.style.opacity = Math.random() * 0.7 + 0.3;
            starsContainer.appendChild(star);
        }
    }
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes twinkleStar {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.5); }
        }
    `;
    document.head.appendChild(style);
    
    createExtraStars();
});