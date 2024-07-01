
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFridgeTop from "../../src/components/MdiFridgeTop.vue";

test("MdiFridgeTop snapshot", () => {
  const wrapper = mount(MdiFridgeTop, {});
  expect(wrapper.html()).toMatchSnapshot();
});
