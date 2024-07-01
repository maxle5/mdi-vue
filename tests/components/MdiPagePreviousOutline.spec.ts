
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPagePreviousOutline from "../../src/components/MdiPagePreviousOutline.vue";

test("MdiPagePreviousOutline snapshot", () => {
  const wrapper = mount(MdiPagePreviousOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
