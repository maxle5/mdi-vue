
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPumpOff from "../../src/components/MdiPumpOff.vue";

test("MdiPumpOff snapshot", () => {
  const wrapper = mount(MdiPumpOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
