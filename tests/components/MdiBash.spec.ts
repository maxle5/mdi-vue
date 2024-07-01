
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBash from "../../src/components/MdiBash.vue";

test("MdiBash snapshot", () => {
  const wrapper = mount(MdiBash, {});
  expect(wrapper.html()).toMatchSnapshot();
});
