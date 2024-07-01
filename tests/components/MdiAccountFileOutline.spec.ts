
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountFileOutline from "../../src/components/MdiAccountFileOutline.vue";

test("MdiAccountFileOutline snapshot", () => {
  const wrapper = mount(MdiAccountFileOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
