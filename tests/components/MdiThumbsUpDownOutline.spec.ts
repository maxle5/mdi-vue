
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiThumbsUpDownOutline from "../../src/components/MdiThumbsUpDownOutline.vue";

test("MdiThumbsUpDownOutline snapshot", () => {
  const wrapper = mount(MdiThumbsUpDownOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
