
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBridge from "../../src/components/MdiBridge.vue";

test("MdiBridge snapshot", () => {
  const wrapper = mount(MdiBridge, {});
  expect(wrapper.html()).toMatchSnapshot();
});
