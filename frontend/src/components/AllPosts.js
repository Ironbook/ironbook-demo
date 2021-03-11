import React, { useEffect, useState } from 'react';
import actions from '../api';

function AllPosts(props) {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		actions
			.getAllPosts()
			.then((allPosts) => {
				console.log(allPosts);
				setPosts(allPosts.data);
			})
			.catch(console.error);
	}, []);

	const showPosts = () => {
		return posts.map((eachpost) => {
			return (
				<li className='postContainer'>
					<div className='authorBox'>
						<img className='profileImg' src={eachpost.profileImg} />

						<h1 className='authorName'>{eachpost.author}</h1>
						{/* <div className='authorLocation'>{eachpost.location}</div> */}
					</div>
					<div className='postBox'>{eachpost.description}</div>
					<div className='imgBox'>
						<img src={eachpost.photo} />
						<div className='commentBox'> add comment...</div>
					</div>
				</li>
			);
		});
	};

	return (
		<>
			<h3>All Posts</h3>
			<ul>{showPosts()}</ul>
		</>
	);
}

export default AllPosts;
