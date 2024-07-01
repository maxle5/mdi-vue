
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlashOffOutline from "../../src/components/MdiFlashOffOutline.vue";

test("MdiFlashOffOutline snapshot", () => {
  const wrapper = mount(MdiFlashOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
