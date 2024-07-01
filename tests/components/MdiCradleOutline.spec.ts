
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCradleOutline from "../../src/components/MdiCradleOutline.vue";

test("MdiCradleOutline snapshot", () => {
  const wrapper = mount(MdiCradleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
