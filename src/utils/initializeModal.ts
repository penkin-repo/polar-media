/**
 * Инициализирует интерактивность для HTML-тега <dialog>.
 * Находит элементы по их ID и добавляет обработчики событий для открытия,
 * закрытия и клика по фону.
 *
 * @param modalId - ID элемента <dialog>.
 * @param openBtnId - ID кнопки, которая открывает модальное окно.
 * @param closeBtnIds - Массив ID кнопок, которые закрывают мо-дальное окно.
 */
export function initializeModal(
    modalId: string,
    openBtnId: string,
    closeBtnIds: string[],
): void {
    // 1. Находим элементы и проверяем их существование и тип
    const modal = document.getElementById(modalId);
    const openBtn = document.getElementById(openBtnId);

    // Проверка, что модальное окно найдено и является <dialog>
    if (!(modal instanceof HTMLDialogElement)) {
        console.error(`Ошибка: Модальное окно с id="${modalId}" не найдено или не является <dialog>.`);
        return;
    }

    // Проверка, что кнопка открытия найдена
    if (!openBtn) {
        console.error(`Ошибка: Кнопка открытия с id="${openBtnId}" не найдена.`);
        return;
    }

    // 2. Добавляем обработчик для открытия окна
    openBtn.addEventListener("click", () => {
        modal.showModal();
    });

    // 3. Функция для закрытия окна (чтобы не дублировать код)
    const closeModal = () => {
        modal.close();
    };

    // 4. Добавляем обработчики для всех кнопок закрытия
    closeBtnIds.forEach(id => {
        const closeBtn = document.getElementById(id);
        if (closeBtn) {
            closeBtn.addEventListener("click", closeModal);
        } else {
            console.warn(`Предупреждение: Кнопка закрытия с id="${id}" не найдена.`);
        }
    });

    // 5. Добавляем обработчик для закрытия по клику на фон (::backdrop)
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
}