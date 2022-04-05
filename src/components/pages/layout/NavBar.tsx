import '../../style/NavBar.css'
export function NavBar(){
  return(
  
      <header>
          <section className='active' id='home_navbar'><a href="#">Home</a></section>
          <section><a href="#">Projetos</a></section>
          <section><a href="#">Contato</a></section>
        </header>
   
  )
}