
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderDownload from "../../src/components/MdiFolderDownload.vue";

test("MdiFolderDownload snapshot", () => {
  const wrapper = mount(MdiFolderDownload, {});
  expect(wrapper.html()).toMatchSnapshot();
});
