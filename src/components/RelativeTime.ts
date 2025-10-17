import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export function mount(selector: string) {
  document.querySelectorAll<HTMLElement>(`[${selector}]`).forEach(el => {
    const timestamp = parseInt(el.dataset.accTime || '0', 10);
    if (timestamp) {
      el.textContent = dayjs(timestamp).fromNow();
    }
  });
}
