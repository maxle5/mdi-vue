
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldHome from "../../src/components/MdiShieldHome.vue";

test("MdiShieldHome snapshot", () => {
  const wrapper = mount(MdiShieldHome, {});
  expect(wrapper.html()).toMatchSnapshot();
});
