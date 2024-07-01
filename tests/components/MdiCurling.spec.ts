
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCurling from "../../src/components/MdiCurling.vue";

test("MdiCurling snapshot", () => {
  const wrapper = mount(MdiCurling, {});
  expect(wrapper.html()).toMatchSnapshot();
});
