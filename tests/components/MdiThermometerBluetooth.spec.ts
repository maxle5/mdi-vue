
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiThermometerBluetooth from "../../src/components/MdiThermometerBluetooth.vue";

test("MdiThermometerBluetooth snapshot", () => {
  const wrapper = mount(MdiThermometerBluetooth, {});
  expect(wrapper.html()).toMatchSnapshot();
});
