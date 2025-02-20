import {FC, memo, useCallback, useMemo, useState} from 'react';
import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import {enqueueSnackbar} from 'notistack';


interface FormData {
  name: string;
  email: string;
  message: string;
}


const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      try {
        await emailjs.send('service_phgpldo', 'template_8xp4mv4', {
          from_name: 'alexa-b.com',
          to_name: 'Alexa',
          message: JSON.stringify(data, null, 2),
        }, {
          publicKey: 'aTIw33ay-QdlEQ-rZ',
        });

        enqueueSnackbar('Message sent!', {
          variant: 'success',
          autoHideDuration: 3000,
        });

        setData({ ...defaultData });
      } catch (e) {
        console.log(e);
        enqueueSnackbar('Something went wrong :(', {
          variant: 'error',
          autoHideDuration: 3000,
        });
      }
    },
    [data],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input className={inputClasses} name="name" value={data.name} onChange={onChange} placeholder="Name" required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        value={data.email}
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        value={data.message}
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        Send Message
      </button>
    </form>
  );
});


ContactForm.displayName = 'ContactForm';
export default ContactForm;
