
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiApplicationOutline from "../../src/components/MdiApplicationOutline.vue";

test("MdiApplicationOutline snapshot", () => {
  const wrapper = mount(MdiApplicationOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
