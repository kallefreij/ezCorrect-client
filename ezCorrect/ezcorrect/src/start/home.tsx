import * as React from 'react';
import InfoCard from '../teacher/home/components/infoCard';
import './home.css';
import img from '../resources/cardPhoto.jpeg';
import img2 from '../resources/cardPhoto2.jpeg';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import EzCorrectIcon from '../common/ezCorrectIcon';
import { Button, Grid } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import { NavLink } from 'react-router-dom';

const Home:React.FC = () => (
    <div>
        <section className='imageBackground'>
            {/* <EzCorrectIcon height={100} width={100}/> */}
            <NavLink to="/teacher/home" style={{textDecoration:'none'}}>
                <Button style={{backgroundColor: 'black', color: 'white'}}>Logga in</Button>
            </NavLink>
            <div className="custom-shape-divider-bottom-1630335144">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </section>
        <section className='green textWhite'>
            <EzCorrectIcon height={100} width={100}/>
            <h1>teachers best friend</h1>
            <p>Ab, ratione id? Quo et mollitia distinctio molestiae. Neque labore quo voluptas. Deleniti repellat laboriosam minus tempora. Obcaecati, unde corporis sint deleniti neque, aspernatur quam iure iusto nemo voluptatem molestiae.</p>
        </section>
        <section className='white'>
            <div className="custom-shape-divider-top-1630335702">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            {/* <EzCorrectIcon height={100} width={100}/> */}
            <Grid container justify="space-around">
                <Grid item>
                    <InfoCard title="easy learning" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" image={img} icon={<SchoolOutlinedIcon />} />
                </Grid>
                <Grid item>
                    <InfoCard title="Easy doing" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" image={img2} icon={<DoneIcon/>}/>
                </Grid>
                <Grid item>
                    <InfoCard title="easy learning" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" image={img} icon={<SchoolOutlinedIcon />} />
                </Grid>
            </Grid>
            {/* <h1>nice curves</h1>
            <p>Ab, ratione id? Quo et mollitia distinctio molestiae. Neque labore quo voluptas. Deleniti repellat laboriosam minus tempora. Obcaecati, unde corporis sint deleniti neque, aspernatur quam iure iusto nemo voluptatem molestiae.</p> */}
        </section>
        <div className='spacer'>
            
        </div>
        <section className='darkgreen textWhite'>
            <h1>nice curves</h1>
            <p>Repellendus quas, perspiciatis hic omnis officiis perferendis! Doloremque ipsam praesentium eaque reiciendis optio molestias impedit, corrupti, commodi placeat asperiores error pariatur? Ipsam adipisci recusandae omnis quo a. Nostrum, perspiciatis quo?</p>
        </section>
    </div>
)
export default Home