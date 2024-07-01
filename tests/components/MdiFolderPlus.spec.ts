
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderPlus from "../../src/components/MdiFolderPlus.vue";

test("MdiFolderPlus snapshot", () => {
  const wrapper = mount(MdiFolderPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
