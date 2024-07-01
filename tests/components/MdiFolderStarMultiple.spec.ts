
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderStarMultiple from "../../src/components/MdiFolderStarMultiple.vue";

test("MdiFolderStarMultiple snapshot", () => {
  const wrapper = mount(MdiFolderStarMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
