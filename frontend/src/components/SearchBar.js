import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreIcon from '@material-ui/icons/MoreVert'
import { createMuiTheme } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/blue'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'
import PostAddIcon from '@material-ui/icons/PostAdd'

const theme = createMuiTheme({
	palette: {
		primary: green,
	},
})

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	// search: {
	// 	position: 'relative',
	// 	borderRadius: theme.shape.borderRadius,
	// 	backgroundColor: fade(theme.palette.common.white, 0.15),
	// 	'&:hover': {
	// 		backgroundColor: fade(theme.palette.common.white, 0.25),
	// 	},
	// 	marginRight: theme.spacing(2),
	// 	marginLeft: 0,
	// 	width: '100%',
	// 	[theme.breakpoints.up('sm')]: {
	// 		marginLeft: theme.spacing(3),
	// 		width: 'auto',
	// 	},
	// },
	// searchIcon: {
	// 	padding: theme.spacing(0, 2),
	// 	height: '100%',
	// 	position: 'absolute',
	// 	pointerEvents: 'none',
	// 	display: 'flex',
	// 	alignItems: 'center',
	// 	justifyContent: 'center',
	// },
	inputRoot: {
		color: 'white',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
}))

export default function PrimarySearchAppBar() {
	const classes = useStyles()
	const [anchorEl, setAnchorEl] = React.useState(null)
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

	const isMenuOpen = Boolean(anchorEl)
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null)
	}

	const handleMenuClose = () => {
		setAnchorEl(null)
		handleMobileMenuClose()
	}

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget)
	}

	const menuId = 'primary-search-account-menu'
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<Link style={{ color: '#1F2433', textDecoration: 'none' }} to='./profile'>
				<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			</Link>
			<Link style={{ color: '#1F2433', textDecoration: 'none' }} to='./auth'>
				<MenuItem
					style={{ color: '#1F2433', textDecoration: 'none' }}
					onClick={handleMenuClose}
				>
					Sign in
				</MenuItem>
			</Link>
			<MenuItem onClick={handleMenuClose}>Sign Out</MenuItem>
		</Menu>
	)

	const mobileMenuId = 'primary-search-account-menu-mobile'
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<Link style={{ color: '#1F2433', textDecoration: 'none' }} to='/messages'>
				<MenuItem>
					<IconButton aria-label='show 4 new mails' color='inherit'>
						<Badge badgeContent={4} color='secondary'>
							<MailIcon />
						</Badge>
					</IconButton>
					<p>Messages</p>
				</MenuItem>
			</Link>

			<Link
				style={{ color: '#1F2433', textDecoration: 'none' }}
				to='/notifications'
			>
				<MenuItem>
					<IconButton aria-label='show 11 new notifications' color='inherit'>
						<Badge badgeContent={11} color='secondary'>
							<NotificationsIcon />
						</Badge>
					</IconButton>
					<p>Notifications</p>
				</MenuItem>
			</Link>
			<Link style={{ color: '#1F2433', textDecoration: 'none' }} to='/profile'>
				<MenuItem>
					<IconButton
						aria-label='account of current user'
						aria-controls='primary-search-account-menu'
						aria-haspopup='true'
						color='inherit'
					>
						<AccountCircle />
					</IconButton>
					<p>Profile</p>
				</MenuItem>
			</Link>
		</Menu>
	)

	return (
		<div className={classes.grow}>
			<AppBar
				position='fixed'
				style={{ backgroundColor: 'white', color: 'black' }}
			>
				<Toolbar>
					<Typography
						style={{ color: '#7F8390' }}
						className={classes.title}
						variant='h6'
						noWrap
					></Typography>
					<Link to='/'>
						<img className='logo' src={logo} />
					</Link>
					{/* <div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon style={{ color: '#7F8390' }} />
						</div>
						<InputBase
							style={{ border: '1px solid #7F8390' }}
							placeholder='Search???'
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div> */}
					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						<Link to='./newpost'>
							<PostAddIcon
								style={{
									color: '#1F2433',
									marginTop: '11px',
									marginRight: '10px',
								}}
							/>
						</Link>
						{/* <Link to='/messages'>
							<IconButton
								style={{ color: '#1F2433' }}
								aria-label='show 4 new mails'
								color='inherit'
							>
								<Badge badgeContent={0} color='secondary'>
									<MailIcon />
								</Badge>
							</IconButton>
						</Link> */}
						{/* <Link to='/notifications'>
							<IconButton
								style={{ color: '#1F2433' }}
								aria-label='show 17 new notifications'
								color='inherit'
							>
								<Badge badgeContent={0} color='secondary'>
									<NotificationsIcon />
								</Badge>
							</IconButton>
						</Link> */}
						<IconButton
							edge='end'
							aria-label='account of current user'
							aria-controls={menuId}
							aria-haspopup='true'
							onClick={handleProfileMenuOpen}
							color='inherit'
						>
							<AccountCircle />
						</IconButton>
					</div>
					<div className={classes.sectionMobile}>
						<IconButton
							aria-label='show more'
							aria-controls={mobileMenuId}
							aria-haspopup='true'
							onClick={handleMobileMenuOpen}
							color='inherit'
						>
							{' '}
							<MoreIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
		</div>
	)
}
