
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderSyncOutline from "../../src/components/MdiFolderSyncOutline.vue";

test("MdiFolderSyncOutline snapshot", () => {
  const wrapper = mount(MdiFolderSyncOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
