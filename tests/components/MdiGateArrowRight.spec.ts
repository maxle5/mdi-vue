
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGateArrowRight from "../../src/components/MdiGateArrowRight.vue";

test("MdiGateArrowRight snapshot", () => {
  const wrapper = mount(MdiGateArrowRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
