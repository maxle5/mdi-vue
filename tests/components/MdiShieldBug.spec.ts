
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldBug from "../../src/components/MdiShieldBug.vue";

test("MdiShieldBug snapshot", () => {
  const wrapper = mount(MdiShieldBug, {});
  expect(wrapper.html()).toMatchSnapshot();
});
