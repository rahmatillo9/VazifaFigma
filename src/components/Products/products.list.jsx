'use client';
import React, { useState, useEffect } from 'react';
import { getAllProducts } from '@/service/api';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Badge,
  IconButton,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';

const FlashSales = () => {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error('Products API did not return an array:', data);
          setProducts([]);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  const visibleProducts = showAll ? products : products.slice(0, 4); 

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', marginBottom: 3 }}>
        Flash Sales
      </Typography>
      <Grid container spacing={4}>
        {visibleProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card sx={{ maxWidth: 345, position: 'relative' }}>
              <Badge
                badgeContent={`-${product.discount || 0}%`}
                color="error"
                sx={{
                  position: 'absolute',
                  top: 8,
                  left: 8,
                  zIndex: 10,
                }}
              />
              <CardMedia
                component="img"
                height="200"
                image={product.thumbnail}
                alt={product.title}
              />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                  {product.title}
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'error.main' }}>
                  ${product.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  sx={{ textTransform: 'none' }}
                >
                  Add To Cart
                </Button>
                <Box>
                  <IconButton color="default">
                    <FavoriteBorderIcon />
                  </IconButton>
                  <IconButton color="default">
                    <VisibilityIcon />
                  </IconButton>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 4,
        }}
      >
        {!showAll && ( 
          <Button
            variant="outlined"
            color="error"
            size="large"
            onClick={() => setShowAll(true)} 
          >
            View All Products
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default FlashSales;
