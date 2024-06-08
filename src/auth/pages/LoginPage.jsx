/* eslint-disable no-extra-boolean-cast */
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { startGoogleSingIn, startLoginWithEmailPassword } from "../../store/auth";

export const LoginPage = () => {

  //obtener data del store
  const { status, errorMessage } = useSelector(state => state.auth) // status = 'not-authenticated', 'authenticated', 'checking' del authSlice

  const isAuthenticating = useMemo(() => status === 'checking', [status]) // si status es 'checking' isAuthenticating es true

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: "willytester@gmail.com",
    password: "12345",
  });

  const onSubmit = (event) => {
    event.preventDefault();

    console.log({
      email,
      password,
    });

    dispatch(startLoginWithEmailPassword({email, password}));
  };

  const onGoogleSingIn = () => {
    console.log("Google Sing In");

    dispatch(startGoogleSingIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>
          <Grid container display={!!errorMessage ? "" : "none"} sx={{mt:1}}>
            <Grid item xs={12} >
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button disabled={isAuthenticating} type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button disabled={isAuthenticating} variant="contained" fullWidth onClick={onGoogleSingIn}>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
