
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUploadMultiple from "../../src/components/MdiUploadMultiple.vue";

test("MdiUploadMultiple snapshot", () => {
  const wrapper = mount(MdiUploadMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
