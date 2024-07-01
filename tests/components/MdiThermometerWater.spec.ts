
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiThermometerWater from "../../src/components/MdiThermometerWater.vue";

test("MdiThermometerWater snapshot", () => {
  const wrapper = mount(MdiThermometerWater, {});
  expect(wrapper.html()).toMatchSnapshot();
});
