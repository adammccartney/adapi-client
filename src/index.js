//const fetchPromise = fetch('http://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

async function fetchToken () {
    try {
        const response = await fetch("http://127.0.0.1:9001/tok.json");
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const json = await response.json();
        console.log(json[0].GITLAB_API_TOKEN);
    }
    catch (error) {
        console.error(`Could not retrieve token: ${error}`);
    }
}

fetchToken();
