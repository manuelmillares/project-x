import * as React from 'react';
import {Typography, Box, Stepper, Step, StepLabel, StepContent, Button} from '@material-ui/core';


const steps = [
  {
    label: 'Crea tu cuenta.',
    description: `Registrase en SolSystems es muy fácil, solo te llevará unos minutos. 
    Eso sí, para garantizar tu seguridad y la del resto de usuarios, 
    deberás validar cierta información, como tu DNI, antes de realizar tu primera inversión.`,
  },
  {
    label: 'Invierte en sostenibilidad.',
    description:
      `¡Ingresa fondos en tu wallet de Lemon Way y prepárate a invertir! 
      Tómate tu tiempo para conocer las características de las oportunidades publicadas 
      y consulta los análisis realizados por el equipo de SolSystems.`,
  },
  {
    label: 'Recibe los beneficios.',
    description: `Desde la plataforma, podrás seguir el día a día de los proyectos y 
    monitorizar en tiempo real tus inversiones. Recibirás periódicamente los beneficios, 
    que podrás retirar o reinvertir en tu portfolio sostenible.`,
  },
  {
    label: 'Compra o vende acciones. ',
    description: `El tablón de anuncios facilita la compraventa de acciones y títulos 
    de deuda entre los usuarios de la plataforma. Esta funcionalidad te permitirá deshacerte 
    de parte de tu portfolio… ¡o ampliarlo!`,
  }
];

const Home = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
      <div>
    <Typography variant="h2" gutterBottom component="div">
    Invierte fácil.
  </Typography>
    <Box sx={{ maxWidth: "60%" }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 3 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
                <Typography variant="h4" gutterBottom component="div">
                {step.label}
                </Typography>
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      <div  style={{textAlign: "center"}}> 
      <Button  variant="contained" color="success">
        REGISTRARME
      </Button>
       </div>
    </Box>
    <Typography style={{padding:"5%"}} variant="h2" gutterBottom component="div">
        En financiación.
    </Typography>
    </div>
  );
}




export default Home;