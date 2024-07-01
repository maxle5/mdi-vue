
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUploadMultipleOutline from "../../src/components/MdiUploadMultipleOutline.vue";

test("MdiUploadMultipleOutline snapshot", () => {
  const wrapper = mount(MdiUploadMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
