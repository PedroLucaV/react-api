const Button = ([baseURL, object]) => {
    const loadData = async () =>{
        const res = await fetch(`${baseURL}/${object}`)
        const data = await res.json();
        return data
    }

    const loadAllWithPromiseAll = async () =>{
        const [data] = await Promise.all([
            loadData()
        ])
    }

    loadAllWithPromiseAll()

    return
}

export default Button;