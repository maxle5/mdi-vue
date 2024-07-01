
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderMultipleImage from "../../src/components/MdiFolderMultipleImage.vue";

test("MdiFolderMultipleImage snapshot", () => {
  const wrapper = mount(MdiFolderMultipleImage, {});
  expect(wrapper.html()).toMatchSnapshot();
});
