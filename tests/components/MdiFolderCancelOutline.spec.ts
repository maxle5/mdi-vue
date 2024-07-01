
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderCancelOutline from "../../src/components/MdiFolderCancelOutline.vue";

test("MdiFolderCancelOutline snapshot", () => {
  const wrapper = mount(MdiFolderCancelOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
