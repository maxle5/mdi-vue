
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUfoOutline from "../../src/components/MdiUfoOutline.vue";

test("MdiUfoOutline snapshot", () => {
  const wrapper = mount(MdiUfoOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
