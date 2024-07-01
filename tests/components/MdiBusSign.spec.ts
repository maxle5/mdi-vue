
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBusSign from "../../src/components/MdiBusSign.vue";

test("MdiBusSign snapshot", () => {
  const wrapper = mount(MdiBusSign, {});
  expect(wrapper.html()).toMatchSnapshot();
});
