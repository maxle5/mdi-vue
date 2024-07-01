
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderNetworkOutline from "../../src/components/MdiFolderNetworkOutline.vue";

test("MdiFolderNetworkOutline snapshot", () => {
  const wrapper = mount(MdiFolderNetworkOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
