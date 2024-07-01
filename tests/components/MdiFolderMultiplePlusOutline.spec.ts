
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderMultiplePlusOutline from "../../src/components/MdiFolderMultiplePlusOutline.vue";

test("MdiFolderMultiplePlusOutline snapshot", () => {
  const wrapper = mount(MdiFolderMultiplePlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
