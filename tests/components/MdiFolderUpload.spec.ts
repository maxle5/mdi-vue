
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderUpload from "../../src/components/MdiFolderUpload.vue";

test("MdiFolderUpload snapshot", () => {
  const wrapper = mount(MdiFolderUpload, {});
  expect(wrapper.html()).toMatchSnapshot();
});
