
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDownloadOff from "../../src/components/MdiDownloadOff.vue";

test("MdiDownloadOff snapshot", () => {
  const wrapper = mount(MdiDownloadOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
