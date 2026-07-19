import "./style.css";
import { Link, NavLink } from "react-router-dom";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Logo from "../../assets/images/logo.png";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {

    const headerRef = useRef();

    useGSAP(() => {

        gsap.from(".header", {
            y: -120,
            opacity: 0,
            duration: 1,
            ease: "power4.out"
        });

        gsap.from(".logo", {
            scale: .5,
            opacity: 0,
            duration: .8,
            delay: .3,
            ease: "back.out(2)"
        });

        gsap.from("nav a", {
            y: -30,
            opacity: 0,
            stagger: .12,
            duration: .6,
            delay: .5,
            ease: "power3.out"
        });

        gsap.from(".btn-header", {
            x: 60,
            opacity: 0,
            duration: .7,
            delay: .8,
            ease: "power3.out"
        });

        gsap.to(".header-glow", {
            opacity: .9,
            scale: 1.15,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        ScrollTrigger.create({
            start: 50,
            end: 99999,
            onUpdate: self => {

                if (self.direction === 1) {

                    gsap.to(headerRef.current, {
                        paddingTop: 10,
                        paddingBottom: 10,
                        backdropFilter: "blur(25px)",
                        background: "rgba(5,10,18,.75)",
                        borderBottom: "1px solid rgba(0,200,255,.12)",
                        duration: .35
                    });

                } else {

                    gsap.to(headerRef.current, {
                        paddingTop: 20,
                        paddingBottom: 20,
                        backdropFilter: "blur(14px)",
                        background: "rgba(5,10,18,.35)",
                        borderBottom: "1px solid rgba(255,255,255,.06)",
                        duration: .35
                    });

                }

            }

        });

    }, []);

    return (
        <header className="header" ref={headerRef}>

            <div className="header-glow"></div>

            <div className="container-header">

                <Link to="/" className="logo">
                    <img src={Logo} alt="CoreSync AI" />
                </Link>

                <nav>

                    <NavLink to="/">
                        Home
                    </NavLink>

                    <NavLink to="/perguntas">
                        FAQ
                    </NavLink>

                    <NavLink to="/news">
                        News
                    </NavLink>

                    <NavLink to="/blog">
                        Blog
                    </NavLink>

                </nav>

                <button className="btn-header">
                    Solicitar Demo
                </button>

            </div>

        </header>
    );
};

export default Header;