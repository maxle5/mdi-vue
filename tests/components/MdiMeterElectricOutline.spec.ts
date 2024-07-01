
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMeterElectricOutline from "../../src/components/MdiMeterElectricOutline.vue";

test("MdiMeterElectricOutline snapshot", () => {
  const wrapper = mount(MdiMeterElectricOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
