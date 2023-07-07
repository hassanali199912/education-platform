

export default function Wrapper(props){

    return <>

      {/* <!--================= Wrapper Start Here =================--> */}
        <div className="react-wrapper">
            <div className="react-wrapper-inner">
             {props.children}
            </div>
        </div>
        {/* <!--================= Wrapper End Here =================--> */}

    </>
}