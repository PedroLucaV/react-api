const Button = ([baseURL, object]) => {
    async function fetchAndDisplayCard() {
        try {
            const res = await fetch(`${baseURL}/${object}`);
            if (!res.ok) {
                throw new Error('Failed to fetch product');
            }
            const produto = await res.json();
    
            // Exibir as informações da carta
            showProductDetal(product);
        } catch (error) {
            console.error('Error fetching card:', error);
        }
    }
    fetchAndDisplayCard();
    return
}

export default Button;