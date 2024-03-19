import { Dimensions, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const useScreenCheck = () => {
    const [screenDimensions, setScreenDimensions] = useState({
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    });
  
    useEffect(() => {
      const updateScreenDimensions = () => {
        setScreenDimensions({
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        });
      };
  
      // Subscribe to dimension changes
      Dimensions.addEventListener('change', updateScreenDimensions);
  
      // Clean up the subscription on component unmount
      return () => {
        Dimensions.removeEventListener('change', updateScreenDimensions);
      };
    }, []);
  
    return screenDimensions;
  };

export default useScreenCheck;
