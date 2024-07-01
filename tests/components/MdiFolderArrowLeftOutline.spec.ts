
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderArrowLeftOutline from "../../src/components/MdiFolderArrowLeftOutline.vue";

test("MdiFolderArrowLeftOutline snapshot", () => {
  const wrapper = mount(MdiFolderArrowLeftOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
