
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderKeyNetworkOutline from "../../src/components/MdiFolderKeyNetworkOutline.vue";

test("MdiFolderKeyNetworkOutline snapshot", () => {
  const wrapper = mount(MdiFolderKeyNetworkOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
