
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBellOutline from "../../src/components/MdiBellOutline.vue";

test("MdiBellOutline snapshot", () => {
  const wrapper = mount(MdiBellOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
