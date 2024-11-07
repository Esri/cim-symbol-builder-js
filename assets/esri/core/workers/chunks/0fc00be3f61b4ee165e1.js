"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1826],{32078:(e,t,r)=>{r.d(t,{D:()=>z,b:()=>U});var o=r(1391),i=r(62707),a=r(55039),n=r(51546),s=r(77171),l=r(47624),c=r(60624),d=r(37099),u=r(76056),h=r(135),m=r(11317),f=r(15719),p=r(92555),v=r(89136),g=r(15817),_=r(60464),x=r(89753),T=r(5802),b=r(42001),A=r(19419),E=r(26322),S=r(85504),y=r(22539),w=r(57806),C=r(92302),M=r(96310),O=r(85787),R=r(90692),I=r(93669),N=r(172),P=r(71250),H=r(21437),L=r(74709),D=r(33680),F=r(98069),B=r(93144),G=r(35065);function U(e){const t=new D.kG,{vertex:r,fragment:U,varyings:z}=t;if((0,I.Sv)(r,e),t.include(d.f),z.add("vpos","vec3"),t.include(C.k,e),t.include(l.fQ,e),t.include(p.L,e),t.include(w.av,e),e.output===a.H_.Color||e.output===a.H_.Alpha){t.include(w.NI,e),t.include(w.R5,e),t.include(w.jF,e),t.include(w.DT,e),(0,I.hY)(r,e),t.include(c.O,e),t.include(s.w,e);const a=e.normalType===c.r.Attribute||e.normalType===c.r.Compressed;a&&e.offsetBackfaces&&t.include(i.w),t.include(g.Q,e),t.include(f.Bb,e),e.instancedColor&&t.attributes.add(G.T.INSTANCECOLOR,"vec4"),z.add("vPositionLocal","vec3"),t.include(h.D,e),t.include(o.qj,e),t.include(u.R,e),t.include(m.c,e),r.uniforms.add(new P.N("externalColor",(e=>e.externalColor))),z.add("vcolorExt","vec4"),e.multipassEnabled&&z.add("depth","float"),r.code.add(L.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${L.H.float(M.b)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${a?L.H`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${a&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        forwardColorUV();
        forwardNormalUV();
        forwardEmissiveUV();
        forwardOcclusionUV();
        forwardMetallicRoughnessUV();
      }
    `)}switch(e.output){case a.H_.Alpha:t.include(n.f5,e),t.include(O.z,e),t.include(b.l,e),U.uniforms.add(new H.p("opacity",(e=>e.opacity)),new H.p("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&U.uniforms.add(new F.A("tex",(e=>e.texture))),U.include(R.y),U.code.add(L.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?L.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?L.H`colorUV`:L.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:L.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?L.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:L.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case a.H_.Color:t.include(n.f5,e),t.include(x.XP,e),t.include(_.K,e),t.include(O.z,e),t.include(e.instancedDoublePrecision?y.hb:y.XE,e),t.include(b.l,e),(0,I.hY)(U,e),U.uniforms.add(r.uniforms.get("localOrigin"),new N.J("ambient",(e=>e.ambient)),new N.J("diffuse",(e=>e.diffuse)),new H.p("opacity",(e=>e.opacity)),new H.p("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&U.uniforms.add(new F.A("tex",(e=>e.texture))),t.include(S.jV,e),t.include(E.T,e),U.include(R.y),t.include(A.k,e),(0,x.PN)(U),(0,x.sC)(U),(0,T.F1)(U),U.code.add(L.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?L.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?L.H`colorUV`:L.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:L.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===c.r.ScreenDerivative?L.H`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:L.H`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===S.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?L.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:L.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?L.H`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${e.hasNormalTextureTransform?L.H`normalUV`:"vuv0"});`:L.H`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?L.H`normalize(posWorld);`:L.H`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?L.H`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===S.f7.Normal||e.pbrMode===S.f7.Schematic?L.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?L.H`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:L.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===B.A.Color?L.H`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)}return t.include(v.s,e),t}const z=Object.freeze(Object.defineProperty({__proto__:null,build:U},Symbol.toStringTag,{value:"Module"}))},41846:(e,t,r)=>{r.d(t,{R:()=>F,b:()=>D});var o=r(1391),i=r(62707),a=r(55039),n=r(51546),s=r(77171),l=r(47624),c=r(60624),d=r(37099),u=r(76056),h=r(135),m=r(11317),f=r(92555),p=r(89136),v=r(60464),g=r(89753),_=r(5802),x=r(42001),T=r(26322),b=r(85504),A=r(22539),E=r(92302),S=r(96310),y=r(85787),w=r(90692),C=r(93669),M=r(172),O=r(71250),R=r(21437),I=r(74709),N=r(33680),P=r(98069),H=r(93144),L=r(35065);function D(e){const t=new N.kG,{vertex:r,fragment:D,varyings:F}=t;return(0,C.Sv)(r,e),t.include(d.f),F.add("vpos","vec3"),t.include(E.k,e),t.include(l.fQ,e),t.include(f.L,e),e.output!==a.H_.Color&&e.output!==a.H_.Alpha||((0,C.hY)(t.vertex,e),t.include(c.O,e),t.include(s.w,e),e.offsetBackfaces&&t.include(i.w),e.instancedColor&&t.attributes.add(L.T.INSTANCECOLOR,"vec4"),F.add("vNormalWorld","vec3"),F.add("localvpos","vec3"),e.multipassEnabled&&F.add("depth","float"),t.include(h.D,e),t.include(o.qj,e),t.include(u.R,e),t.include(m.c,e),r.uniforms.add(new O.N("externalColor",(e=>e.externalColor))),F.add("vcolorExt","vec4"),r.code.add(I.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${I.H.float(S.b)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.multipassEnabled?I.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===a.H_.Alpha&&(t.include(n.f5,e),t.include(y.z,e),t.include(x.l,e),D.uniforms.add(new R.p("opacity",(e=>e.opacity)),new R.p("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&D.uniforms.add(new P.A("tex",(e=>e.texture))),D.include(w.y),D.code.add(I.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?I.H`terrainDepthTest(depth);`:""}
        ${e.hasColorTexture?I.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?I.H`colorUV`:I.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:I.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?I.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:I.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        fragColor = vec4(opacity_);
      }
    `)),e.output===a.H_.Color&&(t.include(n.f5,e),t.include(g.XP,e),t.include(v.K,e),t.include(y.z,e),t.include(e.instancedDoublePrecision?A.hb:A.XE,e),t.include(x.l,e),(0,C.hY)(t.fragment,e),(0,_.Pe)(D),(0,g.PN)(D),(0,g.sC)(D),D.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new M.J("ambient",(e=>e.ambient)),new M.J("diffuse",(e=>e.diffuse)),new R.p("opacity",(e=>e.opacity)),new R.p("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&D.uniforms.add(new P.A("tex",(e=>e.texture))),t.include(b.jV,e),t.include(T.T,e),D.include(w.y),(0,_.F1)(D),D.code.add(I.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?I.H`terrainDepthTest(depth);`:""}
        ${e.hasColorTexture?I.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?I.H`colorUV`:I.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:I.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===b.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?I.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:I.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?I.H`albedo = mix(albedo, vec3(1), 0.9);`:I.H``}
        ${I.H`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===b.f7.Normal||e.pbrMode===b.f7.Schematic?e.spherical?I.H`vec3 normalGround = normalize(vpos + localOrigin);`:I.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:I.H``}
        ${e.pbrMode===b.f7.Normal||e.pbrMode===b.f7.Schematic?I.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?I.H`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:I.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===H.A.Color?I.H`fragColor = premultiplyAlpha(fragColor);`:I.H``}
      }
    `)),t.include(p.s,e),t}const F=Object.freeze(Object.defineProperty({__proto__:null,build:D},Symbol.toStringTag,{value:"Module"}))},25377:(e,t,r)=>{r.d(t,{S:()=>g,b:()=>f,g:()=>p});var o=r(23727),i=r(46505),a=r(51666),n=r(5543),s=r(20787),l=r(19693),c=r(21437),d=r(74709),u=r(33680),h=r(98069);const m=16;function f(){const e=new u.kG,t=e.fragment;return e.include(a.k),t.include(n.S),e.include(s.GZ),t.uniforms.add(new c.p("radius",((e,t)=>p(t.camera)))),t.code.add(d.H`vec3 sphere[16] = vec3[16](
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
}`),t.code.add(d.H`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add(new l.A("nearFar",((e,t)=>t.camera.nearFar)),new h.A("normalMap",(e=>e.normalTexture)),new h.A("depthMap",(e=>e.depthTexture)),new c.p("projScale",(e=>e.projScale)),new h.A("rnm",(e=>e.noiseTexture)),new l.A("rnmScale",((e,t)=>(0,o.t8)(v,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height))),new c.p("intensity",(e=>e.intensity)),new l.A("screenSize",((e,t)=>(0,o.t8)(v,t.camera.fullWidth,t.camera.fullHeight)))),e.outputs.add("fragOcclusion","float"),t.code.add(d.H`
    void main(void) {
      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth > nearFar.y || -currentPixelDepth < nearFar.x) {
        fragOcclusion = 0.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${d.H.int(m)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${d.H.int(m)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `),e}function p(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const v=(0,i.Ue)(),g=Object.freeze(Object.defineProperty({__proto__:null,build:f,getRadius:p},Symbol.toStringTag,{value:"Module"}))},59915:(e,t,r)=>{r.d(t,{S:()=>p,b:()=>f});var o=r(20773),i=r(51666),a=r(5543),n=r(98925),s=r(19693),l=r(21437),c=r(74709),d=r(33680),u=r(16374),h=r(98069);const m=4;function f(){const e=new d.kG,t=e.fragment;e.include(i.k);const r=(m+1)/2,f=1/(2*r*r);return t.include(a.S),t.uniforms.add(new h.A("depthMap",(e=>e.depthTexture)),new u.R("tex",(e=>e.colorTexture)),new n.q("blurSize",(e=>e.blurSize)),new l.p("projScale",((e,t)=>{const r=(0,o.k)(t.camera.eye,t.camera.center);return r>5e4?Math.max(0,e.projScale-(r-5e4)):e.projScale})),new s.A("nearFar",((e,t)=>t.camera.nearFar))),t.code.add(c.H`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${c.H.float(f)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.code.add(c.H`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${c.H.int(m)}; r <= ${c.H.int(m)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `),e}const p=Object.freeze(Object.defineProperty({__proto__:null,build:f},Symbol.toStringTag,{value:"Module"}))},17896:(e,t,r)=>{r.d(t,{a:()=>s,b:()=>n,c:()=>i,d:()=>d,e:()=>l,n:()=>u,s:()=>c,t:()=>a});var o=r(72220);function i(e,t,r){a(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function a(e,t,r,i=3,a=i){if(e.length/i!==Math.ceil(t.length/a))return(0,o.M)().error("source and destination buffers need to have the same number of elements"),e;const n=e.length/i,s=r[0],l=r[1],c=r[2],d=r[4],u=r[5],h=r[6],m=r[8],f=r[9],p=r[10],v=r[12],g=r[13],_=r[14];let x=0,T=0;for(let r=0;r<n;r++){const r=t[x],o=t[x+1],n=t[x+2];e[T]=s*r+d*o+m*n+v,e[T+1]=l*r+u*o+f*n+g,e[T+2]=c*r+h*o+p*n+_,x+=a,T+=i}return e}function n(e,t,r){s(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function s(e,t,r,i=3,a=i){if(e.length/i!==Math.ceil(t.length/a))return void(0,o.M)().error("source and destination buffers need to have the same number of elements");const n=e.length/i,s=r[0],l=r[1],c=r[2],d=r[3],u=r[4],h=r[5],m=r[6],f=r[7],p=r[8];let v=0,g=0;for(let r=0;r<n;r++){const r=t[v],o=t[v+1],n=t[v+2];e[g]=s*r+d*o+m*n,e[g+1]=l*r+u*o+f*n,e[g+2]=c*r+h*o+p*n,v+=a,g+=i}}function l(e,t,r){c(e.typedBuffer,t,r,e.typedBufferStride)}function c(e,t,r,o=3){const i=Math.min(e.length/o,t.count),a=t.typedBuffer,n=t.typedBufferStride;let s=0,l=0;for(let t=0;t<i;t++)e[l]=r*a[s],e[l+1]=r*a[s+1],e[l+2]=r*a[s+2],s+=n,l+=o}function d(e,t){u(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function u(e,t,r=3,o=r){const i=Math.min(e.length/r,t.length/o);let a=0,n=0;for(let s=0;s<i;s++){const i=t[a],s=t[a+1],l=t[a+2],c=i*i+s*s+l*l;if(c>0){const t=1/Math.sqrt(c);e[n]=t*i,e[n+1]=t*s,e[n+2]=t*l}a+=o,n+=r}}Object.freeze(Object.defineProperty({__proto__:null,normalize:u,normalizeView:d,scale:c,scaleView:l,shiftRight:function(e,t,r){const o=Math.min(e.count,t.count),i=e.typedBuffer,a=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;let l=0,c=0;for(let e=0;e<o;e++)i[c]=n[l]>>r,i[c+1]=n[l+1]>>r,i[c+2]=n[l+2]>>r,l+=s,c+=a},transformMat3:s,transformMat3View:n,transformMat4:a,transformMat4View:i},Symbol.toStringTag,{value:"Module"}))},23670:(e,t,r)=>{r.d(t,{G:()=>i});var o=r(20102);let i=class e{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" ";throw new o.Z(t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new e(this.major,this.minor,this._context)}static parse(t,r=""){const[i,a]=t.split("."),n=/^\s*\d+\s*$/;if(!i?.match||!n.test(i))throw new o.Z((r&&r+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:t});if(!a?.match||!n.test(a))throw new o.Z((r&&r+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:t});const s=parseInt(i,10),l=parseInt(a,10);return new e(s,l,r)}}},32243:(e,t,r)=>{function o(e){return e=e||globalThis.location.hostname,c.some((t=>null!=e?.match(t)))}function i(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(a)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(n)||null!=t.match(l)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}r.d(t,{XO:()=>o,pJ:()=>i});const a=/^devext.arcgis.com$/,n=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,l=/^[\w-]*\.mapsqa.arcgis.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,a,n,/^jsapps.esri.com$/,s,l]},10787:(e,t,r)=>{function o(){return new Float32Array(2)}function i(e,t){const r=new Float32Array(2);return r[0]=e,r[1]=t,r}function a(){return o()}function n(){return i(1,1)}function s(){return i(1,0)}function l(){return i(0,1)}r.d(t,{AG:()=>c,Ue:()=>o,al:()=>i,hq:()=>d});const c=a(),d=n(),u=s(),h=l();Object.freeze(Object.defineProperty({__proto__:null,ONES:d,UNIT_X:u,UNIT_Y:h,ZEROS:c,clone:function(e){const t=new Float32Array(2);return t[0]=e[0],t[1]=e[1],t},create:o,createView:function(e,t){return new Float32Array(e,t,2)},fromValues:i,ones:n,unitX:s,unitY:l,zeros:a},Symbol.toStringTag,{value:"Module"}))},72220:(e,t,r)=>{r.d(t,{M:()=>i});var o=r(92604);const i=()=>o.Z.getLogger("esri.views.3d.support.buffer.math")},16996:(e,t,r)=>{r.d(t,{Ue:()=>l,nF:()=>d,zk:()=>c});var o=r(22021),i=r(22807),a=r(20773),n=r(28712),s=r(12981);function l(e){return e?{origin:(0,n.d9)(e.origin),vector:(0,n.d9)(e.vector)}:{origin:(0,n.Ue)(),vector:(0,n.Ue)()}}function c(e,t,r=l()){return(0,a.c)(r.origin,e),(0,a.f)(r.vector,t,e),r}function d(e,t,r){return function(e,t,r,i,n){const{vector:l,origin:c}=e,d=(0,a.f)(s.WM.get(),t,c),u=(0,a.j)(l,d)/(0,a.m)(l);return(0,a.i)(n,l,(0,o.uZ)(u,0,1)),(0,a.g)(n,n,e.origin)}(e,t,0,0,r)}(0,n.Ue)(),(0,n.Ue)(),new i.x((()=>l()))},61826:(e,t,r)=>{r.d(t,{fetch:()=>Wt});var o=r(32243),i=r(94315),a=r(4818),n=r(55488),s=r(10681),l=r(20773),c=r(28712),d=r(60437),u=r(14182),h=r(56481),m=r(17896),f=r(98766),p=r(4307),v=r(56067),g=r(75488),_=r(40270),x=r(91695),T=r(91911),b=r(15317),A=r(10787);function E(e){if(null==e)return null;const t=null!=e.offset?e.offset:A.AG,r=null!=e.rotation?e.rotation:0,o=null!=e.scale?e.scale:A.hq,n=(0,a.al)(1,0,0,0,1,0,t[0],t[1],1),s=(0,a.al)(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),l=(0,a.al)(o[0],0,0,0,o[1],0,0,0,1),c=(0,a.Ue)();return(0,i.Jp)(c,s,l),(0,i.Jp)(c,n,c),c}class S{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class y{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new S,this.numberOfVertices=0}}var w=r(3172),C=r(66643),M=r(43090),O=r(20102),R=r(92604);class I{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){return this._outer.get(e)?.get(t)}set(e,t,r){const o=this._outer.get(e);o?o.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,r)=>e(t,r)))}}var N=r(95330),P=r(23670),H=r(24882);async function L(e,t){const{data:r}=await(0,w.Z)(e,{responseType:"image",...t});return r}var D=r(51417),F=r(47026),B=r(22631),G=r(80442),U=r(32448),z=r(70586),V=r(1533),j=r(17452),W=r(85958),k=r(99880);let q;var $,J;(J=$||($={}))[J.ETC1_RGB=0]="ETC1_RGB",J[J.ETC2_RGBA=1]="ETC2_RGBA",J[J.BC1_RGB=2]="BC1_RGB",J[J.BC3_RGBA=3]="BC3_RGBA",J[J.BC4_R=4]="BC4_R",J[J.BC5_RG=5]="BC5_RG",J[J.BC7_M6_RGB=6]="BC7_M6_RGB",J[J.BC7_M5_RGBA=7]="BC7_M5_RGBA",J[J.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",J[J.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",J[J.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",J[J.ATC_RGB=11]="ATC_RGB",J[J.ATC_RGBA=12]="ATC_RGBA",J[J.FXT1_RGB=17]="FXT1_RGB",J[J.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",J[J.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",J[J.ETC2_EAC_R11=20]="ETC2_EAC_R11",J[J.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",J[J.RGBA32=13]="RGBA32",J[J.RGB565=14]="RGB565",J[J.BGR565=15]="BGR565",J[J.RGBA4444=16]="RGBA4444";var X=r(35371),Y=r(57088),Z=r(45762);let K=null,Q=null;async function ee(){return null==Q&&(Q=function(){if(null==q){const e=e=>(0,k.V)(`esri/libs/basisu/${e}`);q=r.e(1421).then(r.bind(r,21421)).then((e=>e.b)).then((({default:t})=>t({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return q}(),K=await Q),Q}function te(e,t,r,o,i){const a=(0,Z.RG)(t?X.q_.COMPRESSED_RGBA8_ETC2_EAC:X.q_.COMPRESSED_RGB8_ETC2),n=i&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*o*a*n)}function re(e){return e.getNumImages()>=1&&!e.isUASTC()}function oe(e){return e.getFaces()>=1&&e.isETC1S()}function ie(e,t,r,o,i,a,n,s){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[d,u]=l?o?[$.ETC2_RGBA,X.q_.COMPRESSED_RGBA8_ETC2_EAC]:[$.ETC1_RGB,X.q_.COMPRESSED_RGB8_ETC2]:c?o?[$.BC3_RGBA,X.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[$.BC1_RGB,X.q_.COMPRESSED_RGB_S3TC_DXT1_EXT]:[$.RGBA32,X.VI.RGBA],h=t.hasMipmap?r:Math.min(1,r),m=[];for(let e=0;e<h;e++)m.push(new Uint8Array(n(e,d))),s(e,d,m[e]);return t.internalFormat=u,t.hasMipmap=m.length>1,t.samplingMode=t.hasMipmap?X.cw.LINEAR_MIPMAP_LINEAR:X.cw.LINEAR,t.width=i,t.height=a,new Y.x(e,t,{type:"compressed",levels:m})}var ae=r(17662),ne=r(4726);const se=()=>R.Z.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function le(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const ce=le("DXT1"),de=le("DXT3"),ue=le("DXT5");function he(e,t,r){if(e instanceof ImageData)return he(me(e),t,r);const o=document.createElement("canvas");return o.width=t,o.height=r,o.getContext("2d").drawImage(e,0,0,o.width,o.height),o}function me(e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");if(null==r)throw new O.Z("Failed to create 2d context from HTMLCanvasElement");return r.putImageData(e,0,0),t}var fe,pe,ve=r(11726),ge=r(47859);class _e extends ae.c{get parameters(){return this._parameters}constructor(e,t){super(),this._data=e,this.type=ne.U.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new U.Z,this._parameters={...Te,...t},this._startPreload(e)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(e){null!=e&&(e instanceof HTMLVideoElement?(this.frameUpdate=t=>this._frameUpdate(e,t),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!((0,j.jc)(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){(0,j.HK)(e.src)||(0,j.jc)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}_createDescriptor(e){const t=new ge.X;return t.wrapMode=this._parameters.wrap??X.e8.REPEAT,t.flipped=!this._parameters.noUnpackFlip,t.samplingMode=this._parameters.mipmap?X.cw.LINEAR_MIPMAP_LINEAR:X.cw.LINEAR,t.hasMipmap=!!this._parameters.mipmap,t.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,t.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),t}get glTexture(){return this._glTexture}get memoryEstimate(){return this._glTexture?.usedMemory||function(e,t){if(null==e)return 0;if((0,V.eP)(e)||(0,V.lq)(e))return t.encoding===F.Ti.KTX2_ENCODING?function(e,t){if(null==K)return e.byteLength;const r=new K.KTX2File(new Uint8Array(e)),o=oe(r)?te(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),o}(e,!!t.mipmap):t.encoding===F.Ti.BASIS_ENCODING?function(e,t){if(null==K)return e.byteLength;const r=new K.BasisFile(new Uint8Array(e)),o=re(r)?te(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),o}(e,!!t.mipmap):e.byteLength;const{width:r,height:o}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?xe(e):t;return(t.mipmap?4/3:1)*r*o*(t.components||4)||0}(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const t=this._data;return null==t?(this._glTexture=new Y.x(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),"string"==typeof t?this._loadFromURL(e,t):t instanceof Image?this._loadFromImageElement(e,t):t instanceof HTMLVideoElement?this._loadFromVideoElement(e,t):t instanceof ImageData||t instanceof HTMLCanvasElement?this._loadFromImage(e,t):((0,V.eP)(t)||(0,V.lq)(t))&&this._parameters.encoding===F.Ti.DDS_ENCODING?this._loadFromDDSData(e,t):((0,V.eP)(t)||(0,V.lq)(t))&&this._parameters.encoding===F.Ti.KTX2_ENCODING?this._loadFromKTX2(e,t):((0,V.eP)(t)||(0,V.lq)(t))&&this._parameters.encoding===F.Ti.BASIS_ENCODING?this._loadFromBasis(e,t):(0,V.lq)(t)?this._loadFromPixelData(e,t):(0,V.eP)(t)?this._loadFromPixelData(e,new Uint8Array(t)):null)}_frameUpdate(e,t){return null==this._glTexture||e.readyState<fe.HAVE_CURRENT_DATA||t===e.currentTime?t:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,t){return this._glTexture=function(e,t,r){const o=function(e,t){const r=new Int32Array(e,0,31);if(542327876!==r[0])return se().error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return se().error("Unsupported format, must contain a FourCC code"),null;const o=r[21];let i,a;switch(o){case ce:i=8,a=X.q_.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case de:i=16,a=X.q_.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case ue:i=16,a=X.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return se().error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(o)),null}let n=1,s=r[4],l=r[3];0==(3&s)&&0==(3&l)||(se().warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,l=l+3&-4);const c=s,d=l;let u,h;131072&r[2]&&!1!==t&&(n=Math.max(1,r[7]));let m=r[1]+4;const f=[];for(let t=0;t<n;++t)h=(s+3>>2)*(l+3>>2)*i,u=new Uint8Array(e,m,h),f.push(u),m+=h,s=Math.max(1,s>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:f},internalFormat:a,width:c,height:d}}(r,t.hasMipmap??!1);if(null==o)throw new Error("DDS texture data is null");const{textureData:i,internalFormat:a,width:n,height:s}=o;return t.samplingMode=i.levels.length>1?X.cw.LINEAR_MIPMAP_LINEAR:X.cw.LINEAR,t.hasMipmap=i.levels.length>1,t.internalFormat=a,t.width=n,t.height=s,new Y.x(e,t,i)}(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>async function(e,t,r){null==K&&(K=await ee());const o=new K.KTX2File(new Uint8Array(r));if(!oe(o))return null;o.startTranscoding();const i=ie(e,t,o.getLevels(),o.getHasAlpha(),o.getWidth(),o.getHeight(),((e,t)=>o.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>o.transcodeImage(r,e,0,0,t,0,-1,-1)));return o.close(),o.delete(),i}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>async function(e,t,r){null==K&&(K=await ee());const o=new K.BasisFile(new Uint8Array(r));if(!re(o))return null;o.startTranscoding();const i=ie(e,t,o.getNumLevels(0),o.getHasAlpha(),o.getImageWidth(0,0),o.getImageHeight(0,0),((e,t)=>o.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>o.transcodeImage(r,0,e,t,0,0)));return o.close(),o.delete(),i}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){(0,ve.hu)(this._parameters.width>0&&this._parameters.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this._parameters.components?X.VI.LUMINANCE:3===this._parameters.components?X.VI.RGB:X.VI.RGBA,r.width=this._parameters.width??0,r.height=this._parameters.height??0,this._glTexture=new Y.x(e,r,t),this._glTexture}_loadFromURL(e,t){return this._loadAsync((async r=>{const o=await L(t,{signal:r});return(0,N.k_)(r),this._loadFromImage(e,o)}))}_loadFromImageElement(e,t){return t.complete?this._loadFromImage(e,t):this._loadAsync((async r=>{const o=await(0,W.fY)(t,t.src,!1,r);return(0,N.k_)(r),this._loadFromImage(e,o)}))}_loadFromVideoElement(e,t){return t.readyState>=fe.HAVE_CURRENT_DATA?this._loadFromImage(e,t):this._loadFromVideoElementAsync(e,t)}_loadFromVideoElementAsync(e,t){return this._loadAsync((r=>new Promise(((o,i)=>{const a=()=>{t.removeEventListener("loadeddata",n),t.removeEventListener("error",s),(0,z.hw)(l)},n=()=>{t.readyState>=fe.HAVE_CURRENT_DATA&&(a(),o(this._loadFromImage(e,t)))},s=e=>{a(),i(e||new O.Z("Failed to load video"))};t.addEventListener("loadeddata",n),t.addEventListener("error",s);const l=(0,N.fu)(r,(()=>s((0,N.zE)())))}))))}_loadFromImage(e,t){let r=t;if(!(r instanceof HTMLVideoElement)){const{maxTextureSize:t}=e.parameters;r=this._parameters.downsampleUncompressed?function(e,t){let r=e.width*e.height;if(r<4096)return e instanceof ImageData?me(e):e;let o=e.width,i=e.height;do{o=Math.ceil(o/2),i=Math.ceil(i/2),r=o*i}while(r>1048576||null!=t&&(o>t||i>t));return he(e,o,i)}(r,t):function(e,t){const r=Math.max(e.width,e.height);if(r<=t)return e;const o=t/r;return he(e,Math.round(e.width*o),Math.round(e.height*o))}(r,t)}const o=xe(r);this._parameters.width=o.width,this._parameters.height=o.height;const i=this._createDescriptor(e);return i.pixelFormat=3===this._parameters.components?X.VI.RGB:X.VI.RGBA,i.width=o.width,i.height=o.height,this._glTexture=new Y.x(e,i,r),this._glTexture}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const o=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(o,o),r}unload(){if(this._glTexture=(0,z.M2)(this._glTexture),null!=this._loadingController){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}function xe(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}(pe=fe||(fe={}))[pe.HAVE_NOTHING=0]="HAVE_NOTHING",pe[pe.HAVE_METADATA=1]="HAVE_METADATA",pe[pe.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",pe[pe.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",pe[pe.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA";const Te={wrap:{s:X.e8.REPEAT,t:X.e8.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};var be=r(35065),Ae=r(64822),Ee=r(65576),Se=r(55039),ye=r(60624),we=r(19419),Ce=r(85504),Me=r(60537),Oe=r(82791),Re=r(93144),Ie=r(27097);const Ne=(0,Ie.wK)(X.zi.SRC_ALPHA,X.zi.ONE,X.zi.ONE_MINUS_SRC_ALPHA,X.zi.ONE_MINUS_SRC_ALPHA),Pe=(0,Ie.if)(X.zi.ONE,X.zi.ONE),He=(0,Ie.if)(X.zi.ZERO,X.zi.ONE_MINUS_SRC_ALPHA);function Le(e){return e===Re.A.FrontFace?null:e===Re.A.Alpha?He:Pe}const De={factor:-1,units:-2};function Fe(e,t=X.wb.LESS){return e===Re.A.NONE||e===Re.A.FrontFace?t:X.wb.LEQUAL}var Be=r(97995),Ge=r(8310),Ue=r(5476);const ze=new class{constructor(e=0){this.offset=e,this.sphere=(0,Ge.c)(),this.tmpVertex=(0,c.Ue)()}applyToVertex(e,t,r){const o=this.objectTransform.transform,i=(0,l.s)(Ve,e,t,r),a=(0,l.e)(i,i,o),n=this.offset/(0,l.l)(a);(0,l.p)(a,a,a,n);const s=this.objectTransform.inverse;return(0,l.e)(this.tmpVertex,a,s),this.tmpVertex}applyToMinMax(e,t){const r=this.offset/(0,l.l)(e);(0,l.p)(e,e,e,r);const o=this.offset/(0,l.l)(t);(0,l.p)(t,t,t,o)}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=(0,l.l)((0,Ge.g)(e)),r=this.offset/t;return(0,l.p)((0,Ge.g)(this.sphere),(0,Ge.g)(e),(0,Ge.g)(e),r),this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};new class{constructor(e=0){this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=(0,c.Ue)(),this._tmpMbs=(0,Ge.c)(),this._tmpObb=new Ue.Oo,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=(0,l.l)(e)}applyToVertex(e,t,r){const o=(0,l.s)(Ve,e,t,r),i=(0,l.s)(je,e,t,r+this.componentLocalOriginLength),a=this._totalOffset/(0,l.l)(i);return(0,l.p)(this._tmpVertex,o,i,a),this._tmpVertex}applyToAabb(e){const t=this.componentLocalOriginLength,r=e[0],o=e[1],i=e[2]+t,a=e[3],n=e[4],s=e[5]+t,l=Math.abs(r),c=Math.abs(o),d=Math.abs(i),u=Math.abs(a),h=Math.abs(n),m=Math.abs(s),f=.5*(1+Math.sign(r*a))*Math.min(l,u),p=.5*(1+Math.sign(o*n))*Math.min(c,h),v=.5*(1+Math.sign(i*s))*Math.min(d,m),g=Math.max(l,u),_=Math.max(c,h),x=Math.max(d,m),T=Math.sqrt(f*f+p*p+v*v),b=Math.sign(l+r),A=Math.sign(c+o),E=Math.sign(d+i),S=Math.sign(u+a),y=Math.sign(h+n),w=Math.sign(m+s),C=this._totalOffset;if(T<C)return e[0]-=(1-b)*C,e[1]-=(1-A)*C,e[2]-=(1-E)*C,e[3]+=S*C,e[4]+=y*C,e[5]+=w*C,e;const M=C/Math.sqrt(g*g+_*_+x*x),O=C/T,R=O-M,I=-R;return e[0]+=r*(b*I+O),e[1]+=o*(A*I+O),e[2]+=i*(E*I+O),e[3]+=a*(S*R+M),e[4]+=n*(y*R+M),e[5]+=s*(w*R+M),e}applyToMbs(e){const t=(0,l.l)((0,Ge.g)(e)),r=this._totalOffset/t;return(0,l.p)((0,Ge.g)(this._tmpMbs),(0,Ge.g)(e),(0,Ge.g)(e),r),this._tmpMbs[3]=e[3]+e[3]*this._totalOffset/t,this._tmpMbs}applyToObb(e){return(0,Ue.gI)(e,this._totalOffset,this._totalOffset,Ae.JY.Global,this._tmpObb),this._tmpObb}},new class{constructor(e=0){this.offset=e,this.tmpVertex=(0,c.Ue)()}applyToVertex(e,t,r){const o=(0,l.s)(Ve,e,t,r),i=(0,l.g)(je,o,this.localOrigin),a=this.offset/(0,l.l)(i);return(0,l.p)(this.tmpVertex,o,i,a),this.tmpVertex}applyToAabb(e){const t=We,r=ke,o=qe;for(let i=0;i<3;++i)t[i]=e[0+i]+this.localOrigin[i],r[i]=e[3+i]+this.localOrigin[i],o[i]=t[i];const i=this.applyToVertex(t[0],t[1],t[2]);for(let t=0;t<3;++t)e[t]=i[t],e[t+3]=i[t];const a=t=>{const r=this.applyToVertex(t[0],t[1],t[2]);for(let t=0;t<3;++t)e[t]=Math.min(e[t],r[t]),e[t+3]=Math.max(e[t+3],r[t])};for(let e=1;e<8;++e){for(let i=0;i<3;++i)o[i]=0==(e&1<<i)?t[i]:r[i];a(o)}let n=0;for(let e=0;e<3;++e)t[e]*r[e]<0&&(n|=1<<e);if(0!==n&&7!==n)for(let e=0;e<8;++e)if(0==(n&e)){for(let i=0;i<3;++i)o[i]=0!=(n&1<<i)?0:0!=(e&1<<i)?t[i]:r[i];a(o)}for(let t=0;t<3;++t)e[t]-=this.localOrigin[t],e[t+3]-=this.localOrigin[t];return e}};const Ve=(0,c.Ue)(),je=(0,c.Ue)(),We=(0,c.Ue)(),ke=(0,c.Ue)(),qe=(0,c.Ue)();function $e(e,t,r){const{data:o,indices:i}=e,a=t.typedBuffer,n=t.typedBufferStride,s=i.length;r*=n;for(let e=0;e<s;++e){const t=2*i[e];a[r]=o[t],a[r+1]=o[t+1],r+=n}}function Je(e,t,r,o){const{data:i,indices:a}=e,n=t.typedBuffer,s=t.typedBufferStride,l=a.length;if(r*=s,null==o||1===o)for(let e=0;e<l;++e){const t=3*a[e];n[r]=i[t],n[r+1]=i[t+1],n[r+2]=i[t+2],r+=s}else for(let e=0;e<l;++e){const t=3*a[e];for(let e=0;e<o;++e)n[r]=i[t],n[r+1]=i[t+1],n[r+2]=i[t+2],r+=s}}function Xe(e,t,r,o=1){const{data:i,indices:a}=e,n=t.typedBuffer,s=t.typedBufferStride,l=a.length;if(r*=s,1===o)for(let e=0;e<l;++e){const t=4*a[e];n[r]=i[t],n[r+1]=i[t+1],n[r+2]=i[t+2],n[r+3]=i[t+3],r+=s}else for(let e=0;e<l;++e){const t=4*a[e];for(let e=0;e<o;++e)n[r]=i[t],n[r+1]=i[t+1],n[r+2]=i[t+2],n[r+3]=i[t+3],r+=s}}function Ye(e,t,r,o,i=1){const a=t.typedBuffer,n=t.typedBufferStride;if(o*=n,1===i)for(let t=0;t<r;++t)a[o]=e[0],a[o+1]=e[1],a[o+2]=e[2],a[o+3]=e[3],o+=n;else for(let t=0;t<r;++t)for(let t=0;t<i;++t)a[o]=e[0],a[o+1]=e[1],a[o+2]=e[2],a[o+3]=e[3],o+=n}function Ze(e,t,r,o,i,a){switch(e){case be.T.POSITION:{(0,ve.hu)(3===t.size);const o=i.getField(e,h.ct);(0,ve.hu)(!!o,`No buffer view for ${e}`),o&&function(e,t,r,o,i=1){if(!t)return void Je(e,r,o,i);const{data:a,indices:s}=e,l=r.typedBuffer,c=r.typedBufferStride,d=s.length,u=t[0],h=t[1],m=t[2],f=t[4],p=t[5],v=t[6],g=t[8],_=t[9],x=t[10],T=t[12],b=t[13],A=t[14];o*=c;let E=0,S=0,y=0;const w=(0,n.lv)(t)?e=>{E=a[e]+T,S=a[e+1]+b,y=a[e+2]+A}:e=>{const t=a[e],r=a[e+1],o=a[e+2];E=u*t+f*r+g*o+T,S=h*t+p*r+_*o+b,y=m*t+v*r+x*o+A};if(1===i)for(let e=0;e<d;++e)w(3*s[e]),l[o]=E,l[o+1]=S,l[o+2]=y,o+=c;else for(let e=0;e<d;++e){w(3*s[e]);for(let e=0;e<i;++e)l[o]=E,l[o+1]=S,l[o+2]=y,o+=c}}(t,r,o,a);break}case be.T.NORMAL:{(0,ve.hu)(3===t.size);const r=i.getField(e,h.ct);(0,ve.hu)(!!r,`No buffer view for ${e}`),r&&function(e,t,r,o,i=1){if(!t)return void Je(e,r,o,i);const{data:a,indices:s}=e,l=t,c=r.typedBuffer,d=r.typedBufferStride,u=s.length,h=l[0],m=l[1],f=l[2],p=l[4],v=l[5],g=l[6],_=l[8],x=l[9],T=l[10],b=!(0,n.pV)(l),A=1e-6,E=1-A;o*=d;let S=0,y=0,w=0;const C=(0,n.lv)(l)?e=>{S=a[e],y=a[e+1],w=a[e+2]}:e=>{const t=a[e],r=a[e+1],o=a[e+2];S=h*t+p*r+_*o,y=m*t+v*r+x*o,w=f*t+g*r+T*o};if(1===i)if(b)for(let e=0;e<u;++e){C(3*s[e]);const t=S*S+y*y+w*w;if(t<E&&t>A){const e=1/Math.sqrt(t);c[o]=S*e,c[o+1]=y*e,c[o+2]=w*e}else c[o]=S,c[o+1]=y,c[o+2]=w;o+=d}else for(let e=0;e<u;++e)C(3*s[e]),c[o]=S,c[o+1]=y,c[o+2]=w,o+=d;else for(let e=0;e<u;++e){if(C(3*s[e]),b){const e=S*S+y*y+w*w;if(e<E&&e>A){const t=1/Math.sqrt(e);S*=t,y*=t,w*=t}}for(let e=0;e<i;++e)c[o]=S,c[o+1]=y,c[o+2]=w,o+=d}}(t,o,r,a);break}case be.T.NORMALCOMPRESSED:{(0,ve.hu)(2===t.size);const r=i.getField(e,h.or);(0,ve.hu)(!!r,`No buffer view for ${e}`),r&&$e(t,r,a);break}case be.T.UV0:{(0,ve.hu)(2===t.size);const r=i.getField(e,h.Eu);(0,ve.hu)(!!r,`No buffer view for ${e}`),r&&$e(t,r,a);break}case be.T.COLOR:case be.T.SYMBOLCOLOR:{const r=i.getField(e,h.mc);(0,ve.hu)(!!r,`No buffer view for ${e}`),(0,ve.hu)(3===t.size||4===t.size),!r||3!==t.size&&4!==t.size||function(e,t,r,o,i=1){const{data:a,indices:n}=e,s=r.typedBuffer,l=r.typedBufferStride,c=n.length;if(o*=l,t!==a.length||4!==t)if(1!==i)if(4!==t)for(let e=0;e<c;++e){const t=3*n[e];for(let e=0;e<i;++e)s[o]=a[t],s[o+1]=a[t+1],s[o+2]=a[t+2],s[o+3]=255,o+=l}else for(let e=0;e<c;++e){const t=4*n[e];for(let e=0;e<i;++e)s[o]=a[t],s[o+1]=a[t+1],s[o+2]=a[t+2],s[o+3]=a[t+3],o+=l}else{if(4===t){for(let e=0;e<c;++e){const t=4*n[e];s[o]=a[t],s[o+1]=a[t+1],s[o+2]=a[t+2],s[o+3]=a[t+3],o+=l}return}for(let e=0;e<c;++e){const t=3*n[e];s[o]=a[t],s[o+1]=a[t+1],s[o+2]=a[t+2],s[o+3]=255,o+=l}}else{s[o]=a[0],s[o+1]=a[1],s[o+2]=a[2],s[o+3]=a[3];const e=new Uint32Array(r.typedBuffer.buffer,r.start),t=l/4,n=e[o/=4];o+=t;const d=c*i;for(let r=1;r<d;++r)e[o]=n,o+=t}}(t,t.size,r,a);break}case be.T.COLORFEATUREATTRIBUTE:{const r=i.getField(e,h.ly);(0,ve.hu)(!!r,`No buffer view for ${e}`),(0,ve.hu)(1===t.size),r&&1===t.size&&function(e,t,r){const{data:o,indices:i}=e,a=t.typedBuffer,n=t.typedBufferStride,s=i.length,l=o[0];r*=n;for(let e=0;e<s;++e)a[r]=l,r+=n}(t,r,a);break}case be.T.TANGENT:{(0,ve.hu)(4===t.size);const r=i.getField(e,h.ek);(0,ve.hu)(!!r,`No buffer view for ${e}`),r&&function(e,t,r,o,i=1){if(!t)return void Xe(e,r,o,i);const{data:a,indices:s}=e,l=t,c=r.typedBuffer,d=r.typedBufferStride,u=s.length,h=l[0],m=l[1],f=l[2],p=l[4],v=l[5],g=l[6],_=l[8],x=l[9],T=l[10],b=!(0,n.pV)(l),A=1e-6,E=1-A;if(o*=d,1===i)for(let e=0;e<u;++e){const t=4*s[e],r=a[t],i=a[t+1],n=a[t+2],l=a[t+3];let u=h*r+p*i+_*n,S=m*r+v*i+x*n,y=f*r+g*i+T*n;if(b){const e=u*u+S*S+y*y;if(e<E&&e>A){const t=1/Math.sqrt(e);u*=t,S*=t,y*=t}}c[o]=u,c[o+1]=S,c[o+2]=y,c[o+3]=l,o+=d}else for(let e=0;e<u;++e){const t=4*s[e],r=a[t],n=a[t+1],l=a[t+2],u=a[t+3];let S=h*r+p*n+_*l,y=m*r+v*n+x*l,w=f*r+g*n+T*l;if(b){const e=S*S+y*y+w*w;if(e<E&&e>A){const t=1/Math.sqrt(e);S*=t,y*=t,w*=t}}for(let e=0;e<i;++e)c[o]=S,c[o+1]=y,c[o+2]=w,c[o+3]=u,o+=d}}(t,o,r,a);break}case be.T.PROFILERIGHT:case be.T.PROFILEUP:case be.T.PROFILEVERTEXANDNORMAL:case be.T.FEATUREVALUE:{(0,ve.hu)(4===t.size);const r=i.getField(e,h.ek);(0,ve.hu)(!!r,`No buffer view for ${e}`),r&&Xe(t,r,a)}}}class Ke{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.attributes.get(be.T.POSITION).indices.length}write(e,t,r,o,i){!function(e,t,r,o,i,a){for(const n of t.fields.keys()){const t=e.attributes.get(n),s=t?.indices;if(t&&s)Ze(n,t,r,o,i,a);else if(n===be.T.OBJECTANDLAYERIDCOLOR&&null!=e.objectAndLayerIdColor){const t=e.attributes.get(be.T.POSITION)?.indices;if(t){const r=t.length,o=i.getField(n,h.mc);Ye(e.objectAndLayerIdColor,o,r,a)}}}}(r,this.vertexBufferLayout,e,t,o,i)}}var Qe=r(57790),et=r(22549),tt=r(135),rt=r(15719),ot=r(96310),it=r(78869),at=r(14589),nt=r(83475),st=r(59377);X.wb.LESS,X.wb.ALWAYS;const lt={mask:255},ct={function:{func:X.wb.ALWAYS,ref:F.hU.OutlineVisualElementMask,mask:F.hU.OutlineVisualElementMask},operation:{fail:X.xS.KEEP,zFail:X.xS.KEEP,zPass:X.xS.ZERO}},dt={function:{func:X.wb.ALWAYS,ref:F.hU.OutlineVisualElementMask,mask:F.hU.OutlineVisualElementMask},operation:{fail:X.xS.KEEP,zFail:X.xS.KEEP,zPass:X.xS.REPLACE}};X.wb.EQUAL,F.hU.OutlineVisualElementMask,F.hU.OutlineVisualElementMask,X.xS.KEEP,X.xS.KEEP,X.xS.KEEP,X.wb.NOTEQUAL,F.hU.OutlineVisualElementMask,F.hU.OutlineVisualElementMask,X.xS.KEEP,X.xS.KEEP,X.xS.KEEP;const ut=[1,1,.5],ht=[0,.6,.2],mt=[0,1,.2];var ft=r(32078);class pt extends rt.d4{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,c.nI)(ut),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=F.Vr.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=(0,c.al)(0,0,0),this.instancedDoublePrecision=!1,this.normalType=ye.r.Attribute,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,c.al)(.2,.2,.2),this.diffuse=(0,c.al)(.8,.8,.8),this.externalColor=(0,et.al)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,c.Ue)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=F.Gv.Less,this.textureAlphaMode=F.JJ.Blend,this.textureAlphaCutoff=ot.F,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=Oe.yD.Occlude,this.isDecoration=!1}}class vt extends at.A{initializeConfiguration(e,t){t.spherical=e.viewingMode===Ae.JY.Global,t.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?tt.N.Default:tt.N.None,t.objectAndLayerIdColorInstanced=t.instanced}initializeProgram(e){return this._initializeProgram(e,vt.shader)}_initializeProgram(e,t){return new st.$(e.rctx,t.get().build(this.configuration),nt.i)}_convertDepthTestFunction(e){return e===F.Gv.Lequal?X.wb.LEQUAL:X.wb.LESS}_makePipeline(e,t){const r=this.configuration,o=e===Re.A.NONE,i=e===Re.A.FrontFace;return(0,Ie.sm)({blending:r.output!==Se.H_.Color&&r.output!==Se.H_.Alpha||!r.transparent?null:o?Ne:Le(e),culling:gt(r)?(0,Ie.zp)(r.cullFace):null,depthTest:{func:Fe(e,this._convertDepthTestFunction(r.customDepthTest))},depthWrite:(o||i)&&r.writeDepth?Ie.LZ:null,colorWrite:Ie.BK,stencilWrite:r.hasOccludees?lt:null,stencilTest:r.hasOccludees?t?dt:ct:null,polygonOffset:o||i?null:(a=r.enableOffset,a?De:null)});var a}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}function gt(e){return e.cullFace!==F.Vr.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}vt.shader=new it.J(ft.D,(()=>r.e(9291).then(r.bind(r,79291))));var _t=r(43697),xt=r(51354),Tt=r(47624),bt=r(67498);class At extends Tt.PO{}(0,_t._)([(0,xt.o)({constValue:!0})],At.prototype,"hasSliceHighlight",void 0),(0,_t._)([(0,xt.o)({constValue:!1})],At.prototype,"hasSliceInVertexProgram",void 0),(0,_t._)([(0,xt.o)({constValue:bt.P.Pass})],At.prototype,"pbrTextureBindType",void 0);class Et extends At{constructor(){super(...arguments),this.output=Se.H_.Color,this.alphaDiscardMode=F.JJ.Opaque,this.doubleSidedMode=we.q.None,this.pbrMode=Ce.f7.Disabled,this.cullFace=F.Vr.None,this.transparencyPassType=Re.A.NONE,this.normalType=ye.r.Attribute,this.textureCoordinateType=tt.N.None,this.customDepthTest=F.Gv.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}(0,_t._)([(0,xt.o)({count:Se.H_.COUNT})],Et.prototype,"output",void 0),(0,_t._)([(0,xt.o)({count:F.JJ.COUNT})],Et.prototype,"alphaDiscardMode",void 0),(0,_t._)([(0,xt.o)({count:we.q.COUNT})],Et.prototype,"doubleSidedMode",void 0),(0,_t._)([(0,xt.o)({count:Ce.f7.COUNT})],Et.prototype,"pbrMode",void 0),(0,_t._)([(0,xt.o)({count:F.Vr.COUNT})],Et.prototype,"cullFace",void 0),(0,_t._)([(0,xt.o)({count:Re.A.COUNT})],Et.prototype,"transparencyPassType",void 0),(0,_t._)([(0,xt.o)({count:ye.r.COUNT})],Et.prototype,"normalType",void 0),(0,_t._)([(0,xt.o)({count:tt.N.COUNT})],Et.prototype,"textureCoordinateType",void 0),(0,_t._)([(0,xt.o)({count:F.Gv.COUNT})],Et.prototype,"customDepthTest",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"spherical",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"hasVertexColors",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"hasSymbolColors",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"hasVerticalOffset",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"hasSlicePlane",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"hasSliceHighlight",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"hasColorTexture",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"hasMetallicRoughnessTexture",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"hasEmissionTexture",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"hasOcclusionTexture",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"hasNormalTexture",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"hasScreenSizePerspective",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"hasVertexTangents",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"hasOccludees",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"multipassEnabled",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"hasModelTransformation",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"offsetBackfaces",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"vvSize",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"vvColor",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"receiveShadows",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"receiveAmbientOcclusion",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"textureAlphaPremultiplied",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"instanced",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"instancedColor",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"objectAndLayerIdColorInstanced",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"instancedDoublePrecision",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"writeDepth",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"transparent",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"enableOffset",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"cullAboveGround",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"snowCover",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"hasColorTextureTransform",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"hasEmissionTextureTransform",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"hasNormalTextureTransform",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"hasOcclusionTextureTransform",void 0),(0,_t._)([(0,xt.o)()],Et.prototype,"hasMetallicRoughnessTextureTransform",void 0),(0,_t._)([(0,xt.o)({constValue:!1})],Et.prototype,"occlusionPass",void 0),(0,_t._)([(0,xt.o)({constValue:!0})],Et.prototype,"hasVvInstancing",void 0),(0,_t._)([(0,xt.o)({constValue:!1})],Et.prototype,"useCustomDTRExponentForWater",void 0),(0,_t._)([(0,xt.o)({constValue:!1})],Et.prototype,"supportsTextureAtlas",void 0),(0,_t._)([(0,xt.o)({constValue:!0})],Et.prototype,"useFillLights",void 0);var St=r(41846);class yt extends vt{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetallicRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=ye.r.Attribute,t.doubleSidedMode=we.q.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,yt.shader)}}yt.shader=new it.J(St.R,(()=>r.e(8096).then(r.bind(r,38096))));class wt extends Oe.F5{constructor(e){super(e,Mt),this.supportsEdges=!0,this.produces=new Map([[Be.r.OPAQUE_MATERIAL,e=>((0,Se.Jb)(e)||(0,Se.Kr)(e))&&!this.parameters.transparent],[Be.r.TRANSPARENT_MATERIAL,e=>((0,Se.Jb)(e)||(0,Se.Kr)(e))&&this.parameters.transparent&&this.parameters.writeDepth],[Be.r.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,e=>((0,Se.Jb)(e)||(0,Se.Kr)(e))&&this.parameters.transparent&&!this.parameters.writeDepth],[Be.r.DRAPED_MATERIAL,e=>(0,Se.xs)(e)]]),this._configuration=new Et,this._vertexBufferLayout=function(e){const t=(0,Ee.U$)().vec3f(be.T.POSITION);return e.normalType===ye.r.Compressed?t.vec2i16(be.T.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(be.T.NORMAL),e.hasVertexTangents&&t.vec4f(be.T.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(be.T.UV0),e.hasVertexColors&&t.vec4u8(be.T.COLOR),e.hasSymbolColors&&t.vec4u8(be.T.SYMBOLCOLOR),(0,G.Z)("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(be.T.OBJECTANDLAYERIDCOLOR),t}(this.parameters)}isVisibleForOutput(e){return e!==Se.H_.Shadow&&e!==Se.H_.ShadowExcludeHighlight&&e!==Se.H_.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{hasInstancedColor:t,hasVertexColors:r,hasSymbolColors:o,vvColor:i}=e,a="replace"===e.colorMixMode,n=e.opacity>0,s=e.externalColor&&e.externalColor[3]>0,l=t||i||o;return r&&l?a||n:r?a?s:n:l?a||n:a?s:n}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=null!=this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=null!=this.parameters.screenSizePerspective,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,null!=this.parameters.customDepthTest&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?F.Vr.None:this.parameters.cullFace,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=null!=this.parameters.modelTransformation,e!==Se.H_.Color&&e!==Se.H_.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=we.q.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?we.q.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?we.q.WindingOrder:we.q.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=null!=t.ssao,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?Ce.f7.Schematic:Ce.f7.Normal:Ce.f7.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<5e5,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,r,o,i,a){if(null!=this.parameters.verticalOffset){const e=r.camera;(0,l.s)(Ht,t[12],t[13],t[14]);let a=null;switch(r.viewingMode){case Ae.JY.Global:a=(0,l.n)(Nt,Ht);break;case Ae.JY.Local:a=(0,l.c)(Nt,It)}let n=0;const s=(0,l.f)(Lt,Ht,e.eye),c=(0,l.l)(s),d=(0,l.i)(s,s,1/c);let u=null;this.parameters.screenSizePerspective&&(u=(0,l.j)(a,d)),n+=(0,Qe.Hx)(e,c,this.parameters.verticalOffset,u??0,this.parameters.screenSizePerspective),(0,l.i)(a,a,n),(0,l.t)(Pt,a,r.transform.inverseRotation),o=(0,l.f)(Ot,o,Pt),i=(0,l.f)(Rt,i,Pt)}var n;(0,Qe.Bw)(e,r,o,i,null!=(n=r.verticalOffset)?(ze.offset=n,ze):null,a)}createGLMaterial(e){return new Ct(e)}createBufferWriter(){return new Ke(this._vertexBufferLayout)}}class Ct extends Me.F{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==Se.H_.Color&&this._output!==Se.H_.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e));const t=this._material.parameters;this.updateTexture(t.textureId);const r=e.camera.viewInverseTransposeMatrix;return(0,l.s)(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?yt:vt,e)}}const Mt=new class extends pt{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}},Ot=(0,c.Ue)(),Rt=(0,c.Ue)(),It=(0,c.al)(0,0,1),Nt=(0,c.Ue)(),Pt=(0,c.Ue)(),Ht=(0,c.Ue)(),Lt=(0,c.Ue)(),Dt=()=>R.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function Ft(e){throw new O.Z("",`Request for object resource failed: ${e}`)}function Bt(e){const t=e.params,r=t.topology;let o=!0;switch(t.vertexAttributes||(Dt().warn("Geometry must specify vertex attributes"),o=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t?.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(Dt().warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),o=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(Dt().warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),o=!1)):(Dt().warn(`Indexed geometry does not specify face indices for '${r}' attribute`),o=!1)}}else Dt().warn("Indexed geometries must specify faces"),o=!1;break}default:Dt().warn(`Unsupported topology '${r}'`),o=!1}e.params.material||(Dt().warn("Geometry requires material"),o=!1);const i=e.params.vertexAttributes;for(const e in i)i[e].values||(Dt().warn("Geometries with externally defined attributes are not yet supported"),o=!1);return o}function Gt(e){const t=(0,d.cS)();return e.forEach((e=>{const r=e.boundingInfo;null!=r&&((0,d.pp)(t,r.bbMin),(0,d.pp)(t,r.bbMax))})),t}function Ut(e){switch(e){case"mask":return F.JJ.Mask;case"maskAndTransparency":return F.JJ.MaskBlend;case"none":return F.JJ.Opaque;default:return F.JJ.Blend}}function zt(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Vt=new P.G(1,2,"wosr");var jt=r(57758);async function Wt(e,t){const r=function(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}((0,o.pJ)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):async function(e,t){const r=await async function(e,t){const r=t?.streamDataRequester;if(r)return async function(e,t,r){const o=await(0,C.q6)(t.request(e,"json",r));if(!0===o.ok)return o.value;(0,N.r9)(o.error),Ft(o.error.details.url)}(e,r,t);const o=await(0,C.q6)((0,w.Z)(e,t));if(!0===o.ok)return o.value.data;(0,N.r9)(o.error),Ft(o.error)}(e,t),o=await async function(e,t){const r=new Array;for(const o in e){const i=e[o],a=i.images[0].data;if(!a){Dt().warn("Externally referenced texture data is not yet supported");continue}const n=i.encoding+";base64,"+a,s="/textureDefinitions/"+o,l="rgba"===i.channels?i.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:X.e8.REPEAT,t:X.e8.REPEAT},preMultiplyAlpha:Ut(l)!==F.JJ.Opaque},d=null!=t&&t.disableTextures?Promise.resolve(null):L(n,t);r.push(d.then((e=>({refId:s,image:e,parameters:c,alphaChannelUsage:l}))))}const o=await Promise.all(r),i={};for(const e of o)i[e.refId]=e;return i}(r.textureDefinitions??{},t);let i=0;for(const e in o)if(o.hasOwnProperty(e)){const t=o[e];i+=t?.image?t.image.width*t.image.height*4:0}return{resource:r,textures:o,size:i+(0,M.Ul)(r)}}(r.url,t)),{engineResources:o,referenceBoundingBox:i}=function(e,t){const r=new Array,o=new Array,i=new Array,a=new I,n=e.resource,s=P.G.parse(n.version||"1.0","wosr");Vt.validate(s);const l=n.model.name,d=n.model.geometries,u=n.materialDefinitions??{},h=e.textures;let m=0;const f=new Map;for(let e=0;e<d.length;e++){const n=d[e];if(!Bt(n))continue;const s=zt(n),l=n.params.vertexAttributes,p=[],v=e=>{if("PerAttributeArray"===n.params.topology)return null;const t=n.params.faces;for(const r in t)if(r===e)return t[r].values;return null},g=l[be.T.POSITION],_=g.values.length/g.valuesPerElement;for(const e in l){const t=l[e],r=t.values,o=v(e)??(0,H.KF)(_);p.push([e,new D.a(r,o,t.valuesPerElement,!0)])}const x=s.texture,T=h&&h[x];if(T&&!f.has(x)){const{image:e,parameters:t}=T,r=new _e(e,t);o.push(r),f.set(x,r)}const b=f.get(x),A=b?b.id:void 0,E=s.material;let S=a.get(E,x);if(null==S){const e=u[E.substring(E.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=T&&T.alphaChannelUsage,o=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,i=T?Ut(T.alphaChannelUsage):void 0,n={ambient:(0,c.nI)(e.diffuse),diffuse:(0,c.nI)(e.diffuse),opacity:1-(e.transparency||0),transparent:o,textureAlphaMode:i,textureAlphaCutoff:.33,textureId:A,initTextureTransparent:!0,doubleSided:!0,cullFace:F.Vr.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:T?.parameters.preMultiplyAlpha??!1};t?.materialParameters&&Object.assign(n,t.materialParameters),S=new wt(n),a.set(E,x,S)}i.push(S);const y=new B.Z(S,p);m+=p.find((e=>e[0]===be.T.POSITION))?.[1]?.indices.length??0,r.push(y)}return{engineResources:[{name:l,stageResources:{textures:o,materials:i,geometries:r},pivotOffset:n.model.pivotOffset,numberOfVertices:m,lodThreshold:null}],referenceBoundingBox:Gt(r)}}(e,t);return{lods:o,referenceBoundingBox:i,isEsriSymbolResource:!1,isWosr:!0}}const a=await(t.cache?t.cache.loadGLTF(r.url,t,!!t.usePBR):(0,x.Q)(new _.C(t.streamDataRequester),r.url,t,t.usePBR)),A=a.model.meta?.ESRI_proxyEllipsoid,S=a.meta.isEsriSymbolResource&&null!=A&&"EsriRealisticTreesStyle"===a.meta.ESRI_webstyle;S&&!a.customMeta.esriTreeRendering&&(a.customMeta.esriTreeRendering=!0,function(e,t){for(let r=0;r<e.model.lods.length;++r){const o=e.model.lods[r];for(const i of o.parts){const o=i.attributes.normal;if(null==o)return;const a=i.attributes.position,d=a.count,u=(0,c.Ue)(),m=(0,c.Ue)(),f=(0,c.Ue)(),p=new Uint8Array(4*d),v=new Float64Array(3*d),g=(0,n.U_)((0,s.Ue)(),i.transform);let _=0,x=0;for(let n=0;n<d;n++){a.getVec(n,m),o.getVec(n,u),(0,l.e)(m,m,i.transform),(0,l.f)(f,m,t.center),(0,l.B)(f,f,t.radius);const s=f[2],c=(0,l.l)(f),d=Math.min(.45+.55*c*c,1);(0,l.B)(f,f,t.radius),null!==g&&(0,l.e)(f,f,g),(0,l.n)(f,f),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,l.o)(f,f,u,s>-1?.2:Math.min(-4*s-3.8,1)),v[_]=f[0],v[_+1]=f[1],v[_+2]=f[2],_+=3,p[x]=255*d,p[x+1]=255*d,p[x+2]=255*d,p[x+3]=255,x+=4}i.attributes.normal=new h.ct(v),i.attributes.color=new h.mc(p)}}}(a,A));const O=!!t.usePBR,R=a.meta.isEsriSymbolResource?{usePBR:O,isSchematic:!1,treeRendering:S,mrrFactors:[...mt]}:{usePBR:O,isSchematic:!1,treeRendering:!1,mrrFactors:[...ut]},G={...t.materialParameters,treeRendering:S},{engineResources:U,referenceBoundingBox:z}=function(e,t,r,o){const a=e.model,n=new Array,s=new Map,_=new Map,x=a.lods.length,A=(0,d.cS)();return a.lods.forEach(((e,S)=>{const w=!0===o.skipHighLods&&(x>1&&0===S||x>3&&1===S)||!1===o.skipHighLods&&null!=o.singleLodIndex&&S!==o.singleLodIndex;if(w&&0!==S)return;const C=new y(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const o=w?new wt({}):function(e,t,r,o,i,a,n){const s=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),d=e.materials.get(t.material),u=null!=t.attributes.texCoord0,h=null!=t.attributes.normal;if(null==d)return null;const m=function(e){switch(e){case"BLEND":return F.JJ.Blend;case"MASK":return F.JJ.Mask;case"OPAQUE":case null:case void 0:return F.JJ.Opaque}}(d.alphaMode);if(!a.has(s)){if(u){const t=(t,r=!1)=>{if(null!=t&&!n.has(t)){const o=e.textures.get(t);if(null!=o){const e=o.data;n.set(t,new _e((0,b.$A)(e)?e.data:e,{...o.parameters,preMultiplyAlpha:!(0,b.$A)(e)&&r,encoding:(0,b.$A)(e)&&null!=e.encoding?e.encoding:void 0}))}}};t(d.textureColor,m!==F.JJ.Opaque),t(d.textureNormal),t(d.textureOcclusion),t(d.textureEmissive),t(d.textureMetallicRoughness)}const r=d.color[0]**(1/jt.j),f=d.color[1]**(1/jt.j),p=d.color[2]**(1/jt.j),v=d.emissiveFactor[0]**(1/jt.j),g=d.emissiveFactor[1]**(1/jt.j),_=d.emissiveFactor[2]**(1/jt.j),x=null!=d.textureColor&&u?n.get(d.textureColor):null,T=function({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:r,roughnessFactor:o,emissiveTexture:i,emissiveFactor:a,occlusionTexture:n}){return null==e&&null==t&&null==i&&(null==a||(0,l.h)(a,c.AG))&&null==n&&(null==o||1===o)&&(null==r||1===r)}({normalTexture:d.textureNormal,metallicRoughnessTexture:d.textureMetallicRoughness,metallicFactor:d.metallicFactor,roughnessFactor:d.roughnessFactor,emissiveTexture:d.textureEmissive,emissiveFactor:d.emissiveFactor,occlusionTexture:d.textureOcclusion});a.set(s,new wt({...o,transparent:m===F.JJ.Blend,customDepthTest:F.Gv.Lequal,textureAlphaMode:m,textureAlphaCutoff:d.alphaCutoff,diffuse:[r,f,p],ambient:[r,f,p],opacity:d.opacity,doubleSided:d.doubleSided,doubleSidedType:"winding-order",cullFace:d.doubleSided?F.Vr.None:F.Vr.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:h?ye.r.Attribute:ye.r.ScreenDerivative,castShadows:!0,textureId:null!=x?x.id:void 0,colorMixMode:d.colorMixMode,normalTextureId:null!=d.textureNormal&&u?n.get(d.textureNormal).id:void 0,textureAlphaPremultiplied:null!=x&&!!x.parameters.preMultiplyAlpha,occlusionTextureId:null!=d.textureOcclusion&&u?n.get(d.textureOcclusion).id:void 0,emissiveTextureId:null!=d.textureEmissive&&u?n.get(d.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=d.textureMetallicRoughness&&u?n.get(d.textureMetallicRoughness).id:void 0,emissiveFactor:[v,g,_],mrrFactors:T?[...ht]:[d.metallicFactor,d.roughnessFactor,o.mrrFactors[2]],isSchematic:T,colorTextureTransformMatrix:E(d.colorTextureTransform),normalTextureTransformMatrix:E(d.normalTextureTransform),occlusionTextureTransformMatrix:E(d.occlusionTextureTransform),emissiveTextureTransformMatrix:E(d.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:E(d.metallicRoughnessTextureTransform),...i}))}const f=a.get(s);if(r.stageResources.materials.push(f),u){const e=e=>{null!=e&&r.stageResources.textures.push(n.get(e))};e(d.textureColor),e(d.textureNormal),e(d.textureOcclusion),e(d.textureEmissive),e(d.textureMetallicRoughness)}return f}(a,e,C,t,r,s,_),{geometry:n,vertexCount:x}=function(e,t){const r=e.attributes.position.count,o=(0,T.p)(e.indices||r,e.primitiveType),a=(0,u.xx)(3*r),{typedBuffer:n,typedBufferStride:s}=e.attributes.position;(0,m.t)(a,n,e.transform,3,s);const l=[[be.T.POSITION,new D.a(a,o,3,!0)]];if(null!=e.attributes.normal){const t=(0,u.xx)(3*r),{typedBuffer:a,typedBufferStride:n}=e.attributes.normal;(0,i.XL)(kt,e.transform),(0,m.a)(t,a,kt,3,n),l.push([be.T.NORMAL,new D.a(t,o,3,!0)])}if(null!=e.attributes.tangent){const t=(0,u.xx)(4*r),{typedBuffer:a,typedBufferStride:n}=e.attributes.tangent;(0,i.XL)(kt,e.transform),(0,f.t)(t,a,kt,4,n),l.push([be.T.TANGENT,new D.a(t,o,4,!0)])}if(null!=e.attributes.texCoord0){const t=(0,u.xx)(2*r),{typedBuffer:i,typedBufferStride:a}=e.attributes.texCoord0;(0,p.n)(t,i,2,a),l.push([be.T.UV0,new D.a(t,o,2,!0)])}if(null!=e.attributes.color){const t=new Uint8Array(4*r);4===e.attributes.color.elementCount?e.attributes.color instanceof h.ek?(0,f.s)(t,e.attributes.color,255):e.attributes.color instanceof h.mc?(0,g.c)(t,e.attributes.color):e.attributes.color instanceof h.v6&&(0,f.s)(t,e.attributes.color,1/256):(t.fill(255),e.attributes.color instanceof h.ct?(0,m.s)(t,e.attributes.color,255,4):e.attributes.color instanceof h.ne?(0,v.c)(t,e.attributes.color.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof h.mw&&(0,m.s)(t,e.attributes.color,1/256,4)),l.push([be.T.COLOR,new D.a(t,o,4,!0)])}return{geometry:new B.Z(t,l),vertexCount:r}}(e,null!=o?o:new wt({})),y=n.boundingInfo;null!=y&&0===S&&((0,d.pp)(A,y.bbMin),(0,d.pp)(A,y.bbMax)),null!=o&&(C.stageResources.geometries.push(n),C.numberOfVertices+=x)})),w||n.push(C)})),{engineResources:n,referenceBoundingBox:A}}(a,R,G,t.skipHighLods&&null==r.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:r.specifiedLodIndex});return{lods:U,referenceBoundingBox:z,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1}}const kt=(0,a.Ue)()},6206:(e,t,r)=>{var o,i;r.d(t,{a9:()=>o}),r(22021),(i=o||(o={}))[i.Multiply=1]="Multiply",i[i.Ignore=2]="Ignore",i[i.Replace=3]="Replace",i[i.Tint=4]="Tint"},1391:(e,t,r)=>{r.d(t,{Zu:()=>l,bA:()=>c,qj:()=>d});var o=r(55039),i=r(2095),a=r(19693),n=r(74709);function s(e){e.varyings.add("linearDepth","float")}function l(e){e.vertex.uniforms.add(new a.A("nearFar",((e,t)=>t.camera.nearFar)))}function c(e){e.vertex.code.add(n.H`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function d(e,t){const{vertex:r}=e;switch(t.output){case o.H_.Color:if(t.receiveShadows)return s(e),void r.code.add(n.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case o.H_.Depth:case o.H_.Shadow:case o.H_.ShadowHighlight:case o.H_.ShadowExcludeHighlight:return e.include(i.up,t),s(e),l(e),c(e),void r.code.add(n.H`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(n.H`void forwardLinearDepth() {}`)}},62707:(e,t,r)=>{r.d(t,{w:()=>i});var o=r(74709);function i(e){e.vertex.code.add(o.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},51666:(e,t,r)=>{r.d(t,{k:()=>a});var o=r(74709),i=r(35065);function a(e,t=!0){e.attributes.add(i.T.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.code.add(o.H`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?o.H`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}},55039:(e,t,r)=>{var o;function i(e){return e===o.Shadow||e===o.ShadowHighlight||e===o.ShadowExcludeHighlight}function a(e){return function(e){return function(e){return l(e)||n(e)}(e)||e===o.Depth}(e)||e===o.Normal}function n(e){return e===o.Highlight||e===o.ObjectAndLayerIdColor}function s(e){return e===o.Color||n(e)}function l(e){return e===o.Color||e===o.Alpha}r.d(t,{H_:()=>o,Jb:()=>a,Kr:()=>i,xs:()=>s}),function(e){e[e.Color=0]="Color",e[e.Depth=1]="Depth",e[e.Normal=2]="Normal",e[e.Shadow=3]="Shadow",e[e.ShadowHighlight=4]="ShadowHighlight",e[e.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",e[e.Highlight=6]="Highlight",e[e.Alpha=7]="Alpha",e[e.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",e[e.CompositeColor=9]="CompositeColor",e[e.COUNT=10]="COUNT"}(o||(o={}))},51546:(e,t,r)=>{r.d(t,{f5:()=>c});var o=r(55488),i=r(10681),a=r(20773),n=r(28712),s=r(70582),l=(r(172),r(74709));function c(e,t){!function(e,t,...r){if(!t.hasSlicePlane){const r=l.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(r),void e.fragment.code.add(r)}t.hasSliceInVertexProgram&&e.vertex.uniforms.add(...r),e.fragment.uniforms.add(...r);const o=l.H`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=l.H`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,a=t.hasSliceHighlight?l.H`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:l.H`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.code.add(o),e.fragment.code.add(o),e.fragment.code.add(a)}(e,t,new s.B("slicePlaneOrigin",((e,r)=>function(e,t,r){if(null==r.slicePlane)return n.AG;const o=d(e,t,r),i=u(o,r.slicePlane),s=h(e,o,r);return null!=s?(0,a.e)(p,i,s):i}(t,e,r))),new s.B("slicePlaneBasis1",((e,r)=>m(t,e,r,r.slicePlane?.basis1))),new s.B("slicePlaneBasis2",((e,r)=>m(t,e,r,r.slicePlane?.basis2))))}function d(e,t,r){return e.instancedDoublePrecision?(0,a.s)(f,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function u(e,t){return null!=e?(0,a.f)(p,t.origin,e):t.origin}function h(e,t,r){return e.hasSliceTranslatedView?null!=t?(0,o.Iu)(g,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function m(e,t,r,o){if(null==o||null==r.slicePlane)return n.AG;const i=d(e,t,r),s=u(i,r.slicePlane),l=h(e,i,r);return null!=l?((0,a.g)(v,o,s),(0,a.e)(p,s,l),(0,a.e)(v,v,l),(0,a.f)(v,v,p)):o}const f=(0,n.Ue)(),p=(0,n.Ue)(),v=(0,n.Ue)(),g=(0,i.Ue)()},77171:(e,t,r)=>{r.d(t,{w:()=>a});var o=r(1391),i=r(74709);function a(e){(0,o.bA)(e),e.vertex.code.add(i.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(i.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},47624:(e,t,r)=>{r.d(t,{PO:()=>x,fQ:()=>b});var o=r(43697),i=r(94315),a=r(4818),n=r(10681),s=r(20773),l=r(28712),c=r(55039),d=r(89243),u=r(93669),h=r(70582),m=r(74709),f=r(19850),p=r(8319),v=r(51354),g=r(35065),_=r(9820);class x extends v.m{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}}(0,o._)([(0,v.o)()],x.prototype,"instancedDoublePrecision",void 0),(0,o._)([(0,v.o)()],x.prototype,"hasModelTransformation",void 0);const T=(0,a.Ue)();function b(e,t){const r=t.hasModelTransformation,o=t.instancedDoublePrecision;r&&(e.vertex.uniforms.add(new p.g("model",(e=>e.modelTransformation??n.Wd))),e.vertex.uniforms.add(new f.c("normalLocalOriginFromModel",(e=>((0,i.XL)(T,e.modelTransformation??n.Wd),T))))),t.instanced&&o&&(e.attributes.add(g.T.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(g.T.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(g.T.INSTANCEMODEL,"mat3"),e.attributes.add(g.T.INSTANCEMODELNORMAL,"mat3"));const a=e.vertex;o&&(a.include(d.$,t),a.uniforms.add(new h.B("viewOriginHi",((e,t)=>(0,_.U8)((0,s.s)(A,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),A))),new h.B("viewOriginLo",((e,t)=>(0,_.GB)((0,s.s)(A,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),A))))),a.code.add(m.H`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?o?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":o?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${o?m.H`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),a.code.add(m.H`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?o?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":o?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===c.H_.Normal&&((0,u._8)(a),a.code.add(m.H`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?o?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":o?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&a.code.add(m.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?o?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":o?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const A=(0,l.Ue)()},60624:(e,t,r)=>{r.d(t,{O:()=>l,r:()=>o});var o,i,a=r(74085),n=r(74709),s=r(35065);function l(e,t){switch(t.normalType){case o.Compressed:e.attributes.add(s.T.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(n.H`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case o.Attribute:e.attributes.add(s.T.NORMAL,"vec3"),e.vertex.code.add(n.H`vec3 normalModel() {
return normal;
}`);break;case o.ScreenDerivative:e.fragment.code.add(n.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,a.Bg)(t.normalType);case o.COUNT:case o.Ground:}}(i=o||(o={}))[i.Attribute=0]="Attribute",i[i.Compressed=1]="Compressed",i[i.Ground=2]="Ground",i[i.ScreenDerivative=3]="ScreenDerivative",i[i.COUNT=4]="COUNT"},37099:(e,t,r)=>{r.d(t,{f:()=>a});var o=r(74709),i=r(35065);function a(e){e.attributes.add(i.T.POSITION,"vec3"),e.vertex.code.add(o.H`vec3 positionModel() { return position; }`)}},76056:(e,t,r)=>{r.d(t,{R:()=>c});var o=r(6206),i=r(74709);function a(e){e.vertex.code.add(i.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${i.H.int(o.a9.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${i.H.int(o.a9.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${i.H.int(o.a9.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${i.H.int(o.a9.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}var n=r(15736),s=r(35065),l=r(57790);function c(e,t){t.hasSymbolColors?(e.include(a),e.attributes.add(s.T.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(i.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new n._("colorMixMode",(e=>l.FZ[e.colorMixMode]))),e.vertex.code.add(i.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},135:(e,t,r)=>{r.d(t,{D:()=>l,N:()=>o});var o,i,a=r(74085),n=r(74709),s=r(35065);function l(e,t){switch(t.textureCoordinateType){case o.Default:return e.attributes.add(s.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(n.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case o.Compressed:return e.attributes.add(s.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(n.H`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case o.Atlas:return e.attributes.add(s.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(s.T.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(n.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:(0,a.Bg)(t.textureCoordinateType);case o.None:return void e.vertex.code.add(n.H`void forwardTextureCoordinates() {}`);case o.COUNT:return}}(i=o||(o={}))[i.None=0]="None",i[i.Default=1]="Default",i[i.Atlas=2]="Atlas",i[i.Compressed=3]="Compressed",i[i.COUNT=4]="COUNT"},11317:(e,t,r)=>{r.d(t,{c:()=>a});var o=r(74709),i=r(35065);function a(e,t){t.hasVertexColors?(e.attributes.add(i.T.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(o.H`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(o.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(o.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},15719:(e,t,r)=>{r.d(t,{Bb:()=>d,d4:()=>u});var o=r(74085),i=r(4818),a=(r(22549),r(60624)),n=r(2095),s=r(74709),l=r(52114),c=r(19850);function d(e,t){switch(t.normalType){case a.r.Attribute:case a.r.Compressed:e.include(a.O,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new l.j("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new c.c("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))),e.vertex.code.add(s.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case a.r.Ground:e.include(n.up,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(s.H`
        void forwardNormal() {
          vNormalWorld = ${t.spherical?s.H`normalize(vPositionWorldCameraRelative);`:s.H`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case a.r.ScreenDerivative:e.vertex.code.add(s.H`void forwardNormal() {}`);break;default:(0,o.Bg)(t.normalType);case a.r.COUNT:}}class u extends n.su{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,i.Ue)()}}},2095:(e,t,r)=>{r.d(t,{su:()=>p,up:()=>f});var o=r(4818),i=r(10681),a=r(28712),n=r(37099),s=r(89243),l=r(70582),c=r(172),d=r(74709),u=r(52114),h=r(19850),m=r(8319);function f(e,t){e.include(n.f);const r=e.vertex;r.include(s.$,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add(new c.J("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new c.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new h.c("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new m.g("transformProjFromView",(e=>e.transformProjFromView)),new u.j("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new l.B("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new l.B("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))),r.code.add(d.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(d.H`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?d.H`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:d.H`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new c.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL))),r.code.add(d.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(d.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class p extends d.K{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,a.Ue)(),this.transformWorldFromViewTL=(0,a.Ue)(),this.transformViewFromCameraRelativeRS=(0,o.Ue)(),this.transformProjFromView=(0,i.Ue)()}}},91982:(e,t,r)=>{r.d(t,{i:()=>s});var o=r(74085),i=r(135),a=r(74709);function n(e){e.fragment.code.add(a.H`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function s(e,t){switch(e.include(i.D,t),t.textureCoordinateType){case i.N.Default:case i.N.Compressed:return void e.fragment.code.add(a.H`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case i.N.Atlas:return e.include(n),void e.fragment.code.add(a.H`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:(0,o.Bg)(t.textureCoordinateType);case i.N.None:case i.N.COUNT:return}}},92555:(e,t,r)=>{r.d(t,{L:()=>m});var o=r(11077),i=r(22549),a=r(20773),n=r(28712),s=r(172),l=r(74709);function c(e){e.vertex.code.add(l.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(l.H`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add(l.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(l.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(l.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(l.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}const d=(0,n.Ue)();var u=r(93669),h=r(71250);function m(e,t){const r=e.vertex;t.hasVerticalOffset?(function(e){e.uniforms.add(new h.N("verticalOffset",((e,t)=>{const{minWorldLength:r,maxWorldLength:i,screenLength:a}=e.verticalOffset,n=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),s=t.camera.pixelRatio||1;return(0,o.s)(f,a*s,n,r,i)})))}(r),t.hasScreenSizePerspective&&(e.include(c),function(e){e.uniforms.add(new s.J("screenSizePerspectiveAlignment",(e=>function(e){return(0,a.s)(d,e.parameters.divisor,e.parameters.offset,e.minScaleFactor)}(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}(r),(0,u.hY)(e.vertex,t)),r.code.add(l.H`
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
    `)):r.code.add(l.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const f=(0,i.Ue)()},89136:(e,t,r)=>{r.d(t,{s:()=>y});var o=r(1391),i=r(55039),a=r(51546),n=r(77171),s=r(60624),l=r(74709),c=r(35065);function d(e,t){const r=t.output===i.H_.ObjectAndLayerIdColor,o=t.objectAndLayerIdColorInstanced;r&&(e.varyings.add("objectAndLayerIdColorVarying","vec4"),o?e.attributes.add(c.T.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):e.attributes.add(c.T.OBJECTANDLAYERIDCOLOR,"vec4")),e.vertex.code.add(l.H`
     void forwardObjectAndLayerIdColor() {
      ${r?o?l.H`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:l.H`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:l.H``} }`),e.fragment.code.add(l.H`
      void outputObjectAndLayerIdColor() {
        ${r?l.H`fragColor = objectAndLayerIdColorVarying;`:l.H``} }`)}var u=r(135),h=r(15719),m=r(41687),f=r(20285);function p(e,t){switch(t.output){case i.H_.Shadow:case i.H_.ShadowHighlight:case i.H_.ShadowExcludeHighlight:e.fragment.include(m.f),e.fragment.code.add(l.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`);break;case i.H_.Depth:e.fragment.include(f.n),e.fragment.code.add(l.H`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`)}}var v=r(22549),g=r(98069);const _=(0,v.al)(1,1,0,1),x=(0,v.al)(1,0,1,1);function T(e){e.fragment.uniforms.add(new g.A("depthTexture",((e,t)=>t.mainDepth))),e.fragment.constants.add("occludedHighlightFlag","vec4",_).add("unoccludedHighlightFlag","vec4",x),e.fragment.code.add(l.H`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}var b=r(92302),A=r(85787),E=r(93669),S=r(47026);function y(e,t){const{vertex:r,fragment:c}=e,m=t.hasColorTexture&&t.alphaDiscardMode!==S.JJ.Opaque;switch(t.output){case i.H_.Depth:case i.H_.Shadow:case i.H_.ShadowHighlight:case i.H_.ShadowExcludeHighlight:case i.H_.ObjectAndLayerIdColor:(0,E.Sv)(r,t),e.include(n.w,t),e.include(u.D,t),e.include(b.k,t),e.include(p,t),e.include(a.f5,t),e.include(d,t),(0,o.Zu)(e),e.varyings.add("depth","float"),m&&c.uniforms.add(new g.A("tex",(e=>e.texture))),r.code.add(l.H`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),e.include(A.z,t),c.code.add(l.H`
          void main(void) {
            discardBySlice(vpos);
            ${m?l.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?l.H`colorUV`:l.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===i.H_.ObjectAndLayerIdColor?l.H`outputObjectAndLayerIdColor();`:l.H`outputDepth(depth);`}
          }
        `);break;case i.H_.Normal:{(0,E.Sv)(r,t),e.include(n.w,t),e.include(s.O,t),e.include(h.Bb,t),e.include(u.D,t),e.include(b.k,t),m&&c.uniforms.add(new g.A("tex",(e=>e.texture))),t.normalType===s.r.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const o=t.normalType===s.r.Attribute||t.normalType===s.r.Compressed;r.code.add(l.H`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${o?l.H`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:l.H`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(a.f5,t),e.include(A.z,t),c.code.add(l.H`
          void main() {
            discardBySlice(vpos);
            ${m?l.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?l.H`colorUV`:l.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===s.r.ScreenDerivative?l.H`vec3 normal = screenDerivativeNormal(vPositionView);`:l.H`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case i.H_.Highlight:(0,E.Sv)(r,t),e.include(n.w,t),e.include(u.D,t),e.include(b.k,t),m&&c.uniforms.add(new g.A("tex",(e=>e.texture))),r.code.add(l.H`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(a.f5,t),e.include(A.z,t),e.include(T,t),c.code.add(l.H`
          void main() {
            discardBySlice(vpos);
            ${m?l.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?l.H`colorUV`:l.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}},5543:(e,t,r)=>{r.d(t,{S:()=>a});var o=r(20285),i=r(74709);function a(e){e.include(o.n),e.code.add(i.H`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromRGBA(vec4 depth, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(depth), nearFar);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTex, 0)));
return linearDepthFromRGBA(texelFetch(depthTex, iuv, 0), nearFar);
}`)}},15817:(e,t,r)=>{r.d(t,{Q:()=>u});var o=r(135),i=r(91982),a=r(19419),n=r(74709),s=r(16374),l=r(98069),c=r(67498),d=r(35065);function u(e,t){const r=e.fragment;t.hasVertexTangents?(e.attributes.add(d.T.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===a.q.WindingOrder?r.code.add(n.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(n.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add(n.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`),t.textureCoordinateType!==o.N.None&&(e.include(i.i,t),r.uniforms.add(t.pbrTextureBindType===c.P.Pass?new l.A("normalTexture",(e=>e.textureNormal)):new s.R("normalTexture",(e=>e.textureNormal))),r.code.add(n.H`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;
return tangentSpace * rawNormal;
}`))}},60464:(e,t,r)=>{r.d(t,{K:()=>K});var o=r(74709),i=r(98069),a=r(43697),n=r(70586),s=r(17445),l=r(76882),c=r(5600),d=(r(80442),r(92604),r(77734),r(52011)),u=r(23727);r(69801),r(44553);var h,m,f,p=r(35371),v=(r(1717),r(84343),r(8344)),g=r(57088),_=r(47859);(f=h||(h={}))[f.FBO=0]="FBO",f[f.DEPTH=1]="DEPTH",f[f.COLOR=2]="COLOR",function(e){e[e.RED=0]="RED",e[e.RG=1]="RG",e[e.RGBA4=2]="RGBA4",e[e.RGBA=3]="RGBA",e[e.RGBA_MIPMAP=4]="RGBA_MIPMAP",e[e.R16F=5]="R16F",e[e.RGBA16F=6]="RGBA16F"}(m||(m={}));const x=new _.X;x.pixelFormat=p.VI.RED,x.internalFormat=p.lP.R8,x.wrapMode=p.e8.CLAMP_TO_EDGE;const T=new _.X;T.pixelFormat=p.VI.RG,T.internalFormat=p.lP.RG8,T.wrapMode=p.e8.CLAMP_TO_EDGE;const b=new _.X;b.internalFormat=p.lP.RGBA4,b.dataType=p.Br.UNSIGNED_SHORT_4_4_4_4,b.wrapMode=p.e8.CLAMP_TO_EDGE;(new _.X).wrapMode=p.e8.CLAMP_TO_EDGE;const A=new _.X;A.wrapMode=p.e8.CLAMP_TO_EDGE,A.samplingMode=p.cw.LINEAR_MIPMAP_LINEAR,A.hasMipmap=!0,A.maxAnisotropy=8;const E=new _.X;E.pixelFormat=p.VI.RED,E.dataType=p.Br.HALF_FLOAT,E.internalFormat=p.lP.R16F,E.samplingMode=p.cw.NEAREST;const S=new _.X;var y;S.dataType=p.Br.HALF_FLOAT,S.internalFormat=p.lP.RGBA16F,S.samplingMode=p.cw.NEAREST,m.RED,m.RG,m.RGBA4,m.RGBA,m.RGBA_MIPMAP,m.R16F,m.RGBA16F,function(e){e[e.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",e[e.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(y||(y={}));const w=new _.X;w.pixelFormat=p.VI.DEPTH_STENCIL,w.dataType=p.Br.UNSIGNED_INT_24_8,w.samplingMode=p.cw.NEAREST,w.wrapMode=p.e8.CLAMP_TO_EDGE,y.DEPTH_STENCIL_TEXTURE,y.DEPTH16_BUFFER,new v.Y(p.Tg.DEPTH_COMPONENT16,4);var C=r(92036),M=r(55039);const O={required:[]},R=(M.H_.Depth,M.H_.CompositeColor,M.H_.Highlight,{required:[M.H_.Depth,M.H_.Normal]});class I extends C.Z{consumes(){return O}get usedMemory(){return 0}get isDecoration(){return!1}get running(){return!1}get materialReference(){return null}modify(e){}get numGeometries(){return 0}get hasOccludees(){return!1}queryRenderOccludedState(e){return!1}}class N extends I{}var P=r(78869),H=r(14589),L=r(83475),D=r(59377),F=r(59915),B=r(27097);class G extends H.A{initializeProgram(e){return new D.$(e.rctx,G.shader.get().build(),L.i)}initializePipeline(){return(0,B.sm)({colorWrite:B.BK})}}G.shader=new P.J(F.S,(()=>r.e(8092).then(r.bind(r,88092))));var U=r(46505);class z extends o.K{constructor(){super(...arguments),this.projScale=1}}class V extends z{constructor(){super(...arguments),this.intensity=1}}class j extends o.K{}class W extends j{constructor(){super(...arguments),this.blurSize=(0,U.Ue)()}}var k,q=r(25377);class $ extends H.A{initializeProgram(e){return new D.$(e.rctx,$.shader.get().build(),L.i)}initializePipeline(){return(0,B.sm)({colorWrite:B.BK})}}$.shader=new P.J(q.S,(()=>r.e(9243).then(r.bind(r,49243)))),r(95720),function(e){e[e.Antialiasing=0]="Antialiasing",e[e.HighQualityTransparency=1]="HighQualityTransparency",e[e.HighResolutionVoxel=2]="HighResolutionVoxel",e[e.HighResolutionAtmosphere=3]="HighResolutionAtmosphere",e[e.SSAO=4]="SSAO",e[e.WaterReflection=5]="WaterReflection",e[e.HighResolutionShadows=6]="HighResolutionShadows",e[e.PhysicalPixelRendering=7]="PhysicalPixelRendering"}(k||(k={}));var J=r(97995);const X=2;let Y=class extends N{constructor(e){super(e),this._context=null,this._passParameters=new V,this._drawParameters=new W,this.produces=new Map([[J.r.SSAO,()=>this._produces()]])}_produces(){return null!=this._enableTime&&null!=this._context}consumes(){return this._produces()?R:O}initializeRenderContext(e){this._context=e,this.addHandles([(0,s.YP)((()=>this.view.qualitySettings.ambientOcclusion||this._context?.isFeatureEnabled(k.SSAO)),(e=>e?this._enable():this._disable()),s.tX)])}uninitializeRenderContext(){this._disable(),this._context=null}_disable(){this._passParameters.noiseTexture=(0,n.M2)(this._passParameters.noiseTexture),this._enableTime=null}destroy(){this._disable()}_enable(){if(null!=this._enableTime||!this._context)return;const e=Uint8Array.from(atob("eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM"),(e=>e.charCodeAt(0))),t=new _.X;t.wrapMode=p.e8.CLAMP_TO_EDGE,t.pixelFormat=p.VI.RGB,t.wrapMode=p.e8.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new g.x(this._context.renderContext.rctx,t,e),null==this._ssaoTechnique&&(this._ssaoTechnique=this._context.techniqueRepository.acquire($)),null==this._blurTechnique&&(this._blurTechnique=this._context.techniqueRepository.acquire(G)),this._enableTime=(0,l.HA)(0),this._context?.requestRender()}renderNode(e,t,r){const o=e.bindParameters,i=o.linearDepth?.colorTexture,a=r?.normals?.colorTexture;if(null==this._enableTime||null==this._context||null==i||!a)return;if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=e.time,void this._context.requestRender();0===this._enableTime&&(this._enableTime=e.time);const n=e.rctx,s=o.camera,l=this.view.qualitySettings.fadeDuration,c=l>0?Math.min(l,e.time-this._enableTime)/l:1;this._passParameters.normalTexture=a,this._passParameters.depthTexture=i,this._passParameters.projScale=1/s.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*Z/(0,q.g)(s)**6*c;const d=s.fullViewport[2],h=s.fullViewport[3],f=Math.round(d/X),v=Math.round(h/X),g=this._context.fbos,_=g.acquire(m.RG,d,h,"ssao input");n.bindFramebuffer(_.fbo),n.setViewport(0,0,d,h),n.bindTechnique(this._ssaoTechnique,o,this._passParameters,this._drawParameters),n.screen.draw(),n.setViewport(0,0,f,v);const x=g.acquire(m.RED,f,v,"ssao blur");n.bindFramebuffer(x.fbo),this._drawParameters.colorTexture=_.colorTexture,(0,u.t8)(this._drawParameters.blurSize,0,X/h);const T=n.bindTechnique(this._blurTechnique,o,this._passParameters,this._drawParameters);n.setViewport(0,0,f,v),n.screen.draw(),_.release();const b=g.acquire(m.RED,f,v,"ssao");return n.bindFramebuffer(b.fbo),n.setViewport(0,0,d,h),n.setClearColor(1,1,1,0),n.clear(p.lk.COLOR_BUFFER_BIT),n.setViewport(0,0,f,v),this._drawParameters.colorTexture=x.colorTexture,(0,u.t8)(this._drawParameters.blurSize,X/d,0),T.bindDraw(this._drawParameters,o,this._passParameters),n.screen.draw(),n.setViewport4fv(s.fullViewport),x.release(),c<1&&this._context.requestRender(),b}};(0,a._)([(0,c.Cb)({constructOnly:!0})],Y.prototype,"view",void 0),(0,a._)([(0,c.Cb)()],Y.prototype,"_context",void 0),Y=(0,a._)([(0,d.j)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],Y);const Z=.5;function K(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add(new i.A("ssaoTex",((e,t)=>t.ssao?.colorTexture))),r.constants.add("blurSizePixelsInverse","float",1/X),r.code.add(o.H`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(o.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},89753:(e,t,r)=>{r.d(t,{XP:()=>w,PN:()=>S,sC:()=>y});var o=r(74085),i=r(20773),a=r(28712),n=r(11077),s=r(22549),l=r(85504),c=r(172),d=r(71250),u=r(74709);function h(e,t){const r=e.fragment,o=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===o?(r.uniforms.add(new c.J("lightingAmbientSH0",((e,t)=>(0,i.s)(m,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===o?(r.uniforms.add(new d.N("lightingAmbientSH_R",((e,t)=>(0,n.s)(f,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new d.N("lightingAmbientSH_G",((e,t)=>(0,n.s)(f,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new d.N("lightingAmbientSH_B",((e,t)=>(0,n.s)(f,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===o&&(r.uniforms.add(new c.J("lightingAmbientSH0",((e,t)=>(0,i.s)(m,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new d.N("lightingAmbientSH_R1",((e,t)=>(0,n.s)(f,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new d.N("lightingAmbientSH_G1",((e,t)=>(0,n.s)(f,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new d.N("lightingAmbientSH_B1",((e,t)=>(0,n.s)(f,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new d.N("lightingAmbientSH_R2",((e,t)=>(0,n.s)(f,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new d.N("lightingAmbientSH_G2",((e,t)=>(0,n.s)(f,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new d.N("lightingAmbientSH_B2",((e,t)=>(0,n.s)(f,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
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
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==l.f7.Normal&&t.pbrMode!==l.f7.Schematic||r.code.add(u.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const m=(0,a.Ue)(),f=(0,s.Ue)();var p=r(60464),v=r(5802),g=r(26322),_=r(27754),x=r(79884),T=r(67498);class b extends x.x{constructor(e,t){super(e,"bool",T.P.Pass,((r,o,i)=>r.setUniform1b(e,t(o,i))))}}var A=r(21437);r(22021),(0,a.Ue)();const E=.4;function S(e){e.constants.add("ambientBoostFactor","float",E)}function y(e){e.uniforms.add(new A.p("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function w(e,t){const r=e.fragment;switch(e.include(p.K,t),t.pbrMode!==l.f7.Disabled&&e.include(g.T,t),e.include(h,t),e.include(_.e),r.code.add(u.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===l.f7.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),S(r),y(r),(0,v.Pe)(r),r.code.add(u.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?u.H`normalize(vPosWorld)`:u.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,v.F1)(r),r.code.add(u.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case l.f7.Disabled:case l.f7.WaterOnIntegratedMesh:case l.f7.Water:e.include(v.kR),r.code.add(u.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case l.f7.Normal:case l.f7.Schematic:r.code.add(u.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(u.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?r.uniforms.add(new b("hasFillLights",((e,t)=>t.enableFillLights))):r.constants.add("hasFillLights","bool",!1),r.code.add(u.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new A.p("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new A.p("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))),r.code.add(u.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(u.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==l.f7.Schematic||t.hasColorTexture?u.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:u.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case l.f7.Terrain:case l.f7.TerrainWithWater:e.include(v.kR),r.code.add(u.H`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluateTerrainLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:(0,o.Bg)(t.pbrMode);case l.f7.COUNT:}}(0,a.Ue)()},5802:(e,t,r)=>{r.d(t,{F1:()=>n,Pe:()=>a,kR:()=>s});var o=r(172),i=r(74709);function a(e){e.uniforms.add(new o.J("mainLightDirection",((e,t)=>t.lighting.mainLight.direction)))}function n(e){e.uniforms.add(new o.J("mainLightIntensity",((e,t)=>t.lighting.mainLight.intensity)))}function s(e){a(e.fragment),n(e.fragment),e.fragment.code.add(i.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}},42001:(e,t,r)=>{r.d(t,{l:()=>s});var o=r(5543),i=r(19693),a=r(74709),n=r(98069);function s(e,t){if(!t.multipassEnabled)return;e.fragment.include(o.S),e.fragment.uniforms.add(new n.A("terrainDepthTexture",((e,t)=>t.multipassTerrain.linearDepth?.colorTexture)),new i.A("nearFar",((e,t)=>t.camera.nearFar)));const r=t.occlusionPass;e.fragment.code.add(a.H`
   ${r?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      vec4 data = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0);
      float linearDepth = linearDepthFromRGBA(data, nearFar);
      ${r?a.H`return fragmentDepth < linearDepth && data != vec4(0.0, 0.0, 0.0, 1.0);`:a.H`
          if(fragmentDepth ${t.cullAboveGround?">":"<="} linearDepth){
            discard;
          }`}
    }`)}},19419:(e,t,r)=>{r.d(t,{k:()=>s,q:()=>o});var o,i,a=r(74085),n=r(74709);function s(e,t){const r=e.fragment;switch(r.code.add(n.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case o.None:r.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case o.View:r.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case o.WindingOrder:r.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,a.Bg)(t.doubleSidedMode);case o.COUNT:}}(i=o||(o={}))[i.None=0]="None",i[i.View=1]="View",i[i.WindingOrder=2]="WindingOrder",i[i.COUNT=3]="COUNT"},26322:(e,t,r)=>{r.d(t,{T:()=>s});var o=r(74709);function i(e){const t=e.fragment.code;t.add(o.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(o.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(o.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var a=r(85504),n=r(27754);function s(e,t){const r=e.fragment.code;e.include(n.e),t.pbrMode!==a.f7.Normal&&t.pbrMode!==a.f7.Schematic&&t.pbrMode!==a.f7.Terrain&&t.pbrMode!==a.f7.TerrainWithWater||(r.add(o.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(o.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==a.f7.Normal&&t.pbrMode!==a.f7.Schematic||(e.include(i),r.add(o.H`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(o.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(o.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(o.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},85504:(e,t,r)=>{r.d(t,{f7:()=>o,jV:()=>h});var o,i,a=r(91982),n=r(70582),s=r(172),l=r(74709),c=r(16374),d=r(98069),u=r(67498);function h(e,t){const r=e.fragment,i=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===o.Normal&&i&&e.include(a.i,t),t.pbrMode!==o.Schematic)if(t.pbrMode!==o.Disabled){if(t.pbrMode===o.Normal){r.code.add(l.H`vec3 mrr;
vec3 emission;
float occlusion;`);const e=t.pbrTextureBindType;t.hasMetallicRoughnessTexture&&(r.uniforms.add(e===u.P.Pass?new d.A("texMetallicRoughness",(e=>e.textureMetallicRoughness)):new c.R("texMetallicRoughness",(e=>e.textureMetallicRoughness))),r.code.add(l.H`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add(e===u.P.Pass?new d.A("texEmission",(e=>e.textureEmissive)):new c.R("texEmission",(e=>e.textureEmissive))),r.code.add(l.H`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add(e===u.P.Pass?new d.A("texOcclusion",(e=>e.textureOcclusion)):new c.R("texOcclusion",(e=>e.textureOcclusion))),r.code.add(l.H`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(l.H`float getBakedOcclusion() { return 1.0; }`),e===u.P.Pass?r.uniforms.add(new s.J("emissionFactor",(e=>e.emissiveFactor)),new s.J("mrrFactors",(e=>e.mrrFactors))):r.uniforms.add(new n.B("emissionFactor",(e=>e.emissiveFactor)),new n.B("mrrFactors",(e=>e.mrrFactors))),r.code.add(l.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${t.hasMetallicRoughnessTexture?l.H`applyMetallnessAndRoughness(${t.hasMetallicRoughnessTextureTransform?l.H`metallicRoughnessUV`:"vuv0"});`:""}

      ${t.hasEmissionTexture?l.H`applyEmission(${t.hasEmissiveTextureTransform?l.H`emissiveUV`:"vuv0"});`:""}

      ${t.hasOcclusionTexture?l.H`applyOcclusion(${t.hasOcclusionTextureTransform?l.H`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else r.code.add(l.H`float getBakedOcclusion() { return 1.0; }`);else r.code.add(l.H`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}r(60537),(i=o||(o={}))[i.Disabled=0]="Disabled",i[i.Normal=1]="Normal",i[i.Schematic=2]="Schematic",i[i.Water=3]="Water",i[i.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",i[i.Terrain=5]="Terrain",i[i.TerrainWithWater=6]="TerrainWithWater",i[i.COUNT=7]="COUNT"},27754:(e,t,r)=>{r.d(t,{e:()=>i});var o=r(74709);function i(e){e.vertex.code.add(o.H`const float PI = 3.141592653589793;`),e.fragment.code.add(o.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},22539:(e,t,r)=>{r.d(t,{XE:()=>m,hb:()=>h}),r(10681),r(28712);var o=r(41687),i=r(71250),a=r(15736),n=r(74709),s=r(79884),l=r(67498);class c extends s.x{constructor(e,t,r){super(e,"mat4",l.P.Draw,((r,o,i,a)=>r.setUniformMatrix4fv(e,t(o,i,a))),r)}}class d extends s.x{constructor(e,t,r){super(e,"mat4",l.P.Pass,((r,o,i)=>r.setUniformMatrix4fv(e,t(o,i))),r)}}var u=r(98069);function h(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new d("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),f(e))}function m(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new c("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),f(e))}function f(e){const t=e.fragment;t.include(o.f),t.uniforms.add(new u.A("shadowMap",((e,t)=>t.shadowMap.depthTexture)),new a._("numCascades",((e,t)=>t.shadowMap.numCascades)),new i.N("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))),t.code.add(n.H`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}},57806:(e,t,r)=>{r.d(t,{DT:()=>u,NI:()=>l,R5:()=>c,av:()=>s,jF:()=>d});var o=r(4818),i=r(135),a=r(74709),n=r(19850);function s(e,t){t.hasColorTextureTransform?(e.vertex.uniforms.add(new n.c("colorTextureTransformMatrix",(e=>e.colorTextureTransformMatrix??o.Wd))),e.varyings.add("colorUV","vec2"),e.vertex.code.add(a.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(a.H`void forwardColorUV(){}`)}function l(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==i.N.None?(e.vertex.uniforms.add(new n.c("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??o.Wd))),e.varyings.add("normalUV","vec2"),e.vertex.code.add(a.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(a.H`void forwardNormalUV(){}`)}function c(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==i.N.None?(e.vertex.uniforms.add(new n.c("emissiveTextureTransformMatrix",(e=>e.emissiveTextureTransformMatrix??o.Wd))),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(a.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(a.H`void forwardEmissiveUV(){}`)}function d(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==i.N.None?(e.vertex.uniforms.add(new n.c("occlusionTextureTransformMatrix",(e=>e.occlusionTextureTransformMatrix??o.Wd))),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(a.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(a.H`void forwardOcclusionUV(){}`)}function u(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==i.N.None?(e.vertex.uniforms.add(new n.c("metallicRoughnessTextureTransformMatrix",(e=>e.metallicRoughnessTextureTransformMatrix??o.Wd))),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(a.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(a.H`void forwardMetallicRoughnessUV(){}`)}},92302:(e,t,r)=>{r.d(t,{k:()=>A});var o=r(172),i=r(79884),a=r(67498);class n extends i.x{constructor(e,t,r){super(e,"vec4",a.P.Pass,((r,o,i)=>r.setUniform4fv(e,t(o,i))),r)}}class s extends i.x{constructor(e,t,r){super(e,"float",a.P.Pass,((r,o,i)=>r.setUniform1fv(e,t(o,i))),r)}}var l=r(74709),c=r(19850),d=r(35065),u=(r(80442),r(22021),r(94315),r(4818),r(55488),r(10681)),h=(r(20773),r(28712)),m=(r(99282),r(43697)),f=r(92036),p=r(5600),v=(r(92604),r(77734),r(52011));let g=class extends f.Z{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};var _,x,T;(0,m._)([(0,p.Cb)()],g.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"DECONFLICTOR_SHOW_GRID",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"LABELS_SHOW_BORDER",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"TEXT_SHOW_BASELINE",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"TEXT_SHOW_BORDER",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"OVERLAY_SHOW_CENTER",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"SHOW_POI",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"I3S_TREE_SHOW_TILES",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"I3S_SHOW_MODIFICATIONS",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),(0,m._)([(0,p.Cb)()],g.prototype,"LINE_WIREFRAMES",void 0),g=(0,m._)([(0,v.j)("esri.views.3d.support.DebugFlags")],g),new g,(T=_||(_={}))[T.Undefined=0]="Undefined",T[T.DefinedSize=1]="DefinedSize",T[T.DefinedScale=2]="DefinedScale",function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(x||(x={})),(0,u.Ue)(),(0,h.Ue)(),(0,u.Ue)(),r(82791);const b=8;function A(e,t){const{vertex:r,attributes:i}=e;t.hasVvInstancing&&(t.vvSize||t.vvColor)&&i.add(d.T.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(r.uniforms.add(new o.J("vvSizeMinSize",(e=>e.vvSize.minSize))),r.uniforms.add(new o.J("vvSizeMaxSize",(e=>e.vvSize.maxSize))),r.uniforms.add(new o.J("vvSizeOffset",(e=>e.vvSize.offset))),r.uniforms.add(new o.J("vvSizeFactor",(e=>e.vvSize.factor))),r.uniforms.add(new c.c("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),r.uniforms.add(new o.J("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),r.code.add(l.H`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(l.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?l.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(l.H`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",b),r.uniforms.add(new s("vvColorValues",(e=>e.vvColor.values),b),new n("vvColorColors",(e=>e.vvColor.colors),b)),r.code.add(l.H`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${t.hasVvInstancing?l.H`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(l.H`vec4 vvColor() { return vec4(1.0); }`)}},96310:(e,t,r)=>{r.d(t,{F:()=>o,b:()=>i});const o=.1,i=.001},85787:(e,t,r)=>{r.d(t,{z:()=>l});var o=r(96310),i=r(74709);function a(e){e.fragment.code.add(i.H`
    #define discardOrAdjustAlpha(color) { if (color.a < ${i.H.float(o.b)}) { discard; } }
  `)}r(79884),r(67498);var n=r(21437),s=r(47026);function l(e,t){!function(e,t,r){const o=e.fragment;switch(t.alphaDiscardMode!==s.JJ.Mask&&t.alphaDiscardMode!==s.JJ.MaskBlend||o.uniforms.add(r),t.alphaDiscardMode){case s.JJ.Blend:return e.include(a);case s.JJ.Opaque:o.code.add(i.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case s.JJ.Mask:o.code.add(i.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case s.JJ.MaskBlend:e.fragment.code.add(i.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}(e,t,new n.p("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}},20787:(e,t,r)=>{r.d(t,{GZ:()=>d});var o=r(23727),i=r(46505),a=r(11077),n=r(22549),s=r(19693),l=r(71250),c=r(74709);function d(e){e.fragment.uniforms.add(new l.N("projInfo",((e,t)=>function(e){const t=e.projectionMatrix;return 0===t[11]?(0,a.s)(u,2/(e.fullWidth*t[0]),2/(e.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):(0,a.s)(u,-2/(e.fullWidth*t[0]),-2/(e.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}(t.camera)))),e.fragment.uniforms.add(new s.A("zScale",((e,t)=>function(e){return 0===e.projectionMatrix[11]?(0,o.t8)(h,0,1):(0,o.t8)(h,1,0)}(t.camera)))),e.fragment.code.add(c.H`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}const u=(0,n.Ue)(),h=(0,i.Ue)()},89243:(e,t,r)=>{r.d(t,{$:()=>i});var o=r(74709);function i({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(o.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(o.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}},90692:(e,t,r)=>{r.d(t,{y:()=>n});var o=r(6206),i=r(74709);function a(e){e.code.add(i.H`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function n(e){e.include(a),e.code.add(i.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i.H.int(o.a9.Multiply)}) {
        return allMixed;
      }
      if (mode == ${i.H.int(o.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.H.int(o.a9.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${i.H.int(o.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.H.int(o.a9.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},41687:(e,t,r)=>{r.d(t,{f:()=>i});var o=r(74709);function i(e){e.code.add(o.H`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}},20285:(e,t,r)=>{r.d(t,{n:()=>i});var o=r(74709);function i(e){e.code.add(o.H`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}},93669:(e,t,r)=>{r.d(t,{hY:()=>m,Sv:()=>f,_8:()=>g});var o=r(55488),i=r(10681),a=r(20773),n=r(28712),s=r(70582),l=r(172),c=(r(21437),r(79884)),d=r(67498);class u extends c.x{constructor(e,t){super(e,"mat4",d.P.Draw,((r,o,i)=>r.setUniformMatrix4fv(e,t(o,i))))}}var h=r(8319);function m(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",n.AG):e.uniforms.add(new s.B("cameraPosition",((e,t)=>(0,a.s)(v,t.camera.viewInverseTransposeMatrix[3]-e.origin[0],t.camera.viewInverseTransposeMatrix[7]-e.origin[1],t.camera.viewInverseTransposeMatrix[11]-e.origin[2]))))}function f(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new h.g("proj",((e,t)=>t.camera.projectionMatrix)),new u("view",((e,t)=>(0,o.Iu)(p,t.camera.viewMatrix,e.origin))),new s.B("localOrigin",(e=>e.origin)));const r=e=>(0,a.s)(v,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new h.g("proj",((e,t)=>t.camera.projectionMatrix)),new h.g("view",((e,t)=>(0,o.Iu)(p,t.camera.viewMatrix,r(t)))),new l.J("localOrigin",((e,t)=>r(t))))}const p=(0,i.Ue)(),v=(0,n.Ue)();function g(e){e.uniforms.add(new h.g("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix)))}},98925:(e,t,r)=>{r.d(t,{q:()=>a});var o=r(79884),i=r(67498);class a extends o.x{constructor(e,t){super(e,"vec2",i.P.Draw,((r,o,i,a)=>r.setUniform2fv(e,t(o,i,a))))}}},19693:(e,t,r)=>{r.d(t,{A:()=>a});var o=r(79884),i=r(67498);class a extends o.x{constructor(e,t){super(e,"vec2",i.P.Pass,((r,o,i)=>r.setUniform2fv(e,t(o,i))))}}},70582:(e,t,r)=>{r.d(t,{B:()=>a});var o=r(79884),i=r(67498);class a extends o.x{constructor(e,t){super(e,"vec3",i.P.Draw,((r,o,i,a)=>r.setUniform3fv(e,t(o,i,a))))}}},172:(e,t,r)=>{r.d(t,{J:()=>a});var o=r(79884),i=r(67498);class a extends o.x{constructor(e,t){super(e,"vec3",i.P.Pass,((r,o,i)=>r.setUniform3fv(e,t(o,i))))}}},71250:(e,t,r)=>{r.d(t,{N:()=>a});var o=r(79884),i=r(67498);class a extends o.x{constructor(e,t){super(e,"vec4",i.P.Pass,((r,o,i)=>r.setUniform4fv(e,t(o,i))))}}},21437:(e,t,r)=>{r.d(t,{p:()=>a});var o=r(79884),i=r(67498);class a extends o.x{constructor(e,t){super(e,"float",i.P.Pass,((r,o,i)=>r.setUniform1f(e,t(o,i))))}}},15736:(e,t,r)=>{r.d(t,{_:()=>a});var o=r(79884),i=r(67498);class a extends o.x{constructor(e,t){super(e,"int",i.P.Pass,((r,o,i)=>r.setUniform1i(e,t(o,i))))}}},52114:(e,t,r)=>{r.d(t,{j:()=>a});var o=r(79884),i=r(67498);class a extends o.x{constructor(e,t){super(e,"mat3",i.P.Draw,((r,o,i)=>r.setUniformMatrix3fv(e,t(o,i))))}}},19850:(e,t,r)=>{r.d(t,{c:()=>a});var o=r(79884),i=r(67498);class a extends o.x{constructor(e,t){super(e,"mat3",i.P.Pass,((r,o,i)=>r.setUniformMatrix3fv(e,t(o,i))))}}},8319:(e,t,r)=>{r.d(t,{g:()=>a});var o=r(79884),i=r(67498);class a extends o.x{constructor(e,t){super(e,"mat4",i.P.Pass,((r,o,i)=>r.setUniformMatrix4fv(e,t(o,i))))}}},33680:(e,t,r)=>{r.d(t,{kG:()=>c});var o=r(20102),i=r(92604),a=r(67498),n=r(11726);const s=()=>i.Z.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class l{constructor(){this._includedModules=new Map}include(e,t){if(this._includedModules.has(e)){const r=this._includedModules.get(e);if(r!==t){s().error("Shader module included multiple times with different configuration.");const t=new Set;for(const o of Object.keys(r))r[o]!==e[o]&&t.add(o);for(const o of Object.keys(e))r[o]!==e[o]&&t.add(o);t.forEach((t=>console.error(`  ${t}: current ${r[t]} new ${e[t]}`)))}}else this._includedModules.set(e,t),e(this.builder,t)}}class c extends l{constructor(){super(...arguments),this.vertex=new h,this.fragment=new h,this.attributes=new m,this.varyings=new f,this.extensions=new p,this.constants=new g,this.outputs=new v}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),o=this.varyings.generateSource(e),i="vertex"===e?this.vertex:this.fragment,a=i.uniforms.generateSource(),n=i.code.generateSource(),s="vertex"===e?x:_,l=this.constants.generateSource().concat(i.constants.generateSource()),c=this.outputs.generateSource(e);return`#version 300 es\n${t.join("\n")}\n\n${s}\n\n${l.join("\n")}\n\n${a.join("\n")}\n\n${r.join("\n")}\n\n${o.join("\n")}\n\n${c.join("\n")}\n\n${n.join("\n")}`}generateBindPass(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const r=e.bind[a.P.Pass];r&&t.set(e.name,r)})),this.fragment.uniforms.entries.forEach((e=>{const r=e.bind[a.P.Pass];r&&t.set(e.name,r)}));const r=Array.from(t.values()),o=r.length;return(t,i)=>{for(let a=0;a<o;++a)r[a](e,t,i)}}generateBindDraw(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const r=e.bind[a.P.Draw];r&&t.set(e.name,r)})),this.fragment.uniforms.entries.forEach((e=>{const r=e.bind[a.P.Draw];r&&t.set(e.name,r)}));const r=Array.from(t.values()),o=r.length;return(t,i,a)=>{for(let n=0;n<o;++n)r[n](e,t,i,a)}}}class d{constructor(){this._entries=new Map}add(...e){for(const t of e)this._add(t)}get(e){return this._entries.get(e)}_add(e){if(null!=e){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new o.Z(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else s().error(`Trying to add null Uniform from ${(new Error).stack}.`)}generateSource(){return Array.from(this._entries.values()).map((e=>null!=e.arraySize?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class u{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class h extends l{constructor(){super(...arguments),this.uniforms=new d,this.code=new u,this.constants=new g}get builder(){return this}}class m{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`in ${e[1]} ${e[0]};`))}}class f{constructor(){this._entries=new Map}add(e,t){this._entries.has(e)&&(0,n.hu)(this._entries.get(e)===t),this._entries.set(e,t)}generateSource(e){const t=new Array;return this._entries.forEach(((r,o)=>t.push("vertex"===e?`out ${r} ${o};`:`in ${r} ${o};`))),t}}class p{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?p.ALLOWLIST_VERTEX:p.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}p.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],p.ALLOWLIST_VERTEX=[];class v{constructor(){this._entries=new Map}add(e,t,r=0){const o=this._entries.get(r);o?(0,n.hu)(o.name===e&&o.type===t,`Fragment shader output location ${r} occupied`):this._entries.set(r,{name:e,type:t})}generateSource(e){if("vertex"===e)return[];0===this._entries.size&&this._entries.set(0,{name:v.DEFAULT_NAME,type:v.DEFAULT_TYPE});const t=new Array;return this._entries.forEach(((e,r)=>t.push(`layout(location = ${r}) out ${e.type} ${e.name};`))),t}}v.DEFAULT_TYPE="vec4",v.DEFAULT_NAME="fragColor";class g{constructor(){this._entries=new Set}add(e,t,r){let o="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":o=g._numberToFloatStr(r);break;case"int":o=g._numberToIntStr(r);break;case"bool":o=r.toString();break;case"vec2":o=`vec2(${g._numberToFloatStr(r[0])},                            ${g._numberToFloatStr(r[1])})`;break;case"vec3":o=`vec3(${g._numberToFloatStr(r[0])},                            ${g._numberToFloatStr(r[1])},                            ${g._numberToFloatStr(r[2])})`;break;case"vec4":o=`vec4(${g._numberToFloatStr(r[0])},                            ${g._numberToFloatStr(r[1])},                            ${g._numberToFloatStr(r[2])},                            ${g._numberToFloatStr(r[3])})`;break;case"ivec2":o=`ivec2(${g._numberToIntStr(r[0])},                             ${g._numberToIntStr(r[1])})`;break;case"ivec3":o=`ivec3(${g._numberToIntStr(r[0])},                             ${g._numberToIntStr(r[1])},                             ${g._numberToIntStr(r[2])})`;break;case"ivec4":o=`ivec4(${g._numberToIntStr(r[0])},                             ${g._numberToIntStr(r[1])},                             ${g._numberToIntStr(r[2])},                             ${g._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":o=`${t}(${Array.prototype.map.call(r,(e=>g._numberToFloatStr(e))).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${o};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const _="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",x="precision highp float;\nprecision highp sampler2D;"},16374:(e,t,r)=>{r.d(t,{R:()=>a});var o=r(79884),i=r(67498);class a extends o.x{constructor(e,t){super(e,"sampler2D",i.P.Draw,((r,o,i)=>r.bindTexture(e,t(o,i))))}}},98069:(e,t,r)=>{r.d(t,{A:()=>a});var o=r(79884),i=r(67498);class a extends o.x{constructor(e,t){super(e,"sampler2D",i.P.Pass,((r,o,i)=>r.bindTexture(e,t(o,i))))}}},79884:(e,t,r)=>{r.d(t,{x:()=>i});var o=r(67498);class i{constructor(e,t,r,i,a=null){if(this.name=e,this.type=t,this.arraySize=a,this.bind={[o.P.Pass]:null,[o.P.Draw]:null},i)switch(r){case o.P.Pass:this.bind[o.P.Pass]=i;break;case o.P.Draw:this.bind[o.P.Draw]=i}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}},74709:(e,t,r)=>{r.d(t,{H:()=>i,K:()=>o});const o=class{};function i(e,...t){let r="";for(let o=0;o<t.length;o++)r+=e[o]+t[o];return r+=e[e.length-1],r}var a;(a=i||(i={})).int=function(e){return Math.round(e).toString()},a.float=function(e){return e.toPrecision(8)}},78869:(e,t,r)=>{r.d(t,{J:()=>o});class o{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}},14589:(e,t,r)=>{r.d(t,{A:()=>a});var o=r(70586),i=r(35371);class a{constructor(e,t,r){this.release=r,this.initializeConfiguration(e,t),this._configuration=t.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=(0,o.M2)(this._program),this._pipeline=this._configuration=null}reload(e){(0,o.M2)(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return i.MX.TRIANGLES}getPipeline(e,t,r){return this._pipeline}initializeConfiguration(e,t){}}},51354:(e,t,r)=>{r.d(t,{m:()=>i,o:()=>a});var o=r(74709);class i extends o.K{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}function a(e={}){return(t,r)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(r),null!=e.constValue)Object.defineProperty(t,r,{get:()=>e.constValue});else{const o=t._parameterNames.length-1,i=e.count||2,a=Math.ceil(Math.log2(i)),n=t._parameterBits??[0];let s=0;for(;n[s]+a>16;)s++,s>=n.length&&n.push(0);t._parameterBits=n;const l=n[s],c=(1<<a)-1<<l;n[s]+=a,Object.defineProperty(t,r,{get(){return this[o]},set(e){if(this[o]!==e&&(this[o]=e,this._keyDirty=!0,this._parameterBits[s]=this._parameterBits[s]&~c|+e<<l&c,"number"!=typeof e&&"boolean"!=typeof e))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof e)}})}}}},17662:(e,t,r)=>{r.d(t,{c:()=>i});var o=r(99001);class i{constructor(){this.id=(0,o.D)()}}},4726:(e,t,r)=>{var o;r.d(t,{U:()=>o}),function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Mesh=2]="Mesh",e[e.Line=3]="Line",e[e.Point=4]="Point",e[e.Material=5]="Material",e[e.Texture=6]="Texture",e[e.COUNT=7]="COUNT"}(o||(o={}))},83475:(e,t,r)=>{r.d(t,{i:()=>i});var o=r(35065);const i=new Map([[o.T.POSITION,0],[o.T.NORMAL,1],[o.T.NORMALCOMPRESSED,1],[o.T.UV0,2],[o.T.COLOR,3],[o.T.COLORFEATUREATTRIBUTE,3],[o.T.SIZE,4],[o.T.TANGENT,4],[o.T.CENTEROFFSETANDDISTANCE,5],[o.T.SYMBOLCOLOR,5],[o.T.FEATUREATTRIBUTE,6],[o.T.INSTANCEFEATUREATTRIBUTE,6],[o.T.INSTANCECOLOR,7],[o.T.OBJECTANDLAYERIDCOLOR,7],[o.T.INSTANCEOBJECTANDLAYERIDCOLOR,7],[o.T.INSTANCEMODEL,8],[o.T.INSTANCEMODELNORMAL,12],[o.T.INSTANCEMODELORIGINHI,11],[o.T.INSTANCEMODELORIGINLO,15]])},60537:(e,t,r)=>{r.d(t,{F:()=>l});var o=r(70586),i=r(95330),a=r(74709),n=r(47026);class s{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}get _markerTextureRepository(){return this._techniqueRepository.constructionContext.markerTextureRepository}ensureTechnique(e,t){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,t),this._technique),this._technique}ensureResources(e){return n.Rw.LOADED}}class l extends s{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRepository,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){this._texture=(0,o.RY)(this._texture),this._textureNormal=(0,o.RY)(this._textureNormal),this._textureEmissive=(0,o.RY)(this._textureEmissive),this._textureOcclusion=(0,o.RY)(this._textureOcclusion),this._textureMetallicRoughness=(0,o.RY)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?n.Rw.LOADED:n.Rw.LOADING}get textureBindParameters(){return new c(null!=this._texture?this._texture.glTexture:null,null!=this._textureNormal?this._textureNormal.glTexture:null,null!=this._textureEmissive?this._textureEmissive.glTexture:null,null!=this._textureOcclusion?this._textureOcclusion.glTexture:null,null!=this._textureMetallicRoughness?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=(0,o.RY)(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}_acquire(e,t){if(null==e)return void t(null);const r=this._textureRepository.acquire(e);if((0,i.y8)(r))return++this._numLoading,void r.then((e=>{if(this._disposed)return(0,o.RY)(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(r)}}class c extends a.K{constructor(e=null,t=null,r=null,o=null,i=null){super(),this.texture=e,this.textureNormal=t,this.textureEmissive=r,this.textureOcclusion=o,this.textureMetallicRoughness=i}}},22631:(e,t,r)=>{r.d(t,{Z:()=>M});var o=r(10681),i=r(20773),a=r(24882),n=r(1533);function s(e){if(e.length<n.c8)return Array.from(e);if((0,n.kJ)(e))return Float64Array.from(e);if(!("BYTES_PER_ELEMENT"in e))return Array.from(e);switch(e.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(e);case 2:return(0,n.Uc)(e)?Uint16Array.from(e):Int16Array.from(e);case 4:return Float32Array.from(e);default:return Float64Array.from(e)}}var l=r(47026),c=r(44553),d=r(28712),u=r(11726);class h{constructor(e,t,r){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.position=r,this._children=void 0,(0,u.hu)(e.length>=1),(0,u.hu)(3===r.size||4===r.size);const{data:o,size:a,indices:n}=r;(0,u.hu)(n.length%this._numIndexPerPrimitive==0),(0,u.hu)(n.length>=e.length*this._numIndexPerPrimitive);const s=e.length;let l=a*n[this._numIndexPerPrimitive*e[0]];m.clear(),m.push(l);const c=(0,d.al)(o[l],o[l+1],o[l+2]),h=(0,d.d9)(c);for(let t=0;t<s;++t){const r=this._numIndexPerPrimitive*e[t];for(let e=0;e<this._numIndexPerPrimitive;++e){l=a*n[r+e],m.push(l);let t=o[l];c[0]=Math.min(t,c[0]),h[0]=Math.max(t,h[0]),t=o[l+1],c[1]=Math.min(t,c[1]),h[1]=Math.max(t,h[1]),t=o[l+2],c[2]=Math.min(t,c[2]),h[2]=Math.max(t,h[2])}}this.bbMin=c,this.bbMax=h;const f=(0,i.o)((0,d.Ue)(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(h[0]-c[0],h[1]-c[1]),h[2]-c[2]);let p=this.radius*this.radius;for(let e=0;e<m.length;++e){l=m.at(e);const t=o[l]-f[0],r=o[l+1]-f[1],i=o[l+2]-f[2],a=t*t+r*r+i*i;if(a<=p)continue;const n=Math.sqrt(a),s=.5*(n-this.radius);this.radius=this.radius+s,p=this.radius*this.radius;const c=s/n;f[0]+=t*c,f[1]+=r*c,f[2]+=i*c}this.center=f,m.clear()}getChildren(){if(this._children||(0,i.a)(this.bbMin,this.bbMax)<=1)return this._children;const e=(0,i.o)((0,d.Ue)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),o=new Array(8);for(let e=0;e<8;++e)o[e]=0;const{data:a,size:n,indices:s}=this.position;for(let i=0;i<t;++i){let t=0;const l=this._numIndexPerPrimitive*this.primitiveIndices[i];let c=n*s[l],d=a[c],u=a[c+1],h=a[c+2];for(let e=1;e<this._numIndexPerPrimitive;++e){c=n*s[l+e];const t=a[c],r=a[c+1],o=a[c+2];t<d&&(d=t),r<u&&(u=r),o<h&&(h=o)}d<e[0]&&(t|=1),u<e[1]&&(t|=2),h<e[2]&&(t|=4),r[i]=t,++o[t]}let l=0;for(let e=0;e<8;++e)o[e]>0&&++l;if(l<2)return;const c=new Array(8);for(let e=0;e<8;++e)c[e]=o[e]>0?new Uint32Array(o[e]):void 0;for(let e=0;e<8;++e)o[e]=0;for(let e=0;e<t;++e){const t=r[e];c[t][o[t]++]=this.primitiveIndices[e]}this._children=new Array;for(let e=0;e<8;++e)void 0!==c[e]&&this._children.push(new h(c[e],this._numIndexPerPrimitive,this.position));return this._children}static prune(){m.prune()}}const m=new c.Z({deallocator:null});var f=r(17662),p=r(4726),v=r(22807),g=r(16996);function _(e,t,r){return(0,i.f)(x,t,e),(0,i.f)(T,r,e),.5*(0,i.l)((0,i.b)(x,x,T))}r(12981),new v.x(g.Ue),new v.x((()=>{return e?{p0:(0,d.d9)(e.p0),p1:(0,d.d9)(e.p1),p2:(0,d.d9)(e.p2)}:{p0:(0,d.Ue)(),p1:(0,d.Ue)(),p2:(0,d.Ue)()};var e}));const x=(0,d.Ue)(),T=(0,d.Ue)(),b=(0,d.Ue)(),A=(0,d.Ue)(),E=(0,d.Ue)(),S=(0,d.Ue)();var y=r(99001);class w{constructor(e){this.channel=e,this.id=(0,y.D)()}}var C=r(35065);r(9820),(0,d.Ue)(),new Float32Array(6);class M extends f.c{constructor(e,t,r=null,o=p.U.Mesh,i=null,n=-1){super(),this.material=e,this.mapPositions=r,this.type=o,this.objectAndLayerIdColor=i,this.edgeIndicesLength=n,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[e,r]of t)this._attributes.set(e,{...r,indices:(0,a.mi)(r.indices)}),e===C.T.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(e).indices.length:this.edgeIndicesLength)}instantiate(e={}){const t=new M(e.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach(((e,r)=>{e.exclusive=!1,t._attributes.set(r,e)})),t._boundingInfo=this._boundingInfo,t.transformation=e.transformation||this.transformation,t}get attributes(){return this._attributes}getMutableAttribute(e){let t=this._attributes.get(e);return t&&!t.exclusive&&(t={...t,exclusive:!0,data:s(t.data)},this._attributes.set(e,t)),t}setAttributeData(e,t){const r=this._attributes.get(e);r&&this._attributes.set(e,{...r,exclusive:!0,data:t})}get indexCount(){const e=this._attributes.values().next().value.indices;return e?.length??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===p.U.Mesh?this._computeAttachmentOriginTriangles(e):this.type===p.U.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(null!=this._transformation&&(0,i.e)(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){return function(e,t){if(!e)return!1;const{size:r,data:o,indices:a}=e;(0,i.s)(t,0,0,0),(0,i.s)(S,0,0,0);let n=0,s=0;for(let e=0;e<a.length-2;e+=3){const l=a[e]*r,c=a[e+1]*r,d=a[e+2]*r;(0,i.s)(b,o[l],o[l+1],o[l+2]),(0,i.s)(A,o[c],o[c+1],o[c+2]),(0,i.s)(E,o[d],o[d+1],o[d+2]);const u=_(b,A,E);u?((0,i.g)(b,b,A),(0,i.g)(b,b,E),(0,i.i)(b,b,1/3*u),(0,i.g)(t,t,b),n+=u):((0,i.g)(S,S,b),(0,i.g)(S,S,A),(0,i.g)(S,S,E),s+=3)}return!(0===s&&0===n||(0!==n?((0,i.i)(t,t,1/n),0):0===s||((0,i.i)(t,S,1/s),0)))}(this.attributes.get(C.T.POSITION),e)}_computeAttachmentOriginLines(e){const t=this.attributes.get(C.T.POSITION);return function(e,t,r){if(!e)return!1;(0,i.s)(r,0,0,0),(0,i.s)(S,0,0,0);let o=0,a=0;const{size:n,data:s,indices:l}=e,c=l.length-1,d=c+(t?2:0);for(let e=0;e<d;e+=2){const t=e<c?e+1:0,d=l[e<c?e:c]*n,u=l[t]*n;b[0]=s[d],b[1]=s[d+1],b[2]=s[d+2],A[0]=s[u],A[1]=s[u+1],A[2]=s[u+2],(0,i.i)(b,(0,i.g)(b,b,A),.5);const h=(0,i.q)(b,A);h>0?((0,i.g)(r,r,(0,i.i)(b,b,h)),o+=h):0===o&&((0,i.g)(S,S,b),a++)}return 0!==o?((0,i.i)(r,r,1/o),!0):0!==a&&((0,i.i)(r,S,1/a),!0)}(t,function(e,t){return!(!("isClosed"in e)||!e.isClosed)&&t.indices.length>2}(this.material.parameters,t),e)}_computeAttachmentOriginPoints(e){return function(e,t){if(!e)return!1;const{size:r,data:o,indices:a}=e;(0,i.s)(t,0,0,0);let n=-1,s=0;for(let e=0;e<a.length;e++){const i=a[e]*r;n!==i&&(t[0]+=o[i],t[1]+=o[i+1],t[2]+=o[i+2],s++),n=i}return s>1&&(0,i.i)(t,t,1/s),s>0}(this.attributes.get(C.T.POSITION),e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.attributes.get(C.T.POSITION);if(!e||0===e.indices.length)return null;const t=this.type===p.U.Mesh?3:1;(0,u.hu)(e.indices.length%t==0,"Indexing error: "+e.indices.length+" not divisible by "+t);const r=(0,a.KF)(e.indices.length/t);return new h(r,t,e)}get transformation(){return this._transformation??o.Wd}set transformation(e){this._transformation=e&&e!==o.Wd?(0,o.d9)(e):null}addHighlight(){const e=new w(l.V_.Highlight);return this.highlights=function(e,t){return null==e&&(e=[]),e.push(t),e}(this.highlights,e),e}removeHighlight(e){this.highlights=function(e,t){if(null==e)return null;const r=e.filter((e=>e!==t));return 0===r.length?null:r}(this.highlights,e)}}},82791:(e,t,r)=>{r.d(t,{F5:()=>u,yD:()=>o});var o,i,a=r(28712),n=(r(74709),r(47026)),s=r(17662),l=r(4726),c=r(83475),d=r(57790);class u extends s.c{constructor(e,t){super(),this.type=l.U.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._vertexAttributeLocations=c.i,this._pp0=(0,a.al)(0,0,1),this._pp1=(0,a.al)(0,0,0),this._parameters=(0,d.Uf)(e,t),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){(0,d.LO)(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bindParameters.decorations===n.Iq.ON)&&0!=(this.parameters.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){this.repository?.materialChanged(this)}queryRenderOccludedState(e){return this.isVisible()&&this.parameters.renderOccluded===e}intersectDraped(e,t,r,o,i,a){return this._pp0[0]=this._pp1[0]=o[0],this._pp0[1]=this._pp1[1]=o[1],this.intersect(e,t,r,this._pp0,this._pp1,i)}}(i=o||(o={}))[i.None=0]="None",i[i.Occlude=1]="Occlude",i[i.Transparent=2]="Transparent",i[i.OccludeAndTransparent=4]="OccludeAndTransparent",i[i.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",i[i.Opaque=16]="Opaque"},59377:(e,t,r)=>{r.d(t,{$:()=>a});var o=r(44553),i=r(49300);class a{constructor(e,t,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new o.Z({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBindPass(this),this.bindDraw=t.generateBindDraw(this),this._fragmentUniforms=(0,i.hZ)()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(null==t?.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let r=this._textures.get(e);return null==r?(r=this._allocTextureUnit(t),this._textures.set(e,r)):r.texture=t,this._context.useProgram(this),this.setUniform1i(e,r.unit),this._context.bindTexture(t,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),this._fragmentUniforms?.forEach((e=>{"sampler2D"!==e.type&&"samplerCube"!==e.type||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}},97995:(e,t,r)=>{var o;r.d(t,{r:()=>o}),function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.OPAQUE_NO_SSAO_DEPTH=3]="OPAQUE_NO_SSAO_DEPTH",e[e.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_NO_SSAO_DEPTH=5]="TRANSPARENT_NO_SSAO_DEPTH",e[e.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=7]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",e[e.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",e[e.ANTIALIASING=12]="ANTIALIASING",e[e.COMPOSITE=13]="COMPOSITE",e[e.BLIT=14]="BLIT",e[e.SSAO=15]="SSAO",e[e.HIGHLIGHT=16]="HIGHLIGHT",e[e.SHADOW_HIGHLIGHT=17]="SHADOW_HIGHLIGHT",e[e.ENVIRONMENT_OPAQUE=18]="ENVIRONMENT_OPAQUE",e[e.ENVIRONMENT_TRANSPARENT=19]="ENVIRONMENT_TRANSPARENT",e[e.LASERLINES=20]="LASERLINES",e[e.LASERLINES_CONTRAST_CONTROL=21]="LASERLINES_CONTRAST_CONTROL",e[e.HUD_MATERIAL=22]="HUD_MATERIAL",e[e.LABEL_MATERIAL=23]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=24]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=25]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=26]="DRAPED_MATERIAL",e[e.DRAPED_WATER=27]="DRAPED_WATER",e[e.VOXEL=28]="VOXEL",e[e.MAX_SLOTS=29]="MAX_SLOTS"}(o||(o={}))},93144:(e,t,r)=>{var o;r.d(t,{A:()=>o}),function(e){e[e.Color=0]="Color",e[e.Alpha=1]="Alpha",e[e.FrontFace=2]="FrontFace",e[e.NONE=3]="NONE",e[e.COUNT=4]="COUNT"}(o||(o={}))},47026:(e,t,r)=>{var o,i,a,n,s,l,c,d,u;r.d(t,{Gv:()=>i,Iq:()=>d,JJ:()=>c,Rw:()=>n,Ti:()=>u,V_:()=>l,Vr:()=>o,hU:()=>s}),function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(o||(o={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(i||(i={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(a||(a={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(n||(n={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(s||(s={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee",e[e.COUNT=2]="COUNT"}(l||(l={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(c||(c={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(d||(d={})),function(e){e.DDS_ENCODING="image/vnd-ms.dds",e.KTX2_ENCODING="image/ktx2",e.BASIS_ENCODING="image/x.basis"}(u||(u={}))},57790:(e,t,r)=>{r.d(t,{FZ:()=>w,Uf:()=>E,Bw:()=>f,LO:()=>S,Hx:()=>A});var o=r(67676),i=r(22021),a=r(20773),n=r(28712),s=r(60437),l=r(4726);function c(e,t,r,o){return function(e,t){return(0,i.t7)(e*Math.max(t.scale,t.minScaleFactor),e,t.factor)}(e,function(e,t,r){const o=r.parameters;return d.scale=Math.min(o.divisor/(t-o.offset),1),d.factor=function(e){return Math.abs(e*e*e)}(e),d}(t,r,o))}r(64822),(0,i.Vl)(10),(0,i.Vl)(12),(0,i.Vl)(70),(0,i.Vl)(40);const d={scale:0,factor:0,minScaleFactor:0};var u=r(11726),h=r(35065);const m=(0,s.Ue)();function f(e,t,r,o,i,a){if(e.visible)if(e.boundingInfo){(0,u.hu)(e.type===l.U.Mesh);const n=t.tolerance;v(e.boundingInfo,r,o,n,i,a)}else{const t=e.attributes.get(h.T.POSITION),n=t.indices;_(r,o,0,n.length/3,n,t,void 0,i,a)}}const p=(0,n.Ue)();function v(e,t,r,o,i,n){if(null==e)return;const l=function(e,t,r){return(0,a.s)(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(t,r,p);if((0,s.op)(m,e.bbMin),(0,s.Tn)(m,e.bbMax),null!=i&&i.applyToAabb(m),function(e,t,r,o){return function(e,t,r,o,i){const a=(e[0]-o-t[0])*r[0],n=(e[3]+o-t[0])*r[0];let s=Math.min(a,n),l=Math.max(a,n);const c=(e[1]-o-t[1])*r[1],d=(e[4]+o-t[1])*r[1];if(l=Math.min(l,Math.max(c,d)),l<0)return!1;if(s=Math.max(s,Math.min(c,d)),s>l)return!1;const u=(e[2]-o-t[2])*r[2],h=(e[5]+o-t[2])*r[2];return l=Math.min(l,Math.max(u,h)),!(l<0)&&(s=Math.max(s,Math.min(u,h)),!(s>l)&&s<1/0)}(e,t,r,o)}(m,t,l,o)){const{primitiveIndices:a,position:s}=e,l=a?a.length:s.indices.length/3;if(l>C){const a=e.getChildren();if(void 0!==a){for(const e of a)v(e,t,r,o,i,n);return}}_(t,r,0,l,s.indices,s,a,i,n)}}const g=(0,n.Ue)();function _(e,t,r,o,i,a,n,s,l){if(n)return function(e,t,r,o,i,a,n,s,l){const{data:c,stride:d}=a,u=e[0],h=e[1],m=e[2],f=t[0]-u,p=t[1]-h,v=t[2]-m;for(let e=r;e<o;++e){const t=n[e];let r=3*t,o=d*i[r++],a=c[o++],_=c[o++],x=c[o];o=d*i[r++];let T=c[o++],A=c[o++],E=c[o];o=d*i[r];let S=c[o++],y=c[o++],w=c[o];null!=s&&([a,_,x]=s.applyToVertex(a,_,x,e),[T,A,E]=s.applyToVertex(T,A,E,e),[S,y,w]=s.applyToVertex(S,y,w,e));const C=T-a,M=A-_,O=E-x,R=S-a,I=y-_,N=w-x,P=p*N-I*v,H=v*R-N*f,L=f*I-R*p,D=C*P+M*H+O*L;if(Math.abs(D)<=Number.EPSILON)continue;const F=u-a,B=h-_,G=m-x,U=F*P+B*H+G*L;if(D>0){if(U<0||U>D)continue}else if(U>0||U<D)continue;const z=B*O-M*G,V=G*C-O*F,j=F*M-C*B,W=f*z+p*V+v*j;if(D>0){if(W<0||U+W>D)continue}else if(W>0||U+W<D)continue;const k=(R*z+I*V+N*j)/D;k>=0&&l(k,b(C,M,O,R,I,N,g),t,!1)}}(e,t,r,o,i,a,n,s,l);const{data:c,stride:d}=a,u=e[0],h=e[1],m=e[2],f=t[0]-u,p=t[1]-h,v=t[2]-m;for(let e=r,t=3*r;e<o;++e){let r=d*i[t++],o=c[r++],a=c[r++],n=c[r];r=d*i[t++];let _=c[r++],x=c[r++],T=c[r];r=d*i[t++];let A=c[r++],E=c[r++],S=c[r];null!=s&&([o,a,n]=s.applyToVertex(o,a,n,e),[_,x,T]=s.applyToVertex(_,x,T,e),[A,E,S]=s.applyToVertex(A,E,S,e));const y=_-o,w=x-a,C=T-n,M=A-o,O=E-a,R=S-n,I=p*R-O*v,N=v*M-R*f,P=f*O-M*p,H=y*I+w*N+C*P;if(Math.abs(H)<=Number.EPSILON)continue;const L=u-o,D=h-a,F=m-n,B=L*I+D*N+F*P;if(H>0){if(B<0||B>H)continue}else if(B>0||B<H)continue;const G=D*C-w*F,U=F*y-C*L,z=L*w-y*D,V=f*G+p*U+v*z;if(H>0){if(V<0||B+V>H)continue}else if(V>0||B+V<H)continue;const j=(M*G+O*U+R*z)/H;j>=0&&l(j,b(y,w,C,M,O,R,g),e,!1)}}const x=(0,n.Ue)(),T=(0,n.Ue)();function b(e,t,r,o,i,n,s){return(0,a.s)(x,e,t,r),(0,a.s)(T,o,i,n),(0,a.b)(s,x,T),(0,a.n)(s,s),s}function A(e,t,r,o,a){let n=(r.screenLength||0)*e.pixelRatio;null!=a&&(n=c(n,o,t,a));const s=n*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,i.uZ)(s*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function E(e,t){const r=t?E(t):{};for(const t in e){let o=e[t];o?.forEach&&(o=y(o)),null==o&&t in r||(r[t]=o)}return r}function S(e,t){let r=!1;for(const i in t){const a=t[i];void 0!==a&&(Array.isArray(a)?null===e[i]?(e[i]=a.slice(),r=!0):(0,o.Vx)(e[i],a)&&(r=!0):e[i]!==a&&(r=!0,e[i]=a))}return r}function y(e){const t=[];return e.forEach((e=>t.push(e))),t}const w={multiply:1,ignore:2,replace:3,tint:4},C=1e3},95720:(e,t,r)=>{var o;r.d(t,{n:()=>o}),function(e){e[e.ANIMATING=0]="ANIMATING",e[e.INTERACTING=1]="INTERACTING",e[e.IDLE=2]="IDLE"}(o||(o={}))},9820:(e,t,r)=>{function o(e,t){const r=e.length;for(let o=0;o<r;++o)a[0]=e[o],t[o]=a[0];return t}function i(e,t){const r=e.length;for(let o=0;o<r;++o)a[0]=e[o],a[1]=e[o]-a[0],t[o]=a[1];return t}r.d(t,{GB:()=>i,U8:()=>o});const a=new Float32Array(2)},27097:(e,t,r)=>{r.d(t,{BK:()=>u,LZ:()=>d,if:()=>a,sm:()=>b,wK:()=>n,zp:()=>c});var o=r(47026),i=r(35371);function a(e,t,r=i.db.ADD,o=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:o[0],g:o[1],b:o[2],a:o[3]}}}function n(e,t,r,o,a=i.db.ADD,n=i.db.ADD,s=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:o,opRgb:a,opAlpha:n,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}const s={face:i.LR.BACK,mode:i.Wf.CCW},l={face:i.LR.FRONT,mode:i.Wf.CCW},c=e=>e===o.Vr.Back?s:e===o.Vr.Front?l:null,d={zNear:0,zFar:1},u={r:!0,g:!0,b:!0,a:!0};function h(e){return S.intern(e)}function m(e){return w.intern(e)}function f(e){return M.intern(e)}function p(e){return R.intern(e)}function v(e){return N.intern(e)}function g(e){return H.intern(e)}function _(e){return D.intern(e)}function x(e){return B.intern(e)}function T(e){return U.intern(e)}function b(e){return V.intern(e)}class A{constructor(e,t){this._makeKey=e,this._makeRef=t,this._interns=new Map}intern(e){if(!e)return null;const t=this._makeKey(e),r=this._interns;return r.has(t)||r.set(t,this._makeRef(e)),r.get(t)??null}}function E(e){return"["+e.join(",")+"]"}const S=new A(y,(e=>({__tag:"Blending",...e})));function y(e){return e?E([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const w=new A(C,(e=>({__tag:"Culling",...e})));function C(e){return e?E([e.face,e.mode]):null}const M=new A(O,(e=>({__tag:"PolygonOffset",...e})));function O(e){return e?E([e.factor,e.units]):null}const R=new A(I,(e=>({__tag:"DepthTest",...e})));function I(e){return e?E([e.func]):null}const N=new A(P,(e=>({__tag:"StencilTest",...e})));function P(e){return e?E([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const H=new A(L,(e=>({__tag:"DepthWrite",...e})));function L(e){return e?E([e.zNear,e.zFar]):null}const D=new A(F,(e=>({__tag:"ColorWrite",...e})));function F(e){return e?E([e.r,e.g,e.b,e.a]):null}const B=new A(G,(e=>({__tag:"StencilWrite",...e})));function G(e){return e?E([e.mask]):null}const U=new A(z,(e=>({__tag:"DrawBuffers",...e})));function z(e){return e?E(e.buffers):null}const V=new A((function(e){return e?E([y(e.blending),C(e.culling),O(e.polygonOffset),I(e.depthTest),P(e.stencilTest),L(e.depthWrite),F(e.colorWrite),G(e.stencilWrite),z(e.drawBuffers)]):null}),(e=>({blending:h(e.blending),culling:m(e.culling),polygonOffset:f(e.polygonOffset),depthTest:p(e.depthTest),stencilTest:v(e.stencilTest),depthWrite:g(e.depthWrite),colorWrite:_(e.colorWrite),stencilWrite:x(e.stencilWrite),drawBuffers:T(e.drawBuffers)})))}}]);