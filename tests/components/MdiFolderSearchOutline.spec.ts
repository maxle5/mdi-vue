
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderSearchOutline from "../../src/components/MdiFolderSearchOutline.vue";

test("MdiFolderSearchOutline snapshot", () => {
  const wrapper = mount(MdiFolderSearchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
