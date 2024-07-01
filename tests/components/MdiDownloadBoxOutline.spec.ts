
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDownloadBoxOutline from "../../src/components/MdiDownloadBoxOutline.vue";

test("MdiDownloadBoxOutline snapshot", () => {
  const wrapper = mount(MdiDownloadBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
