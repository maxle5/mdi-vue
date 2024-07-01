
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderGoogleDrive from "../../src/components/MdiFolderGoogleDrive.vue";

test("MdiFolderGoogleDrive snapshot", () => {
  const wrapper = mount(MdiFolderGoogleDrive, {});
  expect(wrapper.html()).toMatchSnapshot();
});
