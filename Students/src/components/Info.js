const InfoComponent = ({ data }) => {
  return (
	data.map((e) => (
			<div>
				<div>{e.id}</div>
				<div>{e.name}</div>
				<div>{e.age}</div>
				<div>{e.addr}</div>
			</div>
        ))
	);
};

export default InfoComponent;
