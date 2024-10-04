const GenderCheckbox = ({onGenderchange,gender}) => {
    	return (
    		<div className='flex'>
    			<div className='form-control'>
    				<label className={`label gap-2 cursor-pointer`}>
    					<span className='label-text'>Male</span>
    					<input type='checkbox' className='checkbox checkbox-success'  checked={gender==='male'} onChange={()=>{onGenderchange('male')}} />
    				</label>
    			</div>
    			<div className='form-control'>
    				<label className={`label gap-2 cursor-pointer`}>
    					<span className='label-text'>Female</span>
    					<input type='checkbox' className='checkbox checkbox-success ' checked={gender==='female'} onChange={()=>{onGenderchange('female')}}/>
    				</label>
    			</div>
    		</div>
    	);
    };
    export default GenderCheckbox;