
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileDownloadOutline from "../../src/components/MdiFileDownloadOutline.vue";

test("MdiFileDownloadOutline snapshot", () => {
  const wrapper = mount(MdiFileDownloadOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
