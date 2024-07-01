
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchivePlusOutline from "../../src/components/MdiArchivePlusOutline.vue";

test("MdiArchivePlusOutline snapshot", () => {
  const wrapper = mount(MdiArchivePlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
