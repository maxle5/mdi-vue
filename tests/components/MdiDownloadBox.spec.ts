
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDownloadBox from "../../src/components/MdiDownloadBox.vue";

test("MdiDownloadBox snapshot", () => {
  const wrapper = mount(MdiDownloadBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
