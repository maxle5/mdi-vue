
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderText from "../../src/components/MdiFolderText.vue";

test("MdiFolderText snapshot", () => {
  const wrapper = mount(MdiFolderText, {});
  expect(wrapper.html()).toMatchSnapshot();
});
