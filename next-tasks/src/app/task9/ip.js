import axios from 'axios'

async function getIp() {
    const res = await axios.get('https://api.ipify.org/?format=json')

    return res.data.ip
}

export default async function Ip() {
    const res = await getIp();

    return (
        <h1>{res}</h1>
    )

}