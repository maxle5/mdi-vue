
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiElectricSwitchClosed from "../../src/components/MdiElectricSwitchClosed.vue";

test("MdiElectricSwitchClosed snapshot", () => {
  const wrapper = mount(MdiElectricSwitchClosed, {});
  expect(wrapper.html()).toMatchSnapshot();
});
