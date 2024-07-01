
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountFilterOutline from "../../src/components/MdiAccountFilterOutline.vue";

test("MdiAccountFilterOutline snapshot", () => {
  const wrapper = mount(MdiAccountFilterOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
