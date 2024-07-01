
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderOffOutline from "../../src/components/MdiFolderOffOutline.vue";

test("MdiFolderOffOutline snapshot", () => {
  const wrapper = mount(MdiFolderOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
