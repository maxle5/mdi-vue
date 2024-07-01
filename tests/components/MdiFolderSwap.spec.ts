
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderSwap from "../../src/components/MdiFolderSwap.vue";

test("MdiFolderSwap snapshot", () => {
  const wrapper = mount(MdiFolderSwap, {});
  expect(wrapper.html()).toMatchSnapshot();
});
