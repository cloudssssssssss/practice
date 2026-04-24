import { useFormik } from 'formik';
import * as Yup from 'yup';

const MyForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Мінімум 2 символи')
        .required("Обов'язкове поле"),
      email: Yup.string()
        .email('Невірний формат email')
        .required("Обов'язкове поле"),
      password: Yup.string()
        .min(6, 'Пароль має бути від 6 символів')
        .required("Обов'язкове поле"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log('Дані форми:', values);
    },
  });

  const inputStyle = { display: 'block', margin: '10px auto', padding: '8px', width: '250px' };
  const errorStyle = { color: 'red', fontSize: '12px' };

  return (
    <form onSubmit={formik.handleSubmit} style={{ textAlign: 'center' }}>
      <div>
        <input
          name="name"
          placeholder="Ім'я"
          style={inputStyle}
          {...formik.getFieldProps('name')}
        />
        {formik.touched.name && formik.errors.name ? <div style={errorStyle}>{formik.errors.name}</div> : null}
      </div>

      <div>
        <input
          name="email"
          placeholder="Email"
          style={inputStyle}
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email ? <div style={errorStyle}>{formik.errors.email}</div> : null}
      </div>

      <div>
        <input
          name="password"
          type="password"
          placeholder="Пароль"
          style={inputStyle}
          {...formik.getFieldProps('password')}
        />
        {formik.touched.password && formik.errors.password ? <div style={errorStyle}>{formik.errors.password}</div> : null}
      </div>

      <button type="submit" style={{ marginTop: '10px', padding: '10px 20px', cursor: 'pointer' }}>
        Відправити
      </button>
    </form>
  );
};

export default MyForm;