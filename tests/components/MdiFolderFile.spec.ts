
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderFile from "../../src/components/MdiFolderFile.vue";

test("MdiFolderFile snapshot", () => {
  const wrapper = mount(MdiFolderFile, {});
  expect(wrapper.html()).toMatchSnapshot();
});
