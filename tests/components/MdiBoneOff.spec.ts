
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBoneOff from "../../src/components/MdiBoneOff.vue";

test("MdiBoneOff snapshot", () => {
  const wrapper = mount(MdiBoneOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
