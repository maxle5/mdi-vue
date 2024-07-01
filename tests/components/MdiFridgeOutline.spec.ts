
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFridgeOutline from "../../src/components/MdiFridgeOutline.vue";

test("MdiFridgeOutline snapshot", () => {
  const wrapper = mount(MdiFridgeOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
