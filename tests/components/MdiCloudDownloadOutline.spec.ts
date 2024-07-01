
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudDownloadOutline from "../../src/components/MdiCloudDownloadOutline.vue";

test("MdiCloudDownloadOutline snapshot", () => {
  const wrapper = mount(MdiCloudDownloadOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
