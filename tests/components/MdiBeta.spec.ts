
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBeta from "../../src/components/MdiBeta.vue";

test("MdiBeta snapshot", () => {
  const wrapper = mount(MdiBeta, {});
  expect(wrapper.html()).toMatchSnapshot();
});
