
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBriefcaseDownload from "../../src/components/MdiBriefcaseDownload.vue";

test("MdiBriefcaseDownload snapshot", () => {
  const wrapper = mount(MdiBriefcaseDownload, {});
  expect(wrapper.html()).toMatchSnapshot();
});
