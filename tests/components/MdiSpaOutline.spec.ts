
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSpaOutline from "../../src/components/MdiSpaOutline.vue";

test("MdiSpaOutline snapshot", () => {
  const wrapper = mount(MdiSpaOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
