import LinkButton from '@/components/ui/LinkButton';
import SectionHeading from './ui/SectionHeading';

const About = () => {
    return (
        <div className="py-20">
            <SectionHeading>ABOUT INPUMA</SectionHeading>
            <p className="text-lg my-10 line-clamp-5 leading-relaxed">
                <b>International Institute of Public Policy and Management (INPUMA)</b> was established in August 1999 with the support of Tun Dr. Mahathir bin Mohamad, the Former Prime Minister of Malaysia during his tenure in office as the 4th Prime Minister. INPUMA was created as an academic-based training institute conceived by Universiti Malaya (UM) and the National Institute for Public Administration (INTAN) to complement the modernisation and capacity building of the Malaysian public service.

                Since its inception, INPUMA has earned recognition for its contributions to the intellectual discourse on public policy issues, extending beyond Malaysia&apos;s borders to the ASEAN region and other regions globally. The Institute has enriched the realm of public policy discourse by organising forums, conferences, public lectures, and its flagship programme, INPUMA Policy Lab, aimed at training aspiring national leaders, policymakers, and professionals. These efforts foster an environment for robust dialogue, knowledge exchange, and skill development in the field of public policy formulation and effective implementation.

                For more than two decades, INPUMA has diligently pursued its objectives, serving as a platform for the discussion of topical policy issues, a training center for public administration and executive managers, a source of new ideas on public policy, and a conduit for sharing Malaysia&apos;s experience with its global networks. Additionally, it stands as the center of excellence for the Master of Public Policy (MPP), representing the sole public educational institution in Malaysia offering such an academic programme.
            </p>
            <LinkButton href="/about">Read More</LinkButton>
        </div>
    );
};

export default About;