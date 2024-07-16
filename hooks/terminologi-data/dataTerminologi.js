export async function getTerminologi() {
    let references = [];
  
    try {
      const response = await axios.get("/terminologi");
      references = response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  
    return {
      props: {
        references,
      },
    };
  }