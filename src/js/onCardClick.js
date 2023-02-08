import { themoviedbApi } from '../components/themoviedb-service';
import { createModalInfo } from '../js/renderModal';
import * as basicLightbox from 'basiclightbox';


function onCardClick(event) {   
    // const id = event.target.id;
    themoviedbApi.getMovieById(10147)
        .then(result => {
    const modal = basicLightbox.create(
    createModalInfo(result),
    {
    onShow: (modal) => {
        modal.element().querySelector('button[data-modal-close]').onclick = modal.close;
        document.addEventListener("keydown", closeModal);
    },
    
    onClose: modal => {
        document.removeEventListener("keydown", closeModal);
    },
        });
    
    modal.show();
});
}

// onCardClick();

// Я не розумію, як мені цю функцію вставити, тому що винести екземпляр basiclightbox за межі then я не можу
// - результат обробки промісу від сервера тоді буде недоступний, але і оголосити функцію я не можу всередині then
// Ще попрацюю над цим. Стилі адаптую коли вже буде готова частина з js. Поки що на модалку можна подивитись, якщо розкоментувати onCardClick();
function closeModal(event) {
        if (event.code === "Escape") {
            modal.close();
            return;
        }
};
    
export { onCardClick };