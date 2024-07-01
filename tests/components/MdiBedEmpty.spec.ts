
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBedEmpty from "../../src/components/MdiBedEmpty.vue";

test("MdiBedEmpty snapshot", () => {
  const wrapper = mount(MdiBedEmpty, {});
  expect(wrapper.html()).toMatchSnapshot();
});
