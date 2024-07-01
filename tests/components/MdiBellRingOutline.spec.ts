
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBellRingOutline from "../../src/components/MdiBellRingOutline.vue";

test("MdiBellRingOutline snapshot", () => {
  const wrapper = mount(MdiBellRingOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
