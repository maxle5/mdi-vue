
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDownloadCircleOutline from "../../src/components/MdiDownloadCircleOutline.vue";

test("MdiDownloadCircleOutline snapshot", () => {
  const wrapper = mount(MdiDownloadCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
