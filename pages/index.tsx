import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data }) => setProductList(data))
  }, [])

  return (
    <Stack direction="column" alignContent="center" justifyContent="center">
      <Typography variant="h4" alignSelf="center" mb="40px">
        Platzi Avo
      </Typography>
      <Stack
        direction="row"
        spacing={25}
        useFlexGap
        flexWrap="wrap"
        justifyContent="center"
      >
        {productList.map((item: TProduct) => {
          return <ProductCard key={item.id} {...item} />
        })}
      </Stack>
    </Stack>
  )
}

const ProductCard = ({ name, image, price }: TProduct) => {
  return (
    <Card sx={{ width: 500 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="500"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default HomePage
