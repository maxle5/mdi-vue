
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUploadBox from "../../src/components/MdiUploadBox.vue";

test("MdiUploadBox snapshot", () => {
  const wrapper = mount(MdiUploadBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
