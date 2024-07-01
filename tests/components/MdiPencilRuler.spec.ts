
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPencilRuler from "../../src/components/MdiPencilRuler.vue";

test("MdiPencilRuler snapshot", () => {
  const wrapper = mount(MdiPencilRuler, {});
  expect(wrapper.html()).toMatchSnapshot();
});
