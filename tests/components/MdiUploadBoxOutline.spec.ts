
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUploadBoxOutline from "../../src/components/MdiUploadBoxOutline.vue";

test("MdiUploadBoxOutline snapshot", () => {
  const wrapper = mount(MdiUploadBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
