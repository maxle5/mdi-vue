
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderRefresh from "../../src/components/MdiFolderRefresh.vue";

test("MdiFolderRefresh snapshot", () => {
  const wrapper = mount(MdiFolderRefresh, {});
  expect(wrapper.html()).toMatchSnapshot();
});
