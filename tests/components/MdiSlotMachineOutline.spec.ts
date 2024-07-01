
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSlotMachineOutline from "../../src/components/MdiSlotMachineOutline.vue";

test("MdiSlotMachineOutline snapshot", () => {
  const wrapper = mount(MdiSlotMachineOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
