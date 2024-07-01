
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContentSaveOffOutline from "../../src/components/MdiContentSaveOffOutline.vue";

test("MdiContentSaveOffOutline snapshot", () => {
  const wrapper = mount(MdiContentSaveOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
