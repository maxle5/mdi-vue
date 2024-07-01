
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFoodSteakOff from "../../src/components/MdiFoodSteakOff.vue";

test("MdiFoodSteakOff snapshot", () => {
  const wrapper = mount(MdiFoodSteakOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
