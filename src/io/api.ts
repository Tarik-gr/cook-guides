interface apiManagerInterface {
  getPopular: () => void;
}

class api implements apiManagerInterface {
  async getPopular() {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    return res.json();
  }
}

export const apiManager = new api();
