
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderMultiple from "../../src/components/MdiFolderMultiple.vue";

test("MdiFolderMultiple snapshot", () => {
  const wrapper = mount(MdiFolderMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
