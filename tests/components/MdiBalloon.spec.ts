
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBalloon from "../../src/components/MdiBalloon.vue";

test("MdiBalloon snapshot", () => {
  const wrapper = mount(MdiBalloon, {});
  expect(wrapper.html()).toMatchSnapshot();
});
