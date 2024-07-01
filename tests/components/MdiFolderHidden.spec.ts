
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderHidden from "../../src/components/MdiFolderHidden.vue";

test("MdiFolderHidden snapshot", () => {
  const wrapper = mount(MdiFolderHidden, {});
  expect(wrapper.html()).toMatchSnapshot();
});
