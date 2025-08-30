var t = {}, i = {}, o;
function f() {
  return o || (o = 1, Object.defineProperty(i, "__esModule", { value: !0 }), i.isPrimitive = function(r) {
    if (r == null)
      return !0;
    switch (typeof r) {
      case "string":
      case "number":
      case "bigint":
      case "boolean":
      case "symbol":
        return !0;
      default:
        return !1;
    }
  }, i.isFalsy = function(r) {
    return !r;
  }, i.isNullish = function(r) {
    return r == null;
  }), i;
}
var n = {}, l;
function d() {
  if (l) return n;
  l = 1, Object.defineProperty(n, "__esModule", { value: !0 });
  function r(e) {
  }
  return n.getReturnOfExpression = r, n;
}
var a;
function c() {
  if (a) return t;
  a = 1;
  /**
   * @author Piotr Witek <piotrek.witek@gmail.com> (http://piotrwitek.github.io)
   * @copyright Copyright (c) 2016 Piotr Witek
   * @license MIT
   */
  Object.defineProperty(t, "__esModule", { value: !0 });
  var r = f();
  t.isFalsy = r.isFalsy, t.isNullish = r.isNullish, t.isPrimitive = r.isPrimitive;
  var e = d();
  return t.getReturnOfExpression = e.getReturnOfExpression, t;
}
var h = c();
class _ {
  constructor(e) {
    this._roles = [], this._defaultRoles = ["super", "admin", "dev", "user", "visitor"], h.isFalsy(e) && (e = this._defaultRoles), this._roles = this.format(e);
  }
  /**
   * 获取角色列表,该方法用于获取当前实例的角色数组。
   */
  getRoles() {
    return this._roles;
  }
  /**
   * 获取角色字符串,该方法用于将当前实例的角色列表转换为以逗号分隔的字符串形式。
   */
  getRolesStr() {
    return this._roles.join(",");
  }
  delRoles(e) {
    const s = this.format(e);
    this._roles = this._roles.filter((u) => !s.includes(u));
  }
  /**
   * 添加角色,该方法用于向当前实例的角色列表中添加新的角色，确保不会添加重复的角色。
   */
  addRoles(e) {
    const s = this.format(e);
    this._roles = Array.from(/* @__PURE__ */ new Set([...this._roles, ...s]));
  }
  /**
   *   角色权限检查,该方法用于检查当前实例的角色是否包含指定的角色。
   */
  hasAccess(e) {
    const s = this.format(e);
    return this._roles.some((u) => s.includes(u));
  }
  /**
   * 角色格式化，将字符串或字符串数组转换为字符串数组并去除首尾空格
   */
  format(e) {
    return typeof e == "string" ? e.split(",").map((s) => s.trim()) : e.map((s) => s.trim());
  }
  /**
   * 清空当前实例的所有角色
   */
  setClear() {
    this._roles = [];
  }
}
export {
  _ as Role
};
