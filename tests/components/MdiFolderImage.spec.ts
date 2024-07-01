
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderImage from "../../src/components/MdiFolderImage.vue";

test("MdiFolderImage snapshot", () => {
  const wrapper = mount(MdiFolderImage, {});
  expect(wrapper.html()).toMatchSnapshot();
});
