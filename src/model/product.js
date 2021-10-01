import useFetch from '../hooks/useFetch';
export default function Product(){
    const {data, error, loading} = useFetch("test");
    if(loading){
        return <div>loading</div>
    }
    if(error){
        return <div>an error occured</div>
    }

    return <div>
        {
            data.map(d=> {
                return <div><span>{d.fname}</span><span>{d.lname}</span> </div>
            })
        }
    </div>
}