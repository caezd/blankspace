"use client";
import { usePathname } from "next/navigation";
import TinyLogo from "../tiny-logo";
import { ChevronUp, Download, BookOpen } from "lucide-react";
import { LogoFull } from "../logo-full";

const links = [
    { title: "Thème", href: "/theme", childrens: [{}] },
    { title: "Forumactif", href: "/forumactif", childrens: [{}] },
    { title: "Plugins", href: "/plugins" },
    { title: "Tutoriaux", href: "/tutoriaux" },
    { title: "Ressources", href: "/ressources", childrens: [{}] },
];

export default function Home() {
    // active link
    const activeLink = links.find((link) => link.href === usePathname());
    return (
        <section className="my-12 container relative mx-auto min-h-screen py-4">
            <div className="bg-body absolute inset-0 rounded-3xl mask-b-from-40% -z-10">
                <div className="w-2xl h-[450px] bg-accent rounded-[100%] opacity-10 blur-[75px] absolute left-1/2 transform -translate-x-1/2 top-0 -translate-y-1/2 -z-10"></div>
            </div>
            <nav className="sticky top-6 px-12 py-4 rounded-3xl flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <TinyLogo size={12} />
                    <ul className="flex items-center gap-6">
                        {links.map((link) => (
                            <li
                                key={link.title}
                                className="uppercase font-bold text-nav-foreground"
                            >
                                <a
                                    href={link.href}
                                    className={`p-2 inline-flex items-center gap-2 rounded-sm hover:bg-background ${
                                        activeLink === link
                                            ? "bg-background"
                                            : ""
                                    }`}
                                >
                                    {link.title}
                                    {link.childrens &&
                                        link.childrens.length > 0 && (
                                            <ChevronUp className="w-4" />
                                        )}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div></div>
            </nav>
            <section className="min-h-[600px] flex items-center justify-center">
                <div className="text-accent flex flex-1 flex-col items-center gap-6 py-16">
                    <LogoFull size={460} />
                    <h2 className="text-5xl leading-snug text-primary-foreground font-semibold text-center">
                        Créez des thèmes
                        <br />à l'image de vos univers
                    </h2>
                    <h3 className="text-lg leading-snug text-primary-foreground text-center">
                        Thème de base pour Forumactif
                    </h3>
                    <p className="mt-24 py-1 px-4 bg-background text-secondary rounded-full border inline-block mx-auto font-mono">
                        Version 4.0
                    </p>
                </div>
            </section>
            <section className="min-h-screen px-12 relative">
                <div className="w-screen h-full bg-background rounded-[100%] blur-[100px] absolute left-1/2 transform -translate-x-1/2 top-0 -z-10"></div>
                <div className="border p-12 grid grid-cols-4 gap-6">
                    <div className="col-span-2 text-primary-foreground flex flex-col gap-2">
                        <h3 className="text-sm text-accent">À propos</h3>
                        <h2 className="text-4xl">
                            Démarrez votre forum
                            <br />
                            avec l'essentiel
                        </h2>
                    </div>
                    <div className="col-span-2 grid grid-cols-2 gap-6">
                        <div className="aspect-square bg-accent rounded-4xl p-6 flex flex-col gap-2">
                            <Download />
                            <h3 className="font-medium text-lg">
                                Installation
                            </h3>
                            <p>Installation automatique en quelques cliques.</p>
                            <div className="mt-auto ml-auto">
                                <a
                                    href="/theme"
                                    className="aspect-square bg-accent-600 w-10 inline-flex items-center justify-center rounded-full"
                                >
                                    <svg
                                        ariaHidden="true"
                                        viewBox="0 0 10 10"
                                        className="w-[10px] h-[10px] hoverArrow"
                                    >
                                        <g fillRule="evenodd">
                                            <path
                                                className="hoverArrow__linePath"
                                                d="M0 5h7"
                                            ></path>
                                            <path
                                                d="M1 1l4 4-4 4"
                                                className="hoverArrow__tipPath"
                                            ></path>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="border rounded-4xl text-primary-foreground p-6 flex flex-col gap-2">
                            <BookOpen />
                            <h3 className="font-medium text-lg">Guide</h3>
                            <p>
                                Installation étape par étape, pour découvrir le
                                fonctionnement du thème.
                            </p>
                            <div className="mt-auto ml-auto">
                                <a
                                    href="/theme"
                                    className="aspect-square bg-accent-600 w-10 inline-flex items-center justify-center rounded-full"
                                >
                                    <svg
                                        ariaHidden="true"
                                        viewBox="0 0 10 10"
                                        className="w-[10px] h-[10px] hoverArrow"
                                    >
                                        <g fillRule="evenodd">
                                            <path
                                                className="hoverArrow__linePath"
                                                d="M0 5h7"
                                            ></path>
                                            <path
                                                d="M1 1l4 4-4 4"
                                                className="hoverArrow__tipPath"
                                            ></path>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}
