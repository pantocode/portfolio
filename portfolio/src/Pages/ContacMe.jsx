import { Link } from "react-router-dom"

export function ContacMe() {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/211122/pexels-photo-211122.jpeg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            
            <Link to='/'><button className="btn btn-primary">Return</button></Link>
            </div>
        </div>
    </div>
  )
}
