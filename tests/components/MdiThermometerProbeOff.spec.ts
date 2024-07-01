
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiThermometerProbeOff from "../../src/components/MdiThermometerProbeOff.vue";

test("MdiThermometerProbeOff snapshot", () => {
  const wrapper = mount(MdiThermometerProbeOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
