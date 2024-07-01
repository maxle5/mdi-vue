
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBriefcaseDownloadOutline from "../../src/components/MdiBriefcaseDownloadOutline.vue";

test("MdiBriefcaseDownloadOutline snapshot", () => {
  const wrapper = mount(MdiBriefcaseDownloadOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
