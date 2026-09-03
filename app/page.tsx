export default function Home() {
  return (
    <div>
      <header style={{background:'#FDF8F3',color:'white',padding:'20px 40px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <span style={{fontSize:'1.5rem',fontWeight:'bold'}}>Project 1788455826330</span>
        <nav style={{display:'flex',gap:'20px'}}>
          <a href="#nav_sticky" style={{color:'white',textDecoration:'none'}}>nav_sticky</a>
          <a href="#hero_split" style={{color:'white',textDecoration:'none'}}>hero_split</a>
          <a href="#stats_banner" style={{color:'white',textDecoration:'none'}}>stats_banner</a>
          <a href="#services_cards" style={{color:'white',textDecoration:'none'}}>services_cards</a>
          <a href="#booking_form" style={{color:'white',textDecoration:'none'}}>booking_form</a>
        </nav>
      </header>
      <section style={{background:'#FDF8F3',color:'white',padding:'100px 40px',textAlign:'center'}}>
        <h1 style={{fontSize:'3rem',fontWeight:'800',marginBottom:'20px'}}>Project 1788455826330</h1>
        <p style={{fontSize:'1.2rem',opacity:0.85,maxWidth:'600px',margin:'0 auto 40px'}}>A serene, conversion-focused website for Estudio de Yoga Zen, a boutique yoga and meditation studio, featuring class overviews, a weekly schedule with booking, membership pricing tiers, and free-trial class reservation.</p>
        <a href="#contact" style={{background:'#2C7A76',color:'white',padding:'16px 32px',borderRadius:'50px',textDecoration:'none',fontWeight:'bold',display:'inline-block'}}>Get In Touch</a>
      </section>
      <section id="nav_sticky" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#FDF8F3'}}>nav_sticky</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our nav_sticky offerings.</p>
      </section>
      <section id="hero_split" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#FDF8F3'}}>hero_split</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our hero_split offerings.</p>
      </section>
      <section id="stats_banner" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#FDF8F3'}}>stats_banner</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our stats_banner offerings.</p>
      </section>
      <section id="services_cards" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#FDF8F3'}}>services_cards</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our services_cards offerings.</p>
      </section>
      <section id="booking_form" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#FDF8F3'}}>booking_form</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our booking_form offerings.</p>
      </section>
      <footer style={{background:'#FDF8F3',color:'white',padding:'30px',textAlign:'center'}}>
        <p>Copyright 2026 Project 1788455826330. All rights reserved.</p>
      </footer>
    </div>
  );
}