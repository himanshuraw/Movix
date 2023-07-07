/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import { useState } from 'react';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';

const TopRated = () => {
	const [endpoint, setEndPoint] = useState('movie');
	const [media, setMedia] = useState('movie');

	const { data, loading } = useFetch(`/${endpoint}/top_rated`);
	const onTabChange = (tab) => {
		setEndPoint(tab === 'Movies' ? 'movie' : 'tv');
		setMedia(tab === 'Movie' ? 'movie' : 'tv');
	};
	return (
		<div className='carouselSection'>
			<ContentWrapper>
				<span className='carouselTitle'>Top Rated</span>
				<SwitchTabs data={['Movies', 'TV Shows']} onTabChange={onTabChange} />
			</ContentWrapper>
			<Carousel data={data?.results} media={media} loading={loading} />
		</div>
	);
};

export default TopRated;
