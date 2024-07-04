
  AOS.init();




    document.getElementById("mas-videos").onclick = function() {
    console.log("El botón ''Más Videos'' ha sido clickeado.");
    window.open("https://www.youtube.com/@MonsterEnergy/videos", "_blank");
  };




  $(document).ready(function() {
    const modal = $('#modal');
    const btnAbrirModal = $('#btnAbrirModal');
    const spanCerrar = $('.close');
    const listaDeportistas = $('#listaDeportistas');
  
    btnAbrirModal.on('click', function() {
      modal.css('display', 'block');
      mostrarDeportistas();
    });
  
    spanCerrar.on('click', function() {
      modal.css('display', 'none');
    });
  
    $(window).on('click', function(event) {
      if (event.target == modal[0]) {
        modal.css('display', 'none');
      }
    });
  
    function mostrarDeportistas() {
      $.get({
        url: 'deportistas.json',
        dataType: 'json',
        success: function(data) {
          let html = '<ul style="list-style-type: none;">';
          $.each(data, function(index, deportista) {
            html += `<li style="margin-bottom: 10px;">`; 
            html += `<img src="${deportista.imagen}" alt="${deportista.nombre}" style="max-width: 30%; height: auto; display: block; margin-bottom: 20px; padding-top:5%;">`;
            html += `<h4><strong>${deportista.nombre}</strong> - ${deportista.edad} - ${deportista.nacionalidad}</h4>` ;
            html += `<h6><strong>${deportista.deporte}</strong></h6>`;
            html += `</li>`;
          });
          html += '</ul>';
          listaDeportistas.html(html);
        },
        error: function() {
          console.error('Error al cargar la lista de los deportistas:');
          listaDeportistas.html('<p>Error al cargar la lista de los deportistas.</p>');
        }
      });
    }
  });




  const toastTrigger = document.getElementById('liveToastBtn');
  const toastLiveExample = document.getElementById('liveToast');
  
  if (toastTrigger && toastLiveExample) {
    const toastBootstrap = new bootstrap.Toast(toastLiveExample);
  
    toastLiveExample.addEventListener('shown.bs.toast', () => {
      setTimeout(() => {
        toastBootstrap.hide();
      }, 7000);
    });
  
    toastTrigger.addEventListener('click', () => {
      toastBootstrap.show();
    });
  };

  



  Fancybox.bind('[data-fancybox="gallery"]', {
    Slideshow: {
      playOnStart: true,
    },
  });    


  Fancybox.show([
    {
      src: "https://www.youtube.com/embed/AiAtcoakTEU?autoplay=1&vq=hd1080", 
      type: "iframe",  
      width: 1920,
      height: 1080
    },
  ]);
  


  