
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBagPersonalOff from "../../src/components/MdiBagPersonalOff.vue";

test("MdiBagPersonalOff snapshot", () => {
  const wrapper = mount(MdiBagPersonalOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
