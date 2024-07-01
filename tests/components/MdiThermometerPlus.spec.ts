
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiThermometerPlus from "../../src/components/MdiThermometerPlus.vue";

test("MdiThermometerPlus snapshot", () => {
  const wrapper = mount(MdiThermometerPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
