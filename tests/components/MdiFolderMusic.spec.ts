
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderMusic from "../../src/components/MdiFolderMusic.vue";

test("MdiFolderMusic snapshot", () => {
  const wrapper = mount(MdiFolderMusic, {});
  expect(wrapper.html()).toMatchSnapshot();
});
