import axios from 'axios';
import { useState } from 'react';

export default function Component() {
  const [sending, setsending] = useState(false);

  const [name, setname] = useState(false);
  const [email, setemail] = useState(false);
  const [phone, setphone] = useState(false);
  const [country, setcountry] = useState(false);

  const validatePhone = (e) => {
    const re = /^[0-9\b]$/;
    if (e.target.value !== '' || re.test(e.target.value)) {
      e.target.value = e.target.value.replace(/[^0-9+]/g, '');
    }
    setphone(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (!sending) {
      axios({
        method: 'post',
        url: `https://formsubmit.co/ajax/card@256cripto.com`,
        // url: `https://formsubmit.co/ajax/matias@loesen.co`,
        data: {
          name: name,
          email: email,
          phone: phone,
          country: country,
        },
      })
        .then((res) => {
          setsending(true);
          console.log(res.data);
        })
        .catch((err) => {
          alert('Error con el formulario - intente de nuevo.');
        });
    }
  };

  return (
    <>
      {!sending ? (
        <div className='max-w-lg mx-auto lg:max-w-none'>
          <form onSubmit={submitForm} className=''>
            <div className='p-4 grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <label htmlFor='full-name' className='sr-only'>
                  Nombre Completo
                </label>
                <input
                  type='text'
                  required
                  name='full-name'
                  id='full-name'
                  autoComplete='name'
                  className='block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md'
                  placeholder='Nombre Completo'
                  onChange={(e) => setname(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor='email' className='sr-only'>
                  Email
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  required
                  autoComplete='email'
                  className='block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md'
                  placeholder='Email'
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor='phone' className='sr-only'>
                  Teléfono
                </label>
                <input
                  type='text'
                  name='phone'
                  id='phone'
                  autoComplete='tel'
                  className='block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md'
                  placeholder='Teléfono (opcional)'
                  onChange={validatePhone}
                  maxLength={18}
                />
              </div>
              <div>
                <label htmlFor='country' className='sr-only'>
                  País
                </label>
                <input
                  id='country'
                  name='country'
                  type='country'
                  required
                  autoComplete='country'
                  className='block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md'
                  placeholder='País'
                  onChange={(e) => setcountry(e.target.value)}
                />
              </div>
              <div className='sm:col-span-2'>
                <button
                  type='submit'
                  className='w-full justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-orange-700 hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-700'
                >
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className='bg-green-50 max-w-lg mx-auto lg:max-w-none p-4'>
          <div className='flex flex-col justify-between'>
            <div>
              <h3 className='flex-grow text-lg leading-6 font-medium text-gray-900'>
                ✅ &nbsp;Enviado
              </h3>
            </div>
            <dl className='mt-2 text-base text-gray-500'>
              <div className='flex items-center'>
                <span className='leading-tight'>
                  Su formulario ha sido enviado con éxito.
                </span>
              </div>
            </dl>
          </div>
        </div>
      )}
    </>
  );
}
