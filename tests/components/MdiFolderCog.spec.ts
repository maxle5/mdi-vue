
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderCog from "../../src/components/MdiFolderCog.vue";

test("MdiFolderCog snapshot", () => {
  const wrapper = mount(MdiFolderCog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
