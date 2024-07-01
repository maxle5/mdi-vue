
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderPlay from "../../src/components/MdiFolderPlay.vue";

test("MdiFolderPlay snapshot", () => {
  const wrapper = mount(MdiFolderPlay, {});
  expect(wrapper.html()).toMatchSnapshot();
});
