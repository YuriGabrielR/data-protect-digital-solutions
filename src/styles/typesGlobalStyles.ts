import { Transition, VariantLabels, TargetAndTransition, AnimationControls} from "framer-motion";

export interface StylesProps {

    $inverse: string | React.ReactNode ; 
    $margin: string;
    mb: string;
    mt: string;
    height: number | string;
    width: number | string; 
    $padding: string;
    minWidth: string | number;
    $maxWidth: string | number;
    minHeight: string | number;
    maxHeight: string | number;
    $gap: string | number;
    $wrap: string | number;
    $position: number | string; 
    position: number | string;
    $justify: string;
    $align: string;
    size: number | string;
   $weight: number | string; 
    spacing: number | string;
    $smPadding: number | string;
    $small: number | string| React.ReactNode;
    error: string| React.ReactNode;
    start: string;
    onSubmit: (e: SubmitEvent) => void;
    $initial?: boolean | VariantLabels | TargetAndTransition;
	$transition:Transition;
	$animate?: boolean | VariantLabels | TargetAndTransition | AnimationControls;
	$whileHover?: VariantLabels | TargetAndTransition;
    
}