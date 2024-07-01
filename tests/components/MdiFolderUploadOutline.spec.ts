
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderUploadOutline from "../../src/components/MdiFolderUploadOutline.vue";

test("MdiFolderUploadOutline snapshot", () => {
  const wrapper = mount(MdiFolderUploadOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
