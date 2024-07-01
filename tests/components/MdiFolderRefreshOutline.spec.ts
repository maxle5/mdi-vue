
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderRefreshOutline from "../../src/components/MdiFolderRefreshOutline.vue";

test("MdiFolderRefreshOutline snapshot", () => {
  const wrapper = mount(MdiFolderRefreshOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
