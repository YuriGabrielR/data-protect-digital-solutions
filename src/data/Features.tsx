import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiSupport, BiDollar } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { IconType } from 'react-icons';


const iconStyle = (Icon:IconType) => <Icon size="3rem" color="#1D976C" />;

export const FeatureData = [
	{
		name: 'Best Security',
		description: 'We offer the best data security to our clients, which makes us stand out',
		icon: iconStyle(BsFillShieldLockFill), 
		imgClass: 'one',
	},
	{
		name: 'Ease of Use',
		description: 'Our system is easy to use and integrate',
		icon: iconStyle(IoIosOptions),
		imgClass: 'two',
	},
	{
		name: 'Maintenance',
		description: 'Our code is written in highest standards, which makes it highly sustainable',
		icon: iconStyle(FiSettings),
		imgClass: 'three',
	},
	{
		name: 'Support',
		description: 'Our team is available at all times in case you need us',
		icon: iconStyle(BiSupport),
		imgClass: 'four',
	},
	{
		name: 'Price',
		description: 'We offer the highest value/cost ratio',
		icon: iconStyle(BiDollar),
		imgClass: 'five',
	},
	{
		name: 'Scalable',
		description:
			'Our servers are located all over the world, therefore improving scalability and speed ',
		icon: iconStyle(AiOutlineCloudUpload),
		imgClass: 'six',
	},
];