
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUploadOutline from "../../src/components/MdiUploadOutline.vue";

test("MdiUploadOutline snapshot", () => {
  const wrapper = mount(MdiUploadOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
