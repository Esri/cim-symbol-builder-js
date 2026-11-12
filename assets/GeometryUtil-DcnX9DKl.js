const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./FocusArea.glsl-74Xb3s6f.js","./signal--RtIqjCS.js","./string-BMjYH0yQ.js","./arrayUtils-B0XE_S9U.js","./compilerUtils-v_b8Y8TS.js","./typedArrayUtil-CCxBF8Zf.js","./ObservableBase-CUXK8P9Q.js","./Error-BHEe1KT4.js","./handleUtils-Vk04vr1l.js","./SimpleObservable-BcO8iaYy.js","./VertexColor.glsl-kMrlrQ7p.js","./mathUtils-DR0Fu_aL.js","./tslib.es6-qUHyP9zl.js","./Accessor-zYpqlCzJ.js","./promiseUtils-mkxtc0w5.js","./ensureType-BFg11ELB.js","./MapUtils-deRJXRqb.js","./jsonMap-YPqQJJkw.js","./iteratorUtils-DBcVBxFg.js","./scheduling-D3L0ELcq.js","./nextTick-e2wXLyPh.js","./PooledArray-CTqJLNLZ.js","./time-DFRR6PQm.js","./vec2-BA-LEgcg.js","./common-P5YjxI0E.js","./mat3-AUeZxTOE.js","./mat3f64-0nIg8LsN.js","./screenUtils-xZ_8ydnt.js","./Polygon-BWq3jBFs.js","./Extent-Bv-n5CVC.js","./Point-DjO8cDZ0.js","./JSONSupport-hTVhdGMF.js","./SpatialReference-CIyCFrUG.js","./units-DwR45CpH.js","./Ellipsoid-Co4rBm1M.js","./spatialReferenceUtils-Bh6NHsAv.js","./pe-BLpm-Z-V.js","./assets-runngMVa.js","./request-CxKUGKEk.js","./centroid-DeYgFA4E.js","./coordsUtils-CAt0z213.js","./curveUtils-Cl8O0kR9.js","./zmUtils-Dz9p0SjY.js","./boundsUtils-Cx2FmC0g.js","./aaBoundingRect-CUZ-ALsn.js","./curveExtent-BbfGh2oh.js","./ellipticArc7Utils-aZnhA3FX.js","./vec4-Xgyc9IxX.js","./vec4f64-BVLRhYcJ.js","./guards-1OFa44Mn.js","./vec3f64-CbPwldcz.js","./mat4-CmtBNVDy.js","./vec3-mgEpaRyZ.js","./mat4f64-E_FXCKxO.js","./aaBoundingBox-px6nwz1j.js","./DoubleArray-3j18yY5S.js","./lengthUtils-Bb2QXcO9.js","./Texture-D1O_kIYy.js","./enums-DkCFWTlr.js","./vec2f64-C5Ma3aci.js","./Indices-CLqnxyCN.js","./vectorStacks-BrpRk3Kn.js","./quatf64-k5wgVIIU.js","./ray-BoVkESg_.js","./lineSegment-BKC_hj3F.js","./getEmissions.glsl-yL67a6JD.js","./NoParameters-ZDc3QXO4.js","./Texture2DPassUniform-DmlRZeJi.js","./colorUtils-DAQ0jxKw.js","./sphere-aA8i3Ck5.js","./plane-DxF7WFg4.js","./mathUtils-DNa5017A.js","./InterleavedLayout-DCoaJu4J.js","./BufferView-DLXj3zbm.js","./types-Ct5BpG05.js","./VertexElementDescriptor-DVcI4qMB.js","./VertexAttributeLocations-DIdXoBZ2.js","./AlphaCutoff-oLlTLP5G.js","./RenderingContext-DII_kTco.js","./ProgramCache-Bch_IMWe.js","./VertexArrayObject-UvwJjR8z.js","./VertexBuffer-DfXDjebB.js","./DebugRendererInfo-IzJAyK7D.js","./doublePrecisionUtils-Cq7UTe-C.js","./HUDMaterial.glsl-D5b_K7yF.js"])))=>i.map(i=>d[i]);
import{n as e}from"./compilerUtils-v_b8Y8TS.js";import{r as t}from"./arrayUtils-B0XE_S9U.js";import"./string-BMjYH0yQ.js";import"./typedArrayUtil-CCxBF8Zf.js";import{A as n}from"./promiseUtils-mkxtc0w5.js";import{a as r}from"./request-CxKUGKEk.js";import{d as i,g as a}from"./mathUtils-DR0Fu_aL.js";import{r as o}from"./tslib.es6-qUHyP9zl.js";import{A as s,E as c,T as l,c as u,w as d}from"./Accessor-zYpqlCzJ.js";import{n as f}from"./JSONSupport-hTVhdGMF.js";import{U as p}from"./units-DwR45CpH.js";import{o as m}from"./Point-DjO8cDZ0.js";import{T as h,a as g,b as _}from"./vec2-BA-LEgcg.js";import{r as v,t as y}from"./vec4f64-BVLRhYcJ.js";import{t as b}from"./Evented-DVSUZO-X.js";import{r as x}from"./reactiveUtils-C42zI24e.js";import{i as S}from"./uuid-xx6QWOZ-.js";import{d as C,r as w,s as T}from"./vec3f64-CbPwldcz.js";import{i as ee}from"./projectBuffer-Cp1JR1fz.js";import{D as te,w as ne,x as E}from"./mat4-CmtBNVDy.js";import{C as D,D as O,F as re,N as k,_ as ie,a as ae,f as A,h as j,i as M,j as N,s as oe}from"./vec3-mgEpaRyZ.js";import{r as se,t as ce}from"./mat4f64-E_FXCKxO.js";import{a as le}from"./DoubleArray-3j18yY5S.js";import{I as P,M as ue,c as de,h as fe,i as pe}from"./aaBoundingBox-px6nwz1j.js";import{t as me}from"./signal--RtIqjCS.js";import{c as he,p as ge,s as _e}from"./enums-DkCFWTlr.js";import{n as ve}from"./vec2f64-C5Ma3aci.js";import{n as ye,t as be}from"./Indices-CLqnxyCN.js";import{S as xe,l as Se,n as Ce}from"./plane-DxF7WFg4.js";import{i as we}from"./mathUtils-DNa5017A.js";import{i as Te}from"./ray-BoVkESg_.js";import{At as Ee,Et as De,F as Oe,Ft as ke,G as Ae,H as je,It as Me,L as Ne,M as Pe,Nt as Fe,Ot as Ie,Q as Le,R as Re,U as ze,V as Be,W as Ve,Y as He,_t as Ue,at as We,bt as Ge,d as Ke,et as qe,f as Je,ht as Ye,kt as Xe,m as Ze,ot as F,p as Qe,q as $e,rt as et,tt as I,u as tt,z as nt}from"./VertexColor.glsl-kMrlrQ7p.js";import{r as L}from"./orientedBoundingBox-sriWU4z2.js";import{E as rt,d as it,r as at,w as ot}from"./getEmissions.glsl-yL67a6JD.js";import{t as st}from"./NoParameters-ZDc3QXO4.js";import{a as R,i as z,n as B,t as ct}from"./Texture2DPassUniform-DmlRZeJi.js";import{n as lt}from"./sphere-aA8i3Ck5.js";import{i as ut,n as dt,s as ft}from"./InterleavedLayout-DCoaJu4J.js";import{a as pt,t as mt}from"./doublePrecisionUtils-Cq7UTe-C.js";import{n as V,r as ht,t as H}from"./vec3f32-CQLLad-g.js";import{o as gt,r as _t,s as vt,u as yt}from"./RenderingContext-DII_kTco.js";import{t as bt}from"./Octree-DtExQckJ.js";import{i as xt,n as St,r as Ct,t as wt}from"./ShaderTechnique-mpbe1FOx.js";function Tt(e){return Et.has(e)}var Et=new Set(`position.normal.normalCompressed.uv0.size.rotation.offset.perspectiveDivide.centerOffset.groundDistance.previousDelta.lineParameters.sizeFeatureAttribute.profileRight.profileUp.pathVertexInfo.profileRotation.pathRotationUp.pathMaxStretchDistance.featureAttribute.position.size.sizeFeatureAttribute.profileRight.profileUp.profileRotation.pathRotationUp.pathMaxStretchDistance`.split(`.`)),Dt=class{constructor(){this.box=ue(),this.sphere=new lt}};function Ot(e,t,n){let r=de(t,At),i=fe(t,jt);if(ne(n)){let t=ie(kt,n[12],n[13],n[14]);O(U,r,t),O(W,i,t),P(e,U),P(e,W)}else if(A(U,r,n),P(e,U),!oe(r,i)){A(W,i,n),P(e,W);for(let t=0;t<3;++t)D(U,r),D(W,i),U[t]=i[t],W[t]=r[t],A(U,U,n),A(W,W,n),P(e,U),P(e,W)}}var kt=w(),U=w(),W=w(),At=w(),jt=w();function Mt(e,t){return e??=[],e.push(t),e}function Nt(e,t){if(e==null)return null;let n=e.filter(e=>e!==t);return n.length===0?null:n}function Pt(e,t,n,r,i){Ft[0]=e.get(t,0),Ft[1]=e.get(t,1),Ft[2]=e.get(t,2),mt(Ft,G,3),n.set(i,0,G[0]),r.set(i,0,G[1]),n.set(i,1,G[2]),r.set(i,1,G[3]),n.set(i,2,G[4]),r.set(i,2,G[5])}var Ft=w(),G=new Float32Array(6),It=class{constructor(e={}){this.id=u(),this.type=0,this._highlightIds=new Set,this._shaderTransformation=null,this._visible=!0,this.castShadow=e.castShadow??!0,this.usesVerticalDistanceToGround=e.usesVerticalDistanceToGround??!1,this.graphicUid=e.graphicUid,this.layerViewUid=e.layerViewUid,e.isElevationSource&&(this.lastValidElevationBB=ue()),this._geometries=e.geometries?Array.from(e.geometries):[]}dispose(){this._geometries.length=0}get layer(){return this._layer}set layer(e){ut(this._layer==null||e==null,`Object3D can only be added to a single Layer`),this._layer=e}addGeometry(e){e.visible=this._visible,this._geometries.push(e);for(let t of this._highlightIds)e.addHighlight(t);this._emit(`geometriesChanged`,{object:this,removed:[],added:[e]}),this._highlightIds.size&&this._emit(`highlightChanged`,this),this._invalidateBoundingVolume()}removeGeometry(e){let t=this._geometries.splice(e,1)[0];if(t){for(let e of this._highlightIds)t.removeHighlight(e);this._emit(`geometriesChanged`,{object:this,removed:[t],added:[]}),this._highlightIds.size&&this._emit(`highlightChanged`,this),this._invalidateBoundingVolume()}}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}replaceGeometries(e){let t=this._geometries,n=Array.from(e);for(let e of t)for(let t of this._highlightIds)e.removeHighlight(t);for(let e of n){e.visible=this._visible;for(let t of this._highlightIds)e.addHighlight(t)}this._geometries=n,this._invalidateBoundingVolume(),this._emit(`geometriesChanged`,{object:this,removed:t,added:n}),this._highlightIds.size&&this._emit(`highlightChanged`,this)}geometryVertexAttributeUpdated(e,t,n=!1){this._emit(`attributesChanged`,{object:this,geometry:e,attribute:t,sync:n}),Tt(t)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(e){if(this._visible!==e){this._visible=e;for(let e of this._geometries)e.visible=this._visible;this._emit(`visibilityChanged`,this)}}maskOccludee(){let e=new Me;for(let t of this._geometries)t.occludees=Mt(t.occludees,e);return this._emit(`occlusionChanged`,this),e}removeOcclude(e){for(let t of this._geometries)t.occludees=Nt(t.occludees,e);this._emit(`occlusionChanged`,this)}highlight(e){let t=new ke(e);for(let e of this._geometries)e.addHighlight(t);return this._emit(`highlightChanged`,this),this._highlightIds.add(t),t}removeHighlight(e){this._highlightIds.delete(e);for(let t of this._geometries)t.removeHighlight(e);this._emit(`highlightChanged`,this)}removeStateID(e){e.channel===0?this.removeHighlight(e):this.removeOcclude(e)}getCombinedStaticTransformation(e,t){return te(t,this.transformation,e.transformation)}getCombinedShaderTransformation(e,t=ce()){return te(t,this.effectiveTransformation,e.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=new Dt,this._validateBoundingVolume(this._bvWorldSpace,0)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=new Dt,this._validateBoundingVolume(this._bvObjectSpace,1)),this._bvObjectSpace}_validateBoundingVolume(e,t){let n=t===1;for(let t of this._geometries){let r=t.boundingInfo;r&&Ot(e.box,r.box,n?t.transformation:this.getCombinedShaderTransformation(t))}pe(e.box,e.sphere.center);for(let t of this._geometries){let r=t.boundingInfo;if(r==null)continue;let i=n?t.transformation:this.getCombinedShaderTransformation(t),a=we(i);A(Lt,r.sphere.center,i);let o=re(Lt,e.sphere.center),s=r.sphere.radius*a;e.sphere.radius=Math.max(e.sphere.radius,o+s)}}_invalidateBoundingVolume(){let e=this._bvWorldSpace?.sphere;this._bvObjectSpace=this._bvWorldSpace=void 0,this.layer&&e&&this.layer.notifyObjectBBChanged(this,e)}_emit(e,t){this.layer?.events.emit(e,t)}get geometries(){return this._geometries}get transformation(){return this._transformation??se}set transformation(e){this._transformation=E(this._transformation??ce(),e),this._invalidateBoundingVolume(),this._emit(`transformationChanged`,this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(e){this._shaderTransformation=e?E(this._shaderTransformation??ce(),e):null,this._invalidateBoundingVolume(),this._emit(`shaderTransformationChanged`,this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}get test(){}},Lt=w(),Rt=[`layerObjectAdded`,`layerObjectRemoved`,`layerObjectsAdded`,`layerObjectsRemoved`,`transformationChanged`,`shaderTransformationChanged`,`visibilityChanged`,`occlusionChanged`,`highlightChanged`,`geometriesChanged`,`attributesChanged`],zt=class{constructor(e,t,n=``){this.stage=e,this.apiLayerViewUid=n,this.id=u(),this.events=new b,this.visible=!0,this.sliceable=!1,this._objectsAdded=[],this._handles=new d,this._objects=new Map,this._pickable=!0,this.visible=t?.visible??!0,this._pickable=t?.pickable??!0,this.updatePolicy=t?.updatePolicy??0,e.addLayer(this);for(let t of Rt)this._handles.add(this.events.on(t,n=>e.handleEvent(t,n)))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.removeLayer(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}getObject(t){return e(this._objects.get(t))}set pickable(e){this._pickable=e}get pickable(){return this._pickable&&this.visible}add(e){this._objects.set(e.id,e),e.layer=this,this.events.emit(`layerObjectAdded`,e),this._octree!=null&&this._objectsAdded.push(e)}remove(e){this._objects.delete(e.id)&&(this.events.emit(`layerObjectRemoved`,e),e.layer=null,this._octree!=null&&(t(this._objectsAdded,e)||this._octree.remove([e])))}addMany(e){for(let t of e)this._objects.set(t.id,t),t.layer=this;this.events.emit(`layerObjectsAdded`,e),this._octree!=null&&this._objectsAdded.push(...e)}removeMany(e){let n=[];for(let t of e)this._objects.delete(t.id)&&n.push(t);if(n.length!==0&&(this.events.emit(`layerObjectsRemoved`,n),n.forEach(e=>e.layer=null),this._octree!=null)){for(let e=0;e<n.length;)t(this._objectsAdded,n[e])?(n[e]=n[n.length-1],--n.length):++e;this._octree.remove(n)}}commit(){this.stage.commitLayer(this)}sync(){this.updatePolicy!==1&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,t){this._octree!=null&&!this._objectsAdded.includes(e)&&this._octree.update(e,t)}getSpatialQueryAccelerator(){return this._octree==null&&this._objects.size>50?(this._octree=new bt(e=>e.boundingVolumeWorldSpace.sphere),this._octree.add(this._objects.values())):this._octree!=null&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded),this._objectsAdded.length=0),this._octree}invalidateSpatialQueryAccelerator(){this._octree=n(this._octree),this._objectsAdded.length=0}get test(){}},Bt,Vt=class extends f{static{Bt=this}constructor(e){super(e),this.type=`foggy`,this.fogStrength=.5}clone(){return new Bt({fogStrength:this.fogStrength})}get scattering(){return a(Bt.minScattering,Bt.maxScattering,this.fogStrength**3)}static{this.minScattering=3e-5}static{this.maxScattering=.005}};o([s({foggy:`foggy`}),l({json:{write:{isRequired:!0}}})],Vt.prototype,`type`,void 0),o([l({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],Vt.prototype,`fogStrength`,void 0),Vt=Bt=o([c(`esri.views.3d.environment.FoggyWeather`)],Vt);var Ht=Vt,Ut=class extends at{constructor(){super(...arguments),this.hasFog=!1}};o([it()],Ut.prototype,`hasFog`,void 0);var Wt=class extends Ut{constructor(){super(...arguments),this.hasEmissive=!1}};o([it()],Wt.prototype,`hasEmissive`,void 0);function Gt(e,t,n){e.push([`olidColor`,new L(t,n,4,!0)])}function Kt(e,t=!1){return e<=1024?t?Array(e).fill(0):Array(e):new Float16Array(e)}function qt(e,t,n){let r=e.isGeographic&&t,{metersPerUnit:a}=e,o=0;return r?(a=1,o=i(n)):e.isGeographic?a=p(e).metersPerDegree:e.isWebMercator&&(o=m(n)),a*Math.max(.2,Math.cos(o))}var K={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},Jt={dash:K.dash,"dash-dot":[...K.dash,...K.dot],dot:K.dot,"long-dash":K[`long-dash`],"long-dash-dot":[...K[`long-dash`],...K.dot],"long-dash-dot-dot":[...K[`long-dash`],...K.dot,...K.dot],none:null,"short-dash":K[`short-dash`],"short-dash-dot":[...K[`short-dash`],...K[`short-dot`]],"short-dash-dot-dot":[...K[`short-dash`],...K[`short-dot`],...K[`short-dot`]],"short-dot":K[`short-dot`],solid:null},Yt=class{constructor(e,t,n){this.image=e,this.width=t,this.length=n,this.uuid=S()}};function Xt(e){return e!=null&&`image`in e}function Zt(e,t){return e==null?e:{pattern:e.slice(),pixelRatio:t}}function Qt(e){return{pattern:[e,e],pixelRatio:2}}function $t(e){switch(e?.type){case`style`:return en(e.style);case`template`:return tn(e.normalizedDashTemplate);case`image`:return new Yt(e.image,e.width,e.length);case void 0:case null:return null}return null}function en(e){return e==null?null:Zt(Jt[e],8)}function tn({dashTemplate:e,hidesLine:t}){return Zt(t||e.length===0?null:e,8)}function nn(e){switch(e?.type){case`style`:return e.style===`none`;case`template`:return e.normalizedDashTemplate.hidesLine;case`image`:case void 0:case null:return!1}return!1}function rn(e,t,n=null){let r=[],i=t.mapPositions,a=an(t,r),o=a.data,s=a.indices.length,c=ye(s);return on(t,r,c),ln(t,r,c),sn(t,r,c),cn(t,r,a.indices,c),un(t,r,a.indices,c),dn(t,r),fn(t,r,a.indices,c),pn(e,t,r,o),n!=null&&Gt(r,n,c),new I(e,r,i)}function an(e,t){let{attributeData:{position:n},removeDuplicateStartEnd:r}=e,i=n.length/3,a=i>2&&mn(n)&&r,o=i-+!!a,s=Array(2*(o-1)),c=a?n.slice(0,-3):n,l=0;for(let e=0;e<o-1;e++)s[l++]=e,s[l++]=e+1;let u=new L(c,s,3,a);return t.push([`position`,u]),u}function on(e,t,n){if(e.attributeData.colorFeature!=null)return;let r=e.attributeData.color;t.push([`color`,new L(r??v,n,4)])}function sn(e,t,n){e.attributeData.normal&&t.push([`normal`,new L(e.attributeData.normal,n,3)])}function cn(e,t,n,r){let i=e.attributeData.colorFeature;i!=null&&(typeof i==`number`?t.push([`colorFeatureAttribute`,new L([i],r,1,!0)]):t.push([`colorFeatureAttribute`,new L(i,n,1,!0)]))}function ln(e,t,n){e.attributeData.sizeFeature??t.push([`size`,new L([e.attributeData.size??1],n,1,!0)])}function un(e,t,n,r){let i=e.attributeData.sizeFeature;i!=null&&(typeof i==`number`?t.push([`sizeFeatureAttribute`,new L([i],r,1,!0)]):t.push([`sizeFeatureAttribute`,new L(i,n,1,!0)]))}function dn(e,t){let{attributeData:{position:n,timeStamps:r}}=e;if(!r)return;let i=n.length/3,a=Array(2*(i-1)),o=0;for(let e=0;e<i-1;e++)a[o++]=e,a[o++]=e+1;t.push([`timeStamps`,new L(r,a,4,!0)])}function fn(e,t,n,r){let i=e.attributeData.opacityFeature;i!=null&&(typeof i==`number`?t.push([`opacityFeatureAttribute`,new L([i],r,1,!0)]):t.push([`opacityFeatureAttribute`,new L(i,n,1,!0)]))}function pn(e,{overlayInfo:t},n,r){let i=e.parameters;if(t==null||!hn(i)||i.stipplePattern==null)return;let{renderCoordsHelper:a,spatialReference:o}=t,s=o.isGeographic&&a.viewingMode===1,c=i.worldSized||Xt(i.stipplePattern);if(!c&&!s)return;let l=r;if(s){let e=le(r.length),t=p(o);for(let n=0;n<e.length;n+=3)ee(r,n,e,n,t);l=e}let u=r.length/3,d=F(u+1),f=a.viewingMode===1,m=gn,h=_n,v=0,y=0,b=0;_(m,l[y++],l[y++]),y++,d[0]=0;for(let e=1;e<u+1;++e){e===u&&(y=0);let t=y;_(h,l[y++],l[y++]),y++;let n=(r[b+1]+r[t+1])/2,i=c?qt(o,f,n):1;v+=g(m,h)*i,d[e]=v,[m,h]=[h,m],b=t}n.push([`distanceToStart`,new L(d,n[0][1].indices,1,!0)])}function mn(e){let t=e.length;return e[0]===e[t-3]&&e[1]===e[t-2]&&e[2]===e[t-1]}function hn(e){return`stipplePattern`in e}var gn=ve(),_n=ve();function vn(e,t){let n=Kt(e.length*4),r=e[0],i=e[e.length-1];for(let a=0;a<e.length;a++)n[a*4]=e[a],n[a*4+1]=r,n[a*4+2]=i,n[a*4+3]=t+.5;return n}function yn(e,t){let n=e[t],r=e[t+1],i=e[t+2];return Math.sqrt(n*n+r*r+i*i)}function bn(e,t){let n=e[t],r=e[t+1],i=e[t+2],a=1/Math.sqrt(n*n+r*r+i*i);e[t]*=a,e[t+1]*=a,e[t+2]*=a}function xn(e,t,n){e[t]*=n,e[t+1]*=n,e[t+2]*=n}function Sn(e,t,n,r,i,a=t){i||=e,i[a]=e[t]+n[r],i[a+1]=e[t+1]+n[r+1],i[a+2]=e[t+2]+n[r+2]}function Cn(e){e.uniforms.add(new Ve(`alignPixelEnabled`,e=>e.alignPixelEnabled)),e.code.add(z`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),e.code.add(z`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}var wn=.5;function Tn(e,t){let n=e.vertex;e.include(je),e.attributes.add(`position`,`vec3`),e.vertex.inputs.add(`position`,()=>`position`),e.attributes.add(`normal`,`vec3`),t.hasVertexCenterOffset?e.attributes.add(`centerOffset`,`vec3`):n.constants.add(`centerOffset`,`vec3`,[0,0,0]),e.attributes.add(`groundDistance`,`float`),Re(n,t),Ne(n,t),n.uniforms.add(Ge,new B(`polygonOffset`,e=>e.shaderPolygonOffset),new Ie(`aboveGround`,e=>e.camera.aboveGround?1:-1)),t.hasVerticalOffset&&Oe(n),n.code.add(z`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),n.code.add(z`float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
float pointGroundSign = sign(pointGroundDistance);
if (pointGroundSign == 0.0) {
pointGroundSign = aboveGround;
}
float groundRelative = aboveGround * pointGroundSign;
if (polygonOffset > .0) {
float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
float factor = (1.0 - tanAlpha / viewport[2]);
if (groundRelative > 0.0) {
posView *= factor;
}
else {
posView /= factor;
}
}
return groundRelative;
}`),(!t.draped||t.hasVerticalOffset)&&n.uniforms.add(De),t.draped||(n.uniforms.add(new Ie(`hudPixelSizePerDistance`,e=>Math.tan(e.camera.fovY/2)/(e.camera.fullViewport[2]/2))),n.code.add(z`
      void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
        float distanceToCamera = length(posView);

        // Compute offset in world units for a half pixel shift
        float pixelOffset = distanceToCamera * hudPixelSizePerDistance * ${z.float(.5)};

        // Apply offset along normal in the direction away from the ground surface
        vec3 modelOffset = normalModel * aboveGround * pixelOffset;

        // Apply the same offset also on the view space position
        vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

        posModel += modelOffset;
        posView += viewOffset;
      }
    `)),t.screenCenterOffsetUnitsEnabled&&nt(n),t.hasScreenSizePerspective&&ze(n),n.code.add(z`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      float pointGroundDistance = groundDistance;
      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${t.draped?``:`applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);`}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${t.hasScreenSizePerspective&&(t.hasVerticalOffset||t.screenCenterOffsetUnitsEnabled)?`vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);`:``}

      ${t.hasVerticalOffset?t.hasScreenSizePerspective?`float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);`:`float verticalOffsetScreenHeight = verticalOffset.x;`:``}

      ${t.hasVerticalOffset?z`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:``}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${t.screenCenterOffsetUnitsEnabled?``:z`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${t.screenCenterOffsetUnitsEnabled?t.hasScreenSizePerspective?`float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);`:`float centerOffsetY = centerOffset.y;`:``}

      ${t.screenCenterOffsetUnitsEnabled?`posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;`:``}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}var En=z`vec4(0.0, 0.0, 2.0, 1.0)`,Dn=class extends st{constructor(){super(...arguments),this.effect=0,this.fadeFactor=me(1)}};function On(e){let t=new pt;return t.include(Xe),t.outputs.add(`fragColor`,`vec4`,0),t.fragment.uniforms.add(new ct(`colorTexture`,e=>e.color),new ct(`emissionTexture`,e=>e.emission),new ct(`focusArea`,e=>e.focusArea),new Je(`focusAreaEffectMode`,e=>e.effect),new B(`fadeFactor`,e=>e.fadeFactor.value)).constants.add(`EffectBright`,`int`,0).code.add(`float getLuminance(in vec4 color) { return color.r * 0.25 + color.g * 0.5 + color.b * 0.25; }`).main.add(`
      float mask = texture(focusArea, uv).r;
      
      if (focusAreaEffectMode == EffectBright) {
        vec4 color = texture(colorTexture, uv);
        float luminance = getLuminance(color);
        fragColor = mask > 0.0 ? color : mix(color, vec4(0.55 * luminance + 0.45), fadeFactor);
      } else {
        if(mask > 0.0) discard;
        fragColor = vec4(vec3(0.0), fadeFactor * 0.67);
      }
  `),e.hasEmissive&&(t.outputs.add(`fragEmission`,`vec4`,1),t.fragment.main.add(z`if (focusAreaEffectMode == EffectBright) {
vec4 color = texture(emissionTexture, uv);
float luminance = getLuminance(color);
fragEmission = mask > 0.0 ? color : mix(color, vec4(0.67 * luminance), fadeFactor);
} else
fragEmission = vec4(vec3(0.0), fadeFactor * 0.9);`)),t}var kn=Object.freeze(Object.defineProperty({__proto__:null,FocusAreaPassParameters:Dn,build:On},Symbol.toStringTag,{value:`Module`})),An=class extends wt{constructor(){super(...arguments),this.shader=new St(kn,()=>r(()=>import(`./FocusArea.glsl-74Xb3s6f.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83]),import.meta.url)),this.ignoreUnused=!0}initializePipeline(){return _t({colorWrite:gt,blending:yt})}};An=o([c(`esri.views.3d.webgl-engine.effects.focusArea.FocusAreaTechnique`)],An);var jn=class extends Ct{constructor(e){super({...e,view:e.focusAreasView.view}),this.consumes={required:[xt.FOCUSAREA,xt.FOCUSAREA_MASK]},this.produces=xt.FOCUSAREA,this._fadeDirection=0,this._configuration=new Wt,this._passParameters=new Dn}fadeOut(e){this.removeAllHandles(),this._startTime=null,this._fadeDirection=1,this.addHandles(x(()=>this._passParameters.fadeFactor.value,t=>{t===0&&(this.removeAllHandles(),e())})),this.requestRender(2)}precompile(){this._configuration.hasEmissive=this.bindParameters.emissions!==0,this.techniques.precompile(An,this._configuration)}render(e){let t=this.bindParameters;this._startTime??=this.view.stage?.renderer.renderContext.time;let n=this.view.qualitySettings.fadeDuration,r=n>0?Math.min(n,this.view.stage?.renderer.renderContext.time-this._startTime)/n:1,i=this.renderingContext,a=this.techniques.get(An,this._configuration),o=this.input,s=e.find(({name:e})=>e===xt.FOCUSAREA_MASK),c=this.focusAreasView.style===`bright`;this._passParameters.color=this._passParameters.emission=i.emptyTexture,this._passParameters.focusArea=s.getTexture(),this._passParameters.effect=Mn[this.focusAreasView.style],this._passParameters.fadeFactor.value=this._fadeDirection===0?r:1-r;let l=t.camera,u=l.fullViewport[2],d=l.fullViewport[3],f=c?this.fboCache.acquire(u,d,this.produces):o;if(c){if(this._passParameters.color=o.getTexture(),this._configuration.hasEmissive){this._passParameters.emission=o.getTexture(he);let e=this._passParameters.emission?.descriptor.internalFormat===ge.RGBA16F?8:5;f.acquireColor(he,e,`emissive`)}f.moveAttachments(o),i.bindFramebuffer(f.fbo),i.setClearColor(0,0,0,0),i.clear(16384)}else i.bindFramebuffer(f.fbo);return i.bindTechnique(a,t,this._passParameters),i.screen.draw(),r<1&&this.requestRender(2),f}};o([l()],jn.prototype,`consumes`,void 0),o([l()],jn.prototype,`produces`,void 0),o([l({constructOnly:!0})],jn.prototype,`focusAreasView`,void 0),jn=o([c(`esri.views.3d.webgl-engine.effects.focusArea.FocusArea`)],jn);var Mn={bright:0,dark:1},Nn=e=>e?Mn[e]:0;function Pn(e){let t=new pt;t.include(Tn,e),t.vertex.include($e,e);let{output:n,hasOcclusionTexture:r,signedDistanceFieldEnabled:i,pixelSnappingEnabled:a,hasEmission:o,hasScreenSizePerspective:s,debugDrawLabelBorder:c,hasVVSize:l,hasVVColor:u,hasRotation:d,occludedFragmentFade:f,sampleSignedDistanceFieldTexelCenter:p,hasVertexColor:m,hasVertexSize:h,hasVertexRotation:g,hasVertexUVi:v}=e;t.include(je),t.include(Ze,e),t.include(Ae,e),t.include(tt,e);let{vertex:b,fragment:x}=t;x.include(Qe),x.code.add(z`
    vec4 applyFocusAreaStyle(vec4 color, int style) {
      const float factor = 0.46;
      const float factorBright = 0.32;

      if (style == ${z.int(0)}) {
        float luma = (color.r + color.g + color.b) / 3.0;
        float bright = luma * (1.0 - 0.6 * factorBright) + 0.6 * factorBright * color.a;
        float brightScaled = bright * factorBright;
        return vec4(brightScaled, brightScaled, brightScaled, color.a * factorBright);
      }

      float darkScaled = factor * factor;
      return vec4(color.rgb * darkScaled, color.a * factor);
    }
  `),t.varyings.add(`vcolor`,`vec4`),t.varyings.add(`vtc`,`vec2`),t.varyings.add(`vsize`,`vec2`);let S=n===10;b.uniforms.add(Ge,new Ue(`screenOffset`,(e,t)=>_(Ln,e.screenOffset[0]*2*t.camera.pixelRatio,e.screenOffset[1]*2*t.camera.pixelRatio)),new Ue(`anchorPosition`,e=>In(e)),new Ye(`materialColor`,({color:e})=>e),new B(`materialRotation`,e=>e.rotation),new Ue(`materialSize`,e=>e.size),new ct(`tex`,e=>e.texture)),nt(b),i&&(b.uniforms.add(new Ye(`outlineColor`,e=>e.outlineColor)),x.uniforms.add(new Ye(`outlineColor`,e=>Fn(e)?e.outlineColor:y),new B(`outlineSize`,e=>Fn(e)?e.outlineSize:0))),a&&b.include(Cn),s&&(Be(b),ze(b)),c&&t.varyings.add(`debugBorderCoords`,`vec4`),t.attributes.add(`uv0`,`vec2`),v&&t.attributes.add(`uvi`,`vec4`),m&&t.attributes.add(`color`,`vec4`),h&&t.attributes.add(`size`,`vec2`),g&&t.attributes.add(`rotation`,`float`),(l||u)&&t.attributes.add(`featureAttribute`,`vec4`),b.main.add(z`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      gl_Position = ${En};
      return;
    }

    vec2 vertexSize = materialSize${R(h,` * size`)};
    vec2 inputSize;
    ${R(s,z`
        inputSize = screenSizePerspectiveScaleVec2(vertexSize, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,z`
        inputSize = vertexSize;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${R(l,z`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);
  `);let C=z`
  ${R(v,z`
    vec2 texSize = vec2(textureSize(tex, 0));
    vec2 uv = mix(uvi.xy, uvi.zw, bvec2(uv0)) / texSize;
    `,z`
    vec2 uv = mix(vec2(0.), vec2(1.), bvec2(uv0));
    `)}

    quadOffset.xy = (uv0 - anchorPosition) * 2.0 * combinedSize;

    ${R(d,z`
        float angle = radians(materialRotation${R(g,` + rotation`)});
        float cosAngle = cos(angle);
        float sinAngle = sin(angle);
        mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

        quadOffset.xy = rotate * quadOffset.xy;
      `)}

    quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,w=a?i?z`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:z`posProj += quadOffset;
if (inputSize.x == vertexSize.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:z`posProj += quadOffset;`;b.include(Ke),b.main.add(z`
    ${C}
    ${u?`vcolor = interpolateVVColor(featureAttribute.y) * materialColor;`:m?`vcolor = color * materialColor;`:`vcolor = materialColor;`}

    ${R(n===11,z`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < alphaCutoff;
    ${R(i,`alphaDiscard = alphaDiscard && outlineColor.a < alphaCutoff;`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${w}
      gl_Position = posProj;
    }

    vtc = uv;

    ${R(c,z`debugBorderCoords = vec4(uv0, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `);let T=rt(n)&&e.hasFocusAreaStyle&&!e.draped;switch(x.uniforms.add(new ct(`tex`,e=>e.texture)),T&&x.uniforms.add(new Je(`focusAreaStyle`,e=>Nn(e.focusAreaStyle))),f&&!S&&(x.include(Fe),x.uniforms.add(new Ee(`depthMap`,e=>e.mainDepth),new B(`occludedOpacity`,e=>e.occludedFragmentOpacity?.value??1))),r&&x.uniforms.add(new Ee(`texOcclusion`,e=>e.hudOcclusion?.attachment)),c?x.main.add(`
        float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));
        // don't discard fragments on debug border
        float textureAlphaCutoff = isBorder > 0.0 ? 0.0 : alphaCutoff;
      `):x.main.add(`float textureAlphaCutoff = alphaCutoff;`),x.main.add(`vec2 samplePos = vtc;`),p&&x.main.add(z`float txSize = float(textureSize(tex, 0).x);
float texelSize = 1.0 / txSize;
vec2 scaleFactor = (vsize - txSize) * texelSize;
samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`),i?x.main.add(z`
      vec4 fillPixelColor = vcolor;

      // Get distance in output units (i.e. pixels)

      float sdf = texture(tex, samplePos).r;
      float pixelDistance = sdf * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - pixelDistance, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(pixelDistance) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < textureAlphaCutoff ||
          fillPixelColor.a + outlinePixelColor.a < alphaCutoff
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
                              vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${R(!S,z`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < textureAlphaCutoff) {
          discard;
        }

        ${R(!S,z`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-pixelDistance/vsize.x*2.0, 0.0, 1.0), clamp(pixelDistance/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `):x.main.add(z`
        vec4 texColor = texture(tex, samplePos, -0.5);
        if (texColor.a < textureAlphaCutoff) {
          discard;
        }
        ${R(!S,z`fragColor = texColor * premultiplyAlpha(vcolor);`)}
      `),f&&!S&&x.main.add(z`
        float zSample = -linearizeDepth(texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x);
        float zFragment = -linearizeDepth(gl_FragCoord.z);
        if (zSample < ${z.float(1-zn)} * zFragment) {
          fragColor *= occludedOpacity;
        }
      `),r&&x.main.add(`fragColor *= texelFetch(texOcclusion, ivec2(gl_FragCoord.xy), 0).r;`),!S&&c&&x.main.add(`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`),n===2&&x.main.add(z`if (fragColor.a < alphaCutoff) {
discard;
}`),T&&x.main.add(z`fragColor = applyFocusAreaStyle(fragColor, focusAreaStyle);`),rt(n)&&o&&x.main.add(`fragEmission = vec4(0.0);`),n){case 1:x.main.add(`
        fragColor = vec4(fragColor.rgb * floatBlendOutputScale, fragColor.a);
        fragAlpha = fragColor.a * floatBlendOutputScale;
      `);break;case 2:x.main.add(`fragColor.rgb /= fragColor.a;`);break;case 11:x.main.add(`outputObjectAndLayerIdColor();`);break;case 10:t.include(Pe,e),x.main.add(`outputHighlight(false);`)}return t}function Fn(e){return e.outlineColor[3]>0&&e.outlineSize>0}function In(e){return e.textureIsSignedDistanceField?Rn(e.anchorPosition,e.distanceFieldBoundingBox,Ln):h(Ln,e.anchorPosition),Ln}var Ln=ve();function Rn(e,t,n){_(n,e[0]*(t[2]-t[0])+t[0],e[1]*(t[3]-t[1])+t[1])}var zn=.08,Bn=Object.freeze(Object.defineProperty({__proto__:null,anchorPosition:In,build:Pn},Symbol.toStringTag,{value:`Module`})),Vn=class extends wt{constructor(e,t){super(e,t,ft(Hn).concat(ft(Un(t)))),this.shader=new St(Bn,()=>r(()=>import(`./HUDMaterial.glsl-D5b_K7yF.js`),__vite__mapDeps([84,23,11,24,59,48,10,3,4,2,5,12,13,7,8,14,15,16,6,17,18,19,20,21,22,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,49,50,51,52,53,54,55,56,57,58,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83]),import.meta.url)),this.ignoreUnused=!0,this.primitiveType=_e.TRIANGLE_STRIP}initializePipeline(e){let{draped:t,output:n,depthTestEnabled:r}=e,i=ot(n),a=r&&!t&&!i&&n!==10;return _t({blending:Le(n,!0),depthTest:r&&!t?{func:515}:null,depthWrite:a?vt:null,colorWrite:gt,polygonOffset:He(e)})}};Vn=o([c(`esri.views.3d.webgl-engine.shaders.HUDMaterialTechnique`)],Vn);var Hn=dt().vec2u8(`uv0`,{glNormalized:!0});function Un(e){let t=dt().vec3f(`position`).vec3f(`normal`).f32(`groundDistance`);return e.hasVertexCenterOffset&&(t=t.vec3f(`centerOffset`)),e.hasVertexColor&&(t=t.vec4u8(`color`,{glNormalized:!0})),e.hasVertexSize&&(t=t.vec2f(`size`)),e.hasVertexRotation&&(t=t.f32(`rotation`)),(e.hasVVColor||e.hasVVSize)&&(t=t.vec4f(`featureAttribute`)),e.hasVertexUVi&&(t=t.vec4i16(`uvi`)),qe()?t.vec4u8(`olidColor`):t}function Wn(){return Kn??=Gn(),Kn}function Gn(){let e=new L([0,0,0,255,255,0,255,255],[0,1,2,3],2,!0);return new et([[`uv0`,e]])}var Kn=null,qn=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],Jn=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],Yn=[0,0,1,0,1,1,0,1],Xn=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],Zn=Array(36);for(let e=0;e<6;e++)for(let t=0;t<6;t++)Zn[e*6+t]=e;var q=Array(36);for(let e=0;e<6;e++)q[e*6]=0,q[e*6+1]=1,q[e*6+2]=2,q[e*6+3]=2,q[e*6+4]=3,q[e*6+5]=0;function Qn(e,t){Array.isArray(t)||(t=[t,t,t]);let n=Array(24);for(let e=0;e<8;e++)n[e*3]=qn[e][0]*t[0],n[e*3+1]=qn[e][1]*t[1],n[e*3+2]=qn[e][2]*t[2];return new I(e,[[`position`,new L(n,Xn,3,!0)],[`normal`,new L(Jn,Zn,3)],[`uv0`,new L(Yn,q,2)]])}var $n=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],er=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],tr=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],nr=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function rr(e,t){Array.isArray(t)||(t=[t,t,t]);let n=Array(18);for(let e=0;e<6;e++)n[e*3]=$n[e][0]*t[0],n[e*3+1]=$n[e][1]*t[1],n[e*3+2]=$n[e][2]*t[2];return new I(e,[[`position`,new L(n,tr,3,!0)],[`normal`,new L(er,nr,3)]])}var ir=V(-.5,0,-.5),ar=V(.5,0,-.5),or=V(0,0,.5),sr=V(0,.5,0),J=H(),Y=H(),X=H(),Z=H(),Q=H();N(J,ir,sr),N(Y,ir,ar),M(X,J,Y),j(X,X),N(J,ar,sr),N(Y,ar,or),M(Z,J,Y),j(Z,Z),N(J,or,sr),N(Y,or,ir),M(Q,J,Y),j(Q,Q);var cr=[ir,ar,or,sr],lr=[0,-1,0,X[0],X[1],X[2],Z[0],Z[1],Z[2],Q[0],Q[1],Q[2]],ur=[0,1,2,3,1,0,3,2,1,3,0,2],dr=[0,0,0,1,1,1,2,2,2,3,3,3];function fr(e,t){Array.isArray(t)||(t=[t,t,t]);let n=Array(12);for(let e=0;e<4;e++)n[e*3]=cr[e][0]*t[0],n[e*3+1]=cr[e][1]*t[1],n[e*3+2]=cr[e][2]*t[2];return new I(e,[[`position`,new L(n,ur,3,!0)],[`normal`,new L(lr,dr,3)]])}function pr(e,t,n,r,i={uv:!0}){let a=-Math.PI,o=Math.PI*2,s=-Math.PI/2,c=Math.PI,l=Math.max(3,Math.floor(n)),u=Math.max(2,Math.floor(r)),d=(l+1)*(u+1),f=F(d*3),p=F(d*3),m=F(d*2),h=[],g=0;for(let e=0;e<=u;e++){let n=[],r=e/u,i=s+r*c,d=Math.cos(i);for(let e=0;e<=l;e++){let s=e/l,c=a+s*o,u=Math.cos(c)*d,h=Math.sin(i),_=-Math.sin(c)*d;f[3*g]=u*t,f[3*g+1]=h*t,f[3*g+2]=_*t,p[3*g]=u,p[3*g+1]=h,p[3*g+2]=_,m[2*g]=s,m[2*g+1]=r,n.push(g),++g}h.push(n)}let _=[];for(let e=0;e<u;e++)for(let t=0;t<l;t++){let n=h[e][t],r=h[e][t+1],i=h[e+1][t+1],a=h[e+1][t];e===0?(_.push(n),_.push(i),_.push(a)):e===u-1?(_.push(n),_.push(r),_.push(i)):(_.push(n),_.push(r),_.push(i),_.push(i),_.push(a),_.push(n))}let v=[[`position`,new L(f,_,3,!0)],[`normal`,new L(p,_,3,!0)]];return i.uv&&v.push([`uv0`,new L(m,_,2,!0)]),i.offset&&(v[0][0]=`offset`,v.push([`position`,new L(Float64Array.from(i.offset),ye(_.length),3,!0)])),new I(e,v)}function mr(e,t,n,r){let i=hr(t,n,r);return new I(e,i)}function hr(e,t,n){let r=e,i,a;if(n)i=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],a=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];else{let e=r*(1+Math.sqrt(5))/2;i=[-r,e,0,r,e,0,-r,-e,0,r,-e,0,0,-r,e,0,r,e,0,-r,-e,0,r,-e,e,0,-r,e,0,r,-e,0,-r,-e,0,r],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1]}for(let t=0;t<i.length;t+=3)xn(i,t,e/yn(i,t));let o={};function s(t,n){t>n&&([t,n]=[n,t]);let r=t.toString()+`.`+n.toString();if(o[r])return o[r];let a=i.length;return i.length+=3,Sn(i,t*3,i,n*3,i,a),xn(i,a,e/yn(i,a)),a/=3,o[r]=a,a}for(let e=0;e<t;e++){let e=a.length,t=Array(e*4);for(let n=0;n<e;n+=3){let e=a[n],r=a[n+1],i=a[n+2],o=s(e,r),c=s(r,i),l=s(i,e),u=n*4;t[u]=e,t[u+1]=o,t[u+2]=l,t[u+3]=r,t[u+4]=c,t[u+5]=o,t[u+6]=i,t[u+7]=l,t[u+8]=c,t[u+9]=o,t[u+10]=c,t[u+11]=l}a=t,o={}}let c=We(i);for(let e=0;e<c.length;e+=3)bn(c,e);return[[`position`,new L(We(i),a,3,!0)],[`normal`,new L(c,a,3,!0)]]}function gr(e,{normal:t,position:n,color:r,rotation:i,size:a,centerOffset:o,groundDistance:s,uvi:c,featureAttribute:l,olidColor:u=null}={}){let d=n?C(n):w(),f=t?C(t):T(0,0,1),p=s==null?[1]:[s],m=ye(1),h=[[`position`,new L(d,m,3,!0)],[`normal`,new L(f,m,3,!0)]],g=a!=null&&a.length===2?a:null;if(g&&h.push([`size`,new L(g,m,2)]),i!=null&&h.push([`rotation`,new L([i],m,1,!0)]),r){let e=[r[0],r[1],r[2],r.length>3?r[3]:255];h.push([`color`,new L(e,m,4,!0)])}if(c&&h.push([`uvi`,new L(c,m,c.length)]),o&&h.push([`centerOffset`,new L(o,m,3)]),h.push([`groundDistance`,new L(p,m,1)]),l){let e=[l[0],l[1],l[2],l[3]];h.push([`featureAttribute`,new L(e,m,4)])}return u!=null&&Gt(h,u,m),new I(e,h,null,void 0,Wn())}function _r(e,t,n,r,i=!0,a=!0){let o=0,s=t,c=e,l=V(0,o,0),u=V(0,o+c,0),d=V(0,-1,0),f=V(0,1,0);r&&(o=c,u=V(0,0,0),l=V(0,o,0),d=V(0,1,0),f=V(0,-1,0));let p=[u,l],m=[d,f],h=n+2,g=Math.sqrt(c*c+s*s);if(r)for(let e=n-1;e>=0;e--){let t=2*Math.PI/n*e,r=V(Math.cos(t)*s,o,Math.sin(t)*s);p.push(r);let i=V(c*Math.cos(t)/g,-s/g,c*Math.sin(t)/g);m.push(i)}else for(let e=0;e<n;e++){let t=2*Math.PI/n*e,r=V(Math.cos(t)*s,o,Math.sin(t)*s);p.push(r);let i=V(c*Math.cos(t)/g,s/g,c*Math.sin(t)/g);m.push(i)}let _=[],v=[];if(i){for(let e=3;e<p.length;e++)_.push(1),_.push(e-1),_.push(e),v.push(0),v.push(0),v.push(0);_.push(p.length-1),_.push(2),_.push(1),v.push(0),v.push(0),v.push(0)}if(a){for(let e=3;e<p.length;e++)_.push(e),_.push(e-1),_.push(0),v.push(e),v.push(e-1),v.push(1);_.push(0),_.push(2),_.push(p.length-1),v.push(1),v.push(2),v.push(m.length-1)}let y=F(h*3);for(let e=0;e<h;e++)y[e*3]=p[e][0],y[e*3+1]=p[e][1],y[e*3+2]=p[e][2];let b=F(h*3);for(let e=0;e<h;e++)b[e*3]=m[e][0],b[e*3+1]=m[e][1],b[e*3+2]=m[e][2];return[[`position`,new L(y,_,3,!0)],[`normal`,new L(b,v,3,!0)]]}function vr(e,t,n,r,i,a=!0,o=!0){return new I(e,_r(t,n,r,i,a,o))}function yr(e,t,n,r,i,a,o){let s=i?ht(i):V(1,0,0),c=a?ht(a):V(0,0,0);o??=!0;let l=H();j(l,s);let u=H();k(u,l,Math.abs(t));let d=H();k(d,u,-.5),O(d,d,c);let f=V(0,1,0);Math.abs(1-ae(l,f))<.2&&ie(f,0,0,1);let p=H();M(p,l,f),j(p,p),M(f,p,l);let m=r*2+(o?2:0),h=r+(o?2:0),g=F(m*3),_=F(h*3),v=F(m*2),y=Array(r*3*(o?4:2)),b=Array(r*3*(o?4:2));o&&(g[(m-2)*3]=d[0],g[(m-2)*3+1]=d[1],g[(m-2)*3+2]=d[2],v[(m-2)*2]=0,v[(m-2)*2+1]=0,g[(m-1)*3]=g[(m-2)*3]+u[0],g[(m-1)*3+1]=g[(m-2)*3+1]+u[1],g[(m-1)*3+2]=g[(m-2)*3+2]+u[2],v[(m-1)*2]=1,v[(m-1)*2+1]=1,_[(h-2)*3]=-l[0],_[(h-2)*3+1]=-l[1],_[(h-2)*3+2]=-l[2],_[(h-1)*3]=l[0],_[(h-1)*3+1]=l[1],_[(h-1)*3+2]=l[2]);let x=(e,t,n)=>{y[e]=t,b[e]=n},S=0,C=H(),w=H();for(let e=0;e<r;e++){let t=2*Math.PI/r*e;k(C,f,Math.sin(t)),k(w,p,Math.cos(t)),O(C,C,w),_[e*3]=C[0],_[e*3+1]=C[1],_[e*3+2]=C[2],k(C,C,n),O(C,C,d),g[e*3]=C[0],g[e*3+1]=C[1],g[e*3+2]=C[2],v[e*2]=e/r,v[e*2+1]=0,g[(e+r)*3]=g[e*3]+u[0],g[(e+r)*3+1]=g[e*3+1]+u[1],g[(e+r)*3+2]=g[e*3+2]+u[2],v[(e+r)*2]=e/r,v[e*2+1]=1;let i=(e+1)%r;x(S++,e,e),x(S++,e+r,e),x(S++,i,i),x(S++,i,i),x(S++,e+r,e),x(S++,i+r,i)}if(o){for(let e=0;e<r;e++){let t=(e+1)%r;x(S++,m-2,h-2),x(S++,e,h-2),x(S++,t,h-2)}for(let e=0;e<r;e++){let t=(e+1)%r;x(S++,e+r,h-1),x(S++,m-1,h-1),x(S++,t+r,h-1)}}let T=[[`position`,new L(g,y,3,!0)],[`normal`,new L(_,b,3,!0)],[`uv0`,new L(v,y,2,!0)]];return new I(e,T)}function br(e,t,n,r,i,a){r||=10,i??=!0,ut(t.length>1);let o=[[0,0,0]],s=[],c=[];for(let e=0;e<r;e++){s.push([0,-e-1,-((e+1)%r)-1]);let t=e/r*2*Math.PI;c.push([Math.cos(t)*n,Math.sin(t)*n])}return xr(e,c,t,o,s,i,a)}function xr(e,t,n,r,i,a,o=V(0,0,0)){let s=t.length,c=F(n.length*s*3+(r.length*6||0)),l=F(n.length*s*3+(r?6:0)),u=[],d=[],f=0,p=0,m=w(),h=w(),g=w(),_=w(),v=w(),y=w(),b=w(),x=w(),S=w(),C=w(),T=w(),ee=w(),te=w(),ne=xe();ie(S,0,1,0),N(h,n[1],n[0]),j(h,h),a?(O(x,n[0],o),j(g,x)):ie(g,0,0,1),Dr(h,g,S,S,v,g,Or),D(_,g),D(ee,v);for(let e=0;e<r.length;e++)k(y,v,r[e][0]),k(x,g,r[e][2]),O(y,y,x),O(y,y,n[0]),c[f++]=y[0],c[f++]=y[1],c[f++]=y[2];l[p++]=-h[0],l[p++]=-h[1],l[p++]=-h[2];for(let e=0;e<i.length;e++)u.push(i[e][0]>0?i[e][0]:-i[e][0]-1+r.length),u.push(i[e][1]>0?i[e][1]:-i[e][1]-1+r.length),u.push(i[e][2]>0?i[e][2]:-i[e][2]-1+r.length),d.push(0),d.push(0),d.push(0);let E=r.length,re=r.length-1;for(let e=0;e<n.length;e++){let r=!1;e>0&&(D(m,h),e<n.length-1?(N(h,n[e+1],n[e]),j(h,h)):r=!0,O(C,m,h),j(C,C),O(T,n[e-1],_),Ce(n[e],C,ne),Se(ne,Te(T,m),x)?(N(x,x,n[e]),j(g,x),M(v,C,g),j(v,v)):Dr(C,_,ee,S,v,g,Or),D(_,g),D(ee,v)),a&&(O(x,n[e],o),j(te,x));for(let i=0;i<s;i++)if(k(y,v,t[i][0]),k(x,g,t[i][1]),O(y,y,x),j(b,y),l[p++]=b[0],l[p++]=b[1],l[p++]=b[2],O(y,y,n[e]),c[f++]=y[0],c[f++]=y[1],c[f++]=y[2],!r){let e=(i+1)%s;u.push(E+i),u.push(E+s+i),u.push(E+e),u.push(E+e),u.push(E+s+i),u.push(E+s+e);for(let e=0;e<6;e++){let t=u.length-6;d.push(u[t+e]-re)}}E+=s}let ae=n[n.length-1];for(let e=0;e<r.length;e++)k(y,v,r[e][0]),k(x,g,r[e][1]),O(y,y,x),O(y,y,ae),c[f++]=y[0],c[f++]=y[1],c[f++]=y[2];let A=p/3;l[p++]=h[0],l[p++]=h[1],l[p++]=h[2];let oe=E-s;for(let e=0;e<i.length;e++)u.push(i[e][0]>=0?E+i[e][0]:-i[e][0]-1+oe),u.push(i[e][2]>=0?E+i[e][2]:-i[e][2]-1+oe),u.push(i[e][1]>=0?E+i[e][1]:-i[e][1]-1+oe),d.push(A),d.push(A),d.push(A);let se=[[`position`,new L(c,u,3,!0)],[`normal`,new L(l,d,3,!0)]];return new I(e,se)}function Sr(e,t,n,r,i){let a=le(t.length*3),o=Array(2*(t.length-1)),s=0,c=0;for(let e=0;e<t.length;e++){for(let n=0;n<3;n++)a[s++]=t[e][n];e>0&&(o[c++]=e-1,o[c++]=e)}let l=[[`position`,new L(a,o,3,!0)]];if(n?.length===t.length&&n[0].length===3){let e=F(n.length*3),r=0;for(let i=0;i<t.length;i++)for(let t=0;t<3;t++)e[r++]=n[i][t];l.push([`normal`,new L(e,o,3,!0)])}if(r&&l.push([`color`,new L(r,be(r.length/4),4)]),i?.length===t.length){let e=vn(i,1);l.push([`timeStamps`,new L(e,o,4,!0)])}return new I(e,l,null)}function Cr(e,t,n,r,i,a=0){let o=Array(18),s=[[-n,a,i/2],[r,a,i/2],[0,t+a,i/2],[-n,a,-i/2],[r,a,-i/2],[0,t+a,-i/2]],c=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let e=0;e<6;e++)o[e*3]=s[e][0],o[e*3+1]=s[e][1],o[e*3+2]=s[e][2];return new I(e,[[`position`,new L(o,c,3,!0)]])}function wr(e,t){let n=e.getMutableAttribute(`position`).data;for(let e=0;e<n.length;e+=3){let r=n[e],i=n[e+1],a=n[e+2];ie($,r,i,a),A($,$,t),n[e]=$[0],n[e+1]=$[1],n[e+2]=$[2]}}function Tr(e,t=e){let n=e.attributes,r=n.get(`position`).data,i=n.get(`normal`).data;if(i){let e=t.getMutableAttribute(`normal`).data;for(let t=0;t<i.length;t+=3){let n=i[t+1];e[t+1]=-i[t+2],e[t+2]=n}}if(r){let e=t.getMutableAttribute(`position`).data;for(let t=0;t<r.length;t+=3){let n=r[t+1];e[t+1]=-r[t+2],e[t+2]=n}}}function Er(e,t,n,r,i){return Math.abs(ae(t,e))>i?!1:(M(n,e,t),j(n,n),M(r,n,e),j(r,r),!0)}function Dr(e,t,n,r,i,a,o){return Er(e,t,i,a,o)||Er(e,n,i,a,o)||Er(e,r,i,a,o)}var Or=.99619469809,$=w();export{$t as A,En as C,rn as D,Cn as E,Ht as F,zt as I,It as L,Kt as M,Gt as N,Xt as O,Wt as P,Pt as R,On as S,Tn as T,Hn as _,pr as a,Pn as b,vr as c,fr as d,xr as f,Un as g,Sr as h,Cr as i,nn as j,Qt as k,mr as l,wr as m,Qn as n,gr as o,Dr as p,br as r,yr as s,Tr as t,rr as u,Vn as v,wn as w,Dn as x,In as y,Tt as z};