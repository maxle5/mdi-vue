
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMeterGasOutline from "../../src/components/MdiMeterGasOutline.vue";

test("MdiMeterGasOutline snapshot", () => {
  const wrapper = mount(MdiMeterGasOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
