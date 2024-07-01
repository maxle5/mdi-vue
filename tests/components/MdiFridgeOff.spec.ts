
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFridgeOff from "../../src/components/MdiFridgeOff.vue";

test("MdiFridgeOff snapshot", () => {
  const wrapper = mount(MdiFridgeOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
