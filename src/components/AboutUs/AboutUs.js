import * as React from 'react';
import { Typography } from '@material-ui/core';


const AboutUs = () => {
    return (
        <div>
        <Typography variant="subtitle1" gutterBottom component="div">
        Solsystems es una plataforma FinTech que permite a los ciudadanos interesados invertir en proyectos medioambientalmente sostenibles y recibir beneficios de sus inversiones; a la vez los proyectos consiguen financiación sin tener que recurrir a las fórmulas de financiación tradicionales. Queremos dar la transparencia, fiabilidad y colaboración que los grandes fondos de inversión y bancos anticuados no aportan, promoviendo la movilización colectiva al servicio de iniciativas medioambiental y económicamente sostenibles.
        </Typography>
        <Typography variant="h1" component="div" gutterBottom>
            Video
        </Typography>

        <Typography variant="h6" gutterBottom component="div">
        NUESTRA HISTORIA
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
        Solsystems nace de la idea de los hermanos Nacho y Adrián Bautista, con una gran ambición. Desde muy jóvenes empezaron desarrollando nuevas ideas de negocio, desde una “empresa” para limpiar palos de golf cuando tenían 12 años, hasta otros proyectos presentados al mismo programa de emprendimiento que posteriormente vio nacer a Solsystems.
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
        Los hermanos querían hacer algo útil para el mundo y el futuro. Es por lo que decidieron crear Solsystems - con un claro objetivo: incentivar el cambio en la sociedad mediante apoyo financiero a las tecnologías limpias. Sus propósitos con Solsystems son facilitar las inversiones, su rentabilidad y a la vez causar impacto hacia un mundo más avanzado y más limpio.</Typography>
        
        <Typography variant="h6" gutterBottom component="div">
        NUESTROS VALORES
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
        Transparencia: En Solsystems, no tenemos secretos con lo que nos cobran terceras partes, con lo que cobramos nosotros o con lo que asumimos nosotros. Os comunicamos todo, de verdad.
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
        Seguridad: Cada inversión tiene su parte de riesgo, nos esforzamos para que sea mínima. Estamos regulados por la CNMV. Por tanto, cumplimos con todos los requisitos de calidad exigidos por la regulación española y europea para garantizar la seguridad de tu dinero.
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
        Responsabilidad: Somos ciudadanos del mundo. Tenemos que cuidarlo de manera colectiva.
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
        Acción colectiva: Actuar ahora para acelerar el cambio.
        </Typography>
        
        </div>
    )
}

export default AboutUs;