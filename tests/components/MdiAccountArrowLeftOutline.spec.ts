
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountArrowLeftOutline from "../../src/components/MdiAccountArrowLeftOutline.vue";

test("MdiAccountArrowLeftOutline snapshot", () => {
  const wrapper = mount(MdiAccountArrowLeftOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
