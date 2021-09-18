import React from 'react'

export default function Icon({ file, size }: any) {
	let SVGsize = [file.height, file.width]
	if (size) {
		SVGsize = [size]
	}

	return <img src={file.src} height={SVGsize[0]} width={SVGsize[1]} />
}
