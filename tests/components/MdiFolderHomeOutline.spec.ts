
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderHomeOutline from "../../src/components/MdiFolderHomeOutline.vue";

test("MdiFolderHomeOutline snapshot", () => {
  const wrapper = mount(MdiFolderHomeOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
