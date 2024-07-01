
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBugle from "../../src/components/MdiBugle.vue";

test("MdiBugle snapshot", () => {
  const wrapper = mount(MdiBugle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
