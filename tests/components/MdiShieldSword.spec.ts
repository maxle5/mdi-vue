
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldSword from "../../src/components/MdiShieldSword.vue";

test("MdiShieldSword snapshot", () => {
  const wrapper = mount(MdiShieldSword, {});
  expect(wrapper.html()).toMatchSnapshot();
});
