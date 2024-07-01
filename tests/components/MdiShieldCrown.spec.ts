
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldCrown from "../../src/components/MdiShieldCrown.vue";

test("MdiShieldCrown snapshot", () => {
  const wrapper = mount(MdiShieldCrown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
