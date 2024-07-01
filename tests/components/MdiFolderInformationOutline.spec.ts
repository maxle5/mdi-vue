
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderInformationOutline from "../../src/components/MdiFolderInformationOutline.vue";

test("MdiFolderInformationOutline snapshot", () => {
  const wrapper = mount(MdiFolderInformationOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
