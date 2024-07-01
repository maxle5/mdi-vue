
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiThumbUpOutline from "../../src/components/MdiThumbUpOutline.vue";

test("MdiThumbUpOutline snapshot", () => {
  const wrapper = mount(MdiThumbUpOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
