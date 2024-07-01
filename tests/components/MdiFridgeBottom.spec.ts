
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFridgeBottom from "../../src/components/MdiFridgeBottom.vue";

test("MdiFridgeBottom snapshot", () => {
  const wrapper = mount(MdiFridgeBottom, {});
  expect(wrapper.html()).toMatchSnapshot();
});
