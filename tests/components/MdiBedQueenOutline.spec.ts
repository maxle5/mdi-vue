
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBedQueenOutline from "../../src/components/MdiBedQueenOutline.vue";

test("MdiBedQueenOutline snapshot", () => {
  const wrapper = mount(MdiBedQueenOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
