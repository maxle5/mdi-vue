
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMeterGas from "../../src/components/MdiMeterGas.vue";

test("MdiMeterGas snapshot", () => {
  const wrapper = mount(MdiMeterGas, {});
  expect(wrapper.html()).toMatchSnapshot();
});
