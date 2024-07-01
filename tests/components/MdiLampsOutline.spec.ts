
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLampsOutline from "../../src/components/MdiLampsOutline.vue";

test("MdiLampsOutline snapshot", () => {
  const wrapper = mount(MdiLampsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
