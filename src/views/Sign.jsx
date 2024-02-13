import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
  Box,
} from '@mui/material'

import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import users from '../services/users'

const classes = {
  paper: {
    margin: '50% 0',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: '4px',
  },
  submit: {
    margin: '3px 0px 2px',
    color: 'white',
    background: 'black',
  },
  textField: {
    background: 'white',
    borderRadius: 3,
    border: 0,
    color: 'white',
  },
  box: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    height: '100vh',
  },
  boxColumn: {
    width: '50%',
  },
  display: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.2,
    width: '100%',
    height: '100%',
  },
};


// eslint-disable-next-line react/prop-types
const Sign = ({ isLogin }) => {

  const schema = yup
  .object({
    ...(!isLogin && { name: yup.string().required('Nome é obrigatório') }),
    email: yup.string().email('E-mail não é valido').required('E-mail é obrigatório'),
    password: yup.string().required('Senha é obrigatória').min(8, '8 é O minimo de caracteres.')
  })

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema)
  })

  const handleLogin = async (data) => {
    const response = await  users.login(data)
    alert('Login')
    console.log(response)
  }

  const handleRegister = (data) => {console.log(data)}

  
  const onSubmit = (data) => {
    if(isLogin) return handleLogin(data)

    return handleRegister(data)
  }

  return (
      <Box style={classes.box}>
        <Box style={classes.boxColumn}>
          <Box style={classes.display}></Box>
          <Box>
             {/* pensar em algum texto para colocar aqui */}
          </Box>
        </Box>
        <Box style={classes.boxColumn}>
        <Container  component="main" maxWidth="xs">
          <div style={classes.paper} >
            <Typography component="h1" variant="h5">
              {isLogin ? "Acessar a minha conta" : "Criar uma conta"}
            </Typography>
            <form  style={classes.form} onSubmit={handleSubmit(onSubmit)}>
              {!isLogin && (
                <Box mt={4}>
                  <span>Digite seu nome completo *</span>
                  <br />  <br />
                  <Controller render={({ field }) => (
                    <TextField
                      style={classes.textField}
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      placeholder='Clementina da Silva'
                      name="name"
                      error={errors?.name}
                      helperText={errors?.name?.message}
                      {...field}
                    />
                  )} 
                  name="name" 
                  control={control}
                  />
                </Box>
              )}
              <Box mt={isLogin ? 4 : 2}>
                <span>Digite seu e-mail *</span>
                 <br />  <br />
                <Controller render={({ field }) => (
                    <TextField
                      style={classes.textField}
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      placeholder='user@email.com'
                      autoComplete="email"
                      error={errors?.email}
                      helperText={errors?.email?.message}
                      {...field}
                    />
                  )} 
                  name="email" 
                  control={control}
                />
              </Box>
              <Box mt={2}>
                <span>Digite sua senha *</span>
                <br />  <br />
                <Controller render={({ field }) => (
                    <TextField
                      style={classes.textField}
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      placeholder='*********'
                      autoComplete="password"
                      error={errors?.password}
                      helperText={errors?.password?.message}
                      {...field}
                    />
                  )} 
                  name="password" 
                  control={control}
                />
              </Box>
              
              <Box mt={2}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={classes.submit}
                >
                  Acessar
                </Button>
              </Box>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Esqueceu a senha?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href={isLogin ? '/sign-up' : "/sign-in"} variant="body2">
                   {isLogin ?  'Ainda não tem uma conta?' : 'Já tem uma conta? Acessar'}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
        </Box>
      </Box>
  )
}


export default Sign