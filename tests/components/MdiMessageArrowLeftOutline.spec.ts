
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageArrowLeftOutline from "../../src/components/MdiMessageArrowLeftOutline.vue";

test("MdiMessageArrowLeftOutline snapshot", () => {
  const wrapper = mount(MdiMessageArrowLeftOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
