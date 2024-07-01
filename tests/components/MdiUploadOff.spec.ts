
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUploadOff from "../../src/components/MdiUploadOff.vue";

test("MdiUploadOff snapshot", () => {
  const wrapper = mount(MdiUploadOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
