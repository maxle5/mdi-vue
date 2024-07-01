
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDownloadOutline from "../../src/components/MdiDownloadOutline.vue";

test("MdiDownloadOutline snapshot", () => {
  const wrapper = mount(MdiDownloadOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
