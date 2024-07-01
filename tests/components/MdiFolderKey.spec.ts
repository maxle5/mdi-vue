
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderKey from "../../src/components/MdiFolderKey.vue";

test("MdiFolderKey snapshot", () => {
  const wrapper = mount(MdiFolderKey, {});
  expect(wrapper.html()).toMatchSnapshot();
});
