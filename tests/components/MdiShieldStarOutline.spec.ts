
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldStarOutline from "../../src/components/MdiShieldStarOutline.vue";

test("MdiShieldStarOutline snapshot", () => {
  const wrapper = mount(MdiShieldStarOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
