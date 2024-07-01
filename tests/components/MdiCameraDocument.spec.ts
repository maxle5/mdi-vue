
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraDocument from "../../src/components/MdiCameraDocument.vue";

test("MdiCameraDocument snapshot", () => {
  const wrapper = mount(MdiCameraDocument, {});
  expect(wrapper.html()).toMatchSnapshot();
});
