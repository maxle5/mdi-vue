
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldCrownOutline from "../../src/components/MdiShieldCrownOutline.vue";

test("MdiShieldCrownOutline snapshot", () => {
  const wrapper = mount(MdiShieldCrownOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
