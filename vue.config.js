module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                assets:"@/assets",
                common:"@/common",
                network:"@/network",
                views:"@/views",
                components:"@/components"
            }
        }
    }
    css: {
        loaderOptions: {
          postcss: {
            plugins: [require('tailwindcss'), require('autoprefixer')]
          }
        }
      }
};