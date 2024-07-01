
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderMusicOutline from "../../src/components/MdiFolderMusicOutline.vue";

test("MdiFolderMusicOutline snapshot", () => {
  const wrapper = mount(MdiFolderMusicOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
