
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudUploadOutline from "../../src/components/MdiCloudUploadOutline.vue";

test("MdiCloudUploadOutline snapshot", () => {
  const wrapper = mount(MdiCloudUploadOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
