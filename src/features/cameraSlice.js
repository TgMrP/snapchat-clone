import { createSlice } from '@reduxjs/toolkit';

export const cameraSlice = createSlice({
  name: 'camera',
  initialState: {
    currentImage: null,
  },
  reducers: {
    setCameraImage: (state, action) => {
      state.currentImage = action.payload;
    },
    resetCameraImage: (state) => {
      state.currentImage = null;
    },
  },
});

export const { setCameraImage, resetCameraImage } = cameraSlice.actions;

export const selectCameraImage = (state) => state.camera.currentImage;

export default cameraSlice.reducer;
