
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderPoundOutline from "../../src/components/MdiFolderPoundOutline.vue";

test("MdiFolderPoundOutline snapshot", () => {
  const wrapper = mount(MdiFolderPoundOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
