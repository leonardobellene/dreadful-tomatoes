import { render, screen, fireEvent } from '@testing-library/react';
import { Selector } from './Selector';
import { RootState } from 'interfaces';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore<RootState>();

describe('Selector component', () => {
    let store: ReturnType<typeof mockStore>;
    beforeEach(() => {
        store = mockStore({
            movies: {
                fullCatalog: [
                    {
                        title: 'Avengers: Endgame',
                        description: 'After half of all life is snapped away by Thanos, the Avengers are left scattered and divided. Now with a way to reverse the damage, the Avengers and their allies must assemble once more and learn to put differences aside in order to work together and set things right.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/avengers_end_game.jpg',
                                width: 467,
                                height: 700
                            }
                        },
                        releaseYear: 2019
                    },
                    {
                        title: 'Ex Machina',
                        description: 'A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a breath-taking humanoid A.I.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/ex_machina.jpg',
                                width: 500,
                                height: 741
                            }
                        },
                        releaseYear: 2015
                    },
                    {
                        title: 'The Martian',
                        description: 'An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/the_martian.jpg',
                                width: 500,
                                height: 740
                            }
                        },
                        releaseYear: 2015
                    },
                    {
                        title: 'The Grand Budapest Hotel',
                        description: 'The adventures of Gustave H, a legendary concierge at a famous hotel from the fictional Republic of Zubrowka between the first and second World Wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/the_grand_budapest_hotel.jpg',
                                width: 500,
                                height: 741
                            }
                        },
                        releaseYear: 2014
                    },
                    {
                        title: 'Interstellar',
                        description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/interstellar.jpg',
                                width: 500,
                                height: 781
                            }
                        },
                        releaseYear: 2014
                    },
                    {
                        title: 'The Wolf of Wall Street',
                        description: 'Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/the_wolf_of_wall_street.jpg',
                                width: 500,
                                height: 741
                            }
                        },
                        releaseYear: 2013
                    },
                    {
                        title: 'The Great Beauty',
                        description: 'Jep Gambardella has seduced his way through the lavish nightlife of Rome for decades, but after his 65th birthday and a shock from the past, Jep looks past the nightclubs and parties to find a timeless landscape of absurd, exquisite beauty.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/the_great_beauty.jpg',
                                width: 500,
                                height: 732
                            }
                        },
                        releaseYear: 2013
                    },
                    {
                        title: 'The Impossible',
                        description: 'The story of a tourist family in Thailand caught in the destruction and chaotic aftermath of the 2004 Indian Ocean tsunami.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/the_impossible.jpg',
                                width: 500,
                                height: 741
                            }
                        },
                        releaseYear: 2012
                    },
                    {
                        title: 'Black Swan',
                        description: 'A committed dancer wins the lead role in a production of Tchaikovsky\'s "Swan Lake" only to find herself struggling to maintain her sanity.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/black_swan.jpg',
                                width: 500,
                                height: 741
                            }
                        },
                        releaseYear: 2010
                    },
                    {
                        title: 'Inception',
                        description: 'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/inception.jpg',
                                width: 500,
                                height: 741
                            }
                        },
                        releaseYear: 2010
                    },
                    {
                        title: 'Shutter Island',
                        description: 'In 1954, a U.S. marshal investigates the disappearance of a murderess who escaped from a hospital for the criminally insane.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/shutter_island.jpg',
                                width: 500,
                                height: 753
                            }
                        },
                        releaseYear: 2010
                    },
                    {
                        title: 'WALL·E',
                        description: 'In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/wall_e.jpg',
                                width: 500,
                                height: 740
                            }
                        },
                        releaseYear: 2008
                    },
                    {
                        title: 'Pirates of the Caribbean: At World\'s End',
                        description: 'Captain Barbossa, Will Turner and Elizabeth Swann must sail off the edge of the map, navigate treachery and betrayal, find Jack Sparrow, and make their final alliances for one last decisive battle.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/pirates_of_the_caribbean.jpg',
                                width: 450,
                                height: 666
                            }
                        },
                        releaseYear: 2007
                    },
                    {
                        title: 'No Country for Old Men',
                        description: 'Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/no_country_for_old_men.jpg',
                                width: 500,
                                height: 736
                            }
                        },
                        releaseYear: 2007
                    },
                    {
                        title: 'V for Vendetta',
                        description: 'In a future British tyranny, a shadowy freedom fighter, known only by the alias of "V", plots to overthrow it with the help of a young woman.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/v_for_vendetta.jpg',
                                width: 500,
                                height: 740
                            }
                        },
                        releaseYear: 2005
                    },
                    {
                        title: 'Sin City',
                        description: 'A film that explores the dark and miserable town, Basin City, and tells the story of three different people, all caught up in violent corruption.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/sin_city.jpg',
                                width: 500,
                                height: 747
                            }
                        },
                        releaseYear: 2005
                    },
                    {
                        title: 'Crash',
                        description: 'Los Angeles citizens with vastly separate lives collide in interweaving stories of race, loss and redemption.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/crash.jpg',
                                width: 500,
                                height: 740
                            }
                        },
                        releaseYear: 2004
                    },
                    {
                        title: 'Catch Me If You Can',
                        description: 'The true story of Frank Abagnale Jr. who, before his 19th birthday, successfully conned millions of dollars\' worth of checks as a Pan Am pilot, doctor, and legal prosecutor.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/catch_me_if_you_can.jpg',
                                width: 485,
                                height: 719
                            }
                        },
                        releaseYear: 2002
                    },
                    {
                        title: 'Spirited Away',
                        description: 'During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/spirited_away.jpg',
                                width: 450,
                                height: 635
                            }
                        },
                        releaseYear: 2001
                    },
                    {
                        title: 'Shrek',
                        description: 'After his swamp is filled with magical creatures, an ogre agrees to rescue a princess for a villainous lord in order to get his land back.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/shrek.jpg',
                                width: 500,
                                height: 741
                            }
                        },
                        releaseYear: 2001
                    },
                    {
                        title: 'American History X',
                        description: 'A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/american_history_x.jpg',
                                width: 497,
                                height: 736
                            }
                        },
                        releaseYear: 1998
                    },
                    {
                        title: 'The Truman Show',
                        description: 'An insurance salesman/adjuster discovers his entire life is actually a television show.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/the_truman_show.jpg',
                                width: 500,
                                height: 742
                            }
                        },
                        releaseYear: 1998
                    },
                    {
                        title: 'Gattaca',
                        description: 'A genetically inferior man assumes the identity of a superior one in order to pursue his lifelong dream of space travel.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/gattaca.jpg',
                                width: 500,
                                height: 747
                            }
                        },
                        releaseYear: 1997
                    },
                    {
                        title: 'Pulp Fiction',
                        description: 'The lives of two mob hit men, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/pulp_fiction.jpg',
                                width: 500,
                                height: 743
                            }
                        },
                        releaseYear: 1994
                    },
                    {
                        title: 'Reservoir Dogs',
                        description: 'After a simple jewelry heist goes terribly wrong, the surviving criminals begin to suspect that one of them is a police informant.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/reservoir_dogs.jpg',
                                width: 500,
                                height: 722
                            }
                        },
                        releaseYear: 1992
                    },
                    {
                        title: 'The Silence of the Lambs',
                        description: 'A young F.B.I. cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer who skins his victims.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/the_silence_of_the_lambs.jpg',
                                width: 500,
                                height: 750
                            }
                        },
                        releaseYear: 1991
                    },
                    {
                        title: 'Once Upon a Time in America',
                        description: 'A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/once_upon_a_time_in_america.jpg',
                                width: 500,
                                height: 781
                            }
                        },
                        releaseYear: 1984
                    },
                    {
                        title: 'Scarface',
                        description: 'In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/scarface.jpg',
                                width: 500,
                                height: 741
                            }
                        },
                        releaseYear: 1983
                    },
                    {
                        title: 'Chinatown',
                        description: 'A private detective hired to expose an adulterer finds himself caught up in a web of deceit, corruption and murder.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/chinatown.jpg',
                                width: 500,
                                height: 715
                            }
                        },
                        releaseYear: 1974
                    },
                    {
                        title: 'Rear Window',
                        description: 'A wheelchair-bound photographer spies on his neighbours from his apartment window and becomes convinced one of them has committed murder.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/rear_window.jpg',
                                width: 500,
                                height: 732
                            }
                        },
                        releaseYear: 1954
                    }
                ],
                filteredCatalog: [
                    {
                        title: 'Avengers: Endgame',
                        description: 'After half of all life is snapped away by Thanos, the Avengers are left scattered and divided. Now with a way to reverse the damage, the Avengers and their allies must assemble once more and learn to put differences aside in order to work together and set things right.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/avengers_end_game.jpg',
                                width: 467,
                                height: 700
                            }
                        },
                        releaseYear: 2019
                    },
                    {
                        title: 'Ex Machina',
                        description: 'A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a breath-taking humanoid A.I.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/ex_machina.jpg',
                                width: 500,
                                height: 741
                            }
                        },
                        releaseYear: 2015
                    },
                    {
                        title: 'The Martian',
                        description: 'An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/the_martian.jpg',
                                width: 500,
                                height: 740
                            }
                        },
                        releaseYear: 2015
                    },
                    {
                        title: 'The Grand Budapest Hotel',
                        description: 'The adventures of Gustave H, a legendary concierge at a famous hotel from the fictional Republic of Zubrowka between the first and second World Wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/the_grand_budapest_hotel.jpg',
                                width: 500,
                                height: 741
                            }
                        },
                        releaseYear: 2014
                    },
                    {
                        title: 'Interstellar',
                        description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/interstellar.jpg',
                                width: 500,
                                height: 781
                            }
                        },
                        releaseYear: 2014
                    },
                    {
                        title: 'The Wolf of Wall Street',
                        description: 'Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/the_wolf_of_wall_street.jpg',
                                width: 500,
                                height: 741
                            }
                        },
                        releaseYear: 2013
                    },
                    {
                        title: 'The Great Beauty',
                        description: 'Jep Gambardella has seduced his way through the lavish nightlife of Rome for decades, but after his 65th birthday and a shock from the past, Jep looks past the nightclubs and parties to find a timeless landscape of absurd, exquisite beauty.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/the_great_beauty.jpg',
                                width: 500,
                                height: 732
                            }
                        },
                        releaseYear: 2013
                    },
                    {
                        title: 'The Impossible',
                        description: 'The story of a tourist family in Thailand caught in the destruction and chaotic aftermath of the 2004 Indian Ocean tsunami.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/the_impossible.jpg',
                                width: 500,
                                height: 741
                            }
                        },
                        releaseYear: 2012
                    },
                    {
                        title: 'Black Swan',
                        description: 'A committed dancer wins the lead role in a production of Tchaikovsky\'s "Swan Lake" only to find herself struggling to maintain her sanity.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/black_swan.jpg',
                                width: 500,
                                height: 741
                            }
                        },
                        releaseYear: 2010
                    },
                    {
                        title: 'Inception',
                        description: 'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/inception.jpg',
                                width: 500,
                                height: 741
                            }
                        },
                        releaseYear: 2010
                    },
                    {
                        title: 'Shutter Island',
                        description: 'In 1954, a U.S. marshal investigates the disappearance of a murderess who escaped from a hospital for the criminally insane.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/shutter_island.jpg',
                                width: 500,
                                height: 753
                            }
                        },
                        releaseYear: 2010
                    },
                    {
                        title: 'WALL·E',
                        description: 'In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/wall_e.jpg',
                                width: 500,
                                height: 740
                            }
                        },
                        releaseYear: 2008
                    },
                    {
                        title: 'Pirates of the Caribbean: At World\'s End',
                        description: 'Captain Barbossa, Will Turner and Elizabeth Swann must sail off the edge of the map, navigate treachery and betrayal, find Jack Sparrow, and make their final alliances for one last decisive battle.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/pirates_of_the_caribbean.jpg',
                                width: 450,
                                height: 666
                            }
                        },
                        releaseYear: 2007
                    },
                    {
                        title: 'No Country for Old Men',
                        description: 'Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/no_country_for_old_men.jpg',
                                width: 500,
                                height: 736
                            }
                        },
                        releaseYear: 2007
                    },
                    {
                        title: 'V for Vendetta',
                        description: 'In a future British tyranny, a shadowy freedom fighter, known only by the alias of "V", plots to overthrow it with the help of a young woman.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/v_for_vendetta.jpg',
                                width: 500,
                                height: 740
                            }
                        },
                        releaseYear: 2005
                    },
                    {
                        title: 'Sin City',
                        description: 'A film that explores the dark and miserable town, Basin City, and tells the story of three different people, all caught up in violent corruption.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/sin_city.jpg',
                                width: 500,
                                height: 747
                            }
                        },
                        releaseYear: 2005
                    },
                    {
                        title: 'Crash',
                        description: 'Los Angeles citizens with vastly separate lives collide in interweaving stories of race, loss and redemption.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/crash.jpg',
                                width: 500,
                                height: 740
                            }
                        },
                        releaseYear: 2004
                    },
                    {
                        title: 'Catch Me If You Can',
                        description: 'The true story of Frank Abagnale Jr. who, before his 19th birthday, successfully conned millions of dollars\' worth of checks as a Pan Am pilot, doctor, and legal prosecutor.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/catch_me_if_you_can.jpg',
                                width: 485,
                                height: 719
                            }
                        },
                        releaseYear: 2002
                    },
                    {
                        title: 'Spirited Away',
                        description: 'During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/spirited_away.jpg',
                                width: 450,
                                height: 635
                            }
                        },
                        releaseYear: 2001
                    },
                    {
                        title: 'Shrek',
                        description: 'After his swamp is filled with magical creatures, an ogre agrees to rescue a princess for a villainous lord in order to get his land back.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/shrek.jpg',
                                width: 500,
                                height: 741
                            }
                        },
                        releaseYear: 2001
                    },
                    {
                        title: 'American History X',
                        description: 'A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/american_history_x.jpg',
                                width: 497,
                                height: 736
                            }
                        },
                        releaseYear: 1998
                    },
                    {
                        title: 'The Truman Show',
                        description: 'An insurance salesman/adjuster discovers his entire life is actually a television show.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/the_truman_show.jpg',
                                width: 500,
                                height: 742
                            }
                        },
                        releaseYear: 1998
                    },
                    {
                        title: 'Gattaca',
                        description: 'A genetically inferior man assumes the identity of a superior one in order to pursue his lifelong dream of space travel.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/gattaca.jpg',
                                width: 500,
                                height: 747
                            }
                        },
                        releaseYear: 1997
                    },
                    {
                        title: 'Pulp Fiction',
                        description: 'The lives of two mob hit men, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/pulp_fiction.jpg',
                                width: 500,
                                height: 743
                            }
                        },
                        releaseYear: 1994
                    },
                    {
                        title: 'Reservoir Dogs',
                        description: 'After a simple jewelry heist goes terribly wrong, the surviving criminals begin to suspect that one of them is a police informant.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/reservoir_dogs.jpg',
                                width: 500,
                                height: 722
                            }
                        },
                        releaseYear: 1992
                    },
                    {
                        title: 'The Silence of the Lambs',
                        description: 'A young F.B.I. cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer who skins his victims.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/the_silence_of_the_lambs.jpg',
                                width: 500,
                                height: 750
                            }
                        },
                        releaseYear: 1991
                    },
                    {
                        title: 'Once Upon a Time in America',
                        description: 'A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/once_upon_a_time_in_america.jpg',
                                width: 500,
                                height: 781
                            }
                        },
                        releaseYear: 1984
                    },
                    {
                        title: 'Scarface',
                        description: 'In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/scarface.jpg',
                                width: 500,
                                height: 741
                            }
                        },
                        releaseYear: 1983
                    },
                    {
                        title: 'Chinatown',
                        description: 'A private detective hired to expose an adulterer finds himself caught up in a web of deceit, corruption and murder.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/chinatown.jpg',
                                width: 500,
                                height: 715
                            }
                        },
                        releaseYear: 1974
                    },
                    {
                        title: 'Rear Window',
                        description: 'A wheelchair-bound photographer spies on his neighbours from his apartment window and becomes convinced one of them has committed murder.',
                        programType: 'movies',
                        images: {
                            posterArt: {
                                url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/rear_window.jpg',
                                width: 500,
                                height: 732
                            }
                        },
                        releaseYear: 1954
                    }
                ]
            },
            series: {
                fullCatalog: [
                  {
                    title: 'The Flash',
                    description: 'After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only "meta-human" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won\'t be long before the world learns what Barry Allen has become...The Flash!',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/the_flash.jpeg',
                        width: 960,
                        height: 1200
                      }
                    },
                    releaseYear: 2014
                  },
                  {
                    title: 'Fargo',
                    description: 'Fargo is an American crime drama with some dark comical elements inspired by the film Fargo written by the Coen brothers. It was met with considerable acclaim as insurance salesman Lester Nygaard faces off against the psychopath Lorne Malvo.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/fargo.jpeg',
                        width: 680,
                        height: 1000
                      }
                    },
                    releaseYear: 2014
                  },
                  {
                    title: 'Looking',
                    description: 'Looking offers up the unfiltered experiences of three close friends living - and loving - in modern-day San Francisco. Friendship may bind them, but each is at a markedly different point in his journey: Patrick is the 29-year-old video game designer getting back into the dating world in the wake of his ex\'s engagement; aspiring artist Agustín, 31, is questioning the idea of monogamy amid a move to domesticate with his boyfriend; and the group\'s oldest member - longtime waiter Dom, 39 - is facing middle age with romantic and professional dreams still unfulfilled. The trio\'s stories intertwine and unspool dramatically as they search for happiness and intimacy in an age of unparalleled choices - and rights - for gay men. Also important to the \'Looking\' mix is the progressive, unpredictable, sexually open culture of the Bay Area, with real San Francisco locations serving as a backdrop for the group\'s lives. Rounding out the \'Looking\' world are a bevy of dynamic gay men including Kevin, Lynn, and Richie, as well as a wide-range of supporting characters like Dom\'s roommate Doris, Agustín\'s boyfriend Frank, and Patrick\'s co-worker Owen.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/looking.jpeg',
                        width: 680,
                        height: 1000
                      }
                    },
                    releaseYear: 2014
                  },
                  {
                    title: 'Vikings',
                    description: 'Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore - and raid - the distant shores across the ocean.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/vikings.jpeg',
                        width: 800,
                        height: 1084
                      }
                    },
                    releaseYear: 2013
                  },
                  {
                    title: 'Arrow',
                    description: 'After a violent shipwreck, billionaire playboy Oliver Queen was missing and presumed dead for five years before being discovered alive on a remote island in the Pacific. He returned home to Starling City, welcomed by his devoted mother Moira, beloved sister Thea and former flame Laurel Lance. With the aid of his trusted chauffeur/bodyguard John Diggle, the computer-hacking skills of Felicity Smoak and the occasional, reluctant assistance of former police detective, now beat cop, Quentin Lance, Oliver has been waging a one-man war on crime.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/arrow.jpeg',
                        width: 1080,
                        height: 1350
                      }
                    },
                    releaseYear: 2012
                  },
                  {
                    title: 'Person of Interest',
                    description: 'You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered "irrelevant". They wouldn\'t act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You\'ll never find us. But victim or perpetrator, if your number is up, we\'ll find you.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/person_of_interest.jpeg',
                        width: 1300,
                        height: 1733
                      }
                    },
                    releaseYear: 2011
                  },
                  {
                    title: 'Homeland',
                    description: 'The winner of 6 Emmy Awards including Outstanding Drama Series, Homeland is an edge-of-your-seat sensation. Marine Sergeant Nicholas Brody is both a decorated hero and a serious threat. CIA officer Carrie Mathison is tops in her field despite being bipolar. The delicate dance these two complex characters perform, built on lies, suspicion, and desire, is at the heart of this gripping, emotional thriller in which nothing short of the fate of our nation is at stake.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/homeland.jpeg',
                        width: 2500,
                        height: 3750
                      }
                    },
                    releaseYear: 2011
                  },
                  {
                    title: 'American Horror Story',
                    description: 'American Horror Story is an horror television anthology series. Each season is conceived as a self-contained miniseries, following a disparate set of characters and settings, and a storyline with its own beginning, middle, and end. While some actors appear for more than one year, they play completely different roles in each season.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/american_horror_story.jpeg',
                        width: 1080,
                        height: 1350
                      }
                    },
                    releaseYear: 2011
                  },
                  {
                    title: 'Game of Thrones',
                    description: 'Based on the bestselling book series A Song of Ice and Fire by George R.R. Martin, this sprawling new HBO drama is set in a world where summers span decades and winters can last a lifetime. From the scheming south and the savage eastern lands, to the frozen north and ancient Wall that protects the realm from the mysterious darkness beyond, the powerful families of the Seven Kingdoms are locked in a battle for the Iron Throne. This is a story of duplicity and treachery, nobility and honor, conquest and triumph. In the Game of Thrones, you either win or you die.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/game_of_thrones.jpeg',
                        width: 680,
                        height: 1000
                      }
                    },
                    releaseYear: 2011
                  },
                  {
                    title: 'The Walking Dead',
                    description: 'The Walking Dead tells the story of the months and years that follow after a zombie apocalypse. It follows a group of survivors, led by former police officer Rick Grimes, who travel in search of a safe and secure home. As the world overrun by the dead takes its toll on the survivors, their interpersonal conflicts present a greater danger to their continuing survival than the walkers that roam the country. Over time, the characters are changed by the constant exposure to death and some grow willing to do anything to survive. Based on the comic book series of the same name by Robert Kirkman, Tony Moore, and Charlie Adlard.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/the_walking_dead.jpeg',
                        width: 1944,
                        height: 2815
                      }
                    },
                    releaseYear: 2010
                  },
                  {
                    title: 'Nikita',
                    description: 'When she was a deeply troubled teenager, Nikita was rescued from death row by a secret U.S. agency known only as Division, who trained her as a spy and assassin. Nikita was eventually betrayed by the only people she thought she could trust. Now, after three years in hiding, Nikita is seeking retribution and making it clear to her former boss, Percy and her former friends Michael and Birkhoff that she will stop at nothing to expose and destroy their covert operation.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/nikita.jpeg',
                        width: 680,
                        height: 1000
                      }
                    },
                    releaseYear: 2010
                  },
                  {
                    title: 'Glee',
                    description: 'Glee is a musical comedy about a group of ambitious and talented young adults in search of strength, acceptance and, ultimately, their voice.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/glee.jpeg',
                        width: 680,
                        height: 1000
                      }
                    },
                    releaseYear: 2009
                  },
                  {
                    title: 'The Vampire Diaries',
                    description: 'The Vampire Diaries is a supernatural drama/romance based around Elena Gilbert who falls in love with a 163 year old vampire. Based on a novel series by L.J. Smith.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/the_vampire_diaries.jpeg',
                        width: 680,
                        height: 1000
                      }
                    },
                    releaseYear: 2009
                  },
                  {
                    title: 'Castle',
                    description: 'Castle follows Rick Castle who is one of the world\'s most successful crime authors. But when his rock star lifestyle isn\'t enough, this bad boy goes looking for new trouble and finds it working with smart, beautiful Detective Kate Beckett. Inspired by her professional record and intrigued by her buttoned-up personality, Castle\'s found the model for his bold new character whether she likes it or not. Now with the mayor\'s permission, Castle is helping solve crime with his own twist.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/castle.jpeg',
                        width: 680,
                        height: 1000
                      }
                    },
                    releaseYear: 2009
                  },
                  {
                    title: 'Modern Family',
                    description: 'Modern Family revolves around three different types of families (nuclear, step- and same-sex) living in the Los Angeles area, who are interrelated through Jay Pritchett and his children, Claire Dunphy (née Pritchett) and Mitchell Pritchett. Patriarch Jay is remarried to a much younger woman, Gloria Delgado Pritchett (née Ramirez), a passionate Colombian with whom he has an infant son, Fulgencio (Joe) Pritchett, and a son from Gloria\'s previous marriage, Manny Delgado. Jay\'s daughter Claire was a homemaker, but has returned to the business world. She is now the chief executive of her father\'s previous business, Pritchett\'s Closets and Blinds. She is married to Phil Dunphy, a realtor and self-professed "cool dad". They have three children: Haley Dunphy, a stereotypical ditzy teenage girl; Alex Dunphy, a nerdy, smart middle child; and Luke Dunphy, the off-beat only son. Jay\'s lawyer son Mitchell and his husband Cameron Tucker have one daughter, Lily Tucker-Pritchett. As the name suggests, this family represents a modern-day family, and episodes are comically based on situations which many families encounter in real life.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/modern_family.jpeg',
                        width: 1280,
                        height: 1825
                      }
                    },
                    releaseYear: 2009
                  },
                  {
                    title: 'Breaking Bad',
                    description: 'Breaking Bad follows protagonist Walter White, a chemistry teacher who lives in New Mexico with his wife and teenage son who has cerebral palsy. White is diagnosed with Stage III cancer and given a prognosis of two years left to live. With a new sense of fearlessness based on his medical prognosis, and a desire to secure his family\'s financial security, White chooses to enter a dangerous world of drugs and crime and ascends to power in this world. The series explores how a fatal diagnosis such as White\'s releases a typical man from the daily concerns and constraints of normal society and follows his transformation from mild family man to a kingpin of the drug trade.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/breaking_bad.jpeg',
                        width: 680,
                        height: 1000
                      }
                    },
                    releaseYear: 2008
                  },
                  {
                    title: 'True Blood',
                    description: 'True Blood is a horror/drama based on a series of novels called The Southern American Vampires Mysteries. It focuses on Sookie Stackhouse and her various encounters with vampires and other supernatural beings. The show is centred in the small town of Bon Temps in Louisiana. The show focuses heavily on the co-existence of humans with vampires. The show also touches on several other controversial issues involving equal rights, violence, discrimination and religion.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/true_blood.jpeg',
                        width: 1396,
                        height: 1600
                      }
                    },
                    releaseYear: 2008
                  },
                  {
                    title: 'Sons of Anarchy',
                    description: 'Sons of Anarchy is an American television drama series created by Kurt Sutter, about the lives of a close-knit outlaw motorcycle club operating in Charming, a fictional town in California\'s Central Valley. The show centers on protagonist Jackson "Jax" Teller (Charlie Hunnam), initially the vice president of the club, who begins questioning the club and himself.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/sons_of_anarchy.jpeg',
                        width: 680,
                        height: 1000
                      }
                    },
                    releaseYear: 2008
                  },
                  {
                    title: 'Fringe',
                    description: 'When an international flight lands at Boston\'s Logan Airport and the passengers and crew have all died grisly deaths, FBI Special Agent Olivia Dunham is called in to investigate. After her partner is nearly killed during the investigation, a desperate Olivia searches frantically for someone to help, leading her to Dr. Walter Bishop, our generation\'s Einstein. There\'s only one catch: he\'s been institutionalized for the last twenty years, and the only way to question him requires pulling his estranged son Peter in to help. When Olivia\'s investigation leads her to a manipulative corporate executive, she and her team will discover that what happened on Flight 627 is only a small piece of a larger, more shocking truth and will explore the blurring line between the possible and the impossible.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/fringe.jpeg',
                        width: 680,
                        height: 1000
                      }
                    },
                    releaseYear: 2008
                  },
                  {
                    title: 'The Big Bang Theory',
                    description: 'The Big Bang Theory is a comedy about brilliant physicists, Leonard and Sheldon, who are the kind of "beautiful minds" that understand how the universe works. But none of that genius helps them interact with people, especially women. All this begins to change when a free-spirited beauty named Penny moves in next door. Sheldon, Leonard\'s roommate, is quite content spending his nights playing Klingon Boggle with their socially dysfunctional friends, fellow Cal Tech scientists Wolowitz and Koothrappali. However, Leonard sees in Penny a whole new universe of possibilities... including love.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/the_big_bang_theory.jpeg',
                        width: 680,
                        height: 1000
                      }
                    },
                    releaseYear: 2007
                  },
                  {
                    title: 'Bones',
                    description: 'F.B.I. Agent Seeley Booth is teamed up with forensic anthropologist Dr. Temperance "Bones" Brennan to solve some of the most baffling and bizarre crimes ever. Booth depends on clues from the living, witnesses and suspects, while Brennan gathers evidence from the dead, relying on her uncanny ability to read clues left behind in the bones of the victims.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/bones.jpeg',
                        width: 680,
                        height: 1000
                      }
                    },
                    releaseYear: 2005
                  },
                  {
                    title: 'Battlestar Galactica',
                    description: 'The world ended with no warning, and all that was left… was hope. A truce between the humans of the Twelve Colonies and the Cylons—intelligent robots designed by humankind—lasts for 40 tense and silent years. Battlestar Galactica picks up just as the Cylons commit mass genocide against humanity. Only the Battlestar Galactica (an old warship about to be decommissioned and turned into a museum) and those souls fortunate enough to be aboard other starships were able to survive the attack. In the aftermath, the Galactica\'s commanding officer, William Adama, finds himself responsible for safeguarding the last remnants of the human race—fewer than 50,000 desperate survivors. Meanwhile, the annihilation of the Colonial government results in the succession of the Secretary of Education, Laura Roslin, to the presidency. Driven by prophetic visions and political necessity, the Galactica travels through uncharted space in hopes of finding the mythical, lost 13th colony—Earth.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/battlestar_galactica.jpeg',
                        width: 680,
                        height: 1000
                      }
                    },
                    releaseYear: 2005
                  },
                  {
                    title: 'House',
                    description: 'Sink your teeth into meaty drama and intrigue with House, FOX\'s take on mystery, where the villain is a medical malady and the hero is an irreverent, controversial doctor who trusts no one, least of all his patients.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/house.jpeg',
                        width: 680,
                        height: 1000
                      }
                    },
                    releaseYear: 2004
                  },
                  {
                    title: 'Lost',
                    description: 'Out of the blackness, the first thing Jack senses is pain. Then burning sun. A Bamboo forest. Smoke. Screams. With a rush comes the horrible awareness that the plane he was on tore apart in mid-air and crashed on a Pacific island. From there it\'s a blur, as his doctor\'s instinct kicks in: people need his help. Stripped of everything, the 48 survivors scavenge what they can from the plane for their survival. Some panic. Some pin their hopes on rescue. A few find inner strength they never knew they had -- like Kate, who, with no medical training, suddenly finds herself suturing the doctor\'s wounds. Hurley - a man with a warm sense of humor despite the desperate situation - does his best to keep his cool as he helps those around him to survive. Charlie is a faded rock star who harbors a painful secret. Sayid is a Middle Eastern man who must wrestle with the racial profiling directed at him by some of his fellow survivors. Jin and Sun are a Korean couple whose traditions, values and language are foreign, and thus causes much to get lost in the translation. Sawyer has an air of danger surrounding him, and his intense sense of mistrust for everyone around him could prove to be fatal to his fellow castaways. Michael has just gained custody of his nine-year-old son, Walt, after the death of his ex-wife - they are a father and son who don\'t even know each other. Locke is a mysterious man who keeps to himself, and who harbors a deeper connection to the island than any of the others. Self-centered Shannon - who actually gives herself a pedicure amid the chaos - and her estranged controlling brother, Boone , constantly bicker and must learn to get along if they are to survive. And young Claire is eight months pregnant and ill-prepared for the hardships of motherhood - especially on a deserted island.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/lost.jpeg',
                        width: 680,
                        height: 1000
                      }
                    },
                    releaseYear: 2004
                  },
                  {
                    title: 'NCIS',
                    description: 'NCIS (Naval Criminal Investigative Service) is more than just an action drama. With liberal doses of humor, it\'s a show that focuses on the sometimes complex and always amusing dynamics of a team forced to work together in high-stress situations. Leroy Jethro Gibbs, a former Marine gunnery sergeant, whose skills as an investigator are unmatched, leads this troupe of colorful personalities. Rounding out the team are Anthony DiNozzo, an ex-homicide detective whose instincts in the field are unparalleled and whose quick wit and humorous take on life make him a team favorite; the youthful and energetic forensic specialist Abby Sciuto, a talented scientist whose sharp mind matches her Goth style and eclectic tastes; Caitlin Todd, an ex-Secret Service Agent; and Timothy McGee, an MIT graduate whose brilliance with computers far overshadows his insecurities in the field; Assisting the team is medical examiner Dr. Donald "Ducky" Mallard, who knows it all because he\'s seen it all, and he\'s not afraid to let you know. From murder and espionage to terrorism and stolen submarines, these special agents travel the globe to investigate all crimes with Navy or Marine Corps ties.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/ncis.jpeg',
                        width: 395,
                        height: 593
                      }
                    },
                    releaseYear: 2003
                  },
                  {
                    title: 'CSI: Crime Scene Investigation',
                    description: 'CSI: Crime Scene Investigation is a drama about a team of forensic investigators trained to solve criminal cases by scouring the crime scene, collecting irrefutable evidence and finding the missing pieces that solve the mystery.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/csi.jpeg',
                        width: 680,
                        height: 1000
                      }
                    },
                    releaseYear: 2000
                  },
                  {
                    title: 'Family Guy',
                    description: 'Family Guy follows Peter Griffin the endearingly ignorant dad, and his hilariously offbeat family of middle-class New Englanders in Quahog, RI. Lois is Peter\'s wife, a stay-at-home mom with no patience for her family\'s antics. Then there are their kids: 18-year-old Meg is an outcast at school and the Griffin family punching bag; 13-year-old Chris is a socially awkward teen who doesn\'t have a clue about the opposite sex; and one-year-old Stewie is a diabolically clever baby whose burgeoning sexuality is very much a work in progress. Rounding out the Griffin household is Brian the family dog and a ladies\' man who is one step away from AA.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/family_guy.jpeg',
                        width: 680,
                        height: 1000
                      }
                    },
                    releaseYear: 1999
                  },
                  {
                    title: 'South Park',
                    description: 'South Park is an adult comedy animation show centred around 4 children in the small town of south park. Its humour is often dark involving satirical elements and mocking current real-life events.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/south_park.jpeg',
                        width: 680,
                        height: 1000
                      }
                    },
                    releaseYear: 1997
                  },
                  {
                    title: 'Twin Peaks',
                    description: 'Set in the fictional town of Twin Peaks in northeast Washington state, this is the story of FBI Special Agent Dale Cooper and his investigation of the murder of a popular local teenage schoolgirl, Laura Palmer.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/twin_peaks.jpeg',
                        width: 2400,
                        height: 3263
                      }
                    },
                    releaseYear: 1990
                  },
                  {
                    title: 'The Simpsons',
                    description: 'The Simpsons is the longest running scripted show in US television history. It captures the adventures of Homer, Marge, Maggie, Bart and Lisa who are living in a fictional town called Springfield.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/the_simpsons.jpeg',
                        width: 680,
                        height: 1000
                      }
                    },
                    releaseYear: 1989
                  }
                ],
                filteredCatalog: [
                  {
                    title: 'The Flash',
                    description: 'After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only "meta-human" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won\'t be long before the world learns what Barry Allen has become...The Flash!',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/the_flash.jpeg',
                        width: 960,
                        height: 1200
                      }
                    },
                    releaseYear: 2014
                  },
                  {
                    title: 'Fargo',
                    description: 'Fargo is an American crime drama with some dark comical elements inspired by the film Fargo written by the Coen brothers. It was met with considerable acclaim as insurance salesman Lester Nygaard faces off against the psychopath Lorne Malvo.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/fargo.jpeg',
                        width: 680,
                        height: 1000
                      }
                    },
                    releaseYear: 2014
                  },
                  {
                    title: 'Arrow',
                    description: 'After a violent shipwreck, billionaire playboy Oliver Queen was missing and presumed dead for five years before being discovered alive on a remote island in the Pacific. He returned home to Starling City, welcomed by his devoted mother Moira, beloved sister Thea and former flame Laurel Lance. With the aid of his trusted chauffeur/bodyguard John Diggle, the computer-hacking skills of Felicity Smoak and the occasional, reluctant assistance of former police detective, now beat cop, Quentin Lance, Oliver has been waging a one-man war on crime.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/arrow.jpeg',
                        width: 1080,
                        height: 1350
                      }
                    },
                    releaseYear: 2012
                  },
                  {
                    title: 'Homeland',
                    description: 'The winner of 6 Emmy Awards including Outstanding Drama Series, Homeland is an edge-of-your-seat sensation. Marine Sergeant Nicholas Brody is both a decorated hero and a serious threat. CIA officer Carrie Mathison is tops in her field despite being bipolar. The delicate dance these two complex characters perform, built on lies, suspicion, and desire, is at the heart of this gripping, emotional thriller in which nothing short of the fate of our nation is at stake.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/homeland.jpeg',
                        width: 2500,
                        height: 3750
                      }
                    },
                    releaseYear: 2011
                  },
                  {
                    title: 'American Horror Story',
                    description: 'American Horror Story is an horror television anthology series. Each season is conceived as a self-contained miniseries, following a disparate set of characters and settings, and a storyline with its own beginning, middle, and end. While some actors appear for more than one year, they play completely different roles in each season.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/american_horror_story.jpeg',
                        width: 1080,
                        height: 1350
                      }
                    },
                    releaseYear: 2011
                  },
                  {
                    title: 'Game of Thrones',
                    description: 'Based on the bestselling book series A Song of Ice and Fire by George R.R. Martin, this sprawling new HBO drama is set in a world where summers span decades and winters can last a lifetime. From the scheming south and the savage eastern lands, to the frozen north and ancient Wall that protects the realm from the mysterious darkness beyond, the powerful families of the Seven Kingdoms are locked in a battle for the Iron Throne. This is a story of duplicity and treachery, nobility and honor, conquest and triumph. In the Game of Thrones, you either win or you die.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/game_of_thrones.jpeg',
                        width: 680,
                        height: 1000
                      }
                    },
                    releaseYear: 2011
                  },
                  {
                    title: 'The Walking Dead',
                    description: 'The Walking Dead tells the story of the months and years that follow after a zombie apocalypse. It follows a group of survivors, led by former police officer Rick Grimes, who travel in search of a safe and secure home. As the world overrun by the dead takes its toll on the survivors, their interpersonal conflicts present a greater danger to their continuing survival than the walkers that roam the country. Over time, the characters are changed by the constant exposure to death and some grow willing to do anything to survive. Based on the comic book series of the same name by Robert Kirkman, Tony Moore, and Charlie Adlard.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/the_walking_dead.jpeg',
                        width: 1944,
                        height: 2815
                      }
                    },
                    releaseYear: 2010
                  },
                  {
                    title: 'Nikita',
                    description: 'When she was a deeply troubled teenager, Nikita was rescued from death row by a secret U.S. agency known only as Division, who trained her as a spy and assassin. Nikita was eventually betrayed by the only people she thought she could trust. Now, after three years in hiding, Nikita is seeking retribution and making it clear to her former boss, Percy and her former friends Michael and Birkhoff that she will stop at nothing to expose and destroy their covert operation.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/nikita.jpeg',
                        width: 680,
                        height: 1000
                      }
                    },
                    releaseYear: 2010
                  },
                  {
                    title: 'The Vampire Diaries',
                    description: 'The Vampire Diaries is a supernatural drama/romance based around Elena Gilbert who falls in love with a 163 year old vampire. Based on a novel series by L.J. Smith.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/the_vampire_diaries.jpeg',
                        width: 680,
                        height: 1000
                      }
                    },
                    releaseYear: 2009
                  },
                  {
                    title: 'Castle',
                    description: 'Castle follows Rick Castle who is one of the world\'s most successful crime authors. But when his rock star lifestyle isn\'t enough, this bad boy goes looking for new trouble and finds it working with smart, beautiful Detective Kate Beckett. Inspired by her professional record and intrigued by her buttoned-up personality, Castle\'s found the model for his bold new character whether she likes it or not. Now with the mayor\'s permission, Castle is helping solve crime with his own twist.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/castle.jpeg',
                        width: 680,
                        height: 1000
                      }
                    },
                    releaseYear: 2009
                  },
                  {
                    title: 'Modern Family',
                    description: 'Modern Family revolves around three different types of families (nuclear, step- and same-sex) living in the Los Angeles area, who are interrelated through Jay Pritchett and his children, Claire Dunphy (née Pritchett) and Mitchell Pritchett. Patriarch Jay is remarried to a much younger woman, Gloria Delgado Pritchett (née Ramirez), a passionate Colombian with whom he has an infant son, Fulgencio (Joe) Pritchett, and a son from Gloria\'s previous marriage, Manny Delgado. Jay\'s daughter Claire was a homemaker, but has returned to the business world. She is now the chief executive of her father\'s previous business, Pritchett\'s Closets and Blinds. She is married to Phil Dunphy, a realtor and self-professed "cool dad". They have three children: Haley Dunphy, a stereotypical ditzy teenage girl; Alex Dunphy, a nerdy, smart middle child; and Luke Dunphy, the off-beat only son. Jay\'s lawyer son Mitchell and his husband Cameron Tucker have one daughter, Lily Tucker-Pritchett. As the name suggests, this family represents a modern-day family, and episodes are comically based on situations which many families encounter in real life.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/modern_family.jpeg',
                        width: 1280,
                        height: 1825
                      }
                    },
                    releaseYear: 2009
                  },
                  {
                    title: 'Breaking Bad',
                    description: 'Breaking Bad follows protagonist Walter White, a chemistry teacher who lives in New Mexico with his wife and teenage son who has cerebral palsy. White is diagnosed with Stage III cancer and given a prognosis of two years left to live. With a new sense of fearlessness based on his medical prognosis, and a desire to secure his family\'s financial security, White chooses to enter a dangerous world of drugs and crime and ascends to power in this world. The series explores how a fatal diagnosis such as White\'s releases a typical man from the daily concerns and constraints of normal society and follows his transformation from mild family man to a kingpin of the drug trade.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/breaking_bad.jpeg',
                        width: 680,
                        height: 1000
                      }
                    },
                    releaseYear: 2008
                  },
                  {
                    title: 'Sons of Anarchy',
                    description: 'Sons of Anarchy is an American television drama series created by Kurt Sutter, about the lives of a close-knit outlaw motorcycle club operating in Charming, a fictional town in California\'s Central Valley. The show centers on protagonist Jackson "Jax" Teller (Charlie Hunnam), initially the vice president of the club, who begins questioning the club and himself.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/sons_of_anarchy.jpeg',
                        width: 680,
                        height: 1000
                      }
                    },
                    releaseYear: 2008
                  },
                  {
                    title: 'The Big Bang Theory',
                    description: 'The Big Bang Theory is a comedy about brilliant physicists, Leonard and Sheldon, who are the kind of "beautiful minds" that understand how the universe works. But none of that genius helps them interact with people, especially women. All this begins to change when a free-spirited beauty named Penny moves in next door. Sheldon, Leonard\'s roommate, is quite content spending his nights playing Klingon Boggle with their socially dysfunctional friends, fellow Cal Tech scientists Wolowitz and Koothrappali. However, Leonard sees in Penny a whole new universe of possibilities... including love.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/the_big_bang_theory.jpeg',
                        width: 680,
                        height: 1000
                      }
                    },
                    releaseYear: 2007
                  },
                  {
                    title: 'Battlestar Galactica',
                    description: 'The world ended with no warning, and all that was left… was hope. A truce between the humans of the Twelve Colonies and the Cylons—intelligent robots designed by humankind—lasts for 40 tense and silent years. Battlestar Galactica picks up just as the Cylons commit mass genocide against humanity. Only the Battlestar Galactica (an old warship about to be decommissioned and turned into a museum) and those souls fortunate enough to be aboard other starships were able to survive the attack. In the aftermath, the Galactica\'s commanding officer, William Adama, finds himself responsible for safeguarding the last remnants of the human race—fewer than 50,000 desperate survivors. Meanwhile, the annihilation of the Colonial government results in the succession of the Secretary of Education, Laura Roslin, to the presidency. Driven by prophetic visions and political necessity, the Galactica travels through uncharted space in hopes of finding the mythical, lost 13th colony—Earth.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/battlestar_galactica.jpeg',
                        width: 680,
                        height: 1000
                      }
                    },
                    releaseYear: 2005
                  },
                  {
                    title: 'CSI: Crime Scene Investigation',
                    description: 'CSI: Crime Scene Investigation is a drama about a team of forensic investigators trained to solve criminal cases by scouring the crime scene, collecting irrefutable evidence and finding the missing pieces that solve the mystery.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/csi.jpeg',
                        width: 680,
                        height: 1000
                      }
                    },
                    releaseYear: 2000
                  },
                  {
                    title: 'Family Guy',
                    description: 'Family Guy follows Peter Griffin the endearingly ignorant dad, and his hilariously offbeat family of middle-class New Englanders in Quahog, RI. Lois is Peter\'s wife, a stay-at-home mom with no patience for her family\'s antics. Then there are their kids: 18-year-old Meg is an outcast at school and the Griffin family punching bag; 13-year-old Chris is a socially awkward teen who doesn\'t have a clue about the opposite sex; and one-year-old Stewie is a diabolically clever baby whose burgeoning sexuality is very much a work in progress. Rounding out the Griffin household is Brian the family dog and a ladies\' man who is one step away from AA.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/family_guy.jpeg',
                        width: 680,
                        height: 1000
                      }
                    },
                    releaseYear: 1999
                  },
                  {
                    title: 'South Park',
                    description: 'South Park is an adult comedy animation show centred around 4 children in the small town of south park. Its humour is often dark involving satirical elements and mocking current real-life events.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/south_park.jpeg',
                        width: 680,
                        height: 1000
                      }
                    },
                    releaseYear: 1997
                  },
                  {
                    title: 'Twin Peaks',
                    description: 'Set in the fictional town of Twin Peaks in northeast Washington state, this is the story of FBI Special Agent Dale Cooper and his investigation of the murder of a popular local teenage schoolgirl, Laura Palmer.',
                    programType: 'series',
                    images: {
                      posterArt: {
                        url: 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/twin_peaks.jpeg',
                        width: 2400,
                        height: 3263
                      }
                    },
                    releaseYear: 1990
                  }
                ]
              }
        });
    });

    test('renders Selector component with movies', () => {
        render(
            <Provider store={store}>
                <Selector programType="movies" />
            </Provider>
        );
        expect(screen.getByText('Popular Movies')).toBeInTheDocument();
        expect(screen.getByText('Avengers: Endgame')).toBeInTheDocument();
    });

    test('renders Selector component with series', () => {
        render(
            <Provider store={store}>
                <Selector programType="series" />
            </Provider>
        );
        expect(screen.getByText('Popular Series')).toBeInTheDocument();
        expect(screen.getByText('The Flash')).toBeInTheDocument();
    });

    test('clicking on a card selects it', () => {
        render(
            <Provider store={store}>
                <Selector programType="movies" />
            </Provider>
        );
        const cardTitle = screen.getByText('Avengers: Endgame');
        fireEvent.click(cardTitle);
        expect(cardTitle.parentElement).toHaveClass('active');
    });

    test('clicking on a page button changes the page', () => {
        render(
            <Provider store={store}>
                <Selector programType="movies" />
            </Provider>
        );
        const pageButton = screen.getByText('2');
        const firstPageMovie = screen.getByText('Avengers: Endgame');
        fireEvent.click(pageButton);
        expect(firstPageMovie).not.toBeInTheDocument();
        expect(screen.getByText('Popular Movies')).toBeInTheDocument();
    });

    test('clicking on the next page button goes to the next page', () => {
        render(
            <Provider store={store}>
                <Selector programType="movies" />
            </Provider>
        );
        const nextPageButton = screen.getByAltText('rigth arrow icon');
        const firstPageMovie = screen.getByText('Avengers: Endgame');
        fireEvent.click(nextPageButton);
        expect(firstPageMovie).not.toBeInTheDocument();
    })
})
