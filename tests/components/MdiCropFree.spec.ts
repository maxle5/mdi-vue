
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCropFree from "../../src/components/MdiCropFree.vue";

test("MdiCropFree snapshot", () => {
  const wrapper = mount(MdiCropFree, {});
  expect(wrapper.html()).toMatchSnapshot();
});
