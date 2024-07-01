
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountCardOutline from "../../src/components/MdiAccountCardOutline.vue";

test("MdiAccountCardOutline snapshot", () => {
  const wrapper = mount(MdiAccountCardOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
