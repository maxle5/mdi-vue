
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGasCylinder from "../../src/components/MdiGasCylinder.vue";

test("MdiGasCylinder snapshot", () => {
  const wrapper = mount(MdiGasCylinder, {});
  expect(wrapper.html()).toMatchSnapshot();
});
