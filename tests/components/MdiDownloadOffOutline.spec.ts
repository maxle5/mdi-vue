
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDownloadOffOutline from "../../src/components/MdiDownloadOffOutline.vue";

test("MdiDownloadOffOutline snapshot", () => {
  const wrapper = mount(MdiDownloadOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
