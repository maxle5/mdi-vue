
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderInformation from "../../src/components/MdiFolderInformation.vue";

test("MdiFolderInformation snapshot", () => {
  const wrapper = mount(MdiFolderInformation, {});
  expect(wrapper.html()).toMatchSnapshot();
});
