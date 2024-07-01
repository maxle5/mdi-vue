
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderOff from "../../src/components/MdiFolderOff.vue";

test("MdiFolderOff snapshot", () => {
  const wrapper = mount(MdiFolderOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
