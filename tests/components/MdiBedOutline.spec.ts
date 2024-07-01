
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBedOutline from "../../src/components/MdiBedOutline.vue";

test("MdiBedOutline snapshot", () => {
  const wrapper = mount(MdiBedOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
