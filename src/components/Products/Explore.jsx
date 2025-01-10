'use client';
import React, { useState, useEffect } from 'react';
import { getAllProducts } from '@/service/api';
import { Button, Box, Typography, Grid, Card, CardMedia, CardContent, Badge, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Explores = () => {
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

  const visibleProducts = showAll ? products : products.slice(0, 8); // 8 ta mahsulot ko'rsatiladi

  return (
    <div className="relative">
      <div className="w-full h-[108px] bg-[#f5f5f5] flex items-center justify-between gap-6 px-6">
        <div>
          <p className="text-red-500">Our Products</p>
          <h1 className="text-[#000000] font-semibold pt-3">Explore Our Products</h1>
        </div>

        <div className="flex gap-4">
          <button className="p-2 bg-gray-200 rounded-full">
            <ArrowBackIcon className="text-[#000000]" />
          </button>
          <button className="p-2 bg-gray-200 rounded-full">
            <ArrowForwardIcon className="text-[#000000]" />
          </button>
        </div>
      </div>

      <section className="w-full px-6 py-8">
        <Grid container spacing={4}>
          {visibleProducts.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}> {/* 4 ta product bir qatorga */}
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
                <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
                  <Button size="small" variant="contained" color="primary" sx={{ textTransform: 'none' }}>
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
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>

      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
        {!showAll && (
          <Button variant="outlined" color="error" size="large" onClick={() => setShowAll(true)}>
            View All Products
          </Button>
        )}
      </Box>
    </div>
  );
};

export default Explores;
