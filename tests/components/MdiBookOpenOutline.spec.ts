
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookOpenOutline from "../../src/components/MdiBookOpenOutline.vue";

test("MdiBookOpenOutline snapshot", () => {
  const wrapper = mount(MdiBookOpenOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
