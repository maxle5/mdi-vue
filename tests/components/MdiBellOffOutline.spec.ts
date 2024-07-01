
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBellOffOutline from "../../src/components/MdiBellOffOutline.vue";

test("MdiBellOffOutline snapshot", () => {
  const wrapper = mount(MdiBellOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
