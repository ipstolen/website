---
title: "Next Generation Centaurus Cloud Platform – addressing unmet needs of contemporary cloud computing"
author: "Deepak Vij"
date: "2020-08-03"
---

Cloud computing concept has advanced in leaps and bounds over the past years. Instead of spending weeks or months waiting for on infrastructure resources, enterprises quickly gravitated towards the ability to instantiate resources on-demand in a self-service manner. Cloud computing is the perfect friend for the current enterprises. They are quickly realizing that they need to provide on-premise support to their developers using similar public cloud capabilities.

## 1. Background

In the last decade or so, various open source cloud platforms have come onto the scene as the well-hyped silver bullet that would address the cloud computing needs outside of public cloud vendors. These cloud platforms initially attracted enterprises that wanted to avoid vendor lock-in through open source and address security and compliance concerns around the public cloud by delivering an on-premises cloud environment.

After struggling through proofs-of-concept and early adopter pains, IT professionals are coming to the realization that the contemporary open source cloud computing landscape falls short of meeting needs of the enterprises. Over the years, it is fair to say that these platforms have failed to deliver against their earlier promises. At the same time, the demand from the enterprises is getting stronger than ever with the dilemma of identifying alternative paths to fill the gaps and deliver on the original promise of cloud computing.

In the subsequent sections we will cover the key gaps in the current open source cloud platforms and how the next generation holistic & fully featured Centaurus Cloud Platform addresses these gaps from the ground up. It specifically highlights the key unmet characteristics desired from a cloud platform and how Centaurus bridges these gaping holes.

## 2. Centaurus Cloud Platform – A Unified & Large-Scale Cloud Infrastructure Platform

### 2.1 Key Motivations

Vision of Centaurus Platform is to enable the next generation high-performance & highly scalable large scale open source cloud platform. Centaurus’s overarching goal is to have better resource utilizations & lesser management overheads compared to contemporary cloud platform solutions – lower cost in terms of less number of machines used for management plane is huge for very large scale cloud environment.

Centaurus manages unified infrastructure resources across all workload types (VMs & Containers etc.) through a single pane of glass – a single converged cloud stack.

It provides fully-featured multi-tenant (hard) environment across all workload types – tenant level multi-tenancy is built in from group up.

Centaurus offers enterprises the hyper-sale like capabilities which dramatically changes the economics of enterprise IT.

Overarching goal is to eliminate the burden of orchestrating physical/virtual compute, network, and storage infrastructure, and enable application operators and developers to focus entirely on application-centric primitives for self-service operations environment.

Currently, there is no open source solution that addresses very large scale cloud environment and at the same time manages infrastructure resource across all workload types in a unified manner – contemporary technology solutions are unable to keep up pace with the ever growing cloud scale needs.

### 2.2 Key Characteristics – fulfilling unkept promises of cloud computing in the open source

<div style="text-align:center"><img style="width:500px;" src="https://i.imgur.com/26TOJgA.png" alt="Key Characteristics" /></div>

#### 2.2.1 A single pane of glass – unified provisioning & management of VMs & Containers

Modern cloud native applications are inherently designed for scale-out architectures that are more suited for containerized environment. But a typical cloud environment isn’t just about containers as containers aren’t appropriate for all workloads and use cases. Most enterprises still run large number of legacy apps that can’t be deployed in a container-based framework.

Today, most cloud infrastructures need to encompass bare-metal machines for managing infrastructure, virtual machines for legacy applications, and containers for newer applications. Current cloud platforms don’t have the capability to provide support for managing and orchestrating all these workloads in an operational efficient manner.

Typically, disparate cloud environments are needed for each of these workload types (OpenStack, Kubernetes …). In the contemporary open source cloud environment, there is no single homogenous cloud platform that provisions & manages all of these workloads within a single pane of glass.

To address this particular challenge, Centaurus overarching cloud platform seamlessly provisions & manages bare-metal compute nodes; VMs; Containers & other types of workloads on demand in a unified manner. Modern cloud-native applications & legacy applications are provisioned & managed in a seamless unified manner.

#### 2.2.2 Extremely high throughputs and low latencies

The rise of large cloud providers like Amazon Web Services, Microsoft Azure and the Google Cloud Platform has led to a new kind of infrastructure, and smaller enterprises are learning how to emulate these hyperscale data centers. These massive cloud providers now run data centers at a scale never seen before, so they have had to take a different approach. The result has been the creation of hyperscale data centers.

As part of their ongoing digitization journey, enterprises have similar aspirations as far as emulating the cloud infrastructure designs of the hyperscale cloud service providers in their own private on-premise datacenter architecture. In the recent surveys, majority of global enterprise CIOs have initiated such corporate web-scale initiatives.

However, none of the contemporary open source platforms measure up to the desired scale of cloud providers hyperscalers grade infrastructure. For example, OpenStack & Kubernetes do not scale beyond 5,000 nodes in a cluster. As a result, enterprises are forced to deploy multiple independent clusters. This results in overall management complexities and cost inefficiencies.

Centaurus platform enables management of larger and larger scale of compute & network resources across data centers (AZs), and faster and faster provisioning of these resources similar to hyperscalers grade throughputs & low latencies.

#### 2.2.3 Multi-tenant cloud platform from ground up

It is highly desirable for enterprises to share a single cloud cluster needs among multiple users and/or applications. In an enterprise, this may look like multiple teams deploying applications to the same cloud cluster. For a service provider, this may be multiple different end customers with deployments managed by the same cloud cluster environment.

Benefits of sharing clusters include manageability (reduced cluster sprawl) and improved resource utilization (by sharing nodes and sharing a control plane including monitoring and logging stacks etc.). Contemporary cloud platforms such as Kubernetes etc. do not provide support for such multi-tenancy capability.

Centaurus cloud platform provides support for built-in hard multi-tenancy from the ground up. It provides strong tenant isolation. All tenants share a single large physical cluster but at the same time they all feel they are using the cluster exclusively. Tenants are completely unaware of the existence of other tenants in the shared multi-tenant cloud environment. With hard multi-tenancy support built from the ground up, large enterprises realize the following benefits:

- Substantial cost reductions: With multiple customers sharing resources, a cloud vendor can offer their services to many customers at a much lower cost than if each customer required their own dedicated infrastructure

* Onboarding a new division/department/customer/partner becomes extremely easy
* By sharing machines among multiple tenants, use of available resources is maximized
* Ease of management of cloud environment

#### 2.2.4 Hyperscale cloud networking

Digitization is upending many core tenets of competition among industries by lowering the cost of entering markets and providing high-speed passing lanes to scale up enterprises. Hyperscale businesses are pushing the envelope of digitization as these businesses have users, customers, devices, or interactions numbered in the hundreds of millions, billions, or more. Billions of interactions and data points, in turn, mean that events with only a one-in-a-million probability are happening many times a day.

Based on the numerous recent surveys, such enterprises aspire to emulate the network infrastructure designs of the hyperscale cloud service providers in their own network architecture.

Contemporary cloud platforms in the open source are not capable of providing support for extremely high scalable networking in the virtualized cloud environment. This is primarily because contemporary cloud networking virtualization solutions are still cobbled together on top of age-old static networking designs. Such solutions are incapable of provisioning & management scale of the modern dynamic cloud workloads.

To address the hyperscale cloud networking challenges, Centaurus cloud networking seamlessly provisions & manages virtual networks & communications between workloads in a highly scalable & high performant manner. Centaurus cloud networking is a novel approach in contrast to traditional age-old contemporary cloud networking solutions.

#### 2.2.5 Pluggable network functions

Hardware-based middleboxes are expensive, inextensible, and difficult to operate and scale in a cloud environment. On the other hand, deploying existing software-based middleboxes in virtual machines or containers to replace hardware gateways results in underutilized resource and cost inefficiencies as well as a lack in resource sharing across multiple tenants and difference network functions. Moreover, the models such as ClickOS and OVS are too constraining to service availability and scaling.

Centaurus platform provides support for a declarative programming approach that transforms middlebox high level description into specification tables. The specification table, in turn, determines the sequence of modular actions required to implement the middlebox function (network services).

This enables an extensible cloud-network of pluggable network functions. Modules in the system can be added or removed without any service disruption or the need for a new deployment. The system can realize several types of "distributed middleboxes" without the need for code-changes and separate deployments.

#### 2.2.6 Support for new types of workloads such as AI, HPC and 5G applications

Edge computing refers to locating applications – and the general-purpose compute, storage, and associated switching and control functions needed to run them - relatively close to end users and/or IoT endpoints. This greatly benefits applications performance and associated QoE, and it can also improve efficiency and thus the economics depending on the nature of the specific application.

Edge compute combined with the optimized latency performance of 5G Core processing can reduce round-trip-time by up to two orders of magnitude in situations where there is tight control over all parts of the communication chain. This has enabled new classes of cloud applications, in such areas as industrial robotic/drone automation, V2X, and AR/VR infotainment, and associated innovative business models.

Contemporary cloud computing platforms are not geared up to addressing the needs of next generation such modern applications landscape.

Centaurus platform is designed & optimized for managing applications running at resource constraint Edge nodes that are closer to customers & customer data – a true distributed cloud environment for shaping the Future of Cloud Native Infrastructure in the Age of AI, 5G and Edge. It enables intelligent and location-aware resource/workload scheduling across DC & edge to improve customer experience with low latency & high throughput – global & smart scheduling algorithm.
