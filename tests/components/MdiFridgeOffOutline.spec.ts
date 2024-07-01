
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFridgeOffOutline from "../../src/components/MdiFridgeOffOutline.vue";

test("MdiFridgeOffOutline snapshot", () => {
  const wrapper = mount(MdiFridgeOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
