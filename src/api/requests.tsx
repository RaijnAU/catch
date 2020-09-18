const API =
	"http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json";

export const getProducts = async () => {
	const res = await fetch(API);
	return res.json();
};
