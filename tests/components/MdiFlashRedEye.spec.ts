
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlashRedEye from "../../src/components/MdiFlashRedEye.vue";

test("MdiFlashRedEye snapshot", () => {
  const wrapper = mount(MdiFlashRedEye, {});
  expect(wrapper.html()).toMatchSnapshot();
});
