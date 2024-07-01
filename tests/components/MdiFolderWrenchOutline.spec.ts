
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderWrenchOutline from "../../src/components/MdiFolderWrenchOutline.vue";

test("MdiFolderWrenchOutline snapshot", () => {
  const wrapper = mount(MdiFolderWrenchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
