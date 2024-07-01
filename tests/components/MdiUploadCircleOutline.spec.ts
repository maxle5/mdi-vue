
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUploadCircleOutline from "../../src/components/MdiUploadCircleOutline.vue";

test("MdiUploadCircleOutline snapshot", () => {
  const wrapper = mount(MdiUploadCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
