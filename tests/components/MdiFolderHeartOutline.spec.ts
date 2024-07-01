
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderHeartOutline from "../../src/components/MdiFolderHeartOutline.vue";

test("MdiFolderHeartOutline snapshot", () => {
  const wrapper = mount(MdiFolderHeartOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
