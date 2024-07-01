
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailArrowLeftOutline from "../../src/components/MdiEmailArrowLeftOutline.vue";

test("MdiEmailArrowLeftOutline snapshot", () => {
  const wrapper = mount(MdiEmailArrowLeftOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
