
import { useSelector } from "react-redux";
import HeadNav from "../../components/HeadNav";
import  FeatItem  from "../../components/FeatItem"


 export const Home = ()=>{
  const logged = useSelector((state)=>state?.userReducer.logged)
  const user =useSelector((state)=>state?.userReducer.user)
  

  const lnks=logged?[{
    lnk:`/User`,
    txt: user.firstName,
    icone:"fa fa-user-circle",
  }]:[{
    lnk:"/Sign_in",
    txt:"Sign In",
    icone:"fa fa-user-circle",
  }]

  return (
    <>
    <HeadNav lnks=
    {lnks}
    />
    <main className="main">
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <FeatItem/>
      </section>
      
    </main>
    
    <footer className="footer">
      <p className="footer-text">Copyright 2020 Argent Bank</p>
    </footer>
    </>
  )
}

export default Home;