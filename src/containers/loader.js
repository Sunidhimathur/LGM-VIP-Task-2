import Loader from "react-loader-spinner";
import './styles.css';

const LoaderComp = ()=>{
    return(
        <div className='app'>
            <Loader
            type="TailSpin"
            color="rgb(155, 236, 34)"
            height={400}
            width={600}
            timeout={3000}
            />
       </div>
    );
}
export default LoaderComp
