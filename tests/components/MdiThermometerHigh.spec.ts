
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiThermometerHigh from "../../src/components/MdiThermometerHigh.vue";

test("MdiThermometerHigh snapshot", () => {
  const wrapper = mount(MdiThermometerHigh, {});
  expect(wrapper.html()).toMatchSnapshot();
});
