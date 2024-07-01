
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBedQueen from "../../src/components/MdiBedQueen.vue";

test("MdiBedQueen snapshot", () => {
  const wrapper = mount(MdiBedQueen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
