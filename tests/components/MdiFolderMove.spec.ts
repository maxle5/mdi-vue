
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderMove from "../../src/components/MdiFolderMove.vue";

test("MdiFolderMove snapshot", () => {
  const wrapper = mount(MdiFolderMove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
