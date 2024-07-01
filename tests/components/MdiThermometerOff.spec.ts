
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiThermometerOff from "../../src/components/MdiThermometerOff.vue";

test("MdiThermometerOff snapshot", () => {
  const wrapper = mount(MdiThermometerOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
