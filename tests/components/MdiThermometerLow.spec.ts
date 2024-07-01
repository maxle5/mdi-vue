
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiThermometerLow from "../../src/components/MdiThermometerLow.vue";

test("MdiThermometerLow snapshot", () => {
  const wrapper = mount(MdiThermometerLow, {});
  expect(wrapper.html()).toMatchSnapshot();
});
