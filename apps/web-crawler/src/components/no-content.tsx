interface ContentProps {
  error: string;
}


const NoContent = (props: ContentProps) => {
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center p-4">
          <img className="bi me-2" src="//pill.com.br/cdn/shop/t/51/assets/header-union.svg?v=4551551774730843711689454729" alt="Union" />
        </div>
        <div className="col-md-12">
          <p className="text-center">{props.error}</p>
        </div>
      </div>
    </div>
  )
}

export default NoContent