
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCircleDouble from "../../src/components/MdiCircleDouble.vue";

test("MdiCircleDouble snapshot", () => {
  const wrapper = mount(MdiCircleDouble, {});
  expect(wrapper.html()).toMatchSnapshot();
});
