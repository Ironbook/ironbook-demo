import React, { useEffect, useState } from 'react';
import actions from '../api';

function AllPosts(props) {
	const [posts, setPosts] = useState([]);
	const [comment, setComment] = useState('');

	useEffect(() => {
		actions
			.getAllPosts()
			.then((allPosts) => {
				console.log(allPosts);
				setPosts(allPosts.data);
			})
			.catch(console.error);
	}, []);
	const handleComment = (id, e) => {
		e.preventDefault();

		actions.addComment({ comment, postId: id }).then((res) => {
			setPosts(res.data);
			console.log(res.data);
		});
	};
	const showPosts = () => {
		return posts?.map((eachpost) => {
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
						<div className='commentBox'>
							<div id={eachpost._id}>
								<form onSubmit={(e) => handleComment(eachpost._id, e)}>
									<input
										onChange={(e) => setComment(e.target.value)}
										type='text'
										name='Comment'
										placeholder='Add comment'
									></input>
									<button>Submit</button>
								</form>
							</div>
						</div>
						{eachpost.comments.map((comment) => {
							return <li>{comment}</li>;
						})}
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
