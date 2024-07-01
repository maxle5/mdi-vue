
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderLock from "../../src/components/MdiFolderLock.vue";

test("MdiFolderLock snapshot", () => {
  const wrapper = mount(MdiFolderLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
