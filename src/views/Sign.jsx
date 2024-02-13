import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
  Box,
} from '@mui/material'

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
            <form  style={classes.form}  onSubmit={()=>{
              event.preventDefault()
            }}>
              {!isLogin && (
                <Box mt={4}>
                  <span>Digite seu nome completo *</span>
                  <TextField
                    style={classes.textField}
                    variant="outlined"
                    color="secondary"
                    margin="normal"
                    required
                    fullWidth
                    placeholder='Clementina da Silva'
                    name="name"
                    // value={email}
                    // onChange={e => setEmail(e.target.value)}
                    // error={error}
                  />
                </Box>
              )}
              <Box mt={isLogin ? 4 : 2}>
                <span>Digite seu e-mail *</span>
                <TextField
                  style={classes.textField}
                  variant="outlined"
                  color="secondary"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  placeholder='user@email.com'
                  name="email"
                  autoComplete="email"
                  // value={email}
                  // onChange={e => setEmail(e.target.value)}
                  // error={error}
                />
              </Box>
              <Box mt={2}>
                <span>Digite sua senha *</span>
                <TextField
                  style={classes.textField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  placeholder='password'
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  // value={senha}
                  // onChange={e => setSenha(e.target.value)}
                  // error={error}
                  // helperText={helperText}
                />
              </Box>
              
              <Box mt={2}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  // disabled={botaoDesabilitado}
                  style={classes.submit}
                >
                  Acessar
                </Button>
              </Box>
              <Grid container>
                {isLogin && (
                  <>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Esqueceu a senha?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="/sign-up" variant="body2">
                        Ainda não tem uma conta?
                      </Link>
                    </Grid>
                </>
                )}
              </Grid>
            </form>
          </div>
        </Container>
        </Box>
      </Box>
  )
}


export default Sign