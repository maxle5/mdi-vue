
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderPound from "../../src/components/MdiFolderPound.vue";

test("MdiFolderPound snapshot", () => {
  const wrapper = mount(MdiFolderPound, {});
  expect(wrapper.html()).toMatchSnapshot();
});
