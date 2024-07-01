
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraDocumentOff from "../../src/components/MdiCameraDocumentOff.vue";

test("MdiCameraDocumentOff snapshot", () => {
  const wrapper = mount(MdiCameraDocumentOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
