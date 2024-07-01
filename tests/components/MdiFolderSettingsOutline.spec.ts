
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderSettingsOutline from "../../src/components/MdiFolderSettingsOutline.vue";

test("MdiFolderSettingsOutline snapshot", () => {
  const wrapper = mount(MdiFolderSettingsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
