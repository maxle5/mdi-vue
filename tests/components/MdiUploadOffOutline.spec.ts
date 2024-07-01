
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUploadOffOutline from "../../src/components/MdiUploadOffOutline.vue";

test("MdiUploadOffOutline snapshot", () => {
  const wrapper = mount(MdiUploadOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
