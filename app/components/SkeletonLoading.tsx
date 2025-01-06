const SkeletonProductCard = () => {
	return (
		<div className="w-full">
			<div className="card flex flex-row gap-8">
				<div className="skeleton h-96 w-64"></div>
				<div className="skeleton h-96 w-64"></div>
				<div className="skeleton h-96 w-64"></div>
			</div>
		</div>
	);
};

export default SkeletonProductCard;
