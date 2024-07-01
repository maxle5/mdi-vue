
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMeterElectric from "../../src/components/MdiMeterElectric.vue";

test("MdiMeterElectric snapshot", () => {
  const wrapper = mount(MdiMeterElectric, {});
  expect(wrapper.html()).toMatchSnapshot();
});
