import React, {useState} from 'react'
import { DriveFolderUploadOutlined } from '@mui/icons-material'
import Container from '../../components/Container/Container'
import { NewContainer, NewTop, NewBotton } from './style'

const New = ({ inputs, title }) => {

	const [file, setFile] = useState('')

	return (
		<NewContainer>
			<Container>
				<NewTop>
					<h1>{title}</h1>
				</NewTop>
				<NewBotton>
					<div>
						<img
							src={
								file
									? URL.createObjectURL(file)
									: 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
							}
							alt=""
						/>
					</div>
					<div>
						<form>
							<div className="formInput">
								<label htmlFor="file">
									Image:
									<DriveFolderUploadOutlined />
								</label>
								<input
									type="file"
									id="file"
									style={{ display: 'none' }}
									onChange={(e) => setFile(e.target.files[0])}
								/>
							</div>
							{inputs.map((item) => (
								<div className="formInput" key={item.id}>
									<label htmlFor={item.id}>
										{item.label}
									</label>
									<input
										type={item.type}
										placeholder={item.placeholder}
										id={item.id}
									/>
								</div>
							))}
							<button>Send</button>
						</form>
					</div>
				</NewBotton>
			</Container>
		</NewContainer>
	)
}

export default New
