import { Container, Stack, Box, IconButton, Typography, Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/icons/logo.svg';
import locatsiya from '../assets/icons/lokatsiya.svg';
import { Searchinput, CustomIconButton, CustomButton } from './stile.js';
import lupa from '../assets/icons/lupa.svg';
import userIcon from '../assets/icons/user-header.svg';
import yurakIcon from '../assets/icons/yurak.svg';
import korzinka from '../assets/icons/korzinka.svg';



export const Header = () => {
    return (
        <>
            <header>
                <Container>
                    <Stack className='b' direction="row" sx={{ marginBottom: '51px', marginTop: "10px" }}>
                        <Link >
                            <img src={logo} alt="" />
                        </Link>
                        <Box display={"inline-flex"} alignItems={"center"} sx={{ marginLeft: "60px", marginRight: "60px" }}>
                            <IconButton>
                                <img src={locatsiya} alt="locatsiya" />
                            </IconButton>
                            <Typography>
                                Алматы
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: 1 }} justifyContent={'center'}>
                            <Searchinput placeholder="Поиск по товарам" />
                            <CustomIconButton >
                                <img src={lupa} alt="logo" />
                            </CustomIconButton>
                        </Box>

                        <Stack className='b' direction={"row"} spacing={5} sx={{ marginLeft: 'auto' }}>
                            <CustomButton>
                                <Badge badgeContent={4} color='error'>
                                    <img src={userIcon} alt="userIcon" />
                                </Badge>
                            </CustomButton>
                            <CustomButton>
                                <Badge badgeContent={4} color='error'>
                                    <img src={yurakIcon} alt="userIcon" />
                                </Badge>
                            </CustomButton>
                            <CustomButton>
                                <Badge badgeContent={4} color='error'>
                                    <img src={korzinka} alt="userIcon" />
                                </Badge>
                            </CustomButton>
                        </Stack>
                    </Stack>

                    <Stack direction="row" spacing={2} justifyContent={"space-between"}>
                        <Link to={"/"}>
                            <Typography>Ковры</Typography>
                        </Link>
                        <Link to={"/"}>
                            <Typography>Коврики</Typography>
                        </Link>
                        <Link to={"/"}>
                            <Typography>Для ванной</Typography>
                        </Link>
                        <Link to={"/"}>
                            <Typography>Дорожки</Typography>
                        </Link>
                        <Link to={"/"}>
                            <Typography>Особенные ковры</Typography>
                        </Link>
                        <Link to={"/"}>
                            <Typography>Центр поддержки</Typography>
                        </Link>
                        <Link to={"/"}>
                            <Typography>Контакты</Typography>
                        </Link>
                    </Stack>
                </Container>
            </header>
        </>
    )
}