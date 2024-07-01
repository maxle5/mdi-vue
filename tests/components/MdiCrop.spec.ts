
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCrop from "../../src/components/MdiCrop.vue";

test("MdiCrop snapshot", () => {
  const wrapper = mount(MdiCrop, {});
  expect(wrapper.html()).toMatchSnapshot();
});
