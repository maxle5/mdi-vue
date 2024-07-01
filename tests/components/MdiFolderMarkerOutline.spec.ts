
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderMarkerOutline from "../../src/components/MdiFolderMarkerOutline.vue";

test("MdiFolderMarkerOutline snapshot", () => {
  const wrapper = mount(MdiFolderMarkerOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
