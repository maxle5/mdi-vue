
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderNetwork from "../../src/components/MdiFolderNetwork.vue";

test("MdiFolderNetwork snapshot", () => {
  const wrapper = mount(MdiFolderNetwork, {});
  expect(wrapper.html()).toMatchSnapshot();
});
