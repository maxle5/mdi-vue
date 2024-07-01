
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileUploadOutline from "../../src/components/MdiFileUploadOutline.vue";

test("MdiFileUploadOutline snapshot", () => {
  const wrapper = mount(MdiFileUploadOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
