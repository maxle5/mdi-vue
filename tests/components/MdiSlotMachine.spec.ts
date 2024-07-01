
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSlotMachine from "../../src/components/MdiSlotMachine.vue";

test("MdiSlotMachine snapshot", () => {
  const wrapper = mount(MdiSlotMachine, {});
  expect(wrapper.html()).toMatchSnapshot();
});
