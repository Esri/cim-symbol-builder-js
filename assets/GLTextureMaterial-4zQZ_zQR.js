import{C as e,i as t}from"./promiseUtils-mkxtc0w5.js";import{r as n}from"./tslib.es6-qUHyP9zl.js";import{b as r}from"./vec2-BA-LEgcg.js";import{l as i}from"./vec4-Xgyc9IxX.js";import{n as a}from"./vec4f64-BVLRhYcJ.js";import"./vec3f64-CbPwldcz.js";import{n as o}from"./vec2f64-C5Ma3aci.js";import{At as ee,Mt as s,N as c,Ot as l,Pt as u,_t as d,c as f,gt as p,jt as m,kt as h,l as te,p as ne}from"./VertexColor.glsl-kMrlrQ7p.js";import{E as re,d as g,f as ie,i as _,s as v}from"./getEmissions.glsl-yL67a6JD.js";import{t as y}from"./NoParameters-ZDc3QXO4.js";import{a as b,i as x,n as S,r as C,t as w}from"./Texture2DPassUniform-DmlRZeJi.js";import{a as T}from"./doublePrecisionUtils-Cq7UTe-C.js";import{B as E}from"./intersectWithPolygonOffset-Cb5WCdc0.js";function D(e){e.fragment.uniforms.add(new m(`projInfo`,e=>O(e.camera))),e.fragment.uniforms.add(new u(`zScale`,e=>A(e.camera))),e.fragment.code.add(x`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function O(e){let t=e.projectionMatrix;return t[11]===0?i(k,2/(e.fullWidth*t[0]),2/(e.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):i(k,-2/(e.fullWidth*t[0]),-2/(e.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}var k=a();function A(e){return e.projectionMatrix[11]===0?r(j,0,1):r(j,1,0)}var j=o(),ae=class extends C{constructor(e,t,n){super(e,`mat4`,1,(r,i,a)=>r.setUniformMatrix4fv(e,t(i,a),n))}},oe=class extends ie{constructor(){super(...arguments),this.receiveShadows=!0}};n([g()],oe.prototype,`receiveShadows`,void 0);function se(e,t){return e.receiveShadows&&t.shadowHighlight?.getTexture()!=null}var ce=3e5,M=5e5;function N(){let e=new T,t=e.fragment;return e.include(h),e.include(D),t.include(s),t.include(v),t.uniforms.add(new l(`radius`,e=>P(e.camera))).code.add(x`vec3 sphere[16] = vec3[16](
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
}`),t.code.add(x`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.outputs.add(`fragOcclusion`,`float`),t.uniforms.add(new w(`normalMap`,e=>e.normalTexture),new w(`depthMap`,e=>e.depthTexture),new S(`projScale`,e=>e.projScale),new w(`rnm`,e=>e.noiseTexture),new d(`rnmScale`,(e,t)=>r(F,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height)),new S(`intensity`,e=>e.intensity),new u(`screenSize`,e=>r(F,e.camera.fullWidth,e.camera.fullHeight))).main.add(x`
    float depth = depthFromTexture(depthMap, uv);

    // Early out if depth is out of range, such as in the sky
    if (depth >= 1.0 || depth <= 0.0) {
      fragOcclusion = 1.0;
      return;
    }

    // get the normal of current fragment
    ivec2 iuv = ivec2(uv * vec2(textureSize(normalMap, 0)));
    vec4 norm4 = texelFetch(normalMap, iuv, 0);
    if (norm4.a == 0.0) {
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

    for(int i = 0; i < ${x.int(16)}; ++i) {
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
    float A = max(1.0 - sum * intensity / float(${x.int(16)}), 0.0);

    // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
    A = (pow(A, 0.2) + 1.2 * pow(A, 4.0)) * INV_GAMMA;

    fragOcclusion = A;
  `),e}function P(e){return Math.max(10,e.computeScreenPixelSizeAtDistance(Math.abs(e.relativeElevation*4))*20)}var F=o(),I=Object.freeze(Object.defineProperty({__proto__:null,build:N,getRadius:P},Symbol.toStringTag,{value:`Module`})),L=class extends C{constructor(e,t,n){super(e,`vec2`,2,(r,i,a,o)=>r.setUniform2fv(e,t(i,a,o),n))}};function R(){let e=new T,t=e.fragment;return e.include(h),t.include(s),t.uniforms.add(new w(`depthMap`,e=>e.depthTexture),new _(`tex`,e=>e.colorTexture),new L(`blurSize`,e=>e.blurSize),new S(`projScale`,(e,t)=>{let n=t.camera.distance;return n>5e4?Math.max(0,e.projScale-(n-5e4)):e.projScale})),t.code.add(x`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${x.float(.08)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add(`fragBlur`,`float`),t.main.add(x`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${x.int(4)}; r <= ${x.int(4)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}var z=Object.freeze(Object.defineProperty({__proto__:null,build:R},Symbol.toStringTag,{value:`Module`})),B=class extends C{constructor(e,t,n,r){super(e,`float`,0,(t,i)=>t.setUniform1fv(e,n(i),r),t)}};function V(e,t){e.uniforms.add(new B(`shR`,9,({lighting:e})=>e.sh.r),new B(`shG`,9,({lighting:e})=>e.sh.g),new B(`shB`,9,({lighting:e})=>e.sh.b)),e.code.add(x`vec3 calculateAmbientIrradiance(vec3 normal) {
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
}`),(t.pbrMode===1||t.pbrMode===2)&&e.code.add(x`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance()
{
vec3 ambientLight = 1.2 * (0.282095 * vec3(shR[0], shG[0], shB[0])) - 0.2;
return ambientLight *= skyTransmittance;
}`)}var H=new p(`mainLightDirection`,e=>e.lighting.mainLight.direction),U=new p(`mainLightIntensity`,e=>e.lighting.mainLight.intensity);function W(e){e.uniforms.add(H,U),e.code.add(x`vec3 applyShading(vec3 shadingNormal, float shadow) {
float dotVal = clamp(dot(shadingNormal, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}function G(e){e.code.add(x`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG) {
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.code.add(x`float integratedRadiance(float cosTheta2, float roughness) {
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.code.add(x`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness) {
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function K(e){e.code.add(x`struct PBRShadingInfo
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
};`)}function q(e){e.include(K),e.include(v),e.uniforms.add(H).code.add(x`void calculateCommonInputs(out PBRShadingInfo inputs, vec3 normal, vec3 viewDirection, vec3 upDirection, vec3 albedo) {
vec3 h = normalize(mainLightDirection - viewDirection);
inputs.NdotV = clamp(abs(dot(normal, -viewDirection)), 0.001, 1.0);
inputs.NdotUP = clamp(dot(normal, upDirection), -1.0, 1.0);
inputs.reflectedView = normalize(reflect(-viewDirection, normal));
inputs.RdotUP = clamp(dot(inputs.reflectedView, upDirection), -1.0, 1.0);
inputs.albedoLinear = linearizeGamma(albedo);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
}`),e.code.add(x`vec3 mrr = vec3(0.0, 0.6, 0.2);
void calculatePBRInputs(out PBRShadingInfo inputs, vec3 normal, vec3 viewDirection, vec3 upDirection, vec3 albedo) {
calculateCommonInputs(inputs, normal, viewDirection, upDirection, albedo);
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);
inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);
}`)}function J(e){let t=.3183098861837907;e.constants.add(`PI`,`float`,3.141592653589793),e.constants.add(`LIGHT_NORMALIZATION`,`float`,t),e.constants.add(`INV_PI`,`float`,t),e.constants.add(`ONE_QUATER_PI`,`float`,.78539816339745),e.constants.add(`HALF_PI`,`float`,1.570796326794897),e.constants.add(`THREE_QUATER_PI`,`float`,2.35619449019234),e.constants.add(`TWO_PI`,`float`,6.28318530717958),e.constants.add(`PI_SQUARED`,`float`,9.86960440108936)}function le(e,t){e.include(v),e.include(J),e.include(K),e.include(q),(t.pbrMode===1||t.pbrMode===2||t.pbrMode===5||t.pbrMode===6)&&(e.code.add(x`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),e.code.add(x`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),(t.pbrMode===1||t.pbrMode===2)&&(e.include(G),e.code.add(x`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotUP);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotUP, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`)),(t.pbrMode===5||t.pbrMode===6)&&e.code.add(x`const vec3 fresnelReflectionSimplified = vec3(0.04);
void calculateSimplifiedInputs(out PBRShadingInfo inputs, vec3 normal, vec3 viewDirection, vec3 upDirection, vec3 albedo) {
calculateCommonInputs(inputs, normal, viewDirection, upDirection, albedo);
float lightness = 0.3 * inputs.albedoLinear[0] + 0.5 * inputs.albedoLinear[1] + 0.2 * inputs.albedoLinear[2];
inputs.f0 = (0.85 * lightness + 0.15) * fresnelReflectionSimplified;
inputs.f90 =  vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
}`)}function ue(e,t){e.include(J),e.code.add(x`
    struct PBRShadingWater {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?`2.2`:`2.0`};
  `),e.code.add(x`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),e.code.add(x`float normalDistributionWater(float NdotH, float roughness) {
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),e.code.add(x`float geometricOcclusionKelemen(float LoH) {
return 0.25 / (LoH * LoH);
}`),e.code.add(x`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max) {
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze) * strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}`)}function de(e,t){let n=re(t.output)&&t.receiveShadows;n&&f(e),e.vertex.code.add(x`
    void forwardLinearDepthToReadShadow() { ${b(n,`forwardLinearDepth(gl_Position.w);`)} }
  `)}var fe=class extends C{constructor(e,t,n,r){super(e,`mat4`,2,(n,i,a,o)=>n.setUniformMatrices4fv(e,t(i,a,o),r),n)}},pe=class extends C{constructor(e,t,n,r){super(e,`mat4`,1,(n,i,a)=>n.setUniformMatrices4fv(e,t(i,a),r),n)}};function me(e){e.uniforms.add(new pe(`shadowMapMatrix`,({origin:e},t)=>t.shadowMap.getShadowMapMatrices(e),4)),e.include(Y)}function he(e){e.uniforms.add(new fe(`shadowMapMatrix`,({origin:e},t)=>t.shadowMap.getShadowMapMatrices(e),4)),e.include(Y)}function Y(e){e.uniforms.add(new m(`cascadeDistances`,e=>e.shadowMap.cascadeDistances),new c(`numCascades`,e=>e.shadowMap.numCascades)).code.add(x`const vec3 invalidShadowmapUVZ = vec3(0.0, 0.0, -1.0);
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
int i = _linearDepth < cascadeDistances[1] ? 0 :
_linearDepth < cascadeDistances[2] ? 1 :
_linearDepth < cascadeDistances[3] ? 2 : 3;
if (i >= numCascades) {
return invalidShadowmapUVZ;
}
vec3 lvpos = lightSpacePosition(_worldPos, shadowMapMatrix[i]);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
return invalidShadowmapUVZ;
}
vec2 uvShadow = cascadeCoordinates(i, shadowMapSize, lvpos);
return vec3(uvShadow, lvpos.z);
}`)}var ge=class extends C{constructor(e,t){super(e,`sampler2DShadow`,0,(n,r)=>n.bindTexture(e,t(r)))}},X=class extends te{constructor(){super(...arguments),this.hasShadowHighlights=!1,this.receiveShadows=!0}};n([g()],X.prototype,`hasShadowHighlights`,void 0),n([g()],X.prototype,`receiveShadows`,void 0);function Z(e,t){t.receiveShadows&&e.fragment.include(me),Q(e,t)}function _e(e,t){t.receiveShadows&&e.fragment.include(he),Q(e,t)}function Q(e,t){e.include(de,t);let{hasShadowHighlights:n,receiveShadows:r,spherical:i}=t;r&&(ve(e.fragment,n),e.fragment.code.add(x`float readShadowMap(const in vec3 _worldPos, float _linearDepth) {
vec3 uvzShadow = calculateUVZShadow(_worldPos, _linearDepth, textureSize(shadowMap, 0));
return readShadowMaps(uvzShadow);
}
float readShadowMap(const in vec3 _worldPos ) { return readShadowMap(_worldPos, linearDepth); }`)),e.fragment.uniforms.add(new l(`lightingGlobalFactor`,({lighting:e})=>e.globalFactor)).code.add(x`
      float getShadow(float additionalAmbientScale, float shadow) {
        float ambient = ${b(i,`lightingGlobalFactor * (1.0 - additionalAmbientScale)`,`0.0`)};
        return max(ambient, shadow);
      }

      float readShadow(float additionalAmbientScale, vec3 vpos) {
        return getShadow(additionalAmbientScale, ${b(r,`readShadowMap(vpos)`,`0.0`)});
      }
    `)}function ve(e,t,n=`gl_FragCoord.xy`){t&&e.uniforms.add(new ee(`shadowHighlight`,({shadowHighlight:e})=>e?.getTexture())),e.uniforms.add(new ge(`shadowMap`,({shadowMap:e})=>e.getOutput(5)??e.getOutput(7))).code.add(x`
    float readShadowMaps(const in vec3 uvzShadow) {
      if (uvzShadow.z < 0.0) {
        return 0.0;
      }

      float shadow1 = texture(shadowMap, uvzShadow);
      ${b(t,`float shadow2 = texelFetch(shadowHighlight, ivec2(${n}), 0).r;
         return shadow1 > shadow2 ? shadow1 : shadow2;`,`return shadow1;`)}
    }
  `)}function ye(e){e.include(ne),e.code.add(x`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      if (mode == ${x.int(3)}) {
        return externalColor;
      }

      vec3 internalMixed = internalColor * textureColor;
      if (mode == ${x.int(2)}) {
        return internalMixed;
      }

      if (mode == ${x.int(1)}) {
        return internalMixed * externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      if (mode == ${x.int(3)}) {
        return externalOpacity;
      }

      float internalMixed = internalOpacity * textureOpacity;
      if (mode == ${x.int(2)}) {
        return internalMixed;
      }

      // multiply or tint (or something invalid)
      return internalMixed * externalOpacity;
    }
  `)}function be(e,{spherical:t}){e.code.add(`vec3 normalize4(vec4 vector){ return normalize(vector.xyz / vector.w); }`),e.code.add(t?`vec3 getLocalUp(in vec3 pos, in vec3 origin) { return normalize(pos + origin); }
         vec3 getLocalUp(in vec3 pos) { return normalize(pos); }`:`vec3 getLocalUp(in vec3 pos, in vec3 origin) { return vec3(0.0, 0.0, 1.0); }
         vec3 getLocalUp(in vec3 pos) { return vec3(0.0, 0.0, 1.0); }`),t?e.code.add(x`mat3 getTBNMatrix(in vec3 n) {
vec3 t = normalize(cross(vec3(0.0, 0.0, 1.0), n));
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`):e.code.add(x`mat3 getTBNMatrix(in vec3 n) {
vec3 t = vec3(1.0, 0.0, 0.0);
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`)}var xe=class extends E{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textures=e.textures,this.updateTexture(e.textureId),this._acquire(e.normalTextureId,e=>this._textureNormal=e),this._acquire(e.emissiveTextureId,e=>this._textureEmissive=e),this._acquire(e.occlusionTextureId,e=>this._textureOcclusion=e),this._acquire(e.metallicRoughnessTextureId,e=>this._textureMetallicRoughness=e)}dispose(){super.dispose(),this._texture=e(this._texture),this._textureNormal=e(this._textureNormal),this._textureEmissive=e(this._textureEmissive),this._textureOcclusion=e(this._textureOcclusion),this._textureMetallicRoughness=e(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?2:1}get textureBindParameters(){return new $(this._texture?.texture??null,this._textureNormal?.texture??null,this._textureEmissive?.texture??null,this._textureOcclusion?.texture??null,this._textureMetallicRoughness?.texture??null)}updateTexture(t){(this._texture==null||t!==this._texture.id)&&(this._texture=e(this._texture),this._acquire(t,e=>this._texture=e))}_acquire(n,r){if(n==null){r(null);return}let i=this._textures.acquire(n);t(i)?(++this._numLoading,i.then(t=>{this._disposed?(e(t),r(null)):r(t)}).finally(()=>--this._numLoading)):r(i)}},Se=class extends y{constructor(e=null){super(),this.textureEmissive=e}},$=class extends Se{constructor(e,t,n,r,i,a,o){super(n),this.texture=e,this.textureNormal=t,this.textureOcclusion=r,this.textureMetallicRoughness=i,this.scale=a,this.normalTextureTransformMatrix=o}};export{se as C,M as S,D as T,L as _,_e as a,N as b,ue as c,W as d,H as f,z as g,R as h,ye as i,J as l,V as m,$ as n,Z as o,U as p,be as r,le as s,xe as t,q as u,I as v,ae as w,ce as x,P as y};