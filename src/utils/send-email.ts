
import { FormData } from '@/components/formdata';

export function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response.message);
    })
    .catch((err) => {
      console.log(err);
    });
}