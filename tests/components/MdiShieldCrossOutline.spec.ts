
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldCrossOutline from "../../src/components/MdiShieldCrossOutline.vue";

test("MdiShieldCrossOutline snapshot", () => {
  const wrapper = mount(MdiShieldCrossOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
