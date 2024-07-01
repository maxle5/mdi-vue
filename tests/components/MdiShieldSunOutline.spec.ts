
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldSunOutline from "../../src/components/MdiShieldSunOutline.vue";

test("MdiShieldSunOutline snapshot", () => {
  const wrapper = mount(MdiShieldSunOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
