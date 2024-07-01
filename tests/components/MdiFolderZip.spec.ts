
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderZip from "../../src/components/MdiFolderZip.vue";

test("MdiFolderZip snapshot", () => {
  const wrapper = mount(MdiFolderZip, {});
  expect(wrapper.html()).toMatchSnapshot();
});
