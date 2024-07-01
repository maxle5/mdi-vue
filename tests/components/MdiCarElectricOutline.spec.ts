
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarElectricOutline from "../../src/components/MdiCarElectricOutline.vue";

test("MdiCarElectricOutline snapshot", () => {
  const wrapper = mount(MdiCarElectricOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
