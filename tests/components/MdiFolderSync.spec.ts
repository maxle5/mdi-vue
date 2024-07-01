
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderSync from "../../src/components/MdiFolderSync.vue";

test("MdiFolderSync snapshot", () => {
  const wrapper = mount(MdiFolderSync, {});
  expect(wrapper.html()).toMatchSnapshot();
});
