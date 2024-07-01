
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiThermometerMinus from "../../src/components/MdiThermometerMinus.vue";

test("MdiThermometerMinus snapshot", () => {
  const wrapper = mount(MdiThermometerMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
