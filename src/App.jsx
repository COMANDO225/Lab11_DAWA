import { Button, Typography } from "@mui/material";
import MainLayout from "./layouts/MainLayout";

import { useState, useEffect } from 'react';
import axios from "axios";
import Card from "./components/Card";

const App = () => {

    const [ pokemones, setPokemones ] = useState([]);

    const getPokemones = async () => {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100");
        const data = await res.data.results;
        console.log(data);

        const crearPokemonObject = (results) => {
            results.forEach(async (pokemon) => {
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                const data = await res.data;
                // console.log(data);
                setPokemones((listadoActual) => [...listadoActual, data]);
                await pokemones.sort((a, b) => a.id - b.id);
            });
        }
        crearPokemonObject(data);

        // setPokemones(data);
    }

    useEffect(() => {
        getPokemones();
    }, []);
    console.log(pokemones);

    return (
        <MainLayout>
            <ul className="grid_pokemons">
                {
                    pokemones.map((pokemon, i) => (
                        <li key={i} style={{
                            listStyle: "none",
                        }}>
                            <a href={`/${pokemon.name}`} style={{textDecoration: "none"}}>
                                <Card>
                                    <Typography variant="h2" component="h2"
                                        style={{
                                            textTransform: "capitalize",
                                            fontSize: "1rem",
                                            fontWeight: "600",
                                        }}
                                    >
                                        {pokemon.name}
                                    </Typography>
                                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                                </Card>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </MainLayout>
    );
}

export default App;