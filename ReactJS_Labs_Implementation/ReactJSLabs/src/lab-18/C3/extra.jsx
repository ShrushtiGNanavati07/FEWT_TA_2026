function P() {

    const img = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHIexA37xt9ldH_BVMXZPYD713ZmEqTXDcPQ&s', 
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHCLm1Z_ospfHkvkNpxi28GfWkClRTSmceYw&s',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHIexA37xt9ldH_BVMXZPYD713ZmEqTXDcPQ&s', 
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHCLm1Z_ospfHkvkNpxi28GfWkClRTSmceYw&s',
        ];
        
    return (
        <B img={img} />
    )
}

function B(props) {
    const name = ['pencil', 'pen', 'book', 'color'];
    return (
        <C img={props.img} name={name} />
    )
}
function C(props) {
    const company = ['apsara', 's.s pinlong', 'doms', 'camel'];
    const price = [10,10,50,100];
    return (
         <D img={props.img} name={props.name} company={company} price={price}/>
       
    )
}

function D(props) {

    return (
        <div className="row">
            {props.name.map((temp, index) => {  // here () use bcs it automatically returns so need not to write return statement where {} need return statement
            return(
                    <div className="col-4 mt-5 ">
                        <div className="card bg-dark text-light" style={{ width: 300 }}>
                             <img src={props.img[index]} style={{ height: 200, width: 200, margin: 30, marginLeft: 50 }}></img>
                            <div className="card-body text-center"> 
                                <h5 className="card-title">{temp}</h5><hr />
                                <h6 className=" mb-2 card-text">Company : {props.company[index]}</h6>
                                <p className="card-text">Price : {props.price[index]}</p>
                            </div>
                        </div>
                    </div>
                )})}
        </div>
    )
}
export default P;

