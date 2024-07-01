
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilePlusOutline from "../../src/components/MdiFilePlusOutline.vue";

test("MdiFilePlusOutline snapshot", () => {
  const wrapper = mount(MdiFilePlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
