import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer QlBXMin1V8jDVYQi1_7KiQLbC8IsoewdauNeXGQ3rVSzNMpsdgAVixrGMv08rvBkK71jVow5SdBVpz50M4DEcAmbKArFC2fHhJ8e5xRKglUIZg-GzKuOh1lJ3Cg9X3Yx",
  },
});
