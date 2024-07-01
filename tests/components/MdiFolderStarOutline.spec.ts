
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderStarOutline from "../../src/components/MdiFolderStarOutline.vue";

test("MdiFolderStarOutline snapshot", () => {
  const wrapper = mount(MdiFolderStarOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
