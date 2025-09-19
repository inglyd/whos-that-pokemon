import React, { useState, useEffect } from 'react';
import { PartitionBlue, PartitionContainer, PartitionYellow } from "../../components/Partition/styles";
import { Subtitle } from "../HomePage/style";

const GamePage = () => {
    const [currentPokemon, setCurrentPokemon] = useState(null);
    const [pokemonId, setPokemonId] = useState(Math.floor(Math.random() * 150) + 1);
    const [userGuess, setUserGuess] = useState('');
    const [isRevealed, setIsRevealed] = useState(false);
    const [score, setScore] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    // Buscar dados do pokémon
    useEffect(() => {
        const fetchPokemon = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
                const data = await response.json();
                setCurrentPokemon(data);
            } catch (error) {
                console.error('Erro ao buscar pokémon:', error);
            }
            setIsLoading(false);
        };

        fetchPokemon();
    }, [pokemonId]);

    const checkAnswer = () => {
        if (!currentPokemon || !userGuess.trim()) return;

        const correctName = currentPokemon.name.toLowerCase();
        const guess = userGuess.toLowerCase().trim();

        setTotalQuestions(prev => prev + 1);

        if (guess === correctName) {
            setScore(prev => prev + 1);
            setFeedback('Correto!');
            setIsRevealed(true);
        } else {
            setFeedback(`Errou! Era ${currentPokemon.name.charAt(0).toUpperCase() + currentPokemon.name.slice(1)}`);
            setIsRevealed(true);
        }
    };

    const nextPokemon = () => {
        setPokemonId(Math.floor(Math.random() * 150) + 1);
        setUserGuess('');
        setIsRevealed(false);
        setFeedback('');
    };

    const resetGame = () => {
        setScore(0);
        setTotalQuestions(0);
        nextPokemon();
    };

    return (
        <>
            <div style={{
                position: 'absolute',
                top: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 10
            }}>
                <Subtitle style={{
                    fontSize: '2rem',
                    marginBottom: '10px'
                }}>
                    Placar: {score}/{totalQuestions}
                </Subtitle>
            </div>

            <PartitionContainer>
                <PartitionBlue style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem',
                    position: 'relative'
                }}>
                    <Subtitle style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
                        Quem é esse Pokémon?
                    </Subtitle>

                    <div style={{ marginBottom: '2rem' }}>
                        {isLoading ? (
                            <div style={{
                                width: '300px',
                                height: '300px',
                                backgroundColor: '#444',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: '1.2rem'
                            }}>
                                Carregando...
                            </div>
                        ) : (
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
                                alt="Pokémon"
                                style={{
                                    width: '300px',
                                    height: '300px',
                                    objectFit: 'contain',
                                    filter: isRevealed ? 'none' : 'brightness(0)',
                                    transition: 'filter 0.5s ease'
                                }}
                            />
                        )}
                    </div>

                    <button
                        onClick={resetGame}
                        style={{
                            backgroundColor: '#666',
                            color: 'white',
                            border: 'none',
                            padding: '10px 20px',
                            borderRadius: '10px',
                            cursor: 'pointer',
                            fontFamily: "'Potta One', cursive"
                        }}
                    >
                        Resetar Jogo
                    </button>
                </PartitionBlue>

                <PartitionYellow style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem'
                }}>
                    <div style={{ width: '100%', maxWidth: '400px' }}>
                        {feedback && (
                            <div style={{
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                padding: '1rem',
                                borderRadius: '10px',
                                marginBottom: '1.5rem',
                                backgroundColor: feedback.includes('Correto') ? '#4CAF50' : '#f44336',
                                color: 'white'
                            }}>
                                {feedback}
                            </div>
                        )}

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{
                                display: 'block',
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                color: '#314982',
                                textAlign: 'center',
                                marginBottom: '1rem',
                                fontFamily: "'Potta One', cursive"
                            }}>
                                Digite o nome do Pokémon:
                            </label>

                            <input
                                type="text"
                                value={userGuess}
                                onChange={(e) => setUserGuess(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && !isRevealed && checkAnswer()}
                                disabled={isRevealed}
                                placeholder="Ex: pikachu"
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    fontSize: '1.2rem',
                                    textAlign: 'center',
                                    borderRadius: '10px',
                                    border: '4px solid #314982',
                                    fontFamily: "'Potta One', cursive",
                                    backgroundColor: isRevealed ? '#f0f0f0' : 'white'
                                }}
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {!isRevealed ? (
                                <button
                                    onClick={checkAnswer}
                                    disabled={!userGuess.trim() || isLoading}
                                    style={{
                                        width: '100%',
                                        backgroundColor: (!userGuess.trim() || isLoading) ? '#ccc' : '#cd3529',
                                        color: 'white',
                                        border: 'none',
                                        padding: '1rem',
                                        borderRadius: '15px',
                                        fontSize: '1.3rem',
                                        fontWeight: 'bold',
                                        cursor: (!userGuess.trim() || isLoading) ? 'not-allowed' : 'pointer',
                                        fontFamily: "'Potta One', cursive"
                                    }}
                                >
                                    ENVIAR RESPOSTA
                                </button>
                            ) : (
                                <button
                                    onClick={nextPokemon}
                                    style={{
                                        width: '100%',
                                        backgroundColor: '#4CAF50',
                                        color: 'white',
                                        border: 'none',
                                        padding: '1rem',
                                        borderRadius: '15px',
                                        fontSize: '1.3rem',
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        fontFamily: "'Potta One', cursive"
                                    }}
                                >
                                    PRÓXIMO POKÉMON
                                </button>
                            )}
                        </div>

                        {currentPokemon && isRevealed && (
                            <div style={{
                                backgroundColor: 'white',
                                padding: '1rem',
                                borderRadius: '10px',
                                textAlign: 'center',
                                border: '4px solid #314982',
                                marginTop: '1.5rem'
                            }}>
                                <h3 style={{
                                    fontSize: '1.3rem',
                                    fontWeight: 'bold',
                                    color: '#314982',
                                    textTransform: 'capitalize',
                                    fontFamily: "'Potta One', cursive",
                                    margin: '0 0 0.5rem 0'
                                }}>
                                    {currentPokemon.name}
                                </h3>
                                <p style={{ color: '#666', margin: '0 0 0.5rem 0' }}>
                                    #{currentPokemon.id}
                                </p>
                                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                                    {currentPokemon.types.map((type) => (
                                        <span
                                            key={type.type.name}
                                            style={{
                                                backgroundColor: '#314982',
                                                color: 'white',
                                                padding: '0.3rem 0.8rem',
                                                borderRadius: '15px',
                                                fontSize: '0.9rem',
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            {type.type.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </PartitionYellow>
            </PartitionContainer>
        </>
    );
};

export default GamePage;

