
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderAlertOutline from "../../src/components/MdiFolderAlertOutline.vue";

test("MdiFolderAlertOutline snapshot", () => {
  const wrapper = mount(MdiFolderAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
