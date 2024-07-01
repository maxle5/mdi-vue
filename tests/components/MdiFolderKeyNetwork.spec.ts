
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderKeyNetwork from "../../src/components/MdiFolderKeyNetwork.vue";

test("MdiFolderKeyNetwork snapshot", () => {
  const wrapper = mount(MdiFolderKeyNetwork, {});
  expect(wrapper.html()).toMatchSnapshot();
});
