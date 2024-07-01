
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGateArrowLeft from "../../src/components/MdiGateArrowLeft.vue";

test("MdiGateArrowLeft snapshot", () => {
  const wrapper = mount(MdiGateArrowLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
