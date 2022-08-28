import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Counter from './ItemCount'
import Swal from 'sweetalert2';

export default function MediaCard({ name, description, img, cart}) {

  const [alertCart, setAlertCart] = React.useState(0);

  const alert = () => {
    setAlertCart(Swal.fire({
      icon: 'success',
      title: 'Se agrego correctamente al carrito',
    }))   
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image= {img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Counter />
      </CardActions>
      <CardActions className='buttonCart' >
        <Button size="small" onClick={alert}>Agregar al carrito</Button>
      </CardActions>
    </Card>
  );
}
