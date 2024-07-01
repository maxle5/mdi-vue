
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderDownloadOutline from "../../src/components/MdiFolderDownloadOutline.vue";

test("MdiFolderDownloadOutline snapshot", () => {
  const wrapper = mount(MdiFolderDownloadOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
