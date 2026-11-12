"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[7324],{28491(e,t,r){r.d(t,{D:()=>A,b:()=>G});var o=r(32680),a=r(49255),n=r(68317),i=r(76597),s=r(24321),l=r(2585),c=r(43519),u=r(96336),d=r(39014),h=r(53466),m=r(92700),p=r(72824),f=r(35640),v=r(40261),g=r(77695),x=r(71651),b=r(32971),y=r(98619),w=r(62602),M=r(22393),S=r(59469),T=r(32482),C=r(51406),_=r(43259),I=r(58614),P=r(27950),z=r(77949),D=r(33079),R=r(71988),F=r(20304),O=r(31821),j=r(63761),E=r(27832),B=r(43616),H=r(39122),N=r(14113),W=r(49788);function G(e){const t=new N.N5,{attributes:r,vertex:G,fragment:A,varyings:L}=t,{output:V,normalType:k,offsetBackfaces:U,spherical:$,snowCover:q,pbrMode:Z,textureAlphaPremultiplied:Y,instancedDoublePrecision:J,hasVertexColors:K,hasVertexTangents:X,hasColorTexture:Q,hasNormalTexture:ee,hasNormalTextureTransform:te,hasColorTextureTransform:re}=e;if((0,z.NB)(G,e),r.add("position","vec3"),G.inputs.add("position",()=>"position"),L.add("vpos","vec3",{invariant:!0}),t.include(_.A,e),t.include(l.B,e),t.include(f.Ge,e),t.include(C.q2,e),!(0,a._o)(V))return t.include(v.E,e),t;t.include(C.Sx,e),t.include(C.MU,e),t.include(C.O1,e),t.include(C.QM,e),(0,z.yu)(G,e),t.include(u.Y,e),t.include(i.d);const oe=0===k||1===k;return oe&&U&&t.include(o.M),t.include(g.J,e),t.include(p.Mh,e),t.include(s.v,e),L.add("vPositionLocal","vec3"),t.include(h.U,e),t.include(d.K,e),t.include(m.c,e),G.uniforms.add(new R.E("externalColor",e=>e.externalColor,{supportsNaN:!0})),L.add("vcolorExt","vec4"),G.include(c.WD),G.include(c.oF),t.include(J?T.QH:T.LA,e),G.main.add(O.H`
    forwardVertexColor();

    MaskedColor maskedColor =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColor.color;
    forwardColorMixMode(maskedColor.mask);

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${(0,O.If)(oe,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${(0,O.If)(X,"vTangent = dpTransformVertexTangent(tangent);")}
    gl_Position = transformPosition(proj, view, vpos);
    ${(0,O.If)(oe&&U,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}

    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (opacityMixMode != ${O.H.int(B.Um.ignore)} && vcolorExt.a < ${O.H.float(W.Q)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
    forwardLinearDepthToReadShadowMap();
  `),A.include(b.kA,e),A.include(x.n,e),t.include(I.S,e),A.include(n.HQ,e),t.include(H.D,e),(0,z.yu)(A,e),A.uniforms.add(G.uniforms.get("localOrigin"),new D.t("ambient",e=>e.ambient),new D.t("diffuse",e=>e.diffuse),new F.m("opacity",e=>e.opacity),new F.m("layerOpacity",e=>e.layerOpacity)),Q&&A.uniforms.add(new j.N("tex",e=>e.texture)),t.include(S._,e),A.include(M.c,e),A.include(P.N),t.include(w.r,e),A.include(E.b,e),(0,b.a8)(A),(0,b.eU)(A),(0,y.O4)(A),A.main.add(O.H`
    discardBySlice(vpos);
    ${Q?O.H`
            vec4 texColor = texture(tex, ${re?"colorUV":"vuv0"});
            ${(0,O.If)(Y,"texColor.rgb /= texColor.a;")}
            discardOrAdjustAlpha(texColor);`:O.H`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${2===k?O.H`vec3 normal = screenDerivativeNormal(vPositionLocal);`:O.H`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

    float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
    float shadow = readShadow(additionalAmbientScale, vpos);

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${(0,O.If)(K,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
    float opacity_ = layerOpacity * mixExternalOpacity(${(0,O.If)(K,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, opacityMixMode);

    ${ee?`mat3 tangentSpace = computeTangentSpace(${X?"normal":"normal, vpos, vuv0"});\n           vec3 shadingNormal = computeTextureNormal(tangentSpace, ${te?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
    vec3 normalGround = ${$?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

    ${(0,O.If)(q,O.H`
          float snow = getSnow(normal, normalGround);
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${1===Z||2===Z?O.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${(0,O.If)(q,"mrr = applySnowToMRR(mrr, snow);")}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, additionalAmbientIrradiance);`:O.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${(0,O.If)(q,", snow")});
  `),t}const A=Object.freeze(Object.defineProperty({__proto__:null,build:G},Symbol.toStringTag,{value:"Module"}))},587(e,t,r){r.d(t,{G:()=>C,a:()=>I,b:()=>T,c:()=>_,d:()=>w,e:()=>x,f:()=>S,g:()=>y,h:()=>M,i:()=>b});var o=r(82048),a=r(92573),n=r(65261),i=r(98619),s=r(70893),l=r(34845),c=r(20304),u=r(31821),d=r(58029),h=r(12791),m=r(63761),p=r(94046),f=r(63907),v=r(65786),g=r(14113);const x=.15,b=25,y=.15,w=.5,M=1,S=1,T=16;class C extends v.Y{constructor(){super(...arguments),this.projScale=1,this.scaleGlobalIllumination=1,this.accumulatedFrames=0,this.temporalSampleFrame=0,this.rayMarchMinReach=y,this.rayMarchMaxReach=w,this.rayMarchWorldReach=b,this.rayMarchMinReachEmissionWeight=M,this.rayMarchMaxReachEmissionWeight=S,this.rayMarchMaxSteps=T,this.colorBleedWeight=x}}function _(e){const t=new g.N5,r=t.fragment;return t.include(o.c),t.include(l.Ir),(0,i.Gc)(r),r.include(a.V),r.include(n.C),r.include(p.R),t.include(s.O,e),r.uniforms.add(new m.N("normalMap",e=>e.normalTexture),new m.N("depthMap",e=>e.depthTexture),new h.x("lastFrameColorTexture",e=>e.reprojection.lastFrameColor?.getTexture()),new h.x("lastFrameDepthTexture",e=>e.reprojection.lastFrameDepth?.attachment),new h.x("lastFrameGlobalIlluminationTexture",e=>e.globalIllumination?.getTexture()),new h.x("lastFrameGlobalIlluminationWeightTexture",e=>e.globalIllumination?.getTexture(f.yI)),new d.F("reprojectionViewMatrix",e=>e.reprojection.viewMatrix),new d.F("view",e=>e.camera.viewMatrix),new c.m("accumulatedFrames",e=>e.accumulatedFrames),new c.m("temporalSampleFrame",e=>e.temporalSampleFrame),new c.m("scaleGlobalIllumination",e=>e.scaleGlobalIllumination)),r.uniforms.add(new c.m("rayMarchMinReach",e=>e.rayMarchMinReach),new c.m("rayMarchMaxReach",e=>e.rayMarchMaxReach),new c.m("rayMarchWorldReach",e=>e.rayMarchWorldReach),new c.m("rayMarchMinReachEmissionWeight",e=>e.rayMarchMinReachEmissionWeight),new c.m("rayMarchMaxReachEmissionWeight",e=>e.rayMarchMaxReachEmissionWeight),new c.m("rayMarchMaxSteps",e=>e.rayMarchMaxSteps),new c.m("colorBleedWeight",e=>e.colorBleedWeight)),e.hasEmission&&r.uniforms.add(new h.x("lastFrameEmissionTexture",e=>e.reprojection.lastFrameEmission?.attachment)),r.code.add(u.H`
    float computeIdleColorBlendWeight(float accumulatedFrames) {
      float idleColorBlendProgress = clamp(
        accumulatedFrames / ${u.H.float(40)},
        0.0,
        1.0
      );
      return mix(
        ${u.H.float(.012)},
        ${u.H.float(.008)},
        idleColorBlendProgress
      );
    }

    float computeIdleOcclusionBlendWeight(float accumulatedFrames) {
      float idleOcclusionBlendProgress = clamp(
        accumulatedFrames / ${u.H.float(60)},
        0.0,
        1.0
      );
      return mix(
        ${u.H.float(.095)},
        ${u.H.float(.008)},
        pow(idleOcclusionBlendProgress, ${u.H.float(2)})
      );
    }

    bool isEdgeDepth(float centerDepth, vec2 sampleUv) {
      vec2 texelSize = 1.0 / vec2(textureSize(depthMap, 0));
      float depthLeft = linearizeDepth(depthFromTexture(depthMap, sampleUv + vec2(-texelSize.x, 0.0)));
      float depthRight = linearizeDepth(depthFromTexture(depthMap, sampleUv + vec2(texelSize.x, 0.0)));
      float depthUp = linearizeDepth(depthFromTexture(depthMap, sampleUv + vec2(0.0, texelSize.y)));
      float depthDown = linearizeDepth(depthFromTexture(depthMap, sampleUv + vec2(0.0, -texelSize.y)));

      float maxDifference = max(max(abs(centerDepth - depthLeft), abs(centerDepth - depthRight)), max(abs(centerDepth - depthUp), abs(centerDepth - depthDown)));

      return abs(maxDifference / centerDepth) > 0.01;
    }

    vec3 sampleCosineHemisphere(vec2 u) {
      float phi = 6.28318530718 * u.x;
      float radius = sqrt(u.y);
      float x = radius * cos(phi);
      float y = radius * sin(phi);
      float z = sqrt(max(0.0, 1.0 - u.y));

      return vec3(x, y, z);
    }

    mat3 basisFromNormal(vec3 n) {
      vec3 up = abs(n.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
      vec3 tangent = normalize(cross(up, n));
      vec3 bitangent = cross(n, tangent);

      return mat3(tangent, bitangent, n);
    }

    float blueNoiseDitherValue(vec2 pixel, float frame, vec2 axis, float phase) {
      float scroll = 5.588238 * mod(frame, 512.0);
      vec2 p = pixel + vec2(scroll);
      vec2 rotated = vec2(
        axis.x * p.x + axis.y * p.y,
        -axis.y * p.x + axis.x * p.y
      );

      return fract(52.9829189 * fract(0.06711056 * rotated.x + 0.00583715 * rotated.y + phase));
    }

    vec4 blueNoiseDither(vec2 pixel, float frame) {
      vec4 value = vec4(
        blueNoiseDitherValue(pixel, frame, vec2(0.9659258, 0.25881904), 0.0),
        blueNoiseDitherValue(pixel, frame, vec2(0.70710677, 0.70710677), 0.17),
        blueNoiseDitherValue(pixel, frame, vec2(0.25881904, 0.9659258), 0.37),
        blueNoiseDitherValue(pixel, frame, vec2(1.0, 0.0), 0.61)
      );

      return value * 2.0 - 1.0;
    }
  `),t.outputs.add("fragGlobalIllumination","vec4",0),t.outputs.add("fragWeight","float",1),r.main.add(u.H`
    float depth = depthFromTexture(depthMap, uv);

    // Early out if depth is out of range, such as in the sky
    if (depth >= 1.0 || depth <= 0.0) {
      fragGlobalIllumination = vec4(0.0, 0.0, 0.0, 1.0);
      fragWeight = 0.0;
      return;
    }

    // Get the normal of current fragment
    ivec2 iuv = ivec2(uv * vec2(textureSize(normalMap, 0)));
    vec4 normal4 = texelFetch(normalMap, iuv, 0);
    if (normal4.a != 1.0) {
      fragGlobalIllumination = vec4(0.0, 0.0, 0.0, 1.0);
      fragWeight = 0.0;
      return;
    }
    vec3 normal = normalize(normal4.xyz * 2.0 - 1.0);

    // Reconstruct view space position of current fragment
    float currentPixelDepth = linearizeDepth(depth);
    vec3 currentPixelPos = reconstructPosition(uv * vec2(textureSize(normalMap, 0)), currentPixelDepth);
    vec4 viewPos = vec4(currentPixelPos, 1.0);

    // Reproject current view position to last frame
    vec4 reprojectedViewPos = reprojectionViewMatrix * viewPos;
    vec4 reprojectedCoordinate = applyProjectionMat(proj, reprojectedViewPos.xyz);

    // Read last frame reprojected depth and GI history
    float lastFrameDepthViewPos = -linearDepthFromTextureLastFrame(lastFrameDepthTexture, reprojectedCoordinate.xy);
    vec4 lastFrameGlobalIllumination = texture(lastFrameGlobalIlluminationTexture, reprojectedCoordinate.xy);
    float historyOcclusionBlendWeight = texture(lastFrameGlobalIlluminationWeightTexture, reprojectedCoordinate.xy).r;

    int steps;
    float occlusionBlendWeight = 1.0;
    float colorBlendWeight = 1.0;
    float idleColorBlendWeight = computeIdleColorBlendWeight(accumulatedFrames);
    float idleOcclusionBlendWeight = computeIdleOcclusionBlendWeight(accumulatedFrames);
    float reprojectionDepthMismatch = abs((lastFrameDepthViewPos + reprojectedViewPos.z) / max(lastFrameDepthViewPos, reprojectedViewPos.z));
    bool hasReprojectionMismatch = reprojectionDepthMismatch > ${u.H.float(.01)};
    bool isScaledGlobalIllumination = scaleGlobalIllumination < 1.0;
    bool isLowQualityEdgePixel = isScaledGlobalIllumination && isEdgeDepth(currentPixelDepth, uv);
    bool resetColorHistory = false;

    // Heuristic to determine blending weights and number of steps for occlusion and color
    if (hasReprojectionMismatch) {
      if (isLowQualityEdgePixel) {
        steps = 1;
        occlusionBlendWeight = ${u.H.float(.008)};
        resetColorHistory = true;
      } else {
        steps = 6;
        occlusionBlendWeight = 1.0;
        resetColorHistory = true;
      }
    } else {
      steps = 1;
      if (historyOcclusionBlendWeight > ${u.H.float(.5)}) {
        occlusionBlendWeight = ${u.H.float(.1)};
        colorBlendWeight = ${u.H.float(.008)};
      } else if (historyOcclusionBlendWeight > ${u.H.float(.02)}) {
        occlusionBlendWeight = historyOcclusionBlendWeight - 0.05;
        colorBlendWeight = ${u.H.float(.008)};
      } else {
        occlusionBlendWeight = isScaledGlobalIllumination ? ${u.H.float(.008)} : idleOcclusionBlendWeight;
        colorBlendWeight = isScaledGlobalIllumination ? ${u.H.float(.002)} : idleColorBlendWeight;
      }
    }

    vec4 randomDirectionSample;
    mat3 normalBasis = basisFromNormal(normal);
    int temporalSampleStride = min(64 / steps, 6);
    float temporalFrameOffset = mod(temporalSampleFrame, float(64 / steps));

    // For each ray determine if it hits geometry and accumulate occlusion or color
    float stepSize = 1.0 / float(steps);
    for (int i = 0; i < steps; ++i) {
      float sampleIndex = float(i * temporalSampleStride + int(temporalFrameOffset));
      randomDirectionSample = blueNoiseDither(floor(gl_FragCoord.xy), sampleIndex);
      vec2 hemisphereSample = randomDirectionSample.rg * 0.5 + 0.5;
      float offsetSample = randomDirectionSample.a * 0.5 + 0.5;
      vec3 rayDirection = normalBasis * sampleCosineHemisphere(hemisphereSample);
      float rayMarchScreenReach = rayMarchScreenReachFromWorldReach(viewPos.xyz, rayDirection, rayMarchWorldReach);
      rayMarchScreenReach = clamp(rayMarchScreenReach, rayMarchMinReach, rayMarchMaxReach);
      vec3 hit = screenSpaceIntersectionWithLimits(
        rayDirection,
        viewPos.xyz,
        normalize(viewPos.xyz),
        normal,
        offsetSample,
        rayMarchScreenReach,
        rayMarchMaxSteps
      );

      if (hit.z > 0.0) {
        ${(0,u.If)(e.hasColor,u.H`
          // Emission and color bleed - Reproject the current receiver and sampled hit to estimate bounced color
          vec3 receiverColor = texture(lastFrameColorTexture, reprojectedCoordinate.xy).rgb;

          vec2 hitReprojectedCoordinate = reprojectionCoordinate(hit);
          vec3 sourceColor = texture(lastFrameColorTexture, hitReprojectedCoordinate).rgb;
          vec3 sourceColorLinear = linearizeGamma(sourceColor);
          vec3 sourceEmission = ${(0,u.If)(e.hasEmission,"texture(lastFrameEmissionTexture, hitReprojectedCoordinate).xyz","vec3(0.0)")};

          float emissionWeight = mix(
            rayMarchMinReachEmissionWeight,
            rayMarchMaxReachEmissionWeight,
            (rayMarchScreenReach - rayMarchMinReach) / max(rayMarchMaxReach - rayMarchMinReach, 0.00001)
          );
          fragGlobalIllumination.rgb += ((sourceColorLinear * colorBleedWeight) + sourceEmission * emissionWeight) * stepSize;
          `)}
      } else {
        // Occlusion - heuristic modulating sky intensity based on angle to main light
        vec4 viewMainLightDirection = view * vec4(mainLightDirection, 0.0);
        float skyModulation = pow(max(dot(rayDirection, viewMainLightDirection.xyz), 0.0), 3.0) * 5.5;
        float skyFacingWeight = clamp(3.5 * dot(viewMainLightDirection.xyz, normal), 0.0, 1.0);
        skyModulation = mix(1.0, skyModulation * 0.2 + 0.8, skyFacingWeight);
        fragGlobalIllumination.a += skyModulation * stepSize;
      }
    }

    // Rendering trick add noise to reduce accumulation artifacts
    float accumulationDither = occlusionBlendWeight < 1.0
      ? randomDirectionSample.b * ${u.H.float(.0039)}
      : 0.0;

    ${(0,u.If)(e.hasColor,u.H`
      // Accumulate color
      vec3 lastFrameColor = lastFrameGlobalIllumination.rgb;
      float colorDitherScale = isScaledGlobalIllumination ? ${u.H.float(.25)} : 1.0;
      fragGlobalIllumination.rgb = resetColorHistory
        ? vec3(0.0)
        : mix(lastFrameColor + accumulationDither * colorDitherScale, fragGlobalIllumination.rgb, colorBlendWeight);
      `,u.H`
      fragGlobalIllumination.rgb = vec3(0.0);
      `)}
    fragGlobalIllumination.rgb = quantizeGlobalIlluminationColor(fragGlobalIllumination.rgb);

    // Accumulate occlusion
    fragGlobalIllumination.a = mix(lastFrameGlobalIllumination.a + accumulationDither, fragGlobalIllumination.a, occlusionBlendWeight);

    fragWeight = occlusionBlendWeight;
  `),t}const I=Object.freeze(Object.defineProperty({__proto__:null,GlobalIlluminationPassParameters:C,build:_,defaultColorBleedWeight:x,defaultRayMarchMaxReach:w,defaultRayMarchMaxReachEmissionWeight:S,defaultRayMarchMaxSteps:T,defaultRayMarchMinReach:y,defaultRayMarchMinReachEmissionWeight:M,defaultRayMarchWorldReach:b},Symbol.toStringTag,{value:"Module"}))},52516(e,t,r){r.d(t,{G:()=>b,a:()=>M,b:()=>y});var o=r(48163),a=r(82048),n=r(52540),i=r(72885),s=r(34845),l=r(32976),c=r(68259),u=r(20304),d=r(31821),h=r(15976),m=r(63761),p=r(94046),f=r(58243),v=r(66211),g=r(65786),x=r(14113);class b extends g.Y{constructor(){super(...arguments),this.blurSize=(0,o.vt)()}}function y(){const e=new x.N5,t=e.fragment;e.include(a.c),e.include(s.Ir),e.include(i.Q);return t.include(n.E),t.include(f.t,w),t.include(p.R),t.uniforms.add(new l.o("hasEmission",e=>e.hasEmission),new m.N("depthMap",e=>e.depthTexture),new m.N("normalMap",e=>e.normalTexture),new h.o("globalIlluminationTexture",e=>e.texture),new h.o("globalIlluminationWeightTexture",e=>e.weightTexture),new c.t("blurSize",e=>e.blurSize),new u.m("scaleGlobalIllumination",e=>e.scaleGlobalIllumination),new u.m("projScale",(e,t)=>{const r=t.camera.distance;return r>5e4?Math.max(0,e.projScale-(r-5e4)):e.projScale})),t.code.add(d.H`
    void accumulateBlurSample(
      vec2 sampleUv,
      float sampleOffset,
      float centerDepth,
      vec3 centerNormal,
      float depthSharpness,
      bool skipOcclusionBlur,
      inout float emissionWeightSum,
      inout vec3 emissionSum,
      inout float occlusionWeightSum,
      inout float occlusionSum,
      float centerOcclusionBlendWeight
    ) {
      vec4 sampleGlobalIllumination = texture(globalIlluminationTexture, sampleUv);
      vec3 sampleNormal = texture(normalMap, sampleUv).rgb;
      float sampleDepth = linearDepthFromTexture(depthMap, sampleUv);

      float depthDelta = sampleDepth - centerDepth;
      bool isScaledGlobalIllumination = scaleGlobalIllumination < 1.0;
      float normalSimilarityWeight = globalIlluminationNormalSimilarityWeight(sampleNormal, centerNormal);
      float depthNormalCorrection = globalIlluminationDepthNormalCorrection(sampleNormal);
      vec3 emission = sampleGlobalIllumination.rgb;
      float emissionSpatialWeightMultiplier = isScaledGlobalIllumination ? ${d.H.float(400)} : 1.0;

      float emissionWeight = exp(
        -sampleOffset * sampleOffset * ${d.H.float(1/24.5)} * ${d.H.float(.1)} * emissionSpatialWeightMultiplier
        - depthDelta * depthDelta * depthSharpness * depthNormalCorrection
      );
      emissionWeight *= normalSimilarityWeight;
      emissionWeightSum += emissionWeight;
      emissionSum += emissionWeight * emission;

      if (skipOcclusionBlur) {
        return;
      }

      float occlusionSpatialKernelScale = centerOcclusionBlendWeight > ${d.H.float(.03)}
        ? ${d.H.float(.08)}
        : ${d.H.float(1.5)};
      float occlusionWeight = exp(-sampleOffset * sampleOffset * occlusionSpatialKernelScale - depthDelta * depthDelta * depthSharpness);
      occlusionWeight *= normalSimilarityWeight;
      occlusionWeightSum += occlusionWeight;
      occlusionSum += occlusionWeight * sampleGlobalIllumination.a;
    }
  `),t.main.add(d.H`
    vec3 emissionSum = vec3(0.0);
    float emissionWeightSum = 0.0;

    vec4 centerGlobalIllumination = texture(globalIlluminationTexture, uv);
    float centerOcclusionBlendWeight = texture(globalIlluminationWeightTexture, uv).r;
    bool isScaledGlobalIllumination = scaleGlobalIllumination < 1.0;
    bool shouldReuseCenterOcclusion = isScaledGlobalIllumination && centerOcclusionBlendWeight <= ${d.H.float(.03)};
    bool shouldSkipLowQualityBlur = !hasEmission && shouldReuseCenterOcclusion;
    if (shouldSkipLowQualityBlur) {
      fragColor = vec4(
        quantizeGlobalIlluminationColor(centerGlobalIllumination.rgb),
        centerGlobalIllumination.a
      );
      return;
    }

    float centerDepth = linearDepthFromTexture(depthMap, uv);
    vec3 centerNormal = texture(normalMap, uv).rgb;
    float occlusionSum = 0.0;
    float occlusionWeightSum = 0.0;

    float depthSharpness = globalIlluminationDepthSharpness(projScale, centerDepth);
    for (int sampleOffset = -${d.H.int(4)}; sampleOffset <= ${d.H.int(4)}; ++sampleOffset) {
      float sampleOffsetFloat = float(sampleOffset);
      vec2 sampleUv = uv + sampleOffsetFloat * blurSize;
      accumulateBlurSample(
        sampleUv,
        sampleOffsetFloat,
        centerDepth,
        centerNormal,
        depthSharpness,
        shouldReuseCenterOcclusion,
        emissionWeightSum,
        emissionSum,
        occlusionWeightSum,
        occlusionSum,
        centerOcclusionBlendWeight
      );
    }

    float occlusion = shouldReuseCenterOcclusion ? centerGlobalIllumination.a : occlusionSum / occlusionWeightSum;
    vec3 blurredEmission = (emissionSum / emissionWeightSum).rgb;

    // heuristic dithering of the colors to remove banding, color shifts and wrong color accumulation
    float dither = ditherNoise(vec4(blurredEmission, occlusion)) - 1./32768.0;
    blurredEmission += isScaledGlobalIllumination ? 0.85 * dither : dither;

    fragColor = vec4(quantizeGlobalIlluminationColor(blurredEmission), occlusion);
  `),e}const w=new v.Tt;w.useFloatBlend=!1;const M=Object.freeze(Object.defineProperty({__proto__:null,GlobalIlluminationBlurDrawParameters:b,build:y},Symbol.toStringTag,{value:"Module"}))},50704(e,t,r){r.d(t,{G:()=>p,a:()=>v,b:()=>f});var o=r(82048),a=r(52540),n=r(72885),i=r(34845),s=r(20304),l=r(31821),c=r(15976),u=r(63761),d=r(94046),h=r(65786),m=r(14113);class p extends h.Y{}function f(){const e=new m.N5,t=e.fragment;return e.include(o.c),e.include(i.Ir),e.include(n.Q),t.include(a.E),t.include(d.R),t.uniforms.add(new u.N("depthMap",e=>e.depthTexture),new u.N("normalMap",e=>e.normalTexture),new c.o("tex",e=>e.colorTexture),new c.o("globalIlluminationWeightTexture",e=>e.weightTexture),new s.m("projScale",(e,t)=>{const r=t.camera.distance;return r>5e4?Math.max(0,e.projScale-(r-5e4)):e.projScale})),t.code.add(l.H`
    float computeDepthWeight(float sampleDepth, float centerDepth, float depthSharpness) {
      float depthDelta = abs(sampleDepth - centerDepth);
      return exp(-0.08 - depthDelta * depthDelta * depthSharpness);
    }

    vec3 normalFromTexture(sampler2D normalTexture, vec2 uv) {
      ivec2 normalTextureSize = textureSize(normalTexture, 0);
      ivec2 normalTexel = clamp(ivec2(uv * vec2(normalTextureSize)), ivec2(0), normalTextureSize - ivec2(1));
      return texelFetch(normalTexture, normalTexel, 0).xyz;
    }

    void sampleJointBilateralUpscale(vec2 sampleUv, out vec4 upscaledColor, out float upscaledWeight) {
      float centerDepth = linearDepthFromTexture(depthMap, sampleUv);
      vec3 centerNormal = normalFromTexture(normalMap, sampleUv);
      float depthSharpness = ${l.H.float(100)} * globalIlluminationDepthSharpness(projScale, centerDepth, centerNormal);

      vec2 lowResTextureSize = vec2(textureSize(tex, 0));
      vec2 texelPosition = sampleUv * lowResTextureSize - 0.5;
      vec2 texelBase = floor(texelPosition);
      vec2 bilinearWeightsFraction = fract(texelPosition);

      vec2 uv00 = (texelBase + vec2(0.5, 0.5)) / lowResTextureSize;
      vec2 uv10 = (texelBase + vec2(1.5, 0.5)) / lowResTextureSize;
      vec2 uv01 = (texelBase + vec2(0.5, 1.5)) / lowResTextureSize;
      vec2 uv11 = (texelBase + vec2(1.5, 1.5)) / lowResTextureSize;

      vec4 color00 = texture(tex, uv00);
      vec4 color10 = texture(tex, uv10);
      vec4 color01 = texture(tex, uv01);
      vec4 color11 = texture(tex, uv11);
      float weight00 = texture(globalIlluminationWeightTexture, uv00).r;
      float weight10 = texture(globalIlluminationWeightTexture, uv10).r;
      float weight01 = texture(globalIlluminationWeightTexture, uv01).r;
      float weight11 = texture(globalIlluminationWeightTexture, uv11).r;

      float depth00 = linearDepthFromTexture(depthMap, uv00);
      float depth10 = linearDepthFromTexture(depthMap, uv10);
      float depth01 = linearDepthFromTexture(depthMap, uv01);
      float depth11 = linearDepthFromTexture(depthMap, uv11);

      vec3 normal00 = normalFromTexture(normalMap, uv00);
      vec3 normal10 = normalFromTexture(normalMap, uv10);
      vec3 normal01 = normalFromTexture(normalMap, uv01);
      vec3 normal11 = normalFromTexture(normalMap, uv11);

      float bilinearWeight00 = (1.0 - bilinearWeightsFraction.x) * (1.0 - bilinearWeightsFraction.y);
      float bilinearWeight10 = bilinearWeightsFraction.x * (1.0 - bilinearWeightsFraction.y);
      float bilinearWeight01 = (1.0 - bilinearWeightsFraction.x) * bilinearWeightsFraction.y;
      float bilinearWeight11 = bilinearWeightsFraction.x * bilinearWeightsFraction.y;

      float jointBilateralWeight00 = bilinearWeight00 * computeDepthWeight(depth00, centerDepth, depthSharpness) * globalIlluminationNormalSimilarityWeight(normal00, centerNormal);
      float jointBilateralWeight10 = bilinearWeight10 * computeDepthWeight(depth10, centerDepth, depthSharpness) * globalIlluminationNormalSimilarityWeight(normal10, centerNormal);
      float jointBilateralWeight01 = bilinearWeight01 * computeDepthWeight(depth01, centerDepth, depthSharpness) * globalIlluminationNormalSimilarityWeight(normal01, centerNormal);
      float jointBilateralWeight11 = bilinearWeight11 * computeDepthWeight(depth11, centerDepth, depthSharpness) * globalIlluminationNormalSimilarityWeight(normal11, centerNormal);
      float jointBilateralWeightSum = jointBilateralWeight00 + jointBilateralWeight10 + jointBilateralWeight01 + jointBilateralWeight11;

      if (jointBilateralWeightSum < 0.0001) {
        // Fall back to the nearest low-resolution texel when all bilateral weights collapse.
        vec2 nearestUv = (floor(texelPosition + 0.5) + vec2(0.5)) / lowResTextureSize;
        upscaledColor = texture(tex, nearestUv);
        upscaledWeight = texture(globalIlluminationWeightTexture, nearestUv).r;
        return;
      }

      upscaledColor = (
        color00 * jointBilateralWeight00 +
        color10 * jointBilateralWeight10 +
        color01 * jointBilateralWeight01 +
        color11 * jointBilateralWeight11
      ) / jointBilateralWeightSum;

      upscaledWeight = (
        weight00 * jointBilateralWeight00 +
        weight10 * jointBilateralWeight10 +
        weight01 * jointBilateralWeight01 +
        weight11 * jointBilateralWeight11
      ) / jointBilateralWeightSum;
    }
  `),e.outputs.add("fragColor","vec4",0),e.outputs.add("fragWeight","float",1),t.main.add(l.H`sampleJointBilateralUpscale(uv, fragColor, fragWeight);
fragColor.rgb = quantizeGlobalIlluminationColor(fragColor.rgb);`),e}const v=Object.freeze(Object.defineProperty({__proto__:null,GlobalIlluminationUpscaleDrawParameters:p,build:f},Symbol.toStringTag,{value:"Module"}))},57323(e,t,r){r.d(t,{R:()=>N,b:()=>H});var o=r(32680),a=r(49255),n=r(68317),i=r(76597),s=r(24321),l=r(2585),c=r(43519),u=r(96336),d=r(39014),h=r(53466),m=r(92700),p=r(35640),f=r(40261),v=r(71651),g=r(32971),x=r(98619),b=r(22393),y=r(59469),w=r(32482),M=r(51406),S=r(43259),T=r(58614),C=r(27950),_=r(77949),I=r(33079),P=r(71988),z=r(20304),D=r(31821),R=r(63761),F=r(27832),O=r(43616),j=r(26934),E=r(39122),B=r(14113);function H(e){const t=new B.N5,{attributes:r,vertex:H,fragment:N,varyings:W}=t,{output:G,offsetBackfaces:A,pbrMode:L,snowCover:V,spherical:k}=e,U=1===L||2===L;if((0,_.NB)(H,e),r.add("position","vec3"),H.inputs.add("position",()=>"position"),W.add("vpos","vec3",{invariant:!0}),t.include(S.A,e),t.include(l.B,e),t.include(p.Ge,e),t.include(M.q2,e),!(0,a._o)(G))return t.include(f.E,e),t;t.include(M.MU,e),(0,_.yu)(t.vertex,e),t.include(u.Y,e),t.include(i.d),A&&t.include(o.M),W.add("vNormalWorld","vec3"),W.add("localvpos","vec3",{invariant:!0}),t.include(h.U,e),t.include(d.K,e),t.include(s.v,e),t.include(m.c,e),H.include(c.WD),H.include(c.oF),H.uniforms.add(new P.E("externalColor",e=>e.externalColor,{supportsNaN:!0})),W.add("vcolorExt","vec4"),t.include(e.instancedDoublePrecision?w.QH:w.LA,e),H.include(j.Q),H.main.add(D.H`
    forwardVertexColor();

    MaskedColor maskedColorExt =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColorExt.color;
    forwardColorMixMode(maskedColorExt.mask);

    bool alphaCut = opacityMixMode != ${D.H.int(O.Um.ignore)} && vcolorExt.a < alphaCutoff;
    vpos = getVertexInLocalOriginSpace();

    localvpos = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
    vpos = addVerticalOffset(vpos, localOrigin);
    vec4 basePosition = transformPosition(proj, view, vpos);

    forwardTextureCoordinates();
    forwardColorUV();
    forwardEmissiveUV();
    forwardLinearDepthToReadShadowMap();
    gl_Position = alphaCut ? vec4(1e38, 1e38, 1e38, 1.0) :
    ${(0,D.If)(A,"offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);","basePosition;")}
  `);const{hasColorTexture:$,hasColorTextureTransform:q}=e;return N.include(g.kA,e),N.include(v.n,e),t.include(T.S,e),N.include(n.HQ,e),t.include(E.D,e),(0,_.yu)(N,e),(0,x.Gc)(N),(0,g.a8)(N),(0,g.eU)(N),N.uniforms.add(H.uniforms.get("localOrigin"),H.uniforms.get("view"),new I.t("ambient",e=>e.ambient),new I.t("diffuse",e=>e.diffuse),new z.m("opacity",e=>e.opacity),new z.m("layerOpacity",e=>e.layerOpacity)),$&&N.uniforms.add(new R.N("tex",e=>e.texture)),t.include(y._,e),N.include(b.c,e),N.include(C.N),N.include(F.b,e),(0,x.O4)(N),N.main.add(D.H`
      discardBySlice(vpos);
      vec4 texColor = ${$?`texture(tex, ${q?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${(0,D.If)($,`${(0,D.If)(e.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}\n        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = readShadow(additionalAmbientScale, vpos);
      vec3 matColor = max(ambient, diffuse);
      ${e.hasVertexColors?D.H`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, opacityMixMode);`:D.H`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, opacityMixMode);`}

      vec3 shadingNormal = normalize(vNormalWorld);
      vec3 groundNormal = ${k?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};

      ${(0,D.If)(V,"vec3 faceNormal = screenDerivativeNormal(vpos);\n         float snow = getRealisticTreeSnow(faceNormal, shadingNormal, groundNormal);\n         albedo = mix(albedo, vec3(1), snow);")}

      ${D.H`albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}

      ${U?D.H`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${(0,D.If)(V,"mrr = applySnowToMRR(mrr, snow);")}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, groundNormal, mrr, additionalAmbientIrradiance);`:D.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${(0,D.If)(V,", 1.0")});`),t}const N=Object.freeze(Object.defineProperty({__proto__:null,build:H},Symbol.toStringTag,{value:"Module"}))},15581(e,t,r){r.d(t,{S:()=>b,b:()=>v,g:()=>g});var o=r(37585),a=r(48163),n=r(82048),i=r(52540),s=r(65261),l=r(34845),c=r(77108),u=r(47286),d=r(33094),h=r(20304),m=r(31821),p=r(63761),f=r(14113);function v(){const e=new f.N5,t=e.fragment;return e.include(n.c),e.include(l.Ir),t.include(i.E),t.include(s.C),t.uniforms.add(new d.U("radius",e=>g(e.camera))).code.add(m.H`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),t.code.add(m.H`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.outputs.add("fragOcclusion","float"),t.uniforms.add(new p.N("normalMap",e=>e.normalTexture),new p.N("depthMap",e=>e.depthTexture),new h.m("projScale",e=>e.projScale),new p.N("rnm",e=>e.noiseTexture),new u.G("rnmScale",(e,t)=>(0,o.hZ)(x,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height)),new h.m("intensity",e=>e.intensity),new c.E("screenSize",e=>(0,o.hZ)(x,e.camera.fullWidth,e.camera.fullHeight))).main.add(m.H`
    float depth = depthFromTexture(depthMap, uv);

    // Early out if depth is out of range, such as in the sky
    if (depth >= 1.0 || depth <= 0.0) {
      fragOcclusion = 1.0;
      return;
    }

    // get the normal of current fragment
    ivec2 iuv = ivec2(uv * vec2(textureSize(normalMap, 0)));
    vec4 norm4 = texelFetch(normalMap, iuv, 0);
    if(norm4.a != 1.0) {
      fragOcclusion = 1.0;
      return;
    }
    vec3 norm = normalize(norm4.xyz * 2.0 - 1.0);

    float currentPixelDepth = linearizeDepth(depth);
    vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

    float sum = 0.0;
    vec3 tapPixelPos;

    vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

    // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
    // bug or deviation from CE somewhere else?
    float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

    for(int i = 0; i < ${m.H.int(16)}; ++i) {
      vec2 unitOffset = reflect(sphere[i], fres).xy;
      vec2 offset = vec2(-unitOffset * radius * ps);

      // don't use current or very nearby samples
      if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
        continue;
      }

      vec2 tc = vec2(gl_FragCoord.xy + offset);
      if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
      vec2 tcTap = tc / screenSize;
      float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

      tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

      sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
    }

    // output the result
    float A = max(1.0 - sum * intensity / float(${m.H.int(16)}), 0.0);

    // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
    A = (pow(A, 0.2) + 1.2 * pow(A, 4.0)) * INV_GAMMA;

    fragOcclusion = A;
  `),e}function g(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const x=(0,a.vt)(),b=Object.freeze(Object.defineProperty({__proto__:null,build:v,getRadius:g},Symbol.toStringTag,{value:"Module"}))},95774(e,t,r){r.d(t,{S:()=>h,b:()=>d});var o=r(82048),a=r(52540),n=r(68259),i=r(20304),s=r(31821),l=r(15976),c=r(63761),u=r(14113);function d(){const e=new u.N5,t=e.fragment;return e.include(o.c),t.include(a.E),t.uniforms.add(new c.N("depthMap",e=>e.depthTexture),new l.o("tex",e=>e.colorTexture),new n.t("blurSize",e=>e.blurSize),new i.m("projScale",(e,t)=>{const r=t.camera.distance;return r>5e4?Math.max(0,e.projScale-(r-5e4)):e.projScale})),t.code.add(s.H`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${s.H.float(.08)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.main.add(s.H`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${s.H.int(4)}; r <= ${s.H.int(4)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}const h=Object.freeze(Object.defineProperty({__proto__:null,build:d},Symbol.toStringTag,{value:"Module"}))},43609(e,t,r){r.d(t,{a:()=>n,f:()=>i,n:()=>a});var o=r(34275);function a(e,t){n(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function n(e,t,r=2,a=r){const n=t.length/2;let i=0,s=0;if(!(0,o.iu)(t)||(0,o.dk)(t)){for(let o=0;o<n;++o)e[i]=t[s],e[i+1]=t[s+1],i+=r,s+=a;return}const l=(0,o.a3)(t);if((0,o.JI)(t))for(let o=0;o<n;++o)e[i]=Math.max(t[s]/l,-1),e[i+1]=Math.max(t[s+1]/l,-1),i+=r,s+=a;else for(let o=0;o<n;++o)e[i]=t[s]/l,e[i+1]=t[s+1]/l,i+=r,s+=a}function i(e,t,r,o){const a=e.typedBuffer,n=e.typedBufferStride,i=o?.count??e.count;let s=(o?.dstIndex??0)*n;for(let e=0;e<i;++e)a[s]=t,a[s+1]=r,s+=n}Object.freeze(Object.defineProperty({__proto__:null,fill:i,normalizeIntegerBuffer:n,normalizeIntegerBufferView:a},Symbol.toStringTag,{value:"Module"}))},73354(e,t,r){r.d(t,{a:()=>i,b:()=>l,c:()=>n,d:()=>s,e:()=>m,f:()=>d,l:()=>u,n:()=>p,t:()=>h});var o=r(40876),a=(r(44208),r(72727));function n(e,t,r){i(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function i(e,t,r,o=3,n=o){const i=(0,a.k)(e.length,o,3),s=(0,a.k)(t.length,n,3),l=Math.min(i,s),c=r[0],u=r[1],d=r[2],h=r[4],m=r[5],p=r[6],f=r[8],v=r[9],g=r[10],x=r[12],b=r[13],y=r[14];let w=0,M=0;for(let r=0;r<l;r++){const r=t[w],a=t[w+1],i=t[w+2];e[M]=c*r+h*a+f*i+x,e[M+1]=u*r+m*a+v*i+b,e[M+2]=d*r+p*a+g*i+y,w+=n,M+=o}return e}function s(e,t,r){l(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function l(e,t,r,o=3,n=o){const i=(0,a.k)(e.length,o,3),s=(0,a.k)(t.length,n,3),l=Math.min(i,s),c=r[0],u=r[1],d=r[2],h=r[3],m=r[4],p=r[5],f=r[6],v=r[7],g=r[8];let x=0,b=0;for(let r=0;r<l;r++){const r=t[x],a=t[x+1],i=t[x+2];e[b]=c*r+h*a+f*i,e[b+1]=u*r+m*a+v*i,e[b+2]=d*r+p*a+g*i,x+=n,b+=o}}function c(e,t,r,o=3,a=o){const n=Math.min(e.length/o,t.length/a);let i=0,s=0;for(let l=0;l<n;l++)e[s]=r*t[i],e[s+1]=r*t[i+1],e[s+2]=r*t[i+2],i+=a,s+=o;return e}function u(e,t,r,o){d(e.typedBuffer,t.typedBuffer,r,o,e.typedBufferStride,t.typedBufferStride)}function d(e,t,r,a,n=3,i=n){const s=Math.min(e.length/n,t.length/i);let l=0,c=0;const u=1/o.Tf;for(let o=0;o<s;o++)e[c]=a*(r*t[l])**u,e[c+1]=a*(r*t[l+1])**u,e[c+2]=a*(r*t[l+2])**u,l+=i,c+=n}function h(e,t,r,o=3,n=o){const i=(0,a.k)(e.length,o,3),s=(0,a.k)(t.length,n,3),l=Math.min(i,s);let c=0,u=0;for(let a=0;a<l;a++)e[u]=t[c]+r[0],e[u+1]=t[c+1]+r[1],e[u+2]=t[c+2]+r[2],c+=n,u+=o;return e}function m(e,t){p(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function p(e,t,r=3,o=r){const a=Math.min(e.length/r,t.length/o);let n=0,i=0;for(let s=0;s<a;s++){const a=t[n],s=t[n+1],l=t[n+2],c=a*a+s*s+l*l;if(c>0){const t=1/Math.sqrt(c);e[i]=t*a,e[i+1]=t*s,e[i+2]=t*l}n+=o,i+=r}}Object.freeze(Object.defineProperty({__proto__:null,linearToSRGB:d,linearToSRGBView:u,normalize:p,normalizeView:m,scale:c,scaleView:function(e,t,r){c(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)},shiftRight:function(e,t,r){const o=Math.min(e.count,t.count),a=e.typedBuffer,n=e.typedBufferStride,i=t.typedBuffer,s=t.typedBufferStride;let l=0,c=0;for(let e=0;e<o;e++)a[c]=i[l]>>r,a[c+1]=i[l+1]>>r,a[c+2]=i[l+2]>>r,l+=s,c+=n},transformMat3:l,transformMat3View:s,transformMat4:i,transformMat4View:n,translate:h},Symbol.toStringTag,{value:"Module"}))},69052(e,t,r){r.d(t,{hr:()=>a,ie:()=>l,uC:()=>s});var o=r(34727);class a{constructor(e,t){this.min=e,this.max=t,this.range=t-e}normalize(e,t=0,r=!1){return n(this.range,this.min,this.max,e,t,r)}clamp(e,t=0){return(0,o.qE)(e-t,this.min,this.max)+t}monotonic(e,t,r){return e<t?t:t+i(this.range,e-t,r)}minimalMonotonic(e,t,r){return n(this.range,e,e+this.range,t,r)}center(e,t,r){return t=this.monotonic(e,t,r),this.normalize((e+t)/2,r)}diff(e,t,r){return this.monotonic(e,t,r)-e}shortestSignedDiff(e,t){e=this.normalize(e);const r=(t=this.normalize(t))-e,o=t<e?this.minimalMonotonic(e,t)-e:t-this.minimalMonotonic(t,e);return Math.abs(r)<Math.abs(o)?r:o}contains(e,t,r){return t=this.minimalMonotonic(e,t),(r=this.minimalMonotonic(e,r))>e&&r<t}}function n(e,t,r,o,a=0,n=!1){return(o-=a)<t?o+=i(e,t-o):o>r&&(o-=i(e,o-r)),n&&o===r&&(o=t),o+a}function i(e,t,r=0){return Math.ceil((t-r)/e)*e+r}const s=new a(0,2*Math.PI),l=(new a(-Math.PI,Math.PI),new a(0,360))},46140(e,t,r){r.d(t,{A:()=>a});var o=r(49186);class a{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}greaterEqual(e,t){return!this.lessThan(e,t)}toString(){return`${this.major}.${this.minor}`}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" ";throw new o.A(t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new a(this.major,this.minor,this._context)}static parse(e,t=""){const[r,n]=e.split("."),i=/^\s*\d+\s*$/;if(!r?.match||!i.test(r))throw new o.A((t&&t+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:e});if(!n?.match||!i.test(n))throw new o.A((t&&t+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:e});const s=parseInt(r,10),l=parseInt(n,10);return new a(s,l,t)}}},61473(e,t,r){function o(e){return e=e||globalThis.location.hostname,c.some(t=>null!=e?.match(t))}function a(e,t){return e?(t=t||globalThis.location.hostname)?null!=t.match(n)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(i)||null!=t.match(l)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e:null}r.d(t,{EM:()=>a,b5:()=>o});const n=/^devext\.arcgis\.com$/,i=/^qaext\.arcgis\.com$/,s=/^[\w-]*\.mapsdevext\.arcgis\.com$/,l=/^[\w-]*\.mapsqa\.arcgis\.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local\.esri\.com$/,n,i,/^jsapps\.esri\.com$/,s,l]},82534(e,t,r){function o(){return[0,0,0,1]}function a(e){return[e[0],e[1],e[2],e[3]]}r.d(t,{o8:()=>a,vt:()=>o,zK:()=>n});const n=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:n,clone:a,create:o,fromValues:function(e,t,r,o){return[e,t,r,o]}},Symbol.toStringTag,{value:"Module"}))},88340(e,t,r){function o(){return new Float32Array(2)}function a(e,t){const r=new Float32Array(2);return r[0]=e,r[1]=t,r}function n(){return o()}function i(){return a(1,1)}function s(){return a(1,0)}function l(){return a(0,1)}r.d(t,{Un:()=>u,fA:()=>a,uY:()=>c,vt:()=>o});const c=n(),u=i(),d=s(),h=l();Object.freeze(Object.defineProperty({__proto__:null,ONES:u,UNIT_X:d,UNIT_Y:h,ZEROS:c,clone:function(e){const t=new Float32Array(2);return t[0]=e[0],t[1]=e[1],t},create:o,fromValues:a,ones:i,unitX:s,unitY:l,zeros:n},Symbol.toStringTag,{value:"Module"}))},48163(e,t,r){function o(){return[0,0]}function a(e){return[e[0],e[1]]}function n(e,t){return[e,t]}function i(){return n(1,1)}function s(){return n(-1,-1)}function l(){return n(1,0)}function c(){return n(0,1)}r.d(t,{IA:()=>d,Un:()=>u,fA:()=>n,o8:()=>a,vt:()=>o});const u=i(),d=s(),h=l(),m=c();Object.freeze(Object.defineProperty({__proto__:null,NEGATIVE_ONES:d,ONES:u,UNIT_X:h,UNIT_Y:m,ZEROS:[0,0],clone:a,create:o,freeze:function(e,t){return[e,t]},fromArray:function(e,t=[0,0]){const r=Math.min(2,e.length);for(let o=0;o<r;++o)t[o]=e[o];return t},fromValues:n,negativeOnes:s,ones:i,unitX:l,unitY:c,zeros:function(){return[0,0]}},Symbol.toStringTag,{value:"Module"}))},91829(e,t,r){function o(){return[0,0,0,0]}function a(e,t,r,o){return[e,t,r,o]}function n(e,t,r,o){return[e,t,r,o]}function i(){return a(1,1,1,1)}function s(){return a(1,0,0,0)}function l(){return a(0,1,0,0)}function c(){return a(0,0,1,0)}function u(){return a(0,0,0,1)}r.d(t,{CN:()=>n,Un:()=>h,_Y:()=>u,fA:()=>a,uY:()=>d,vt:()=>o});const d=[0,0,0,0],h=i(),m=s(),p=l(),f=c(),v=u();Object.freeze(Object.defineProperty({__proto__:null,ONES:h,UNIT_W:v,UNIT_X:m,UNIT_Y:p,UNIT_Z:f,ZEROS:d,clone:function(e){return[e[0],e[1],e[2],e[3]]},create:o,freeze:n,fromArray:function(e,t=[0,0,0,0]){const r=Math.min(4,e.length);for(let o=0;o<r;++o)t[o]=e[o];return t},fromValues:a,ones:i,unitW:u,unitX:s,unitY:l,unitZ:c,zeros:function(){return[0,0,0,0]}},Symbol.toStringTag,{value:"Module"}))},78955(e,t,r){r.d(t,{Bw:()=>v,C:()=>a,Cc:()=>y,LI:()=>h,Om:()=>b,S8:()=>x,T9:()=>d,WQ:()=>i,Z0:()=>w,aI:()=>S,hG:()=>f,hZ:()=>n,hs:()=>m,jk:()=>u,m3:()=>g,t2:()=>M});var o=r(34304);function a(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function n(e,t,r,o,a){return e[0]=t,e[1]=r,e[2]=o,e[3]=a,e}function i(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e}function s(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e}function l(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e[3]=t[3]*r[3],e}function c(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e[3]=t[3]/r[3],e}function u(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e[3]=Math.min(t[3],r[3]),e}function d(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e[3]=Math.max(t[3],r[3]),e}function h(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e[3]=Math.round(t[3]),e}function m(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e}function p(e,t){const r=t[0]-e[0],o=t[1]-e[1],a=t[2]-e[2],n=t[3]-e[3];return Math.sqrt(r*r+o*o+a*a+n*n)}function f(e,t){const r=t[0]-e[0],o=t[1]-e[1],a=t[2]-e[2],n=t[3]-e[3];return r*r+o*o+a*a+n*n}function v(e){const t=e[0],r=e[1],o=e[2],a=e[3];return Math.sqrt(t*t+r*r+o*o+a*a)}function g(e){const t=e[0],r=e[1],o=e[2],a=e[3];return t*t+r*r+o*o+a*a}function x(e,t){const r=t[0],o=t[1],a=t[2],n=t[3];let i=r*r+o*o+a*a+n*n;return i>0&&(i=1/Math.sqrt(i),e[0]=r*i,e[1]=o*i,e[2]=a*i,e[3]=n*i),e}function b(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function y(e,t,r,o){const a=t[0],n=t[1],i=t[2],s=t[3];return e[0]=a+o*(r[0]-a),e[1]=n+o*(r[1]-n),e[2]=i+o*(r[2]-i),e[3]=s+o*(r[3]-s),e}function w(e,t,r){const o=t[0],a=t[1],n=t[2],i=t[3];return e[0]=r[0]*o+r[4]*a+r[8]*n+r[12]*i,e[1]=r[1]*o+r[5]*a+r[9]*n+r[13]*i,e[2]=r[2]*o+r[6]*a+r[10]*n+r[14]*i,e[3]=r[3]*o+r[7]*a+r[11]*n+r[15]*i,e}function M(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function S(e,t){const r=e[0],a=e[1],n=e[2],i=e[3],s=t[0],l=t[1],c=t[2],u=t[3],d=(0,o.FD)();return Math.abs(r-s)<=d*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(a-l)<=d*Math.max(1,Math.abs(a),Math.abs(l))&&Math.abs(n-c)<=d*Math.max(1,Math.abs(n),Math.abs(c))&&Math.abs(i-u)<=d*Math.max(1,Math.abs(i),Math.abs(u))}const T=s,C=l,_=c,I=p,P=f,z=v,D=g;Object.freeze(Object.defineProperty({__proto__:null,add:i,ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e[3]=Math.ceil(t[3]),e},copy:a,copyVec3:function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e},dist:I,distance:p,div:_,divide:c,dot:b,equals:S,exactEquals:M,floor:function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e[3]=Math.floor(t[3]),e},inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e},len:z,length:v,lerp:y,max:d,min:u,mul:C,multiply:l,negate:function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e},normalize:x,random:function(e,t=1){const r=o.Ov;let a,n,i,s,l,c;do{a=2*r()-1,n=2*r()-1,l=a*a+n*n}while(l>=1);do{i=2*r()-1,s=2*r()-1,c=i*i+s*s}while(c>=1);const u=Math.sqrt((1-l)/c);return e[0]=t*a,e[1]=t*n,e[2]=t*i*u,e[3]=t*s*u,e},round:h,scale:m,scaleAndAdd:function(e,t,r,o){return e[0]=t[0]+r[0]*o,e[1]=t[1]+r[1]*o,e[2]=t[2]+r[2]*o,e[3]=t[3]+r[3]*o,e},set:n,sqrDist:P,sqrLen:D,squaredDistance:f,squaredLength:g,str:function(e){return"vec4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},sub:T,subtract:s,transformMat4:w,transformQuat:function(e,t,r){const o=t[0],a=t[1],n=t[2],i=r[0],s=r[1],l=r[2],c=r[3],u=c*o+s*n-l*a,d=c*a+l*o-i*n,h=c*n+i*a-s*o,m=-i*o-s*a-l*n;return e[0]=u*c+m*-i+d*-l-h*-s,e[1]=d*c+m*-s+h*-i-u*-l,e[2]=h*c+m*-l+u*-s-d*-i,e[3]=t[3],e}},Symbol.toStringTag,{value:"Module"}))},56512(e,t,r){function o(e){let t,r,o=[],a=!1;return function(...n){return a&&t===this&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;++r)if(e[r]!==t[r])return!1;return!0}(n,o)||(r=e.apply(this,n),t=this,o=n,a=!0),r}}r.d(t,{B:()=>o})},69397(e,t,r){r.d(t,{Qf:()=>l,Qh:()=>i,RS:()=>a,Ul:()=>m,i5:()=>h,lM:()=>n,qK:()=>u});var o=r(34275);const a=16;function n(e){if(!e)return 0;let t=u;for(const r in e)e.hasOwnProperty(r)&&(t+=s(e[r],!1));return t}function i(e){if(!e)return 0;if("number"==typeof e[0])return l(e);if(Array.isArray(e))return function(e){const t=e.length;if(0===t||"number"==typeof e[0])return c(e,8);let r=d;for(let o=0;o<t;o++)r+=s(e[o]);return r}(e);let t=u;for(const r in e)e.hasOwnProperty(r)&&(t+=s(e[r]));return t}function s(e,t=!0){switch(typeof e){case"object":return t?i(e):u;case"string":return function(e){return 32+e.length}(e);case"number":return a;case"boolean":return 4;default:return 8}}function l(...e){return e.reduce((e,t)=>e+(t?(0,o.iu)(t)?t.byteLength+h:Array.isArray(t)?c(t,a):0:0),0)}function c(e,t){return d+e.length*t}const u=32,d=16,h=145,m=64},65806(e,t,r){r.d(t,{g:()=>i});var o=r(51850),a=r(91218),n=r(9762);function i(e,t,r,o){if((0,a.canProjectWithoutEngine)(e.spatialReference,r))return s[0]=e.x,s[1]=e.y,s[2]=e.z??0,(0,n.projectBuffer)(s,e.spatialReference,0,t,r,0);const i=(0,a.tryProject)(e,r,o);return!!i&&(t[0]=i.x,t[1]=i.y,t[2]=i.z??0,!0)}const s=(0,o.vt)()},27993(e,t,r){r.d(t,{F:()=>s});var o=r(91218),a=r(16930),n=r(9762),i=r(65806);function s(e,t,r,a){return!(null==t||null==a||e.length<2)&&((0,o.canProjectWithoutEngine)(t,a)?(0,n.projectBuffer)(e,t,0,r,a,0,1):(l.x=e[0],l.y=e[1],l.z=e[2],l.spatialReference=t,(0,i.g)(l,r,a)))}const l={x:0,y:0,z:0,hasZ:!0,hasM:!1,spatialReference:a.A.WGS84,type:"point"}},72727(e,t,r){function o(e,t,r){if(t<=0)return 0;const o=e-r;return o<0?0:Math.floor(o/t)+1}r.d(t,{k:()=>o}),r(53966)},31411(e,t,r){r.d(t,{GS:()=>T,gh:()=>_});var o=r(49186),a=r(56512),n=r(65864),i=r(4305),s=r(50954),l=r(52006),c=r(49663),u=r(46068),d=r(15507);const h=1e-6,m=[0,0];function p(e){return{maxSegmentLength:e.maxSegmentLength??0,maxDeviation:e.maxDeviation??0,maxSegmentsPerCurve:e.maxSegmentsPerCurve??12e3,minSegmentsPerCurve:Math.max(e.minSegmentsPerCurve??1,1)}}class f{constructor(e,t){this.curveStart=e,this.curveEnd=t,this.tStart=0,this.tEnd=0,this.tEndStack=[],this.arcEndStack=[]}get stackSize(){return this.tEndStack.length}initialize(e,t){this.tStart=0,this.arcStart=e,this.tEndStack.push(1),this.arcEndStack.push(t)}splitAt(e){this.tEndStack.push(this.tEnd),this.arcEndStack.push(this.arcEnd),this.tEndStack.push(e),this.arcEndStack.push(this.interpolate(e))}splitInHalf(){return this.splitAt((this.tStart+this.tEnd)/2)}pop(){this.tEnd=this.tEndStack.pop(),this.arcEnd=this.arcEndStack.pop()}next(){this.tStart=this.tEnd,this.arcStart=this.arcEnd}densify(e,{maxDeviation:t,maxSegmentLength:r,maxSegmentsPerCurve:o,minSegmentsPerCurve:a}){const n=r*r,i=t*t,s=1/o,l=this.interpolate(0),c=this.interpolate(1);(0,d.kb)(this.curveStart,l)>h&&e.push(l),this.initialize(l,c);const u=1/a;for(let e=a-1;e>0;e--){const t=e*u;this.pop(),this.splitAt(t)}for(;this.stackSize>0;)this.pop(),this.tStart===this.tEnd||this.tEnd-this.tStart<s||(0===n||!isFinite(n)||(0,d.kb)(this.arcStart,this.arcEnd)<n)&&(0===i||!isFinite(i)||this.getDeviation2()<i)?(e.push(this.arcEnd),this.next()):this.splitInHalf();return(0,d.kb)(this.curveEnd,c)>h&&e.push([...this.curveEnd]),e}}class v extends f{constructor(e,t){const[r,o,a]=t.b;super(e,r),this._controlPointsStack=[],this._curveControlPoints=[o,a],this._arcControlPoints=[o,a],this._controlPointsStack.push(this._arcControlPoints)}splitAt(e){const{arcStart:t,arcEnd:r,tStart:o,tEnd:a}=this,[n,i]=this._arcControlPoints,s=(e-o)/(a-o),l=(0,d.RS)([],t,n,s),c=(0,d.RS)(m,n,i,s),u=(0,d.RS)([],i,r,s),h=(0,d.RS)([],l,c,s),p=(0,d.RS)([],c,u,s),f=(0,d.RS)([],h,p,s);this.tEndStack.push(this.tEnd),this.arcEndStack.push(this.arcEnd),this._controlPointsStack.push([p,u]),this.tEndStack.push(e),this.arcEndStack.push(f),this._arcControlPoints[0]=l,this._arcControlPoints[1]=h,this._controlPointsStack.push(this._arcControlPoints)}pop(){super.pop(),this._arcControlPoints=this._controlPointsStack.pop()}interpolate(e){const{curveStart:t,curveEnd:r}=this,[o,a]=this._curveControlPoints;return(0,i.B4)(t,o,a,r,e)}getDeviation2(){const{arcStart:e,arcEnd:t}=this,[r,o]=this._arcControlPoints;return Math.max((0,d.yE)(r,e,t),(0,d.yE)(o,e,t))}}class g extends f{constructor(e,t){const[r]=t.a;super(e,r),this._derivedEllipse=(0,u.SW)(e,t)}pop(){super.pop(),this._tMid=(this.tStart+this.tEnd)/2,this._arcMid=this.interpolate(this._tMid)}splitInHalf(){this.tEndStack.push(this.tEnd),this.arcEndStack.push(this.arcEnd),this.tEndStack.push(this._tMid),this.arcEndStack.push(this._arcMid)}interpolate(e){return(0,u.Uk)(this._derivedEllipse,e)}getDeviation2(){return(0,d.yE)(this._arcMid,this.arcStart,this.arcEnd)}}function x(e,t,r,{cx:o,cy:a,radius:n,thetaStart:i,thetaEnd:s,isInvalid:l},{maxDeviation:c,maxSegmentLength:u,maxSegmentsPerCurve:m,minSegmentsPerCurve:p}){if(l)return e.push([...r]),e;const f=2*n,v=[o+n*Math.cos(i),a+n*Math.sin(i)],g=[o+n*Math.cos(s),a+n*Math.sin(s)];(0,d.kb)(t,v)>h&&e.push(v);const x=Math.abs(s-i),b=u>0&&u<f?2*Math.asin(u/f):x,y=c>0&&c<=n?2*Math.acos(1-c/n):x,w=Math.min(b,y),M=Math.min(m,Math.max(p,Math.ceil(Math.abs(x/w)))),S=1/M;for(let t=1;t<M;t++){const r=t*S,l=i*(1-r)+s*r;e.push([o+n*Math.cos(l),a+n*Math.sin(l)])}return e.push(g),(0,d.kb)(r,g)>h&&e.push([...r]),e}function b(e,t,r,o){return new v(t,r).densify(e,o)}function y(e,t,r,o){const a=(0,s.pM)(t,r),[n]=r.c;return x(e,t,n,a,o)}function w(e,t,r,o){const a=(0,c.io)(t,r),[n]=r.a;return x(e,t,n,a,o)}function M(e,t,r,o){const[a,n,i,s,l,c,u]=r.a;return 0===c||0===u?(e.push([...a]),e):new g(t,r).densify(e,o)}function S(e,t,r,o){return(0,l.Xq)(r)?(e.push([...r]),e):(0,l.n1)(r)?b(e,t,r,o):(0,l.aO)(r)?y(e,t,r,o):(0,l.DA)(r)?w(e,t,r,o):M(e,t,r,o)}function T(e,t={}){if(!(0,l.Ed)(e))return e;const r=p(t),o=(0,l.FD)(e),a=[];for(const e of o){const t=[];for(let o=0;o<e.length-1;o++){const a=o+1,n=[...(0,l.yP)(e[o])];0===o&&t.push(n),S(t,n,e[a],r)}a.push(t)}return"curvePaths"in e?{...void 0!==e.hasZ?{hasZ:e.hasZ}:{},...void 0!==e.hasM?{hasM:e.hasM}:{},paths:a,spatialReference:e.spatialReference}:{...void 0!==e.hasZ?{hasZ:e.hasZ}:{},...void 0!==e.hasM?{hasM:e.hasM}:{},rings:a,spatialReference:e.spatialReference}}const C=(0,a.B)(e=>({maxDeviation:0,maxSegmentLength:100*e,maxSegmentsPerCurve:12e3,minSegmentsPerCurve:1}));async function _(e,t,a){const i=new Set(t);return await async function(e,t,a){let n=null;for(const i of e)if(i&&(0,l.Ed)(i)&&null==i.spatialReference.xyTolerance&&(0,l.V8)(i,t)){const e=i.spatialReference;if(!e)throw new o.A("geometry:missing-spatial-reference","Geometry contains an unsupported curve type, but it cannot be densified because it has no spatial reference.");const t=I(e);if(a.has(t))i.spatialReference=a.get(t);else{n||(n=await Promise.all([r.e(3661),r.e(1878),r.e(8885),r.e(5756),r.e(3299),r.e(6312)]).then(r.bind(r,78125)));const s=n.fromSpatialReference(e),l=s?.getTolerance();if(null==l)throw new o.A("geometry:missing-tolerance","Geometry contains an unsupported curve type, but it cannot be densified because the tolerance of its spatial reference is unknown. Set the `xyTolerance` property of the spatial reference.");const c=i.spatialReference.clone();c.read({xyTolerance:l}),i.spatialReference=c,a.set(t,c)}}}(e,i,a),e.map(e=>{if(!e||!(0,l.Ed)(e))return e;const r=e.spatialReference.xyTolerance;if(null==r)return e;const o=C(r);return(0,n.rS)(function(e,t,r){if(!(0,l.Ed)(e))return e;const o=new Set(t),a=p(r),n=(0,l.FD)(e),i=[];let s=!1;for(const e of n){const t=[];for(let r=0;r<e.length-1;r++){const n=r+1,i=[...(0,l.yP)(e[r])];0===r&&t.push(i);const c=e[n];(0,l.Xq)(c)?t.push([...c]):(0,l.n1)(c)&&!o.has("cubic-bezier")?b(t,i,c,a):(0,l.aO)(c)&&!o.has("circular-arc")?y(t,i,c,a):(0,l.DA)(c)&&!o.has("elliptic-arc")?w(t,i,c,a):(0,l.wY)(c)&&!o.has("elliptic-arc")?M(t,i,c,a):(t.push((0,l.tk)(c)),s=!0)}i.push(t)}return"curvePaths"in e?{...void 0!==e.hasZ?{hasZ:e.hasZ}:{},...void 0!==e.hasM?{hasM:e.hasM}:{},spatialReference:e.spatialReference,...s?{curvePaths:i}:{paths:i}}:{hasZ:e.hasZ,hasM:e.hasM,spatialReference:e.spatialReference,...s?{curveRings:i}:{rings:i}}}(e,t,o))})}function I(e){if(null!=e.wkid)return`${e.wkid}`;if(null!=e.wkt)return e.wkt;const t="toJSON"in e&&"function"==typeof e.toJSON?e.toJSON():e;return JSON.stringify(t)}},17136(e,t,r){r.d(t,{Y_:()=>D,O7:()=>P,el:()=>I});var o=r(92602),a=r(69052),n=r(49186),i=r(53966),s=r(39829),l=r(82799),c=r(16930),u=r(80754),d=r(21325),h=r(28735),m=r(52006),p=r(31411),f=r(11254),v=r(60408),g=r(65864),x=r(2272),b=r(84952),y=r(92300);const w=()=>i.A.getLogger("esri.geometry.support.normalizeUtils");function M(e){return"polygon"===e[0].type}function S(e){return"polyline"===e[0].type}function T(e,t,r){const o=1e6;if(t){const t=(0,m.Ed)(e)?(0,p.GS)(e,{maxSegmentLength:o}):function(e,t){if(!(e instanceof l.A||e instanceof s.A)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw w().error(e),new n.A("internal:geometry",e)}const r=(0,u.r8)(e),o=[];for(const e of r){const r=[];o.push(r),r.push([e[0][0],e[0][1]]);for(let o=0;o<e.length-1;o++){const a=e[o][0],n=e[o][1],i=e[o+1][0],s=e[o+1][1],l=Math.sqrt((i-a)*(i-a)+(s-n)*(s-n)),c=(s-n)/l,u=(i-a)/l,d=l/t;if(d>1){for(let e=1;e<=d-1;e++){const o=e*t,i=u*o+a,s=c*o+n;r.push([i,s])}const e=(l+Math.floor(d-1)*t)/2,o=u*e+a,i=c*e+n;r.push([o,i])}r.push([i,s])}}return function(e){return"polygon"===e.type}(e)?new s.A({rings:o,spatialReference:e.spatialReference}):new l.A({paths:o,spatialReference:e.spatialReference})}(e,o);e=(0,h.ci)(t,!0)}return r&&(e=(0,u.kS)(e,r)),e}function C(e,t,r){if(Array.isArray(e)){const o=e[0];if(o>t){const r=(0,u.kd)(o,t);e[0]=o+r*(-2*t)}else if(o<r){const t=(0,u.kd)(o,r);e[0]=o+t*(-2*r)}}else{const o=e.x;if(o>t){const r=(0,u.kd)(o,t);e=e.clone().offset(r*(-2*t),0)}else if(o<r){const t=(0,u.kd)(o,r);e=e.clone().offset(t*(-2*r),0)}}return e}function _(e,t){let r=-1;for(let o=0;o<t.cutIndexes.length;o++){const a=t.cutIndexes[o],n=t.geometries[o],i=(0,u.r8)(n);for(let e=0;e<i.length;e++){const t=i[e];t.some(r=>{if(r[0]<180)return!0;{let r=0;for(let e=0;e<t.length;e++){const o=t[e][0];r=o>r?o:r}r=Number(r.toFixed(9));const o=-360*(0,u.kd)(r,180);for(let r=0;r<t.length;r++){const t=n.getPoint(e,r);n.setPoint(e,r,t.clone().offset(o,0))}return!0}})}if(a===r){if(M(e))for(const t of(0,u.r8)(n))e[a]=e[a].addRing(t);else if(S(e))for(const t of(0,u.r8)(n))e[a]=e[a].addPath(t)}else r=a,e[a]=n}return e}async function I(e,t,r){if(!Array.isArray(e))return I([e],t);t&&"string"!=typeof t&&w().warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const a="string"==typeof t?t:t?.url??o.A.geometryServiceUrl;let n,i,c,m,p,M,S,P,z=0;const D=[],R=[];for(const t of e)if(null!=t)if(n||(n=t.spatialReference,i=(0,d.Vp)(n),c=n.isWebMercator,M=c?102100:4326,m=u.j7[M].maxX,p=u.j7[M].minX,S=u.j7[M].plus180Line,P=u.j7[M].minus180Line),i)if("mesh"===t.type)R.push(t);else if("point"===t.type)R.push(C(t.clone(),m,p));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map(e=>C(e,m,p)),R.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,i);R.push(e.rings?new s.A(e):e)}else if(t.extent){const e=t.extent,r=(0,u.kd)(e.xmin,p)*(2*m);let o=0===r?t.clone():(0,u.kS)(t.clone(),r);e.offset(r,0);let{xmin:a,xmax:n}=e;a=Number(a.toFixed(9)),n=Number(n.toFixed(9)),e.intersects(S)&&n!==m?(z=n>z?n:z,o=T(o,c),D.push(o),R.push("cut")):e.intersects(P)&&a!==p?(z=n*(2*m)>z?n*(2*m):z,o=T(o,c,360),D.push(o),R.push("cut")):R.push(o)}else R.push(t.clone());else R.push(t);else R.push(t);let F=(0,u.kd)(z,m),O=-90;const j=F,E=new l.A;for(;F>0;){const e=360*F-180;E.addPath([[e,O],[e,-1*O]]),O*=-1,F--}if(D.length>0&&j>0){const t=_(D,await async function(e,t,r,o){const a=(0,x.Dl)(e),n=t[0].spatialReference,i={...o,responseType:"json",query:{...a.query,f:"json",sr:(0,d.YX)(n),target:JSON.stringify({geometryType:(0,v.$B)(t[0]),geometries:t}),cutter:JSON.stringify(r)}},s=await(0,f.A)(a.path+"/cut",i),{cutIndexes:l,geometries:c=[]}=s.data;return{cutIndexes:l,geometries:c.map(e=>{const t=(0,g.rS)(e);return t.spatialReference=n,t})}}(a,D,E,r)),o=[],n=[];for(let r=0;r<R.length;r++){const a=R[r];if("cut"!==a)n.push(a);else{const a=t.shift(),i=e[r];null!=i&&"polygon"===i.type&&i.rings&&i.rings.length>1&&a.rings.length>=i.rings.length?(o.push(a),n.push("simplify")):n.push(c?(0,h.Gh)(a):a)}}if(!o.length)return n;const i=await async function(e,t,r){const o="string"==typeof e?(0,b.An)(e):e,a=t[0].spatialReference,n=(0,v.$B)(t[0]),i={...r,query:{...o.query,f:"json",sr:(0,d.YX)(a),geometries:JSON.stringify((0,y.X)(t))}},{data:s}=await(0,f.A)(o.path+"/simplify",i);return(0,y.V)(s.geometries,n,a)}(a,o,r),s=[];for(let e=0;e<n.length;e++){const t=n[e];"simplify"!==t?s.push(t):s.push(c?(0,h.Gh)(i.shift()):i.shift())}return s}const B=[];for(let e=0;e<R.length;e++){const t=R[e];if("cut"!==t)B.push(t);else{const e=D.shift();B.push(!0===c?(0,h.Gh)(e):e)}}return B}function P(e,t,r){const o=(0,d.Vp)(r);if(null==o)return e;const[a,n]=o.valid,i=2*n;let s=0,l=0;t>n?s=Math.ceil(Math.abs(t-n)/i):t<a&&(s=-Math.ceil(Math.abs(t-a)/i)),e>n?l=Math.ceil(Math.abs(e-n)/i):e<a&&(l=-Math.ceil(Math.abs(e-a)/i));let c=e+(s-l)*i;const u=c-t;return u>n?c-=i:u<a&&(c+=i),c}function z(e){const t=(0,d.Vp)(e);if(null==t)return null;const[r,o]=t.valid;return new a.hr(r,o)}const D=z(c.A.WGS84);z(c.A.WebMercator)},80754(e,t,r){r.d(t,{j7:()=>s,kS:()=>c,kd:()=>l,r8:()=>u});var o=r(82799),a=r(16930),n=r(60408),i=r(52006);const s={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new o.A({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:a.A.WebMercator}),minus180Line:new o.A({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:a.A.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new o.A({paths:[[[180,-180],[180,180]]],spatialReference:a.A.WGS84}),minus180Line:new o.A({paths:[[[-180,-180],[-180,180]]],spatialReference:a.A.WGS84})}};function l(e,t){return Math.ceil((e-t)/(2*t))}function c(e,t){if((0,i.Ed)(e))for(const r of function(e){return(0,n.Bi)(e)?e.curveRings:e.curvePaths}(e))for(const e of r){if((0,i.aO)(e)){const[r,o]=e.c;r[0]+=t,o[0]+=t;continue}if((0,i.FG)(e)){const[r,o]=e.a;r[0]+=t,o[0]+=t;continue}if((0,i.n1)(e)){const[r,o,a]=e.b;r[0]+=t,o[0]+=t,a[0]+=t;continue}e[0]+=t}for(const r of u(e))for(const e of r)e[0]+=t;return e}function u(e){return(0,n.Bi)(e)?e.rings:e.paths}},27921(e,t,r){r.d(t,{$Q:()=>y,C:()=>s,Cr:()=>u,O_:()=>c,Qj:()=>l,T7:()=>x,Tj:()=>b,lU:()=>d,mN:()=>w,vE:()=>M,vt:()=>i});var o=r(34727),a=r(35522),n=r(51850);function i(e=S){return[e[0],e[1],e[2],e[3]]}function s(e,t){return function(e,t,r,o,a=i()){return a[0]=e,a[1]=t,a[2]=r,a[3]=o,a}(t[0],t[1],t[2],t[3],e)}function l(e){return e}function c(e,t,r){const o=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=Math.abs(o-1)>1e-5&&o>1e-12?1/Math.sqrt(o):1;return r[0]=t[0]*a,r[1]=t[1]*a,r[2]=t[2]*a,r[3]=-(r[0]*e[0]+r[1]*e[1]+r[2]*e[2]),r}function u(e,t,r,o=i()){const a=r[0]-t[0],n=r[1]-t[1],s=r[2]-t[2],l=e[0]-t[0],c=e[1]-t[1],u=e[2]-t[2],d=n*u-s*c,h=s*l-a*u,m=a*c-n*l,p=d*d+h*h+m*m,f=Math.abs(p-1)>1e-5&&p>1e-12?1/Math.sqrt(p):1;return o[0]=d*f,o[1]=h*f,o[2]=m*f,o[3]=-(o[0]*e[0]+o[1]*e[1]+o[2]*e[2]),o}function d(e,t,r,o=0,n=Math.floor(r*(1/3)),i=Math.floor(r*(2/3))){if(r<3)return!1;t(m,o);let s=n,l=!1;for(;s<r-1&&!l;)t(p,s),s++,l=!(0,a.t2)(m,p);if(!l)return!1;for(s=Math.max(s,i),l=!1;s<r&&!l;)t(f,s),s++,(0,a.Re)(v,m,p),(0,a.S8)(v,v),(0,a.Re)(g,p,f),(0,a.S8)(g,g),l=!(0,a.t2)(m,f)&&!(0,a.t2)(p,f)&&Math.abs((0,a.Om)(v,g))<h;return l?(u(m,p,f,e),!0):(0!==o||1!==n||2!==i)&&d(e,t,r,0,1,2)}r(78955),r(44280),r(32114),r(32728);const h=.99619469809,m=(0,n.vt)(),p=(0,n.vt)(),f=(0,n.vt)(),v=(0,n.vt)(),g=(0,n.vt)();function x(e,t,r){return function(e){return 0===e||1===e}(M(e,t.origin,t.vector,0,r))}function b(e,t){return w(e,t)>=0}function y(e,t){const r=(0,a.Om)(e,t.ray.direction),o=-w(e,t.ray.origin);if(o<0&&r>=0)return!1;if(r>-1e-6&&r<1e-6)return o>0;if((o<0||r<0)&&!(o<0&&r<0))return!0;const n=o/r;return r>0?n<t.c1&&(t.c1=n):n>t.c0&&(t.c0=n),t.c0<=t.c1}function w(e,t){return(0,a.Om)(e,t)+e[3]}function M(e,t,r,n,i){const s=(0,a.Om)(e,r),l=w(e,t);if(0===s)return l>=0?2:3;let c=-l/s;return 1&n&&(c=(0,o.qE)(c,0,1)),!(4&n)&&c<0||!(8&n)&&c>1?l>=0?2:3:((0,a.WQ)(i,t,(0,a.hs)(i,r,c)),l>=0?0:1)}const S=[0,0,1,0]},44280(e,t,r){r.d(t,{g7:()=>s,gr:()=>i});var o=r(34727),a=r(35522),n=r(51850);function i(e,t){return(0,a.Om)(e,t)/(0,a.Bw)(e)}function s(e,t){const r=(0,a.Om)(e,t)/((0,a.Bw)(e)*(0,a.Bw)(t));return-(0,o.XM)(r)}(0,n.vt)(),(0,n.vt)()},32114(e,t,r){r.d(t,{Rc:()=>m,J8:()=>p,rq:()=>d,Km:()=>h}),r(44208);var o=r(26390),a=r(29242),n=r(9093),i=r(82534),s=r(48163),l=r(51850),c=r(91829);class u{constructor(e){this._create=e,this._items=new Array,this._itemsPtr=0}get(){return 0===this._itemsPtr&&(0,o.d)(()=>this._reset()),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const e=2*this._itemsPtr;this._items.length>e&&(this._items.length=e),this._itemsPtr=0}static createVec2f64(){return new u(s.vt)}static createVec3f64(){return new u(l.vt)}static createVec4f64(){return new u(c.vt)}static createMat3f64(){return new u(a.vt)}static createMat4f64(){return new u(n.vt)}static createQuatf64(){return new u(i.vt)}get test(){}}u.createVec2f64();const d=u.createVec3f64(),h=u.createVec4f64(),m=(u.createMat3f64(),u.createMat4f64()),p=u.createQuatf64()},38969(e,t,r){r.d(t,{i:()=>a});var o=r(37955);function a(e,t){return new Promise((r,a)=>{e.readyState>=HTMLMediaElement.HAVE_CURRENT_DATA?r():(t((0,o.Oo)(e,"canplay",r)),t((0,o.Oo)(e,"error",a)))})}},92300(e,t,r){r.d(t,{V:()=>i,X:()=>n});var o=r(60408),a=r(65864);function n(e){return{geometryType:(0,o.$B)(e[0]),geometries:e.map(e=>e.toJSON())}}function i(e,t,r){const o=(0,a.xD)(t);return e.map(e=>{const t=o.fromJSON(e);return t.spatialReference=r,t})}},21015(e,t,r){r.d(t,{R:()=>l});var o=r(11254),a=r(60999),n=r(49186),i=r(17676),s=r(84952);class l{constructor(e=e=>e){this._resolveURI=e}async loadJSON(e,t){return this._load("json",e,t)}async loadBinary(e,t){return(0,s.DB)(e)?((0,i.Te)(t),(0,s.lJ)(e)):this._load("array-buffer",e,t)}async loadImage(e,t){return this._load("image",e,t)}async _load(e,t,r){t=this._resolveURI(t);const s=await(0,a.Ke)((0,o.A)(t,{responseType:e,...r}));if(s.ok)return s.value.data;throw(0,i.QP)(s.error),new n.A("gltf-loader-request-error",`Request for resource failed: ${s.error}`)}}},84498(e,t,r){r.d(t,{x:()=>i});var o=r(34275),a=r(97146),n=r(63907);function i(e,t){switch(t){case n.WR.TRIANGLES:return function(e){return"number"==typeof e?(0,a.tM)(e):(0,o.mg)(e)?new Uint16Array(e):e}(e);case n.WR.TRIANGLE_STRIP:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return[];const r=t-2,o=(0,a.my)(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(o[e++]=t,o[e++]=t+1,o[e++]=t+2):(o[e++]=t+1,o[e++]=t,o[e++]=t+2)}else{let t=0;for(let a=0;a<r;a+=1)a%2==0?(o[t++]=e[a],o[t++]=e[a+1],o[t++]=e[a+2]):(o[t++]=e[a+1],o[t++]=e[a],o[t++]=e[a+2])}return o}(e);case n.WR.TRIANGLE_FAN:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,o=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)o[e++]=0,o[e++]=t+1,o[e++]=t+2;return o}const a=e[0];let n=e[1],i=0;for(let t=0;t<r;++t){const r=e[t+2];o[i++]=a,o[i++]=n,o[i++]=r,n=r}return o}(e)}}},51530(e,t,r){r.d(t,{KB:()=>i,Xi:()=>a,pn:()=>s,x3:()=>n});var o=r(44208);class a{constructor(e){this.data=e,this.type="encoded-mesh-texture",this.encoding="image/ktx2"}}function n(e){return"encoded-mesh-texture"===e?.type}async function i(e){const t=new Blob([e]),r=await t.text();return JSON.parse(r)}async function s(e,t){if("image/ktx2"===t)return new a(e);const r=new Blob([e],{type:t});let n=URL.createObjectURL(r);switch(t){case"image/jpeg":n+="#.jpg";break;case"image/png":n+="#.png"}const i=new Image;if((0,o.A)("esri-iPhone"))return new Promise((e,t)=>{const r=()=>{a(),e(i)},o=e=>{a(),t(e)},a=()=>{URL.revokeObjectURL(n),i.removeEventListener("load",r),i.removeEventListener("error",o)};i.addEventListener("load",r),i.addEventListener("error",o),i.src=n});try{i.src=n,await i.decode()}catch{}return URL.revokeObjectURL(n),i}},77691(e,t,r){r.d(t,{fetch:()=>Ct});var o=r(40876),a=r(61473),n=r(34727),i=r(77690),s=r(29242),l=r(58083),c=r(9093),u=r(48163),d=r(35522),h=r(51850),m=r(70328),p=r(34275);function f(e,t=!1){return e<=p.y9?t?new Array(e).fill(0):new Array(e):new Float32Array(e)}var v=r(13030),g=r(73354),x=r(50867),b=r(43609),y=r(21015),w=r(84498),M=r(51530),S=r(88340);function T(e){if(null==e)return null;const t=null!=e.offset?e.offset:S.uY,r=null!=e.rotation?e.rotation:0,o=null!=e.scale?e.scale:S.Un,a=(0,s.fA)(1,0,0,0,1,0,t[0],t[1],1),n=(0,s.fA)(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),l=(0,s.fA)(o[0],0,0,0,o[1],0,0,0,1),c=(0,s.vt)();return(0,i.lw)(c,n,l),(0,i.lw)(c,a,c),c}class C{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class _{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new C,this.numberOfVertices=0}}var I=r(11254),P=r(60999),z=r(49186),D=r(53966),R=r(69397);class F{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get outerSize(){return this._outer.size}get size(){let e=0;for(const t of this._outer.values())e+=t.size;return e}get(e,t){return this._outer.get(e)?.get(t)}getInner(e){return this._outer.get(e)}set(e,t,r){const o=this._outer.get(e);o?o.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}pop(e,t){const r=this.get(e,t);return this.delete(e,t),r}*outerMap(){for(const e of this._outer)yield e}*values(){for(const e of this._outer.values())yield*e.values()}*[Symbol.iterator](){for(const[e,t]of this._outer)for(const[r,o]of t)yield[e,r,o]}forEach(e){this._outer.forEach((t,r)=>e(t,r))}forAll(e){this._outer.forEach((t,r)=>t.forEach((t,o)=>e(t,r,o)))}copy(){const e=new F;return this.forAll((t,r,o)=>e.set(r,o,t)),e}}var O=r(17676),j=r(46140),E=r(97146),B=r(31217),H=r(46610),N=r(16613),W=r(18845),G=r(49255),A=r(97768),L=r(92130),V=r(65786);class k extends L.A{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textures=e.textures,this.updateTexture(e.textureId),this._acquire(e.normalTextureId,e=>this._textureNormal=e),this._acquire(e.emissiveTextureId,e=>this._textureEmissive=e),this._acquire(e.occlusionTextureId,e=>this._textureOcclusion=e),this._acquire(e.metallicRoughnessTextureId,e=>this._textureMetallicRoughness=e)}dispose(){super.dispose(),this._texture=(0,A.Gz)(this._texture),this._textureNormal=(0,A.Gz)(this._textureNormal),this._textureEmissive=(0,A.Gz)(this._textureEmissive),this._textureOcclusion=(0,A.Gz)(this._textureOcclusion),this._textureMetallicRoughness=(0,A.Gz)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?2:1}get textureBindParameters(){return new $(this._texture?.texture??null,this._textureNormal?.texture??null,this._textureEmissive?.texture??null,this._textureOcclusion?.texture??null,this._textureMetallicRoughness?.texture??null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=(0,A.Gz)(this._texture),this._acquire(e,e=>this._texture=e))}_acquire(e,t){if(null==e)return void t(null);const r=this._textures.acquire(e);if((0,O.$X)(r))return++this._numLoading,void r.then(e=>{if(this._disposed)return(0,A.Gz)(e),void t(null);t(e)}).finally(()=>--this._numLoading);t(r)}}class U extends V.Y{constructor(e=null){super(),this.textureEmissive=e}}class $ extends U{constructor(e,t,r,o,a,n,i){super(r),this.texture=e,this.textureNormal=t,this.textureOcclusion=o,this.textureMetallicRoughness=a,this.scale=n,this.normalTextureTransformMatrix=i}}var q=r(11725),Z=r(620);class Y{constructor(e=0,t=!1,r=!0){this.tolerance=e,this.isVerticalRay=t,this.normalRequired=r}}const J=(0,m.vt)();function K(e,t,r,o,a,n){if(!e.visible)return;const i=(0,d.jb)(ue,o,r),{tolerance:s}=t,l=new Y(s,!1,t.options.normalRequired);if(e.boundingInfo)(0,Z.vA)(0===e.type),Q(e.boundingInfo,r,i,s,a,l,n);else{const t=e.positionAttribute,o=e.primitivePositionIndices;!function(e,t,r,o,a,n,i,s,l,c){const u=t,h=de,m=Math.abs(u[0]),p=Math.abs(u[1]),f=Math.abs(u[2]),v=m>=p?m>=f?0:2:p>=f?1:2,g=v,x=u[g]<0?2:1,b=(v+x)%3,y=(v+(3-x))%3,w=u[b]/u[g],M=u[y]/u[g],S=1/u[g],T=te,C=re,_=oe,{normalRequired:I}=l;for(let t=r;t<o;++t){const r=3*t,o=i*a[r];(0,d.hZ)(h[0],n[o+0],n[o+1],n[o+2]);const l=i*a[r+1];(0,d.hZ)(h[1],n[l+0],n[l+1],n[l+2]);const u=i*a[r+2];(0,d.hZ)(h[2],n[u+0],n[u+1],n[u+2]),s&&((0,d.C)(h[0],s.applyToVertex(h[0][0],h[0][1],h[0][2],t)),(0,d.C)(h[1],s.applyToVertex(h[1][0],h[1][1],h[1][2],t)),(0,d.C)(h[2],s.applyToVertex(h[2][0],h[2][1],h[2][2],t))),(0,d.jb)(T,h[0],e),(0,d.jb)(C,h[1],e),(0,d.jb)(_,h[2],e);const m=T[b]-w*T[g],p=T[y]-M*T[g],f=C[b]-w*C[g],v=C[y]-M*C[g],x=_[b]-w*_[g],P=_[y]-M*_[g],z=x*v-P*f,D=m*P-p*x,R=f*p-v*m;if((z<0||D<0||R<0)&&(z>0||D>0||R>0))continue;const F=z+D+R;if(0===F)continue;const O=z*(S*T[g])+D*(S*C[g])+R*(S*_[g]);if(O*Math.sign(F)<0)continue;const j=O/F;j>=0&&c(j,j,I?ne(h):null,t)}}(r,i,0,o.length/3,o,t.data,t.stride,a,l,n)}}const X=(0,h.vt)();function Q(e,t,r,o,a,n,i){if(null==e)return;const s=function(e,t){return(0,d.hZ)(t,1/e[0],1/e[1],1/e[2])}(r,X);if((0,m.Ne)(J,e.bbMin),(0,m.vI)(J,e.bbMax),null!=a&&a.applyToAabb(J),function(e,t,r,o){return function(e,t,r,o){const a=(e[0]-o-t[0])*r[0],n=(e[3]+o-t[0])*r[0];let i=Math.min(a,n),s=Math.max(a,n);const l=(e[1]-o-t[1])*r[1],c=(e[4]+o-t[1])*r[1];if(s=Math.min(s,Math.max(l,c)),s<0)return!1;if(i=Math.max(i,Math.min(l,c)),i>s)return!1;const u=(e[2]-o-t[2])*r[2],d=(e[5]+o-t[2])*r[2];return s=Math.min(s,Math.max(u,d)),!(s<0)&&(i=Math.max(i,Math.min(u,d)),!(i>s)&&i<1/0)}(e,t,r,o)}(J,t,s,o)){const{primitiveIndices:s,position:l}=e,c=s?s.length:l.indices.length/3;if(c>le){const s=e.getChildren();if(void 0!==s){for(const e of s)Q(e,t,r,o,a,n,i);return}}!function(e,t,r,o,a,n,i,s,l,c,u){const d=e[0],h=e[1],m=e[2],p=t[0],f=t[1],v=t[2],{normalRequired:g}=c;for(let e=0;e<o;++e){const t=s[e],r=3*t,o=i*a[r];let c=n[o],x=n[o+1],b=n[o+2];const y=i*a[r+1];let w=n[y],M=n[y+1],S=n[y+2];const T=i*a[r+2];let C=n[T],_=n[T+1],I=n[T+2];null!=l&&([c,x,b]=l.applyToVertex(c,x,b,e),[w,M,S]=l.applyToVertex(w,M,S,e),[C,_,I]=l.applyToVertex(C,_,I,e));const P=w-c,z=M-x,D=S-b,R=C-c,F=_-x,O=I-b,j=f*O-F*v,E=v*R-O*p,B=p*F-R*f,H=P*j+z*E+D*B,N=H*H;if(N<=ce)continue;const W=d-c,G=h-x,A=m-b,L=(W*j+G*E+A*B)*H;if(L<0||L>N)continue;const V=G*D-z*A,k=A*P-D*W,U=W*z-P*G,$=(p*V+f*k+v*U)*H;if($<0||L+$>N)continue;const q=(R*V+F*k+O*U)/H;q>=0&&u(q,q,g?ae(P,z,D,R,F,O,ee):null,t)}}(t,r,0,c,l.indices,l.data,l.stride,s,a,n,i)}}const ee=(0,h.vt)();const te=(0,h.vt)(),re=(0,h.vt)(),oe=(0,h.vt)();function ae(e,t,r,o,a,n,i){return(0,d.hZ)(ie,e,t,r),(0,d.hZ)(se,o,a,n),(0,d.$A)(i,ie,se),(0,d.S8)(i,i),i}function ne(e){return(0,d.jb)(ie,e[1],e[0]),(0,d.jb)(se,e[2],e[0]),(0,d.$A)(ee,ie,se),(0,d.S8)(ee,ee),ee}const ie=(0,h.vt)(),se=(0,h.vt)(),le=1e3,ce=1e-7*1e-7,ue=(0,h.vt)(),de=[(0,h.vt)(),(0,h.vt)(),(0,h.vt)()];var he=r(16396),me=r(59907);class pe{constructor(e){this.layout=e}elementCount(e){return e.get("position").indices.length}write(e,t,r,o,a){null!=a&&(0,me.vJ)(r,o,this.layout,e,t,a)}}var fe=r(33442),ve=r(47724);function ge(e,t,r,o){xe.output=t.transparent?1:0,xe.polygonOffset=t.polygonOffset,xe.enableOITOffset=t.enableOITOffset;const a=(0,fe.s)(xe);if(!a)return e;const n=ye*a.units,i=(0,d.S8)(we,(0,d.jb)(we,o,r));return(t,r,o,s)=>{const l=(o?1-Math.abs((0,d.Om)(i,o)):0)*a.factor*be+n;return e(t,r+l,o,s)}}const xe=new ve.L,be=2e-5,ye=2e-6,we=(0,h.vt)();var Me=r(43616),Se=r(5482),Te=r(91429),Ce=r(91829),_e=r(4431),Ie=r(1843),Pe=r(72824),ze=r(13840),De=r(98958),Re=r(16943),Fe=r(33524),Oe=r(56133),je=r(4576);r(66289);var Ee=r(69622),Be=r(65529),He=r(32728);class Ne{constructor(e){this.localTransform=e.localTransform,this.globalTransform=e.globalTransform,this.modelOrigin=e.modelOrigin,this.model=e.instanceModel,this.modelNormal=e.instanceModelNormal,this.modelScaleFactors=e.modelScaleFactors,this.boundingSphere=e.boundingSphere,this.featureAttribute=e.getField("instanceFeatureAttribute",v.Eq),this.color=e.getField("instanceColor",v.XP),this.olidColor=e.getField("instanceOlidColor",v.XP),this.state=e.getField("state",v.SL),this.lodLevel=e.getField("lodLevel",v.SL)}}let We=class extends Ee.A{constructor(e,t){super(e),this.events=new Be.bk,this._capacity=0,this._size=0,this._next=0,this._highlightOptionsMap=new Map,this._highlightOptionsMapPrev=new Map,this._layout=function(e){return Ae(Ge.clone(),e).u8("state").u8("lodLevel")}(t),this._capacity=$e,this._buffer=this._layout.createBuffer(this._capacity),this._view=new Ne(this._buffer)}get capacity(){return this._capacity}get size(){return this._size}get view(){return this._view}addInstance(){this._size+1>this._capacity&&this._grow();const e=this._findSlot();return this._view.state.set(e,1),this._size++,this.events.emit("instances-changed"),e}removeInstance(e){const t=this._view.state;(0,Z.vA)(e>=0&&e<this._capacity&&!!(1&t.get(e)),"invalid instance handle"),this._getStateFlag(e,18)?this._setStateFlags(e,32):this.freeInstance(e),this.events.emit("instances-changed")}freeInstance(e){const t=this._view.state;(0,Z.vA)(e>=0&&e<this._capacity&&!!(1&t.get(e)),"invalid instance handle"),t.set(e,0),this._size--}setLocalTransform(e,t,r=!0){this._view.localTransform.setMat(e,t),r&&this.updateModelTransform(e)}getLocalTransform(e,t){this._view.localTransform.getMat(e,t)}setGlobalTransform(e,t,r=!0){this._view.globalTransform.setMat(e,t),r&&this.updateModelTransform(e)}getGlobalTransform(e,t){this._view.globalTransform.getMat(e,t)}updateModelTransform(e){const t=this._view,r=Le,o=Ve;t.localTransform.getMat(e,ke),t.globalTransform.getMat(e,Ue);const a=(0,l.lw)(Ue,Ue,ke);(0,d.hZ)(r,a[12],a[13],a[14]),t.modelOrigin.setVec(e,r),(0,i.z0)(o,a),t.model.setMat(e,o);const n=(0,He.wp)(Le,a);n.sort(),t.modelScaleFactors.set(e,0,n[1]),t.modelScaleFactors.set(e,1,n[2]),(0,i.B8)(o,o),(0,i.mg)(o,o),t.modelNormal.setMat(e,o),this._setStateFlags(e,64),this.events.emit("instance-transform-changed",{index:e})}getModelTransform(e,t){const r=this._view;r.model.getMat(e,Ve),r.modelOrigin.getVec(e,Le),t[0]=Ve[0],t[1]=Ve[1],t[2]=Ve[2],t[3]=0,t[4]=Ve[3],t[5]=Ve[4],t[6]=Ve[5],t[7]=0,t[8]=Ve[6],t[9]=Ve[7],t[10]=Ve[8],t[11]=0,t[12]=Le[0],t[13]=Le[1],t[14]=Le[2],t[15]=1}applyShaderTransformation(e,t){null!=this.shaderTransformation&&this.shaderTransformation.applyTransform(this,e,t)}getCombinedModelTransform(e,t){return this.getModelTransform(e,t),null!=this.shaderTransformation&&this.shaderTransformation.applyTransform(this,e,t),t}getCombinedLocalTransform(e,t){this._view.localTransform.getMat(e,t),null!=this.shaderTransformation&&this.shaderTransformation.applyTransform(this,e,t)}getCombinedMaxScaleFactor(e){let t=this._view.modelScaleFactors.get(e,1);return null!=this.shaderTransformation&&(this.shaderTransformation.scaleFactor(Le,this,e),t*=Math.max(Le[0],Le[1],Le[2])),t}getCombinedMedianScaleFactor(e){let t=this._view.modelScaleFactors.get(e,0);return null!=this.shaderTransformation&&(this.shaderTransformation.scaleFactor(Le,this,e),t*=function(e,t,r){return Math.max(Math.min(e,t),Math.min(Math.max(e,t),r))}(Le[0],Le[1],Le[2])),t}getModel(e,t){this._view.model.getMat(e,t)}setFeatureAttribute(e,t){this._view.featureAttribute?.setVec(e,t)}getFeatureAttribute(e,t){this._view.featureAttribute?.getVec(e,t)}setColor(e,t){this._view.color?.setVec(e,t)}setObjectAndLayerIdColor(e,t){this._view.olidColor?.setVec(e,t)}setVisible(e,t){t!==this.getVisible(e)&&(this._setStateFlag(e,4,t),this.events.emit("instance-visibility-changed",{index:e}))}getVisible(e){return this._getStateFlag(e,4)}setHighlight(e,t){const{_highlightOptionsMap:r}=this,o=r.get(e);t?t!==o&&(r.set(e,t),this._setStateFlag(e,8,!0),this.events.emit("instance-highlight-changed")):o&&(r.delete(e),this._setStateFlag(e,8,!1),this.events.emit("instance-highlight-changed"))}get highlightOptionsMap(){return this._highlightOptionsMap}getHighlightStateFlag(e){return this._getStateFlag(e,8)}geHighlightOptionsPrev(e){const t=this._highlightOptionsMapPrev.get(e)??null;return this._highlightOptionsMapPrev.delete(e),t}getHighlightName(e){const t=this.highlightOptionsMap.get(e)??null;return t?this._highlightOptionsMapPrev.set(e,t):this._highlightOptionsMapPrev.delete(e),t}getState(e){return this._view.state.get(e)}getLodLevel(e){return this._view.lodLevel.get(e)}countFlags(e){let t=0;for(let r=0;r<this._capacity;++r)this.getState(r)&e&&++t;return t}_setStateFlags(e,t){const r=this._view.state;t=r.get(e)|t,r.set(e,t)}_clearStateFlags(e,t){const r=this._view.state;t=r.get(e)&~t,r.set(e,t)}_setStateFlag(e,t,r){r?this._setStateFlags(e,t):this._clearStateFlags(e,t)}_getStateFlag(e,t){return!!(this._view.state.get(e)&t)}_grow(){this._capacity=Math.max($e,Math.floor(this._capacity*je.Ji)),this._buffer=this._layout.createBuffer(this._capacity).copyFrom(this._buffer),this._view=new Ne(this._buffer)}_findSlot(){const e=this._view.state;let t=this._next;for(;1&e.get(t);)t=t+1===this._capacity?0:t+1;return this._next=t+1===this._capacity?0:t+1,t}};(0,Se.Cg)([(0,Te.MZ)({constructOnly:!0})],We.prototype,"shaderTransformation",void 0),(0,Se.Cg)([(0,Te.MZ)()],We.prototype,"_size",void 0),(0,Se.Cg)([(0,Te.MZ)({readOnly:!0})],We.prototype,"size",null),We=(0,Se.Cg)([(0,Te.$K)("esri.views.3d.webgl-engine.lib.lodRendering.InstanceData")],We);const Ge=(0,Ie.BP)().mat4f64("localTransform").mat4f64("globalTransform").vec4f64("boundingSphere").vec3f64("modelOrigin").mat3f("instanceModel").mat3f("instanceModelNormal").vec2f("modelScaleFactors");function Ae(e,t){return t.instancedFeatureAttribute&&e.vec4f("instanceFeatureAttribute"),t.instancedColor&&e.vec4u8("instanceColor"),(0,Re.E)()&&e.vec4u8("instanceOlidColor"),e}const Le=(0,h.vt)(),Ve=(0,s.vt)(),ke=(0,c.vt)(),Ue=(0,c.vt)(),$e=64,qe=(0,Ie.BP)().vec3f("instanceModelOriginHi").vec3f("instanceModelOriginLo").mat3f("instanceModel").mat3f("instanceModelNormal");var Ze=r(74810),Ye=r(28491),Je=r(90644),Ke=r(49788);class Xe extends Pe.Zo{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=Ze.mb,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=2,this.instanced=!1,this.instancedFeatureAttribute=!1,this.instancedColor=!1,this.instanceColorEncodesAlphaIgnore=!1,this.emissiveStrengthFromSymbol=0,this.emissiveStrengthKHR=1,this.emissiveSource=1,this.emissiveBaseColor=h.uY,this.instancedDoublePrecision=!1,this.normalType=0,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=(0,h.CN)(.2,.2,.2),this.diffuse=(0,h.CN)(.8,.8,.8),this.externalColor=(0,Ce.fA)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,h.vt)(),this.hasSlicePlane=!1,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.modelTransformation=null,this.drivenOpacity=!1,this.writeDepth=!0,this.customDepthTest=0,this.textureAlphaMode=0,this.textureAlphaCutoff=Ke.Q,this.textureAlphaPremultiplied=!1,this.renderOccluded=1,this.testsTransparentRenderOrder=0,this.isDecoration=!1}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}}Pe.gy;let Qe=class extends De.w{constructor(e,t){let o=(0,_e.U)(rt(t));t.instanced&&t.instancedDoublePrecision&&(o=o.concat((0,_e.U)(function(e){return Ae(qe.clone(),e)}(t)))),super(e,t,o),this.shader=new ze.r(Ye.D,()=>r.e(5141).then(r.bind(r,5141))),this.ignoreUnused=!0}_makePipeline(e,t){const{output:r,transparent:o,cullFace:a,customDepthTest:n,hasOccludees:i}=e;return(0,Je.Ey)({blending:o?(0,Fe.Yf)(r,!1,e.emissionDimmingPass):null,culling:tt(e)?(0,Je.Xt)(a):null,depthTest:(0,Fe.mt)(r,et(n)),depthWrite:(0,Fe.z5)(e),colorWrite:Je.kn,stencilWrite:i?Oe.v0:null,stencilTest:i?t?Oe.Ax:Oe.cP:null,polygonOffset:(0,fe.s)(e)})}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e,t,r){return r?this._occludeePipelineState:super.getPipeline(e,t,r)}};function et(e){switch(e){case 1:return 515;case 0:case 3:return 513;case 2:return 516}}function tt(e){return 0!==e.cullFace||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}function rt(e){const t=(0,Ie.BP)().vec3f("position");return 1===e.normalType?t.vec2i16("normalCompressed",{glNormalized:!0}):t.vec3f("normal"),e.hasVertexTangents&&t.vec4f("tangent"),e.hasTextures&&t.vec2f16("uv0"),e.hasVertexColors&&t.vec4u8("color",{glNormalized:!0}),e.hasSymbolColors&&t.vec4u8("symbolColor"),!e.instanced&&(0,Re.E)()&&t.vec4u8("olidColor"),t}Qe=(0,Se.Cg)([(0,Te.$K)("esri.views.3d.webgl-engine.shaders.DefaultMaterialTechnique")],Qe);var ot=r(51976);class at extends ve.L{constructor(e){super(),this.spherical=e,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.pbrMode=0,this.cullFace=0,this.normalType=0,this.customDepthTest=0,this.emissionSource=0,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.instanced=!1,this.instancedDoublePrecision=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.receiveShadows=!1,this.hasShadowHighlights=!1,this.receiveAmbientOcclusion=!1,this.receiveGlobalIllumination=!1,this.textureAlphaPremultiplied=!1,this.instancedFeatureAttribute=!1,this.instancedColor=!1,this.writeDepth=!0,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0,this.draped=!1}get textureCoordinateType(){return this.hasTextures?1:0}get hasTextures(){return this.hasColorTexture||this.hasNormalTexture||this.hasMetallicRoughnessTexture||3===this.emissionSource||this.hasOcclusionTexture}get hasVVInstancing(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}(0,Se.Cg)([(0,ot.W)({count:4})],at.prototype,"alphaDiscardMode",void 0),(0,Se.Cg)([(0,ot.W)({count:3})],at.prototype,"doubleSidedMode",void 0),(0,Se.Cg)([(0,ot.W)({count:7})],at.prototype,"pbrMode",void 0),(0,Se.Cg)([(0,ot.W)({count:3})],at.prototype,"cullFace",void 0),(0,Se.Cg)([(0,ot.W)({count:3})],at.prototype,"normalType",void 0),(0,Se.Cg)([(0,ot.W)({count:3})],at.prototype,"customDepthTest",void 0),(0,Se.Cg)([(0,ot.W)({count:8})],at.prototype,"emissionSource",void 0),(0,Se.Cg)([(0,ot.W)()],at.prototype,"hasVertexColors",void 0),(0,Se.Cg)([(0,ot.W)()],at.prototype,"hasSymbolColors",void 0),(0,Se.Cg)([(0,ot.W)()],at.prototype,"hasVerticalOffset",void 0),(0,Se.Cg)([(0,ot.W)()],at.prototype,"hasColorTexture",void 0),(0,Se.Cg)([(0,ot.W)()],at.prototype,"hasMetallicRoughnessTexture",void 0),(0,Se.Cg)([(0,ot.W)()],at.prototype,"hasOcclusionTexture",void 0),(0,Se.Cg)([(0,ot.W)()],at.prototype,"hasNormalTexture",void 0),(0,Se.Cg)([(0,ot.W)()],at.prototype,"hasScreenSizePerspective",void 0),(0,Se.Cg)([(0,ot.W)()],at.prototype,"hasVertexTangents",void 0),(0,Se.Cg)([(0,ot.W)()],at.prototype,"hasOccludees",void 0),(0,Se.Cg)([(0,ot.W)()],at.prototype,"instanced",void 0),(0,Se.Cg)([(0,ot.W)()],at.prototype,"instancedDoublePrecision",void 0),(0,Se.Cg)([(0,ot.W)()],at.prototype,"hasModelTransformation",void 0),(0,Se.Cg)([(0,ot.W)()],at.prototype,"offsetBackfaces",void 0),(0,Se.Cg)([(0,ot.W)()],at.prototype,"hasVVSize",void 0),(0,Se.Cg)([(0,ot.W)()],at.prototype,"hasVVColor",void 0),(0,Se.Cg)([(0,ot.W)()],at.prototype,"receiveShadows",void 0),(0,Se.Cg)([(0,ot.W)()],at.prototype,"hasShadowHighlights",void 0),(0,Se.Cg)([(0,ot.W)()],at.prototype,"receiveAmbientOcclusion",void 0),(0,Se.Cg)([(0,ot.W)()],at.prototype,"receiveGlobalIllumination",void 0),(0,Se.Cg)([(0,ot.W)()],at.prototype,"textureAlphaPremultiplied",void 0),(0,Se.Cg)([(0,ot.W)()],at.prototype,"instancedFeatureAttribute",void 0),(0,Se.Cg)([(0,ot.W)()],at.prototype,"instancedColor",void 0),(0,Se.Cg)([(0,ot.W)()],at.prototype,"writeDepth",void 0),(0,Se.Cg)([(0,ot.W)()],at.prototype,"snowCover",void 0),(0,Se.Cg)([(0,ot.W)()],at.prototype,"hasColorTextureTransform",void 0),(0,Se.Cg)([(0,ot.W)()],at.prototype,"hasEmissionTextureTransform",void 0),(0,Se.Cg)([(0,ot.W)()],at.prototype,"hasNormalTextureTransform",void 0),(0,Se.Cg)([(0,ot.W)()],at.prototype,"hasOcclusionTextureTransform",void 0),(0,Se.Cg)([(0,ot.W)()],at.prototype,"hasMetallicRoughnessTextureTransform",void 0);var nt=r(57323);let it=class extends Qe{constructor(){super(...arguments),this.shader=new ze.r(nt.R,()=>r.e(2314).then(r.bind(r,39933)))}};it=(0,Se.Cg)([(0,Te.$K)("esri.views.3d.webgl-engine.shaders.RealisticTreeTechnique")],it);class st extends ot.K{constructor(){super(...arguments),this.receiveShadows=!0}}(0,Se.Cg)([(0,ot.W)()],st.prototype,"receiveShadows",void 0);class lt extends q.i{constructor(e,t){super(e,ut),this.materialType="default",this.supportsEdges=!0,this.intersectDraped=void 0,this.produces=new Map([[2,e=>(0,G.uw)(e)&&!this.transparent],[4,e=>(0,G.uw)(e)&&this.transparent&&this.parameters.writeDepth],[8,e=>(0,G.uw)(e)&&this.transparent&&!this.parameters.writeDepth]]),this._layout=rt(this.parameters),this._configuration=new at(t.spherical)}isVisibleForOutput(e){return 5!==e&&7!==e&&6!==e||this.parameters.castShadows}get visible(){const{layerOpacity:e,colorMixMode:t,opacity:r,externalColor:o}=this.parameters;return e*("replace"===t?1:r)*("ignore"===t||isNaN(o[3])?1:o[3])>=Ke.Q}get _hasEmissiveBase(){return!!this.parameters.emissiveTextureId||!(0,d.t2)(this.parameters.emissiveBaseColor,h.uY)}get emissions(){return this.parameters.emissiveStrength>0&&(0===this.parameters.emissiveSource&&this._hasEmissiveBase||1===this.parameters.emissiveSource)?this.transparent?2:1:0}updateConfiguration(e){super.updateConfiguration(e);const{parameters:t,_configuration:r}=this;r.hasNormalTexture=t.hasNormalTexture,r.hasColorTexture=t.hasColorTexture,r.hasMetallicRoughnessTexture=t.hasMetallicRoughnessTexture,r.hasOcclusionTexture=t.hasOcclusionTexture;const{treeRendering:o,doubleSided:a,doubleSidedType:n}=t;r.hasVertexTangents=!o&&t.hasVertexTangents,r.instanced=t.instanced,r.instancedDoublePrecision=t.instancedDoublePrecision,r.hasVVColor=!!t.vvColor,r.hasVVSize=!!t.vvSize,r.hasVerticalOffset=null!=t.verticalOffset,r.hasScreenSizePerspective=null!=t.screenSizePerspective,r.hasSlicePlane=t.hasSlicePlane,r.alphaDiscardMode=t.textureAlphaMode,r.normalType=o?0:t.normalType,r.transparent=this.transparent,r.enableOITOffset=e.enableOITOffset,r.writeDepth=t.writeDepth,r.customDepthTest=t.customDepthTest??0,r.hasOccludees=e.hasOccludees,r.cullFace=t.hasSlicePlane?0:t.cullFace,r.hasModelTransformation=!o&&null!=t.modelTransformation,r.hasVertexColors=t.hasVertexColors,r.hasSymbolColors=t.hasSymbolColors,r.doubleSidedMode=o?2:a&&"normal"===n?1:a&&"winding-order"===n?2:0,r.instancedFeatureAttribute=t.instancedFeatureAttribute,r.instancedColor=t.instancedColor,(0,G._o)(e.output)?(r.receiveShadows=t.receiveShadows,r.hasShadowHighlights=function(e,t){return e.receiveShadows&&null!=t.shadowHighlight?.getTexture()}(r,e),r.receiveAmbientOcclusion=t.receiveAmbientOcclusion&&null!=e.ssao,r.receiveGlobalIllumination=t.receiveAmbientOcclusion&&e.globalIlluminationEnabled):r.receiveShadows=r.hasShadowHighlights=r.receiveAmbientOcclusion=!1,r.textureAlphaPremultiplied=!!t.textureAlphaPremultiplied,r.pbrMode=t.usePBR?t.isSchematic?2:1:0,r.emissionSource=t.emissionSource,r.offsetBackfaces=!(!this.transparent||!t.offsetTransparentBackfaces),r.snowCover=e.snowCover>0,r.hasColorTextureTransform=!!t.colorTextureTransformMatrix,r.hasNormalTextureTransform=!!t.normalTextureTransformMatrix,r.hasEmissionTextureTransform=!!t.emissiveTextureTransformMatrix,r.hasOcclusionTextureTransform=!!t.occlusionTextureTransformMatrix,r.hasMetallicRoughnessTextureTransform=!!t.metallicRoughnessTextureTransformMatrix}intersect(e,t,r,o,a,n){if(null!=this.parameters.verticalOffset){const e=r.camera;(0,d.hZ)(vt,t[12],t[13],t[14]);let n=null;switch(r.viewingMode){case 1:n=(0,d.S8)(pt,vt);break;case 2:n=(0,d.C)(pt,mt)}const i=(0,d.Re)(gt,vt,e.eye),s=(0,d.Bw)(i),l=(0,d.hs)(i,i,1/s);let c=null;this.parameters.screenSizePerspective&&(c=(0,d.Om)(n,l));const u=(0,Me.kE)(e,s,this.parameters.verticalOffset,c??0,this.parameters.screenSizePerspective,null);(0,d.hs)(n,n,u),(0,d.ei)(ft,n,r.transform.inverseRotation),o=(0,d.Re)(dt,o,ft),a=(0,d.Re)(ht,a,ft)}n=ge(n,this._configuration,o,a),K(e,r,o,a,(0,he.ou)(r.verticalOffset),n)}createGLMaterial(e){return new ct(e)}createBufferWriter(){return new pe(this._layout)}get transparent(){return function(e){const{drivenOpacity:t,opacity:r,externalColor:o,layerOpacity:a,texture:n,textureId:i,textureAlphaMode:s,colorMixMode:l}=e,c=o[3];return t||r<1&&"replace"!==l||c<1&&"ignore"!==l||a<1||(null!=n||null!=i)&&1!==s&&2!==s&&"replace"!==l}(this.parameters)}}class ct extends k{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){this._material.setParameters({receiveShadows:e.shadowMap.enabled});const t=this._material.parameters;this.updateTexture(t.textureId);const r=e.camera.viewInverseTransposeMatrix;return(0,d.hZ)(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.getTechnique(t.treeRendering?it:Qe,e)}}class ut extends Xe{constructor(){super(...arguments),this.treeRendering=!1,this.useIndexing=!1,this.hasVertexTangents=!1}get hasNormalTexture(){return!this.treeRendering&&!!this.normalTextureId}get hasColorTexture(){return!!this.textureId}get hasMetallicRoughnessTexture(){return!this.treeRendering&&!!this.metallicRoughnessTextureId}get hasOcclusionTexture(){return!this.treeRendering&&!!this.occlusionTextureId}get emissiveStrength(){return this.emissiveStrengthFromSymbol*this.emissiveStrengthKHR}get emissionSource(){return null!=this.emissiveTextureId&&0===this.emissiveSource?3:0===this.emissiveSource?2:1}get hasTextures(){return this.hasColorTexture||this.hasNormalTexture||this.hasMetallicRoughnessTexture||3===this.emissionSource||this.hasOcclusionTexture}}const dt=(0,h.vt)(),ht=(0,h.vt)(),mt=(0,h.fA)(0,0,1),pt=(0,h.vt)(),ft=(0,h.vt)(),vt=(0,h.vt)(),gt=(0,h.vt)(),xt=()=>D.A.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");class bt{constructor(e,t,r){this.resource=e,this.textures=t,this.usedMemory=r}}function yt(e){const t=e.params,r=t.topology;let o=!0;switch(t.vertexAttributes||(xt().warn("Geometry must specify vertex attributes"),o=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t?.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(xt().warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),o=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(xt().warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),o=!1)):(xt().warn(`Indexed geometry does not specify face indices for '${r}' attribute`),o=!1)}}else xt().warn("Indexed geometries must specify faces"),o=!1;break}default:xt().warn(`Unsupported topology '${r}'`),o=!1}e.params.material||(xt().warn("Geometry requires material"),o=!1);const a=e.params.vertexAttributes;for(const e in a)a[e].values||(xt().warn("Geometries with externally defined attributes are not yet supported"),o=!1);return o}function wt(e){const t=(0,m.Ie)();return e.forEach(e=>{const r=e.boundingInfo;null!=r&&((0,m.iT)(t,r.bbMin),(0,m.iT)(t,r.bbMax))}),t}function Mt(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;default:return 0}}function St(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Tt=new j.A(1,2,"wosr");async function Ct(e,t){const s=function(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:{fileType:e.match(/(.*\.(json|json\.gz))$/)?"wosr":"unknown",url:e,specifiedLodIndex:null}}((0,a.EM)(e));if("wosr"===s.fileType){const e=await(t.cache?t.cache.loadWOSR(s.url,t):async function(e,t){const r=await async function(e,t){const r=await(0,P.Ke)((0,I.A)(e,t));if(r.ok)return r.value.data;(0,O.QP)(r.error),function(e){throw new z.A("",`Request for object resource failed: ${e}`)}(r.error)}(e,t),o=await async function(e,t){const r=new Array;for(const o in e){const a=e[o],n=a.images[0].data;if(!n){xt().warn("Externally referenced texture data is not yet supported");continue}const i=a.encoding+";base64,"+n,s="/textureDefinitions/"+o,l="rgba"===a.channels?a.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:1!==Mt(l)},u=t?.disableTextures?Promise.resolve(null):(0,B.D)(i,t);r.push(u.then(e=>({refId:s,image:e,parameters:c,alphaChannelUsage:l})))}const o=await Promise.all(r),a={};for(const e of o)a[e.refId]=e;return a}(r.textureDefinitions??{},t);let a=0;for(const e in o)if(o.hasOwnProperty(e)){const t=o[e];a+=t?.image?t.image.width*t.image.height*4:0}return new bt(r,o,a+(0,R.Qh)(r))}(s.url,t)),{engineResources:r,referenceBoundingBox:o}=function(e,t){const r=new Array,o=new Array,a=new Array,n=new F,i=e.resource,s=j.A.parse(i.version||"1.0","wosr");Tt.validate(s);const l=i.model.name,c=i.model.geometries,u=i.materialDefinitions??{},d=e.textures;let m=0;const p=new Map;for(let e=0;e<c.length;e++){const i=c[e];if(!yt(i))continue;const s=St(i),l=i.params.vertexAttributes,f=[],v=e=>{if("PerAttributeArray"===i.params.topology)return null;const t=i.params.faces;for(const r in t)if(r===e)return t[r].values;return null},g=l.position,x=g.values.length/g.valuesPerElement;for(const e in l){const t=l[e],r=t.values,o=v(e)??(0,E.tM)(x);f.push([e,new H.n(r,o,t.valuesPerElement,!0)])}const b=s.texture,y=d&&d[b];if(y&&!p.has(b)){const{image:e,parameters:t}=y,r=new W.h(e,t);o.push(r),p.set(b,r)}const w=p.get(b),M=w?w.id:void 0,S=s.material;let T=n.get(S,b);if(null==T){const e=u[S.slice(S.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=y?Mt(y.alphaChannelUsage):void 0,o={ambient:(0,h.ci)(e.diffuse),diffuse:(0,h.ci)(e.diffuse),opacity:1-(e.transparency||0),textureAlphaMode:r,textureAlphaCutoff:.33,textureId:M,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:y?.parameters.preMultiplyAlpha??!1};t?.materialParameters&&Object.assign(o,t.materialParameters),T=new lt(o,t),n.set(S,b,T)}a.push(T);const C=new N.V(T,f);m+=f.find(e=>"position"===e[0])?.[1]?.indices.length??0,r.push(C)}return{engineResources:[{name:l,stageResources:{textures:o,materials:a,geometries:r},pivotOffset:i.model.pivotOffset,numberOfVertices:m,lodThreshold:null}],referenceBoundingBox:wt(r)}}(e,t);return{lods:r,referenceBoundingBox:o,isEsriSymbolResource:!1,isWosr:!0}}let p;if(t.cache)p=await t.cache.loadGLTF(s.url,t,!!t.usePBR,!!t.useEmissive);else{const{loadGLTF:e}=await r.e(1698).then(r.bind(r,51698));p=await e(new y.R,s.url,t,t.usePBR,t.useEmissive)}const{engineResources:S,referenceBoundingBox:C}=function(e,t,r){const a=e.model,s=e.meta,p=a.meta?.ESRI_proxyEllipsoid,y=s.isEsriSymbolResource&&null!=p&&"EsriRealisticTreesStyle"===s.ESRI_webstyle;y&&!e.customMeta.esriTreeRendering&&(e.customMeta.esriTreeRendering=!0,function(e,t){for(let r=0;r<e.model.lods.length;++r){const a=e.model.lods[r];for(const n of a.parts){const a=n.attributes.normal;if(null==a)return;const i=n.attributes.position,s=i.count,u=(0,h.vt)(),m=(0,h.vt)(),p=(0,h.vt)(),f=new Float32Array(4*s),g=new Float32Array(3*s),x=(0,l.B8)((0,c.vt)(),n.transform);let b=0,y=0;for(let l=0;l<s;l++){i.getVec(l,m),a.getVec(l,u),(0,d.Z0)(m,m,n.transform),(0,d.Re)(p,m,t.center),(0,d.Qr)(p,p,t.radius);const s=p[2],c=(0,d.Bw)(p),h=Math.min(.45+.55*c*c,1)**o.Tf;(0,d.Qr)(p,p,t.radius),null!==x&&(0,d.Z0)(p,p,x),(0,d.S8)(p,p),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,d.Cc)(p,p,u,s>-1?.2:Math.min(-4*s-3.8,1)),g[b]=p[0],g[b+1]=p[1],g[b+2]=p[2],b+=3,f[y]=h,f[y+1]=h,f[y+2]=h,f[y+3]=1,y+=4}n.attributes.normal=new v.xs(g.buffer),n.attributes.color=new v.Eq(f.buffer)}}}(e,p));const S=!!t.usePBR,C=s.isEsriSymbolResource?{usePBR:S,isSchematic:!1,treeRendering:y,mrrFactors:Ze.SY}:{usePBR:S,isSchematic:!1,treeRendering:!1,mrrFactors:Ze.mb},I={...t.materialParameters,treeRendering:y},P=new Array,z=new Map,D=new Map,R=a.lods.length,F=(0,m.Ie)();return a.lods.forEach((e,s)=>{const l=!0===t.skipHighLods&&(R>1&&0===s||R>3&&1===s)||!1===t.skipHighLods&&null!=r&&s!==r;if(l&&0!==s)return;const c=new _(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach(e=>{const r=l?new lt({},t):function(e,t,r,a,n,i,s,l,c){const d=e.materials.get(t.material);if(null==d)return null;const{normal:h,color:m,texCoord0:p,tangent:f}=t.attributes,v=t.material+(h?"_normal":"")+(m?"_color":"")+(p?"_texCoord0":"")+(f?"_tangent":""),g=null!=t.attributes.texCoord0,x=null!=t.attributes.normal,b=function(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":case null:case void 0:return 1}}(d.alphaMode);if(!i.has(v)){if(g){const t=(t,r=!1,o=!1)=>{if(null!=t&&!s.has(t)){const a=e.textures.get(t);if(a){const e=a.data,n=r&&!(0,M.x3)(e)?l.compressionOptions:void 0;s.set(t,new W.h((0,M.x3)(e)?e.data:e,{...a.parameters,preMultiplyAlpha:!(0,M.x3)(e)&&o,encoding:(0,M.x3)(e)?e.encoding:void 0,compressionOptions:n}))}}},r=1!==b&&!c;t(d.colorTexture,r,1!==b),t(d.normalTexture),t(d.occlusionTexture,!0),t(d.emissiveTexture),t(d.metallicRoughnessTexture,!0)}const r=(0,o.xV)(d.color[0]),h=(0,o.xV)(d.color[1]),m=(0,o.xV)(d.color[2]),p=null!=d.colorTexture&&g?s.get(d.colorTexture):null,f=(0,Ze.Jr)(d),y=null!=d.normalTextureTransform?.scale?d.normalTextureTransform?.scale:u.Un;i.set(v,new lt({...a,customDepthTest:1,textureAlphaMode:b,textureAlphaCutoff:d.alphaCutoff,diffuse:[r,h,m],ambient:[r,h,m],opacity:"OPAQUE"===d.alphaMode?1:d.opacity,doubleSided:d.doubleSided,doubleSidedType:"winding-order",cullFace:d.doubleSided?0:2,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:x?0:2,castShadows:!0,receiveShadows:d.receiveShadows,receiveAmbientOcclusion:d.receiveAmbientOcclusion,textureId:null!=p?p.id:void 0,colorMixMode:d.colorMixMode,normalTextureId:null!=d.normalTexture&&g?s.get(d.normalTexture).id:void 0,textureAlphaPremultiplied:null!=p&&!!p.parameters.preMultiplyAlpha,occlusionTextureId:null!=d.occlusionTexture&&g?s.get(d.occlusionTexture).id:void 0,emissiveTextureId:null!=d.emissiveTexture&&g?s.get(d.emissiveTexture).id:void 0,metallicRoughnessTextureId:null!=d.metallicRoughnessTexture&&g?s.get(d.metallicRoughnessTexture).id:void 0,emissiveBaseColor:[d.emissiveFactor[0],d.emissiveFactor[1],d.emissiveFactor[2]],emissiveStrengthKHR:null!=d.emissiveStrengthKHR?d.emissiveStrengthKHR:1,emissiveStrengthFromSymbol:null!=n.emissiveStrengthFromSymbol?n.emissiveStrengthFromSymbol:void 0,mrrFactors:f?Ze.Bt:[d.metallicFactor,d.roughnessFactor,a.mrrFactors[2]],isSchematic:f,colorTextureTransformMatrix:T(d.colorTextureTransform),normalTextureTransformMatrix:T(d.normalTextureTransform),scale:[y[0],y[1]],occlusionTextureTransformMatrix:T(d.occlusionTextureTransform),emissiveTextureTransformMatrix:T(d.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:T(d.metallicRoughnessTextureTransform),...n},l))}const y=i.get(v);if(r.stageResources.materials.push(y),g){const e=e=>{null!=e&&r.stageResources.textures.push(s.get(e))};e(d.colorTexture),e(d.normalTexture),e(d.occlusionTexture),e(d.emissiveTexture),e(d.metallicRoughnessTexture)}return y}(a,e,c,C,I,z,D,t,y),{geometry:d,vertexCount:h}=function(e,t){const r=e.attributes.position.count,o=(0,w.x)(e.indices||r,e.primitiveType),a=f(3*r),{typedBuffer:s,typedBufferStride:l}=e.attributes.position;(0,g.a)(a,s,e.transform,3,l);const c=[["position",new H.n(a,o,3,!0)]];if(null!=e.attributes.normal){const t=f(3*r),{typedBuffer:a,typedBufferStride:s}=e.attributes.normal;(0,i.Ge)(_t,e.transform),(0,g.b)(t,a,_t,3,s),(0,n.or)(_t)&&(0,g.n)(t,t),c.push(["normal",new H.n(t,o,3,!0)])}if(null!=e.attributes.tangent){const t=f(4*r),{typedBuffer:a,typedBufferStride:s}=e.attributes.tangent;(0,i.z0)(_t,e.transform),(0,x.t)(t,a,_t,4,s),(0,n.or)(_t)&&(0,g.n)(t,t,4),c.push(["tangent",new H.n(t,o,4,!0)])}if(null!=e.attributes.texCoord0){const t=f(2*r),{typedBuffer:a,typedBufferStride:n}=e.attributes.texCoord0;(0,b.a)(t,a,2,n),c.push(["uv0",new H.n(t,o,2,!0)])}const u=e.attributes.color;if(null!=u){const t=new Uint8Array(4*r);4===u.elementCount?u instanceof v.Eq?(0,x.b)(t,u,1,255):(u instanceof v.XP||u instanceof v.Uz)&&(0,x.b)(t,u,1/255,255):(t.fill(255),u instanceof v.xs?(0,g.f)(t,u.typedBuffer,1,255,4,u.typedBufferStride):(e.attributes.color instanceof v.eI||e.attributes.color instanceof v.nS)&&(0,g.f)(t,u.typedBuffer,1/255,255,4,e.attributes.color.typedBufferStride)),c.push(["color",new H.n(t,o,4,!0)])}return{geometry:new N.V(t,c),vertexCount:r}}(e,r??new lt({},t)),p=d.boundingInfo;null!=p&&0===s&&((0,m.iT)(F,p.bbMin),(0,m.iT)(F,p.bbMax)),null!=r&&(c.stageResources.geometries.push(d),c.numberOfVertices+=h)}),l||P.push(c)}),{engineResources:P,referenceBoundingBox:F}}(p,t,s.specifiedLodIndex);return{lods:S,referenceBoundingBox:C,isEsriSymbolResource:p.meta.isEsriSymbolResource,isWosr:!1}}const _t=(0,s.vt)()},32728(e,t,r){r.d(t,{YH:()=>s,hG:()=>n,nu:()=>l,wp:()=>i}),r(34727);var o=r(35522),a=r(51850);function n(e){const t=e[0]*e[0]+e[4]*e[4]+e[8]*e[8],r=e[1]*e[1]+e[5]*e[5]+e[9]*e[9],o=e[2]*e[2]+e[6]*e[6]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}function i(e,t){const r=Math.sqrt(t[0]*t[0]+t[4]*t[4]+t[8]*t[8]),a=Math.sqrt(t[1]*t[1]+t[5]*t[5]+t[9]*t[9]),n=Math.sqrt(t[2]*t[2]+t[6]*t[6]+t[10]*t[10]);return(0,o.hZ)(e,r,a,n),e}function s(e,t,r){r=r||e;const a=(0,o.Om)(e,t);(0,o.hZ)(r,e[0]-a*t[0],e[1]-a*t[1],e[2]-a*t[2]),(0,o.S8)(r,r)}function l(e,t,r,n=(0,a.vt)()){const i=(0,o.Bw)(e),s=(0,o.Bw)(t),l=(0,o.Om)(e,t)/(i*s);if(l<.9999999999999999){const a=Math.acos(l),d=((1-r)*i+r*s)/Math.sin(a),h=d/i*Math.sin((1-r)*a),m=d/s*Math.sin(r*a);return(0,o.hs)(c,e,h),(0,o.hs)(u,t,m),(0,o.WQ)(n,c,u)}return(0,o.Cc)(n,e,t,r)}(0,a.vt)(),(0,a.vt)(),(0,a.vt)();const c=(0,a.vt)(),u=(0,a.vt)()},46686(e,t,r){r.d(t,{o:()=>a});var o=r(31821);function a(e,t){t&&e.varyings.add("linearDepth","float",{invariant:!0}),e.vertex.code.add(o.H`
    void forwardLinearDepth(float _linearDepth) { ${(0,o.If)(t,"linearDepth = _linearDepth;")} }
  `)}},33120(e,t,r){r.d(t,{i$:()=>i,xJ:()=>n}),r(46686),r(28682);var o=r(77108),a=r(31821);function n(e){e.vertex.uniforms.add(new o.E("nearFar",e=>e.camera.nearFar))}function i(e){e.vertex.code.add(a.H`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}},32680(e,t,r){r.d(t,{M:()=>a});var o=r(31821);function a(e){e.vertex.code.add(o.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},49255(e,t,r){function o(e){return function(e){return c(e)||4===e}(e)||function(e){return 5===(t=e)||6===t||7===t||8===e||9===e;var t}(e)}function a(e){return 10===e||11===e}function n(e){return l(e)||a(e)}function i(e){return 1===e}function s(e){return 2===e}function l(e){return 0===e||function(e){return i(e)||s(e)}(e)}function c(e){return function(e){return l(e)||a(e)}(e)||u(e)}function u(e){return 3===e}r.d(t,{Ex:()=>a,Rb:()=>s,_$:()=>i,_o:()=>l,eh:()=>u,gr:()=>c,i3:()=>n,uw:()=>o})},76597(e,t,r){r.d(t,{d:()=>n});var o=r(33120),a=r(31821);function n(e){(0,o.i$)(e),e.vertex.code.add(a.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(a.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},24321(e,t,r){r.d(t,{v:()=>n});var o=r(43519),a=r(31821);function n(e,t){t.instancedColor?(e.attributes.add("instanceColor","vec4"),e.vertex.include(o.WD),e.vertex.include(o.Y1),e.vertex.include(o.ML),e.vertex.code.add(a.H`
      MaskedColor applyInstanceColor(MaskedColor color) {
        return multiplyMaskedColors( color, createMaskedFromUInt8NaNColor(${"instanceColor"}));
      }
    `)):e.vertex.code.add(a.H`MaskedColor applyInstanceColor(MaskedColor color) {
return color;
}`)}},2585(e,t,r){r.d(t,{B:()=>g});var o=r(77690),a=r(29242),n=r(9093),i=r(35522),s=r(51850),l=r(26425),c=r(77949),u=r(23205),d=r(31821),h=r(35644),m=r(74333);class p extends m.n{constructor(e,t,r){super(e,"mat4",1,(o,a,n)=>o.setUniformMatrix4fv(e,t(a,n),r))}}var f=r(28449);r(65786).Y;const v=(0,a.vt)();function g(e,t){const{hasModelTransformation:r,instancedDoublePrecision:a,instanced:s,output:m,hasVertexTangents:g}=t;r&&(e.vertex.uniforms.add(new p("model",e=>e.modelTransformation??n.zK)),e.vertex.uniforms.add(new h.k("normalLocalOriginFromModel",e=>((0,o.Ge)(v,e.modelTransformation??n.zK),v)))),s&&a&&(e.attributes.add("instanceModelOriginHi","vec3"),e.attributes.add("instanceModelOriginLo","vec3"),e.attributes.add("instanceModel","mat3"),e.attributes.add("instanceModelNormal","mat3"));const b=e.vertex;a&&(b.include(l.u),b.uniforms.add(new u.d("viewOriginHi",e=>(0,f.Zo)((0,i.hZ)(x,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),x)),new u.d("viewOriginLo",e=>(0,f.jA)((0,i.hZ)(x,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),x)))),b.code.add(d.H`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?a?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":a?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${a?d.H`
          // Issue: (should be resolved now with invariant position) https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -instanceModelOriginHi, -instanceModelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),b.code.add(d.H`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?a?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":a?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),4===m&&((0,c.S7)(b),b.code.add(d.H`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?a?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":a?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),g&&b.code.add(d.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?a?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":a?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const x=(0,s.vt)()},96336(e,t,r){r.d(t,{Y:()=>a});var o=r(31821);function a(e,t){switch(e.fragment.code.add(o.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`),t.normalType){case 1:e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(o.H`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case 0:e.attributes.add("normal","vec3"),e.vertex.code.add(o.H`vec3 normalModel() {
return normal;
}`);break;default:t.normalType;case 2:case 3:}}},39014(e,t,r){r.d(t,{K:()=>s});var o=r(43519),a=r(31821),n=r(93588),i=r(43616);function s(e,t){e.varyings.add("colorMixMode","int"),e.varyings.add("opacityMixMode","int"),e.vertex.uniforms.add(new n.c("symbolColorMixMode",e=>i.Um[e.colorMixMode])),t.hasSymbolColors?(e.vertex.include(o.WD),e.vertex.include(o.Y1),e.vertex.include(o.ML),e.attributes.add("symbolColor","vec4"),e.vertex.code.add(a.H`
    MaskedColor applySymbolColor(MaskedColor color) {
      return multiplyMaskedColors(color, createMaskedFromUInt8NaNColor(${"symbolColor"}));
    }
  `)):e.vertex.code.add(a.H`MaskedColor applySymbolColor(MaskedColor color) {
return color;
}`),e.vertex.code.add(a.H`
    void forwardColorMixMode(bvec4 mask) {
      colorMixMode = mask.r ? ${a.H.int(i.Um.ignore)} : symbolColorMixMode;
      opacityMixMode = mask.a ? ${a.H.int(i.Um.ignore)} : symbolColorMixMode;
    }
  `)}},53466(e,t,r){r.d(t,{U:()=>a});var o=r(31821);function a(e,t){switch(t.textureCoordinateType){case 1:return e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(o.H`void forwardTextureCoordinates() { vuv0 = uv0; }`);case 2:return e.attributes.add("uv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuv0","vec2"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(o.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:t.textureCoordinateType;case 0:return void e.vertex.code.add(o.H`void forwardTextureCoordinates() {}`);case 3:return}}},92700(e,t,r){r.d(t,{c:()=>a});var o=r(31821);function a(e,t){t.hasVertexColors?(e.attributes.add("color","vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(o.H`void forwardVertexColor() { vColor = color; }`)):e.vertex.code.add(o.H`void forwardVertexColor() {}`)}},72824(e,t,r){r.d(t,{Mh:()=>c,Zo:()=>u,gy:()=>d});var o=r(29242),a=r(91829),n=r(96336),i=r(28682),s=r(31821),l=r(35644);function c(e,t){const{vertex:r,varyings:o}=e;switch(t.normalType){case 0:case 1:e.include(n.Y,t),o.add("vNormalWorld","vec3"),o.add("vNormalView","vec3"),r.uniforms.add(new l.k("transformNormalViewFromGlobal",e=>e.transformNormalViewFromGlobal)),r.code.add(s.H`void forwardNormal() {
vNormalWorld = normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case 2:e.vertex.code.add(s.H`void forwardNormal() {}`);break;default:t.normalType;case 3:}}class u extends i.dO{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,o.vt)()}}class d extends i.EM{constructor(){super(...arguments),this.toMapSpace=(0,a.vt)()}}},28682(e,t,r){r.d(t,{EM:()=>l,dO:()=>s});var o=r(29242),a=r(51850),n=(r(26425),r(40710),r(33079),r(31821),r(74333));n.n,n.n,r(35644),r(58029),r(63761);var i=r(65786);class s extends i.Y{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,a.vt)(),this.transformWorldFromViewTL=(0,a.vt)(),this.transformViewFromCameraRelativeRS=(0,o.vt)()}}class l extends i.Y{constructor(){super(...arguments),this.transformWorldFromModelRS=(0,o.vt)(),this.transformWorldFromModelTH=(0,a.vt)(),this.transformWorldFromModelTL=(0,a.vt)(),this.transformationDrawId=0}}},99208(e,t,r){r.d(t,{r:()=>i});var o=r(53466),a=r(31821);function n(e){e.fragment.code.add(a.H`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function i(e,t){const{textureCoordinateType:r}=t;if(0===r||3===r)return;e.include(o.U,t);const i=2===r;i&&e.include(n),e.fragment.code.add(a.H`
    vec4 textureLookup(sampler2D tex, vec2 uv) {
      return ${i?"textureAtlasLookup(tex, uv, vuvRegion)":"texture(tex, uv)"};
    }
  `)}},35640(e,t,r){r.d(t,{Ge:()=>c}),r(90629);var o=r(78955),a=r(91829),n=r(52587),i=r(77949),s=r(71988),l=r(31821);function c(e,t){const r=e.vertex;t.hasVerticalOffset?(function(e){e.uniforms.add(new s.E("verticalOffset",(e,t)=>{const{minWorldLength:r,maxWorldLength:a,screenLength:n}=e.verticalOffset,i=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),s=t.camera.pixelRatio||1;return(0,o.hZ)(u,n*s,i,r,a)}))}(r),t.hasScreenSizePerspective&&(e.include(n.Y6),(0,n.OH)(r),(0,i.yu)(e.vertex,t)),r.code.add(l.H`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?l.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:l.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?l.H`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:l.H`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(l.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const u=(0,a.vt)()},40261(e,t,r){r.d(t,{E:()=>g});var o=r(33120),a=r(68317),n=r(76597),i=r(96336),s=r(36782),l=r(53466),c=r(72824),u=r(31821);function d(e,t){switch(t.output){case 5:case 6:case 7:case 8:e.fragment.code.add(u.H`float _calculateFragDepth(const in float depth) {
const float slope_scale = 2.0;
const float bias = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + slope_scale * m + bias;
}
void outputDepth(float _linearDepth){
float fragDepth = _calculateFragDepth(_linearDepth);
gl_FragDepth = fragDepth;
}`);break;case 9:e.fragment.code.add(u.H`void outputDepth(float _linearDepth){
gl_FragDepth = _linearDepth;
}`)}}var h=r(3871),m=r(43259),p=r(58614),f=r(77949),v=r(63761);function g(e,t){const{vertex:r,fragment:g,varyings:x}=e,{hasColorTexture:b,alphaDiscardMode:y}=t,w=b&&1!==y,{output:M,normalType:S,hasColorTextureTransform:T}=t;switch(M){case 3:(0,f.NB)(r,t),e.include(n.d),g.include(a.HQ,t),e.include(l.U,t),w&&g.uniforms.add(new v.N("tex",e=>e.texture)),r.main.add(u.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(p.S,t),g.main.add(u.H`
        discardBySlice(vpos);
        ${(0,u.If)(w,u.H`vec4 texColor = texture(tex, ${T?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}`);break;case 5:case 6:case 7:case 8:case 11:(0,f.NB)(r,t),e.include(n.d),e.include(l.U,t),e.include(m.A,t),e.include(d,t),g.include(a.HQ,t),e.include(s.g,t),(0,o.xJ)(e),x.add("depth","float",{invariant:!0}),w&&g.uniforms.add(new v.N("tex",e=>e.texture)),r.main.add(u.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(p.S,t),g.main.add(u.H`
        discardBySlice(vpos);
        ${(0,u.If)(w,u.H`vec4 texColor = texture(tex, ${T?"colorUV":"vuv0"});
               discardOrAdjustAlpha(texColor);`)}
        ${11===M?u.H`outputObjectAndLayerIdColor();`:u.H`outputDepth(depth);`}`);break;case 4:{(0,f.NB)(r,t),e.include(n.d),e.include(i.Y,t),e.include(c.Mh,t),e.include(l.U,t),e.include(m.A,t),w&&g.uniforms.add(new v.N("tex",e=>e.texture)),2===S&&x.add("vPositionView","vec3",{invariant:!0});const o=0===S||1===S;r.main.add(u.H`
        vpos = getVertexInLocalOriginSpace();
        ${o?u.H`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:u.H`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),g.include(a.HQ,t),e.include(p.S,t),g.main.add(u.H`
        discardBySlice(vpos);
        ${(0,u.If)(w,u.H`vec4 texColor = texture(tex, ${T?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}

        ${2===S?u.H`vec3 normal = screenDerivativeNormal(vPositionView);`:u.H`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case 10:(0,f.NB)(r,t),e.include(n.d),e.include(l.U,t),e.include(m.A,t),w&&g.uniforms.add(new v.N("tex",e=>e.texture)),r.main.add(u.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),g.include(a.HQ,t),e.include(p.S,t),e.include(h.Q,t),g.main.add(u.H`
        discardBySlice(vpos);
        ${(0,u.If)(w,u.H`vec4 texColor = texture(tex, ${T?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}},22911(e,t,r){r.d(t,{NL:()=>f});var o=r(34727),a=r(49255),n=r(99208),i=r(65261),s=r(40710),l=r(33079),c=r(28421),u=r(20304),d=r(31821),h=r(15976),m=r(63761),p=r(66211);function f(e,t){if(!(0,a._o)(t.output))return;e.fragment.include(i.C);const{emissionSource:r,hasEmissiveTextureTransform:f,bindType:v}=t,g=3===r||4===r||5===r;g&&(e.include(n.r,t),e.fragment.uniforms.add(1===v?new m.N("texEmission",e=>e.textureEmissive):new h.o("texEmission",e=>e.textureEmissive)));const x=2===r||g;x&&e.fragment.uniforms.add(1===v?new l.t("emissiveBaseColor",e=>e.emissiveBaseColor):new s.W("emissiveBaseColor",e=>e.emissiveBaseColor));const b=0!==r;if(b&&7!==r&&6!==r&&4!==r&&5!==r){const t=e=>(0,o.qE)(e??0,0,p.bS);e.fragment.uniforms.add(1===v?new u.m("emissiveStrength",e=>t(e.emissiveStrength)):new c.J("emissiveStrength",e=>t(e.emissiveStrength)))}const y=7===r,w=5===r,M=1===r||6===r||y;e.fragment.code.add(d.H`
    vec4 getEmissions(vec3 symbolColor) {
      vec4 emissions = ${x?w?"emissiveSource == 0 ? vec4(emissiveBaseColor, 1.0): vec4(linearizeGamma(symbolColor), 1.0)":"vec4(emissiveBaseColor, 1.0)":M?y?"emissiveSource == 0 ? vec4(0.0): vec4(linearizeGamma(symbolColor), 1.0)":"vec4(linearizeGamma(symbolColor), 1.0)":"vec4(0.0)"};
      ${(0,d.If)(g,`${(0,d.If)(w,`if(emissiveSource == 0) {\n              vec4 emissiveFromTex = textureLookup(texEmission, ${f?"emissiveUV":"vuv0"});\n              emissions *= vec4(linearizeGamma(emissiveFromTex.rgb), emissiveFromTex.a);\n           }`,`vec4 emissiveFromTex = textureLookup(texEmission, ${f?"emissiveUV":"vuv0"});\n           emissions *= vec4(linearizeGamma(emissiveFromTex.rgb), emissiveFromTex.a);`)}\n        emissions.a = emissions.rgb == vec3(0.0) ? 0.0: emissions.a;`)}
      ${(0,d.If)(b,`emissions.rgb *= emissiveStrength * ${d.H.float(1)};`)}
      return emissions;
    }
  `)}},52540(e,t,r){r.d(t,{E:()=>s,l:()=>l});var o=r(37585),a=r(48163),n=r(77108),i=r(31821);function s(e){e.uniforms.add(new n.E("zProjectionMap",e=>l(e.camera))),e.code.add(i.H`float linearizeDepth(float depth, vec2 zProjectionConstants) {
float depthNdc = depth * 2.0 - 1.0;
return -(zProjectionConstants[0] / (depthNdc + zProjectionConstants[1] + 1e-7));
}
float linearizeDepth(float depth) {
return linearizeDepth(depth, zProjectionMap);
}`),e.code.add(i.H`float delinearizeDepth(float linearDepth) {
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
float depthNdc = (-c1/linearDepth) - c2 - 1e-7;
float depthNonlinear01 = (depthNdc + 1.0 ) / 2.0;
return depthNonlinear01;
}`),e.code.add(i.H`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
return texelFetch(depthTexture, iuv, 0).r;
}`),e.code.add(i.H`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`)}function l(e){const t=e.projectionMatrix;return(0,o.hZ)(c,t[14],t[10])}const c=(0,a.vt)()},92573(e,t,r){r.d(t,{V:()=>i});var o=r(52540),a=r(77108),n=r(31821);function i(e){e.include(o.E),e.uniforms.add(new a.E("zProjectionMapLastFrame",e=>(0,o.l)(e.reprojection.lastFrameCamera))),e.code.add(n.H`float linearDepthFromTextureLastFrame(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv), zProjectionMapLastFrame);
}`)}},77695(e,t,r){r.d(t,{J:()=>h});var o=r(29242),a=r(48163),n=r(99208),i=r(68259),s=r(47286),l=r(31821),c=r(35644),u=r(15976),d=r(63761);function h(e,t){return function(e,t){const r=e.fragment,{hasVertexTangents:h,doubleSidedMode:m,hasNormalTexture:p,textureCoordinateType:f,bindType:v,hasNormalTextureTransform:g}=t;h?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),2===m?r.code.add(l.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(l.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add(l.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),p&&0!==f&&(e.include(n.r,t),r.uniforms.add(1===v?new d.N("normalTexture",e=>e.textureNormal):new u.o("normalTexture",e=>e.textureNormal)),g&&(r.uniforms.add(1===v?new s.G("scale",e=>e.scale??a.Un):new i.t("scale",e=>e.scale??a.Un)),r.uniforms.add(new c.k("normalTextureTransformMatrix",e=>e.normalTextureTransformMatrix??o.zK))),r.code.add(l.H`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),g&&r.code.add(l.H`mat3 normalRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),r.code.add(l.H`return tangentSpace * rawNormal;
}`))}(e,t)}},71651(e,t,r){r.d(t,{n:()=>F});var o=r(31821),a=r(12791),n=r(5482),i=r(34727),s=r(97768),l=r(36708),c=r(78659),u=r(91429),d=r(37585),h=r(2016),m=r(48375);var p=r(15581),f=r(13840),v=r(98958),g=r(95774),x=r(90644);let b=class extends v.w{constructor(){super(...arguments),this.shader=new f.r(g.S,()=>r.e(1285).then(r.bind(r,91285)))}initializePipeline(){return(0,x.Ey)({colorWrite:x.kn})}};b=(0,n.Cg)([(0,u.$K)("esri.views.3d.webgl-engine.effects.ssao.SSAOBlurTechnique")],b);var y=r(48163),w=r(65786);class M extends w.Y{constructor(){super(...arguments),this.projScale=1}}class S extends M{constructor(){super(...arguments),this.intensity=1}}class T extends w.Y{}class C extends T{constructor(){super(...arguments),this.blurSize=(0,y.vt)()}}let _=class extends v.w{constructor(){super(...arguments),this.shader=new f.r(p.S,()=>r.e(6122).then(r.bind(r,86122)))}initializePipeline(){return(0,x.Ey)({colorWrite:x.kn})}};_=(0,n.Cg)([(0,u.$K)("esri.views.3d.webgl-engine.effects.ssao.SSAOTechnique")],_);var I=r(63907),P=r(21231),z=r(67171);let D=class extends m.A{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=h.OG.AMBIENT_ILLUMINATION,this._enableTime=(0,c.l5)(0),this._passParameters=new S,this._drawParameters=new C}initialize(){const e=Uint8Array.from(atob("eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM"),e=>e.charCodeAt(0)),t=new z.R(32);t.wrapMode=33071,t.pixelFormat=6407,t.wrapMode=10497,t.hasMipmap=!0,this._passParameters.noiseTexture=new P.A(this.renderingContext,t,e),this.addHandles((0,l.wB)(()=>this.view.stage.renderer.hasAmbientIllumination,()=>this._enableTime=(0,c.l5)(0)))}destroy(){this._passParameters.noiseTexture=(0,s.WD)(this._passParameters.noiseTexture)}render(e){const t=e.find(({name:e})=>"normals"===e),r=t?.getTexture(),o=t?.getTexture(I.nI);if(!r||!o)return;const a=this.techniques.getCompiled(_),n=this.techniques.getCompiled(b);if(!a||!n)return this._enableTime=(0,c.l5)(performance.now()),void this.requestRender(1);0===this._enableTime&&(this._enableTime=(0,c.l5)(performance.now()));const s=this.renderingContext,l=this.view.qualitySettings.fadeDuration,u=this.bindParameters,m=u.camera,f=m.relativeElevation,v=(0,i.qE)((5e5-f)/2e5,0,1),g=l>0?Math.min(l,performance.now()-this._enableTime)/l:1,x=g*v;this._passParameters.normalTexture=r,this._passParameters.depthTexture=o,this._passParameters.projScale=1/m.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*R/(0,p.g)(m)**6*x;const y=m.fullViewport[2],w=m.fullViewport[3],M=this.fboCache.acquire(y,w,"ssao input",2);s.bindFramebuffer(M.fbo),s.setViewport(0,0,y,w),s.bindTechnique(a,u,this._passParameters,this._drawParameters),s.screen.draw();const S=Math.round(y/2),T=Math.round(w/2),C=this.fboCache.acquire(S,T,"ssao blur",0);s.bindFramebuffer(C.fbo),this._drawParameters.colorTexture=M.getTexture(),(0,d.hZ)(this._drawParameters.blurSize,0,2/w),s.bindTechnique(n,u,this._passParameters,this._drawParameters),s.setViewport(0,0,S,T),s.screen.draw(),M.release();const P=this.fboCache.acquire(S,T,h.OG.AMBIENT_ILLUMINATION,0);return s.bindFramebuffer(P.fbo),s.setViewport(0,0,y,w),s.setClearColor(1,1,1,0),s.clear(16384),this._drawParameters.colorTexture=C.getTexture(),(0,d.hZ)(this._drawParameters.blurSize,2/y,0),s.bindTechnique(n,u,this._passParameters,this._drawParameters),s.setViewport(0,0,S,T),s.screen.draw(),s.setViewport4fv(m.fullViewport),C.release(),g<1&&this.requestRender(2),P}};(0,n.Cg)([(0,u.MZ)()],D.prototype,"consumes",void 0),(0,n.Cg)([(0,u.MZ)()],D.prototype,"produces",void 0),D=(0,n.Cg)([(0,u.$K)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],D);const R=.5;function F(e,t){t.receiveAmbientOcclusion?(e.uniforms.add(new a.x("ssaoTex",e=>e.ssao?.getTexture())),e.constants.add("blurSizePixelsInverse","float",.5),e.code.add(o.H`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):e.code.add(o.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},32971(e,t,r){r.d(t,{kA:()=>A,a8:()=>W,eU:()=>G});var o=r(74333);class a extends o.n{constructor(e,t,r,o){super(e,"float",0,(t,a)=>t.setUniform1fv(e,r(a),o),t)}}var n=r(31821);function i(e,t){e.uniforms.add(new a("shR",9,({lighting:e})=>e.sh.r),new a("shG",9,({lighting:e})=>e.sh.g),new a("shB",9,({lighting:e})=>e.sh.b)),e.code.add(n.H`vec3 calculateAmbientIrradiance(vec3 normal) {
vec3 ambientLight = 0.282095 * vec3(shR[0], shG[0], shB[0]);
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
vec4 lightingAmbientSH_R1 = vec4(shR[1], shR[2], shR[3], shR[4]);
vec4 lightingAmbientSH_G1 = vec4(shG[1], shG[2], shG[3], shG[4]);
vec4 lightingAmbientSH_B1 = vec4(shB[1], shB[2], shB[3], shB[4]);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
vec4 lightingAmbientSH_R2 = vec4(shR[5], shR[6], shR[7], shR[8]);
vec4 lightingAmbientSH_G2 = vec4(shG[5], shG[6], shG[7], shG[8]);
vec4 lightingAmbientSH_B2 = vec4(shB[5], shB[6], shB[7], shB[8]);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight;
}`),1!==t.pbrMode&&2!==t.pbrMode||e.code.add(n.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance()
{
vec3 ambientLight = 1.2 * (0.282095 * vec3(shR[0], shG[0], shB[0])) - 0.2;
return ambientLight *= skyTransmittance;
}`)}var s=r(71651),l=r(65261),c=r(98619),u=r(22393),d=r(89786),h=r(32976),m=r(12791),p=r(5482),f=r(97768),v=r(36708),g=r(91429),x=r(37585),b=r(2016),y=r(48375),w=r(587),M=r(52516),S=r(13840),T=r(98958),C=r(90644);let _=class extends T.w{constructor(){super(...arguments),this.shader=new S.r(M.a,()=>r.e(2013).then(r.bind(r,42013)))}initializePipeline(){return(0,C.Ey)({colorWrite:C.kn})}};_=(0,p.Cg)([(0,g.$K)("esri.views.3d.webgl-engine.effects.globalIllumination.GlobalIlluminationBlurTechnique")],_);let I=class extends T.w{constructor(){super(...arguments),this.shader=new S.r(w.a,()=>r.e(9794).then(r.bind(r,89794)))}initializePipeline(){return(0,C.Ey)({colorWrite:C.kn})}};I=(0,p.Cg)([(0,g.$K)("esri.views.3d.webgl-engine.effects.globalIllumination.GlobalIlluminationTechnique")],I);var P=r(51976);class z extends P.K{constructor(){super(...arguments),this.hasColor=!0,this.hasEmission=!1,this.rayMarchMaxReach=w.d,this.rayMarchMaxSteps=w.b,this.useProjectedRayLength=!0,this.clampRayToScreen=!1}}(0,p.Cg)([(0,P.W)()],z.prototype,"hasColor",void 0),(0,p.Cg)([(0,P.W)()],z.prototype,"hasEmission",void 0);var D=r(50704);let R=class extends T.w{constructor(){super(...arguments),this.shader=new S.r(D.a,()=>r.e(7891).then(r.bind(r,37891)))}initializePipeline(){return(0,C.Ey)({colorWrite:C.kn})}};R=(0,p.Cg)([(0,g.$K)("esri.views.3d.webgl-engine.effects.globalIllumination.GlobalIlluminationUpscaleTechnique")],R);var F=r(63907);let O=class extends y.A{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=b.OG.AMBIENT_ILLUMINATION,this._passParameters=new w.G,this._drawParameters=new M.G,this._drawParametersUpscale=new D.G,this._maxFrames=256,this._lowQualityResolutionScale=.25,this._configuration=new z,this._globalIllumination=null,this._isGlobalIlluminationUpdate=!1,this._resetBuffer=!1}initialize(){this.addHandles((0,v.wB)(()=>this.view.stage.renderer.hasGlobalIllumination,()=>{this._resetAccumulatedFrames(),this._requestRender()},v.pc))}destroy(){this._globalIllumination=(0,f.Gz)(this._globalIllumination)}resetAccumulatedFrames(){this._isGlobalIlluminationUpdate||this._resetAccumulatedFrames()}render(e){if(this._passParameters.accumulatedFrames>=this._maxFrames)return this._globalIllumination?.retain(),this._globalIllumination;const t=e.find(({name:e})=>"normals"===e),r=t?.getTexture(),o=t?.getTexture(F.nI),a=this._mode;if(!r||!o)return this._emptyOutput;if(0===a)return this._resetBuffer=!1,this._emptyOutput;if(!this._canRender)return this._resetBuffer=!1,this._requestRender(),this._emptyOutput;const n=this.bindParameters;this._configuration.hasEmission=!!n.reprojection.lastFrameEmission;const i=this.techniques.getCompiled(I,this._configuration),s=this.techniques.getCompiled(_),l=1===a,c=l?this._lowQualityResolutionScale:1,u=l?this.techniques.getCompiled(R):null;if(!i||!s||l&&!u)return this._requestRender(),this._emptyOutput;const d=this.renderingContext,{camera:h}=n;this._passParameters.normalTexture=r,this._passParameters.depthTexture=o,this._passParameters.projScale=1/h.computeScreenPixelSizeAtDist(1),this._passParameters.scaleGlobalIllumination=c;const{fullWidth:m,fullHeight:p}=h,f=Math.max(1,Math.floor(m*c)),v=Math.max(1,Math.floor(p*c)),g=this.fboCache.acquire(f,v,"global illumination input").acquireColor(F.yI,0);d.bindFramebuffer(g.fbo),d.setViewport(0,0,f,v),d.bindTechnique(i,n,this._passParameters,this._drawParameters),d.screen.draw();const y=g.obtainAttachment(F.yI),w=Math.max(1,Math.round(f/1)),M=Math.max(1,Math.round(v/1)),S=this.fboCache.acquire(w,M,"global illumination blur horizontal");d.bindFramebuffer(S.fbo),this._drawParameters.texture=g.getTexture(),this._drawParameters.weightTexture=y.attachment,(0,x.hZ)(this._drawParameters.blurSize,0,1/v),d.bindTechnique(s,n,this._passParameters,this._drawParameters),d.setViewport(0,0,w,M),d.screen.draw(),g.release();const T=l?"global illumination blur vertical":b.OG.AMBIENT_ILLUMINATION,C=this.fboCache.acquire(w,M,T);d.bindFramebuffer(C.fbo),d.setViewport(0,0,w,M),d.setClearColor(1,1,1,0),d.clear(16384),this._drawParameters.texture=S.getTexture(),this._drawParameters.weightTexture=y.attachment,(0,x.hZ)(this._drawParameters.blurSize,1/w,0),d.bindTechnique(s,n,this._passParameters,this._drawParameters),d.setViewport(0,0,w,M),d.screen.draw(),S.release(),C.attachColor(y,F.yI),y.release();let P=C;return u&&(P=this.fboCache.acquire(m,p,b.OG.AMBIENT_ILLUMINATION).acquireColor(F.yI,0),d.bindFramebuffer(P.fbo),d.setViewport(0,0,m,p),d.setClearColor(1,1,1,0),d.clear(16384),this._drawParametersUpscale.colorTexture=C.getTexture(),this._drawParametersUpscale.weightTexture=C.getTexture(F.yI),d.bindTechnique(u,n,this._passParameters,this._drawParametersUpscale),d.screen.draw(),C.release()),d.setViewport4fv(h.fullViewport),this._passParameters.temporalSampleFrame=(this._passParameters.temporalSampleFrame+1)%64,++this._passParameters.accumulatedFrames,this._cacheGlobalIllumination(P),this._passParameters.accumulatedFrames<this._maxFrames&&this._requestRender(),P}_requestRender(){this._isGlobalIlluminationUpdate=!0,this.requestRender(1),this._isGlobalIlluminationUpdate=!1}_cacheGlobalIllumination(e){this._globalIllumination!==e&&(this._globalIllumination=(0,f.Gz)(this._globalIllumination),this._globalIllumination=e,this._globalIllumination.retain())}get _emptyOutput(){const e=this.renderingContext,{fullWidth:t,fullHeight:r}=this.bindParameters.camera,o=this.fboCache.acquire(t,r,b.OG.AMBIENT_ILLUMINATION).acquireColor(F.yI,0);return e.bindFramebuffer(o.fbo),e.setViewport(0,0,t,r),e.clearBuffer(0,[0,0,0,1]),e.clearBuffer(1,[0,0,0,0]),o}get _canRender(){const{reprojection:e,hasEmission:t,globalIllumination:r}=this.bindParameters;return!(!e.lastFrameColor||t&&!e.lastFrameEmission||!e.lastFrameDepth||!r||this._resetBuffer)}get _mode(){const{hasGlobalIlluminationHighQuality:e,hasGlobalIllumination:t}=this.view.stage.renderer;return e?2:t?1:0}_resetAccumulatedFrames(){this._passParameters.accumulatedFrames=0,this._globalIllumination=(0,f.Gz)(this._globalIllumination)}get test(){const e=this;return{passParameters:this._passParameters,configuration:this._configuration,get maxFrames(){return e._maxFrames},set maxFrames(t){e._maxFrames=t},get lowQualityResolutionScale(){return e._lowQualityResolutionScale},set lowQualityResolutionScale(t){e._lowQualityResolutionScale=t},get mode(){return e._mode},restartAccumulation:()=>{this._resetAccumulatedFrames(),this._passParameters.temporalSampleFrame=0,this._resetBuffer=!0,this._requestRender()}}}};function j(e,t){t.receiveGlobalIllumination?(e.uniforms.add(new h.o("hasGlobalIlluminationTexture",e=>null!=e.globalIllumination),new m.x("globalIlluminationTexture",e=>e.globalIllumination?.getTexture())),e.constants.add("blurSizePixelsInverse","float",1),e.code.add(n.H`vec3 readGlobalIlluminationOcclusionInverse() {
if (!hasGlobalIlluminationTexture) {
return vec3(1.0);
}
ivec2 texel = ivec2(gl_FragCoord.xy * blurSizePixelsInverse);
return vec3(texelFetch(globalIlluminationTexture, texel, 0).a);
}
vec3 readGlobalIlluminationOcclusion() {
return 1.0 - readGlobalIlluminationOcclusionInverse();
}
vec4 readGlobalIlluminationEmissionInverse() {
if (!hasGlobalIlluminationTexture) {
return vec4(1.0);
}
ivec2 texel = ivec2(gl_FragCoord.xy * blurSizePixelsInverse);
return 1.0 - vec4(texelFetch(globalIlluminationTexture, texel, 0).rgb, 0.0);
}
vec4 readGlobalIlluminationEmission() {
return max((1.0 - readGlobalIlluminationEmissionInverse() - 0.01) / 0.99, 0.0);
}`)):e.code.add(n.H`vec3 readGlobalIlluminationOcclusionInverse() { return vec3(1.0); }
vec3 readGlobalIlluminationOcclusion() { return vec3(0.0); }
vec4 readGlobalIlluminationEmissionInverse() { return vec4(1.0); }
vec4 readGlobalIlluminationEmission() { return vec4(0.0); }`)}(0,p.Cg)([(0,g.MZ)()],O.prototype,"consumes",void 0),(0,p.Cg)([(0,g.MZ)()],O.prototype,"produces",void 0),O=(0,p.Cg)([(0,g.$K)("esri.views.3d.webgl-engine.effects.globalIllumination.GlobalIllumination")],O);var E=r(33094),B=r(57226);function H(e){e.code.add(n.H`float mapChannel(float x, vec2 p) {
if((x < p.x) && (p.x == 0.0) || !(x < p.x) && (p.x == 1.0)) {
return 0.0;
}
float result = (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
return max(result, 0.0);
}`),e.code.add(n.H`vec3 blackLevelSoftCompression(vec3 color, float averageAmbientRadiance) {
vec2 p = vec2(0.02, 0.0075) * averageAmbientRadiance;
return vec3(mapChannel(color.x, p), mapChannel(color.y, p), mapChannel(color.z, p));
}`)}function N(e){e.code.add(n.H`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}`),e.code.add(n.H`vec3 tonemapKhronosNeutral(vec3 color) {
const float startCompression = 0.76;
const float desaturation = 0.15;
float peak = max(color.r, max(color.g, color.b));
if (peak < startCompression) {
return color;
}
float d = 1.0 - startCompression;
float newPeak = 1.0 - d * d / (peak + d - startCompression);
color *= newPeak / peak;
float g = 1.0 - 1.0 / (desaturation * (peak - newPeak) + 1.0 );
return mix(color, vec3(newPeak), g);
}`)}function W(e){e.constants.add("ambientBoostFactor","float",B.uH)}function G(e){e.uniforms.add(new E.U("lightingGlobalFactor",e=>e.lighting.globalFactor))}function A(e,t){const{pbrMode:r,spherical:o,hasColorTexture:a,receiveGlobalIllumination:m}=t;e.include(l.C),e.include(j,t),e.include(s.n,t),0!==r&&e.include(u.c,t),e.include(i,t),e.include(d.p),e.include(N,t);const p=!(2===r&&!a);p&&e.include(H),W(e),G(e),(0,c.Gc)(e),e.code.add(n.H`
    float additionalDirectedAmbientLight(float lightAlignment) {
      return smoothstep(0.0, 1.0, clamp(lightAlignment * 2.5, 0.0, 1.0));
    }

    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float lightAlignment = dot(${o?n.H`normalize(vPosWorld)`:n.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(lightAlignment * 2.5, 0.0, 1.0));
    }
  `),(0,c.O4)(e),e.code.add(n.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`);const f=m?"globalIlluminationOcclusion":"ssao",v=m?.75:1,g=m?1.5:1;switch(r){case 0:case 4:case 3:e.include(c.Vt),e.code.add(n.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld) * (1.0 - ssao);
vec3 albedoLinear = linearizeGamma(albedo);
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return delinearizeGamma(outColor);
}`);break;case 1:case 2:{const r=m?.35:.2;e.code.add(n.H`
        const float fillLightIntensity = 0.25;
        const float horizonLightDiffusion = 0.4;
        const float additionalAmbientIrradianceFactor = 0.02;
        const float groundReflectance = ${n.H.float(r)};

        vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight,
                                      vec3 viewDirection, vec3 upDirection, vec3 mrr, float additionalAmbientIrradiance) {
          PBRShadingInfo inputs;
          calculatePBRInputs(inputs, normal, viewDirection, upDirection, albedo, mrr);

          ${(0,n.If)(m,n.H`vec3 globalIlluminationOcclusion = min(1.2 * readGlobalIlluminationOcclusion(), 1.0);`)}
      `),t.useFillLights?e.uniforms.add(new h.o("hasFillLights",e=>e.enableFillLights)):e.constants.add("hasFillLights","bool",!1),e.code.add(n.H`
        vec3 ambientDir = vec3(5.0 * upDirection[1] - upDirection[0] * upDirection[2], - 5.0 * upDirection[0] - upDirection[2] * upDirection[1], upDirection[1] * upDirection[1] + upDirection[0] * upDirection[0]);
        ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));

        inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;

        // Calculate the irradiance components: sun, fill lights and the sky.
        vec3 mainLightIrradianceComponent = ${n.H.float(v)} * inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
        vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
        // calculate ambient irradiance for localView and additionalLight for globalView
        vec3 ambientLightIrradianceComponent = ${n.H.float(g)} * calculateAmbientIrradiance(normal) * (1.0 - ${f}) + additionalLight;

        // Assemble the overall irradiance of the sky that illuminates the surface
        inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
        // Assemble the overall irradiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky irradiance by the groundReflectance
        inputs.groundIrradianceToSurface = groundReflectance * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
      `),e.uniforms.add(new E.U("lightingSpecularStrength",e=>e.lighting.mainLight.specularStrength),new E.U("lightingEnvironmentStrength",e=>e.lighting.mainLight.environmentStrength)).code.add(n.H`
        vec3 horizonRingDir = inputs.RdotUP * upDirection - inputs.reflectedView;
        vec3 horizonRingH = normalize(horizonRingDir - viewDirection);
        inputs.NdotH_Horizon = dot(normal, horizonRingH);

        vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
        vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;

        // calculateAmbientRadiance for localView and additionalLight for global view
        vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance() * (1.0 - ${f}) + additionalLight;
        float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotUP + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));

        // Assemble the overall radiance of the sky that illuminates the surface
        inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;

        // Assemble the overall radiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky radiance by the groundReflectance
        inputs.groundRadianceToSurface = 0.5 * groundReflectance * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;

        // Calculate average ambient radiance - This is used in the gamut mapping process to determine the black level for compression
        inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + groundReflectance);
      `),e.code.add(n.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent;

        ${(0,n.If)(m,n.H`
        vec3 globalIlluminationEmission = 2.25 * (0.75 * inputs.albedoLinear + 0.25) * readGlobalIlluminationEmission().rgb;
        outColorLinear += globalIlluminationEmission;`)}

      ${p?n.H`vec3 adjustedOutColorLinear = blackLevelSoftCompression(outColorLinear, inputs.averageAmbientRadiance);`:n.H`vec3 adjustedOutColorLinear = max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance);`}

        return delinearizeGamma(adjustedOutColorLinear);
      }
    `);break}case 5:case 6:{const t=m?.35:.5,r=m?.75:1,o=m?1.5:1;(0,c.Gc)(e),(0,c.O4)(e),e.code.add(n.H`
      const float roughnessTerrain = 0.5;
      const float specularityTerrain = ${n.H.float(t)};

      vec3 evaluatePBRSimplifiedLighting(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDirection, vec3 upDirection) {
        PBRShadingInfo inputs;
        calculateSimplifiedInputs(inputs, normal, viewDirection, upDirection, albedo);

        ${(0,n.If)(m,n.H`vec3 globalIlluminationOcclusion = min(1.2 * readGlobalIlluminationOcclusion(), 1.0);`)}

        vec3 mainLightIrradianceComponent = ${n.H.float(r)} * (1.0 - shadow) * inputs.NdotL * mainLightIntensity;
        vec3 ambientLightIrradianceComponent = ${n.H.float(o)} * calculateAmbientIrradiance(normal) * (1.0 - ${f}) + additionalLight;
        vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;

        vec3 indirectDiffuse = ((1.0 - inputs.NdotUP) * mainLightIrradianceComponent + (1.0 + inputs.NdotUP ) * ambientSky) * 0.5;
        vec3 outDiffColor = inputs.albedoLinear * (1.0 - inputs.f0) * indirectDiffuse / PI;

        vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, roughnessTerrain) * mainLightIntensity;
        vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, inputs.NdotV);
        vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
        vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;

        vec3 outColorLinear = outDiffColor + specularComponent;

        ${(0,n.If)(m,n.H`
        vec3 globalIlluminationEmission = 2.25 * (0.75 * inputs.albedoLinear + 0.25) * readGlobalIlluminationEmission().rgb;
        outColorLinear += globalIlluminationEmission;`)}

        return delinearizeGamma(outColorLinear);
      }
      `);break}}}},65261(e,t,r){r.d(t,{C:()=>n});var o=r(40876),a=r(31821);function n(e){e.constants.add("GAMMA","float",o.Tf).constants.add("INV_GAMMA","float",o.iw).code.add(a.H`vec3 delinearizeGamma(vec3 color) {
return pow(color, vec3(INV_GAMMA));
}
vec4 delinearizeGamma(vec4 color) {
return vec4(delinearizeGamma(color.rgb), color.a);
}
vec3 linearizeGamma(vec3 color) {
return pow(color, vec3(GAMMA));
}`)}},72885(e,t,r){r.d(t,{Q:()=>a});var o=r(31821);function a(e){e.fragment.code.add(o.H`
    float globalIlluminationNormalSimilarityWeight(vec3 sampleNormal, vec3 centerNormal) {
      return clamp(1.0 - ${o.H.float(15.3)} * length(sampleNormal - centerNormal), 0.0, 1.0);
    }

    float globalIlluminationDepthNormalCorrection(vec3 encodedNormal) {
      vec3 decodedNormal = normalize(encodedNormal * 2.0 - 1.0);
      return pow(max((1.0 - abs(decodedNormal.x)) * (1.0 - abs(decodedNormal.y)), 0.01), ${o.H.float(5)});
    }

    float globalIlluminationDepthSharpness(float projScale, float depth) {
      return ${o.H.float(-.05)} * projScale / depth;
    }

    float globalIlluminationDepthSharpness(float projScale, float depth, vec3 encodedNormal) {
      return globalIlluminationDepthSharpness(projScale, depth) * globalIlluminationDepthNormalCorrection(encodedNormal);
    }
  `)}},98619(e,t,r){r.d(t,{Gc:()=>n,O4:()=>i,Vt:()=>s});var o=r(23205),a=r(31821);function n(e){e.uniforms.add(new o.d("mainLightDirection",e=>e.lighting.mainLight.direction))}function i(e){e.uniforms.add(new o.d("mainLightIntensity",e=>e.lighting.mainLight.intensity))}function s(e){n(e),i(e),e.code.add(a.H`vec3 applyShading(vec3 shadingNormal, float shadow) {
float dotVal = clamp(dot(shadingNormal, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}},62602(e,t,r){r.d(t,{r:()=>a});var o=r(31821);function a(e,t){const r=e.fragment;switch(r.code.add(o.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case 0:r.code.add(o.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case 1:r.code.add(o.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case 2:r.code.add(o.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:t.doubleSidedMode;case 3:}}},22393(e,t,r){r.d(t,{c:()=>s});var o=r(31821);function a(e){e.code.add(o.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG) {
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.code.add(o.H`float integratedRadiance(float cosTheta2, float roughness) {
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.code.add(o.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness) {
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var n=r(65261),i=r(89786);function s(e,t){e.include(n.C),e.include(i.p),1!==t.pbrMode&&2!==t.pbrMode&&5!==t.pbrMode&&6!==t.pbrMode||(e.code.add(o.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),e.code.add(o.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),e.code.add(o.H`struct PBRShadingInfo
{
float NdotV;
float NdotL;
float LdotH;
float NdotUP;
float RdotUP;
float NdotAmbDir;
float NdotH_Horizon;
float NdotH;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
vec3 reflectedView;
float averageAmbientRadiance;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),e.code.add(o.H`void calculateCommonInputs(out PBRShadingInfo inputs, vec3 normal, vec3 viewDirection, vec3 upDirection, vec3 albedo) {
vec3 h = normalize(mainLightDirection - viewDirection);
inputs.NdotV = clamp(abs(dot(normal, -viewDirection)), 0.001, 1.0);
inputs.NdotUP = clamp(dot(normal, upDirection), -1.0, 1.0);
inputs.reflectedView = normalize(reflect(-viewDirection, normal));
inputs.RdotUP = clamp(dot(inputs.reflectedView, upDirection), -1.0, 1.0);
inputs.albedoLinear = linearizeGamma(albedo);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
}`)),1!==t.pbrMode&&2!==t.pbrMode||(e.include(a),e.code.add(o.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotUP);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotUP, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),e.code.add(o.H`void calculatePBRInputs(out PBRShadingInfo inputs, vec3 normal, vec3 viewDirection, vec3 upDirection, vec3 albedo, vec3 mrr) {
calculateCommonInputs(inputs, normal, viewDirection, upDirection, albedo);
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);
inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);
}`)),5!==t.pbrMode&&6!==t.pbrMode||e.code.add(o.H`const vec3 fresnelReflectionSimplified = vec3(0.04);
void calculateSimplifiedInputs(out PBRShadingInfo inputs, vec3 normal, vec3 viewDirection, vec3 upDirection, vec3 albedo) {
calculateCommonInputs(inputs, normal, viewDirection, upDirection, albedo);
float lightness = 0.3 * inputs.albedoLinear[0] + 0.5 * inputs.albedoLinear[1] + 0.2 * inputs.albedoLinear[2];
inputs.f0 = (0.85 * lightness + 0.15) * fresnelReflectionSimplified;
inputs.f90 =  vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
}`)}},59469(e,t,r){r.d(t,{_:()=>c});var o=r(99208),a=r(40710),n=r(33079),i=r(31821),s=r(15976),l=r(63761);function c(e,t){const r=t.pbrMode,c=e.fragment;if(2!==r&&0!==r&&1!==r)return void c.code.add(i.H`void applyPBRFactors() {}`);if(0===r)return void c.code.add(i.H`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(2===r)return void c.code.add(i.H`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);const{hasMetallicRoughnessTexture:u,hasMetallicRoughnessTextureTransform:d,hasOcclusionTexture:h,hasOcclusionTextureTransform:m,bindType:p}=t;(u||h)&&e.include(o.r,t),c.code.add(i.H`vec3 mrr;
float occlusion;`),u&&c.uniforms.add(1===p?new l.N("texMetallicRoughness",e=>e.textureMetallicRoughness):new s.o("texMetallicRoughness",e=>e.textureMetallicRoughness)),h&&c.uniforms.add(1===p?new l.N("texOcclusion",e=>e.textureOcclusion):new s.o("texOcclusion",e=>e.textureOcclusion)),c.uniforms.add(1===p?new n.t("mrrFactors",e=>e.mrrFactors):new a.W("mrrFactors",e=>e.mrrFactors)),c.code.add(i.H`
    ${(0,i.If)(u,i.H`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${(0,i.If)(h,"void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }")}

    float getBakedOcclusion() {
      return ${h?"occlusion":"1.0"};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${(0,i.If)(u,`applyMetallicRoughness(${d?"metallicRoughnessUV":"vuv0"});`)}
      ${(0,i.If)(h,`applyOcclusion(${m?"occlusionUV":"vuv0"});`)}
    }
  `)}(r(74810),r(65786)).Y},32482(e,t,r){r.d(t,{LA:()=>M,QH:()=>w}),r(51850);var o=r(46686),a=r(49255),n=r(31821);function i(e,t){const r=(0,a._o)(t.output)&&t.receiveShadows;r&&(0,o.o)(e,!0),e.vertex.code.add(n.H`
    void forwardLinearDepthToReadShadowMap() { ${(0,n.If)(r,"forwardLinearDepth(gl_Position.w);")} }
  `)}var s=r(14314),l=r(35818),c=r(74333);class u extends c.n{constructor(e,t,r,o){super(e,"mat4",2,(r,a,n,i)=>r.setUniformMatrices4fv(e,t(a,n,i),o),r)}}class d extends c.n{constructor(e,t,r,o){super(e,"mat4",1,(r,a,n)=>r.setUniformMatrices4fv(e,t(a,n),o),r)}}var h=r(65786);function m(e){e.uniforms.add(new d("shadowMapMatrix",(e,t)=>t.shadowMap.getShadowMapMatrices(e.origin),4)),e.include(f)}function p(e){e.uniforms.add(new u("shadowMapMatrix",(e,t)=>t.shadowMap.getShadowMapMatrices(e.origin),4)),e.include(f)}function f(e){e.uniforms.add(new s.I("cascadeDistances",e=>e.shadowMap.cascadeDistances),new l.W("numCascades",e=>e.shadowMap.numCascades)),e.code.add(v)}h.Y;const v=n.H`const vec3 invalidShadowmapUVZ = vec3(0.0, 0.0, -1.0);
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
vec3 calculateUVZShadow(in vec3 _worldPos, in float _linearDepth, in ivec2 shadowMapSize) {
int i = _linearDepth < cascadeDistances[1] ? 0 : _linearDepth < cascadeDistances[2] ? 1 : _linearDepth < cascadeDistances[3] ? 2 : 3;
if (i >= numCascades) {
return invalidShadowmapUVZ;
}
mat4 shadowMatrix = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
vec3 lvpos = lightSpacePosition(_worldPos, shadowMatrix);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
return invalidShadowmapUVZ;
}
vec2 uvShadow = cascadeCoordinates(i, shadowMapSize, lvpos);
return vec3(uvShadow, lvpos.z);
}`;function g(e){e.code.add(n.H`float readShadowMapUVZ(vec3 uvzShadow, sampler2DShadow _shadowMap) {
return texture(_shadowMap, uvzShadow);
}`)}var x=r(33094),b=r(12791);class y extends c.n{constructor(e,t){super(e,"sampler2DShadow",0,(r,o)=>r.bindTexture(e,t(o)))}}function w(e,t){t.receiveShadows&&e.fragment.include(m),S(e,t)}function M(e,t){t.receiveShadows&&e.fragment.include(p),S(e,t)}function S(e,t){e.fragment.uniforms.add(new x.U("lightingGlobalFactor",e=>e.lighting.globalFactor));const{hasShadowHighlights:r,receiveShadows:o,spherical:a}=t;e.include(i,t),o&&function(e,t){(function(e,t){e.include(g),e.uniforms.add(T()),t&&e.uniforms.add(new b.x("shadowHighlight",({shadowHighlight:e})=>e?.getTexture())),e.code.add(n.H`
    float readShadowMaps(const in vec3 uvzShadow) {
      if (uvzShadow.z < 0.0) {
        return 0.0;
      }

      float shadow1 = readShadowMapUVZ(uvzShadow, shadowMap);
      ${(0,n.If)(t,"float shadow2 = texelFetch(shadowHighlight, ivec2(gl_FragCoord.xy), 0).r;\n         return shadow1 > shadow2 ? shadow1 : shadow2;","return shadow1;")}
    }
  `)})(e,t),function(e){e.code.add(n.H`float readShadowMap(const in vec3 _worldPos, float _linearDepth) {
vec3 uvzShadow = calculateUVZShadow(_worldPos, _linearDepth, textureSize(shadowMap, 0));
return readShadowMaps(uvzShadow);
}`)}(e)}(e.fragment,r),e.fragment.code.add(n.H`
    float readShadow(float additionalAmbientScale, vec3 vpos) {
      return ${o?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":(0,n.If)(a,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};
    }
  `)}function T(){return new y("shadowMap",({shadowMap:e})=>e.getOutput(5)??e.getOutput(7))}h.Y},70893(e,t,r){r.d(t,{O:()=>c});var o=r(52540),a=r(77108),n=r(33094),i=r(31821),s=r(58029),l=r(12791);function c(e,t){const r=e.fragment;r.include(o.E),r.uniforms.add(new a.E("nearFar",e=>e.camera.nearFar),new l.x("depthMap",e=>e.depth?.attachment),new s.F("proj",e=>e.camera.projectionMatrix),new n.U("invResolutionHeight",e=>1/e.camera.height),new s.F("reprojectionMatrix",e=>e.reprojection.matrix)).code.add(i.H`
  vec2 reprojectionCoordinate(vec3 projectionCoordinate) {
    vec4 clipDepthCoordinate = proj * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
    vec4 reprojectedCoordinate = reprojectionMatrix * vec4(
      clipDepthCoordinate.w * (projectionCoordinate.xy * 2.0 - 1.0),
      clipDepthCoordinate.z,
      clipDepthCoordinate.w
    );
    reprojectedCoordinate.xy /= reprojectedCoordinate.w;
    return reprojectedCoordinate.xy * 0.5 + 0.5;
  }

  vec4 applyProjectionMat(mat4 projectionMat, vec3 viewPosition) {
    vec4 projectedCoordinate =  projectionMat * vec4(viewPosition, 1.0);
    projectedCoordinate.xy /= projectedCoordinate.w;
    projectedCoordinate.xy = projectedCoordinate.xy*0.5 + 0.5;
    return projectedCoordinate;
  }

  float rayMarchScreenReachFromWorldReach(vec3 startPosition, vec3 rayDirection, float rayMarchWorldReach) {
    float rayDistanceWorld = max(0.0, rayMarchWorldReach);

    // Stop rays towards camera at near plane
    if (rayDirection.z > 0.0) {
      float distanceToNearPlane = (-nearFar[0] - startPosition.z) / rayDirection.z;
      rayDistanceWorld = min(rayDistanceWorld, max(0.0, distanceToNearPlane));
    }

    vec2 projectedCoordStart = applyProjectionMat(proj, startPosition).xy;
    vec2 projectedCoordEnd = applyProjectionMat(proj, startPosition + rayDirection * rayDistanceWorld).xy;
    vec2 projectedCoordOffset = projectedCoordEnd - projectedCoordStart;

    return ${t.useProjectedRayLength?"length(projectedCoordOffset)":"abs(projectedCoordOffset.y)"};
  }

  vec3 screenSpaceIntersectionWithLimits(
    vec3 rayDirection,
    vec3 startPosition,
    vec3 viewDirection,
    vec3 normal,
    float rayStepOffset,
    float rayMarchMaxReach,
    float rayMarchMaxSteps
  ) {
    vec3 viewPosition = startPosition;

    // Project the start position to the screen
    vec4 projectedCoordStart = applyProjectionMat(proj, viewPosition);
    vec3 homogeneousStart = viewPosition / projectedCoordStart.w;
    float inverseWStart = 1.0 / projectedCoordStart.w;

    // Advance the position in the ray direction
    viewPosition += rayDirection;

    vec4 projectedCoordVanishingPoint = applyProjectionMat(proj, rayDirection);

    // Project the advanced position to the screen
    vec4 projectedCoordEnd = applyProjectionMat(proj, viewPosition);
    vec3  homogeneousEnd = viewPosition / projectedCoordEnd.w;
    float inverseWEnd = 1.0 / projectedCoordEnd.w;

    // Calculate the ray direction in screen space
    vec2 projectedCoordDirection = (projectedCoordEnd.xy - projectedCoordStart.xy);
    vec2 vanishingPointScreenOffset = (projectedCoordVanishingPoint.xy - projectedCoordStart.xy);

    float rayMarchDistance = ${t.useProjectedRayLength?"length(vanishingPointScreenOffset.xy)":"abs(vanishingPointScreenOffset.y)"};
    float clampedRayMarchDistance = min(rayMarchDistance, rayMarchMaxReach);

    float projectedCoordDirectionLength = length(projectedCoordDirection);

    // normalize the projection direction depending on maximum steps
    // this determines how blocky the ray march looks
    vec2 projectedStep = clampedRayMarchDistance * projectedCoordDirection / (rayMarchMaxSteps * projectedCoordDirectionLength);

    // Normalize the homogeneous camera space coordinates
    vec3 homogeneousStep = clampedRayMarchDistance * (homogeneousEnd - homogeneousStart) / (rayMarchMaxSteps * projectedCoordDirectionLength);
    float inverseWStep = clampedRayMarchDistance * (inverseWEnd - inverseWStart) / (rayMarchMaxSteps * projectedCoordDirectionLength);

    // initialize the variables for ray marching
    vec2 projectedPosition = projectedCoordStart.xy;
    vec3 homogeneousPosition = homogeneousStart;
    float inverseW = inverseWStart;
    float rayStartZ = -startPosition.z; // estimated ray start depth value
    float rayEndZ = -startPosition.z;   // estimated ray end depth value
    float previousEstimatedZ = -startPosition.z;
    float rayDepthDelta = 0.0;
    float estimatedDepthDifference;
    float sampledDepth;

    if (dot(normal, rayDirection) < 0.0 || dot(-viewDirection, normal) < 0.0) {
      return vec3(projectedPosition, 0.0);
    }

    float previousEstimatedDepthDifference = 0.0;

    projectedPosition = clamp(
      projectedPosition + rayStepOffset * projectedStep,
      vec2(0.0),
      vec2(0.999)
    );
    homogeneousPosition.z += rayStepOffset * homogeneousStep.z;
    inverseW += rayStepOffset * inverseWStep;

    int rayMarchMaxStepsInt = int(rayMarchMaxSteps);
    for(int stepIndex = 0; stepIndex < rayMarchMaxStepsInt - 1; ++stepIndex) {
      sampledDepth = -linearDepthFromTexture(depthMap, projectedPosition); // get linear depth from the depth buffer

      // Estimate depth of the marching ray
      rayStartZ = previousEstimatedZ;
      estimatedDepthDifference = -rayStartZ - sampledDepth;
      rayEndZ = (homogeneousStep.z * 0.5 + homogeneousPosition.z) / (inverseWStep * 0.5 + inverseW);
      rayDepthDelta = rayEndZ - rayStartZ;
      previousEstimatedZ = rayEndZ;

      if(-rayEndZ > nearFar[1] || -rayEndZ < nearFar[0] || projectedPosition.y < 0.0  || projectedPosition.y > 1.0 ) {
        return vec3(projectedPosition, 0.);
      }

      // If we detect a hit - return the intersection point, two conditions:
      //  - estimatedDepthDifference > 0.0 - sampled point depth is in front of estimated depth
      //  - if difference between estimatedDepthDifference and rayDepthDelta is not too large
      //  - if difference between estimatedDepthDifference and 0.025/abs(inverseW) is not too large
      //  - if the sampled depth is not behind far plane or in front of near plane

      if(estimatedDepthDifference < 0.025 / abs(inverseW) + abs(rayDepthDelta) &&
        estimatedDepthDifference > 0.0 &&
        sampledDepth > nearFar[0] &&
        sampledDepth < nearFar[1] &&
        abs(projectedPosition.y - projectedCoordStart.y) > invResolutionHeight) {
        float hitInterpolationWeight = estimatedDepthDifference / (estimatedDepthDifference - previousEstimatedDepthDifference);
        vec2 refinedProjectedPosition = mix(projectedPosition - projectedStep, projectedPosition, 1.0 - hitInterpolationWeight);
        if (abs(refinedProjectedPosition.y - projectedCoordStart.y) > invResolutionHeight) {
          return vec3(refinedProjectedPosition, sampledDepth);
        }
        else {
          return vec3(projectedPosition, sampledDepth);
        }
      }

      ${(0,i.If)(!t.clampRayToScreen,"if (projectedPosition.x <= 0.0  || projectedPosition.x >= 1.0) {\n        return vec3(projectedPosition, 0.0);\n      }")}

      // Continue with ray marching
      projectedPosition = projectedPosition + projectedStep;
      homogeneousPosition.z += homogeneousStep.z;
      inverseW += inverseWStep;
      previousEstimatedDepthDifference = estimatedDepthDifference;

      ${(0,i.If)(t.clampRayToScreen,"projectedPosition = clamp(projectedPosition, vec2(0.0), vec2(0.999));")}
    }
    return vec3(projectedPosition, 0.0);
  }

  vec3 screenSpaceIntersection(vec3 rayDirection, vec3 startPosition, vec3 viewDirection, vec3 normal, float rayStepOffset) {
    return screenSpaceIntersectionWithLimits(
      rayDirection,
      startPosition,
      viewDirection,
      normal,
      rayStepOffset,
      ${i.H.float(t.rayMarchMaxReach)},
      ${i.H.float(t.rayMarchMaxSteps)}
    );
  }
  `)}},51406(e,t,r){r.d(t,{MU:()=>l,O1:()=>c,QM:()=>u,Sx:()=>s,q2:()=>i});var o=r(29242),a=r(31821),n=r(35644);function i(e,t){t.hasColorTextureTransform?(e.varyings.add("colorUV","vec2"),e.vertex.uniforms.add(new n.k("colorTextureTransformMatrix",e=>e.colorTextureTransformMatrix??o.zK)).code.add(a.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(a.H`void forwardColorUV(){}`)}function s(e,t){t.hasNormalTextureTransform&&0!==t.textureCoordinateType?(e.varyings.add("normalUV","vec2"),e.vertex.uniforms.add(new n.k("normalTextureTransformMatrix",e=>e.normalTextureTransformMatrix??o.zK)).code.add(a.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(a.H`void forwardNormalUV(){}`)}function l(e,t){t.hasEmissionTextureTransform&&0!==t.textureCoordinateType?(e.varyings.add("emissiveUV","vec2"),e.vertex.uniforms.add(new n.k("emissiveTextureTransformMatrix",e=>e.emissiveTextureTransformMatrix??o.zK)).code.add(a.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(a.H`void forwardEmissiveUV(){}`)}function c(e,t){t.hasOcclusionTextureTransform&&0!==t.textureCoordinateType?(e.varyings.add("occlusionUV","vec2"),e.vertex.uniforms.add(new n.k("occlusionTextureTransformMatrix",e=>e.occlusionTextureTransformMatrix??o.zK)).code.add(a.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(a.H`void forwardOcclusionUV(){}`)}function u(e,t){t.hasMetallicRoughnessTextureTransform&&0!==t.textureCoordinateType?(e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.uniforms.add(new n.k("metallicRoughnessTextureTransformMatrix",e=>e.metallicRoughnessTextureTransformMatrix??o.zK)).code.add(a.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(a.H`void forwardMetallicRoughnessUV(){}`)}},34845(e,t,r){r.d(t,{Ir:()=>u});var o=r(37585),a=r(48163),n=r(78955),i=r(91829),s=r(77108),l=r(14314),c=r(31821);function u(e){e.fragment.uniforms.add(new l.I("projInfo",e=>function(e){const t=e.projectionMatrix;return 0===t[11]?(0,n.hZ)(d,2/(e.fullWidth*t[0]),2/(e.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):(0,n.hZ)(d,-2/(e.fullWidth*t[0]),-2/(e.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}(e.camera))),e.fragment.uniforms.add(new s.E("zScale",e=>0===e.camera.projectionMatrix[11]?(0,o.hZ)(h,0,1):(0,o.hZ)(h,1,0))),e.fragment.code.add(c.H`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}const d=(0,i.vt)(),h=(0,a.vt)()},58614(e,t,r){r.d(t,{S:()=>n}),r(28421);var o=r(20304),a=r(26934);function n(e,t){!function(e,t,r){const o=e.fragment;switch(o.code.add("void discardOrAdjustAlpha(inout vec4 color) {"),t.alphaDiscardMode){case 1:o.code.add("color.a = 1.0;");break;case 0:o.include(a.Q),o.code.add("if (color.a < alphaCutoff) discard;");break;case 3:o.uniforms.add(r).code.add("if (color.a < textureAlphaCutoff) discard;");break;case 2:o.uniforms.add(r).code.add("\n        if (color.a < textureAlphaCutoff) discard;\n        color.a = 1.0;\n      ");break;case 4:break;default:t.alphaDiscardMode}o.code.add("}")}(e,t,new o.m("textureAlphaCutoff",e=>e.textureAlphaCutoff))}},26425(e,t,r){r.d(t,{u:()=>n});var o=r(33094),a=r(31821);function n(e){e.uniforms.add(new o.U("dpDummy",()=>1)).code.add(a.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 hiD = hiA + hiB;
vec3 loD = loA + loB;
return  dpDummy * hiD + loD;
}`)}},32976(e,t,r){r.d(t,{o:()=>a});var o=r(74333);class a extends o.n{constructor(e,t){super(e,"bool",0,(r,o)=>r.setUniform1b(e,t(o)))}}},40710(e,t,r){r.d(t,{W:()=>a});var o=r(74333);class a extends o.n{constructor(e,t,r){super(e,"vec3",2,(o,a,n,i)=>o.setUniform3fv(e,t(a,n,i),r))}}},33079(e,t,r){r.d(t,{t:()=>a});var o=r(74333);class a extends o.n{constructor(e,t,r){super(e,"vec3",1,(o,a,n)=>o.setUniform3fv(e,t(a,n),r))}}},28421(e,t,r){r.d(t,{J:()=>a});var o=r(74333);class a extends o.n{constructor(e,t,r){super(e,"float",2,(o,a,n)=>o.setUniform1f(e,t(a,n),r))}}},20304(e,t,r){r.d(t,{m:()=>a});var o=r(74333);class a extends o.n{constructor(e,t,r){super(e,"float",1,(o,a,n)=>o.setUniform1f(e,t(a,n),r))}}},15976(e,t,r){r.d(t,{o:()=>a});var o=r(74333);class a extends o.n{constructor(e,t,r){super(e,"sampler2D",2,(o,a,n)=>o.bindTexture(e,t(a,n),r?.(a,n)))}}},63761(e,t,r){r.d(t,{N:()=>a});var o=r(74333);class a extends o.n{constructor(e,t){super(e,"sampler2D",1,(r,o,a)=>r.bindTexture(e,t(o,a)))}}},31821(e,t,r){r.d(t,{H:()=>o,If:()=>a});const o=(e,...t)=>{let r="";for(let o=0;o<t.length;o++)r+=e[o]+t[o];return r+=e[e.length-1],r};function a(e,t,r=""){return e?t:r}o.int=e=>e.toFixed(),o.uint=e=>`${Math.max(0,e).toFixed()}u`,o.hexuint=e=>`0x${Math.round(Math.max(0,e)).toString(16)}u`,o.float=e=>e.toPrecision(8)},51976(e,t,r){r.d(t,{K:()=>s,W:()=>l});var o=r(49186),a=r(4576);class n{constructor(e){this._bits=[...e]}equals(e){return(0,a.aI)(this._bits,e.bits)}get code(){return this._code??=String.fromCharCode(...this._bits),this._code}get bits(){return this._bits}}var i=r(65786);class s extends i.Y{constructor(){super(),this._parameterBits=this._parameterBits?.map(()=>0)??[],this._parameterNames??=[]}get key(){return this._key??=new n(this._parameterBits),this._key}decode(e=this.key){const t=this._parameterBits;this._parameterBits=[...e.bits];const r=this._parameterNames.map(e=>`    ${e}: ${this[e]}`).join("\n");return this._parameterBits=t,r}}function l(e={}){return(t,r)=>{t.hasOwnProperty("_parameterNames")||Object.defineProperty(t,"_parameterNames",{value:t._parameterNames?.slice()??[],configurable:!0,writable:!0}),t.hasOwnProperty("_parameterBits")||Object.defineProperty(t,"_parameterBits",{value:t._parameterBits?.slice()??[0],configurable:!0,writable:!0}),t._parameterNames.push(r);const a=e.count||2,n=Math.ceil(Math.log2(a)),i=t._parameterBits;let s=0;for(;i[s]+n>16;)s++,s>=i.length&&i.push(0);const l=i[s],c=(1<<n)-1<<l;i[s]+=n,e.count?Object.defineProperty(t,r,{get(){return(this._parameterBits[s]&c)>>l},set(t){const a=this._parameterBits[s];if((a&c)>>l!==t){if(this._key=null,this._parameterBits[s]=a&~c|+t<<l&c,"number"!=typeof t)throw new o.A("internal:invalid-shader-configuration",`Configuration value for ${r} must be a number, got ${typeof t}`);if(null==e.count)throw new o.A("internal:invalid-shader-configuration",`Configuration value for ${r} must provide a count option`)}}}):Object.defineProperty(t,r,{get(){return!!((this._parameterBits[s]&c)>>l)},set(e){const t=this._parameterBits[s];if(!!((t&c)>>l)!==e&&(this._key=null,this._parameterBits[s]=t&~c|+e<<l,"boolean"!=typeof e))throw new o.A("internal:invalid-shader-configurationx",`Configuration value for ${r} must be boolean, got ${typeof e}`)}})}}},94046(e,t,r){r.d(t,{R:()=>a});var o=r(31821);function a(e){e.code.add(o.H`
    vec3 quantizeGlobalIlluminationColor(vec3 color) {
      vec3 clampedColor = clamp(color, vec3(0.0), vec3(1.0));
      return floor(clampedColor * ${o.H.float(255)} + 0.5) * ${o.H.float(1/255)};
    }
  `)}},27832(e,t,r){r.d(t,{b:()=>n});var o=r(33094),a=r(31821);function n(e,t){t.snowCover&&(e.uniforms.add(new o.U("snowCover",e=>e.snowCover)).code.add(a.H`float getSnow(vec3 normal, vec3 groundNormal) {
return smoothstep(0.5, 0.55, dot(normal, groundNormal)) * snowCover;
}
float getRealisticTreeSnow(vec3 faceNormal, vec3 shadingNormal, vec3 groundNormal) {
float snow = min(1.0, smoothstep(0.5, 0.55, dot(faceNormal, groundNormal)) +
smoothstep(0.5, 0.55, dot(-faceNormal, groundNormal)) +
smoothstep(0.0, 0.1, dot(shadingNormal, groundNormal)));
return snow * snowCover;
}`),e.code.add(a.H`vec3 applySnowToMRR(vec3 mrr, float snow) {
return mix(mrr, vec3(0.0, 1.0, 0.04), snow);
}`))}},74810(e,t,r){r.d(t,{Bt:()=>s,Jr:()=>n,SY:()=>l,mb:()=>i});var o=r(35522),a=r(51850);function n({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:r,roughnessFactor:n,emissiveTexture:i,emissiveFactor:s,occlusionTexture:l}){return null==e&&null==t&&null==i&&(null==s||(0,o.t2)(s,a.uY))&&null==l&&(null==n||1===n)&&(null==r||1===r)}const i=(0,a.CN)(1,1,.5),s=(0,a.CN)(0,.6,.2),l=(0,a.CN)(0,1,.2)},66211(e,t,r){r.d(t,{Hp:()=>s,Tt:()=>n,bS:()=>i});var o=r(5482),a=r(51976);class n extends a.K{constructor(){super(...arguments),this.useFloatBlend=!0}}(0,o.Cg)([(0,a.W)()],n.prototype,"useFloatBlend",void 0);const i=16;function s(e,t){t.useFloatBlend?(e.constants.add("floatBlendOutputScale","float",1),e.constants.add("floatBlendInputScale","float",1)):(e.constants.add("floatBlendOutputScale","float",1/16),e.constants.add("floatBlendInputScale","float",16)),e.constants.add("maxEmissiveStrength","float",i)}},65786(e,t,r){r.d(t,{Y:()=>o});const o=class{};new o},74333(e,t,r){r.d(t,{n:()=>o});class o{constructor(e,t,r,o,a=null){if(this.name=e,this.type=t,this.arraySize=a,this.bind={0:null,1:null,2:null},o)switch(r){case void 0:break;case 0:this.bind[0]=o;break;case 1:this.bind[1]=o;break;case 2:this.bind[2]=o}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}}}]);