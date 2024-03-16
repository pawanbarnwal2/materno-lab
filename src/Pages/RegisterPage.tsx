import {
  Box,
  Button,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Divider from "@mui/material/Divider";
import { useDispatch, useSelector } from "react-redux";
import { getProviderGroup, getProviderUnit } from "../redux/labSlice";
import { AppDispatch, RootState } from "../redux/store";

type Inputs = {
  email: string;
  name: string;
  labName: string;
  providerGroup: string;
  providerUnit: string;
  address: string;
  state: string;
  city: string;
  zipCode: string;
  officePhone: string;
  timeZone: string;
};

function RegisterPage() {
  const dispatch = useDispatch<AppDispatch>();
  const [open, setOpen] = useState(false);
  const { providerGroup, providerUnit } = useSelector(
    (state: RootState) => state.lab
  );

  useEffect(() => {
    dispatch(getProviderGroup());
    dispatch(getProviderUnit());
  }, []);
  //   const formRefDta = useRef();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();

  function submitForm() {
    setOpen(true);
    handleSubmit(onSubmit)();
  }

  const onSubmit = (params: Inputs) => {
    try {
      setOpen(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Container>
        <Layout>
          <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
            <Box className="form-layout">
              <div className="form-header">
                <Typography variant="h6">Details</Typography>
              </div>
              <div style={{ padding: "10px" }}>
                <div>
                  <Box sx={{ m: 1 }}>
                    <div>
                      <Typography>Lab Name:*</Typography>

                      <TextField
                        size="small"
                        sx={{ width: "48%" }}
                        id="email-field"
                        InputLabelProps={{ shrink: false }}
                        placeholder="Enter Lab name"
                        {...register("labName", { required: "Enter lab name" })}
                        error={
                          errors.labName && errors.labName.message
                            ? true
                            : false
                        }
                      />
                    </div>
                  </Box>
                </div>

                <div className="form-control-select">
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    width="100%"
                    sx={{ m: 1 }}
                  >
                    <Typography>Provider Group:*</Typography>

                    <Select
                      size="small"
                      placeholder="select"
                      sx={{ width: "100%" }}
                      id="outlined-select-currency-native"
                      error={
                        errors.providerGroup && errors.providerGroup.message
                          ? true
                          : false
                      }
                      defaultValue="Select"
                      value={getValues("providerGroup")}
                      {...register("providerGroup", {
                        required: "Enter provider group",
                      })}
                    >
                      {providerGroup?.map(
                        (option: { id: string; name: string }) => (
                          <MenuItem value={option.id}>{option.name}</MenuItem>
                        )
                      )}
                    </Select>
                  </Box>

                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    width="100%"
                    sx={{ m: 1 }}
                  >
                    <Typography>Provider Unit:*</Typography>
                    <Select
                      size="small"
                      placeholder="select"
                      sx={{ width: "100%" }}
                      id="outlined-select-currency-native"
                      error={
                        errors.providerUnit && errors.providerUnit.message
                          ? true
                          : false
                      }
                      defaultValue="Select"
                      value={getValues("providerUnit")}
                      {...register("providerUnit", {
                        required: "Enter provider unit",
                      })}
                    >
                      {providerUnit?.map(
                        (option: { id: string; name: string }) => (
                          <MenuItem value={option.id}>{option.name}</MenuItem>
                        )
                      )}
                    </Select>
                  </Box>
                </div>

                <Box sx={{ m: 1 }}>
                  <Typography>Address:*</Typography>
                  <TextField
                    size="small"
                    fullWidth
                    id="outlined-controlled"
                    error={
                      errors.address && errors.address.message ? true : false
                    }
                    {...register("address", { required: "Enter address" })}
                  />
                </Box>

                <div className="form-control-state">
                  <Box sx={{ m: 1 }}>
                    <Typography>State:*</Typography>
                    <TextField
                      size="small"
                      error={
                        errors.state && errors.state.message ? true : false
                      }
                      id="outlined-controlled"
                      {...register("state", { required: "Enter state" })}
                    />
                  </Box>
                  <Box sx={{ m: 1 }}>
                    <Typography>City:*</Typography>
                    <TextField
                      size="small"
                      error={errors.city && errors.city.message ? true : false}
                      id="outlined-controlled"
                      {...register("city", { required: "Enter city" })}
                    />
                  </Box>
                  <Box sx={{ m: 1 }}>
                    <Typography>Zipcode:*</Typography>
                    <TextField
                      size="small"
                      error={
                        errors.zipCode && errors.zipCode.message ? true : false
                      }
                      id="outlined-controlled"
                      {...register("zipCode", {
                        required: "Required zip code",
                      })}
                    />
                  </Box>
                </div>
                <div>
                  <Box sx={{ m: 1 }}>
                    <Typography>Email Id:*</Typography>
                    <TextField
                      fullWidth
                      size="small"
                      error={
                        errors.email && errors.email.message ? true : false
                      }
                      id="outlined-controlled"
                      {...register("email", { required: "Enter Email" })}
                    />
                  </Box>
                </div>
              </div>
            </Box>
          </Box>
          <Box className="form-layout">
            <div className="form-header">
              <Typography variant="h6">Portal Time Zone</Typography>
            </div>
            <Box display={"flex"} flexDirection={"column"} sx={{ p: 1, m: 1 }}>
              <Typography>Time Zone:*</Typography>

              <Select
                size="small"
                placeholder="select"
                sx={{ width: "100%" }}
                id="outlined-select-currency-native"
                error={
                  errors.timeZone && errors.timeZone.message ? true : false
                }
                defaultValue="Select"
                value={getValues("providerGroup")}
                {...register("timeZone", { required: "Enter Time zone" })}
              >
                {providerGroup &&
                  providerGroup.map((item: { id: string; name: string }) => (
                    <MenuItem value={item.id}>{item.name}</MenuItem>
                  ))}
              </Select>
            </Box>
          </Box>
        </Layout>
      </Container>

      {/*footer */}
      <Divider />
      <div className="form-time-zone">
        <Button variant="contained" type="submit" onClick={submitForm}>
          Save
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={1200}
          message="Check"
          onClose={handleClose}
        />
      </div>
    </>
  );
}

export default RegisterPage;

const Container = styled.main`
  display: flex;
  justify-content: center;
`;

const Layout = styled.div`
  padding: 2rem;

  max-width: fit-content;
`;
