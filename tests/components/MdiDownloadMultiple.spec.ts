
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDownloadMultiple from "../../src/components/MdiDownloadMultiple.vue";

test("MdiDownloadMultiple snapshot", () => {
  const wrapper = mount(MdiDownloadMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
