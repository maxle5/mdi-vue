
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBug from "../../src/components/MdiBug.vue";

test("MdiBug snapshot", () => {
  const wrapper = mount(MdiBug, {});
  expect(wrapper.html()).toMatchSnapshot();
});
