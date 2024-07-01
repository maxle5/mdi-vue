
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDownloadMultipleOutline from "../../src/components/MdiDownloadMultipleOutline.vue";

test("MdiDownloadMultipleOutline snapshot", () => {
  const wrapper = mount(MdiDownloadMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
